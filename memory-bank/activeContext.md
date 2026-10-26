# Active Context

## Current Focus (2026-10-26) — DONE: Trilingual post `why-managers-employees-must-learn-ai-beyond-content-creation` (id 14)
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
