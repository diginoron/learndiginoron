import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  Building2,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Users,
  BookOpen,
  Phone,
} from "lucide-react";
import { HELD_COURSES } from "@/data/heldCourses";
import { Locale, getDirection, getLocalizedPath, getAlternateUrls } from "@/lib/i18n";
import ContactTeaser from "@/components/ContactTeaser";

interface PageProps {
  params: Promise<{
    locale: string;
  }>;
}

const META_TRANSLATIONS = {
  en: {
    title: "Completed Courses & Workshops | DigiNoron Academy",
    description: "Visual reports, curricula, and outcomes of specialized AI training and organizational workshops conducted by DigiNoron Academy.",
  },
  fa: {
    title: "دوره‌های برگزار شده | دیجی‌نورون",
    description: "سوابق و گزارش دوره‌های آموزشی و کارگاه‌های تخصصی هوش مصنوعی برگزار شده توسط آکادمی دیجی‌نورون برای سازمان‌ها و صنایع برتر کشور.",
  },
  ar: {
    title: "الدورات والورش المنفذة | أكاديمية ديجي نورون",
    description: "تقارير مصورة ومناهج ونتائج الورش التدريبية التخصصية في الذكاء الاصطناعي المنفذة من قبل أكاديمية ديجي نورون للمؤسسات والشركات.",
  },
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = (rawLocale === "fa" || rawLocale === "ar" ? rawLocale : "en") as Locale;
  const meta = META_TRANSLATIONS[locale];

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: locale === "en" ? "https://diginoron.com/services/held-courses" : `https://diginoron.com/${locale}/services/held-courses`,
      languages: getAlternateUrls("/services/held-courses"),
    },
  };
}

export default async function HeldCoursesPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale = (rawLocale === "fa" || rawLocale === "ar" ? rawLocale : "en") as Locale;
  const isRtl = getDirection(locale) === "rtl";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const labels = {
    en: {
      badge: "Educational Records & Workshops of DigiNoron Academy",
      title: "Completed Specialized Courses & Workshops",
      titleHighlight: "Completed",
      description: "Visual reports, curricula, and outcomes of organizational workshops, seminars, and training programs held in applied AI and digital transformation.",
      partner: "Organizer / Partner:",
      location: "Location:",
      instructor: "Instructor:",
      audience: "Audience:",
      curriculum: "Content & Topics Covered in This Course:",
      achievements: "Workshop Achievements & Outcomes:",
      locationHeld: "Venue:",
      ctaButton: "Request This Course for Your Organization",
      customOfferBadge: "Custom Courses & Workshops",
      customOfferTitle: "Interested in hosting an AI workshop for your industry or city?",
      customOfferDesc: "DigiNoron's faculty and specialists design and deliver customized corporate workshops for guilds, associations, and enterprises in person and online.",
      customOfferCta: "Submit Training Request",
      contactPhone: "+61 451 410 352",
    },
    fa: {
      badge: "سوابق آموزشی و کارگاهی آکادمی دیجی‌نورون",
      title: "دوره‌ها و کارگاه‌های تخصصی برگزار شده",
      titleHighlight: "برگزار شده",
      description: "گزارش تصویری و سرفصل‌های کارگاه‌ها، سمینارها و دوره‌های سازمانی برگزار شده در حوزه هوش مصنوعی کاربردی، ایجنت‌های هوشمند و تحول دیجیتال",
      partner: "برگزارکننده / همکار:",
      location: "محل برگزاری:",
      instructor: "مدرس:",
      audience: "مخاطبان:",
      curriculum: "محتوا و سرفصل‌های تدریس شده در این دوره:",
      achievements: "دستاوردها و نتایج کارگاه:",
      locationHeld: "محل برگزاری:",
      ctaButton: "درخواست اجرای این دوره برای صنف یا سازمان شما",
      customOfferBadge: "برگزاری دوره‌ها و کارگاه‌های سفارشی",
      customOfferTitle: "آیا مایل به برگزاری کارگاه هوش مصنوعی در صنف یا شهر خود هستید؟",
      customOfferDesc: "تیم اساتید و متخصصان دیجی نورون آماده طراحی و اجرای کارگاه‌های تخصصی متناسب با نیاز اتحادیه‌ها، انجمن‌های صنفی، نهادها و شرکت‌های خصوصی به صورت حضوری و آنلاین می‌باشد.",
      customOfferCta: "ثبت درخواست همکاری آموزشی",
      contactPhone: "02188252497",
    },
    ar: {
      badge: "السجلات والورش التدريبية لأكاديمية ديجي نورون",
      title: "الدورات والورش التخصصية المنفذة",
      titleHighlight: "المنفذة",
      description: "تقارير مصورة ومناهج ونتائج الورش التخصصية والندوات والدورات المؤسسية في الذكاء الاصطناعي التطبيقي والتحول الرقمي",
      partner: "الجهة المنظمة / الشريك:",
      location: "المكان:",
      instructor: "المدرب:",
      audience: "الفئة المستهدفة:",
      curriculum: "المحتوى والمحاور التدريبية في هذه الدورة:",
      achievements: "إنجازات ومخرجات ورشة العمل:",
      locationHeld: "مكان الانعقاد:",
      ctaButton: "طلب تنفيذ هذه الدورة لمؤسستكم أو نقابتكم",
      customOfferBadge: "تنظيم دورات وورش مخصصة",
      customOfferTitle: "هل ترغب في تنظيم ورشة عمل للذكاء الاصطناعي في قطاعك أو مدينتك؟",
      customOfferDesc: "فريق الخبراء والأساتذة في ديجي نورون مستعد لتصميم وتنفيذ ورش عمل متخصصة وفقاً لاحتياجات النقابات، المؤسسات والشركات حضورياً وافتراضياً.",
      customOfferCta: "تقديم طلب تعاون تدريبي",
      contactPhone: "+61 451 410 352",
    },
  }[locale];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 py-12 md:py-20">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
            <GraduationCap className="w-4 h-4" />
            <span>{labels.badge}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {labels.title.replace(labels.titleHighlight, "")}{" "}
            <span className="text-cyan-400">{labels.titleHighlight}</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            {labels.description}
          </p>
        </div>
      </section>

      {/* Course List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="space-y-12">
          {HELD_COURSES.map((course) => (
            <div
              key={course.id}
              id={course.slug}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 transition-all hover:border-cyan-500/30 text-slate-900"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                {/* Media & Meta Sidebar */}
                <div className="lg:col-span-5 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 p-6 sm:p-8 flex flex-col justify-between text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                        {course.categoryName}
                      </span>
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        {course.year}
                      </span>
                    </div>

                    <div className="relative my-4 aspect-[4/3] w-full max-w-sm mx-auto rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl">
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="space-y-1.5 text-xs text-slate-200 bg-slate-900/80 backdrop-blur-md p-3.5 rounded-2xl border border-slate-700/60">
                      {course.partner && (
                        <div className="flex items-center gap-2">
                          <Building2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span className="font-semibold truncate">
                            {labels.partner} {course.partner}
                          </span>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{course.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content & Details */}
                <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    {/* Tags */}
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      {course.instructor && (
                        <span className="flex items-center gap-1 text-cyan-900 bg-cyan-100 border border-cyan-300 px-2.5 py-1 rounded-md font-bold">
                          <GraduationCap className="w-3.5 h-3.5 text-cyan-700" />
                          <span>{labels.instructor} {course.instructor}</span>
                        </span>
                      )}
                      <span className="flex items-center gap-1 text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        <span>{course.city}</span>
                      </span>
                      <span className="flex items-center gap-1 text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        <span>{course.year}</span>
                      </span>
                      <span className="flex items-center gap-1 text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
                        <Users className="w-3.5 h-3.5 text-slate-500" />
                        <span>{labels.audience} {course.audience}</span>
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                      {course.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {course.fullDesc}
                    </p>

                    {/* Topics covered */}
                    <div className="pt-2">
                      <h4 className="text-xs font-black text-cyan-800 flex items-center gap-1.5 mb-3">
                        <BookOpen className="w-4 h-4 text-cyan-600" />
                        <span>{labels.curriculum}</span>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {course.topics.map((topic, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2 p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 leading-snug"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 mt-0.5 shrink-0" />
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Highlights / Pillars */}
                    {course.keyPoints && (
                      <div className="pt-2">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {course.keyPoints.map((point, idx) => (
                            <div
                              key={idx}
                              className="p-3 bg-cyan-50/60 rounded-xl border border-cyan-200 space-y-1"
                            >
                              <div className="text-xs font-bold text-cyan-900">{point.title}</div>
                              <p className="text-[11px] text-slate-600 leading-relaxed">{point.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Achievements */}
                    {course.achievements && course.achievements.length > 0 && (
                      <div className="pt-2">
                        <h4 className="text-xs font-black text-purple-800 flex items-center gap-1.5 mb-2">
                          <Sparkles className="w-4 h-4 text-purple-600" />
                          <span>{labels.achievements}</span>
                        </h4>
                        <ul className="space-y-1.5 text-xs text-slate-600">
                          {course.achievements.map((ach, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                    <div className="text-xs text-slate-500">
                      {labels.locationHeld} <span className="font-bold text-slate-800">{course.location}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Link
                        href={getLocalizedPath("/contact", locale)}
                        className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-xl text-xs transition-colors shadow-sm flex items-center gap-1.5"
                      >
                        <span>{labels.ctaButton}</span>
                        <ArrowIcon className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Invitation Section for Organizations / Guilds */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel bg-gradient-to-r from-slate-900 via-cyan-950 to-slate-900 text-white p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold border border-cyan-500/30">
                <Building2 className="w-3.5 h-3.5 text-cyan-300" />
                <span>{labels.customOfferBadge}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black leading-tight">
                {labels.customOfferTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {labels.customOfferDesc}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <Link
                href={getLocalizedPath("/contact", locale)}
                className="px-6 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black rounded-xl text-xs sm:text-sm text-center transition-all shadow-lg"
              >
                {labels.customOfferCta}
              </Link>
              <a
                href={`tel:${labels.contactPhone.replace(/\s+/g, "")}`}
                className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-cyan-300 font-bold rounded-xl text-xs sm:text-sm text-center border border-slate-700 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span className="font-mono">{labels.contactPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Global Contact / CTA */}
      <ContactTeaser locale={locale} />
    </div>
  );
}
