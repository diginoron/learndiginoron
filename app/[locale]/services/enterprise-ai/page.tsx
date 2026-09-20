import { 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  Phone 
} from "lucide-react";
import ContactTeaser from "@/components/ContactTeaser";
import EnterpriseContactForm from "@/components/EnterpriseContactForm";
import EnterpriseServices from "@/components/EnterpriseServices";
import { Locale, isValidLocale, getAlternateUrls } from "@/lib/i18n";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const alternates = getAlternateUrls("/services/enterprise-ai");

  const titles: Record<Locale, string> = {
    en: "Enterprise AI Transformation & Strategic Roadmap | DigiNoron",
    fa: "خدمات هوشمندسازی سازمانی و طراحی سند راهبردی هوش مصنوعی | دیجی نورون",
    ar: "حلول التحول الذكي وخريطة طريق الذكاء الاصطناعي للمؤسسات | ديجي نورون",
  };

  const descriptions: Record<Locale, string> = {
    en: "Enterprise AI consulting, APQC gap analysis, autonomous multi-agent development, BPA process automation, On-Premise deployments, and full technology transfer.",
    fa: "خدمات تخصصی طراحی سند راهبردی هوشمندسازی، تحلیل فرآیندها با APQC، طراحی ایجنت‌های سازمانی (AI Agents)، اتوماسیون فرآیندها (BPA)، پیاده‌سازی On-Premise و انتقال تکنولوژی دیجی نورون.",
    ar: "خدمات متخصصة في إعداد خريطة طريق التحول الذكي (APQC)، بناء وكلاء الذكاء الاصطناعي (AI Agents)، أتمتة العمليات (BPA)، النشر المحلي On-Premise ونقل التكنولوجيا.",
  };

  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: alternates.canonical,
      languages: alternates.languages,
    },
  };
}

export default async function EnterpriseAIPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";

  const content = {
    en: {
      badge: "DigiNoron Enterprise AI Division",
      title: "Strategic AI Roadmaps &",
      titleHighlight: "Enterprise Autonomous Transformation",
      description: "From APQC-aligned organizational auditing and high-ROI opportunity atlases to autonomous multi-agent systems, BPA process automation, air-gapped On-Premise infrastructure, and comprehensive IP transfer.",
      demoBtn: "Request Architectural Consultation",
      phoneBtn: "Direct Line: +98 21 8825 2497",
      advantagesTitle: "Key Advantages of DigiNoron Solutions",
      adv1Title: "Global APQC Standard:",
      adv1Desc: "Systematic process gap analysis and establishing an initiative atlas prioritized by ROI payback.",
      adv2Title: "Secure On-Premise Hosting:",
      adv2Desc: "100% guarantee that confidential operational data never leaves your enterprise boundary.",
      adv3Title: "Autonomous Multi-Agents:",
      adv3Desc: "Cooperative agent swarms executing cross-departmental tasks with machine speed and human precision.",
      adv4Title: "Full Source & IP Transfer:",
      adv4Desc: "Zero long-term vendor dependency; complete code handover and mentoring for in-house engineering squads.",
    },
    fa: {
      badge: "دپارتمان تخصصی هوشمندسازی سازمانی دیجی نورون",
      title: "طراحی سند راهبردی و",
      titleHighlight: "هوشمندسازی جامع سازمان‌ها",
      description: "ما از تحلیل ساختار و فرآیندها مبتنی بر چارچوب بین‌المللی APQC و تدوین اطلس پروژه‌های بهبود تا طراحی ایجنت‌های خودمختار، اتوماسیون هوشمند (BPA)، استقرار امن On-Premise، انتقال تکنولوژی و آموزش‌های سازمانی در کنار شما هستیم.",
      demoBtn: "درخواست جلسه دمو و تدوین سند راهبردی",
      phoneBtn: "مشاوره مستقیم: ۰۲۱۸۸۲۵۲۴۹۷",
      advantagesTitle: "مزایای راهکارهای سازمانی دیجی نورون",
      adv1Title: "استاندارد جهانی APQC:",
      adv1Desc: "عارضه‌یابی فرآیندها، تحلیل شکاف و اطلس پروژه‌های با بالاترین ROI",
      adv2Title: "استقرار محلی (On-Premise):",
      adv2Desc: "تضمین ۱۰۰٪ عدم خروج داده‌های حساس و محرمانه از شبکه سازمان",
      adv3Title: "ایجنت‌های چندعامله (Multi-Agent):",
      adv3Desc: "انجام خودکار وظایف بین‌واحدی با دقت انسانی و سرعت ماشین",
      adv4Title: "انتقال کامل سورس‌کد و دانش:",
      adv4Desc: "عدم وابستگی دائمی به پیمانکار و آموزش کامل تیم IT داخلی",
    },
    ar: {
      badge: "قطاع حلول الذكاء الاصطناعي للمؤسسات - ديجي نورون",
      title: "إعداد خريطة الطريق الاستراتيجية و",
      titleHighlight: "التحول الذكي الشامل للمؤسسات",
      description: "نرافقكم من التشخيص الهيكلي للعمليات وفق معايير APQC العالمية وإعداد أطلس المشاريع، إلى تطوير وكلاء الذكاء الاصطناعي المستقلين، أتمتة العمليات (BPA)، النشر المحلي الآمن (On-Premise)، ونقل التكنولوجيا بالكامل.",
      demoBtn: "طلب جلسة استشارية وعرض حي",
      phoneBtn: "الاتصال المباشر: +98 21 8825 2497",
      advantagesTitle: "مزايا حلول ديجي نورون المؤسسية",
      adv1Title: "معايير APQC العالمية:",
      adv1Desc: "تشخيص العمليات، تحليل الفجوات وأطلس مشاريع ذكاء اصطناعي بأعلى عائد استثماري (ROI).",
      adv2Title: "النشر المحلي الآمن (On-Premise):",
      adv2Desc: "ضمان عدم خروج أي بيانات سرية أو حساسة خارج خوادم المؤسسة.",
      adv3Title: "شبكات الوكلاء المتعددين (Multi-Agents):",
      adv3Desc: "تنفيذ مؤتمت للعمليات بين الإدارات بدقة بشرية وسرعة فائقة.",
      adv4Title: "نقل كامل للشيفرة والخبرة:",
      adv4Desc: "استقلالية تقنية تامة دون اعتمادية خارجية مع تأهيل الفريق التقني الداخلي.",
    },
  };

  const t = content[locale] || content.en;

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
                  <span>{t.badge}</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-black leading-tight">
                  {t.title} <span className="text-gradient-cyan">{t.titleHighlight}</span>
                </h1>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {t.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#consultation-form"
                    className="px-7 py-4 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-black rounded-xl shadow-lg shadow-cyan-500/25 text-sm transition-all hover:scale-105"
                  >
                    {t.demoBtn}
                  </a>
                  <a
                    href="tel:02188252497"
                    className="px-6 py-4 bg-slate-800/80 border border-slate-700 hover:bg-slate-800 text-white text-sm font-bold rounded-xl flex items-center gap-2 transition-all"
                  >
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span dir="ltr">{t.phoneBtn}</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs font-bold text-cyan-300">
                  <span>{t.advantagesTitle}</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex items-start gap-2.5 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>{t.adv1Title}</strong> {t.adv1Desc}</span>
                  </div>
                  <div className="flex items-start gap-2.5 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong>{t.adv2Title}</strong> {t.adv2Desc}</span>
                  </div>
                  <div className="flex items-start gap-2.5 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong>{t.adv3Title}</strong> {t.adv3Desc}</span>
                  </div>
                  <div className="flex items-start gap-2.5 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong>{t.adv4Title}</strong> {t.adv4Desc}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 6 Core Enterprise Solutions Interactive Display */}
      <EnterpriseServices locale={locale} />

      {/* Enterprise Lead Inbound Form */}
      <section id="consultation-form" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <EnterpriseContactForm locale={locale} />
      </section>

      <ContactTeaser locale={locale} />

    </div>
  );
}
