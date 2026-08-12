"use client";

import { useState } from "react";
import { COURSES } from "@/data/courses";
import CourseCard from "@/components/CourseCard";
import { Search, Sparkles, Filter } from "lucide-react";

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredCourses = COURSES.filter((course) => {
    const matchesSearch =
      course.title.includes(searchTerm) ||
      course.shortDesc.includes(searchTerm) ||
      course.topics.some((t) => t.includes(searchTerm));
    
    const matchesCategory =
      selectedCategory === "all" || course.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-12 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Page Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>کاتالوگ کامل دوره‌های آموزشی آکادمی دیجی نورون</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white">
          دوره‌ها و کارگاه‌های <span className="text-gradient-cyan">هوش مصنوعی</span>
        </h1>

        <p className="text-sm text-gray-300">
          جستجو و فیلتر دوره‌های آموزشی در دو سطح تخصصی «کودکان و نوجوانان» و «سازمانی»
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="glass-panel p-4 rounded-2xl border border-slate-800 flex flex-col md:flex-row gap-4 items-center justify-between">
        
        {/* Search Input */}
        <div className="relative w-full md:w-96">
          <Search className="w-4 h-4 text-gray-400 absolute right-3.5 top-3.5" />
          <input
            type="text"
            placeholder="جستجوی دوره، عنوان یا مهارت..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pr-10 pl-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-500 transition-colors"
          />
        </div>

        {/* Category Buttons */}
        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedCategory === "all"
                ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/20"
                : "bg-slate-900 text-gray-300 hover:bg-slate-800"
            }`}
          >
            همه دوره‌ها
          </button>
          <button
            onClick={() => setSelectedCategory("kids")}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedCategory === "kids"
                ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/20"
                : "bg-slate-900 text-gray-300 hover:bg-slate-800"
            }`}
          >
            کودکان و نوجوانان (۸-۱۸ سال)
          </button>
          <button
            onClick={() => setSelectedCategory("corporate")}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedCategory === "corporate"
                ? "bg-purple-500 text-black shadow-lg shadow-purple-500/20"
                : "bg-slate-900 text-gray-300 hover:bg-slate-800"
            }`}
          >
            آموزش‌های سازمانی
          </button>
        </div>

      </div>

      {/* Course Grid */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-slate-900/50 rounded-2xl border border-slate-800">
          <p className="text-gray-400 text-sm">دوره‌ای با این مشخصات یافت نشد.</p>
        </div>
      )}

    </div>
  );
}
