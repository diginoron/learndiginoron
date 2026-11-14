import type { Metadata } from "next";
import Link from "next/link";
import { 
  Sparkles, 
  ExternalLink, 
  BookOpen, 
  GraduationCap, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Bot,
  Zap,
  Cpu,
  FileText,
  ShieldCheck
} from "lucide-react";
import ContactTeaser from "@/components/ContactTeaser";
import { Locale, isValidLocale, getDirection, getLocalizedPath, getAlternateUrls, SITE_URL } from "@/lib/i18n";
import { TOOLS_TRANSLATIONS, ToolItem } from "@/data/translations/tools";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const t = TOOLS_TRANSLATIONS[locale] || TOOLS_TRANSLATIONS.en;
  const alternates = getAlternateUrls("/tools");

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
      url: `${SITE_URL}${getLocalizedPath("/tools", locale)}`,
      siteName: "DigiNoron",
      type: "website",
    },
  };
}

export default async function ToolsPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const t = TOOLS_TRANSLATIONS[locale] || TOOLS_TRANSLATIONS.en;
  const isLtr = getDirection(locale) === "ltr";

  const getToolIcon = (id: string) => {
    switch (id) {
      case "thesis":
        return <FileText className="w-6 h-6 text-indigo-600" />;
      case "trading":
        return <TrendingUp className="w-6 h-6 text-emerald-600" />;
      case "scholar":
        return <GraduationCap className="w-6 h-6 text-cyan-600" />;
      case "beauty":
        return <Sparkles className="w-6 h-6 text-rose-600" />;
      default:
        return <Cpu className="w-6 h-6 text-cyan-600" />;
    }
  };

  const getAccentStyles = (color: ToolItem["accentColor"]) => {
    switch (color) {
      case "indigo":
        return {
          cardBorder: "border-indigo-100 hover:border-indigo-300",
          glow: "from-indigo-500/10 via-purple-500/5 to-transparent",
          iconBg: "bg-indigo-50 border-indigo-200/80",
          badgeBg: "bg-indigo-50 text-indigo-800 border-indigo-200",
          tagBg: "bg-slate-100 text-slate-700",
          checkColor: "text-indigo-600",
          appBtn: "bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white shadow-indigo-600/20",
          blogBtn: "border-indigo-200 text-indigo-700 hover:bg-indigo-50 hover:border-indigo-300",
        };
      case "emerald":
        return {
          cardBorder: "border-emerald-100 hover:border-emerald-300",
          glow: "from-emerald-500/10 via-teal-500/5 to-transparent",
          iconBg: "bg-emerald-50 border-emerald-200/80",
          badgeBg: "bg-emerald-50 text-emerald-800 border-emerald-200",
          tagBg: "bg-slate-100 text-slate-700",
          checkColor: "text-emerald-600",
          appBtn: "bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white shadow-emerald-600/20",
          blogBtn: "border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-300",
        };
      case "rose":
        return {
          cardBorder: "border-rose-100 hover:border-rose-300",
          glow: "from-rose-500/10 via-pink-500/5 to-transparent",
          iconBg: "bg-rose-50 border-rose-200/80",
          badgeBg: "bg-rose-50 text-rose-800 border-rose-200",
          tagBg: "bg-slate-100 text-slate-700",
          checkColor: "text-rose-600",
          appBtn: "bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white shadow-rose-600/20",
          blogBtn: "border-rose-200 text-rose-700 hover:bg-rose-50 hover:border-rose-300",
        };
      case "cyan":
      default:
        return {
          cardBorder: "border-cyan-100 hover:border-cyan-300",
          glow: "from-cyan-500/10 via-blue-500/5 to-transparent",
          iconBg: "bg-cyan-50 border-cyan-200/80",
          badgeBg: "bg-cyan-50 text-cyan-800 border-cyan-200",
          tagBg: "bg-slate-100 text-slate-700",
          checkColor: "text-cyan-600",
          appBtn: "bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white shadow-cyan-600/20",
          blogBtn: "border-cyan-200 text-cyan-700 hover:bg-cyan-50 hover:border-cyan-300",
        };
    }
  };

  // JSON-LD structured data for software applications
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": t.metaTitle,
    "description": t.metaDesc,
    "itemListElement": t.tools.map((tool, index) => ({
      "@type": "SoftwareApplication",
      "position": index + 1,
      "name": tool.name,
      "description": tool.description,
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web Browser",
      "url": tool.appUrl,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="py-8 sm:py-12 space-y-12 sm:space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>{t.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
            {t.title} <span className="text-gradient-cyan">{t.titleHighlight}</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Tools Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {t.tools.map((tool) => {
            const styles = getAccentStyles(tool.accentColor);
            return (
              <div
                key={tool.id}
                className={`relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white border ${styles.cardBorder} shadow-lg shadow-slate-100/80 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group overflow-hidden`}
              >
                {/* Background ambient glow */}
                <div
                  className={`absolute top-0 ${isLtr ? "right-0" : "left-0"} w-72 h-72 bg-gradient-to-br ${styles.glow} rounded-full blur-3xl pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity`}
                />

                <div className="relative z-10 space-y-6">
                  {/* Top bar: Icon, Badges & Category */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-2xl border ${styles.iconBg} shadow-xs`}>
                        {getToolIcon(tool.id)}
                      </div>
                      <div>
                        <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${styles.badgeBg}`}>
                          {tool.badge}
                        </span>
                        <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                          {tool.category}
                        </div>
                      </div>
                    </div>

                    {tool.stats && (
                      <div className="hidden sm:block text-right">
                        <span className="text-[10px] text-slate-400 block font-medium">
                          {tool.stats.label}
                        </span>
                        <span className="text-xs font-bold text-slate-700 font-mono">
                          {tool.stats.value}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1.5">
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug group-hover:text-cyan-900 transition-colors">
                      {tool.name}
                    </h2>
                    <p className="text-xs sm:text-sm font-semibold text-cyan-700">
                      {tool.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {tool.description}
                  </p>

                  {/* Features list */}
                  <div className="space-y-2.5 pt-2 border-t border-slate-100">
                    <div className="text-[11px] font-bold text-slate-900 uppercase tracking-wider">
                      {t.featuresTitle}
                    </div>
                    <ul className="space-y-2">
                      {tool.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 leading-relaxed">
                          <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${styles.checkColor}`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action Buttons */}
                <div className="relative z-10 pt-6 mt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                  {/* Primary: Web App Link */}
                  <a
                    href={tool.appUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t.appLinkAria} ${tool.name}`}
                    className={`w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs shadow-md transition-all ${styles.appBtn}`}
                  >
                    <span>{tool.appButtonText}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  {/* Secondary: Blog Link (if available) */}
                  {tool.blogUrl && (
                    <a
                      href={tool.blogUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${t.blogLinkAria} ${tool.name}`}
                      className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-xs bg-white border shadow-xs transition-all ${styles.blogBtn}`}
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>{tool.blogButtonText}</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Enterprise & Custom AI Development CTA */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white p-8 sm:p-12 border border-slate-800 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs font-semibold">
              <Zap className="w-3.5 h-3.5" />
              <span>{t.cta.badge}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
              {t.cta.title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {t.cta.description}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href={getLocalizedPath(t.cta.buttonLink, locale)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all"
              >
                <Bot className="w-4 h-4" />
                <span>{t.cta.buttonText}</span>
                {isLtr ? <ArrowRight className="w-3.5 h-3.5" /> : <ArrowLeft className="w-3.5 h-3.5" />}
              </Link>

              <div className="flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>{locale === "en" ? "100% IP & Source Code Transfer" : locale === "fa" ? "انتقال ۱۰۰٪ سورس‌کد و مالکیت فکری" : "نقل ملكية الشيفرة المصدرية ١٠٠٪"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Teaser */}
        <ContactTeaser locale={locale} />
      </div>
    </>
  );
}
