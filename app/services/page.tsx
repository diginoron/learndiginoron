import Link from "next/link";
import { GraduationCap, Building2, CheckCircle2, ArrowLeft, Brain, Sparkles, Phone, ShieldCheck, Users } from "lucide-react";
import ContactTeaser from "@/components/ContactTeaser";

export default function ServicesPage() {
  return (
    <div className="space-y-16 py-12">
      
      {/* Header Banner */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-800 text-xs font-semibold">
            <Brain className="w-4 h-4" />
            <span>خدمات آموزشی تخصصی هوش مصنوعی | learn.diginoron.com</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900">
            خدمات آموزشی <span className="text-gradient-cyan">دیجی نورون</span> در دو سطح اصلی
          </h1>

          <p className="text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
            آموزش‌های ما به‌صورت کاملاً تخصصی و هدفمند در دو سطح «کودکان و نوجوانان» و «آموزش‌های سازمانی و ارگان‌ها» طراحی شده تا پاسخگوی دقیق نیازهای هر گروه باشد.
          </p>
        </div>
      </section>

      {/* Main 2 Tracks Detailed Comparison */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Level 1: Kids & Teens */}
          <div className="glass-panel bg-white p-8 sm:p-10 rounded-3xl border border-cyan-300 relative flex flex-col justify-between space-y-6 shadow-md">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="p-4 rounded-2xl bg-cyan-100 text-cyan-700 border border-cyan-300">
                  <GraduationCap className="w-10 h-10" />
                </div>
                <span className="px-3 py-1 bg-cyan-100 text-cyan-800 border border-cyan-300 rounded-full text-xs font-bold">
                  سطح ۱: کودکان و نوجوانان
                </span>
              </div>

              <h2 className="text-2xl font-bold text-slate-900">
                آموزش هوش مصنوعی برای کودکان و نوجوانان (۸ تا ۱۸ سال)
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                این خدمات آموزشی شامل یادگیری بازی‌محور، ساخت بازی‌های کامپوتری، تفکر تفکیکی، برنامه‌نویسی پایتون و آشنایی با ابزارهای تولید محتوای تصویری و متنی هوش مصنوعی است.
              </p>

              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
                <h3 className="text-xs font-bold text-cyan-700 uppercase tracking-wider">سرفصل‌ها و محورهای اصلی:</h3>
                
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                    <span>آموزش تفکر الگوریتمی با Scratch & Teachable Machine</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                    <span>برنامه‌نویسی مقدماتی تا پیشرفته زبان پایتون (Python)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                    <span>پردازش تصویر، ساخت چت‌بات و رباتیک دانش‌آموزی</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                    <span>اخلاق دیجیتال و استفاده ایمن از ابزارهای مولد AI</span>
                  </li>
                </ul>
              </div>
            </div>

            <Link
              href="/services/kids-and-teens"
              className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-extrabold rounded-2xl flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <span>اطلاعات کامل و ثبت‌نام دوره‌های کودکان و نوجوانان</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>

          {/* Level 2: Corporate */}
          <div className="glass-panel bg-white p-8 sm:p-10 rounded-3xl border border-purple-300 relative flex flex-col justify-between space-y-6 shadow-md">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="p-4 rounded-2xl bg-purple-100 text-purple-700 border border-purple-300">
                  <Building2 className="w-10 h-10" />
                </div>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 border border-purple-300 rounded-full text-xs font-bold">
                  سطح ۲: آموزش‌های سازمانی
                </span>
              </div>

              <h2 className="text-2xl font-bold text-slate-900">
                خدمات آموزش هوش مصنوعی سازمانی و ارگان‌ها
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                ویژه شرکت‌ها، سازمان‌های دولتی و خصوصی، مدیران ارشد و تیم‌های عملیاتی جهت افزایش بهره‌وری، اتوماسیون فرایندها و تدوین استراتژی هوش مصنوعی.
              </p>

              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
                <h3 className="text-xs font-bold text-purple-700 uppercase tracking-wider">سرفصل‌ها و محورهای اصلی:</h3>
                
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600" />
                    <span>مسترکلاس استراتژی و تحول دیجیتال ویژه مدیران ارشد</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600" />
                    <span>کارگاه‌های مهندسی پرامپت و اتوماسیون اداری برای پرسنل</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600" />
                    <span>طراحی و استقرار دستیارهای هوشمند اختصاصی (Custom Bots)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600" />
                    <span>ارزیابی امنیت داده و شیوه‌نامه‌های استفاده از LLMها</span>
                  </li>
                </ul>
              </div>
            </div>

            <Link
              href="/services/corporate"
              className="w-full py-4 bg-purple-700 hover:bg-purple-800 text-white font-extrabold rounded-2xl flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <span>اطلاعات کامل و درخواست مشاوره سازمانی</span>
              <ArrowLeft className="w-4 h-4 text-white" />
            </Link>
          </div>

        </div>
      </section>

      {/* Methodology Section */}
      <section className="bg-white py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl font-bold text-slate-900">چرا خدمات آموزشی دیجی نورون؟</h2>
            <p className="text-xs text-slate-500 mt-2">
              مزایای رقابتی که دیجی نورون را به انتخاب اول فراگیران و سازمان‌ها تبدیل کرده است.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center space-y-3 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center mx-auto">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">استادان و متخصصین برجسته</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                بهره‌گیری از اساتید دانشگاهی و پژوهشگران باسابقه هوش مصنوعی در ایران.
              </p>
            </div>

            <div className="glass-panel bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center space-y-3 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mx-auto">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">برنامه درسی کاملاً بروز</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                سرفصل‌های منطبق با آخرین دستاوردهای سال ۲۰۲۶ و ابزارهای پیشرفته جهانی.
              </p>
            </div>

            <div className="glass-panel bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center space-y-3 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">پشتیبانی و مشاوره دائم</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                امکان مشاوره مستقیم با شماره 02188252497 و پشتیبانی آنلاین دوره‌ها.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <ContactTeaser />

    </div>
  );
}
