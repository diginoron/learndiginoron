# Active Context

## Current Focus (2026-11-22) — DONE: Trilingual post `watch-duty-gemini-wildfire-alerts` (id 28) shipped
- **Source selection**: fetched blog.google/innovation-and-ai RSS + geekwire + wired + digitaltrends feeds (artificialintelligence-news.com unreachable from this IP again). Newest article NOT covered on our blog = "How Watch Duty is using Gemini to get wildfire alerts out faster" (published Nov 20, 2026, by Eve Andersson & Stephanie Chew — Google.org Fellowship × Watch Duty). Dedupe: Suncatcher (id 26) + AlphaGenome (id 25) + kelp (id 27) already covered. Topic chosen for freshness (day-old) and user appeal ("AI saves lives from wildfires").
- **Verified facts used** (all from the official announcement): Gemini-powered tool turns noisy analog VHF fire radio into clean searchable text; built by a six-month full-time pro-bono Google.org Fellowship team on 20,000+ hours of past radio recordings; dispatch detection in under 30 seconds; word error rate on degraded VHF audio cut from 38% to 22.34%; 200+ hours/day transcribed from ~400 active feeds, designed/tested for 10,000+ feeds; volunteer reporter satisfaction with transcription tools 35.3% → 92.3%; first-ever overnight Critical Alert during the Railroad Fire (Washington, July 2026; alerts break through do-not-disturb); Google.org gave $2M funding + $300K Google Cloud credits in 2024; Google Search SOS alerts during Palisades/Eaton/Hurst/Auto fires; Firebase Cloud Messaging, audience 16M+, messaging limit raised 600K → 1M.
- **Post**: FA base at top of `BLOG_POSTS` in `data/blog.ts` (id 28, featured, category `trends`, date `۱ آذر ۱۴۰۵`, readTime `۱۴ دقیقه`, slug `watch-duty-gemini-wildfire-alerts`, cover `/images/blog/watch-duty-gemini-wildfire.jpg` = official og:image `Watch_Duty_Hero_Higher_Res.width-1300.png` downloaded from storage.googleapis.com, converted PNG→JPEG q82 via System.Drawing, 84.6KB). Full EN+AR in `data/translations/blog/watchDutyGeminiWildfire.ts` (`fa: {}` stub; AR root `dir="rtl"`, `border-r-4`, `/ar/...` CTAs; EN `border-l-4`, unprefixed CTAs). Registered in `data/translations/blog.ts` (import + slug entry + date map `۱ آذر ۱۴۰۵` → November 22, 2026 / ar ٢٢ نوفمبر ٢٠٢٦) + pillar slug in `app/sitemap.ts`. CTAs → `/fa/contact`, `/contact`, `/ar/contact` (3 per locale). External links: blog.google announcement + watchduty.org (target=_blank rel=noopener noreferrer).
- **Gotcha (rule 16)**: reverse-order `insert_line` chunking left the EN object's closing `},` missing before `fa: {}` (TS1005 at `};`) — first gate run FAILed; fixed by adding the close, tsc clean, gate re-run. Always verify object-close junctions before gating.
- **Validation**: `npx tsc --noEmit` clean after fix; DoD gate re-run via detached `scratch/run-dod-detached.cmd` + file-read polling only.
- **Publishing**: commit + push to `main`; Vercel deploy polled until HTTP 200 on the 3 URLs; GSC (sc-domain:diginoron.com via Composio) inspect ×3 + sitemap resubmit — see final status below.

## Previous Focus (2026-11-21) — DONE: Trilingual post `google-ai-restore-giant-kelp-forests` (id 27) shipped
- **Source selection**: fetched blog.google/innovation-and-ai RSS; newest article NOT covered on our blog = "Scientists are using Google AI to help restore giant kelp forests." (published Nov 12, 2026 — Google × CSIRO, timed with COP31). Dedupe: Suncatcher (id 26) + AlphaGenome (id 25) already covered. artificialintelligence-news.com unreachable (timeouts), geekwire.com 403, digitaltrends.com empty/blocked from this IP; WIRED feed had no significant AI story. Topic chosen for freshness, user appeal ("AI saves underwater forests"), and positive AI-for-climate angle.
- **Verified facts used** (from the official announcement page): partnership with CSIRO (Australia's national science agency) using AI and genomics; two high-quality reference genomes published for Australian giant kelp (foundation for conservation genetics); a version of Google's open-source DeepVariant trained to analyze giant kelp DNA; 600 wild specimens sequenced from 40 sites along the Tasmanian coast; populations dwindled to 5% of historic numbers due to ocean warming; genetic analysis + lab-based cross-breeding → replanting diverse, heat-tolerant specimens; part of Google Australia's Digital Futures Initiative.
- **Post**: FA base at top of `BLOG_POSTS` in `data/blog.ts` (id 27, featured, category `trends`, date `۳۰ آبان ۱۴۰۵`, readTime `۱۳ دقیقه`, slug `google-ai-restore-giant-kelp-forests`, cover `/images/blog/google-ai-giant-kelp-forest.webp` = official og:image at max-1000x1000, 25.6KB). Full EN+AR in `data/translations/blog/googleAiGiantKelp.ts` (`fa: {}` stub; AR root `dir="rtl"`, `border-r-4`, `/ar/...` CTAs; EN `border-l-4`, unprefixed CTAs). Registered in `data/translations/blog.ts` (import + slug entry + date map `۳۰ آبان ۱۴۰۵` → November 21, 2026 / ar ٢١ نوفمبر ٢٠٢٦) + pillar slug in `app/sitemap.ts`. CTAs → `/fa/contact`, `/contact`, `/ar/contact` (5 per locale). External links: blog.google announcement + csiro.au + github.com/google/deepvariant (all target=_blank rel=noopener noreferrer).
- **Validation**: `npx tsc --noEmit` clean first try; lint clean. DoD gate PASS via detached `scratch/run-dod-detached.cmd` + file-read polling only: ran=4 failed=0 skipped=1 (typecheck 3.6s, lint 5.8s, build 32.2s, postbuild 141 HTML pages, canonical+sitemap+noindex OK).
- **Rendered-output check**: `.next/server/app/{en,fa,ar}/blog/google-ai-restore-giant-kelp-forests.html` ×3: canonical ×1, JSON-LD ×2, locale-correct CTA hrefs ×5 (fa `/fa/contact`, en plain `/contact`, ar `/ar/contact`; zero cross-locale), AR `dir="rtl"` ×2, cover image present ×3. Built sitemap (`sitemap.xml.body`): slug ×15 (3 locales × url+alternates).
- **Publishing**: committed `53880ac` & pushed to `main`; Vercel deploy verified live — HTTP 200 on all 3 URLs (`/blog/…`, `/fa/blog/…`, `/ar/blog/…` google-ai-restore-giant-kelp-forests). ✅ GSC (sc-domain:diginoron.com, connection re-authenticated 2026-11-21): all 3 www URLs inspected — verdict NEUTRAL, coverageState `Discovered - currently not indexed` (expected for a fresh URL; Google will index per its normal schedule); sitemap `https://www.diginoron.com/sitemap.xml` resubmitted successfully.

## Previous Focus (2026-11-20) — DONE: Trilingual post `google-project-suncatcher-ai-in-space` (id 26) shipped
- **Source selection**: fetched blog.google/innovation-and-ai RSS; newest article NOT covered on our blog = "We're partnering with Blue Origin on our first heavy-lift Project Suncatcher launch" (published Nov 19/20, 2026, by Travis Beals, Senior Director, Paradigms of Intelligence). artificialintelligence-news.com was unreachable from this IP (timeouts on homepage and /feed/) — dedupe ran on blog.google RSS only. Topic chosen because it is fresh (day-old), highly shareable ("AI data centers in space"), and uncovered.
- **Verified facts used** (from the official announcement page, body extracted from HTML at offset ~351k): Project Suncatcher = long-term moonshot to scale AI infrastructure in space using abundant solar power in orbit; targeted Q1 2029, Blue Origin's heavy-lift New Glenn will deploy the satellites (each ≈ capacity of a data center rack) into sun-synchronous orbit; dedicated launch; builds on ongoing work with other satellite and launch partners. Source og:image was the generic Google logo → cover reused existing `ai-future.jpg`.
- **Post**: FA base at top of `BLOG_POSTS` in `data/blog.ts` (id 26, featured, category `trends`, date `۲۹ آبان ۱۴۰۵`, readTime `۱۴ دقیقه`, slug `google-project-suncatcher-ai-in-space`). Full EN+AR in `data/translations/blog/googleProjectSuncatcher.ts` (`fa: {}` stub; AR root `dir="rtl"`, `border-r-4`, `/ar/...` CTAs; EN `border-l-4`, unprefixed CTAs). Registered in `data/translations/blog.ts` (import + slug entry + date map `۲۹ آبان ۱۴۰۵` → November 20, 2026 / ar ٢٠ نوفمبر ٢٠٢٦) + pillar slug in `app/sitemap.ts`. CTAs → `/fa/contact`, `/contact`, `/ar/contact` (5 per locale). External links: blog.google announcement + blueorigin.com/new-glenn (both target=_blank rel=noopener noreferrer).
- **Validation**: `npx tsc --noEmit` clean first try. DoD gate PASS via detached `scratch/run-dod-detached.cmd` + file-read polling only: ran=4 failed=0 skipped=1 (typecheck 3.7s, lint 9.1s, build 33.2s, postbuild 138 HTML pages, canonical+sitemap+noindex OK).
- **Rendered-output check**: `.next/server/app/{en,fa,ar}/blog/google-project-suncatcher-ai-in-space.html` ×3: canonical ×1, JSON-LD ×2, locale-correct CTA hrefs ×5 (fa `/fa/contact`, en plain `/contact`, ar `/ar/contact`; zero cross-locale), AR `dir="rtl"` ×2. Built sitemap: slug ×15 (3 locales × url+alternates).
- **Publishing**: committed & pushed to `main`; Vercel deploy polled until HTTP 200 on `https://www.diginoron.com/fa/blog/google-project-suncatcher-ai-in-space`; GSC (sc-domain:diginoron.com via Composio) inspected all 3 canonical www URLs + resubmitted sitemap `https://www.diginoron.com/sitemap.xml`.

## Previous Focus (2026-11-19) — DONE: Trilingual post `alphagenome-ai-decoding-human-genome` (id 25) shipped
- **Source selection**: fetched blog.google/innovation-and-ai RSS (`/innovation-and-ai/rss/`); newest article NOT covered on our blog = "How genome mapping can help researchers better understand disease" (Nov 17, 2026 — AlphaGenome & AlphaGenome Atlas, Ask-a-Scientist interview with Žiga Avsec). Full text extracted via scratch HTML-strip script; stats reused (not copied): 3B base pairs, 9B single-letter changes, 1M base-pair input → thousands of predictions, up to 4M variants per rare-disease patient, AVI score (Atlas launched Sept 2026), AlphaGenome 2 cell-type specificity, Exeter BMI case (1B variants → top 1% → 19 groups), Broad Institute solved rare-disease case, long-term goal = digital simulation of a human cell.
- **Post**: FA base at top of `BLOG_POSTS` in `data/blog.ts` (id 25, featured, category `trends`, date `۲۸ آبان ۱۴۰۵`, readTime `۱۵ دقیقه`, slug `alphagenome-ai-decoding-human-genome`, cover `/images/blog/alphagenome-blog-header.jpg` = official og:image downloaded from storage.googleapis.com, 77KB). Full EN+AR in `data/translations/blog/alphaGenome.ts` (`fa: {}` stub; AR root `dir="rtl"`, `border-r-4`, `/ar/...` CTAs; EN `border-l-4`, unprefixed CTAs). Registered in `data/translations/blog.ts` (import + slug entry + date map `۲۸ آبان ۱۴۰۵` → November 19, 2026 / ar ١٩ نوفمبر ٢٠٢٦) + pillar slug in `app/sitemap.ts`.
- **DoD gate**: first synchronous run was killed by the harness 30s command timeout (typecheck+lint done, build mid-run — transcript froze after lint). Relaunch pattern: `scratch/run-dod-detached.cmd` (Start-Process -WindowStyle Hidden + `dod-gate.done` exit marker, output → `scratch/dod-run-output.log`, transcript `scratch/dod-gate.log`). Second run: typecheck 3.1s OK, lint 6.4s OK, build 25.1s OK, test SKIP, postbuild OK (135 HTML pages) → **DOD: PASS (ran=4 failed=0 skipped=1)**.
- **Rendered-output check**: EN page lives at `.next/server/app/en/blog/….html` (NOT `blog/…` — root locale is prefixed `en` in build output). All 3 locales: canonical ×1, JSON-LD ×2, og:title ×1, locale-correct CTA hrefs ×5 (en plain `/services/enterprise-ai`, fa `/fa/…`, ar `/ar/…`, zero cross-locale), AR `dir="rtl"` ×2. Built sitemap: slug ×15 matches (URL + hreflang alternates).
- **Committed**: `05a8074` «Add trilingual blog post: AlphaGenome AI decoding the human genome (fa/en/ar)» (5 files) and pushed to `main` (origin/main at `05a8074`). Note: run_commands may run multi-command arrays concurrently — git log/push raced the commit once; re-ran sequentially to confirm push `10f5639..05a8074`.

## Previous Focus (2026-11-19) — DONE: Trilingual post `introducing-gemini-4-neon` (id 24) shipped
- **Post**: «معرفی Google Gemini 4 Neon» — FA base at top of `BLOG_POSTS` in `data/blog.ts` (featured, category `trends`, date `۲۷ آبان ۱۴۰۵`, readTime `۱۴ دقیقه`, cover `/images/blog/gemini-4-neon__blog-header__sm.width-2200.format-webp.webp`, benchmark table, Sections 3–8, CTA2/CTA3, voice-search Q&As, FAQ ×5 + `faq` meta array). Full EN+AR in `data/translations/blog/introducingGemini4Neon.ts` (`fa: {}` stub; AR `border-r-4`/`pr-6` RTL, `/ar/...` CTAs; EN `border-l-4`/`pl-6`, unprefixed CTAs). Registered in `data/translations/blog.ts` (import + slug entry + date map `۲۷ آبان ۱۴۰۵` → Nov 18, 2026 / ar ١٨ نوفمبر ٢٠٢٦). Added to pillar-priority slug check in `app/sitemap.ts`.
- **Typecheck catch (rule 16)**: first `tsc --noEmit` failed with TS2741 — `Record<Locale, Partial<BlogTranslation>>` requires the `fa` key even when empty. Fix: `fa: {}` between `en` and `ar` (same pattern as `aiAbundance.ts`). Re-run: TSC_EXIT:0.
- **Validation**: `npx tsc --noEmit` clean; production build PASS (BUILD_EXIT:0, 141 pages, `/en/blog/introducing-gemini-4-neon` in route list). Postbuild rendered-output check on built HTML ×3 locales: `rel="canonical"` present, 2× `application/ld+json` blocks, `og:title` present, built sitemap contains the slug (15 matches incl. hreflang alternates). DoD gate script itself not run this session (build+postbuild checks done manually via logs).
- **Rule-14 re-learned**: a quick foreground shell command (Test-Path/Select-String) fired mid-build killed the running build shell — log froze at "Collecting page data". Build re-run; polling strictly with varied-range `read_files` only.
- **Committed**: `10f5639` «Add trilingual blog post: Introducing Gemini 4 Neon (fa/en/ar)» (5 files: `data/blog.ts` +344, `data/translations/blog.ts` +3, new `introducingGemini4Neon.ts`, new cover image webp, `app/sitemap.ts`) and pushed to `main` (origin/main at `10f5639`).

## Previous Focus (2026-11-17) — DONE: Trilingual post `iran-future-of-artificial-intelligence` (id 23) shipped
- **Post**: «نقش آینده ایران در هوش مصنوعی» — FA base at top of `BLOG_POSTS` in `data/blog.ts` (featured, category `trends`, date `۲۶ آبان ۱۴۰۵`, 16-min read), full EN+AR in `data/translations/blog/iranAiFuture.ts` (`fa: {}` stub; AR `dir="rtl"` + `border-r-4`, `/ar/...` CTAs; EN unprefixed). Registered in `data/translations/blog.ts` (import + slug entry + date map `۲۶ آبان ۱۴۰۵` → November 17, 2026 — date map entry was missing and added this session).
- **Cover image**: `public/images/blog/iran-copper-mining-ai.jpg` = Sungun Copper Mine, Vahid Abdi / Fars News (CC BY 4.0), via Wikimedia Commons — **known-low-res placeholder (246×180, 10KB)**; full 1050×700 blocked by Wikimedia 429 on this IP (all proxies/wayback failed). Replace later via VPN/direct URL `https://upload.wikimedia.org/wikipedia/commons/0c/2a/Sungun_Copper_Mine_2019-08-13_09.jpg` (correct MD5 hash path is `/0c/2a/`, not `/0/0c/`).
- **Bug caught at gate time (rule 16)**: the `en` block in `iranAiFuture.ts` was missing its closing `},` before `fa: {}` — first gate run's earlier state would fail typecheck; fixed, then gate re-run.
- **Validation**: DoD gate PASS ×2 (final: ran=4 failed=0 skipped=1; typecheck 3.4s, lint 6.7s, build 26.3s; postbuild 129 HTML pages, canonical+sitemap+noindex OK). Rendered-output check done on built HTML for all 3 locales (`/en|fa|ar/blog/iran-future-of-artificial-intelligence.html` — locale-correct content/CTAs, cover image srcSet, credit line).
- **Committed**: `273f605` «Add trilingual blog post: Iran's future role in AI (id 23)» (4 files: `data/blog.ts`, `data/translations/blog.ts`, `data/translations/blog/iranAiFuture.ts`, `public/images/blog/iran-copper-mining-ai.jpg`) and pushed to `main` (`2fc5c9..273f605`). Scratch scripts are gitignored — not committed.
- **Gate tooling win**: `scratch/run-dod-gate.ps1` (Start-Transcript wrapper, in-process `-File` run) captures full gate output reliably — reuse it for every future gate run; poll `scratch/dod-gate-log.txt` with varied tail reads only.

## Previous Focus (2026-11-17) — DONE: 6-card Course Advantages section on `/[locale]/services/kids-and-teens` (fa/en/ar)
- **Feature**: Added the `مزیت‌های دوره‌های ما` / `Advantages of Our Courses` / `مميزات دوراتنا التدريبية` 6-box section to `app/[locale]/services/kids-and-teens/page.tsx` right below the hero header across all three locales (`fa`, `en`, `ar`).
- **Cards**:
  1. AI Entrepreneurship Focus (`تمرکز بر کارآفرینی هوش مصنوعی`)
  2. Real-World Projects Focus (`تمرکز بر پروژه‌های واقعی`)
  3. Continuous Course Support (`پشتیبانی دوره`)
  4. Real Future Needs Focus (`تمرکز بر نیازهای واقعی`)
  5. Proven Track Record (`برگزاری دوره‌های موفق`)
  6. Up-to-Date Tools (`استفاده از به‌روزترین ابزارها`)
- **UI/UX & i18n**: Responsive 3-column grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`) of glass-panel cards with color-coded `lucide-react` icons, pill tags, subtle radial corner glows, and hover accent bars, plus `getDirection(locale)` direction-aware border accent on `#kids-courses`.

## Previous Focus (2026-11-14) — DONE: Dedicated AI Tools page & navigation menu integration
- **Feature**: Added "ابزارها" / "AI Tools" / "الأدوات" to header and footer navigation (desktop & mobile) placed right before Articles/Blog.
- **Pages**: New trilingual `/tools` route (`app/[locale]/tools/page.tsx` + `data/translations/tools.ts`).
  - Persian (`fa`): 4 tools:
    1. Thesis (`thesis.diginoron.com` app + `ai.caspianthesis.com` blog)
    2. Trading (`trading.diginoron.com` app)
    3. Scholar (`scholar.diginoron.com` app + `scholarmag.diginoron.com` blog)
    4. Beauty (`beauty.diginoron.com` app + `beautymag.diginoron.com` blog)
  - English (`en`) & Arabic (`ar`): 2 tools:
    1. Scholar (`scholar.diginoron.com` app + `scholarmag.diginoron.com` blog)
    2. Beauty (`beauty.diginoron.com/en` app + `beautymag.diginoron.com/en` blog)
- **UI/UX**: Custom responsive glass cards with accent glows, feature bullet points, direct app launch and magazine buttons (`target="_blank"`), JSON-LD SoftwareApplication schema markup, and enterprise custom AI development CTA.
- **Sitemap**: `/tools` added to `corePaths` in `app/sitemap.ts` (weekly frequency, priority 0.9). Verified in generated sitemap for all 3 locales (`/tools`, `/fa/tools`, `/ar/tools`).
- **Validation**: `npm run lint` PASS (0 errors), `npm run build` PASS (132 static pages generated), `npm run verify:build` PASS (123 HTML pages verified).

## Previous Focus (2026-11-14) — DONE: Trilingual post `what-age-should-kids-start-learning-ai` (id 21) shipped
- **Post**: «کودکان خود را از چه سنی با مهارت‌های هوش مصنوعی آشنا کنیم؟» — FA base at top of `BLOG_POSTS` in `data/blog.ts`, full EN+AR in `data/translations/blog/whatAgeKidsLearnAi.ts` (`fa: {}` stub required), registered in `data/translations/blog.ts` (import + slug + date map `۲۳ آبان ۱۴۰۵` → November 14, 2026).
- **Validation**: DoD gate PASS (ran=4 failed=0 skipped=1; postbuild 120 HTML pages, canonical + sitemap + noindex OK).
- **Junction lesson (rule 16 win)**: reverse-order `insert_line=1` chunks made the duplicated E1 header land mid-file and left the AR faq tail dangling at EOF; fixed via two anchor-based junction edits (duplicate header → AR `faq: [` items 1–5 + `en: {` reopen; dangling tail deleted). Verify structure by reading back junctions + tail before gating.
- **CTAs**: all 3 target `/courses/ai-entrepreneurship-kids-teens` (EN, unprefixed) / `/fa/courses/…` / `/ar/courses/…`. Citations: WEF Future of Jobs 2025, UNESCO AI Competency Framework. Internal links: `why-kids-should-learn-ai-early`, `why-teach-kids-ai-entrepreneurship-not-ai-engineering`, `why-ai-entrepreneurship-beats-traditional-school-subjects`, `best-ai-course-for-kids-and-teens` (locale-prefixed).
- **Committed**: only `data/blog.ts`, `data/translations/blog.ts`, `data/translations/blog/whatAgeKidsLearnAi.ts`, `GUIDE.md`, memory-bank files. `banksBlockAiAgents.ts` trailing-blank-line noise left unstaged again.

## Previous Focus (2026-11-12) — DONE: Trilingual post `natural-intelligence-before-artificial-intelligence` (id 20) shipped
- **Post**: «هوش طبیعی قبل از هوش مصنوعی» — FA base in `data/blog.ts`, full EN+AR in `data/translations/blog/naturalIntelligenceBeforeAi.ts` (`fa: {}` stub required), registered in `data/translations/blog.ts`.
- **Validation**: DoD gate PASS (ran=4 failed=0 skipped=1). CTAs: `/ar/contact` in AR content; sitemap auto-generates all 3 locale URLs.
- **Shipped**: commit `d875105` (translation file, 604 lines) + `19578c7` (data/blog.ts +315, registry +8) — both pushed to `main` (`f480d5c..19578c7`).
- **Still uncommitted (intentionally)**: `data/translations/blog/banksBlockAiAgents.ts` has a trailing-blank-line-only diff — pre-existing noise, not part of this task; left unstaged.
- **Tooling learnings**: (1) Start-Transcript reliably captures only the FIRST git command per run — subsequent git commands' output vanishes. (2) Reliable pattern: set `$env:GIT_REDIRECT_STDERR='2>&1'` and redirect each git command with `*> "file.txt"`, then read the files with the editor (git stderr under redirection writes UTF-16; readable via editor read despite mojibake-looking output). (3) Commit discovery: the retried commit HAD landed (`git log` tail) even though its transcript was empty — always verify against `git log`, not transcript absence.

## Previous Focus (2026-11-07) — DONE: Trilingual post `best-ai-course-for-kids-and-teens` (id 19)
- **Post**: «بهترین دوره آموزش هوش مصنوعی کودکان و نوجوانان؛ راهنمای کامل انتخاب والدین» — slug `best-ai-course-for-kids-and-teens`, category `kids-ai`, featured, date `۱۶ آبان ۱۴۰۵` (= Nov 7, 2026), readTime ۱۵ دقیقه, image `/images/courses/kids-ai.jpg`.
- **FA base**: top of `BLOG_POSTS` in `data/blog.ts` — hero answer → CTA1 → Section 1 (5 quality-criteria H3s) → Section 2 (why not just engineers) → Section 3 (entrepreneurship steps 1–4) → comparison table (3-approach) → CTA2 → pitfalls ×5 → voice Q&As ×3 → internal links → CTA3 → FAQ HTML ×5 → author box + `faq` meta array ×5.
- **EN + AR**: new `data/translations/blog/bestAiCourseKidsTeens.ts` (`fa: {}` placeholder; AR root `dir="rtl"`, `border-r-4`; EN `border-l-4`). Registry: import + `"best-ai-course-for-kids-and-teens"` entry + date map (`۱۶ آبان ۱۴۰۵` → Nov 7, 2026) in `data/translations/blog.ts`.
- **CTA funnel**: all 3 CTAs target `/{locale}/courses/ai-entrepreneurship-kids-teens` (kids AI-entrepreneurship course page). Citations: UNESCO AI competency framework + WEF Future of Jobs 2025. Internal links: `why-teach-kids-ai-entrepreneurship-not-ai-engineering`, `why-kids-should-learn-ai-early`, `ai-entrepreneurship-from-childhood`, `python-programming-for-teenagers` (locale-prefixed).
- **Validation**: DoD gate PASS — typecheck OK, lint OK, build OK, test SKIP (no script), postbuild OK (114 HTML pages, canonical + sitemap + noindex checks passed); built sitemap contains all 3 locale URLs (`/blog/…`, `/fa/blog/…`, `/ar/blog/best-ai-course-for-kids-and-teens`).
- **Session learnings**: (1) chunk-inserting a long post via `insert_line` at a fixed line in reverse order works — junctions verified clean; keep every chunk < 6000 chars (editor hard limit, ~5000 safe). (2) rule-14 refined the hard way: ANY foreground shell command (even a quick Select-String) started while the gate runs kills the gate shell mid-run — the gate had to be re-run; poll strictly with file reads until `Stop-Transcript`.

## Previous Focus (2026-11-03) — DONE: GitHub Actions quality gate (repo-level)
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
