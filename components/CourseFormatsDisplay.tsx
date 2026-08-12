"use client";

import { useState } from "react";
import { CourseFormat } from "@/data/courses";
import { Clock, Info, CheckCircle2, BookOpen, Sparkles, Layers } from "lucide-react";

interface CourseFormatsDisplayProps {
  formats: CourseFormat[];
}

export default function CourseFormatsDisplay({ formats }: CourseFormatsDisplayProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  if (!formats || formats.length === 0) return null;

  const currentFormat = formats[activeTab];

  return (
    <div className="glass-panel bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
        <div>
          <div className="flex items-center gap-2 text-cyan-600 font-bold text-xs mb-1">
            <Layers className="w-4 h-4" />
            <span>فرمت‌های برگزاری دوره</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            سرفصل‌ها و ساختار برگزاری دوره
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
          {formats.map((format, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all duration-200 ${
                  isActive
                    ? "bg-cyan-600 text-white shadow-md shadow-cyan-600/20"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                }`}
              >
                {format.title}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Format Header & Subtitle */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-cyan-600" />
            <span>{currentFormat.title}</span>
          </h3>
          <span className="px-3 py-1 bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold rounded-full">
            {currentFormat.subtitle}
          </span>
        </div>

        {/* Note if available */}
        {currentFormat.note && (
          <div className="p-4 bg-amber-50/80 border border-amber-200 rounded-2xl flex items-start gap-3 text-xs text-amber-900 leading-relaxed shadow-sm">
            <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block mb-0.5 text-amber-950">نکته مهم دوره:</span>
              <span>{currentFormat.note}</span>
            </div>
          </div>
        )}
      </div>

      {/* Sections List */}
      <div className="space-y-6">
        {currentFormat.sections.map((section, sIdx) => (
          <div
            key={sIdx}
            className="p-5 sm:p-6 bg-slate-50/70 rounded-2xl border border-slate-200/80 hover:border-cyan-300 transition-all space-y-4"
          >
            {/* Section Title & Duration */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/60 pb-3">
              <h4 className="font-extrabold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-cyan-600 text-white text-xs flex items-center justify-center font-bold">
                  {sIdx + 1}
                </span>
                <span>{section.title}</span>
              </h4>
              
              <span className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-slate-700 text-xs font-semibold flex items-center gap-1.5 shadow-2xs">
                <Clock className="w-3.5 h-3.5 text-cyan-600" />
                <span>ساعات آموزشی: {section.duration}</span>
              </span>
            </div>

            {/* Comprehensive Description if available */}
            {section.description && (
              <p className="text-xs text-slate-600 leading-relaxed bg-white/80 p-4 rounded-xl border border-slate-100 text-justify">
                {section.description}
              </p>
            )}

            {/* Items / Bullet points */}
            {section.items && section.items.length > 0 && (
              <div className="space-y-2">
                <div className="text-[11px] font-bold text-slate-500 mb-1">ریزسرفصل‌ها و مباحث:</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {section.items.map((item, iIdx) => (
                    <div
                      key={iIdx}
                      className="flex items-start gap-2.5 p-2.5 bg-white rounded-xl border border-slate-100 text-xs text-slate-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                      <span className="leading-normal">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
