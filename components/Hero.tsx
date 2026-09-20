"use client";

import Link from "next/link";
import { GraduationCap, Building2, Phone, ArrowLeft, ArrowRight, Bot, Zap } from "lucide-react";
import { Locale, getDirection, getLocalizedPath } from "@/lib/i18n";
import { HOME_TRANSLATIONS } from "@/data/translations/home";

interface HeroProps {
  locale?: Locale;
}

export default function Hero({ locale = "en" }: HeroProps) {
  const t = HOME_TRANSLATIONS[locale]?.hero || HOME_TRANSLATIONS.en.hero;
  const isLtr = getDirection(locale) === "ltr";

  return (
    <section className="relative pt-8 pb-20 overflow-hidden">
      {/* Dynamic Glow Accents */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 left-10 w-[30rem] h-[30rem] bg-indigo-400/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tag Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-cyan-500/30 text-slate-800 text-xs sm:text-sm font-semibold shadow-md backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-cyan-800 font-bold">{t.badgeTag}</span>
            <span>{t.badgeDesc}</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight">
            {t.titleLine1} <br className="hidden sm:inline" />
            <span className="text-gradient-cyan">{t.titleLine2}</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t.description}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href={getLocalizedPath("/services/enterprise-ai", locale)}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-slate-900 via-cyan-900 to-indigo-950 hover:from-slate-800 hover:to-indigo-900 text-white font-black text-base rounded-2xl shadow-xl shadow-cyan-900/20 flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 border border-cyan-400/30"
            >
              <Zap className="w-5 h-5 text-cyan-300 animate-pulse" />
              <span>{t.enterpriseBtn}</span>
              {isLtr ? <ArrowRight className="w-4 h-4 text-cyan-300" /> : <ArrowLeft className="w-4 h-4 text-cyan-300" />}
            </Link>

            <Link
              href={getLocalizedPath("/services", locale)}
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 font-extrabold text-base rounded-2xl shadow-md flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95"
            >
              <GraduationCap className="w-5 h-5 text-cyan-700" />
              <span>{t.academyBtn}</span>
              {isLtr ? <ArrowRight className="w-4 h-4 text-slate-500" /> : <ArrowLeft className="w-4 h-4 text-slate-500" />}
            </Link>

            <a
              href="tel:02188252497"
              className="w-full sm:w-auto px-6 py-4 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 font-bold text-sm rounded-2xl flex items-center justify-center gap-2 transition-all"
            >
              <Phone className="w-4 h-4 text-cyan-600" />
              <span dir="ltr">{t.consultationBtn}</span>
            </a>
          </div>
        </div>

        {/* 3 Core Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto">
          
          {/* Card 1: Enterprise AI */}
          <div className="glass-panel p-6 rounded-2xl border-2 border-cyan-500/40 bg-gradient-to-b from-white to-cyan-50/50 flex flex-col justify-between hover:border-cyan-500 transition-all shadow-md relative overflow-hidden group">
            <div className={`absolute top-0 ${isLtr ? "right-0 rounded-bl-xl" : "left-0 rounded-br-xl"} bg-cyan-600 text-white text-[10px] font-black px-3 py-1`}>
              {t.card1Badge}
            </div>
            <div>
              <div className="p-3 rounded-xl bg-cyan-100 text-cyan-800 w-fit mb-4 mt-2">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-lg mb-2">
                {t.card1Title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {t.card1Desc}
              </p>
            </div>
            <Link 
              href={getLocalizedPath("/services/enterprise-ai", locale)} 
              className="text-xs font-bold text-cyan-800 hover:text-cyan-900 flex items-center gap-1 pt-2 border-t border-cyan-200/60"
            >
              <span>{t.card1Link}</span>
              {isLtr ? <ArrowRight className="w-3.5 h-3.5" /> : <ArrowLeft className="w-3.5 h-3.5" />}
            </Link>
          </div>

          {/* Card 2: Corporate Upskilling */}
          <div className="glass-panel p-6 rounded-2xl border border-purple-200 bg-white flex flex-col justify-between hover:border-purple-400 transition-all shadow-sm group">
            <div>
              <div className="p-3 rounded-xl bg-purple-100 text-purple-700 w-fit mb-4">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-lg mb-2">
                {t.card2Title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {t.card2Desc}
              </p>
            </div>
            <Link 
              href={getLocalizedPath("/services/corporate", locale)} 
              className="text-xs font-bold text-purple-700 hover:text-purple-800 flex items-center gap-1 pt-2 border-t border-slate-100"
            >
              <span>{t.card2Link}</span>
              {isLtr ? <ArrowRight className="w-3.5 h-3.5" /> : <ArrowLeft className="w-3.5 h-3.5" />}
            </Link>
          </div>

          {/* Card 3: Kids & Teens Academy */}
          <div className="glass-panel p-6 rounded-2xl border border-slate-200 bg-white flex flex-col justify-between hover:border-cyan-400 transition-all shadow-sm group">
            <div>
              <div className="p-3 rounded-xl bg-cyan-100 text-cyan-700 w-fit mb-4">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-lg mb-2">
                {t.card3Title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {t.card3Desc}
              </p>
            </div>
            <Link 
              href={getLocalizedPath("/services/kids-and-teens", locale)} 
              className="text-xs font-bold text-cyan-700 hover:text-cyan-800 flex items-center gap-1 pt-2 border-t border-slate-100"
            >
              <span>{t.card3Link}</span>
              {isLtr ? <ArrowRight className="w-3.5 h-3.5" /> : <ArrowLeft className="w-3.5 h-3.5" />}
            </Link>
          </div>

        </div>

        {/* Enterprise Stats Counter Strip */}
        <div className="mt-14 bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 text-white border border-slate-800 rounded-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-5xl mx-auto shadow-xl">
          <div>
            <div className="text-2xl sm:text-3xl font-black text-cyan-400" dir="ltr">{t.stats.stat1Number}</div>
            <div className="text-xs text-slate-300 mt-1">{t.stats.stat1Label}</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-indigo-300" dir="ltr">{t.stats.stat2Number}</div>
            <div className="text-xs text-slate-300 mt-1">{t.stats.stat2Label}</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-400" dir="ltr">{t.stats.stat3Number}</div>
            <div className="text-xs text-slate-300 mt-1">{t.stats.stat3Label}</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-amber-400" dir="ltr">{t.stats.stat4Number}</div>
            <div className="text-xs text-slate-300 mt-1">{t.stats.stat4Label}</div>
          </div>
        </div>

      </div>
    </section>
  );
}
