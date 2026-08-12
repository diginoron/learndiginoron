import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { COURSES } from "@/data/courses";
import { Clock, BookOpen, User, CheckCircle2, Phone, ArrowLeft, ShieldCheck, Award, Sparkles } from "lucide-react";
import ContactTeaser from "@/components/ContactTeaser";

import CourseFormatsDisplay from "@/components/CourseFormatsDisplay";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const course = COURSES.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  const isKids = course.category === "kids";

  return (
    <div className="py-12 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Left 2 cols: Main Course Content */}
        <div className="lg:col-span-2 space-y-8">
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                isKids ? "bg-cyan-100 text-cyan-800 border border-cyan-300" : "bg-purple-100 text-purple-800 border border-purple-300"
              }`}>
                {course.categoryName}
              </span>
              <span className="text-xs text-slate-500">مخاطبین: {course.targetAudience}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
              {course.title}
            </h1>

            <p className="text-sm text-slate-600 leading-relaxed">
              {course.fullDesc}
            </p>
          </div>

          {/* Banner Image */}
          <div className="relative h-72 sm:h-96 rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          {/* Syllabus Formats or Topics */}
          {course.formats && course.formats.length > 0 ? (
            <CourseFormatsDisplay formats={course.formats} />
          ) : (
            <div className="glass-panel bg-white p-8 rounded-3xl border border-slate-200 space-y-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-600" />
                <span>سرفصل‌های آموزشی دوره</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {course.topics.map((topic, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-slate-800 leading-relaxed">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Features & Guarantees */}
          <div className="glass-panel bg-white p-8 rounded-3xl border border-slate-200 space-y-4 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900">ویژگی‌ها و مزایای دوره دیجی نورون</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
              {course.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right 1 col: Sticky Enrollment Box */}
        <div className="space-y-6">
          <div className="glass-panel bg-white p-8 rounded-3xl border border-cyan-300 sticky top-28 space-y-6 shadow-xl text-slate-900">
            <div className="space-y-2 border-b border-slate-100 pb-4">
              <span className="text-xs text-slate-500">شهریه و قیمت دوره:</span>
              <div className="text-2xl font-black text-cyan-800">{course.price}</div>
            </div>

            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex items-center justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">طول دوره:</span>
                <span className="font-bold text-slate-900">{course.duration}</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">تعداد جلسات:</span>
                <span className="font-bold text-slate-900">{course.sessionsCount} جلسه</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">سطح آموزشی:</span>
                <span className="font-bold text-cyan-700">{course.level}</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">پیش‌نیاز:</span>
                <span className="font-bold text-slate-900">{course.prerequisites}</span>
              </div>
            </div>

            {/* Instructor Box */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center gap-3">
              <Image
                src={course.instructor.avatar}
                alt={course.instructor.name}
                width={48}
                height={48}
                className="rounded-full object-cover"
                unoptimized
              />
              <div>
                <div className="font-bold text-xs text-slate-900">{course.instructor.name}</div>
                <div className="text-[11px] text-slate-500">{course.instructor.role}</div>
              </div>
            </div>

            {/* CTAs */}
            <a
              href="tel:02188252497"
              className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-extrabold rounded-2xl flex items-center justify-center gap-2 transition-all shadow-md text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>ثبت‌نام تلفنی: 02188252497</span>
            </a>

            <a
              href="#consultation"
              className="w-full py-3.5 bg-slate-100 hover:bg-slate-200 text-cyan-800 border border-slate-300 text-xs font-bold rounded-2xl flex items-center justify-center gap-2"
            >
              <span>درخواست مشاوره رایگان</span>
            </a>
          </div>
        </div>

      </div>

      <ContactTeaser />

    </div>
  );
}
