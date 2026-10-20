# Active Context

## Current Focus (2026-10-20) — DONE: Trilingual post `ai-entrepreneurship-from-childhood`
New blog post id 10 (slug `ai-entrepreneurship-from-childhood`, «چرا باید کارآفرینی هوش مصنوعی را از کودکی یاد گرفت؟») live in all 3 locales:
- **FA** (base): `data/blog.ts` top of `BLOG_POSTS` (+344 lines) — hero answer, CTA1 → `/fa/contact`, 7 H2 sections with front-loaded answers (`border-r-4`), comparison table, CTA2, 5 pitfalls, voice-search Q&As, value bridge, CTA3 → `/fa/contact`, FAQ ×5 (HTML + meta array), author box.
- **EN + AR**: `data/translations/blog/aiEntrepreneurship.ts` (new file, ~700 lines) — full `en` + `ar` blocks, `fa: {}` placeholder (REQUIRED — tsc fails without it, `Record<Locale,…>` demands all keys). EN `border-l-4`/`pl-6`; AR root `dir="rtl"`, CTAs → `/contact`, `/ar/contact`.
- **Registration**: import + `BLOG_TRANSLATIONS["ai-entrepreneurship-from-childhood"]` + `BLOG_DATE_TRANSLATIONS["۲۸ مهر ۱۴۰۵"]` (en: October 20, 2026 / ar: ٢٠ أكتوبر ٢٠٢٦) in `data/translations/blog.ts`.
- Citations in all locales: WEF Future of Jobs Report 2025 + UNESCO AI competency frameworks (external, `rel="noopener noreferrer"`).

Validation: `npx tsc --noEmit` clean · `npm run lint` PASS · `npm run build` PASS (90 static pages incl. `/en|/fa|/ar/blog/ai-entrepreneurship-from-childhood`; sitemap auto-includes them) · DoD gate PASS (ran=3 failed=0 skipped=1 — project has no test script). Committed `4ec334f`, pushed to `origin/main` (Vercel auto-deploys).

Build-run gotcha (refined): long builds are ^C'd only when a NEW foreground terminal command starts; redirect build output to a log file and poll via FILE READS ONLY — the build completes safely (verified twice this session; the 2026-10-03 "run detached" advice is a fallback, not required).

## State
- Blog now has 10 posts, `ai-entrepreneurship-from-childhood` complete in fa/en/ar.
- All generated SEO URLs (canonical, hreflang, og:url, sitemap, robots, JSON-LD) are www.
- Working tree clean; all logs/temp files removed.

## Next Steps (user actions in GSC)
- Sitemaps → `https://www.diginoron.com/sitemap.xml` (if not yet submitted); URL Inspection → `https://www.diginoron.com/blog/ai-entrepreneurship-from-childhood` (+ `/fa/…`, `/ar/…` variants) → Request Indexing.
- ⚠️ Never delete `public/google4a7072231d8721be.html` — Google re-verifies periodically; losing the file drops verification.
- Note: `seo/` folder holds user's own `SEO_GEO_AEO_CONTENT_SKILL.md` (not committed; unrelated to app build).

## Active Decisions
- Title/keywords chosen by Cline per user instruction (user delegated wording).
- JSON-LD left to the page-level generator (site convention) instead of duplicating schema inside content.
- Lint gate failures from pre-existing unrelated errors are fixed minimally (cast-level), never refactored.
- AR/FA front-loaded answers use `border-r-4` + `pr-6` + `text-right`; EN mirrors with `border-l-4` + `pl-6`.
