import Link from "next/link";
import Image from "next/image";
import { GraduationCap, CheckCircle2, Clock, Award, Users, Sparkles, Phone, ArrowLeft, Gamepad2, Code, Shield } from "lucide-react";
import { COURSES } from "@/data/courses";
import CourseCard from "@/components/CourseCard";
import ContactTeaser from "@/components/ContactTeaser";

export default function KidsAndTeensServicePage() {
  const kidsCourses = COURSES.filter((c) => c.category === "kids");

  return (
    <div className="space-y-16 py-12">
      
      {/* Hero Header */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel bg-white p-8 sm:p-14 rounded-3xl border border-cyan-300 relative overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-800 text-xs font-semibold">
                  <GraduationCap className="w-4 h-4" />
                  <span>دپارتمان تخصصی کودکان و نوجوانان دیجی نورون</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
                  آموزش جامع <span className="text-gradient-cyan">هوش مصنوعی</span> برای کودکان و نوجوانان
                </h1>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  ما در آکادمی دیجی نورون با طراحی یک مسیر سرگرم‌کننده و در عین حال کاملاً علمی، فرزندان شما را از مصرف‌کننده صرف تکنولوژی به خلق‌کننده ابزارها و برنامه‌های هوشمند تبدیل می‌کنیم.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#kids-courses"
                    className="px-6 py-3.5 bg-cyan-600 hover:bg-cyan-700 text-white font-extrabold rounded-xl shadow-md text-sm transition-all"
                  >
                    مشاهده دوره‌ها (۸ تا ۱۸ سال)
                  </a>
                  <a
                    href="tel:02188252497"
                    className="px-6 py-3.5 bg-slate-100 border border-slate-300 text-cyan-800 text-sm font-bold rounded-xl flex items-center gap-2 hover:bg-slate-200 transition-all"
                  >
                    <Phone className="w-4 h-4 text-cyan-600" />
                    <span>مشاوره والدین: 02188252497</span>
                  </a>
                </div>
              </div>

              <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-cyan-300 shadow-md">
                <Image
                  src="/images/courses/kids-ai.jpg"
                  alt="آموزش هوش مصنوعی به کودکان"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 right-4 left-4 p-4 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200 text-xs text-slate-800 shadow-sm">
                  <div className="font-bold text-cyan-800">کلاس‌های پروژه‌محور و بازی‌محور</div>
                  <div className="text-slate-500 text-[11px] mt-0.5">آموزش با ابزارهای استاندارد جهانی Scratch, Teachable Machine & Python</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Age Groups Division */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            تفکیک سطوح آموزشی بر اساس سن
          </h2>
          <p className="text-xs text-slate-500 mt-2">
            محتوای آموزشی متناسب با رشد شناختی و ظرفیت یادگیری هر رده سنی
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* 8-12 Years */}
          <div className="glass-panel bg-white p-8 rounded-3xl border border-cyan-300 relative shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 bg-cyan-100 text-cyan-800 font-bold text-xs rounded-full border border-cyan-300">
                گروه سنی ۸ تا ۱۲ سال
              </span>
              <Gamepad2 className="w-8 h-8 text-cyan-600" />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3">سطح کودکان: تفکر الگوریتمی و هوش دیداری</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              آموزش مفاهیم پایه هوش مصنوعی بدون پیچیدگی‌های برنامه‌نویسی متنی، از طریق ابزارهای گرافیکی و ساخت بازی.
            </p>

            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                <span>شناخت مفاهیم داده، ورودی و خروجی الگوریتم‌ها</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                <span>آموزش مدل‌های هوشمند به کمک دوربین و میکروفون</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                <span>خلق نقاشی، انیمیشن و کاراکتر با AI</span>
              </li>
            </ul>
          </div>

          {/* 13-18 Years */}
          <div className="glass-panel bg-white p-8 rounded-3xl border border-blue-300 relative shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 font-bold text-xs rounded-full border border-blue-300">
                گروه سنی ۱۳ تا ۱۸ سال
              </span>
              <Code className="w-8 h-8 text-blue-600" />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3">سطح نوجوانان: پایتون، پردازش تصویر و NLP</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              آموزش کدنویسی واقعی به زبان پایتون، کار با کتابخانه‌های هوش مصنوعی و پیاده‌سازی ربات‌های هوشمند.
            </p>

            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>برنامه‌نویسی مقدماتی تا پیشرفته Python</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>تشخیص چهره و اشیاء با کتابخانه OpenCV</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>طراحی چت‌بات و دستیار هوشمند متنی</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* Courses List */}
      <section id="kids-courses" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl font-bold text-slate-900">دوره‌های فعال کودکان و نوجوانان</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {kidsCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* Consultation Section */}
      <ContactTeaser />

    </div>
  );
}
