# Progress — DigiNoron

## What works (discovered 2026-10-01)
- Trilingual site (en/fa/ar) with 8 blog posts, courses, held courses, services, about, contact.
- Auto sitemap, hreflang alternates, page-level JSON-LD (Article/FAQPage/Breadcrumbs).
- 8 posts have EN translations (some also AR) via `data/translations/blog/*`.

## Completed Tasks (log)
- 2026-10-01: GSC setup: user created www URL-prefix property; Google HTML verification file deployed to `public/google4a7072231d8721be.html` (must stay permanently). Live-checked 200 + correct content.
- 2026-10-01: Diagnosed GSC "URL not in property" → found canonical/www mismatch (Vercel serves www, code emitted non-www). Standardized all 31 site URLs on `https://www.diginoron.com` (`lib/i18n.ts`, `app/robots.ts`, held-courses canonical, content links). DoD PASS; committed & pushed.
- 2026-10-01: Bootstrap `GUIDE.md` + `memory-bank/`. Added bilingual article `human-vs-ai-war` (FA base in `data/blog.ts`, EN in `data/translations/blog/humanVsAiWar.ts`, registered + date-mapped in `data/translations/blog.ts`). Sitemap auto-includes it on next build.
- 2026-10-01: Completed & validated `human-vs-ai-war`: full FA/EN content (~1700 words, 3 CTAs, comparison table, FAQ ×5, author box). Lint 0 errors (fixed pre-existing `as any` in `data/translations/courses.ts`), build OK (87 pages, article present in SSG output), committed & pushed. Site now has 9 blog posts.

- 2026-10-03: Arabic translation of `human-vs-ai-war` completed: full `ar` block (content + FAQ ×5) in `data/translations/blog/humanVsAiWar.ts`, author role in `BLOG_AUTHOR_ROLE_TRANSLATIONS`. Lint PASS, build PASS (87 pages), sitemap auto-includes `/ar/blog/human-vs-ai-war`. Committed `d449fed` & pushed. Build-run gotcha: long foreground builds are ^C'd by subsequent terminal calls — run detached via `Start-Process -WindowStyle Hidden` + poll exit-code file.

## Remaining / Known Issues
- Reusing existing images instead of dedicated artwork for new posts (no image generation pipeline in repo).
