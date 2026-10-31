"use client";

import { useState } from "react";
import {
  Scale,
  TrendingUp,
  Ship,
  Coins,
  Bot,
  Cpu,
  Layers,
  GraduationCap,
  BarChart3,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Globe,
  ChevronDown,
  Sparkles,
  Lock,
  Boxes,
  HelpCircle,
  Check,
  X
} from "lucide-react";
import { Locale } from "@/lib/i18n";
import { TRADE_TRANSLATIONS, TradePillarItem } from "@/data/translations/trade";

interface InternationalTradeServicesProps {
  locale?: Locale;
}

export default function InternationalTradeServices({ locale = "en" }: InternationalTradeServicesProps) {
  const [selectedTab, setSelectedTab] = useState<string>("all");
  const [activeAxis, setActiveAxis] = useState<Record<string, "agents" | "multiAgents" | "process" | "training" | "dashboards">>({
    law: "agents",
    marketing: "agents",
    logistics: "agents",
    settlement: "agents",
  });
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeStep, setActiveStep] = useState<number>(0);

  const t = TRADE_TRANSLATIONS[locale] || TRADE_TRANSLATIONS.en;

  const getPillarIcon = (id: string) => {
    switch (id) {
      case "law":
        return Scale;
      case "marketing":
        return TrendingUp;
      case "logistics":
        return Ship;
      case "settlement":
        return Coins;
      default:
        return Globe;
    }
  };

  const getAccentStyles = (color: TradePillarItem["accentColor"]) => {
    switch (color) {
      case "indigo":
        return {
          border: "border-indigo-500/30 hover:border-indigo-500/60",
          bgBadge: "bg-indigo-950/80 border-indigo-500/40 text-indigo-300",
          iconColor: "text-indigo-400",
          iconBg: "bg-indigo-900/30 border-indigo-700/50",
          activeBtn: "bg-indigo-600 text-white shadow-indigo-500/25",
          highlight: "text-indigo-400",
          gradientBorder: "from-indigo-500/20 via-slate-800 to-indigo-950/40",
          boxGlow: "hover:shadow-indigo-500/10",
        };
      case "emerald":
        return {
          border: "border-emerald-500/30 hover:border-emerald-500/60",
          bgBadge: "bg-emerald-950/80 border-emerald-500/40 text-emerald-300",
          iconColor: "text-emerald-400",
          iconBg: "bg-emerald-900/30 border-emerald-700/50",
          activeBtn: "bg-emerald-600 text-white shadow-emerald-500/25",
          highlight: "text-emerald-400",
          gradientBorder: "from-emerald-500/20 via-slate-800 to-emerald-950/40",
          boxGlow: "hover:shadow-emerald-500/10",
        };
      case "cyan":
        return {
          border: "border-cyan-500/30 hover:border-cyan-500/60",
          bgBadge: "bg-cyan-950/80 border-cyan-500/40 text-cyan-300",
          iconColor: "text-cyan-400",
          iconBg: "bg-cyan-900/30 border-cyan-700/50",
          activeBtn: "bg-cyan-600 text-white shadow-cyan-500/25",
          highlight: "text-cyan-400",
          gradientBorder: "from-cyan-500/20 via-slate-800 to-cyan-950/40",
          boxGlow: "hover:shadow-cyan-500/10",
        };
      case "amber":
      default:
        return {
          border: "border-amber-500/30 hover:border-amber-500/60",
          bgBadge: "bg-amber-950/80 border-amber-500/40 text-amber-300",
          iconColor: "text-amber-400",
          iconBg: "bg-amber-900/30 border-amber-700/50",
          activeBtn: "bg-amber-600 text-slate-950 font-black shadow-amber-500/25",
          highlight: "text-amber-400",
          gradientBorder: "from-amber-500/20 via-slate-800 to-amber-950/40",
          boxGlow: "hover:shadow-amber-500/10",
        };
    }
  };

  const filteredPillars =
    selectedTab === "all" ? t.pillars : t.pillars.filter((p) => p.id === selectedTab);

  return (
    <div className="space-y-24">
      {/* SECTION 1: SETTLEMENT EXPLAINER BOX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-slate-900/95 to-amber-950/40 border border-amber-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 text-xs font-bold">
                <Coins className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.settlementExplainer.badge}</span>
              </div>
              <span className="text-[11px] font-mono text-slate-400">Financial Clearing & FX Hedging</span>
            </div>

            <div>
              <h2 className="text-xl sm:text-3xl font-black text-white">
                {t.settlementExplainer.title}
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-amber-300/90 mt-1">
                {t.settlementExplainer.subtitle}
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <p>{t.settlementExplainer.definition}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-900/40 space-y-2">
                <div className="flex items-center gap-2 text-rose-300 text-xs font-bold">
                  <X className="w-4 h-4 text-rose-400" />
                  <span>{t.settlementExplainer.traditionalVsAI.traditionalTitle}</span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                  {t.settlementExplainer.traditionalVsAI.traditionalDesc}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/40 space-y-2">
                <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>{t.settlementExplainer.traditionalVsAI.aiTitle}</span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed">
                  {t.settlementExplainer.traditionalVsAI.aiDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE 4 CORE PILLARS SHOWCASE */}
      <section id="trade-pillars" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t.pillarsSection.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
            {t.pillarsSection.title}{" "}
            <span className="text-gradient-cyan">{t.pillarsSection.titleHighlight}</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {t.pillarsSection.subtitle}
          </p>
        </div>

        {/* Tab Filter */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {[
            { id: "all", label: t.pillarsSection.tabLabels.all },
            { id: "law", label: t.pillarsSection.tabLabels.law },
            { id: "marketing", label: t.pillarsSection.tabLabels.marketing },
            { id: "logistics", label: t.pillarsSection.tabLabels.logistics },
            { id: "settlement", label: t.pillarsSection.tabLabels.settlement },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedTab === tab.id
                  ? "bg-slate-900 text-white shadow-md border border-slate-700"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Pillars Cards List */}
        <div className="space-y-12">
          {filteredPillars.map((pillar) => {
            const Icon = getPillarIcon(pillar.id);
            const style = getAccentStyles(pillar.accentColor);
            const currentAxis = activeAxis[pillar.id] || "agents";

            const axisContent =
              currentAxis === "agents"
                ? pillar.agents
                : currentAxis === "multiAgents"
                ? pillar.multiAgents
                : currentAxis === "process"
                ? pillar.processOptimization
                : currentAxis === "training"
                ? pillar.training
                : pillar.dashboards;

            return (
              <div
                key={pillar.id}
                id={pillar.id}
                className={`bg-slate-950 text-white rounded-3xl border ${style.border} shadow-2xl overflow-hidden transition-all duration-300 ${style.boxGlow}`}
              >
                {/* Header Banner */}
                <div className="p-6 sm:p-8 border-b border-slate-800 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3.5 rounded-2xl ${style.iconBg} border shrink-0`}>
                        <Icon className={`w-7 h-7 sm:w-8 sm:h-8 ${style.iconColor}`} />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs font-bold text-slate-400">
                            PILLAR {pillar.number}
                          </span>
                          <span className={`text-[10px] px-2 py-0.5 rounded-full border ${style.bgBadge} font-bold`}>
                            {pillar.badge}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-white">
                          {pillar.title}
                        </h3>
                        <p className={`text-xs font-semibold ${style.highlight}`}>
                          {pillar.englishTitle}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                      <a
                        href="#consultation-form"
                        className="px-5 py-2.5 bg-gradient-to-r from-slate-800 to-slate-700 hover:from-cyan-600 hover:to-indigo-600 border border-slate-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm"
                      >
                        {locale === "en" ? "Request Solution Proposal" : locale === "fa" ? "استعلام این خدمت" : "طلب عرض فني لهذا المحور"}
                      </a>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed font-normal">
                    {pillar.summary}
                  </p>
                </div>

                {/* The 5 Axes Navigation Bar */}
                <div className="px-4 sm:px-8 py-3 bg-slate-900/90 border-b border-slate-800/80 overflow-x-auto">
                  <div className="flex items-center gap-2 min-w-max">
                    <span className="text-[11px] font-bold text-slate-400 mr-2">
                      {locale === "en" ? "Execution Capabilities:" : locale === "fa" ? "ابعاد ۵ گانه پیاده‌سازی:" : "أبعاد التنفيذ:"}
                    </span>

                    <button
                      onClick={() => setActiveAxis({ ...activeAxis, [pillar.id]: "agents" })}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        currentAxis === "agents"
                          ? style.activeBtn
                          : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                      }`}
                    >
                      <Bot className="w-3.5 h-3.5" />
                      <span>{locale === "en" ? "1. AI Agents" : locale === "fa" ? "۱. ایجنت‌های هوشمند" : "١. وكلاء مستقلون"}</span>
                    </button>

                    <button
                      onClick={() => setActiveAxis({ ...activeAxis, [pillar.id]: "multiAgents" })}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        currentAxis === "multiAgents"
                          ? style.activeBtn
                          : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                      }`}
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>{locale === "en" ? "2. Multi-Agents" : locale === "fa" ? "۲. سیستم‌های چندعامله" : "٢. شبكة الوكلاء"}</span>
                    </button>

                    <button
                      onClick={() => setActiveAxis({ ...activeAxis, [pillar.id]: "process" })}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        currentAxis === "process"
                          ? style.activeBtn
                          : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                      }`}
                    >
                      <Cpu className="w-3.5 h-3.5" />
                      <span>{locale === "en" ? "3. Process Automation (BPA)" : locale === "fa" ? "۳. بهینه‌سازی فرآیندها" : "٣. أتمتة العمليات"}</span>
                    </button>

                    <button
                      onClick={() => setActiveAxis({ ...activeAxis, [pillar.id]: "training" })}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        currentAxis === "training"
                          ? style.activeBtn
                          : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                      }`}
                    >
                      <GraduationCap className="w-3.5 h-3.5" />
                      <span>{locale === "en" ? "4. Corporate Training" : locale === "fa" ? "۴. آموزش‌های تخصصی" : "٤. التدريب والتأهيل"}</span>
                    </button>

                    <button
                      onClick={() => setActiveAxis({ ...activeAxis, [pillar.id]: "dashboards" })}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        currentAxis === "dashboards"
                          ? style.activeBtn
                          : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                      }`}
                    >
                      <BarChart3 className="w-3.5 h-3.5" />
                      <span>{locale === "en" ? "5. BI Dashboards" : locale === "fa" ? "۵. داشبوردهای تصمیم‌گیری" : "٥. لوحات التحكم"}</span>
                    </button>
                  </div>
                </div>

                {/* Axis Content Display */}
                <div className="p-6 sm:p-8 space-y-6">
                  <div className="space-y-2">
                    <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${style.iconColor} bg-current`} />
                      <span>{axisContent.title}</span>
                    </h4>
                    <p className="text-xs text-slate-400">{axisContent.desc}</p>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {axisContent.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-start gap-3 hover:border-slate-700 transition-colors"
                      >
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${style.iconColor}`} />
                        <span className="text-xs text-slate-200 leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Deliverables & Business Impact Section */}
                  <div className="pt-4 border-t border-slate-800/80 grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-7 space-y-2.5">
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                        <Boxes className="w-4 h-4 text-cyan-400" />
                        <span>{t.pillarsSection.axesLabels.deliverables}:</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-300">
                        {pillar.keyDeliverables.map((del, dIdx) => (
                          <div
                            key={dIdx}
                            className="bg-slate-900 p-2 rounded-lg border border-slate-800 flex items-start gap-2"
                          >
                            <span className="text-cyan-400 font-mono">▸</span>
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                        <Zap className="w-4 h-4" />
                        <span>{t.pillarsSection.axesLabels.impact}:</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed font-medium">
                        {pillar.businessImpact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 3: MULTI-AGENT SWARM ORCHESTRATION ARCHITECTURE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 border border-indigo-500/30 rounded-3xl p-6 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/40 text-indigo-300 text-xs font-bold">
                <Layers className="w-3.5 h-3.5 text-indigo-400" />
                <span>{t.multiAgentOrchestration.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                {t.multiAgentOrchestration.title}{" "}
                <span className="text-gradient-cyan">{t.multiAgentOrchestration.titleHighlight}</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t.multiAgentOrchestration.description}
              </p>
            </div>

            {/* Stepper Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {t.multiAgentOrchestration.steps.map((st, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    activeStep === idx
                      ? "bg-slate-900/90 border-cyan-400 shadow-lg shadow-cyan-500/10 scale-102"
                      : "bg-slate-950/70 border-slate-800 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 rounded-md bg-cyan-950 border border-cyan-500/40 text-cyan-300 font-mono text-xs font-bold">
                      {st.step}
                    </span>
                    <Bot className="w-4 h-4 text-cyan-400" />
                  </div>
                  <h4 className="font-bold text-sm text-white mb-1">{st.agentName}</h4>
                  <p className="text-[10px] text-cyan-300 font-mono mb-3">{st.role}</p>
                  <p className="text-xs text-slate-300 leading-relaxed">{st.action}</p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>
                {locale === "en"
                  ? "Every step is verified against international standards (Incoterms 2020, UCP 600, WCO Harmonized System) with full enterprise audit logs."
                  : locale === "fa"
                  ? "تمامی مراحل بر اساس استانداردهای بین‌المللی (Incoterms 2020، UCP 600 و سازمان جهانی گمرک) با لاگ ثبت وقایع حقوقی اجرا می‌شوند."
                  : "تتم كافة الخطوات بالتوافق التام مع المعايير الدولية (Incoterms 2020، UCP 600، WCO) مع توثيق كامل للعمليات."}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: COMPARISON MATRIX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-300 text-slate-800 text-xs font-bold">
            <BarChart3 className="w-3.5 h-3.5 text-cyan-600" />
            <span>{t.comparison.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
            {t.comparison.title}{" "}
            <span className="text-gradient-cyan">{t.comparison.titleHighlight}</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">{t.comparison.subtitle}</p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-900 text-white text-[11px] sm:text-xs uppercase tracking-wider">
                <tr>
                  <th className="py-4 px-4 sm:px-6 font-bold">{t.comparison.headers.feature}</th>
                  <th className="py-4 px-4 sm:px-6 font-bold text-rose-300 bg-slate-950/40">
                    {t.comparison.headers.traditional}
                  </th>
                  <th className="py-4 px-4 sm:px-6 font-bold text-cyan-300 bg-cyan-950/60">
                    {t.comparison.headers.diginoron}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {t.comparison.rows.map((row, rIdx) => (
                  <tr key={rIdx} className={rIdx % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                      {row.metric}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-slate-500 bg-rose-50/30">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-slate-800 font-semibold bg-cyan-50/40">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                        <span>{row.diginoron}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 5: SECURITY & ON-PREMISE SOVEREIGNTY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl mb-8 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.techSecurity.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black">
              {t.techSecurity.title}{" "}
              <span className="text-emerald-400">{t.techSecurity.titleHighlight}</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {t.techSecurity.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t.techSecurity.features.map((feat, fIdx) => (
              <div
                key={fIdx}
                className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/40 transition-colors space-y-2"
              >
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <h4>{feat.title}</h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-300 text-slate-800 text-xs font-bold">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-600" />
            <span>{t.faq.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            {t.faq.title}
          </h2>
        </div>

        <div className="space-y-3">
          {t.faq.items.map((item, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left font-bold text-xs sm:text-sm text-slate-900 hover:text-cyan-700 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-cyan-600 text-xs">0{idx + 1}.</span>
                    <span>{item.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-cyan-600" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
