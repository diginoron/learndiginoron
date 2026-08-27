import Link from "next/link";
import { 
  Bot, 
  GraduationCap, 
  Building2, 
  CheckCircle2, 
  ArrowLeft, 
  Brain, 
  Sparkles, 
  Phone, 
  ShieldCheck, 
  Users, 
  Cpu, 
  GitBranch, 
  ArrowRightLeft,
  Zap,
  Compass
} from "lucide-react";
import ContactTeaser from "@/components/ContactTeaser";

export const metadata = {
  title: "خدمات دیجی نورون | هوشمندسازی سازمانی و آموزش هوش مصنوعی",
  description: "خدمات جامع دیجی نورون شامل طراحی سند راهبردی هوشمندسازی، تحلیل فرآیندها با APQC، طراحی ایجنت‌ها، اتوماسیون فرآیندها، پیاده‌سازی و خدمات آموزشی.",
};

export default function ServicesPage() {
  return (
    <div className="space-y-20 py-12">
      
      {/* Header Banner */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-800 text-xs font-semibold">
            <Brain className="w-4 h-4 text-cyan-600" />
            <span>مرکز جامع خدمات هوش مصنوعی دیجی نورون</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
            دو ستون اصلی خدمات <span className="text-gradient-cyan">دیجی نورون</span>
          </h1>

          <p className="text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
            دیجی نورون در دو محور اصلی فعالیت می‌کند: <strong className="text-slate-900 font-bold">۱. خدمات هوشمندسازی سازمانی</strong> (طراحی سند راهبردی، ایجنت‌ها، اتوماسیون، پیاده‌سازی و انتقال تکنولوژی) و <strong className="text-slate-900 font-bold">۲. خدمات آموزشی</strong> (ویژه سازمان‌ها و کودکان/نوجوانان).
          </p>
        </div>
      </section>

      {/* Pillar 1: Enterprise AI (Highest visual weight & prominence) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 border border-cyan-500/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950 border border-cyan-500/40 text-cyan-300 text-xs font-bold rounded-lg mb-2">
                  <Zap className="w-4 h-4 text-cyan-400 animate-pulse" />
                  <span>ستون اصلی شماره ۱ (خدمات سازمانی)</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black">
                  خدمات هوشمندسازی سازمانی دیجی نورون
                </h2>
              </div>
              <Link
                href="/services/enterprise-ai"
                className="px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-black rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-all self-start md:self-auto"
              >
                <span>مشاهده صفحه کامل و مستندات هوشمندسازی</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>

            <p className="text-sm sm:text-base text-slate-300 max-w-4xl leading-relaxed">
              ارائه راهکارهای جامع B2B برای تبدیل سازمان‌ها به ساختارهای هوشمند و داده‌محور شامل طراحی سند راهبردی مبتنی بر APQC، طراحی و استقرار ایجنت‌های تصمیم‌گیر، اتوماسیون فرآیندهای عملیاتی، ارتقای سیستم‌های قدیمی، پیاده‌سازی On-Premise و انتقال کامل سورس‌کد و دانش فنی.
            </p>

            {/* 6 Sub-services Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              
              <div className="p-4 bg-slate-900/90 border border-amber-500/40 rounded-2xl space-y-2 relative overflow-hidden">
                <div className="p-2 rounded-lg bg-amber-950 text-amber-400 w-fit">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-sm flex items-center justify-between">
                  <span>طراحی سند راهبردی هوشمندسازی</span>
                  <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full font-mono">APQC</span>
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  عارضه‌یابی ساختار، تحلیل شکاف فرآیندها مبتنی بر APQC و ترسیم اطلس راهبردی پروژه‌های بهبود هوش مصنوعی با اولویت ROI.
                </p>
              </div>

              <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
                <div className="p-2 rounded-lg bg-cyan-950 text-cyan-400 w-fit">
                  <Bot className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-sm">طراحی هوش مصنوعی و ایجنت‌های سازمانی</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  توسعه ایجنت‌های خودمختار چندعامله، دستیارهای اداری متصل به اسناد محرمانه و سیستم‌های تصمیم‌یار مدیران.
                </p>
              </div>

              <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
                <div className="p-2 rounded-lg bg-blue-950 text-blue-400 w-fit">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-sm">هوشمندسازی فرآیندها (BPA)</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  اتوماسیون هوشمند امور مالی، صدور فاکتور، غربالگری منابع انسانی، پیش‌بینی رفتار مشتریان و گزارش‌گیری خودکار.
                </p>
              </div>

              <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
                <div className="p-2 rounded-lg bg-indigo-950 text-indigo-400 w-fit">
                  <GitBranch className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-sm">پیاده‌سازی و به‌روزرسانی زیرساخت</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  استقرار On-Premise مدل‌های زبانی بدون نشت داده، ارتقای نرم‌افزارهای legacy و اتصال مستقیم به ERP سازمان.
                </p>
              </div>

              <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
                <div className="p-2 rounded-lg bg-emerald-950 text-emerald-400 w-fit">
                  <ArrowRightLeft className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-sm">انتقال تکنولوژی و دانش فنی</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  تحویل کامل کدهای منبع، مستندات معماری و توانمندسازی تیم IT درون‌سازمانی برای جلوگیری از وابستگی انحصاری.
                </p>
              </div>

              <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
                <div className="p-2 rounded-lg bg-purple-950 text-purple-400 w-fit">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-sm">آموزش‌های تخصصی سازمانی</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  مسترکلاس‌های استراتژی هوش مصنوعی ویژه مدیران ارشد، کارگاه‌های مهندسی پرامپت پرسنل و شیوه‌نامه‌های امنیت داده.
                </p>
              </div>

            </div>

            <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800">
              <span className="text-xs text-slate-400">
                جهت استعلام نیازهای سازمانی یا دریافت پروپوزال فنی با ما در ارتباط باشید.
              </span>
              <a
                href="tel:02188252497"
                className="text-xs font-bold text-cyan-300 flex items-center gap-1.5 hover:underline"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>تماس مستقیم: 02188252497</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 2: Educational Services (2 Tracks: Corporate & Kids/Teens) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 border border-purple-200 text-purple-800 text-xs font-bold rounded-lg mb-2">
            <GraduationCap className="w-4 h-4 text-purple-600" />
            <span>ستون شماره ۲ (خدمات آموزشی)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            خدمات آموزشی تخصصی در دو بخش
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            ارائه دوره‌ها و برنامه‌های استاندارد یادگیری برای ارتقای شغلی سازمانی و پرورش نسل آینده
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Level 1: Corporate Training */}
          <div className="glass-panel bg-white p-8 sm:p-10 rounded-3xl border border-purple-200 relative flex flex-col justify-between space-y-6 shadow-md">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="p-4 rounded-2xl bg-purple-100 text-purple-700 border border-purple-300">
                  <Building2 className="w-8 h-8" />
                </div>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 border border-purple-300 rounded-full text-xs font-bold">
                  بخش سازمانی و ارگان‌ها
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                آموزش‌های سازمانی و توانمندسازی پرسنل
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                ویژه شرکت‌ها، سازمان‌های دولتی و خصوصی، مدیران ارشد و تیم‌های عملیاتی جهت افزایش بهره‌وری، اتوماسیون اداری و تدوین استراتژی کاربردی هوش مصنوعی.
              </p>

              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
                <h4 className="text-xs font-bold text-purple-700 uppercase tracking-wider">سرفصل‌ها و محورهای اصلی:</h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600" />
                    <span>مسترکلاس استراتژی هوش مصنوعی ویژه مدیران و تصمیم‌گیران</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600" />
                    <span>کارگاه‌های مهندسی پرامپت و اتوماسیون وظایف برای کارمندان</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600" />
                    <span>شیوه‌نامه‌های امنیت داده و جلوگیری از نشت اطلاعات محرمانه</span>
                  </li>
                </ul>
              </div>
            </div>

            <Link
              href="/services/corporate"
              className="w-full py-4 bg-purple-700 hover:bg-purple-800 text-white font-extrabold rounded-2xl flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <span>مشاهده کامل خدمات و دوره‌های سازمانی</span>
              <ArrowLeft className="w-4 h-4 text-white" />
            </Link>
          </div>

          {/* Level 2: Kids & Teens */}
          <div className="glass-panel bg-white p-8 sm:p-10 rounded-3xl border border-cyan-200 relative flex flex-col justify-between space-y-6 shadow-md">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="p-4 rounded-2xl bg-cyan-100 text-cyan-700 border border-cyan-300">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <span className="px-3 py-1 bg-cyan-100 text-cyan-800 border border-cyan-300 rounded-full text-xs font-bold">
                  بخش کودکان و نوجوانان (۸ تا ۱۸ سال)
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                آموزش هوش مصنوعی کودکان و نوجوانان
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                آموزش بازی‌محور، ساخت بازی‌های کامپیوتری، تفکر الگوریتمی، برنامه‌نویسی پایتون و آشنایی با ابزارهای تولید تصویر و چت‌بات‌ها برای سنین ۸ تا ۱۸ سال.
              </p>

              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
                <h4 className="text-xs font-bold text-cyan-700 uppercase tracking-wider">سرفصل‌ها و محورهای اصلی:</h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                    <span>آموزش تفکر الگوریتمی و سواد پایه هوش مصنوعی با Scratch & Teachable Machine</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                    <span>برنامه‌نویسی پایتون نوجوانان، پردازش تصویر و ساخت بازی</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                    <span>ساخت دستیارهای صوتی و اخلاق کاربری ایمن در فضای دیجیتال</span>
                  </li>
                </ul>
              </div>
            </div>

            <Link
              href="/services/kids-and-teens"
              className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-extrabold rounded-2xl flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <span>مشاهده کامل خدمات کودکان و نوجوانان</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* Consultation Section */}
      <ContactTeaser />

    </div>
  );
}
