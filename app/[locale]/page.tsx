import Hero from "@/components/Hero";
import EnterpriseServices from "@/components/EnterpriseServices";
import ServicesOverview from "@/components/ServicesOverview";
import CourseGrid from "@/components/CourseGrid";
import LearningRoadmap from "@/components/LearningRoadmap";
import ContactTeaser from "@/components/ContactTeaser";
import Link from "next/link";
import Image from "next/image";
import { BLOG_POSTS } from "@/data/blog";
import { ArrowLeft, ArrowRight, Clock, Calendar, Sparkles } from "lucide-react";
import { Locale, isValidLocale, getDirection, getLocalizedPath, getAlternateUrls } from "@/lib/i18n";
import { HOME_TRANSLATIONS } from "@/data/translations/home";
import { getLocalizedPost } from "@/data/translations/blog";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const alternates = getAlternateUrls("/");

  const titles: Record<Locale, string> = {
    en: "Enterprise AI Transformation & Applied AI Academy | DigiNoron",
    fa: "هوشمندسازی سازمانی و آموزش کاربردی هوش مصنوعی | دیجی نورون",
    ar: "التحول الذكي للمؤسسات وأكاديمية الذكاء الاصطناعي | ديجي نورون",
  };

  const descriptions: Record<Locale, string> = {
    en: "DigiNoron delivers end-to-end autonomous AI Agent development, business process automation (BPA), on-premise technology transfer, and industry-grade training for enterprises.",
    fa: "مرکز تخصصی هوشمندسازی سازمانی، طراحی ایجنت‌های اختصاصی (AI Agents)، اتوماسیون فرآیندها (BPA)، پیاده‌سازی و انتقال تکنولوژی و خدمات آموزشی کودکان و سازمان‌ها.",
    ar: "مركز رائد في حلول الذكاء الاصطناعي المؤسسي، تطوير وكلاء الذكاء الاصطناعي، أتمتة العمليات التجارية (BPA)، النشر المحلي والتدريب الاحترافي للشركات.",
  };

  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: alternates.canonical,
      languages: alternates.languages,
    },
  };
}

export default async function Home({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const t = HOME_TRANSLATIONS[locale]?.latestArticles || HOME_TRANSLATIONS.en.latestArticles;
  const isLtr = getDirection(locale) === "ltr";

  const featuredPosts = BLOG_POSTS.slice(0, 3).map((post) => getLocalizedPost(post, locale));

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <Hero locale={locale} />

      {/* 2. Enterprise AI Transformation */}
      <EnterpriseServices locale={locale} />

      {/* 3. Educational Services Overview */}
      <ServicesOverview locale={locale} />

      {/* 4. Course Catalog Grid */}
      <CourseGrid locale={locale} />

      {/* 5. 4-Step Learning Roadmap */}
      <LearningRoadmap locale={locale} />

      {/* 6. Latest Articles Teaser */}
      <section className="pt-12 sm:pt-16 pb-4 sm:pb-6 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-800 text-xs font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
                {t.title} <span className="text-gradient-cyan">{t.titleHighlight}</span>
              </h2>
            </div>

            <Link
              href={getLocalizedPath("/blog", locale)}
              className="inline-flex items-center gap-2 text-sm font-bold text-cyan-700 hover:text-cyan-800 transition-colors"
            >
              <span>{t.viewAllBtn}</span>
              {isLtr ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <div
                key={post.id}
                className="glass-panel bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-cyan-400 transition-all group flex flex-col justify-between shadow-xs"
              >
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute top-3 ${isLtr ? "left-3" : "right-3"} bg-white/90 text-cyan-800 text-xs px-3 py-1 rounded-full font-bold shadow-xs`}>
                    {post.categoryName}
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>{post.date}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>

                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-cyan-700 transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">
                      {t.authorPrefix} {post.author.name}
                    </span>
                    <Link
                      href={getLocalizedPath(`/blog/${post.slug}`, locale)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-cyan-700 hover:text-cyan-800"
                    >
                      <span>{t.readArticleBtn}</span>
                      {isLtr ? <ArrowRight className="w-3.5 h-3.5" /> : <ArrowLeft className="w-3.5 h-3.5" />}
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Consultation & Phone Teaser */}
      <ContactTeaser locale={locale} />
    </div>
  );
}
