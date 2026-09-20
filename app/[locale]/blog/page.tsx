"use client";

import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blog";
import { Search, Calendar, Clock, ArrowLeft, ArrowRight, ChevronRight, ChevronLeft, BookOpen } from "lucide-react";
import { Locale, isValidLocale, getDirection, getLocalizedPath } from "@/lib/i18n";
import { getLocalizedPost } from "@/data/translations/blog";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function BlogPage({ params }: PageProps) {
  const { locale: rawLocale } = use(params);
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const isLtr = getDirection(locale) === "ltr";

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 6;

  const localizedPosts = BLOG_POSTS.map((post) => getLocalizedPost(post, locale));

  const filteredPosts = localizedPosts.filter((post) => {
    const term = searchTerm.toLowerCase();
    const matchesSearch =
      post.title.toLowerCase().includes(term) ||
      post.excerpt.toLowerCase().includes(term) ||
      post.tags.some((t) => t.toLowerCase().includes(term));

    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage) || 1;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const content = {
    en: {
      badge: "Knowledge Hub | DigiNoron AI Magazine",
      title: "Articles, Insights &",
      titleHighlight: "AI Analysis",
      subtitle: "Discover expert guides, enterprise agent roadmaps, and applied AI education.",
      searchPlaceholder: "Search publications, topics or keywords...",
      allFilter: "All Articles",
      kidsFilter: "Youth & Teens AI",
      corporateFilter: "Enterprise AI & BPA",
      generalFilter: "Strategy & Tech",
      readArticleBtn: "Read Full Article",
      authorPrefix: "Author:",
      noResults: "No articles match your query.",
      pageLabel: "Page",
      ofLabel: "of",
    },
    fa: {
      badge: "مجله تخصصی هوش مصنوعی دیجی نورون",
      title: "مقالات و تحلیل‌های",
      titleHighlight: "هوش مصنوعی",
      subtitle: "جدیدترین راهنماها، مقالات آموزشی کودکان و نوجوانان و راهکارهای هوش مصنوعی سازمانی",
      searchPlaceholder: "جستجو در مقالات و عنوان‌ها...",
      allFilter: "همه مقالات",
      kidsFilter: "هوش مصنوعی کودکان",
      corporateFilter: "هوشمندسازی سازمانی",
      generalFilter: "تکنولوژی و استراتژی",
      readArticleBtn: "مطالعه کامل مقاله",
      authorPrefix: "نویسنده:",
      noResults: "مقاله‌ای با این مشخصات یافت نشد.",
      pageLabel: "صفحه",
      ofLabel: "از",
    },
    ar: {
      badge: "مركز المعرفة | مجلة ديجي نورون للذكاء الاصطناعي",
      title: "المقالات والتحليلات في",
      titleHighlight: "الذكاء الاصطناعي",
      subtitle: "أحدث الأدلة العملية، تقارير وكلاء الذكاء الاصطناعي المؤسسية والمسارات الأكاديمية.",
      searchPlaceholder: "ابحث في المقالات والعناوين...",
      allFilter: "جميع المقالات",
      kidsFilter: "ذكاء الأطفال واليافعين",
      corporateFilter: "الذكاء الاصطناعي للشركات",
      generalFilter: "الاستراتيجية والتقنية",
      readArticleBtn: "قراءة المقال بالكامل",
      authorPrefix: "الكاتب:",
      noResults: "لم يتم العثور على مقالات توافق البحث.",
      pageLabel: "الصفحة",
      ofLabel: "من",
    },
  };

  const t = content[locale] || content.en;

  return (
    <div className="py-12 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-800 text-xs font-semibold">
          <BookOpen className="w-3.5 h-3.5" />
          <span>{t.badge}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-900">
          {t.title} <span className="text-gradient-cyan">{t.titleHighlight}</span>
        </h1>

        <p className="text-sm text-slate-600">
          {t.subtitle}
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="glass-panel bg-white p-4 rounded-2xl border border-slate-200 flex flex-col md:flex-row gap-4 items-center justify-between shadow-xs">
        
        {/* Search */}
        <div className="relative w-full md:w-96">
          <Search className={`w-4 h-4 text-slate-400 absolute ${isLtr ? "left-3.5" : "right-3.5"} top-3.5`} />
          <input
            type="text"
            placeholder={t.searchPlaceholder}
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className={`w-full ${isLtr ? "pl-10 pr-4" : "pr-10 pl-4"} py-2.5 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-400`}
          />
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
          <button
            onClick={() => {
              setSelectedCategory("all");
              setCurrentPage(1);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedCategory === "all"
                ? "bg-cyan-600 text-white shadow-md"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {t.allFilter}
          </button>

          <button
            onClick={() => {
              setSelectedCategory("kids-ai");
              setCurrentPage(1);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedCategory === "kids-ai"
                ? "bg-cyan-600 text-white shadow-md"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {t.kidsFilter}
          </button>

          <button
            onClick={() => {
              setSelectedCategory("corporate-ai");
              setCurrentPage(1);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedCategory === "corporate-ai"
                ? "bg-purple-600 text-white shadow-md"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {t.corporateFilter}
          </button>

          <button
            onClick={() => {
              setSelectedCategory("general-ai");
              setCurrentPage(1);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedCategory === "general-ai"
                ? "bg-slate-800 text-white shadow-md"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {t.generalFilter}
          </button>
        </div>

      </div>

      {/* Posts Grid */}
      {currentPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post) => (
            <div
              key={post.id}
              className="glass-panel bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-cyan-400 transition-all flex flex-col justify-between group shadow-xs hover:-translate-y-1 hover:shadow-lg"
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
      ) : (
        <div className="text-center py-20 text-slate-500 text-sm">
          {t.noResults}
        </div>
      )}

      {/* Pagination Bar */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-8 border-t border-slate-200">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-white text-slate-700 transition-colors"
            aria-label="Previous Page"
          >
            {isLtr ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700">
            <span>{t.pageLabel}</span>
            <span className="text-cyan-700 font-mono">{currentPage}</span>
            <span>{t.ofLabel}</span>
            <span className="font-mono">{totalPages}</span>
          </div>

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="p-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-white text-slate-700 transition-colors"
            aria-label="Next Page"
          >
            {isLtr ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>
      )}

    </div>
  );
}
