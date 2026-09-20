import Image from "next/image";
import { Building2, Phone, TrendingUp, Cpu, ShieldCheck } from "lucide-react";
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
  const alternates = getAlternateUrls("/services/corporate");

  const titles: Record<Locale, string> = {
    en: "Corporate AI Upskilling & Executive Masterclasses | DigiNoron",
    fa: "خدمات آموزش هوش مصنوعی سازمانی و مدیران | دیجی نورون",
    ar: "التدريب المؤسسي وبرامج الإدارات العليا في الذكاء الاصطناعي | ديجي نورون",
  };

  const descriptions: Record<Locale, string> = {
    en: "Custom corporate AI workshops, executive strategy masterclasses, prompt engineering training, and enterprise data privacy guidelines.",
    fa: "دوره‌ها و کارگاه‌های تخصصی هوش مصنوعی ویژه شرکت‌ها و سازمان‌ها، آموزش پرامپت‌نویسی پرسنل و مسترکلاس مدیران ارشد دیجی نورون.",
    ar: "برامج تدريبية تنفيذية وورش عمل متقدمة في الذكاء الاصطناعي للشركات والمديرين التنفيذيين وصياغة الأوامر المؤسسية.",
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

export default async function CorporateServicePage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const corporateCourses = COURSES.filter((c) => c.category === "corporate");

  const content = {
    en: {
      badge: "DigiNoron Corporate Training Department",
      title: "Comprehensive Corporate & Executive",
      titleHighlight: "AI Training Solutions",
      description: "Accelerate organizational throughput, automate administrative routines, and master state-of-the-art prompt engineering with customized on-site or virtual enterprise masterclasses.",
      requestWorkshopBtn: "Request Customized Enterprise Workshop",
      inquiryPhoneBtn: "Enterprise Line: +61 451 410 352",
      calloutTitle: "Digital Transformation & Process Automation",
      calloutSubtitle: "Workshops completely customized around your proprietary data and workflow systems",
      pillarsTitle: "Core Dimensions of Corporate Training",
      pillarsSubtitle: "Tailored programs designed for distinct enterprise tiers",
      p1Title: "1. Executive Leadership Masterclass",
      p1Desc: "AI strategic roadmapping, enterprise readiness assessment, leading AI-first teams, and benchmarking investment ROI.",
      p2Title: "2. Staff Workflow Automation Labs",
      p2Desc: "Multiplying operational speed across finance, HR, marketing, and legal via advanced prompting, summarization, and custom GPTs.",
      p3Title: "3. Enterprise Privacy & Security Protocols",
      p3Desc: "Formulating strict compliance policies, preventing data leakage, and secure integration with enterprise LLMs.",
      coursesSectionTitle: "Featured Corporate Training Curricula",
    },
    fa: {
      badge: "دپارتمان آموزش‌های سازمانی دیجی نورون",
      title: "خدمات جامع",
      titleHighlight: "آموزش هوش مصنوعی سازمانی و ارگان‌ها",
      description: "افزایش بهره‌وری سازمان، اتوماسیون فرایندهای تکراری اداری و آموزش پرامپت‌نویسی پیشرفته به پرسنل و مدیران ارشد با کارگاه‌های اختصاصی حضوری یا آنلاین.",
      requestWorkshopBtn: "درخواست کارگاه اختصاصی برای شرکت شما",
      inquiryPhoneBtn: "استعلام سازمانی: ۰۲۱۸۸۲۵۲۴۹۷",
      calloutTitle: "تحول دیجیتال و اتوماسیون فرایندها",
      calloutSubtitle: "سفارشی‌سازی کامل کارگاه بر اساس داده‌ها و سیستم‌های اداری شما",
      pillarsTitle: "محورهای خدمات آموزشی سازمانی",
      pillarsSubtitle: "راهکارهای متناسب برای سطوح مختلف شغلی در شرکت شما",
      p1Title: "۱. مسترکلاس مدیران ارشد",
      p1Desc: "تدوین استراتژی هوش مصنوعی، سنجش آمادگی سازمانی، نحوه رهبری تیم‌های AI-first و ارزیابی نرخ بازگشت سرمایه (ROI).",
      p2Title: "۲. کارگاه‌های اتوماسیون پرسنل",
      p2Desc: "افزایش سرعت کارهای اداری، مالی، منابع انسانی و مارکتینگ با پرامپت‌نویسی پیشرفته، خلاصه‌سازی گزارش‌ها و GPTها.",
      p3Title: "۳. امنیت داده و حریم خصوصی شرکتی",
      p3Desc: "تدوین پروتکل‌های حاکمیت داده، جلوگیری از نشت اسناد محرمانه و استانداردهای استفاده ایمن از هوش مصنوعی در شرکت.",
      coursesSectionTitle: "دوره‌های تخصصی مرتبط با آموزش سازمانی",
    },
    ar: {
      badge: "دائرة التدريب المؤسسي - ديجي نورون",
      title: "حلول التدريب الشاملة و",
      titleHighlight: "التأهيل المؤسسي في الذكاء الاصطناعي",
      description: "رفع إنتاجية الفرق التشغيلية، أتمتة الإجراءات الإدارية، وإتقان هندسة صياغة الأوامر لكبار المديرين والخبراء عبر ورش حضورية وافتراضية مخصصة.",
      requestWorkshopBtn: "طلب ورشة عمل مخصصة لمؤسستكم",
      inquiryPhoneBtn: "الاستفسارات المؤسسية: +61 451 410 352",
      calloutTitle: "التحول الرقمي وأتمتة العمليات",
      calloutSubtitle: "تخصيص كامل للحقائب التدريبية بما يوافق بيانات وأنظمة مؤسستكم",
      pillarsTitle: "مسارات التأهيل المؤسسي",
      pillarsSubtitle: "برامج مصممة لمختلف المستويات الوظيفية والإدارية",
      p1Title: "١. برامج الإدارة العليا والتنفيذية",
      p1Desc: "بناء استراتيجية الذكاء الاصطناعي، قياس الجاهزية الرقمية، قيادة فرق العمل، وحساب العائد الاستثماري (ROI).",
      p2Title: "٢. ورش عمل أتمتة العمليات للموظفين",
      p2Desc: "مضاعفة سرعة إنجاز المهام المالية، الموارد البشرية، والتقارير عبر صياغة الأوامر المتقدمة وبناء المساعدات الذكية.",
      p3Title: "٣. أمن البيانات وسياسات الخصوصية",
      p3Desc: "وضع سياسات حوكمة البيانات الصارمة، منع تسريب الوثائق السرية، وضوابط التعامل مع النماذج اللغوية.",
      coursesSectionTitle: "الدورات والبرامج المتاحة للشركات",
    },
  };

  const t = content[locale] || content.en;

  return (
    <div className="space-y-16 py-12">
      
      {/* Hero Header */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel bg-white p-8 sm:p-14 rounded-3xl border border-purple-300 relative overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-100 border border-purple-300 text-purple-800 text-xs font-semibold">
                  <Building2 className="w-4 h-4" />
                  <span>{t.badge}</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
                  {t.title} <span className="text-purple-700">{t.titleHighlight}</span>
                </h1>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {t.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#consultation"
                    className="px-6 py-3.5 bg-purple-700 hover:bg-purple-800 text-white font-extrabold rounded-xl shadow-md text-sm transition-all"
                  >
                    {t.requestWorkshopBtn}
                  </a>
                  <a
                    href={locale === "fa" ? "tel:02188252497" : "tel:+61451410352"}
                    className="px-6 py-3.5 bg-slate-100 border border-slate-300 text-cyan-800 text-sm font-bold rounded-xl flex items-center gap-2 hover:bg-slate-200 transition-all"
                  >
                    <Phone className="w-4 h-4 text-cyan-600" />
                    <span dir="ltr">{t.inquiryPhoneBtn}</span>
                  </a>
                </div>
              </div>

              <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-purple-300 shadow-md">
                <Image
                  src="/images/courses/executive-ai.jpg"
                  alt="Corporate AI Training"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 right-4 left-4 p-4 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200 text-xs text-slate-800 shadow-xs">
                  <div className="font-bold text-purple-800">{t.calloutTitle}</div>
                  <div className="text-slate-500 text-[11px] mt-0.5">{t.calloutSubtitle}</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {t.pillarsTitle}
          </h2>
          <p className="text-xs text-slate-500 mt-2">
            {t.pillarsSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="glass-panel bg-white p-6 rounded-2xl border border-purple-200 space-y-4 shadow-xs">
            <div className="p-3 rounded-xl bg-purple-100 text-purple-700 w-fit">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">{t.p1Title}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {t.p1Desc}
            </p>
          </div>

          <div className="glass-panel bg-white p-6 rounded-2xl border border-cyan-200 space-y-4 shadow-xs">
            <div className="p-3 rounded-xl bg-cyan-100 text-cyan-700 w-fit">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">{t.p2Title}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {t.p2Desc}
            </p>
          </div>

          <div className="glass-panel bg-white p-6 rounded-2xl border border-emerald-200 space-y-4 shadow-xs">
            <div className="p-3 rounded-xl bg-emerald-100 text-emerald-700 w-fit">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">{t.p3Title}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {t.p3Desc}
            </p>
          </div>

        </div>
      </section>

      {/* Courses Catalog Filtered */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 border-r-4 border-purple-600 pr-3">
          {t.coursesSectionTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {corporateCourses.map((course) => (
            <CourseCard key={course.id} course={course} locale={locale} />
          ))}
        </div>
      </section>

      <ContactTeaser locale={locale} />

    </div>
  );
}
