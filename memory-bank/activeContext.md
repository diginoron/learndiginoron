# Active Context

## Current Focus (2026-10-01) — RESOLVED: canonical domain standardized on www
User hit GSC error **"URL not in property"** inspecting `https://www.diginoron.com/blog/human-vs-ai-war`. Diagnosis: Vercel serves on `www.diginoron.com` (apex 308→www) while code generated non-www canonical/sitemap (fallback `"https://diginoron.com"`). GSC error itself is property-scope (URL-prefix property rejects the other www/non-www variant).
**Decision (user-approved): standardize on www.** Done:
- `lib/i18n.ts:47` + `app/robots.ts:3`: fallback → `https://www.diginoron.com`
- All 31 hardcoded non-www URLs → www (held-courses canonical, internal links in `data/blog.ts` + 8 EN translation files)
- DoD PASS (`ran=3 failed=0 skipped=1`), committed & pushed; Vercel auto-deploys from main.

## State
- Article **human-vs-ai-war** complete, committed (`01b1846`), pushed, DoD PASS.
- All generated SEO URLs (canonical, hreflang, og:url, sitemap, robots, JSON-LD) now www.
- Verified: zero remaining non-www occurrences in `app/`, `data/`, `lib/` (31 www occurrences).
- Live check: page 200 (www), FAQ JSON-LD present, no noindex, in sitemap.

## Next Steps (user actions in GSC after deploy)
- Add/verify **Domain property** `diginoron.com` (DNS TXT) — recommended so both variants work in URL Inspection.
- Submit sitemap `https://www.diginoron.com/sitemap.xml` (under the www URL-prefix property or domain property).
- Request indexing for `https://www.diginoron.com/blog/human-vs-ai-war` (the final non-redirecting URL).
- Optional: Arabic translation for the new post (site supports `ar`).

## Active Decisions
- Title/keywords chosen by Cline per user instruction (user delegated wording).
- JSON-LD left to the page-level generator (site convention) instead of duplicating schema inside content.
- Lint gate failures from pre-existing unrelated errors are fixed minimally (cast-level), never refactored.
