import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blog";
import { Calendar, Clock, ArrowLeft, ArrowRight, Tag, User } from "lucide-react";
import { Locale, LOCALES, isValidLocale, getDirection, getLocalizedPath, getAlternateUrls, SITE_URL } from "@/lib/i18n";
import { getLocalizedPost } from "@/data/translations/blog";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of LOCALES) {
    for (const post of BLOG_POSTS) {
      params.push({ locale, slug: post.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const rawPost = BLOG_POSTS.find((p) => p.slug === slug);

  if (!rawPost) {
    return {
      title: "Article Not Found | DigiNoron",
    };
  }

  const post = getLocalizedPost(rawPost, locale);
  const alternates = getAlternateUrls(`/blog/${post.slug}`);
  const postUrl = alternates.canonical;
  const imageUrl = post.image.startsWith("http") ? post.image : `${SITE_URL}${post.image}`;

  const ogLocales: Record<Locale, string> = {
    en: "en_US",
    fa: "fa_IR",
    ar: "ar_AR",
  };

  return {
    title: `${post.title} | DigiNoron`,
    description: post.excerpt,
    alternates: {
      canonical: alternates.canonical,
      languages: alternates.languages,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: postUrl,
      siteName: "DigiNoron",
      locale: ogLocales[locale],
      type: "article",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 675,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostDetailPage({ params }: PageProps) {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const isLtr = getDirection(locale) === "ltr";

  const rawPost = BLOG_POSTS.find((p) => p.slug === slug);

  if (!rawPost) {
    notFound();
  }

  const post = getLocalizedPost(rawPost, locale);
  const relatedPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 2).map((p) => getLocalizedPost(p, locale));

  const postUrl = `${SITE_URL}${getLocalizedPath(`/blog/${post.slug}`, locale)}`;
  const imageUrl = post.image.startsWith("http") ? post.image : `${SITE_URL}${post.image}`;

  const labels = {
    en: {
      home: "Home",
      blog: "Articles",
      backToBlog: "Return to Articles List",
      authorRole: "Author & AI Researcher",
      relatedArticles: "Related Articles & Analyses",
      readArticle: "Read Article",
    },
    fa: {
      home: "صفحه اصلی",
      blog: "مجله مقالات",
      backToBlog: "بازگشت به فهرست مقالات",
      authorRole: "نویسنده و پژوهشگر هوش مصنوعی",
      relatedArticles: "مقالات مرتبط و پیشنهادی",
      readArticle: "مطالعه مقاله",
    },
    ar: {
      home: "الرئيسية",
      blog: "المقالات",
      backToBlog: "العودة لقائمة المقالات",
      authorRole: "الكاتب وباحث الذكاء الاصطناعي",
      relatedArticles: "مقالات مقترحة وذات صلة",
      readArticle: "قراءة المقال",
    },
  };

  const l = labels[locale] || labels.en;

  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": l.home,
            "item": SITE_URL,
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": l.blog,
            "item": `${SITE_URL}${getLocalizedPath("/blog", locale)}`,
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": post.title,
            "item": postUrl,
          },
        ],
      },
      {
        "@type": "Article",
        "headline": post.title,
        "description": post.excerpt,
        "image": imageUrl,
        "datePublished": post.date,
        "dateModified": post.date,
        "author": {
          "@type": "Person",
          "name": post.author.name,
        },
        "publisher": {
          "@type": "Organization",
          "name": "DigiNoron",
          "logo": {
            "@type": "ImageObject",
            "url": `${SITE_URL}/logo.png`,
          },
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": postUrl,
        },
      },
    ],
  };

  return (
    <article className="py-12 space-y-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />

      {/* Navigation Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-slate-500">
        <Link href={getLocalizedPath("/", locale)} className="hover:text-cyan-700">
          {l.home}
        </Link>
        <span>/</span>
        <Link href={getLocalizedPath("/blog", locale)} className="hover:text-cyan-700">
          {l.blog}
        </Link>
        <span>/</span>
        <span className="text-slate-800 font-medium truncate max-w-xs">{post.title}</span>
      </div>

      {/* Post Header */}
      <div className="space-y-6">
        <div className="inline-block">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-100 text-cyan-800 border border-cyan-300">
            {post.categoryName}
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-xs text-slate-500 border-b border-slate-200 pb-6">
          <div className="flex items-center gap-1.5">
            <User className="w-4 h-4 text-cyan-700" />
            <span className="font-bold text-slate-800">{post.author.name}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>{post.date}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden shadow-lg border border-slate-200">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Excerpt Lead */}
      <div className="p-6 bg-cyan-50/60 border-r-4 border-cyan-600 rounded-2xl text-sm sm:text-base font-semibold text-slate-800 leading-relaxed">
        {post.excerpt}
      </div>

      {/* Post HTML Content */}
      <div
        className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed text-slate-700 space-y-6"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Tags */}
      <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-2">
        <Tag className="w-4 h-4 text-slate-400" />
        <span className="text-xs text-slate-500 font-bold">{locale === "en" ? "Tags:" : locale === "fa" ? "برچسب‌ها:" : "الوسوم:"}</span>
        {post.tags.map((tag, idx) => (
          <span
            key={idx}
            className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 text-xs font-medium hover:bg-slate-200 transition-colors"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Author Bio Box */}
      <div className="glass-panel bg-white p-6 rounded-2xl border border-slate-200 flex items-center gap-4 shadow-xs">
        <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-700 shrink-0">
          <User className="w-6 h-6" />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 text-sm">{post.author.name}</h4>
          <p className="text-xs text-slate-500 mt-0.5">{post.author.role || l.authorRole}</p>
        </div>
      </div>

      {/* Related Posts */}
      <div className="pt-10 border-t border-slate-200 space-y-6">
        <h3 className="text-xl font-bold text-slate-900">
          {l.relatedArticles}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {relatedPosts.map((rPost) => (
            <Link
              key={rPost.id}
              href={getLocalizedPath(`/blog/${rPost.slug}`, locale)}
              className="glass-panel bg-white p-4 rounded-2xl border border-slate-200 hover:border-cyan-400 transition-all flex gap-4 items-center group shadow-xs"
            >
              <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-slate-100">
                <Image
                  src={rPost.image}
                  alt={rPost.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="space-y-1 overflow-hidden">
                <span className="text-[10px] text-cyan-800 font-bold">{rPost.categoryName}</span>
                <h4 className="font-bold text-xs text-slate-900 group-hover:text-cyan-700 transition-colors truncate">
                  {rPost.title}
                </h4>
                <div className="text-[10px] text-slate-400">{rPost.date}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Back to Blog */}
      <div className="text-center pt-8">
        <Link
          href={getLocalizedPath("/blog", locale)}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-xs font-bold text-slate-700 transition-colors"
        >
          {isLtr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          <span>{l.backToBlog}</span>
        </Link>
      </div>
    </article>
  );
}
