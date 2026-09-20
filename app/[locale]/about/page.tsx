import Image from "next/image";
import { Sparkles, Bot, GraduationCap } from "lucide-react";
import ContactTeaser from "@/components/ContactTeaser";
import { Locale, isValidLocale, getAlternateUrls } from "@/lib/i18n";
import { ABOUT_TRANSLATIONS } from "@/data/translations/about";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const t = ABOUT_TRANSLATIONS[locale] || ABOUT_TRANSLATIONS.en;
  const alternates = getAlternateUrls("/about");

  return {
    title: t.metaTitle,
    description: t.metaDesc,
    alternates: {
      canonical: alternates.canonical,
      languages: alternates.languages,
    },
  };
}

export default async function AboutPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const t = ABOUT_TRANSLATIONS[locale] || ABOUT_TRANSLATIONS.en;

  return (
    <div className="py-8 sm:py-12 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-800 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.badge}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
          {t.title} <span className="text-gradient-cyan">{t.titleHighlight}</span>
        </h1>

        <p className="text-sm text-slate-600 leading-relaxed">
          {t.subtitle}
        </p>
      </div>

      {/* Main Narrative */}
      <div className="glass-panel bg-white p-6 sm:p-12 rounded-3xl border border-slate-200 space-y-8 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">{t.missionTitle}</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {t.missionP1}
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {t.missionP2}
            </p>
          </div>

          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-slate-200 shadow-xs">
            <Image
              src="/images/courses/enterprise-automation.jpg"
              alt="DigiNoron Team"
              fill
              className="object-cover"
            />
          </div>

        </div>

        {/* 2 Core Tracks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
          <div className="p-6 bg-slate-50 rounded-2xl border border-cyan-200 space-y-3">
            <div className="flex items-center gap-2 text-cyan-700 font-bold text-sm">
              <Bot className="w-5 h-5" />
              <span>{t.track1Title}</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              {t.track1Desc}
            </p>
          </div>

          <div className="p-6 bg-slate-50 rounded-2xl border border-purple-200 space-y-3">
            <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
              <GraduationCap className="w-5 h-5" />
              <span>{t.track2Title}</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              {t.track2Desc}
            </p>
          </div>
        </div>
      </div>

      <ContactTeaser locale={locale} />

    </div>
  );
}
