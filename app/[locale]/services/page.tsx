import Link from "next/link";
import { 
  Bot, 
  GraduationCap, 
  Building2, 
  ArrowLeft, 
  ArrowRight,
  Brain, 
  Zap, 
  Compass, 
  Award,
  Cpu,
  GitBranch,
  ArrowRightLeft,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import ContactTeaser from "@/components/ContactTeaser";
import { Locale, isValidLocale, getDirection, getLocalizedPath, getAlternateUrls } from "@/lib/i18n";
import { SERVICES_TRANSLATIONS } from "@/data/translations/services";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const t = SERVICES_TRANSLATIONS[locale] || SERVICES_TRANSLATIONS.en;
  const alternates = getAlternateUrls("/services");

  return {
    title: t.metaTitle,
    description: t.metaDesc,
    alternates: {
      canonical: alternates.canonical,
      languages: alternates.languages,
    },
  };
}

export default async function ServicesPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const t = SERVICES_TRANSLATIONS[locale] || SERVICES_TRANSLATIONS.en;
  const isLtr = getDirection(locale) === "ltr";

  const getCardIcon = (idx: number) => {
    switch (idx) {
      case 0: return Compass;
      case 1: return Bot;
      case 2: return Cpu;
      case 3: return GitBranch;
      case 4: return ShieldCheck;
      default: return ArrowRightLeft;
    }
  };

  return (
    <div className="space-y-20 py-12">
      
      {/* Header Banner */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-800 text-xs font-semibold">
            <Brain className="w-4 h-4 text-cyan-600" />
            <span>{t.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
            {t.title} <span className="text-gradient-cyan">{t.titleHighlight}</span>
          </h1>

          <p className="text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Pillar 1: Enterprise AI */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 border border-cyan-500/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950 border border-cyan-500/40 text-cyan-300 text-xs font-bold rounded-lg mb-2">
                  <Zap className="w-4 h-4 text-cyan-400 animate-pulse" />
                  <span>{t.pillar1Badge}</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black">
                  {t.pillar1Title}
                </h2>
              </div>
              <Link
                href={getLocalizedPath("/services/enterprise-ai", locale)}
                className="px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-black rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-all self-start md:self-auto"
              >
                <span>{t.pillar1Btn}</span>
                {isLtr ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
              </Link>
            </div>

            <p className="text-sm sm:text-base text-slate-300 max-w-4xl leading-relaxed">
              {t.pillar1Desc}
            </p>

            {/* 6 Sub-services Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {t.pillar1Cards.map((card, idx) => {
                const IconComp = getCardIcon(idx);
                return (
                  <div key={idx} className="p-4 bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 rounded-2xl space-y-2 relative overflow-hidden transition-all">
                    <div className="p-2 rounded-lg bg-cyan-950 text-cyan-400 w-fit">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-white text-sm flex items-center justify-between">
                      <span>{card.title}</span>
                      {card.tag && (
                        <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded-full font-mono">
                          {card.tag}
                        </span>
                      )}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 2: Educational Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-300 text-purple-800 text-xs font-semibold">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{t.pillar2Badge}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            {t.pillar2Title}
          </h2>

          <p className="text-sm text-slate-600">
            {t.pillar2Desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Corporate Box */}
          <div className="glass-panel bg-white p-8 rounded-3xl border border-purple-200 flex flex-col justify-between space-y-6 hover:border-purple-400 transition-all shadow-md">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-purple-100 text-purple-700 rounded-2xl">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{t.corporateSection.title}</h3>
                  <span className="text-xs text-purple-700 font-semibold">Enterprise Academy</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                {t.corporateSection.desc}
              </p>

              <div className="space-y-2.5">
                {t.corporateSection.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-2">
              <Link
                href={getLocalizedPath("/services/corporate", locale)}
                className="w-full py-3 bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <span>{t.corporateSection.linkText}</span>
                {isLtr ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
              </Link>

              <Link
                href={getLocalizedPath("/services/held-courses", locale)}
                className="w-full py-2 bg-slate-50 hover:bg-slate-100 text-purple-800 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-all border border-purple-200"
              >
                <Award className="w-3.5 h-3.5 text-purple-600" />
                <span>{t.corporateSection.heldCoursesText}</span>
              </Link>
            </div>
          </div>

          {/* Kids and Teens Box */}
          <div className="glass-panel bg-white p-8 rounded-3xl border border-cyan-200 flex flex-col justify-between space-y-6 hover:border-cyan-400 transition-all shadow-md">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-cyan-100 text-cyan-700 rounded-2xl">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{t.kidsSection.title}</h3>
                  <span className="text-xs text-cyan-700 font-semibold">Youth Innovation Lab (Ages 8-18)</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                {t.kidsSection.desc}
              </p>

              <div className="space-y-2.5">
                {t.kidsSection.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <Link
                href={getLocalizedPath("/services/kids-and-teens", locale)}
                className="w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <span>{t.kidsSection.linkText}</span>
                {isLtr ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Consultation Footer Teaser */}
      <ContactTeaser locale={locale} />

    </div>
  );
}
