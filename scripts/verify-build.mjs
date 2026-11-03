#!/usr/bin/env node
/**
 * Portable build-output quality gate (runs locally and in GitHub Actions CI).
 * Mirrors the postbuild checks of the local DoD runner (cassher-dod.ps1):
 *   1. canonical link presence across prerendered content pages
 *   2. built sitemap artifact exists when a sitemap source is defined
 *   3. noindex invariant - any page with a robots noindex meta must NOT be
 *      in the built sitemap
 *   4. dod.config.json "noindexPages" - declared pages must ship their
 *      noindex meta, stay out of the sitemap, and must not prerender as the
 *      real page (noindex, nofollow) for any forbidden locale
 * Exit 0 = pass, exit 1 = problems found.
 */
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join, relative, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const baseDirs = [join(root, '.next', 'server', 'app'), join(root, 'out')];
const baseDir = baseDirs.find((d) => existsSync(d) && statSync(d).isDirectory());
const problems = [];
const warnings = [];

if (!baseDir) {
  console.log('[SKIP] no build output (.next/server/app or out/) - nothing to verify');
  process.exit(0);
}

const SITEMAP_CANDIDATES = [
  join(baseDir, 'sitemap.xml.body'),
  join(baseDir, 'sitemap.xml'),
  join(baseDir, 'out', 'sitemap.xml'),
  join(root, 'public', 'sitemap.xml'),
];

// Collect prerendered HTML pages (exclude Next internals like _not-found)
function collectHtml(dir, acc = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) collectHtml(p, acc);
    else if (e.name.endsWith('.html') && !e.name.startsWith('_')) acc.push(p);
  }
  return acc;
}
const htmlFiles = collectHtml(baseDir);
if (htmlFiles.length === 0) {
  console.log('[SKIP] no prerendered HTML pages in build output');
  process.exit(0);
}

const NOINDEX_META_RE =
  /<meta[^>]*name=["']robots["'][^>]*noindex|<meta[^>]*noindex[^>]*name=["']robots["']/;
const NOINDEX_NOFOLLOW_RE =
  /<meta[^>]*name=["']robots["'][^>]*content=["'][^"']*noindex[^"']*follow|<meta[^>]*content=["'][^"']*noindex[^"']*follow[^"']*name=["']robots["']/;
const CANONICAL_RE = /rel=["']canonical["']/;

// Built sitemap body (needed by checks 3 and 4)
let sitemapBody = null;
for (const c of SITEMAP_CANDIDATES) {
  if (existsSync(c)) {
    sitemapBody = readFileSync(c, 'utf8');
    break;
  }
}

function routeOf(htmlPath) {
  let route = relative(baseDir, htmlPath).replace(/\\/g, '/');
  route = route.replace(/\.html$/, '');
  if (route === 'index') route = '';
  return route;
}

// 1. Canonical links: FAIL only when NO content page has one (silent-absence bug)
const missingCanonical = [];
for (const h of htmlFiles) {
  if (!CANONICAL_RE.test(readFileSync(h, 'utf8'))) missingCanonical.push(routeOf(h));
}
if (missingCanonical.length === htmlFiles.length) {
  problems.push(
    `canonical: 0/${htmlFiles.length} HTML pages have a canonical link (silent-absence SEO bug - check metadata alternates render)`
  );
} else if (missingCanonical.length > 0) {
  warnings.push(`canonical missing on ${missingCanonical.length} page(s): ${missingCanonical.slice(0, 6).join(', ')}`);
}

// 2. Built sitemap must exist when the project defines a sitemap source
const sitemapSources = ['app/sitemap.ts', 'app/sitemap.js', 'app/sitemap.xml.ts', 'app/sitemap.xml.js'];
const hasSitemapSource = sitemapSources.some((s) => existsSync(join(root, s)));
if (hasSitemapSource && !sitemapBody) {
  problems.push('sitemap: sitemap.ts/js source found but no built sitemap artifact');
}

// 3. Noindex invariant: noindex pages must NOT be listed in the built sitemap
for (const h of htmlFiles) {
  const raw = readFileSync(h, 'utf8');
  if (!NOINDEX_META_RE.test(raw)) continue;
  const route = routeOf(h);
  if (route !== '' && sitemapBody && sitemapBody.includes(route)) {
    problems.push(`noindex: page '${route}' has a noindex meta but IS listed in the built sitemap`);
  }
}

// 4. Config-declared noindex pages (dod.config.json -> "noindexPages")
const cfgPath = join(root, 'dod.config.json');
if (existsSync(cfgPath)) {
  let cfg = null;
  try {
    cfg = JSON.parse(readFileSync(cfgPath, 'utf8'));
  } catch {
    problems.push('dod.config.json is not valid JSON');
  }
  const entries = cfg && Array.isArray(cfg.noindexPages) ? cfg.noindexPages : [];
  for (const entry of entries) {
    const entryObj = typeof entry === 'string' ? { path: entry } : entry;
    const pagePath = String(entryObj.path || '').replace(/^[/\\]+|[/\\]+$/g, '');
    if (!pagePath) continue;
    const forbidden = Array.isArray(entryObj.forbiddenLocales) ? entryObj.forbiddenLocales.map(String) : [];

    const pageHtml = join(baseDir, `${pagePath}.html`);
    if (!existsSync(pageHtml)) {
      problems.push(`noindex: declared page '${pagePath}' was not found in the build output (expected ${pagePath}.html)`);
    } else if (!NOINDEX_META_RE.test(readFileSync(pageHtml, 'utf8'))) {
      problems.push(`noindex: declared page '${pagePath}' lost its noindex robots meta in the build output`);
    }
    if (sitemapBody && sitemapBody.includes(pagePath)) {
      problems.push(`noindex: declared page '${pagePath}' IS listed in the built sitemap`);
    }

    // Forbidden-locale variants: fail only if prerendered as the real page
    // (noindex, nofollow meta). Next's own 404 prerenders carry a plain
    // "noindex" - that is not a broken locale guard. All locales in this
    // project are prefixed (en/... exists); also probe the unprefixed
    // default-locale location for portability.
    const base = pagePath.replace(/^[A-Za-z]{2}(-[A-Za-z]{2})?\//, '');
    for (const loc of forbidden) {
      for (const cand of [join(baseDir, loc, `${base}.html`), join(baseDir, `${base}.html`)]) {
        if (!existsSync(cand)) continue;
        if (NOINDEX_NOFOLLOW_RE.test(readFileSync(cand, 'utf8'))) {
          problems.push(
            `noindex: page '${pagePath}' also rendered as the real (noindex,nofollow) page for forbidden locale '${loc}' - locale guard (notFound) broken?`
          );
        }
      }
    }
  }
}

for (const w of warnings) console.log(`[WARN] ${w}`);
if (problems.length > 0) {
  for (const p of problems) console.error(`[FAIL] ${p}`);
  console.error(`VERIFY-BUILD: FAIL (${problems.length} problem(s), ${htmlFiles.length} pages)`);
  process.exit(1);
}
console.log(`[OK] verify-build (${htmlFiles.length} HTML pages, canonical + sitemap + noindex checks passed)`);
console.log('VERIFY-BUILD: PASS');
