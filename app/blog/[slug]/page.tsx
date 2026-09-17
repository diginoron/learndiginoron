import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blog";
import { Calendar, Clock, ArrowLeft, Tag, User } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "مقاله یافت نشد | دیجی نورون",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://diginoron.com";
  const postUrl = `${siteUrl}/blog/${post.slug}`;
  const imageUrl = post.image.startsWith("http") ? post.image : `${siteUrl}${post.image}`;

  return {
    title: `${post.title} | دیجی نورون`,
    description: post.excerpt,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: postUrl,
      siteName: "دیجی نورون",
      locale: "fa_IR",
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
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 2);

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://diginoron.com";
  const postUrl = `${siteUrl}/blog/${post.slug}`;
  const imageUrl = post.image.startsWith("http") ? post.image : `${siteUrl}${post.image}`;

  const jsonLdGraph: { "@context": string; "@graph": Record<string, unknown>[] } = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "صفحه اصلی",
            "item": siteUrl,
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "مجله مقالات",
            "item": `${siteUrl}/blog`,
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
        "inLanguage": "fa-IR",
        "author": {
          "@type": "Organization",
          "name": post.author.name,
          "url": siteUrl,
        },
        "publisher": {
          "@type": "Organization",
          "name": "دیجی نورون",
          "url": siteUrl,
          "logo": {
            "@type": "ImageObject",
            "url": `${siteUrl}/icon.png`,
          },
        },
        "datePublished": "2026-03-15T08:00:00+03:30",
        "dateModified": "2026-03-17T12:00:00+03:30",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": postUrl,
        },
      },
    ],
  };

  if (post.faq && post.faq.length > 0) {
    jsonLdGraph["@graph"].push({
      "@type": "FAQPage",
      "mainEntity": post.faq.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer,
        },
      })),
    });
  } else if (post.slug === "smart-organization-ai-2026") {
    jsonLdGraph["@graph"].push({
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "پیاده‌سازی زیرساخت‌های هوشمند در یک سازمان متوسط چقدر زمان می‌برد؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "مرحله عارضه‌یابی و پاک‌سازی داده‌ها بین ۲ تا ۴ هفته و استقرار اولین پایلوت عملیاتی کارگزاران هوشمند ۴ تا ۶ هفته زمان می‌برد. کل فرآیند استقرار یکپارچه و آموزش پرسنل ظرف ۳ تا ۶ ماه با موفقیت به اتمام می‌رسد.",
          },
        },
        {
          "@type": "Question",
          "name": "آیا هوشمند سازی سازمان در سال 2026 به معنای تعدیل گسترده نیروی کار است؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "خیر، تجربه سازمان‌های موفق نشان می‌دهد هدف اصلی این تحول، توانمندسازی کارکنان از طریق حذف وظایف تکراری است تا نیروها به ناظران تحلیلی و تصمیم‌گیرندگان استراتژیک در کنار کارگزاران هوشمند تبدیل شوند.",
          },
        },
        {
          "@type": "Question",
          "name": "چالش اصلی سازمان‌ها در برقراری امنیت داده‌ها چیست و چگونه حل می‌شود؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "چالش اصلی جلوگیری از خروج اسرار تجاری است. راهکار استاندارد دیجی نورون، پیاده‌سازی مدل‌های پردازشی روی سرورهای داخلی ایزوله (On-Premise) همراه با رمزنگاری پیشرفته و کنترل دسترسی نقش‌محور است.",
          },
        },
        {
          "@type": "Question",
          "name": "تفاوت اتوماسیون معمولی با هوشمند سازی سازمان در سال 2026 چیست؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "اتوماسیون سنتی تنها بر مبنای قوانین ثابت و ورودی‌های ساختاریافته کار می‌کند، در حالی که سیستم‌های نوین شناختی متون پیچیده، زبان طبیعی و شرایط متغیر کاری را درک کرده و رفتاری منطبق بر شرایط اتخاذ می‌کنند.",
          },
        },
        {
          "@type": "Question",
          "name": "بازگشت سرمایه (ROI) این پروژه‌ها چه زمانی نمایان می‌شود؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "نشانه‌های صرفه‌جویی مالی ناشی از کاهش ساعات اضافه کاری و افت شدید خطاها در ماه‌های سوم تا ششم نمایان می‌شود و بازگشت کامل هزینه‌های سرمایه‌گذاری ظرف کمتر از یک سال مالی محقق می‌گردد.",
          },
        },
      ],
    });
  }

  return (
    <article className="py-12 space-y-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />
      
      {/* Breadcrumb & Meta */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Link href="/blog" className="text-xs text-cyan-700 hover:underline font-bold">
            ← بازگشت به مجله مقالات
          </Link>
          <span className="text-slate-300">•</span>
          <span className="text-xs text-slate-500 font-bold">{post.categoryName}</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 pb-6 border-b border-slate-200 text-xs text-slate-500">
          <div className="flex items-center gap-3">
            {post.author.avatar ? (
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-cyan-100 border border-cyan-300 flex items-center justify-center text-cyan-800 shrink-0">
                <User className="w-5 h-5" />
              </div>
            )}
            <div>
              <div className="font-bold text-slate-900 text-sm">{post.author.name}</div>
              <div className="text-[11px] text-slate-500">{post.author.role}</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {post.readTime}
            </span>
          </div>
        </div>
      </div>

      {/* Featured Cover Image */}
      <div className="relative h-72 sm:h-[28rem] rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Main Formatted Content */}
      <div
        className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-headings:font-bold prose-h2:text-2xl prose-h2:text-cyan-800 prose-p:text-slate-700 prose-p:leading-relaxed prose-p:text-sm prose-li:text-slate-700 prose-li:text-sm space-y-6"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Tags */}
      <div className="pt-6 border-t border-slate-200 flex items-center gap-2 flex-wrap">
        <Tag className="w-4 h-4 text-cyan-600" />
        <span className="text-xs text-slate-500 font-bold">برچسب‌ها:</span>
        {post.tags.map((tag, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-white border border-slate-200 text-xs text-cyan-800 rounded-lg shadow-sm"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Related Posts */}
      <div className="pt-12 border-t border-slate-200 space-y-6">
        <h3 className="text-xl font-bold text-slate-900">مقالات مرتبط پیشنهادی</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {relatedPosts.map((rel) => (
            <div key={rel.id} className="glass-panel bg-white p-5 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
              <span className="text-[11px] text-cyan-700 font-bold">{rel.categoryName}</span>
              <h4 className="font-bold text-slate-900 text-base line-clamp-2">{rel.title}</h4>
              <p className="text-xs text-slate-600 line-clamp-2">{rel.excerpt}</p>
              <Link
                href={`/blog/${rel.slug}`}
                className="inline-flex items-center gap-1 text-xs text-cyan-700 font-bold pt-2 hover:text-cyan-800"
              >
                <span>مطالعه مقاله</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>

    </article>
  );
}
