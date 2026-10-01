# Progress — DigiNoron

## What works (discovered 2026-10-01)
- Trilingual site (en/fa/ar) with 8 blog posts, courses, held courses, services, about, contact.
- Auto sitemap, hreflang alternates, page-level JSON-LD (Article/FAQPage/Breadcrumbs).
- 8 posts have EN translations (some also AR) via `data/translations/blog/*`.

## Completed Tasks (log)
- 2026-10-01: Diagnosed GSC "URL not in property" → found canonical/www mismatch (Vercel serves www, code emitted non-www). Standardized all 31 site URLs on `https://www.diginoron.com` (`lib/i18n.ts`, `app/robots.ts`, held-courses canonical, content links). DoD PASS; committed & pushed.
- 2026-10-01: Bootstrap `GUIDE.md` + `memory-bank/`. Added bilingual article `human-vs-ai-war` (FA base in `data/blog.ts`, EN in `data/translations/blog/humanVsAiWar.ts`, registered + date-mapped in `data/translations/blog.ts`). Sitemap auto-includes it on next build.
- 2026-10-01: Completed & validated `human-vs-ai-war`: full FA/EN content (~1700 words, 3 CTAs, comparison table, FAQ ×5, author box). Lint 0 errors (fixed pre-existing `as any` in `data/translations/courses.ts`), build OK (87 pages, article present in SSG output), committed & pushed. Site now has 9 blog posts.

## Remaining / Known Issues
- Arabic translations missing for the new post (site supports ar; only en/fa requested).
- Reusing existing images instead of dedicated artwork for new posts (no image generation pipeline in repo).
