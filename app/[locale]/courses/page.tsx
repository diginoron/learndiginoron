"use client";

import { useState, use } from "react";
import { COURSES } from "@/data/courses";
import CourseCard from "@/components/CourseCard";
import { Search, Sparkles } from "lucide-react";
import { Locale, isValidLocale, getDirection } from "@/lib/i18n";
import { getLocalizedCourse } from "@/data/translations/courses";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function CoursesPage({ params }: PageProps) {
  const { locale: rawLocale } = use(params);
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const isLtr = getDirection(locale) === "ltr";

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const localizedCourses = COURSES.map((course) => getLocalizedCourse(course, locale));

  const filteredCourses = localizedCourses.filter((course) => {
    const term = searchTerm.toLowerCase();
    const matchesSearch =
      course.title.toLowerCase().includes(term) ||
      course.shortDesc.toLowerCase().includes(term) ||
      course.topics.some((t) => t.toLowerCase().includes(term));
    
    const matchesCategory =
      selectedCategory === "all" || course.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const content = {
    en: {
      badge: "Full Course Catalog | DigiNoron Academy",
      title: "Artificial Intelligence",
      titleHighlight: "Courses & Workshops",
      subtitle: "Filter through specialized programs across Youth & Teens (Ages 8-18) and Corporate Executive tracks.",
      searchPlaceholder: "Search by course title, topic, or skill...",
      allFilter: "All Courses",
      kidsFilter: "Youth & Teens (Ages 8-18)",
      corporateFilter: "Corporate & Executive",
      noCourses: "No courses found matching your query.",
    },
    fa: {
      badge: "کاتالوگ کامل دوره‌های آموزشی آکادمی دیجی نورون",
      title: "دوره‌ها و کارگاه‌های",
      titleHighlight: "هوش مصنوعی",
      subtitle: "جستجو و فیلتر دوره‌های آموزشی در دو سطح تخصصی «کودکان و نوجوانان» و «سازمانی»",
      searchPlaceholder: "جستجوی دوره، عنوان یا مهارت...",
      allFilter: "همه دوره‌ها",
      kidsFilter: "کودکان و نوجوانان (۸-۱۸ سال)",
      corporateFilter: "آموزش‌های سازمانی",
      noCourses: "دوره‌ای با مشخصات جستجو شده یافت نشد.",
    },
    ar: {
      badge: "دليل الدورات الكامل | أكاديمية ديجي نورون",
      title: "دورات وورش عمل",
      titleHighlight: "الذكاء الاصطناعي",
      subtitle: "تصفية وبحث البرامج التدريبية المخصصة في مساري «الأطفال واليافعين» و«التدريب المؤسسي والتنفيذي».",
      searchPlaceholder: "ابحث باسم الدورة أو المهارة...",
      allFilter: "جميع الدورات",
      kidsFilter: "الأطفال واليافعون (٨-١٨ سنة)",
      corporateFilter: "التدريب المؤسسي والشركات",
      noCourses: "لم يتم العثور على دورات توافق معايير البحث.",
    },
  };

  const t = content[locale] || content.en;

  return (
    <div className="py-12 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Page Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-800 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.badge}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-900">
          {t.title} <span className="text-gradient-cyan">{t.titleHighlight}</span>
        </h1>

        <p className="text-sm text-slate-600">
          {t.subtitle}
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="glass-panel bg-white p-4 rounded-2xl border border-slate-200 flex flex-col md:flex-row gap-4 items-center justify-between shadow-xs">
        
        {/* Search Input */}
        <div className="relative w-full md:w-96">
          <Search className={`w-4 h-4 text-slate-400 absolute ${isLtr ? "left-3.5" : "right-3.5"} top-3.5`} />
          <input
            type="text"
            placeholder={t.searchPlaceholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full ${isLtr ? "pl-10 pr-4" : "pr-10 pl-4"} py-2.5 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-400`}
          />
        </div>

        {/* Category Buttons */}
        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedCategory === "all"
                ? "bg-cyan-600 text-white shadow-md"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {t.allFilter}
          </button>
          <button
            onClick={() => setSelectedCategory("kids")}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedCategory === "kids"
                ? "bg-cyan-600 text-white shadow-md"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {t.kidsFilter}
          </button>
          <button
            onClick={() => setSelectedCategory("corporate")}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedCategory === "corporate"
                ? "bg-purple-600 text-white shadow-md"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {t.corporateFilter}
          </button>
        </div>

      </div>

      {/* Course Grid */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} locale={locale} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-slate-500 text-sm">
          {t.noCourses}
        </div>
      )}

    </div>
  );
}
