import Link from "next/link";
import Image from "next/image";
import { 
  Bot, 
  Cpu, 
  GitBranch, 
  ArrowRightLeft, 
  Building2, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  ArrowLeft, 
  Phone, 
  Server, 
  Workflow, 
  LineChart, 
  Sparkles,
  Lock,
  Headphones,
  FileCheck2,
  Database
} from "lucide-react";
import ContactTeaser from "@/components/ContactTeaser";

export const metadata = {
  title: "خدمات هوشمندسازی سازمانی و ایجنت‌های هوش مصنوعی | دیجی نورون",
  description: "خدمات تخصصی هوشمندسازی سازمانی، طراحی ایجنت‌های اختصاصی (AI Agents)، اتوماسیون فرآیندها (BPA)، پیاده‌سازی On-Premise، انتقال تکنولوژی و آموزش‌های سازمانی دیجی نورون.",
};

export default function EnterpriseAIPage() {
  return (
    <div className="space-y-20 py-10">
      
      {/* Hero Header */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white p-8 sm:p-14 rounded-3xl border border-cyan-500/30 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 text-xs font-bold">
                  <Zap className="w-4 h-4 text-cyan-400 animate-pulse" />
                  <span>دپارتمان تخصصی هوشمندسازی سازمانی دیجی نورون</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-black leading-tight">
                  تحول و <span className="text-gradient-cyan">هوشمندسازی جامع سازمان‌ها</span> با هوش مصنوعی
                </h1>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  ما با طراحی ایجنت‌های هوشمند سازمانی، اتوماسیون هوشمند فرآیندها (BPA)، پیاده‌سازی و استقرار امن On-Premise، انتقال کامل تکنولوژی و آموزش‌های تخصصی، سازمان شما را به سطح بالاتری از بهره‌وری و رقابت‌پذیری می‌رسانیم.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#consultation-form"
                    className="px-7 py-4 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-black rounded-xl shadow-lg shadow-cyan-500/25 text-sm transition-all hover:scale-105"
                  >
                    درخواست جلسه دمو و ممیزی سازمانی
                  </a>
                  <a
                    href="tel:02188252497"
                    className="px-6 py-4 bg-slate-800/80 border border-slate-700 hover:bg-slate-800 text-white text-sm font-bold rounded-xl flex items-center gap-2 transition-all"
                  >
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>مشاوره مستقیم: 02188252497</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs font-bold text-cyan-300">
                  <span>مزایای راهکارهای سازمانی دیجی نورون</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex items-start gap-2.5 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong>استقرار محلی (On-Premise):</strong> تضمین ۱۰۰٪ عدم خروج داده‌های حساس و محرمانه از شبکه سازمان</span>
                  </div>
                  <div className="flex items-start gap-2.5 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong>ایجنت‌های چندعامله (Multi-Agent):</strong> انجام خودکار وظایف بین‌واحدی با دقت انسانی و سرعت ماشین</span>
                  </div>
                  <div className="flex items-start gap-2.5 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong>انتقال کامل سورس‌کد و دانش:</strong> عدم وابستگی دائمی به پیمانکار و آموزش کامل تیم IT داخلی</span>
                  </div>
                  <div className="flex items-start gap-2.5 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong>پشتیبانی و SLA رسمی:</strong> پشتیبانی فنی، مانیتورینگ بلادرنگ و به‌روزرسانی مدل‌ها</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 5 Pillars Detailed Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-800 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>پنج ستون خدمات هوشمندسازی سازمانی</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            شرح تفصیلی محورهای خدمات هوشمندسازی
          </h2>
          <p className="text-sm text-slate-600">
            بررسی جامع حوزه‌های تخصصی ارائه خدمت به شرکت‌ها و سازمان‌های خصوصی و دولتی
          </p>
        </div>

        {/* Pillar 1: AI Agents */}
        <div id="ai-agents" className="glass-panel bg-white p-8 sm:p-10 rounded-3xl border border-cyan-300 shadow-md scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className="p-2.5 rounded-xl bg-cyan-100 text-cyan-700 font-bold">
                  <Bot className="w-6 h-6" />
                </span>
                <span className="text-xs font-bold text-cyan-800 bg-cyan-50 px-2.5 py-1 rounded-lg">محور اول</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900">
                ۱. طراحی هوش مصنوعی، ابزارها و ایجنت‌های هوش مصنوعی سازمانی
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                ایجنت‌های هوش مصنوعی (AI Agents) نسل جدید دستیارهای نرم‌افزاری هستند که برخلاف چت‌بات‌های ساده، می‌توانند به‌صورت خودمختار اهداف تعیین‌شده را به مراحل اجرایی تبدیل کرده، با ابزارها تعامل داشته باشند، در پایگاه‌های داده جستجو کنند و با سایر ایجنت‌ها هماهنگ شوند.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700">
                  <strong>سیستم‌های چندعامله (Multi-Agent Swarms):</strong> تقسیم وظایف بین ایجنت محقق، نویسنده، تحلیلگر و بازبین.
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700">
                  <strong>موتورهای جستجوی شناختی (Enterprise RAG):</strong> پرسش و پاسخ هوشمند از هزاران صفحه سند، مصوبه و قرارداد سازمانی.
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700">
                  <strong>چت‌بات‌های اختصاصی مشتریان:</strong> پاسخگویی بلادرنگ و ثبت خودکار سفارش و تیکت در CRM.
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700">
                  <strong>ایجنت‌های نظارت بر عملکرد:</strong> رصد شاخص‌های کلیدی عملکرد (KPIs) و هشدار زودهنگام ناهنجاری‌ها.
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 space-y-3">
              <h4 className="text-xs font-bold text-cyan-400 border-b border-slate-800 pb-2">سناریوی عملی پیاده‌سازی شده:</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                طراحی ایجنت خودکار ممیزی اسناد مالی که روزانه بیش از ۵,۰۰۰ فاکتور را بدون دخالت انسان تطبیق داده و موارد مغایر را علامت‌گذاری می‌کند.
              </p>
              <div className="pt-2 text-[11px] text-cyan-300 font-mono">
                صرفه‌جویی زمانی: ۸۰٪ کاهش ساعت کار پرسنل
              </div>
            </div>
          </div>
        </div>

        {/* Pillar 2: Process Automation */}
        <div id="process-automation" className="glass-panel bg-white p-8 sm:p-10 rounded-3xl border border-blue-300 shadow-md scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className="p-2.5 rounded-xl bg-blue-100 text-blue-700 font-bold">
                  <Cpu className="w-6 h-6" />
                </span>
                <span className="text-xs font-bold text-blue-800 bg-blue-50 px-2.5 py-1 rounded-lg">محور دوم</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900">
                ۲. هوشمندسازی و اتوماسیون فرآیندهای کسب‌وکار (BPA)
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                اتوماسیون سنتی صرفاً قواعد شرطی (If-Else) را اجرا می‌کند؛ اما هوشمندسازی فرآیندها با هوش مصنوعی امکان درک متون نامتقارن، تشخیص الگوها در تصاویر، تصمیم‌گیری در شرایط عدم قطعیت و پیش‌بینی روندهای آینده را فراهم می‌سازد.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700">
                  <strong>هوشمندسازی فرآیندهای مالی و حسابداری:</strong> تطبیق خودکار مغایرت‌های بانکی و صدور اسناد.
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700">
                  <strong>هوشمندسازی فرآیندهای منابع انسانی (HR):</strong> غربالگری رزومه‌ها، ارزیابی شایستگی و آموزش تطبیقی.
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700">
                  <strong>بهینه‌سازی زنجیره تأمین و انبارداری:</strong> پیش‌بینی تقاضا و کنترل خودکار موجودی.
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700">
                  <strong>گزارش‌گیری خودکار مدیریتی:</strong> تبدیل داده‌های خام دیتابیس به گزارشات متنی و نمودارهای تحلیلی.
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 space-y-3">
              <h4 className="text-xs font-bold text-blue-400 border-b border-slate-800 pb-2">خروجی قابل لمس:</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                کاهش زمان پردازش درخواست‌های اداری از ۳ روز کاری به کمتر از ۱۰ دقیقه با خطای نزدیک به صفر.
              </p>
              <div className="pt-2 text-[11px] text-blue-300 font-mono">
                افزایش ظرفیت عملیاتی سازمان تا ۴ برابر
              </div>
            </div>
          </div>
        </div>

        {/* Pillar 3: Implementation & Upgrades */}
        <div id="implementation" className="glass-panel bg-white p-8 sm:p-10 rounded-3xl border border-indigo-300 shadow-md scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className="p-2.5 rounded-xl bg-indigo-100 text-indigo-700 font-bold">
                  <GitBranch className="w-6 h-6" />
                </span>
                <span className="text-xs font-bold text-indigo-800 bg-indigo-50 px-2.5 py-1 rounded-lg">محور سوم</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900">
                ۳. پیاده‌سازی، یکپارچه‌سازی و به‌روزرسانی زیرساخت‌های هوش مصنوعی
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                تیم مهندسی دیجی نورون با تسلط بر مدرن‌ترین فریم‌ورک‌های MLOps و معماری‌های مایکروسرویس، سیستم‌های هوش مصنوعی را در بستر شبکه محلی یا ابری سازمان شما مستقر کرده و نرم‌افزارهای قدیمی (Legacy) را به قابلیت‌های AI ارتقا می‌دهد.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700">
                  <strong>استقرار مدل‌های اختصاصی On-Premise:</strong> راه‌اندازی Llama 3, DeepSeek, Qwen روی کلاسترهای GPU داخلی.
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700">
                  <strong>تیونینگ مدل‌ها (Fine-Tuning):</strong> آموزش مدل‌ها روی ترمینولوژی، قوانین و دانش تخصصی شرکت شما.
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700">
                  <strong>یکپارچه‌سازی با ERP و نرم‌افزارهای سازمانی:</strong> اتصال مستقیم به دیتابیس‌های اوراکل، SQL Server و وب‌سرویس‌ها.
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700">
                  <strong>پایش عملکرد و به‌روزرسانی مداوم:</strong> مانیتورینگ تأخیر (Latency)، مصرف GPU و جلوگیری از Drift مدل.
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 space-y-3">
              <h4 className="text-xs font-bold text-indigo-400 border-b border-slate-800 pb-2">استاندارد امنیت و پایداری:</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                ایزوله‌سازی شبکه، پیاده‌سازی احراز هویت مبتنی بر نقش (RBAC) و رمزنگاری دوطرفه تمامی داده‌ها در حال انتقال و ذخیره.
              </p>
              <div className="pt-2 text-[11px] text-indigo-300 font-mono">
                آپ‌تایم تضمین‌شده: ۹۹.۹٪ با پشتیبانی ۲۴ ساعته
              </div>
            </div>
          </div>
        </div>

        {/* Pillar 4: Tech Transfer */}
        <div id="tech-transfer" className="glass-panel bg-white p-8 sm:p-10 rounded-3xl border border-emerald-300 shadow-md scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className="p-2.5 rounded-xl bg-emerald-100 text-emerald-700 font-bold">
                  <ArrowRightLeft className="w-6 h-6" />
                </span>
                <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg">محور چهارم</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900">
                ۴. انتقال تکنولوژی و دانش فنی هوش مصنوعی به سازمان
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                ارزش واقعی زمانی خلق می‌شود که سازمان در راهبری و توسعه تکنولوژی به استقلال برسد. دیجی نورون با ارائه سورس‌کدهای کامل، داکیومنت‌های فنی استاندارد و جلسات فشرده انتقال دانش، تیم IT و فنی شما را به متخصصین راهبری سیستم تبدیل می‌کند.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700">
                  <strong>تحویل کامل مالکیت معنوی (IP) و کدهای منبع:</strong> کدهای خوانا، تست‌شده و کامنت‌گذاری شده استاندارد.
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700">
                  <strong>منتورشیپ تیم مهندسی نرم‌افزار سازمان:</strong> آموزش نحوه افزودن فیچرهای جدید و دیباگ سیستم.
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700">
                  <strong>تدوین اسناد جامع معماری و نگهداری (Runbooks):</strong> دستورالعمل‌های دقیق برای شرایط اضطراری و بک‌آپ.
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700">
                  <strong>شیوه‌نامه حاکمیت داده (Data Governance):</strong> دستورالعمل‌های پاکسازی، برچسب‌گذاری و کیفیت داده.
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 space-y-3">
              <h4 className="text-xs font-bold text-emerald-400 border-b border-slate-800 pb-2">تعهد دیجی نورون:</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                عدم ایجاد وابستگی انحصاری (Vendor Lock-in) و تضمین اینکه پس از پایان پروژه، سازمان شما توانایی اداره کامل زیرساخت را خواهد داشت.
              </p>
            </div>
          </div>
        </div>

        {/* Pillar 5: Enterprise Training */}
        <div id="corporate-training" className="glass-panel bg-white p-8 sm:p-10 rounded-3xl border border-purple-300 shadow-md scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className="p-2.5 rounded-xl bg-purple-100 text-purple-700 font-bold">
                  <Building2 className="w-6 h-6" />
                </span>
                <span className="text-xs font-bold text-purple-800 bg-purple-50 px-2.5 py-1 rounded-lg">محور پنجم</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900">
                ۵. آموزش‌های تخصصی سازمانی و توانمندسازی مدیران و پرسنل
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                تکنولوژی بدون نیروی انسانی آموزش‌دیده عقیم می‌ماند. ما متناسب با نقش‌های مختلف سازمانی، دوره‌ها و کارگاه‌های عملی حضوری یا آنلاین طراحی و اجرا می‌کنیم تا تمام سطوح سازمان از هوش مصنوعی برای ارتقای راندمان کاری بهره ببرند.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700">
                  <strong>مسترکلاس استراتژی هوش مصنوعی ویژه مدیران ارشد:</strong> تصمیم‌گیری داده‌محور، ارزیابی ROI و هدایت تحول.
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700">
                  <strong>کارگاه‌های مهندسی پرامپت برای پرسنل:</strong> کاربرد عملی ابزارها در واحدهای مارکتینگ، مالی، اداری و R&D.
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700">
                  <strong>شیوه‌نامه امنیت داده و الزامات محرمانگی:</strong> آموزش الگوهای ایمن کاربری و پرهیز از نقض حریم خصوصی.
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700">
                  <strong>سفارشی‌سازی محتوا بر مبنای صنعت شما:</strong> آموزش مبتنی بر داده‌ها و مثال‌های واقعی کسب‌وکار شما.
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 space-y-3">
              <h4 className="text-xs font-bold text-purple-400 border-b border-slate-800 pb-2">فرمت‌های اجرایی:</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                امکان برگزاری در محل شرکت شما (In-House)، در محل آکادمی دیجی نورون یا به صورت استودیویی آنلاین تعاملی با اعطای گواهینامه معتبر.
              </p>
              <Link 
                href="/services/corporate" 
                className="inline-flex items-center gap-1.5 text-xs text-purple-300 font-bold hover:text-white pt-2"
              >
                <span>مشاهده کاتالوگ دوره‌های سازمانی</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

      </section>

      {/* Consultation & Demo Request Form */}
      <section id="consultation-form" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-cyan-500/30 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto text-center space-y-4 mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-300 text-xs font-bold">
              <Phone className="w-3.5 h-3.5" />
              <span>ارزیابی اولیه و جلسه مشاوره رایگان سازمانی</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black">
              آماده هوشمندسازی سازمان خود هستید؟
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              مشخصات سازمان خود را وارد کنید تا کارشناسان ارشد هوش مصنوعی دیجی نورون جهت بررسی فرآیندها و برگزاری جلسه دمو اختصاصی با شما تماس بگیرند.
            </p>
          </div>

          <form className="space-y-4 max-w-xl mx-auto text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 font-bold mb-1.5">نام و نام خانوادگی مسئول</label>
                <input 
                  type="text" 
                  placeholder="مثال: دکتر احمدی" 
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-400 text-xs"
                />
              </div>
              <div>
                <label className="block text-slate-300 font-bold mb-1.5">نام شرکت / سازمان</label>
                <input 
                  type="text" 
                  placeholder="مثال: شرکت پتروشیمی / هلدینگ..." 
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-400 text-xs"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 font-bold mb-1.5">شماره تماس مستقیم یا همراه</label>
                <input 
                  type="tel" 
                  placeholder="0912... یا 021..." 
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-400 text-xs font-mono"
                />
              </div>
              <div>
                <label className="block text-slate-300 font-bold mb-1.5">حوزه خدمت مورد نظر</label>
                <select className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-400 text-xs">
                  <option value="all">هوشمندسازی جامع فرآیندها و ایجنت‌ها</option>
                  <option value="agents">طراحی ایجنت‌های سازمانی (AI Agents)</option>
                  <option value="bpa">اتوماسیون فرآیندهای کسب‌وکار (BPA)</option>
                  <option value="implementation">پیاده‌سازی و استقرار On-Premise</option>
                  <option value="transfer">انتقال تکنولوژی و سورس‌کد</option>
                  <option value="training">کارگاه‌ها و آموزش سازمانی</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-slate-300 font-bold mb-1.5">توضیحات یا نیازهای خاص سازمان</label>
              <textarea 
                rows={3} 
                placeholder="توضیح مختصری درباره سیستم‌ها، فرآیندها یا دغدغه‌های سازمانی شما..."
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-400 text-xs"
              />
            </div>

            <button 
              type="button"
              className="w-full py-4 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-black rounded-xl text-sm transition-all shadow-lg shadow-cyan-500/20"
            >
              ثبت درخواست جلسه مشاوره و ارزیابی
            </button>

            <div className="text-center pt-2 text-[11px] text-slate-400 flex items-center justify-center gap-2">
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>یا تماس مستقیم با دپارتمان سازمانی:</span>
              <a href="tel:02188252497" className="text-cyan-300 font-bold font-mono tracking-wider hover:underline">02188252497</a>
            </div>
          </form>
        </div>
      </section>

      {/* General Consultation & Teaser */}
      <ContactTeaser />

    </div>
  );
}
