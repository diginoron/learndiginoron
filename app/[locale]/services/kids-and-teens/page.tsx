import Image from "next/image";
import { GraduationCap, CheckCircle2, Phone, Gamepad2, Code } from "lucide-react";
import { COURSES } from "@/data/courses";
import CourseCard from "@/components/CourseCard";
import ContactTeaser from "@/components/ContactTeaser";
import { Locale, isValidLocale, getAlternateUrls } from "@/lib/i18n";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const alternates = getAlternateUrls("/services/kids-and-teens");

  const titles: Record<Locale, string> = {
    en: "Kids & Teens AI Academy (Ages 8-18) | DigiNoron",
    fa: "آموزش هوش مصنوعی کودکان و نوجوانان | دیجی نورون",
    ar: "أكاديمية الذكاء الاصطناعي للأطفال واليافعين (٨-١٨ سنة) | ديجي نورون",
  };

  const descriptions: Record<Locale, string> = {
    en: "Playful, project-driven AI curricula for children and youth. Teaching computational thinking, visual machine learning, Scratch robotics, and Python AI.",
    fa: "دوره‌های پروژه‌محور و بازی‌محور آموزش هوش مصنوعی، برنامه‌نویسی پایتون و تفکر الگوریتمی برای رده سنی ۸ تا ۱۸ سال دیجی نورون.",
    ar: "برامج تدريبية تفاعلية وقائمة على المشاريع لتعليم الأطفال واليافعين التفكير الخوارزمي، البرمجة بلغة بايثون وتطبيقات الذكاء الاصطناعي.",
  };

  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: alternates.canonical,
      languages: alternates.languages,
    },
  };
}

export default async function KidsAndTeensServicePage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const kidsCourses = COURSES.filter((c) => c.category === "kids");

  const content = {
    en: {
      badge: "DigiNoron Youth & Teens AI Division",
      title: "Comprehensive Applied AI Education for",
      titleHighlight: "Kids & Teens (Ages 8-18)",
      description: "We transform children from passive technology consumers into innovative creators of smart apps, interactive games, and autonomous bots through a rigorous yet playful curriculum.",
      viewCoursesBtn: "View Courses (Ages 8-18)",
      parentsPhoneBtn: "Admissions Line: +61 451 410 352",
      calloutTitle: "Project-Centric & Game-Based Learning",
      calloutSubtitle: "Taught using international standards: Scratch, Teachable Machine, and Python",
      ageGroupsTitle: "Age-Specific Educational Tracks",
      ageGroupsSubtitle: "Curricula tailored to cognitive milestones and developmental readiness",
      group1Badge: "Ages 8 to 12",
      group1Title: "Junior Level: Algorithmic Logic & Visual AI",
      group1Desc: "Introducing foundational machine learning through graphical tools and visual game scripting without text syntax barriers.",
      group1F1: "Understanding data, model inputs, and predictive outputs",
      group1F2: "Training computer vision & voice recognition models in Scratch",
      group1F3: "Building interactive games and creative digital storytelling",
      group2Badge: "Ages 13 to 18",
      group2Title: "Teens Level: Python AI & Applied Prompt Engineering",
      group2Desc: "Hands-on coding with Python, data processing libraries, speech recognition, and building intelligent conversational bots.",
      group2F1: "Writing clean, functional Python code for automation",
      group2F2: "Building smart vision classification and chatbot applications",
      group2F3: "Digital ethics, safety protocols, and portfolio building",
      coursesSectionTitle: "Active Youth & Teens Programs",
    },
    fa: {
      badge: "دپارتمان تخصصی کودکان و نوجوانان دیجی نورون",
      title: "آموزش جامع",
      titleHighlight: "هوش مصنوعی برای کودکان و نوجوانان",
      description: "ما در آکادمی دیجی نورون با طراحی یک مسیر سرگرم‌کننده و در عین حال کاملاً علمی، فرزندان شما را از مصرف‌کننده صرف تکنولوژی به خلق‌کننده ابزارها و برنامه‌های هوشمند تبدیل می‌کنیم.",
      viewCoursesBtn: "مشاهده دوره‌ها (۸ تا ۱۸ سال)",
      parentsPhoneBtn: "مشاوره والدین: ۰۲۱۸۸۲۵۲۴۹۷",
      calloutTitle: "کلاس‌های پروژه‌محور و بازی‌محور",
      calloutSubtitle: "آموزش با ابزارهای استاندارد جهانی Scratch, Teachable Machine & Python",
      ageGroupsTitle: "تفکیک سطوح آموزشی بر اساس سن",
      ageGroupsSubtitle: "محتوای آموزشی متناسب با رشد شناختی و ظرفیت یادگیری هر رده سنی",
      group1Badge: "گروه سنی ۸ تا ۱۲ سال",
      group1Title: "سطح کودکان: تفکر الگوریتمی و هوش دیداری",
      group1Desc: "آموزش مفاهیم پایه هوش مصنوعی بدون پیچیدگی‌های برنامه‌نویسی متنی، از طریق ابزارهای گرافیکی و ساخت بازی.",
      group1F1: "شناخت مفاهیم داده، ورودی و خروجی الگوریتم‌ها",
      group1F2: "آموزش یادگیری ماشین با Teachable Machine و اسکرچ",
      group1F3: "ساخت پروژه‌های خلاقانه داستان‌سرایی و بازی‌سازی تعاملی",
      group2Badge: "گروه سنی ۱۳ تا ۱۸ سال",
      group2Title: "سطح نوجوانان: پایتون، مهندسی پرامپت و بات‌های هوشمند",
      group2Desc: "کدنویسی واقعی با پایتون، پردازش تصویر، کتابخانه‌های هوش مصنوعی و ساخت دستیارهای اختصاصی.",
      group2F1: "برنامه‌نویسی ساختاریافته به زبان پایتون",
      group2F2: "ساخت چت‌بات‌های اختصاصی و پردازش زبان طبیعی",
      group2F3: "آشنایی با مبانی امنیت، اخلاق هوش مصنوعی و پروژه‌های تیمی",
      coursesSectionTitle: "دوره‌های فعال دپارتمان کودکان و نوجوانان",
    },
    ar: {
      badge: "دائرة الأطفال واليافعين - ديجي نورون",
      title: "التعليم التفاعلي الشامل في",
      titleHighlight: "الذكاء الاصطناعي للأطفال واليافعين",
      description: "نحول اهتمام الأطفال بالأجهزة الرقمية من مجرد استهلاك سلبي إلى شغف ابتكاري ببناء التطبيقات الذكية والألعاب التفاعلية عبر مسار علمي ممتع.",
      viewCoursesBtn: "استعراض الدورات (٨ إلى ١٨ سنة)",
      parentsPhoneBtn: "استشارات أولياء الأمور: +61 451 410 352",
      calloutTitle: "تعليم قائم على المشاريع والألعاب التفاعلية",
      calloutSubtitle: "التدريب بأحدث الأدوات العالمية: Scratch وTeachable Machine ولغة بايثون",
      ageGroupsTitle: "المسارات التعليمية وفق الفئات العمرية",
      ageGroupsSubtitle: "مناهج تراعي الخصائص المعرفية والقدرات الاستيعابية لكل مرحلة",
      group1Badge: "الأعمار من ٨ إلى ١٢ عاماً",
      group1Title: "المستوى التأسيسي: التفكير الخوارزمي والذكاء المرئي",
      group1Desc: "استيعاب مبادئ التعلم الآلي عبر البرمجة المرئية والألعاب التفاعلية دون حواجز الشيفرات النصية المعقدة.",
      group1F1: "فهم تدفق البيانات والمدخلات والمخرجات الخوارزمية",
      group1F2: "تدريب نماذج الرؤية الحاسوبية والصوت عبر Scratch",
      group1F3: "بناء ألعاب تفاعلية وسرد قصصي رقمي ذكي",
      group2Badge: "الأعمار من ١٣ إلى ١٨ عاماً",
      group2Title: "المستوى المتقدم: بايثون، صياغة الأوامر والبوتات الذكية",
      group2Desc: "برمجة حقيقية بلغة بايثون، معالجة الصور، واستخدام مكتبات الذكاء الاصطناعي لبناء مساعدين شخصيين.",
      group2F1: "كتابة شيفرات بايثون وتطوير الحلول البرمجية",
      group2F2: "بناء بوتات محادثة ونماذج معالجة اللغة الطبيعية",
      group2F3: "أخلاقيات التكنولوجيا والأمان الرقمي وإعداد المشاريع",
      coursesSectionTitle: "الدورات المتاحة لأكاديمية اليافعين",
    },
  };

  const t = content[locale] || content.en;

  return (
    <div className="space-y-16 py-12">
      
      {/* Hero Header */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel bg-white p-8 sm:p-14 rounded-3xl border border-cyan-300 relative overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-800 text-xs font-semibold">
                  <GraduationCap className="w-4 h-4" />
                  <span>{t.badge}</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
                  {t.title} <span className="text-gradient-cyan">{t.titleHighlight}</span>
                </h1>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {t.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#kids-courses"
                    className="px-6 py-3.5 bg-cyan-600 hover:bg-cyan-700 text-white font-extrabold rounded-xl shadow-md text-sm transition-all"
                  >
                    {t.viewCoursesBtn}
                  </a>
                  <a
                    href={locale === "fa" ? "tel:02188252497" : "tel:+61451410352"}
                    className="px-6 py-3.5 bg-slate-100 border border-slate-300 text-cyan-800 text-sm font-bold rounded-xl flex items-center gap-2 hover:bg-slate-200 transition-all"
                  >
                    <Phone className="w-4 h-4 text-cyan-600" />
                    <span dir="ltr">{t.parentsPhoneBtn}</span>
                  </a>
                </div>
              </div>

              <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-cyan-300 shadow-md">
                <Image
                  src="/images/courses/kids-ai.jpg"
                  alt="Kids AI Education"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 right-4 left-4 p-4 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200 text-xs text-slate-800 shadow-xs">
                  <div className="font-bold text-cyan-800">{t.calloutTitle}</div>
                  <div className="text-slate-500 text-[11px] mt-0.5">{t.calloutSubtitle}</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Age Groups Division */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {t.ageGroupsTitle}
          </h2>
          <p className="text-xs text-slate-500 mt-2">
            {t.ageGroupsSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* 8-12 Years */}
          <div className="glass-panel bg-white p-8 rounded-3xl border border-cyan-300 relative shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 bg-cyan-100 text-cyan-800 font-bold text-xs rounded-full border border-cyan-300">
                {t.group1Badge}
              </span>
              <Gamepad2 className="w-8 h-8 text-cyan-600" />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3">{t.group1Title}</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              {t.group1Desc}
            </p>

            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                <span>{t.group1F1}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                <span>{t.group1F2}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                <span>{t.group1F3}</span>
              </li>
            </ul>
          </div>

          {/* 13-18 Years */}
          <div className="glass-panel bg-white p-8 rounded-3xl border border-blue-300 relative shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 font-bold text-xs rounded-full border border-blue-300">
                {t.group2Badge}
              </span>
              <Code className="w-8 h-8 text-blue-600" />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3">{t.group2Title}</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              {t.group2Desc}
            </p>

            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>{t.group2F1}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>{t.group2F2}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>{t.group2F3}</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* Courses Catalog Filtered */}
      <section id="kids-courses" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 border-r-4 border-cyan-600 pr-3">
          {t.coursesSectionTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kidsCourses.map((course) => (
            <CourseCard key={course.id} course={course} locale={locale} />
          ))}
        </div>
      </section>

      <ContactTeaser locale={locale} />

    </div>
  );
}
