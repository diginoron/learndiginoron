"use client";

import { useState } from "react";
import { COURSES, Course } from "@/data/courses";
import CourseCard from "./CourseCard";
import { Sparkles, GraduationCap, Building2, Layers } from "lucide-react";

export default function CourseGrid() {
  const [activeTab, setActiveTab] = useState<"all" | "kids" | "corporate">("all");

  const filteredCourses = COURSES.filter((course) => {
    if (activeTab === "all") return true;
    return course.category === activeTab;
  });

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-800 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>دوره‌ها و کارگاه‌های آموزشی</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
              برترین دوره‌های <span className="text-gradient-cyan">آموزش هوش مصنوعی</span>
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 p-1.5 bg-white border border-slate-200 rounded-2xl shadow-sm self-start md:self-auto">
            <button
              onClick={() => setActiveTab("all")}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === "all"
                  ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>همه دوره‌ها</span>
            </button>

            <button
              onClick={() => setActiveTab("kids")}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === "kids"
                  ? "bg-cyan-600 text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>کودکان و نوجوانان</span>
            </button>

            <button
              onClick={() => setActiveTab("corporate")}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === "corporate"
                  ? "bg-purple-600 text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>آموزش‌های سازمانی</span>
            </button>
          </div>
        </div>

        {/* Grid Output */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

      </div>
    </section>
  );
}
