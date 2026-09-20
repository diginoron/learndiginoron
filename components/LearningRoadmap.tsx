import { Compass, Code, Cpu, Trophy } from "lucide-react";
import { Locale, getDirection } from "@/lib/i18n";
import { HOME_TRANSLATIONS } from "@/data/translations/home";

interface LearningRoadmapProps {
  locale?: Locale;
}

export default function LearningRoadmap({ locale = "en" }: LearningRoadmapProps) {
  const t = HOME_TRANSLATIONS[locale]?.roadmap || HOME_TRANSLATIONS.en.roadmap;
  const isLtr = getDirection(locale) === "ltr";

  const steps = [
    {
      num: isLtr ? "01" : "۰۱",
      title: t.step1Title,
      desc: t.step1Desc,
      icon: Compass,
      color: "from-cyan-500 to-blue-500",
    },
    {
      num: isLtr ? "02" : "۰۲",
      title: t.step2Title,
      desc: t.step2Desc,
      icon: Code,
      color: "from-purple-500 to-pink-500",
    },
    {
      num: isLtr ? "03" : "۰۳",
      title: t.step3Title,
      desc: t.step3Desc,
      icon: Cpu,
      color: "from-amber-500 to-orange-500",
    },
    {
      num: isLtr ? "04" : "۰۴",
      title: t.step4Title,
      desc: t.step4Desc,
      icon: Trophy,
      color: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section className="py-20 relative bg-slate-100/70 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest bg-cyan-100 px-3 py-1 rounded-full border border-cyan-300">
            {t.badge}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            {t.title} <span className="text-gradient-cyan">{t.titleHighlight}</span>
          </h2>
          <p className="text-sm text-slate-600">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div
                key={idx}
                className="glass-panel bg-white p-6 rounded-2xl border border-slate-200 hover:border-cyan-400 transition-all relative group shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${step.color} text-white font-bold`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-black text-slate-200 group-hover:text-cyan-500/30 transition-colors font-mono">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-slate-900 mb-2 group-hover:text-cyan-700 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
