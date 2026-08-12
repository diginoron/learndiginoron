import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { COURSES } from "@/data/courses";
import { Clock, BookOpen, User, CheckCircle2, Phone, ArrowLeft, ShieldCheck, Award, Sparkles } from "lucide-react";
import ContactTeaser from "@/components/ContactTeaser";

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
                isKids ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30" : "bg-purple-500/20 text-purple-400 border border-purple-500/30"
              }`}>
                {course.categoryName}
              </span>
              <span className="text-xs text-gray-400">مخاطبین: {course.targetAudience}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight">
              {course.title}
            </h1>

            <p className="text-sm text-gray-300 leading-relaxed">
              {course.fullDesc}
            </p>
          </div>

          {/* Banner Image */}
          <div className="relative h-72 sm:h-96 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          {/* Syllabus Topics */}
          <div className="glass-panel p-8 rounded-3xl border border-slate-800 space-y-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span>سرفصل‌های آموزشی دوره</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {course.topics.map((topic, idx) => (
                <div key={idx} className="p-4 bg-slate-900/80 rounded-2xl border border-slate-800 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-gray-200 leading-relaxed">{topic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features & Guarantees */}
          <div className="glass-panel p-8 rounded-3xl border border-slate-800 space-y-4">
            <h3 className="text-lg font-bold text-white">ویژگی‌ها و مزایای دوره دیجی نورون</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-300">
              {course.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right 1 col: Sticky Enrollment Box */}
        <div className="space-y-6">
          <div className="glass-panel p-8 rounded-3xl border border-cyan-500/30 sticky top-28 space-y-6 shadow-2xl">
            <div className="space-y-2 border-b border-slate-800 pb-4">
              <span className="text-xs text-gray-400">شهریه و قیمت دوره:</span>
              <div className="text-2xl font-black text-cyan-300">{course.price}</div>
            </div>

            <div className="space-y-3 text-xs text-gray-300">
              <div className="flex items-center justify-between py-1 border-b border-slate-800/60">
                <span className="text-gray-400">طول دوره:</span>
                <span className="font-bold text-white">{course.duration}</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-slate-800/60">
                <span className="text-gray-400">تعداد جلسات:</span>
                <span className="font-bold text-white">{course.sessionsCount} جلسه</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-slate-800/60">
                <span className="text-gray-400">سطح آموزشی:</span>
                <span className="font-bold text-cyan-400">{course.level}</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-slate-800/60">
                <span className="text-gray-400">پیش‌نیاز:</span>
                <span className="font-bold text-white">{course.prerequisites}</span>
              </div>
            </div>

            {/* Instructor Box */}
            <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 flex items-center gap-3">
              <Image
                src={course.instructor.avatar}
                alt={course.instructor.name}
                width={48}
                height={48}
                className="rounded-full object-cover"
                unoptimized
              />
              <div>
                <div className="font-bold text-xs text-white">{course.instructor.name}</div>
                <div className="text-[11px] text-gray-400">{course.instructor.role}</div>
              </div>
            </div>

            {/* CTAs */}
            <a
              href="tel:02188252497"
              className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-extrabold rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/20"
            >
              <Phone className="w-4 h-4" />
              <span>ثبت‌نام تلفنی: 02188252497</span>
            </a>

            <a
              href="#consultation"
              className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-cyan-400 border border-cyan-500/30 text-xs font-bold rounded-2xl flex items-center justify-center gap-2"
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
