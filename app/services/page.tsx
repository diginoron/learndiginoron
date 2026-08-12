import Link from "next/link";
import { GraduationCap, Building2, CheckCircle2, ArrowLeft, Brain, Sparkles, Phone, ShieldCheck, Users } from "lucide-react";
import ContactTeaser from "@/components/ContactTeaser";

export default function ServicesPage() {
  return (
    <div className="space-y-16 py-12">
      
      {/* Header Banner */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
            <Brain className="w-4 h-4" />
            <span>خدمات آموزشی تخصصی هوش مصنوعی | learn.diginoron.com</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white">
            خدمات آموزشی <span className="text-gradient-cyan">دیجی نورون</span> در دو سطح اصلی
          </h1>

          <p className="text-base text-gray-300 max-w-3xl mx-auto leading-relaxed">
            آموزش‌های ما به‌صورت کاملاً تخصصی و هدفمند در دو سطح «کودکان و نوجوانان» و «آموزش‌های سازمانی و ارگان‌ها» طراحی شده تا پاسخگوی دقیق نیازهای هر گروه باشد.
          </p>
        </div>
      </section>

      {/* Main 2 Tracks Detailed Comparison */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Level 1: Kids & Teens */}
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-cyan-500/30 relative flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="p-4 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/40">
                  <GraduationCap className="w-10 h-10" />
                </div>
                <span className="px-3 py-1 bg-cyan-950 text-cyan-300 border border-cyan-500/30 rounded-full text-xs font-bold">
                  سطح ۱: کودکان و نوجوانان
                </span>
              </div>

              <h2 className="text-2xl font-bold text-white">
                آموزش هوش مصنوعی برای کودکان و نوجوانان (۸ تا ۱۸ سال)
              </h2>

              <p className="text-sm text-gray-300 leading-relaxed">
                این خدمات آموزشی شامل یادگیری بازی‌محور، ساخت بازی‌های کامپوتری، تفکر تفکیکی، برنامه‌نویسی پایتون و آشنایی با ابزارهای تولید محتوای تصویری و متنی هوش مصنوعی است.
              </p>

              <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-3">
                <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-wider">سرفصل‌ها و محورهای اصلی:</h3>
                
                <ul className="space-y-2 text-xs text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>آموزش تفکر الگوریتمی با Scratch & Teachable Machine</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>برنامه‌نویسی مقدماتی تا پیشرفته زبان پایتون (Python)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>پردازش تصویر، ساخت چت‌بات و رباتیک دانش‌آموزی</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>اخلاق دیجیتال و استفاده ایمن از ابزارهای مولد AI</span>
                  </li>
                </ul>
              </div>
            </div>

            <Link
              href="/services/kids-and-teens"
              className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-extrabold rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/20"
            >
              <span>اطلاعات کامل و ثبت‌نام دوره‌های کودکان و نوجوانان</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>

          {/* Level 2: Corporate */}
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-purple-500/30 relative flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="p-4 rounded-2xl bg-purple-500/20 text-purple-400 border border-purple-500/40">
                  <Building2 className="w-10 h-10" />
                </div>
                <span className="px-3 py-1 bg-purple-950 text-purple-300 border border-purple-500/30 rounded-full text-xs font-bold">
                  سطح ۲: آموزش‌های سازمانی
                </span>
              </div>

              <h2 className="text-2xl font-bold text-white">
                خدمات آموزش هوش مصنوعی سازمانی و ارگان‌ها
              </h2>

              <p className="text-sm text-gray-300 leading-relaxed">
                ویژه شرکت‌ها، سازمان‌های دولتی و خصوصی، مدیران ارشد و تیم‌های عملیاتی جهت افزایش بهره‌وری، اتوماسیون فرایندها و تدوین استراتژی هوش مصنوعی.
              </p>

              <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-3">
                <h3 className="text-xs font-bold text-purple-400 uppercase tracking-wider">سرفصل‌ها و محورهای اصلی:</h3>
                
                <ul className="space-y-2 text-xs text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400" />
                    <span>مسترکلاس استراتژی و تحول دیجیتال ویژه مدیران ارشد</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400" />
                    <span>کارگاه‌های مهندسی پرامپت و اتوماسیون اداری برای پرسنل</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400" />
                    <span>طراحی و استقرار دستیارهای هوشمند اختصاصی (Custom Bots)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400" />
                    <span>ارزیابی امنیت داده و شیوه‌نامه‌های استفاده از LLMها</span>
                  </li>
                </ul>
              </div>
            </div>

            <Link
              href="/services/corporate"
              className="w-full py-4 bg-purple-900/90 hover:bg-purple-800 text-white font-extrabold rounded-2xl flex items-center justify-center gap-2 transition-all border border-purple-500/40 shadow-lg shadow-purple-950/50"
            >
              <span>اطلاعات کامل و درخواست مشاوره سازمانی</span>
              <ArrowLeft className="w-4 h-4 text-purple-300" />
            </Link>
          </div>

        </div>
      </section>

      {/* Methodology Section */}
      <section className="bg-slate-950 py-16 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl font-bold text-white">چرا خدمات آموزشی دیجی نورون؟</h2>
            <p className="text-xs text-gray-400 mt-2">
              مزایای رقابتی که دیجی نورون را به انتخاب اول فراگیران و سازمان‌ها تبدیل کرده است.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 text-center space-y-3">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mx-auto">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-white text-base">استادان و متخصصین برجسته</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                بهره‌گیری از اساتید دانشگاهی و پژوهشگران باسابقه هوش مصنوعی در ایران.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-slate-800 text-center space-y-3">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mx-auto">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-white text-base">برنامه درسی کاملاً بروز</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                سرفصل‌های منطبق با آخرین دستاوردهای سال ۲۰۲۶ و ابزارهای پیشرفته جهانی.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-slate-800 text-center space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-white text-base">پشتیبانی و مشاوره دائم</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
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
