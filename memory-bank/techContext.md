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
- `NEXT_PUBLIC_SITE_URL` env → defaults to `https://diginoron.com`.
- No backend/DB; all content in TS data files; images under `public/images/...`.
- Git repo present; deploy target implied by SITE_URL (diginoron.com).
- DoD gate script: `powershell -NoProfile -ExecutionPolicy Bypass -File "C:\Users\Asus\OneDrive\Documents\Cline\Scripts\cassher-dod.ps1"`
