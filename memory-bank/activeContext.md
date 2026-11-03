# Active Context

## Current Focus (2026-11-03) — DONE: GitHub Actions quality gate (repo-level)
- **Why**: user: «گیت هنوز اپدیت نشده» → meant the GitHub repo `diginoron/learndiginoron` — the DoD gate lived only locally (Windows-only script outside the repo).
- **What**: `.github/workflows/ci.yml` (push/PR → main: npm ci → lint → build → `node scripts/verify-build.mjs`); `scripts/verify-build.mjs` = portable no-deps mirror of the gate's postbuild checks (canonical, sitemap artifact, noindex⇄sitemap invariant, `dod.config.json` noindexPages incl. forbiddenLocales real-page detection via `noindex, nofollow`). npm script `verify:build` added.
- **Validation**: `node scripts/verify-build.mjs` → `[OK] verify-build (111 HTML pages ...)` EXIT=0; `npm run lint` → 0 errors (fixed the one warning: unused `locale` in `course-requirements` generateMetadata, now early-returns `{}` for invalid locales). Full DoD gate re-run before commit.
- **State**: changes committed (2 commits) and pushed to `main` — GitHub now runs the same gate on every push/PR. NOTE: `data/translations/blog/banksBlockAiAgents.ts` had a pre-existing uncommitted modification NOT belonging to this task — left unstaged.

## Previous Focus (2026-11-03) — DONE: DoD gate extended with NOINDEX checks
- **What**: global runner `C:\Users\Asus\OneDrive\Documents\Cline\Scripts\cassher-dod.ps1` postbuild step extended (user: «گیت رو اپدیت کن», covered by standing Gate-extension mandate): (a) invariant — any prerendered HTML with a `robots noindex` meta must NOT be in the built sitemap; (b) config-driven — `dod.config.json` at project root (`"noindexPages": [{ "path": ..., "forbiddenLocales": [...] }]`): declared pages must ship the noindex meta in build output, stay out of the sitemap, and must not prerender for forbidden locales — catches broken `notFound()` locale guards.
- **Project config**: `dod.config.json` created at repo root, seeded with `fa/course-requirements` (forbidden: en, ar). Every future noindex page just gets an entry there.
- **Debug story (rule 16 win)**: first gate run FAILed — false positive. Next.js automatically adds a plain `<meta name="robots" content="noindex"/>` to its prerendered 404 pages (present on `en\`/`ar\course-requirements.html`), AND all 3 locales in this project are prefixed (`en\...` exists — earlier `verify.txt` `en_exists=False` had checked the wrong root path). Fix: forbidden-locale check FAILs only on a `noindex, nofollow` meta (the page's own metadata), not plain `noindex`. Also: `This page could not be found` is NOT a reliable 404 marker on `.html` files (the real page embeds it in its RSC payload).
- **Validation**: re-ran official gate via `scratch/dod-gate.ps1` (wrapper + transcript, rule 14) → typecheck OK 3.9s, lint OK 9s, build OK 22.5s, test SKIP (no script), postbuild OK (111 HTML pages, canonical + sitemap + noindex checks passed) → `ran=4 failed=0 skipped=1 — DOD: PASS`.
- **Note**: keep `dod.config.json` in sync when adding noindex pages — a page present in the build but missing from it will FAIL the gate.

## Previous Focus (2026-11-03) — DONE: Persian-only noindex page `course-requirements`
- **Page**: «نیازمندی‌های دوره» at `/fa/course-requirements` — install & test guide (VS Code, Python, SoftEther VPN, optional Node.js) for course students. Persian-ONLY: `en`/`ar` locales call `notFound()` (verified 404 in build output).
- **No-SEO**: metadata `robots: { index: false, follow: false }`; NOT in sitemap (auto-generated from BLOG_POSTS/COURSES only — no edit needed); canonical = `/fa/course-requirements`.
- **File**: `app/[locale]/course-requirements/page.tsx` (self-contained, no data-file changes).
- **VPN content**: SoftEther download link (`softether-download.com/en.aspx?product=softether`) with exact selections table (Freeware / VPN Client / Windows / Intel x86 & x64); steps: install → run → **Refresh server list** → select country → connect; test sites: `aistudio.google.com` + `antigravity.google` (no error = VPN OK). Callout: VPN is «پیشنهادی ما» — students may test their own trusted VPN with the same sites.
- **Support**: phone `021-88252497` (`tel:02188252497`) at page end.
- **Validation**: lint 0 errors, build EXIT 0; rendered-HTML check: noindex ×2 in fa HTML, title «نیازمندی‌های دوره | دیجی نورون», SoftEther link + phone present, en/ar routes 404, not in sitemap.
- **TODO**: page is unlinked (reachable by URL only). Add the link wherever students see it (course page / Telegram / email) when needed.

## Previous Focus (2026-11-03) — DONE: Trilingual post `banks-block-ai-agents-open-banking` (id 18)
## Current Focus (2026-11-03) — DONE: Trilingual post `banks-block-ai-agents-open-banking` (id 18)
- **Post**: «چرا بانک‌های بزرگ جهان راه ایجنت‌های هوش مصنوعی را بستند؟ درس‌های بحران «رمز عبور» برای هر سازمان» — based on AI News article (artificialintelligence-news.com/news/banks-block-ai-agents-open-banking-rule/; site is behind a captcha, facts gathered via web search). Slug `banks-block-ai-agents-open-banking`, category `trends`, featured, date `۱۲ آبان ۱۴۰۵` (= Nov 3, 2026), readTime ۱۴ دقیقه.
- **Angle**: news analysis (credential sharing, excessive agency, liability vacuum, stalled CFPB §1033) → 6-principle "agent-ready architecture" + 5-step roadmap for enterprises. AR version localized with Gulf open banking (Bahrain 2018, SAMA 2022, CBUAE open finance).
- **Files**: FA at top of `BLOG_POSTS` in `data/blog.ts`; EN + AR in `data/translations/blog/banksBlockAiAgents.ts`; registry + date entry in `data/translations/blog.ts`; pillar entry in `app/sitemap.ts`; cover `public/images/blog/banks-block-ai-agents.jpg` (AI-generated, 1376x768).
- **CTA funnel**: `/{locale}/services/enterprise-ai` + `/{locale}/contact`. External: AI News source, CFPB §1033 rule page, OWASP LLM06 Excessive Agency.
- **Note**: pre-existing date map entry `۱۱ آبان ۱۴۰۵` → "November 1" is off by one (actual Nov 2); left untouched.
- **State**: Blog has 18 posts.

## Previous Focus (2026-10-28) — DONE: Trilingual post `enterprise-ai-transformation-diginoron-model` (id 16)
- **Post**: «هوشمند سازی سازمانی از طریق هوش مصنوعی با الگوی دیجی نورون» — slug `enterprise-ai-transformation-diginoron-model`, category `corporate-ai`, featured, date `۶ آبان ۱۴۰۵` (= Oct 28, 2026), readTime ۱۷ دقیقه.
- **FA base**: top of `BLOG_POSTS` in `data/blog.ts` (hero answer → CTA1 → 7 H2 sections covering the 6-pillar DigiNoron Enterprise AI Model → CTA2 → pitfalls → voice Q&As → value bridge → CTA3 → FAQ ×5 → author box + `faq` meta array).
- **EN + AR**: new `data/translations/blog/diginoronEnterpriseModel.ts` (`Record<Locale, Partial<BlogTranslation>>` with `fa: {}` placeholder; AR wraps content in `dir="rtl"`, `border-r-4`).
- **Registry & Sitemap**: import + `"enterprise-ai-transformation-diginoron-model"` entry in `data/translations/blog.ts`; pillar entry in `app/sitemap.ts`.
- **CTA funnel**: 3 temporal/funnel CTAs & in-body links in all 3 locales target `/{locale}/services/enterprise-ai`.
- **State**: Blog has 16 posts; sitemap (`app/sitemap.ts`) dynamically includes all 3 locale URLs with priority 0.95 / daily frequency.

## Previous Focus (2026-10-28) — DONE: Trilingual post `why-teach-kids-ai-entrepreneurship-not-ai-engineering` (id 15)
- **Post**: «چرا باید به کودکان در خصوص کارآفرینی در حیطه هوش مصنوعی آموزش داد نه مهندسی هوش مصنوعی؟» — slug `why-teach-kids-ai-entrepreneurship-not-ai-engineering`, category `kids-ai`, featured, date `۶ آبان ۱۴۰۵` (= Oct 28, 2026), readTime ۱۶ دقیقه.
- **FA base**: top of `BLOG_POSTS` in `data/blog.ts` (hero answer → CTA1 → 7 H2 sections → CTA2 → pitfalls → voice Q&As → value bridge → CTA3 → FAQ ×5 → author box + `faq` meta array).
- **EN + AR**: new `data/translations/blog/aiEntrepreneurshipNotEngineering.ts` (`Record<Locale, Partial<BlogTranslation>>` with `fa: {}` placeholder; AR wraps content in `dir="rtl"`, `border-r-4`).
- **Registry & Sitemap**: import + `"why-teach-kids-ai-entrepreneurship-not-ai-engineering"` entry + date map entry in `data/translations/blog.ts`; pillar entry in `app/sitemap.ts`.
- **CTA funnel**: CTAs & in-body links target `/{locale}/courses/ai-entrepreneurship-kids-teens` and `/{locale}/services/kids-and-teens`.
- **State**: Blog has 15 posts; sitemap (`app/sitemap.ts`) dynamically includes all 3 locale URLs with priority 0.95 / daily frequency.

## Previous Focus (2026-10-26) — DONE: Trilingual post `why-managers-employees-must-learn-ai-beyond-content-creation` (id 14)
- **Post**: «چرا همه مدیران و کارکنان سازمان‌های امروزی باید هوش مصنوعی را فراتر از تولید محتوا و آموزش‌های اینستاگرامی یاد بگیرند؟» — slug `why-managers-employees-must-learn-ai-beyond-content-creation`, category `corporate-ai`, featured, date `۴ آبان ۱۴۰۵` (= Oct 26, 2026), readTime ۱۶ دقیقه.
- **FA base**: top of `BLOG_POSTS` in `data/blog.ts` (hero answer → CTA1 → 7 H2 sections → CTA2 → pitfalls → voice Q&As → value bridge → CTA3 → FAQ ×5 → author box + `faq` meta array).
- **EN + AR**: new `data/translations/blog/managersEmployeesAiAgents.ts` (`Record<Locale, Partial<BlogTranslation>>` with `fa: {}` placeholder; AR wraps content in `dir="rtl"`, `border-r-4`).
- **Registry & Sitemap**: import + `"why-managers-employees-must-learn-ai-beyond-content-creation"` entry + date map entry in `data/translations/blog.ts`; pillar entry in `app/sitemap.ts`.
- **CTA funnel**: CTAs & in-body links target `/{locale}/courses/generative-ai-for-executives`, `/{locale}/services/corporate`, and `/{locale}/contact`.
- **State**: Blog has 14 posts; sitemap (`app/sitemap.ts`) dynamically includes all 3 locale URLs with priority 0.95 / daily frequency.

## Current Focus (2026-10-25) — DONE: Trilingual post `why-ai-entrepreneurship-beats-traditional-school-subjects` (id 13)
- **Post**: «چرا کارآفرینی هوش مصنوعی از درس‌های معمولی مدارس برای کودکان و آینده‌سازان اهمیت بیشتری دارد؟» — slug `why-ai-entrepreneurship-beats-traditional-school-subjects`, category `kids-ai`, featured, date `۳ آبان ۱۴۰۵` (= Oct 25, 2026), readTime ۱۶ دقیقه.
- **FA base**: top of `BLOG_POSTS` in `data/blog.ts` (hero answer → CTA1 → 7 H2 sections → CTA2 → pitfalls → voice Q&As → value bridge → CTA3 → FAQ ×5 → author box + `faq` meta array).
- **EN + AR**: new `data/translations/blog/aiEntrepreneurshipVsSchool.ts` (`Record<Locale, Partial<BlogTranslation>>` with `fa: {}` placeholder; AR wraps content in `dir="rtl"`, `border-r-4`).
- **Registry**: import + `"why-ai-entrepreneurship-beats-traditional-school-subjects"` entry + date map entry in `data/translations/blog.ts`.
- **CTA funnel**: CTAs & in-body links target `/{locale}/courses/ai-entrepreneurship-kids-teens` and `/{locale}/services/kids-and-teens`.
- **State**: Blog has 13 posts; sitemap (`app/sitemap.ts`) dynamically includes all 3 locale URLs with priority 0.9 / daily frequency.

## Previous Focus (2026-10-24) — DONE: Trilingual post `ai-era-abundance-democratizing-luxury` (id 12)
- **Post**: «عصر فراوانی و هوش مصنوعی؛ چرا خودرو و زندگی لوکس امروز برای غالب مردم دست‌یافتنی می‌شود؟» — slug `ai-era-abundance-democratizing-luxury`, category `trends`, featured, date `۲ آبان ۱۴۰۵` (= Oct 24, 2026), readTime ۱۵ دقیقه.
- **FA base**: top of `BLOG_POSTS` in `data/blog.ts` (hero answer → CTA1 → 7 H2 sections → CTA2 → misconceptions → voice Q&As → value bridge → CTA3 → FAQ ×5 → author box + `faq` meta array).
- **EN + AR**: new `data/translations/blog/aiAbundance.ts` (`Record<Locale, Partial<BlogTranslation>>` with `fa: {}` placeholder; AR wraps content in `dir="rtl"`, `border-r-4`).
- **Registry**: import + `"ai-era-abundance-democratizing-luxury"` entry + date map entry in `data/translations/blog.ts`.
- **State**: Blog has 12 posts; sitemap (`app/sitemap.ts`) dynamically includes all 3 locale URLs (`/blog/ai-era-abundance-democratizing-luxury`, `/fa/blog/ai-era-abundance-democratizing-luxury`, `/ar/blog/ai-era-abundance-democratizing-luxury`) with priority 0.9 / daily frequency.

## Previous Focus (2026-10-22) — DONE: Trilingual post `neet-risk-ai-era-children` (id 11)
- **Post**: «خطر NEET شدن کودکان در عصر هوش مصنوعی؛ چرا والدین باید همین امروز فرزندان خود را مجهز کنند؟» — slug `neet-risk-ai-era-children`, category `kids-ai`, featured, date `۳۰ مهر ۱۴۰۵` (= Oct 22, 2026), readTime ۱۶ دقیقه.
- **FA base**: top of `BLOG_POSTS` in `data/blog.ts` (hero answer → CTA1 → 7 H2 sections → CTA2 → pitfalls → voice Q&As → value bridge → CTA3 → FAQ ×5 → author box + `faq` meta array).
- **EN + AR**: new `data/translations/blog/neetAiEra.ts` (`Record<Locale, Partial<BlogTranslation>>` with `fa: {}` placeholder; AR wraps content in `dir="rtl"`, `border-r-4`).
- **Registry**: import + `"neet-risk-ai-era-children"` entry + date map entry in `data/translations/blog.ts`.
- **CTA funnel change**: all 3 CTAs target `/{locale}/services/kids-and-teens` (kids education page), NOT `/contact` — per task brief.
- **Citations**: World Bank NEET indicator (data.worldbank.org/indicator/SL.UEM.NEET.ZS) + WEF Future of Jobs 2025.
- **Internal links used**: `future-of-ai-in-education-2026`, `why-kids-should-learn-ai-early`, `prompt-engineering-best-practices`, `python-programming-for-teenagers`, `ai-entrepreneurship-from-childhood` (locale-prefixed).

Validation: tsc EXIT 0 · lint EXIT 0 · build EXIT 0 · DoD PASS (ran=3 failed=0 skipped=1) · rendered check on built HTML for fa/en/ar: locale-correct CTA hrefs only (`/fa/services/kids-and-teens` ×10 fa, plain ×10 en, `/ar/services/...` ×10 ar, zero cross-locale), JSON-LD (Article+FAQPage) on all 3, `dir="rtl"` on AR content root div.

Gate-run protocol (worked cleanly): one combined `.dod-gate.ps1` (transcript → tsc → eslint → build → Stop-Transcript), launch synchronously, poll log via FILE READS ONLY until `Stop-Transcript`; DoD gate same pattern.

## State
- Blog has 11 posts; `neet-risk-ai-era-children` complete in fa/en/ar.
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
