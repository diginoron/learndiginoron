"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  FileText,
  Bot, 
  Cpu, 
  GitBranch, 
  ArrowRightLeft, 
  Building2, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  ArrowLeft, 
  Workflow, 
  Database, 
  LineChart, 
  Sparkles,
  Phone,
  Server,
  Layers,
  Code2,
  Compass
} from "lucide-react";

export default function EnterpriseServices() {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      id: 0,
      title: "طراحی سند راهبردی هوشمندسازی سازمانی",
      subtitle: "AI Strategic Blueprint, APQC Gap Analysis & Readiness Atlas",
      icon: Compass,
      color: "amber",
      badge: "گام نخست و بنیادین",
      tagline: "تحلیل ساختار و فرآیندها مبتنی بر APQC، تحلیل شکاف و ترسیم اطلس پروژه‌های بهبود هوش مصنوعی",
      description: "در این خدمت بنیادین، ابتدا فرآیندها، ساختار سازمانی و معماری داده‌های سازمان مورد تحلیل و عارضه‌یابی همه‌جانبه قرار می‌گیرند. سپس بر اساس تحلیل شکاف (Gap Analysis)، چارچوب بین‌المللی APQC و شاخص‌های سنجش آمادگی سازمان برای هوش مصنوعی (AI Readiness Index)، اطلس راهبردی پروژه‌های بهبود مبتنی بر هوش مصنوعی در قالب یک سند راهبردی جامع و نقشه راه فازبندی‌شده ارائه می‌گردد.",
      capabilities: [
        "عارضه‌یابی و مدلسازی فرآیندهای سازمان منطبق بر متدولوژی استاندارد جهانی APQC",
        "ارزیابی سطح بلوغ دیجیتال و شاخص‌های سنجش آمادگی سازمان برای هوش مصنوعی (AI Readiness)",
        "تحلیل شکاف (Gap Analysis) وضع موجود با وضع مطلوب فناوری در تمامی دپارتمان‌ها",
        "تدوین اطلس راهبردی پروژه‌های بهبود مبتنی بر AI با اولویت‌بندی نرخ بازگشت سرمایه (ROI)",
        "ارائه سند جامع معماری راهبردی هوشمندسازی و نقشه راه اجرایی ۳ تا ۵ ساله"
      ],
      deliverables: ["سند راهبردی مصوب", "اطلس پروژه‌های هوشمندسازی", "گزارش تحلیل شکاف APQC", "شاخص‌های سنجش آمادگی"]
    },
    {
      id: 1,
      title: "طراحی هوش مصنوعی و ایجنت‌های سازمانی",
      subtitle: "AI Agents & Autonomous Multi-Agent Systems",
      icon: Bot,
      color: "cyan",
      badge: "طراحی اختصاصی",
      tagline: "پیاده‌سازی ایجنت‌های تصمیم‌گیر و پردازش‌گر متصل به دیتابیس‌ها و ابزارهای سازمانی",
      description: "ما برای سازمان شما دستیارها و ایجنت‌های خودمختار (AI Agents) چندعامله طراحی می‌کنیم که قادرند وظایف پیچیده تحلیلی، مانیتورینگ سیستم‌ها، پاسخگویی ۲۴/۷ مشتریان و پردازش داده‌ها را با هماهنگی کامل بین ابزارها انجام دهند.",
      capabilities: [
        "طراحی ایجنت‌های چندعامله (Multi-Agent Swarms) برای اتوماسیون عملیاتی",
        "توسعه دستیارهای هوشمند داخلی با دسترسی کنترل‌شده به اسناد محرمانه (RAG سازمانی)",
        "اتصال ایجنت‌ها به سامانه‌های CRM، ERP، ایمیل و پایگاه‌های داده سازمان",
        "طراحی سیستم‌های تصمیم‌یار هوشمند (Decision Support Systems) برای مدیران ارشد"
      ],
      deliverables: ["کدبیس اختصاصی", "پنل مدیریت ایجنت‌ها", "تضمین امنیت داده‌ها", "پشتیبانی فنی"]
    },
    {
      id: 2,
      title: "هوشمندسازی فرآیندها (BPA)",
      subtitle: "Business Process Intelligence & Intelligent Automation",
      icon: Cpu,
      color: "blue",
      badge: "اتوماسیون جامع",
      tagline: "حذف گلوگاه‌های انسانی و ارتقای ۵ برابری سرعت گردش کار سازمان",
      description: "بررسی، عارضه‌یابی و مهندسی مجدد فرآیندهای کسب‌وکار با تزریق الگوریتم‌های هوش مصنوعی؛ فرآیندهای تکراری و وقت‌گیر مالی، بازاریابی، منابع انسانی و پشتیبانی را کاملاً خودکار و هوشمند می‌کنیم.",
      capabilities: [
        "اتوماسیون هوشمند اسناد و صورت‌حساب‌ها (OCR پیشرفته + استخراج فیلدها)",
        "تحلیل خودکار رفتار مشتریان و پیش‌بینی ریزش (Churn Prediction)",
        "هوشمندسازی فرآیند استخدام، غربالگری رزومه‌ها و مدیریت استعدادها",
        "داشبوردهای هوشمند پیش‌بینانه (Predictive Analytics) و گزارش‌گیری خودکار"
      ],
      deliverables: ["نقشه فرآیندی جدید", "پایپ‌لاین اتوماتیک", "کاهش ۷۰٪ زمان پردازش", "مانیتورینگ خطای Real-time"]
    },
    {
      id: 3,
      title: "پیاده‌سازی، یکپارچه‌سازی و به‌روزرسانی",
      subtitle: "Implementation, Integration & Upgrades",
      icon: GitBranch,
      color: "indigo",
      badge: "استقرار فنی",
      tagline: "استقرار زیرساخت‌های نوین AI روی سرورهای داخلی (On-Premise) یا ابری",
      description: "خدمات فنی صفر تا صد شامل استقرار مدل‌های زبانی بزرگ، Fine-tuning روی داده‌های بومی سازمان، ارتقای نرم‌افزارهای سنتی به نسخه‌های هوش مصنوعی و یکپارچه‌سازی امن با APIهای سازمانی.",
      capabilities: [
        "استقرار On-Premise مدل‌های زبانی متن‌باز (Local LLMs) با صفر درصد نشت اطلاعات",
        "متصل‌سازی زیرساخت هوش مصنوعی به سرویس‌های Microsoft Dynamics, SAP, همکاران سیستم و...",
        "بهینه‌سازی سخت‌افزاری و GPU Orchestraction جهت کاهش هزینه‌های محاسباتی",
        "به‌روزرسانی و ارتقای نرم‌افزارهای legacy موجود در سازمان به استانداردهای مدرن هوش مصنوعی"
      ],
      deliverables: ["کانفیگ سرور و پایپ‌لاین", "API Gateway امن", "گارانتی SLA آپ‌تایم", "مستندات معماری سیستم"]
    },
    {
      id: 4,
      title: "انتقال تکنولوژی و دانش فنی",
      subtitle: "Technology Transfer & Internal IP Ownership",
      icon: ArrowRightLeft,
      color: "emerald",
      badge: "استقلال فناورانه",
      tagline: "انتقال کامل مالکیت فنی، سورس‌کدها و توانمندسازی تیم IT درون‌سازمانی",
      description: "ما سازمان‌ها را وابسته به خود نگه نمی‌داریم! تمام دانش فنی توسعه، راه‌اندازی و نگهداری ابزارها و مدل‌ها را همراه با مستندات استاندارد و آموزش فشرده به تیم فنی و مهندسی شما منتقل می‌کنیم.",
      capabilities: [
        "تحویل کامل مستندات معماری، سورس‌کدها و ریپازیتوری‌های پروژه",
        "آموزش Mentorship اختصاصی به مهندسان و برنامه‌نویسان سازمان شما",
        "تدوین شیوه‌نامه‌های نگهداری، پایش (MLOps) و بازآموزی مدل‌ها (Continuous Retraining)",
        "مشاوره در تدوین استانداردهای حاکمیت داده (Data Governance) و امنیت سایبری"
      ],
      deliverables: ["انتقال کامل سورس‌کد", "جلسات انتقال دانش", "شیوه‌نامه MLOps", "استقلال کامل تیم داخلی"]
    },
    {
      id: 5,
      title: "آموزش‌های تخصصی سازمانی",
      subtitle: "Enterprise Upskilling & Executive AI Masterclasses",
      icon: Building2,
      color: "purple",
      badge: "فرهنگ‌سازی سازمانی",
      tagline: "آموزش مهندسی پرامپت، تفکر هوش مصنوعی و استراتژی به مدیران و کارکنان",
      description: "دوره‌ها و بوت‌کمپ‌های اختصاصی برای لایه‌های مختلف سازمان؛ از استراتژی‌های تحول دیجیتال ویژه هیئت مدیره تا کارگاه‌های عملی افزایش بهره‌وری با ابزارهای مولد هوش مصنوعی برای تمام پرسنل.",
      capabilities: [
        "مسترکلاس اختصاصی استراتژی هوش مصنوعی و ارزیابی ROI ویژه مدیران ارشد",
        "کارگاه‌های عملی مهندسی پرامپت و استفاده از LLMها در کارهای روزمره پرسنل",
        "آموزش شیوه‌نامه‌های امنیتی سازمانی و جلوگیری از درز اطلاعات محرمانه",
        "ارزیابی مهارت کارکنان و اعطای گواهینامه معتبر سازمانی دیجی نورون"
      ],
      deliverables: ["سرفصل‌های سفارشی", "کارگاه‌های حضوری/آنلاین", "پایش اثربخشی آموزش", "گواهی رسمی"]
    }
  ];

  const current = pillars[activePillar];
  const IconComponent = current.icon;

  return (
    <section className="py-20 sm:py-24 relative overflow-hidden bg-slate-900 text-white">
      {/* Background Tech Grids & Lights */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-bold shadow-lg">
            <Zap className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span>خدمت محوری و تحول‌آفرین | Enterprise AI Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            خدمات جامع <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">هوشمندسازی سازمانی</span> دیجی نورون
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            از تدوین سند راهبردی و تحلیل فرآیندها تا طراحی ایجنت‌های خودمختار، اتوماسیون، پیاده‌سازی و انتقال دانش به تیم شما.
          </p>
        </div>

        {/* 6 Service Tabs Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-8">
          {pillars.map((pillar) => {
            const PIcon = pillar.icon;
            const isSelected = activePillar === pillar.id;
            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillar(pillar.id)}
                className={`p-3 sm:p-4 rounded-2xl border text-right transition-all flex flex-col justify-between gap-2.5 relative overflow-hidden group ${
                  isSelected
                    ? "bg-slate-800/95 border-cyan-400 shadow-xl shadow-cyan-950/50 scale-[1.02]"
                    : "bg-slate-800/40 border-slate-700/60 hover:bg-slate-800/70 hover:border-slate-600 text-slate-300"
                }`}
              >
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500" />
                )}
                
                <div className="flex items-center justify-between">
                  <div className={`p-2 rounded-xl ${
                    isSelected ? "bg-cyan-500/20 text-cyan-300" : "bg-slate-700/50 text-slate-400 group-hover:text-white"
                  }`}>
                    <PIcon className="w-4 h-4" />
                  </div>
                  <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${
                    isSelected ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/40" : "bg-slate-700/50 text-slate-400"
                  }`}>
                    {pillar.badge}
                  </span>
                </div>

                <div>
                  <div className={`font-bold text-[11px] sm:text-xs leading-snug ${
                    isSelected ? "text-white" : "text-slate-200"
                  }`}>
                    {pillar.title}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Showcase Card */}
        <div className="bg-gradient-to-br from-slate-800/90 via-slate-800/70 to-slate-900/90 border border-cyan-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Main Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-3 flex-wrap">
                <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-bold rounded-lg flex items-center gap-1.5">
                  <IconComponent className="w-3.5 h-3.5" />
                  <span>محور شماره {current.id + 1} از خدمات هوشمندسازی</span>
                </span>
                <span className="text-xs text-slate-400 font-mono">{current.subtitle}</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                  {current.title}
                </h3>
                <p className="text-cyan-300 text-sm font-semibold">
                  {current.tagline}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {current.description}
              </p>

              {/* Capabilities List */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                  قابلیت‌ها و خروجی‌های این سرویس:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {current.capabilities.map((cap, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-200 bg-slate-900/50 p-2.5 rounded-xl border border-slate-700/60">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/services/enterprise-ai"
                  className="px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-black rounded-xl shadow-lg shadow-cyan-500/20 text-xs sm:text-sm flex items-center gap-2 transition-all hover:scale-105"
                >
                  <span>درخواست جلسه مشاوره و ممیزی هوشمندسازی</span>
                  <ArrowLeft className="w-4 h-4" />
                </Link>

                <a
                  href="tel:02188252497"
                  className="px-5 py-3.5 bg-slate-700/60 hover:bg-slate-700 text-white font-bold text-xs rounded-xl flex items-center gap-2 border border-slate-600 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  <span>تماس با مشاور فنی: 02188252497</span>
                </a>
              </div>

            </div>

            {/* Visual Box / Architecture Specs (5 cols) */}
            <div className="lg:col-span-5 bg-slate-950/80 border border-slate-700/80 rounded-2xl p-6 space-y-6 shadow-inner">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2 text-xs font-bold text-cyan-300">
                  <Server className="w-4 h-4" />
                  <span>استانداردها و متدولوژی تحویل</span>
                </div>
                <span className="text-[10px] text-emerald-400 bg-emerald-950/70 border border-emerald-500/40 px-2 py-0.5 rounded-full font-bold">
                  APQC & Enterprise Ready
                </span>
              </div>

              {/* Architecture Badges */}
              <div className="space-y-3">
                <div className="flex items-center justify-between p-2.5 bg-slate-900/60 rounded-xl border border-slate-800 text-xs">
                  <span className="text-slate-400">چارچوب استاندارد فرآیندی:</span>
                  <span className="text-white font-bold font-mono">APQC Process Framework</span>
                </div>

                <div className="flex items-center justify-between p-2.5 bg-slate-900/60 rounded-xl border border-slate-800 text-xs">
                  <span className="text-slate-400">سنجش آمادگی هوش مصنوعی:</span>
                  <span className="text-white font-bold">AI Readiness Index (AIRI)</span>
                </div>

                <div className="flex items-center justify-between p-2.5 bg-slate-900/60 rounded-xl border border-slate-800 text-xs">
                  <span className="text-slate-400">امنیت و ایزوله‌سازی داده:</span>
                  <span className="text-white font-bold font-mono">100% On-Premise / Hybrid</span>
                </div>

                <div className="flex items-center justify-between p-2.5 bg-slate-900/60 rounded-xl border border-slate-800 text-xs">
                  <span className="text-slate-400">پروتکل انتقال دانش:</span>
                  <span className="text-white font-bold">کامل با سورس‌کد و مستندات</span>
                </div>
              </div>

              {/* Deliverables summary */}
              <div className="pt-2 border-t border-slate-800">
                <div className="text-[11px] text-slate-400 mb-2">تضمین‌های تحویل دیجی نورون:</div>
                <div className="flex flex-wrap gap-1.5">
                  {current.deliverables.map((del, i) => (
                    <span key={i} className="text-[10px] bg-cyan-950 text-cyan-300 border border-cyan-500/30 px-2 py-1 rounded-md font-medium">
                      ✓ {del}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct callout */}
              <div className="p-3 bg-gradient-to-r from-cyan-950/60 to-indigo-950/60 border border-cyan-500/30 rounded-xl text-center">
                <div className="text-[11px] text-slate-300">
                  نیاز به طراحی سند راهبردی دارید؟ کارشناسان ما آماده برگزاری جلسه تحلیل اولیه هستند.
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* 4-Step Enterprise Implementation Workflow Strip */}
        <div className="mt-16 pt-12 border-t border-slate-800">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-lg sm:text-xl font-extrabold text-white">
              مراحل اجرای پروژه هوشمندسازی در سازمان شما
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              متدولوژی استاندارد ۴ مرحله‌ای دیجی نورون از عارضه‌یابی و سند راهبردی تا تحویل و استقلال سازمانی
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-5 bg-slate-800/40 border border-slate-700/60 rounded-2xl relative">
              <div className="text-3xl font-black text-amber-400/30 font-mono mb-2">01</div>
              <h4 className="font-bold text-white text-sm mb-1.5">تدوین سند راهبردی و اطلس بهبود</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                تحلیل فرآیندها با APQC، ارزیابی آمادگی هوش مصنوعی و تدوین اطلس پروژه‌های با بالاترین ROI.
              </p>
            </div>

            <div className="p-5 bg-slate-800/40 border border-slate-700/60 rounded-2xl relative">
              <div className="text-3xl font-black text-cyan-400/30 font-mono mb-2">02</div>
              <h4 className="font-bold text-white text-sm mb-1.5">طراحی معماری و ایجنت‌ها</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                انتخاب یا تیونینگ مدل‌ها، طراحی عامل‌های هوشمند، ساخت پایپ‌لاین RAG و اتصال به ابزارهای سازمان.
              </p>
            </div>

            <div className="p-5 bg-slate-800/40 border border-slate-700/60 rounded-2xl relative">
              <div className="text-3xl font-black text-indigo-500/30 font-mono mb-2">03</div>
              <h4 className="font-bold text-white text-sm mb-1.5">استقرار فنی On-Premise/Cloud</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                راه‌اندازی پایلوت در محیط واقعی، تست‌های امنیتی و یکپارچه‌سازی کامل با سامانه‌های مالی و اداری.
              </p>
            </div>

            <div className="p-5 bg-slate-800/40 border border-slate-700/60 rounded-2xl relative">
              <div className="text-3xl font-black text-emerald-500/30 font-mono mb-2">04</div>
              <h4 className="font-bold text-white text-sm mb-1.5">انتقال دانش و آموزش پرسنل</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                تحویل سورس‌کدها، برگزاری کارگاه‌های عملی برای کارمندان و آموزش راهبری سیستم به تیم مهندسی.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
