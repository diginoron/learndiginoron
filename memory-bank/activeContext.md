# Active Context

## Current Focus (2026-10-03) — DONE: Arabic translation of `human-vs-ai-war`
Full `ar` content inserted in `data/translations/blog/humanVsAiWar.ts` (lines ~366–709): title/excerpt/category/readTime/tags, hero answer, CTA 1, Sections 1–2 (five-mechanism `<ol>`), voice-search section (SIPRI link), fear-shift section (ICRC link), 6-row comparison table, CTA 2 (→ `/ar/contact`), 4-pitfalls section, Sections 6–7, CTA 3, FAQ ×5 array (feeds JSON-LD FAQPage + metadata), author profile box. Author role added to `BLOG_AUTHOR_ROLE_TRANSLATIONS` in `data/translations/blog.ts` (ar: "أكثر من ٥ سنوات من الخبرة في مشاريع الذكاء الاصطناعي").
Validation: lint PASS, build #4 PASS (87 pages, route summary OK), sitemap contains `/ar/blog/human-vs-ai-war`. Committed `d449fed`, pushed to `origin/main` (Vercel auto-deploys).
Gotcha learned: foreground long builds are killed (^C) when the next terminal command starts → run builds detached (`Start-Process -WindowStyle Hidden`) writing the exit code to a temp file, then poll.

## State
- Article **human-vs-ai-war** complete in fa/en/**ar**; latest commit pushed, DoD verified.
- All generated SEO URLs (canonical, hreflang, og:url, sitemap, robots, JSON-LD) are www.
- Sitemap verified in build output: ar blog URL present.

## Next Steps (user actions in GSC)
- After Verify: Sitemaps → `https://www.diginoron.com/sitemap.xml` → Submit; then URL Inspection → `https://www.diginoron.com/blog/human-vs-ai-war` (and optionally `/ar/blog/human-vs-ai-war`) → Request Indexing.
- ⚠️ Never delete `public/google4a7072231d8721be.html` — Google re-verifies periodically; losing the file drops verification.
- Note: `seo/` folder holds user's own `SEO_GEO_AEO_CONTENT_SKILL.md` (not committed; unrelated to app build).

## Active Decisions
- Title/keywords chosen by Cline per user instruction (user delegated wording).
- JSON-LD left to the page-level generator (site convention) instead of duplicating schema inside content.
- Lint gate failures from pre-existing unrelated errors are fixed minimally (cast-level), never refactored.
