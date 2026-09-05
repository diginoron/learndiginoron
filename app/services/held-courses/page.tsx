import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { 
  Award, 
  MapPin, 
  Calendar, 
  Users, 
  BookOpen, 
  CheckCircle2, 
  Sparkles, 
  Phone, 
  Building2, 
  ArrowLeft
} from "lucide-react";
import { HELD_COURSES } from "@/data/heldCourses";
import ContactTeaser from "@/components/ContactTeaser";

export const metadata: Metadata = {
  title: "دوره‌های برگزار شده | آکادمی هوش مصنوعی دیجی نورون",
  description: "گزارش سوابق دوره‌ها و کارگاه‌های تخصصی هوش مصنوعی برگزار شده توسط دیجی نورون برای سازمان‌ها، اصناف و صنایع در سراسر کشور.",
};

export default function HeldCoursesPage() {
  return (
    <div className="space-y-16 py-12">
      
      {/* Hero Header */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel bg-white p-8 sm:p-14 rounded-3xl border border-slate-200 relative overflow-hidden shadow-lg">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-800 text-xs font-semibold">
                <Award className="w-4 h-4 text-amber-600" />
                <span>سوابق و کارنامه‌ی آموزشی دیجی نورون</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
                دوره‌ها و کارگاه‌های <span className="text-gradient-cyan">برگزار شده</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                دیجی نورون با افتخار دوره‌ها و کارگاه‌های توانمندسازی هوش مصنوعی را برای اصناف تخصصی، نهادها، تشکل‌های صنفی و سازمان‌ها در شهرهای مختلف کشور برگزار نموده است. در این بخش می‌توانید سوابق رویدادها، سرفصل‌های تدریس شده و نتایج کارگاه‌ها را مشاهده نمایید.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#courses-list"
                  className="px-6 py-3.5 bg-slate-900 hover:bg-cyan-900 text-white font-extrabold rounded-xl shadow-md text-sm transition-all flex items-center gap-2"
                >
                  <span>مشاهده رویدادها</span>
                  <ArrowLeft className="w-4 h-4 text-cyan-400" />
                </a>
                <a
                  href="tel:02188252497"
                  className="px-6 py-3.5 bg-slate-100 border border-slate-300 text-slate-800 text-sm font-bold rounded-xl flex items-center gap-2 hover:bg-slate-200 transition-all"
                >
                  <Phone className="w-4 h-4 text-cyan-600" />
                  <span>درخواست برگزاری دوره برای سازمان شما: ۰۲۱۸۸۲۵۲۴۹۷</span>
                </a>
              </div>
            </div>

            {/* Subtle decorative background pattern */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-purple-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
          </div>
        </div>
      </section>

      {/* Held Courses List */}
      <section id="courses-list" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <h2 className="text-2xl font-black text-slate-900">
              رویدادها و کارگاه‌های اجرا شده
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              مجموعه‌ای از نشست‌ها و برنامه‌های آموزشی حضوری و سازمانی
            </p>
          </div>
          <span className="px-3 py-1 bg-cyan-50 border border-cyan-200 text-cyan-800 rounded-full text-xs font-bold self-start sm:self-auto">
            {HELD_COURSES.length} رویداد ثبت‌شده
          </span>
        </div>

        <div className="space-y-12">
          {HELD_COURSES.map((course) => (
            <div
              key={course.id}
              className="glass-panel bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                
                {/* Image & Key Badges */}
                <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full bg-slate-900">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  
                  {/* Top Badge */}
                  <div className="absolute top-4 right-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-amber-500/90 backdrop-blur-md text-slate-950 font-black rounded-lg text-xs shadow">
                      برگزار شده
                    </span>
                    <span className="px-3 py-1 bg-slate-900/80 backdrop-blur-md text-cyan-300 font-bold rounded-lg text-xs border border-cyan-500/30">
                      {course.categoryName}
                    </span>
                  </div>

                  {/* Bottom Info on Image */}
                  <div className="absolute bottom-4 right-4 left-4 p-3.5 bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-700/60 text-white space-y-1.5 text-xs shadow-md">
                    <div className="flex items-center gap-2 text-cyan-300 font-bold">
                      <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{course.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300 text-[11px]">
                      <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>تاریخ برگزاری: {course.date}</span>
                    </div>
                    {course.partner && (
                      <div className="text-[11px] text-purple-300 font-medium pt-1 border-t border-slate-800">
                        {course.partner}
                      </div>
                    )}
                  </div>
                </div>

                {/* Course Details */}
                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    
                    {/* Tags */}
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="flex items-center gap-1 text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        <span>{course.city}</span>
                      </span>
                      <span className="flex items-center gap-1 text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        <span>{course.year}</span>
                      </span>
                      <span className="flex items-center gap-1 text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
                        <Users className="w-3.5 h-3.5 text-slate-500" />
                        <span>مخاطبان: {course.audience}</span>
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                      {course.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {course.fullDesc}
                    </p>

                    {/* Topics covered */}
                    <div className="pt-2">
                      <h4 className="text-xs font-black text-cyan-800 flex items-center gap-1.5 mb-3">
                        <BookOpen className="w-4 h-4 text-cyan-600" />
                        <span>محتوا و سرفصل‌های تدریس شده در این دوره:</span>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {course.topics.map((topic, i) => (
                          <div 
                            key={i} 
                            className="flex items-start gap-2 p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 leading-snug"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 mt-0.5 shrink-0" />
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Highlights / Pillars */}
                    {course.keyPoints && (
                      <div className="pt-2">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {course.keyPoints.map((point, idx) => (
                            <div key={idx} className="p-3 bg-cyan-50/60 rounded-xl border border-cyan-200 space-y-1">
                              <div className="text-xs font-bold text-cyan-900">{point.title}</div>
                              <p className="text-[11px] text-slate-600 leading-relaxed">{point.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Achievements */}
                    {course.achievements && course.achievements.length > 0 && (
                      <div className="pt-2">
                        <h4 className="text-xs font-black text-purple-800 flex items-center gap-1.5 mb-2">
                          <Sparkles className="w-4 h-4 text-purple-600" />
                          <span>دستاوردها و نتایج کارگاه:</span>
                        </h4>
                        <ul className="space-y-1.5 text-xs text-slate-600">
                          {course.achievements.map((ach, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                  </div>

                  {/* Actions Bar */}
                  <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                    <div className="text-xs text-slate-500">
                      محل برگزاری: <span className="font-bold text-slate-800">{course.location}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Link
                        href="/contact"
                        className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-xl text-xs transition-colors shadow-sm flex items-center gap-1.5"
                      >
                        <span>درخواست اجرای این دوره برای صنف یا سازمان شما</span>
                        <ArrowLeft className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Invitation Section for Organizations / Guilds */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel bg-gradient-to-r from-slate-900 via-cyan-950 to-slate-900 text-white p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold border border-cyan-500/30">
                <Building2 className="w-3.5 h-3.5 text-cyan-300" />
                <span>برگزاری دوره‌ها و کارگاه‌های سفارشی</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black leading-tight">
                آیا مایل به برگزاری کارگاه هوش مصنوعی در صنف یا شهر خود هستید؟
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                تیم اساتید و متخصصان دیجی نورون آماده طراحی و اجرای کارگاه‌های تخصصی متناسب با نیاز اتحادیه‌ها، انجمن‌های صنفی، نهادهای دولتی و شرکت‌های خصوصی در سراسر ایران به صورت حضوری و آنلاین می‌باشد.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <Link
                href="/contact"
                className="px-6 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black rounded-xl text-xs sm:text-sm text-center transition-all shadow-lg"
              >
                ثبت درخواست همکاری آموزشی
              </Link>
              <a
                href="tel:02188252497"
                className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-cyan-300 font-bold rounded-xl text-xs sm:text-sm text-center border border-slate-700 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span className="font-mono">02188252497</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Global Contact / CTA */}
      <ContactTeaser />

    </div>
  );
}
