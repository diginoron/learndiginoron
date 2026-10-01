# Active Context

## Current Focus (2026-10-01)
Article **human-vs-ai-war** is COMPLETE, validated and shipped: FA content (~1700 words) in `data/blog.ts`, EN translation in `data/translations/blog/humanVsAiWar.ts` (+ `fa: {}`/`ar: {}` stubs to satisfy `Record<Locale, ...>`), registered in `data/translations/blog.ts` with date map.

## State
- Validation green: `npm run lint` → 0 errors; `npm run build` → success, 87 static pages incl. `/en/blog/human-vs-ai-war`; sitemap auto-generated.
- Fixed a PRE-EXISTING lint error in `data/translations/courses.ts` line 625 (`as any` → `as Course["level"]`) — it blocked the lint gate (unrelated file, minimal fix, runtime behavior unchanged).
- Git: committed and pushed to `origin/main`.
- Temp validation files (`lint-output*.txt`, `build-output.txt`) deleted after use.

## Next Steps
- Optional future: Arabic translation for the new post (site supports `ar`; only en/fa were requested).

## Active Decisions
- Title/keywords chosen by Cline per user instruction (user delegated wording).
- JSON-LD left to the page-level generator (site convention) instead of duplicating schema inside content.
- Lint gate failures from pre-existing unrelated errors are fixed minimally (cast-level), never refactored.
