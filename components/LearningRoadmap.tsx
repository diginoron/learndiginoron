import { Compass, Code, Cpu, Trophy } from "lucide-react";

export default function LearningRoadmap() {
  const steps = [
    {
      num: "۰۱",
      title: "ارزیابی سطحی و سنجش علاقه",
      desc: "تعیین سطح دانش‌آموزان یا عارضه‌یابی فرایندهای سازمان توسط مشاورین دیجی نورون.",
      icon: Compass,
      color: "from-cyan-500 to-blue-500",
    },
    {
      num: "۰۲",
      title: "یادگیری کاربردی ابزارها و برنامه‌نویسی",
      desc: "شرکت در کلاس‌های تعاملی، بازی‌محور یا کارگاه‌های اختصاصی سازمانی.",
      icon: Code,
      color: "from-purple-500 to-pink-500",
    },
    {
      num: "۰۳",
      title: "اجرای پروژه‌های واقعی و شبیه‌سازی",
      desc: "پیاده‌سازی چت‌بات‌های هوشمند، مدل‌های پردازش تصویر یا اتوماسیون‌های کاری.",
      icon: Cpu,
      color: "from-amber-500 to-orange-500",
    },
    {
      num: "۰۴",
      title: "دریافت مدرک معتبر و منتورینگ دائمی",
      desc: "اعطای گواهی‌نامه رسمی دیجی نورون و عضویت در باشگاه متخصصین هوش مصنوعی.",
      icon: Trophy,
      color: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section className="py-20 relative bg-slate-950/80 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-500/30">
            مسیر موفقیت دانش‌پذیران
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            مسیر ۴ مرحله‌ای یادگیری در <span className="text-gradient-cyan">آکادمی دیجی نورون</span>
          </h2>
          <p className="text-sm text-gray-400">
            چه یک دانش‌آموز باشد و چه یک مدیر ارشد، فرایند آموزش در دیجی نورون کاملاً شفاف و نقشه‌راه محور است.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all relative group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${step.color} text-black font-bold`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-black text-slate-700 group-hover:text-cyan-400/40 transition-colors font-mono">
                    {step.num}
                  </span>
                </div>

                <h3 className="font-bold text-base text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-gray-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
