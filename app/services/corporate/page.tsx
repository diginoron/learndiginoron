import Link from "next/link";
import Image from "next/image";
import { Building2, CheckCircle2, Phone, ArrowLeft, ShieldCheck, TrendingUp, Users, Cpu, FileText } from "lucide-react";
import { COURSES } from "@/data/courses";
import CourseCard from "@/components/CourseCard";
import ContactTeaser from "@/components/ContactTeaser";

export default function CorporateServicePage() {
  const corporateCourses = COURSES.filter((c) => c.category === "corporate");

  return (
    <div className="space-y-16 py-12">
      
      {/* Hero Header */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel bg-white p-8 sm:p-14 rounded-3xl border border-purple-300 relative overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-100 border border-purple-300 text-purple-800 text-xs font-semibold">
                  <Building2 className="w-4 h-4" />
                  <span>دپارتمان آموزش‌های سازمانی دیجی نورون</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
                  خدمات جامع <span className="text-purple-700">آموزش هوش مصنوعی سازمانی</span> و ارگان‌ها
                </h1>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  افزایش بهره‌وری سازمان، اتوماسیون فرایندهای تکراری اداری و آموزش پرامپت‌نویسی پیشرفته به پرسنل و مدیران ارشد با کارگاه‌های اختصاصی حضوری یا آنلاین.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#consultation"
                    className="px-6 py-3.5 bg-purple-700 hover:bg-purple-800 text-white font-extrabold rounded-xl shadow-md text-sm transition-all"
                  >
                    درخواست کارگاه اختصاصی برای شرکت شما
                  </a>
                  <a
                    href="tel:02188252497"
                    className="px-6 py-3.5 bg-slate-100 border border-slate-300 text-cyan-800 text-sm font-bold rounded-xl flex items-center gap-2 hover:bg-slate-200 transition-all"
                  >
                    <Phone className="w-4 h-4 text-cyan-600" />
                    <span>استعلام سازمانی: 02188252497</span>
                  </a>
                </div>
              </div>

              <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-purple-300 shadow-md">
                <Image
                  src="/images/courses/executive-ai.jpg"
                  alt="آموزش سازمانی هوش مصنوعی"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 right-4 left-4 p-4 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200 text-xs text-slate-800 shadow-sm">
                  <div className="font-bold text-purple-800">تحول دیجیتال و اتوماسیون فرایندها</div>
                  <div className="text-slate-500 text-[11px] mt-0.5">سفارشی‌سازی کامل کارگاه بر اساس داده‌ها و سیستم‌های اداری شما</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            محورهای خدمات آموزشی سازمانی
          </h2>
          <p className="text-xs text-slate-500 mt-2">
            راهکارهای متناسب برای سطوح مختلف شغلی در شرکت شما
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="glass-panel bg-white p-6 rounded-2xl border border-purple-200 space-y-4 shadow-sm">
            <div className="p-3 rounded-xl bg-purple-100 text-purple-700 w-fit">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">۱. مسترکلاس مدیران ارشد</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              تدوین استراتژی هوش مصنوعی، سنجش آمادگی سازمانی، نحوه رهبری تیم‌های AI-first و ارزیابی نرخ بازگشت سرمایه (ROI).
            </p>
          </div>

          <div className="glass-panel bg-white p-6 rounded-2xl border border-cyan-200 space-y-4 shadow-sm">
            <div className="p-3 rounded-xl bg-cyan-100 text-cyan-700 w-fit">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">۲. کارگاه‌های اتوماسیون پرسنل</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              افزایش سرعت کارهای اداری، مالی، منابع انسانی و مارکتینگ با پرامپت‌نویسی پیشرفته، خلاصه‌سازی گزارش‌ها و GPTها.
            </p>
          </div>

          <div className="glass-panel bg-white p-6 rounded-2xl border border-emerald-200 space-y-4 shadow-sm">
            <div className="p-3 rounded-xl bg-emerald-100 text-emerald-700 w-fit">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">۳. امنیت داده و شیوه‌نامه AI</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              تدوین چارچوب‌های اخلاقی و امنیتی استفاده از ابزارهای ابری و جلوگیری از نشت اطلاعات محرمانه سازمان.
            </p>
          </div>

        </div>
      </section>

      {/* Corporate Courses List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl font-bold text-slate-900">کارگاه‌ها و دوره‌های سازمانی آماده</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {corporateCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* Call & Consultation */}
      <ContactTeaser />

    </div>
  );
}
