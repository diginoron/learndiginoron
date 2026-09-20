import { notFound } from "next/navigation";
import Image from "next/image";
import { COURSES } from "@/data/courses";
import { CheckCircle2, Phone, Award, Sparkles } from "lucide-react";
import ContactTeaser from "@/components/ContactTeaser";
import CourseFormatsDisplay from "@/components/CourseFormatsDisplay";
import { Locale, LOCALES, isValidLocale, getAlternateUrls } from "@/lib/i18n";
import { getLocalizedCourse } from "@/data/translations/courses";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of LOCALES) {
    for (const course of COURSES) {
      params.push({ locale, slug: course.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const rawCourse = COURSES.find((c) => c.slug === slug);

  if (!rawCourse) {
    return { title: "Course Not Found | DigiNoron" };
  }

  const course = getLocalizedCourse(rawCourse, locale);
  const alternates = getAlternateUrls(`/courses/${slug}`);

  return {
    title: `${course.title} | DigiNoron`,
    description: course.shortDesc,
    alternates: {
      canonical: alternates.canonical,
      languages: alternates.languages,
    },
  };
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const rawCourse = COURSES.find((c) => c.slug === slug);

  if (!rawCourse) {
    notFound();
  }

  const course = getLocalizedCourse(rawCourse, locale);
  const isKids = course.category === "kids";

  const labels = {
    en: {
      audiencePrefix: "Audience:",
      syllabusTitle: "Course Syllabus & Core Modules",
      featuresTitle: "Course Features & Guarantees",
      investmentLabel: "Course Fee & Investment:",
      enrollBtn: "Enroll / Inquire for Registration",
      phoneConsultation: "Telephone Consultation",
      durationLabel: "Duration",
      levelLabel: "Level",
      sessionsLabel: "Sessions",
      instructorLabel: "Instructor",
      prerequisitesLabel: "Prerequisites",
      instructorTag: "Lead Instructor & Mentor",
    },
    fa: {
      audiencePrefix: "مخاطبین:",
      syllabusTitle: "سرفصل‌های آموزشی دوره",
      featuresTitle: "ویژگی‌ها و مزایای دوره دیجی نورون",
      investmentLabel: "شهریه و سرمایه‌گذاری دوره:",
      enrollBtn: "ثبت‌نام و رزرو مشاوره رایگان",
      phoneConsultation: "مشاوره تلفنی",
      durationLabel: "مدت زمان",
      levelLabel: "سطح دوره",
      sessionsLabel: "تعداد جلسات",
      instructorLabel: "مدرس",
      prerequisitesLabel: "پیش‌نیازها",
      instructorTag: "مدرس و منتور ارشد",
    },
    ar: {
      audiencePrefix: "الفئة المستهدفة:",
      syllabusTitle: "المحاور والمناهج التدريبية",
      featuresTitle: "مزايا ومكتسبات الدورة في ديجي نورون",
      investmentLabel: "رسوم الدورة والاستثمار التدريبي:",
      enrollBtn: "التسجيل وحجز استشارة تدريبية",
      phoneConsultation: "الاستشارة الهاتفية",
      durationLabel: "المدة",
      levelLabel: "المستوى",
      sessionsLabel: "الجلسات",
      instructorLabel: "المدرب",
      prerequisitesLabel: "المتطلبات السابقة",
      instructorTag: "كبير المدربين والمشرفين",
    },
  };

  const l = labels[locale] || labels.en;

  return (
    <div className="py-12 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Left 2 cols: Main Course Content */}
        <div className="lg:col-span-2 space-y-8">
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                isKids ? "bg-cyan-100 text-cyan-800 border border-cyan-300" : "bg-purple-100 text-purple-800 border border-purple-300"
              }`}>
                {course.categoryName}
              </span>
              <span className="text-xs text-slate-500">{l.audiencePrefix} {course.targetAudience}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
              {course.title}
            </h1>

            <p className="text-sm text-slate-600 leading-relaxed">
              {course.fullDesc}
            </p>
          </div>

          {/* Banner Image */}
          <div className="relative h-72 sm:h-96 rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Syllabus Formats or Topics */}
          {course.formats && course.formats.length > 0 ? (
            <CourseFormatsDisplay formats={course.formats} />
          ) : (
            <div className="glass-panel bg-white p-8 rounded-3xl border border-slate-200 space-y-6 shadow-xs">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-600" />
                <span>{l.syllabusTitle}</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {course.topics.map((topic, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-slate-800 leading-relaxed">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Features & Guarantees */}
          <div className="glass-panel bg-white p-8 rounded-3xl border border-slate-200 space-y-4 shadow-xs">
            <h3 className="text-lg font-bold text-slate-900">{l.featuresTitle}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
              {course.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right 1 col: Sticky Enrollment Box */}
        <div className="space-y-6">
          <div className="glass-panel bg-white p-8 rounded-3xl border border-cyan-300 sticky top-28 space-y-6 shadow-xl text-slate-900">
            <div>
              <span className="text-xs text-slate-500">{l.investmentLabel}</span>
              <div className="text-2xl sm:text-3xl font-black text-cyan-700 mt-1">
                {course.price}
              </div>
            </div>

            <div className="space-y-3 border-t border-b border-slate-100 py-4 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">{l.durationLabel}</span>
                <span className="font-bold">{course.duration}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">{l.levelLabel}</span>
                <span className="font-bold">{course.level}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">{l.sessionsLabel}</span>
                <span className="font-bold">{course.sessionsCount}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">{l.prerequisitesLabel}</span>
                <span className="font-bold">{course.prerequisites}</span>
              </div>
            </div>

            {/* Instructor */}
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-cyan-400">
                <Image
                  src={course.instructor.avatar}
                  alt={course.instructor.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">{course.instructor.name}</div>
                <div className="text-[11px] text-slate-500">{course.instructor.role}</div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2.5 pt-2">
              <a
                href="#consultation"
                className="w-full py-3.5 bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-extrabold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 transition-all shadow-md active:scale-98"
              >
                <span>{l.enrollBtn}</span>
              </a>

              <a
                href={locale === "fa" ? "tel:02188252497" : "tel:+61451410352"}
                className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all border border-slate-200"
              >
                <Phone className="w-4 h-4 text-cyan-600" />
                <span dir="ltr">{locale === "fa" ? "02188252497" : "+61 451 410 352"}</span>
              </a>
            </div>

          </div>
        </div>

      </div>

      <ContactTeaser locale={locale} />

    </div>
  );
}
