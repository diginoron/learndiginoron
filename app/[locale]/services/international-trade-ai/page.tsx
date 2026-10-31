import { 
  Globe, 
  Zap, 
  ShieldCheck, 
  Phone
} from "lucide-react";
import ContactTeaser from "@/components/ContactTeaser";
import EnterpriseContactForm from "@/components/EnterpriseContactForm";
import InternationalTradeServices from "@/components/InternationalTradeServices";
import { Locale, isValidLocale, getAlternateUrls } from "@/lib/i18n";
import { TRADE_TRANSLATIONS } from "@/data/translations/trade";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const alternates = getAlternateUrls("/services/international-trade-ai");
  const t = TRADE_TRANSLATIONS[locale] || TRADE_TRANSLATIONS.en;

  return {
    title: t.metaTitle,
    description: t.metaDesc,
    alternates: {
      canonical: alternates.canonical,
      languages: alternates.languages,
    },
    openGraph: {
      title: t.metaTitle,
      description: t.metaDesc,
      url: alternates.canonical,
      siteName: "DigiNoron",
      locale: locale === "fa" ? "fa_IR" : locale === "ar" ? "ar_SA" : "en_US",
      type: "website",
    },
  };
}

export default async function InternationalTradeAIPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const t = TRADE_TRANSLATIONS[locale] || TRADE_TRANSLATIONS.en;

  return (
    <div className="space-y-20 py-10">
      {/* HERO SECTION */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white p-8 sm:p-14 rounded-3xl border border-cyan-500/30 shadow-2xl relative overflow-hidden">
            {/* Ambient background glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 text-xs font-bold">
                  <Globe className="w-4 h-4 text-cyan-400 animate-pulse" />
                  <span>{t.hero.badge}</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-black leading-tight">
                  {t.hero.titleStart}{" "}
                  <span className="text-gradient-cyan">{t.hero.titleHighlight}</span>{" "}
                  {t.hero.titleEnd}
                </h1>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  {t.hero.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#consultation-form"
                    className="px-7 py-4 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-black rounded-xl shadow-lg shadow-cyan-500/25 text-sm transition-all hover:scale-105"
                  >
                    {t.hero.ctaConsultation}
                  </a>
                  <a
                    href={locale === "fa" ? "tel:02188252497" : "tel:+61451410352"}
                    className="px-6 py-4 bg-slate-800/80 border border-slate-700 hover:bg-slate-800 text-white text-sm font-bold rounded-xl flex items-center gap-2 transition-all"
                  >
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span dir="ltr">{t.hero.phone}</span>
                  </a>
                </div>
              </div>

              {/* Stats Showcase Box */}
              <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs font-bold text-cyan-300">
                  <span className="flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-cyan-400" />
                    <span>{locale === "en" ? "Trade Operational Benchmarks" : locale === "fa" ? "شاخص‌های عملکردی بازرگانی هوشمند" : "مؤشرات الأداء في التجارة الذكية"}</span>
                  </span>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {t.hero.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between"
                    >
                      <div className="text-xl sm:text-2xl font-black text-cyan-400 font-mono">
                        {stat.value}
                      </div>
                      <div className="text-xs font-bold text-slate-200 mt-1">
                        {stat.label}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5 leading-snug">
                        {stat.desc}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span>ICC Incoterms 2020 & WCO HS Standard</span>
                  <span className="text-emerald-400 font-mono font-bold">100% On-Premise Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED INTERACTIVE TRADE SERVICES */}
      <InternationalTradeServices locale={locale} />

      {/* LEAD INBOUND CONSULTATION FORM */}
      <section id="consultation-form" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <EnterpriseContactForm locale={locale} initialServiceType="trade-ai" />
      </section>

      {/* GENERAL CONTACT TEASER */}
      <ContactTeaser locale={locale} />
    </div>
  );
}
