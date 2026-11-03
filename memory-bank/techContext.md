# Tech Context — DigiNoron

## Stack
- Next.js 15.1 (App Router, async params), React 19, TypeScript 5 (strict), Tailwind CSS 4 (PostCSS).
- Deps: lucide-react, framer-motion, clsx, tailwind-merge.

## Commands
- Dev: `npm run dev`
- Validate: `npm run lint` (eslint) + `npm run build` (next build — includes type checking)
- Start: `npm start`

## Setup / Constraints
- Windows dev environment; PowerShell.
- `NEXT_PUBLIC_SITE_URL` env → defaults to `https://www.diginoron.com` (canonical domain = www; Vercel primary is www, apex 308-redirects to it).
- No backend/DB; all content in TS data files; images under `public/images/...`.
- Git repo present; deploy: Vercel auto-deploys from `main` (`VERCEL_DEPLOYMENT_GUIDE.md`).
- DoD gate script: `powershell -NoProfile -ExecutionPolicy Bypass -File "C:\Users\Asus\OneDrive\Documents\Cline\Scripts\cassher-dod.ps1"`
- DoD gate project config: `dod.config.json` at repo root — `"noindexPages"` lists non-indexable pages (`path` + `forbiddenLocales`); the gate's postbuild step FAILS if a declared page loses its noindex meta, lands in the sitemap, or prerenders for a forbidden locale. Add every new noindex page there.
- Repo CI (GitHub Actions): `.github/workflows/ci.yml` on `diginoron/learndiginoron` runs the same gate portably on push/PR → `npm ci → lint → build → node scripts/verify-build.mjs` (`scripts/verify-build.mjs`, npm script `verify:build`). Extend `verify-build.mjs` (not the Windows-only runner) for checks that must also run in CI.
- Terminal returns no output in this environment → run PowerShell scripts via a wrapper in `scratch/` with `Start-Transcript` to a log file, then read the log (rule 14).
