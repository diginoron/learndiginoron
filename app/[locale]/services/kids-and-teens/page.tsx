import Image from "next/image";
import {
  GraduationCap,
  CheckCircle2,
  Phone,
  Gamepad2,
  Code,
  Sparkles,
  Rocket,
  Target,
  Users,
  Compass,
  Award,
  Cpu,
} from "lucide-react";
import { COURSES } from "@/data/courses";
import CourseCard from "@/components/CourseCard";
import ContactTeaser from "@/components/ContactTeaser";
import { Locale, isValidLocale, getAlternateUrls, getDirection } from "@/lib/i18n";
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

const ADVANTAGE_CARD_STYLES = [
  {
    icon: Rocket,
    border: "border-cyan-200 hover:border-cyan-400",
    glow: "bg-cyan-500/10 group-hover:bg-cyan-500/20",
    iconBox: "bg-cyan-100 border border-cyan-300 text-cyan-700",
    tag: "bg-cyan-50 text-cyan-800 border-cyan-200",
    bar: "bg-gradient-to-r from-cyan-500 to-blue-500",
  },
  {
    icon: Target,
    border: "border-blue-200 hover:border-blue-400",
    glow: "bg-blue-500/10 group-hover:bg-blue-500/20",
    iconBox: "bg-blue-100 border border-blue-300 text-blue-700",
    tag: "bg-blue-50 text-blue-800 border-blue-200",
    bar: "bg-gradient-to-r from-blue-500 to-indigo-500",
  },
  {
    icon: Users,
    border: "border-emerald-200 hover:border-emerald-400",
    glow: "bg-emerald-500/10 group-hover:bg-emerald-500/20",
    iconBox: "bg-emerald-100 border border-emerald-300 text-emerald-700",
    tag: "bg-emerald-50 text-emerald-800 border-emerald-200",
    bar: "bg-gradient-to-r from-emerald-500 to-teal-500",
  },
  {
    icon: Compass,
    border: "border-purple-200 hover:border-purple-400",
    glow: "bg-purple-500/10 group-hover:bg-purple-500/20",
    iconBox: "bg-purple-100 border border-purple-300 text-purple-700",
    tag: "bg-purple-50 text-purple-800 border-purple-200",
    bar: "bg-gradient-to-r from-purple-500 to-fuchsia-500",
  },
  {
    icon: Award,
    border: "border-amber-200 hover:border-amber-400",
    glow: "bg-amber-500/10 group-hover:bg-amber-500/20",
    iconBox: "bg-amber-100 border border-amber-300 text-amber-700",
    tag: "bg-amber-50 text-amber-800 border-amber-200",
    bar: "bg-gradient-to-r from-amber-500 to-orange-500",
  },
  {
    icon: Cpu,
    border: "border-indigo-200 hover:border-indigo-400",
    glow: "bg-indigo-500/10 group-hover:bg-indigo-500/20",
    iconBox: "bg-indigo-100 border border-indigo-300 text-indigo-700",
    tag: "bg-indigo-50 text-indigo-800 border-indigo-200",
    bar: "bg-gradient-to-r from-indigo-500 to-cyan-500",
  },
];

export default async function KidsAndTeensServicePage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const isLtr = getDirection(locale) === "ltr";
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
      advantagesBadge: "Distinctive Course Features",
      advantagesTitle: "Advantages of",
      advantagesTitleHighlight: "Our Courses",
      advantagesSubtitle: "Why forward-thinking parents choose DigiNoron's AI & Entrepreneurship programs to prepare their children for the future",
      advantages: [
        {
          title: "Focus on AI Entrepreneurship",
          tag: "AI Venture",
          desc: "Our instructors possess dual expertise in business/entrepreneurship management and technical AI. Focusing on entrepreneurial principles, we teach artificial intelligence as a powerful tool to build and scale ventures.",
        },
        {
          title: "Focus on Real-World Projects",
          tag: "Project-Driven",
          desc: "Throughout the course, your children and teens focus on a core idea and flagship project—designing, building, and launching a functional, real-world product that solves a specific problem by the end of the program.",
        },
        {
          title: "Continuous Course Support",
          tag: "Ongoing Support",
          desc: "Our commitment doesn't end when the classes finish. Through dedicated community groups on social networks, your children and teens receive ongoing mentorship and continuous updates on the latest AI breakthroughs.",
        },
        {
          title: "Focus on Real Future Needs",
          tag: "Future Readiness",
          desc: "By continuously monitoring market shifts and conducting strategic foresight, we design our courses to prepare your child for tomorrow's economy. We are not looking to train just an engineer—our goal is to cultivate an AI entrepreneur.",
        },
        {
          title: "Proven Track Record of Successful Courses",
          tag: "Years of Experience",
          desc: "DigiNoron Group has operated for years in business school education, seamlessly integrating advanced artificial intelligence into our foundational business curriculum. Our core advantage is years of proven educational experience.",
        },
        {
          title: "Using the Most Up-to-Date Tools",
          tag: "Latest AI Tools",
          desc: "In our programs, we utilize the latest AI tools and teaching methods aligned with successful global benchmarks and our own hands-on experience. Your child and teen will learn with the newest technologies available.",
        },
      ],
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
      advantagesBadge: "ویژگی‌های متمایز آموزشی",
      advantagesTitle: "مزیت‌های",
      advantagesTitleHighlight: "دوره‌های ما",
      advantagesSubtitle: "چرا والدین آینده‌نگر، دوره‌های کارآفرینی و هوش مصنوعی دیجی نورون را برای آماده‌سازی فرزندان خود انتخاب می‌کنند؟",
      advantages: [
        {
          title: "تمرکز بر کارآفرینی هوش مصنوعی",
          tag: "کارآفرینی AI",
          desc: "مربیان ما دارای دانش دوگانه مدیریتی/کارآفرینی و فنی هوش مصنوعی هستند و ما با تمرکز بر مباحث کارآفرینی، هوش مصنوعی را به عنوان یک ابزار در این راستا آموزش می‌دهیم.",
        },
        {
          title: "تمرکز بر پروژه‌های واقعی",
          tag: "پروژه‌محور",
          desc: "در این دوره کودکان و نوجوانان شما بر یک ایده و پروژه محوری تمرکز می‌کنند و در پایان دوره یک محصول کاربردی و واقعی بر اساس وجود یک مسئله مشخص تولید و اجرا می‌کنند.",
        },
        {
          title: "پشتیبانی دوره",
          tag: "پشتیبانی مستمر",
          desc: "پس از پایان دوره کار ما تمام نمی‌شود. با اطلاع‌رسانی در گروه‌های تشکیل‌شده در شبکه‌های اجتماعی، کودکان و نوجوانان شما بر اساس آخرین به‌روزرسانی‌های هوش مصنوعی از پشتیبانی ما بهره‌مند می‌شوند.",
        },
        {
          title: "تمرکز بر نیازهای واقعی",
          tag: "آینده‌پژوهی",
          desc: "ما با مرور و رصد دائم بازار و آینده‌پژوهی، دوره‌ها را به گونه‌ای طراحی کرده‌ایم که کودک شما را برای آینده آماده کنیم. ما به دنبال پرورش یک مهندس نیستیم، هدف ما پرورش یک کارآفرین هوش مصنوعی است.",
        },
        {
          title: "برگزاری دوره‌های موفق",
          tag: "تجربه چندین ساله",
          desc: "گروه دیجی نورون سال‌هاست که در زمینه آموزش مدرسه کسب‌وکار فعالیت می‌کند و با توسعه هوش مصنوعی این مفاهیم را نیز به پایه آموزشی خود اضافه کرده است؛ مزیت ما تجربه چندین ساله است.",
        },
        {
          title: "استفاده از به‌روزترین ابزارها",
          tag: "ابزارهای جهانی",
          desc: "ما در دوره‌های خود از به‌روزترین ابزارها و روش آموزشی مطابق با نمونه‌های موفق جهانی و تجربه‌های خود استفاده کرده‌ایم. کودک و نوجوان شما با جدیدترین ابزارها آموزش خواهد دید.",
        },
      ],
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
      advantagesBadge: "مميزات تعليمية فريدة",
      advantagesTitle: "مميزات",
      advantagesTitleHighlight: "دوراتنا التدريبية",
      advantagesSubtitle: "لماذا يختار أولياء الأمور الطموحون دورات ريادة الأعمال والذكاء الاصطناعي في ديجي نورون لإعداد أبنائهم للمستقبل؟",
      advantages: [
        {
          title: "التركيز على ريادة الأعمال بالذكاء الاصطناعي",
          tag: "ريادة الأعمال",
          desc: "يمتلك مدربونا خبرة مزدوجة تجمع بين الإدارة/ريادة الأعمال والخبرة التقنية في الذكاء الاصطناعي؛ حيث نركز على مفاهيم ريادة الأعمال ونُعلّم الذكاء الاصطناعي كأداة عملية لتحقيق هذا الهدف.",
        },
        {
          title: "التركيز على المشاريع الواقعية",
          tag: "مشاريع تطبيقية",
          desc: "يركز الأطفال واليافعون خلال الدورة على فكرة ومشروع محوري، وفي نهاية البرنامج يقومون بإنتاج وتنفيذ منتج تطبيقي وحقيقي قائم على حل مشكلة محددة وواقعية.",
        },
        {
          title: "دعم مستمر بعد الدورة",
          tag: "دعم متواصل",
          desc: "لا ينتهي عملنا بانتهاء جلسات الدورة؛ بل يستفيد أبناؤكم من دعمنا المستمر عبر المجموعات المخصصة في شبكات التواصل الاجتماعي لمواكبة أحدث التطورات والتحديثات في عالم الذكاء الاصطناعي.",
        },
        {
          title: "التركيز على الاحتياجات الحقيقية",
          tag: "استشراف المستقبل",
          desc: "من خلال الرصد المستمر للسوق واستشراف المستقبل، صممنا دوراتنا لتأهيل طفلكم للغد؛ فنحن لا نسعى لتخريج مجرد مهندس تقني، بل هدفنا هو بناء رائد أعمال في مجال الذكاء الاصطناعي.",
        },
        {
          title: "إقامة دورات تدريبية ناجحة",
          tag: "خبرة لسنوات",
          desc: "تعمل مجموعة ديجي نورون منذ سنوات طويلة في مجال تعليم مدرسة الأعمال (Business School)، ومع تطور الذكاء الاصطناعي أضافت هذه المفاهيم إلى ركائزها التعليمية؛ فميزتنا التنافسية هي خبرتنا الممتدة لسنوات.",
        },
        {
          title: "استخدام أحدث الأدوات العالمية",
          tag: "أحدث الأدوات",
          desc: "نعتمد في دوراتنا على أحدث الأدوات والأساليب التعليمية المتوافقة مع النماذج العالمية الناجحة وخبراتنا العملية، ليتدرب طفلكم أو ابنكم اليافع باستخدام أحدث التقنيات المتاحة.",
        },
      ],
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

      {/* Course Advantages Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-800 text-xs font-bold">
            <Sparkles className="w-4 h-4 text-cyan-600" />
            <span>{t.advantagesBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
            {t.advantagesTitle}{" "}
            <span className="text-gradient-cyan">{t.advantagesTitleHighlight}</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {t.advantagesSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.advantages.map((adv, idx) => {
            const style = ADVANTAGE_CARD_STYLES[idx % ADVANTAGE_CARD_STYLES.length];
            const IconComp = style.icon;

            return (
              <div
                key={idx}
                className={`glass-panel bg-white p-7 rounded-3xl border ${style.border} relative overflow-hidden group hover:-translate-y-1 hover:shadow-xl transition-all duration-300 shadow-sm flex flex-col justify-between`}
              >
                <div
                  className={`absolute -top-10 -left-10 w-36 h-36 rounded-full blur-2xl ${style.glow} transition-all pointer-events-none`}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className={`p-3.5 rounded-2xl ${style.iconBox} shadow-2xs`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-[11px] font-bold border ${style.tag}`}
                    >
                      {adv.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-900 mb-2.5">
                    {adv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {adv.desc}
                  </p>
                </div>

                <div
                  className={`relative z-10 h-1 w-12 group-hover:w-full rounded-full transition-all duration-500 mt-6 ${style.bar}`}
                />
              </div>
            );
          })}
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
        <h2
          className={`text-2xl font-bold text-slate-900 mb-8 border-cyan-600 ${
            isLtr ? "border-l-4 pl-3" : "border-r-4 pr-3"
          }`}
        >
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
