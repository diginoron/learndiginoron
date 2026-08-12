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
          <div className="glass-panel p-8 sm:p-14 rounded-3xl border border-purple-500/30 bg-gradient-to-br from-slate-900 via-purple-950/40 to-slate-950 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-950 border border-purple-500/40 text-purple-300 text-xs font-semibold">
                  <Building2 className="w-4 h-4" />
                  <span>دپارتمان آموزش‌های سازمانی دیجی نورون</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
                  خدمات جامع <span className="text-purple-400">آموزش هوش مصنوعی سازمانی</span> و ارگان‌ها
                </h1>

                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  افزایش بهره‌وری سازمان، اتوماسیون فرایندهای تکراری اداری و آموزش پرامپت‌نویسی پیشرفته به پرسنل و مدیران ارشد با کارگاه‌های اختصاصی حضوری یا آنلاین.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#consultation"
                    className="px-6 py-3.5 bg-purple-600 hover:bg-purple-500 text-white font-extrabold rounded-xl shadow-lg shadow-purple-950/50 text-sm transition-all"
                  >
                    درخواست کارگاه اختصاصی برای شرکت شما
                  </a>
                  <a
                    href="tel:02188252497"
                    className="px-6 py-3.5 bg-slate-900 border border-slate-700 text-cyan-300 text-sm font-bold rounded-xl flex items-center gap-2 hover:bg-slate-800 transition-all"
                  >
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>استعلام سازمانی: 02188252497</span>
                  </a>
                </div>
              </div>

              <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-purple-500/30 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop"
                  alt="آموزش سازمانی هوش مصنوعی"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-4 right-4 left-4 p-4 bg-slate-900/90 backdrop-blur-md rounded-xl border border-slate-800 text-xs text-gray-200">
                  <div className="font-bold text-purple-300">تحول دیجیتال و اتوماسیون فرایندها</div>
                  <div className="text-gray-400 text-[11px] mt-0.5">سفارشی‌سازی کامل کارگاه بر اساس داده‌ها و سیستم‌های اداری شما</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            محورهای خدمات آموزشی سازمانی
          </h2>
          <p className="text-xs text-gray-400 mt-2">
            راهکارهای متناسب برای سطوح مختلف شغلی در شرکت شما
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="glass-panel p-6 rounded-2xl border border-purple-500/20 space-y-4">
            <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 w-fit">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-white text-lg">۱. مسترکلاس مدیران ارشد</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              تدوین استراتژی هوش مصنوعی، سنجش آمادگی سازمانی، نحوه رهبری تیم‌های AI-first و ارزیابی نرخ بازگشت سرمایه (ROI).
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-cyan-500/20 space-y-4">
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 w-fit">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-white text-lg">۲. کارگاه‌های اتوماسیون پرسنل</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              افزایش سرعت کارهای اداری، مالی، منابع انسانی و مارکتینگ با پرامپت‌نویسی پیشرفته، خلاصه‌سازی گزارش‌ها و GPTها.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-emerald-500/20 space-y-4">
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 w-fit">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-white text-lg">۳. امنیت داده و شیوه‌نامه AI</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              تدوین چارچوب‌های اخلاقی و امنیتی استفاده از ابزارهای ابری و جلوگیری از نشت اطلاعات محرمانه سازمان.
            </p>
          </div>

        </div>
      </section>

      {/* Corporate Courses List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl font-bold text-white">کارگاه‌ها و دوره‌های سازمانی آماده</h2>
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
