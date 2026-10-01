# System Patterns — DigiNoron

## Routing & i18n
- `app/[locale]/...` dynamic segment; `lib/i18n.ts` owns `LOCALES` (en root, fa, ar), `getLocalizedPath`, `getAlternateUrls` (hreflang), `SITE_URL`.
- Middleware skips files/assets and rewrites locale paths.

## Data-driven content
- Blog: `data/blog.ts` (`BlogPost` interface, `BLOG_POSTS[]`, Persian base, HTML `content` strings).
- Localization: `data/translations/blog.ts` → `BLOG_TRANSLATIONS[slug][locale]` (`Partial<BlogTranslation>`), `getLocalizedPost()` merges base + translation; fa returns base untouched; missing locales gracefully fall back.
- Per-article translation files export `Record<Locale, Partial<BlogTranslation>>`.

## SEO patterns
- `generateStaticParams` pre-renders every locale × post.
- Page-level JSON-LD `@graph`: BreadcrumbList + Article + FAQPage (built from `post.faq`).
- `app/sitemap.ts` derives URLs from data arrays; priorities for pillar posts (`isPillar` list).
- Metadata (title/description/OG/Twitter) from localized post fields.

## Content patterns
- Pillar articles: hero answer box → 3 CTAs (early/mid/close) → H2 sections each opened by a 40-60 word highlighted answer → comparison table → FAQ (HTML + `faq` array) → dark author box (E-E-A-T).
- Inline styles for CTA boxes (portable across Tailwind content injection); Tailwind utility classes elsewhere.
