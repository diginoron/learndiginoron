# DigiNoron (diginoron.com) — Project Guide

Bilingual/trilingual (EN/FA/AR) corporate website of **DigiNoron AI Academy**: AI courses for kids & teens, corporate AI training and enterprise AI projects, plus an SEO-driven AI magazine (blog).

## Tech Stack
- Next.js 15 (App Router) + React 19 + TypeScript (strict) + Tailwind CSS 4
- lucide-react, framer-motion, clsx, tailwind-merge
- Commands: `npm run dev` / `npm run build` / `npm run lint`

## Architecture
- `app/[locale]/...` — localized pages; locales: `en` (root, default), `fa`, `ar` (`lib/i18n.ts`)
- Blog is data-driven (no DB):
  - `data/blog.ts` — `BLOG_POSTS`; **Persian is the base content**; `content` is an HTML string with Tailwind classes
  - `data/translations/blog.ts` — `BLOG_TRANSLATIONS` registry (slug → per-locale `Partial<BlogTranslation>`), `BLOG_DATE_TRANSLATIONS`, author maps, `getLocalizedPost()`
  - Per-article EN translations: `data/translations/blog/<slugName>.ts`
  - Blog detail page (`app/[locale]/blog/[slug]/page.tsx`) auto-injects JSON-LD `@graph` (BreadcrumbList + Article + FAQPage) — do NOT add manual schema inside content
- `app/sitemap.ts` — sitemap auto-generated from `BLOG_POSTS`/`COURSES` (lastModified = build date; adding a post is enough)
- Images: `public/images/blog/*.jpg` (reuse existing images when no new asset is available)

## Content Conventions (new blog post checklist)
1. Add the post object to the **top** of `BLOG_POSTS` in `data/blog.ts`: id, slug, title (FA), excerpt, content HTML (hero answer → CTA1 → H2 sections with 40-60 word front-loaded answers → H3/H4 subs → comparison table → CTA2 → pitfalls → voice-search Q&As → CTA3 → FAQ HTML ×5 → author box) and a `faq` meta array ×5.
2. Create `data/translations/blog/<SlugName>.ts` with the `en` translation (title, excerpt, categoryName, readTime, tags, content, faq).
3. Register in `data/translations/blog.ts`: import + `BLOG_TRANSLATIONS` entry + `BLOG_DATE_TRANSLATIONS` entry (Jalali date → en/ar).
4. CTA target: `/contact` (EN content) / `/fa/contact` (FA content). Internal links: `/blog/...` (EN) / `/fa/blog/...` (FA). External links: 2+ with `target="_blank" rel="noopener noreferrer"`.
5. FA/AR content styling: front-loaded answers use `border-r-4` (RTL); EN uses `border-l-4`. AR content root div carries `dir="rtl"`.
6. Validate: `npm run lint` && `npm run build`, then git commit + push.
7. Content pipeline: use the `seo-content-masterclass` skill; brand profile: `memory-bank/blog-profile.md`.

## Recent Changes
- 2026-10-03: **Arabic translation for `human-vs-ai-war`** — full `ar` block in `data/translations/blog/humanVsAiWar.ts` (title/excerpt/category/readTime/tags, hero answer, 3 CTAs → `/ar/contact`, 7 sections w/ front-loaded answers, comparison table, 4 pitfalls, voice-search section, FAQ ×5 array feeding JSON-LD, author box) + author role in `BLOG_AUTHOR_ROLE_TRANSLATIONS` (`data/translations/blog.ts`). Build PASS (87 pages incl. `/ar/blog/human-vs-ai-war`); sitemap auto-includes the ar URL (LOCALES loop — no manual edit needed). Lint PASS. Committed `d449fed` & pushed. ⚠️ Long builds get ^C'd by the next terminal call — run detached: `Start-Process -WindowStyle Hidden <cmd file that runs npm run build and writes exit code to %TEMP%>`, then poll the exit-code file.
- 2026-10-01: **GSC verification (www URL-prefix property)** — user created property `https://www.diginoron.com` and obtained the HTML verification file; moved it to `public/google4a7072231d8721be.html` (commit `df1d408`, live: HTTP 200 + correct body). ⚠️ NEVER delete this file — Google re-checks periodically and verification is lost without it. Next: user clicks Verify, then submits sitemap + Request Indexing.
- 2026-10-01: **Canonical domain standardized on www** — Vercel serves on `www.diginoron.com` (apex 308-redirects to www), but code generated non-www URLs. Changed fallback `SITE_URL`/`BASE_URL` to `https://www.diginoron.com` in `lib/i18n.ts` + `app/robots.ts` and replaced all 31 hardcoded `https://diginoron.com` occurrences (canonical in held-courses page + internal `<a href>` links in `data/blog.ts` and 8 EN translation files). DoD PASS. GSC "URL not in property" was property-scope: inspect the variant matching the property, or better add a Domain property (DNS TXT). Sitemap to (re)submit: `https://www.diginoron.com/sitemap.xml`.
- 2026-10-01: Diagnosed GSC "URL not in property" for the new post → live site 308-redirects `diginoron.com` → `www.diginoron.com` (Vercel primary = www) while `lib/i18n.ts` / `app/robots.ts` generate canonical+sitemap as non-www (`https://diginoron.com`). Pending decision: standardize on www (code fallback change) or non-www (Vercel domain dashboard), or verify a GSC Domain property. Until fixed, inspect in GSC the variant matching the property.
- 2026-10-01: Bootstrapped `GUIDE.md` + `memory-bank/`. Added bilingual (FA/EN) article `human-vs-ai-war` (جنگ انسان و هوش مصنوعی): `data/blog.ts`, `data/translations/blog/humanVsAiWar.ts`, registry + date map in `data/translations/blog.ts`. Sitemap auto-updates from data.
- 2026-10-01: Completed full FA/EN content for `human-vs-ai-war` (~1700 words each; hero answer, 3 CTAs, 40-60 word front-loaded answers, comparison table, FAQ ×5, author box). Validation green: `npm run lint` 0 errors, `npm run build` success (87 pages incl. `/en/blog/human-vs-ai-war`). Fixed pre-existing lint error in `data/translations/courses.ts` (`as any` → `as Course["level"]`) that blocked the lint gate.
