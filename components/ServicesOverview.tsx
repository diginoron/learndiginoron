"use client";

import Link from "next/link";
import { GraduationCap, Building2, Check, ArrowLeft, ArrowRight } from "lucide-react";
import { Locale, getDirection, getLocalizedPath } from "@/lib/i18n";
import { HOME_TRANSLATIONS } from "@/data/translations/home";

interface ServicesOverviewProps {
  locale?: Locale;
}

export default function ServicesOverview({ locale = "en" }: ServicesOverviewProps) {
  const t = HOME_TRANSLATIONS[locale]?.servicesOverview || HOME_TRANSLATIONS.en.servicesOverview;
  const isLtr = getDirection(locale) === "ltr";

  return (
    <section className="py-20 relative bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-800 text-xs font-semibold">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            {t.title} <span className="text-gradient-cyan">{t.titleHighlight}</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 2 Educational Tracks Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Track 1: Corporate Training */}
          <div className="glass-panel bg-white p-8 rounded-3xl border border-purple-200 relative overflow-hidden group hover:border-purple-400 transition-all duration-300 shadow-md flex flex-col justify-between">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-4 rounded-2xl bg-purple-100 border border-purple-300 text-purple-700">
                  <Building2 className="w-8 h-8" />
                </div>
                <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-800 border border-purple-300 text-xs font-bold">
                  {t.corporateSubtitle}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {t.corporateTitle}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {t.corporateDesc}
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-purple-100 text-purple-700 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">
                      {locale === "en" ? "Executive AI Strategy Masterclasses" : locale === "fa" ? "مسترکلاس استراتژی AI ویژه مدیران ارشد" : "برامج تنفيذية لكبار المديرين في استراتيجية AI"}
                    </h4>
                    <p className="text-xs text-slate-500">
                      {locale === "en" ? "Strategic roadmapping, risk audit, and team leadership in the AI era." : locale === "fa" ? "تدوین نقشه راه هوشمندسازی، ارزیابی ریسک‌ها و نحوه هدایت تیم‌های هوش مصنوعی." : "إعداد خارطة طريق التحول الذكي وتقييم المخاطر التشغيلية."}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-purple-100 text-purple-700 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">
                      {locale === "en" ? "Staff Prompt Engineering & Workflow Labs" : locale === "fa" ? "کارگاه‌های کاربردی مهندسی پرامپت پرسنل" : "ورش عمل تطبيقية في صياغة الأوامر (Prompting)"}
                    </h4>
                    <p className="text-xs text-slate-500">
                      {locale === "en" ? "Accelerating report generation, document analysis, and operational tasks." : locale === "fa" ? "افزایش سرعت تولید گزارشات، ایمیل‌ها، تحلیل اسناد و تحلیل داده با ابزارهای نوین." : "تسريع إعداد التقارير والتحليلات البيانية باستخدام الأدوات الذكية."}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-purple-100 text-purple-700 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">
                      {locale === "en" ? "Enterprise Data Security & Privacy Protocols" : locale === "fa" ? "شیوه‌نامه امنیت داده و حریم خصوصی سازمان" : "سياسات أمن البيانات وحماية الخصوصية للمؤسسات"}
                    </h4>
                    <p className="text-xs text-slate-500">
                      {locale === "en" ? "Governance frameworks for protecting confidential IP when interfacing with LLMs." : locale === "fa" ? "آموزش الزامات و پروتکل‌های حفاظت از داده‌های محرمانه سازمانی هنگام کار با LLMها." : "أطر عمل لحماية البيانات والملكية الفكرية عند استخدام النماذج اللغوية."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <Link
                href={getLocalizedPath("/services/corporate", locale)}
                className="w-full py-3.5 bg-purple-700 hover:bg-purple-800 text-white font-extrabold rounded-xl flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <span>{t.corporateBtn}</span>
                {isLtr ? <ArrowRight className="w-4 h-4 text-white" /> : <ArrowLeft className="w-4 h-4 text-white" />}
              </Link>
            </div>

          </div>

          {/* Track 2: Kids & Teens Academy */}
          <div className="glass-panel bg-white p-8 rounded-3xl border border-cyan-200 relative overflow-hidden group hover:border-cyan-400 transition-all duration-300 shadow-md flex flex-col justify-between">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-4 rounded-2xl bg-cyan-100 border border-cyan-300 text-cyan-700">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <span className="px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 border border-cyan-300 text-xs font-bold">
                  {t.kidsSubtitle}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {t.kidsTitle}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {t.kidsDesc}
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-cyan-100 text-cyan-700 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">
                      {locale === "en" ? "Algorithmic Logic & AI Foundations" : locale === "fa" ? "تفکر الگوریتمی و سواد پایه هوش مصنوعی" : "التفكير الخوارزمي وأساسيات الذكاء الاصطناعي"}
                    </h4>
                    <p className="text-xs text-slate-500">
                      {locale === "en" ? "Demystifying machine learning and cultivating critical computational thinking." : locale === "fa" ? "شناخت نحوه یادگیری ماشین و تفکیک شایعات از واقعیت علمی AI برای دانش‌آموزان." : "استيعاب منطق التعلم الآلي والتفكير الحسابي المنهجي."}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-cyan-100 text-cyan-700 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">
                      {locale === "en" ? "Python for Youth & Game Creation" : locale === "fa" ? "پایتون هوشمند و ساخت بازی‌های کامپیوتری" : "لغة بايثون الذكية وتطوير الألعاب التفاعلية"}
                    </h4>
                    <p className="text-xs text-slate-500">
                      {locale === "en" ? "Beginner to intermediate Python coding focusing on computer vision and logic." : locale === "fa" ? "برنامه‌نویسی مقدماتی تا پیشرفته با تمرکز بر پردازش تصویر، صدا و الگوریتم‌ها." : "برمجة متدرجة تركز على معالجة الصور وبناء الخوارزميات الممتعة."}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-cyan-100 text-cyan-700 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">
                      {locale === "en" ? "Smart Chatbots & Interactive Robotics" : locale === "fa" ? "ساخت دستیارهای هوشمند و رباتیک" : "صناعة الروبوتات والمساعدات الذكية"}
                    </h4>
                    <p className="text-xs text-slate-500">
                      {locale === "en" ? "Building creative bots, vision recognition models, and interactive showcases." : locale === "fa" ? "آموزش ساخت چت‌بات، مدل‌های تشخیص چهره و پروژه‌های خلاقانه تعاملی." : "بناء بوتات محادثة ونماذج التعرف على الوجوه والمشاريع الابتكارية."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <Link
                href={getLocalizedPath("/services/kids-and-teens", locale)}
                className="w-full py-3.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-extrabold rounded-xl flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <span>{t.kidsBtn}</span>
                {isLtr ? <ArrowRight className="w-4 h-4 text-white" /> : <ArrowLeft className="w-4 h-4 text-white" />}
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
