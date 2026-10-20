# Active Context

## Current Focus (2026-10-20) — DONE: Course page `generative-ai-for-executives` enriched (fa/en/ar)
- **Syllabus**: 4 topics → 10 topics in `data/courses.ts` (FA base) + en/ar blocks of `data/translations/courses.ts`: AI fundamentals, AI model types, professional AI usage beyond chatbots, prompt engineering for org units, agents concept-to-build, hands-on agent with Vibe Coding, multi-agent systems, AI tooling, organizational challenges & solutions, practical smart-organization guide.
- **Sessions row**: now localized text instead of a bare number — `Course.sessionsCount: number | string`, optional `sessionsCount?: string` in `CourseTranslation`, wired through `getLocalizedCourse`. FA: «۴ جلسه ۲ ساعته یا ۲ جلسه ۴ ساعته» · EN: "4 two-hour sessions or 2 four-hour sessions" · AR: «٤ جلسة مدة كل منها ساعتان، أو جلستان مدة كل منهما ٤ ساعات».
- **Instructor avatar**: `rezaei.jpg` → generated `public/images/instructors/avatar.png` (white head-and-shoulders silhouette on cyan→indigo gradient, drawn with System.Drawing; PNG chosen so `next/image` works without `dangerouslyAllowSVG`). Other courses/blog posts still use `rezaei.jpg` — only this course changed (user scoped request to this page).

Validation: tsc EXIT 0 · lint EXIT 0 · build EXIT 0 (90 pages) · DoD PASS (ran=3 failed=0 skipped=1) · rendered-output check on built HTML for fa/en/ar: 10 topic cards each, localized sessions strings, avatar.png in img srcSet, zero `rezaei.jpg` references.

Build-run gotcha (refined): long builds are ^C'd only when a NEW foreground terminal command starts; redirect build output to a log file and poll via FILE READS ONLY — the build completes safely.

## State
- Blog has 10 posts; course `generative-ai-for-executives` updated in all 3 locales.
- All generated SEO URLs (canonical, hreflang, og:url, sitemap, robots, JSON-LD) are www.
- Prior session's doc bookkeeping committed separately (`9528e69`).

## Next Steps (user actions in GSC)
- Sitemaps → `https://www.diginoron.com/sitemap.xml` (if not yet submitted); URL Inspection → `https://www.diginoron.com/fa/courses/generative-ai-for-executives` (+ `/en/…`, `/ar/…` variants) → Request Indexing.
- ⚠️ Never delete `public/google4a7072231d8721be.html` — Google re-verifies periodically; losing the file drops verification.
- Note: `seo/` folder holds user's own `SEO_GEO_AEO_CONTENT_SKILL.md` (not committed; unrelated to app build).

## Active Decisions
- Title/keywords chosen by Cline per user instruction (user delegated wording).
- JSON-LD left to the page-level generator (site convention) instead of duplicating schema inside content.
- Lint gate failures from pre-existing unrelated errors are fixed minimally (cast-level), never refactored.
- AR/FA front-loaded answers use `border-r-4` + `pr-6` + `text-right`; EN mirrors with `border-l-4` + `pl-6`.
- Instructor photo kept only where user asked for removal (per-page scope); ask before touching other courses/blog posts.
