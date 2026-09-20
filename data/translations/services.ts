import { Locale } from "@/lib/i18n";

export interface ServicesOverviewTranslations {
  metaTitle: string;
  metaDesc: string;
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  pillar1Badge: string;
  pillar1Title: string;
  pillar1Btn: string;
  pillar1Desc: string;
  pillar1Cards: Array<{
    title: string;
    tag?: string;
    desc: string;
  }>;
  pillar2Badge: string;
  pillar2Title: string;
  pillar2Desc: string;
  corporateSection: {
    title: string;
    desc: string;
    linkText: string;
    heldCoursesText: string;
    features: string[];
  };
  kidsSection: {
    title: string;
    desc: string;
    linkText: string;
    features: string[];
  };
}

export const SERVICES_TRANSLATIONS: Record<Locale, ServicesOverviewTranslations> = {
  en: {
    metaTitle: "Services | DigiNoron Enterprise AI Solutions & Academy",
    metaDesc: "Comprehensive enterprise AI services including strategic AI roadmaps (APQC), multi-agent architectures, business process automation (BPA), and specialized academy programs.",
    badge: "DigiNoron Comprehensive AI Services",
    title: "The Two Core Pillars of",
    titleHighlight: "DigiNoron Solutions",
    subtitle: "DigiNoron operates across two strategic axes: 1. Enterprise AI Solutions (Roadmaps, Multi-Agent Systems, BPA, On-Premise Tech Transfer) and 2. Educational Tracks (Executive Corporate Training & Youth Innovation).",
    pillar1Badge: "Pillar 1: Enterprise Services",
    pillar1Title: "Enterprise AI Transformation Solutions",
    pillar1Btn: "Explore Enterprise Solutions",
    pillar1Desc: "Comprehensive B2B solutions engineered to evolve organizations into intelligent, data-driven entities. Encompassing APQC-aligned gap analysis, autonomous decision agents, legacy system augmentation, on-premise deployments, and 100% source code transfer.",
    pillar1Cards: [
      {
        title: "Strategic AI Transformation Roadmap",
        tag: "APQC",
        desc: "Organizational diagnostics, process gap analysis based on APQC standards, and establishing an ROI-prioritized atlas for enterprise AI initiatives.",
      },
      {
        title: "Custom Multi-Agent Architectures",
        tag: "Agents",
        desc: "Autonomous agentic networks, enterprise knowledge retrieval assistants, and decision-support copilots connected securely to confidential data.",
      },
      {
        title: "Business Process Automation (BPA)",
        tag: "BPA",
        desc: "End-to-end automation of financial approvals, procurement audits, contract compliance, HR ticketing, and supply chain telemetry.",
      },
      {
        title: "Legacy Infrastructure Modernization",
        tag: "Legacy AI",
        desc: "Integrating intelligent LLM adapters and microservices with legacy ERPs, CRM systems, and relational databases without disrupting active workflows.",
      },
      {
        title: "Secure On-Premise Deployment",
        tag: "Security",
        desc: "Air-gapped and local server installations ensuring confidential operational data never leaves enterprise firewalls.",
      },
      {
        title: "Full Technology & IP Transfer",
        tag: "Tech Transfer",
        desc: "Delivering complete documentation, source repositories, fine-tuning scripts, and technical training for in-house engineering squads.",
      },
    ],
    pillar2Badge: "Pillar 2: Applied Training",
    pillar2Title: "DigiNoron Applied AI Academy",
    pillar2Desc: "Practical, project-centric training programs split into two dedicated tracks: Corporate Upskilling for industrial teams and the Youth Innovation Lab for aspiring young minds.",
    corporateSection: {
      title: "Corporate & In-House Training",
      desc: "Tailored programs designed to upskill leadership teams and technical staff, elevating workforce productivity with proven generative AI workflows.",
      linkText: "View Corporate Programs",
      heldCoursesText: "View Delivered Corporate Workshops & Case Studies",
      features: [
        "Executive AI Strategy Masterclasses",
        "Staff Prompt Engineering & Workflow Labs",
        "Enterprise Data Privacy & AI Governance Guidelines",
        "Delivered for national petrochem, library, and telecom sectors",
      ],
    },
    kidsSection: {
      title: "Kids & Teens AI Academy",
      desc: "An innovative, game-based learning curriculum cultivating algorithmic reasoning, Python programming, and ethical AI literacy for ages 8 to 17.",
      linkText: "View Youth Programs",
      features: [
        "Project-driven games & interactive robotics",
        "Creative media generation & smart storytelling",
        "Python fundamentals and intelligent chatbots",
        "Fostering algorithmic problem-solving for the future",
      ],
    },
  },
  fa: {
    metaTitle: "خدمات دیجی نورون | هوشمندسازی سازمانی و آموزش هوش مصنوعی",
    metaDesc: "خدمات جامع دیجی نورون شامل طراحی سند راهبردی هوشمندسازی، تحلیل فرآیندها با APQC، طراحی ایجنت‌ها، اتوماسیون فرآیندها، پیاده‌سازی و خدمات آموزشی.",
    badge: "مرکز جامع خدمات هوش مصنوعی دیجی نورون",
    title: "دو ستون اصلی خدمات",
    titleHighlight: "دیجی نورون",
    subtitle: "دیجی نورون در دو محور اصلی فعالیت می‌کند: ۱. خدمات هوشمندسازی سازمانی (طراحی سند راهبردی، ایجنت‌ها، اتوماسیون، پیاده‌سازی و انتقال تکنولوژی) و ۲. خدمات آموزشی (ویژه سازمان‌ها و کودکان/نوجوانان).",
    pillar1Badge: "ستون اصلی شماره ۱ (خدمات سازمانی)",
    pillar1Title: "خدمات هوشمندسازی سازمانی دیجی نورون",
    pillar1Btn: "مشاهده صفحه کامل و مستندات هوشمندسازی",
    pillar1Desc: "ارائه راهکارهای جامع B2B برای تبدیل سازمان‌ها به ساختارهای هوشمند و داده‌محور شامل طراحی سند راهبردی مبتنی بر APQC، طراحی و استقرار ایجنت‌های تصمیم‌گیر، اتوماسیون فرآیندهای عملیاتی، ارتقای سیستم‌های قدیمی، پیاده‌سازی On-Premise و انتقال کامل سورس‌کد و دانش فنی.",
    pillar1Cards: [
      {
        title: "طراحی سند راهبردی هوشمندسازی",
        tag: "APQC",
        desc: "عارضه‌یابی ساختار، تحلیل شکاف فرآیندها مبتنی بر APQC و ترسیم اطلس راهبردی پروژه‌های بهبود هوش مصنوعی با اولویت ROI.",
      },
      {
        title: "طراحی هوش مصنوعی و ایجنت‌های سازمانی",
        tag: "ایجنت‌ها",
        desc: "توسعه ایجنت‌های خودمختار چندعامله، دستیارهای اداری متصل به اسناد محرمانه و سیستم‌های تصمیم‌یار مدیران.",
      },
      {
        title: "اتوماسیون هوشمند فرآیندها (BPA)",
        tag: "BPA",
        desc: "خودکارسازی فرآیندهای خرید، مالی، تدارکات، قراردادها، پشتیبانی و منابع انسانی با ترکیب RPA و مدل‌های زبانی.",
      },
      {
        title: "هوشمندسازی سیستم‌های قدیمی",
        tag: "Legacy AI",
        desc: "اتصال لایه هوش مصنوعی به اتوماسیون‌های اداری، ERP و CRMهای قدیمی سازمان بدون نیاز به بازنویسی پرهزینه زیرساخت.",
      },
      {
        title: "پیاده‌سازی و استقرار On-Premise",
        tag: "امنیت",
        desc: "استقرار مدل‌ها روی سرورهای داخلی سازمان با امنیت صددرصدی و بدون ارسال کوچک‌ترین داده به خارج از شبکه سازمان.",
      },
      {
        title: "انتقال تکنولوژی و سورس‌کد",
        tag: "Tech Transfer",
        desc: "تحویل کامل سورس‌کدها، مستندات معماری و آموزش تیم فنی کارفرما برای توسعه مستقل سیستم بدون وابستگی بلندمدت.",
      },
    ],
    pillar2Badge: "ستون اصلی شماره ۲ (خدمات آموزشی)",
    pillar2Title: "خدمات آموزشی و آکادمی تخصصی دیجی نورون",
    pillar2Desc: "آموزش کاربردی و پروژه‌محور هوش مصنوعی در دو شاخه مجزا: توانمندسازی کادر سازمانی و پرورش نسل آینده در آکادمی نوجوانان.",
    corporateSection: {
      title: "آموزش هوش مصنوعی سازمانی",
      desc: "دوره‌های اختصاصی درون‌سازمانی جهت ارتقای مهارت پرسنل و آشنایی مدیران با کاربردهای واقعی و امن هوش مصنوعی در کسب‌وکار.",
      linkText: "مشاهده دوره‌های سازمانی",
      heldCoursesText: "مشاهده کارنامه‌ و دوره‌های برگزار شده شرکتی",
      features: [
        "مسترکلاس‌های استراتژی هوش مصنوعی مدیران",
        "کارگاه‌های پرامپت‌نویسی تخصصی برای پرسنل",
        "تدوین شیوه‌نامه‌های امنیت داده و حریم خصوصی در سازمان",
        "سابقه برگزاری در پتروشیمی تبریز، کتابخانه ملی و شهرداری تهران",
      ],
    },
    kidsSection: {
      title: "آموزش هوش مصنوعی کودکان و نوجوانان",
      desc: "برنامه‌ریزی آموزشی جذاب، بازی‌محور و خلاقانه برای آشنایی فرزندان با دنیای آینده، تفکر الگوریتمی و سواد هوش مصنوعی.",
      linkText: "مشاهده آموزش نوجوانان",
      features: [
        "آموزش بازی‌محور و ساخت پروژه‌های تعاملی",
        "تولید تصویر، ویدیو و داستان‌سرایی با هوش مصنوعی",
        "مبانی برنامه‌نویسی پایتون و منطق الگوریتم",
        "تقویت خلاقیت، حل مسئله و درک ایمن از فناوری‌های نوظهور",
      ],
    },
  },
  ar: {
    metaTitle: "الخدمات | حلول الذكاء الاصطناعي للمؤسسات والأكاديمية - ديجي نورون",
    metaDesc: "خدمات شاملة للتحول الذكي للمؤسسات تتضمن بناء خريطة طريق استراتيجية (APQC)، شبكات الوكلاء المستقلين (Multi-Agents)، أتمتة BPA، وبرامج أكاديمية متخصصة.",
    badge: "منظومة خدمات الذكاء الاصطناعي الشاملة في ديجي نورون",
    title: "الركيزتان الأساسيتان لخدمات",
    titleHighlight: "ديجي نورون",
    subtitle: "يعمل مركز ديجي نورون وفق مسارين استراتيجيين: ١. حلول التحول المؤسسي والأتمتة الذكية (الوكلاء، BPA، النشر المحلي ونقل التكنولوجيا) و٢. المسارات التعليمية والتدريب التطبيقي (للمؤسسات واليافعين).",
    pillar1Badge: "الركيزة الأولى: الحلول المؤسسية",
    pillar1Title: "خدمات التحول الذكي للمؤسسات",
    pillar1Btn: "استعراض الحلول المؤسسية والوثائق",
    pillar1Desc: "حلول B2B متقدمة لتحويل المؤسسات إلى كيانات ذكية قائمة على البيانات، تشمل تشخيص الفجوات بمعايير APQC، بناء وكلاء اتخاذ القرار، أتمتة العمليات، دمج الأنظمة القديمة، النشر الآمن On-Premise، ونقل الملكية الفكرية بالكامل.",
    pillar1Cards: [
      {
        title: "إعداد خريطة طريق التحول الذكي",
        tag: "APQC",
        desc: "تشخيص هيكلي، تحليل فجوات العمليات وفق إطار APQC، وتحديد أطلس استراتيجي للمشاريع ذات العائد الاستثماري المرتفع (ROI).",
      },
      {
        title: "وكلاء الذكاء الاصطناعي المستقلون",
        tag: "Agents",
        desc: "تطوير منظومات وكلاء متعددة، مساعدين إداريين متصلين بالوثائق السرية، وأنظمة دعم اتخاذ القرار للمديرين التنفيذيين.",
      },
      {
        title: "أتمتة العمليات المؤسسية (BPA)",
        tag: "BPA",
        desc: "أتمتة دورات الشراء، الاعتمادات المالية، تدقيق العقود، الدعم الفني، وشؤون الموظفين بدمج RPA ونماذج الذكاء الاصطناعي.",
      },
      {
        title: "تحديث الأنظمة القديمة (Legacy AI)",
        tag: "Legacy AI",
        desc: "ربط طبقة الذكاء الاصطناعي بأنظمة ERP وCRM والأتمتة الإدارية القائمة دون الحاجة لإعادة بناء البنية التحتية بتكاليف باهظة.",
      },
      {
        title: "النشر المحلي الآمن (On-Premise)",
        tag: "الأمان",
        desc: "تثبيت النماذج محلياً داخل خوادم المؤسسة مع حماية مطلقة للبيانات دون إرسال أي معلومة خارج الشبكة الداخلية.",
      },
      {
        title: "نقل التكنولوجيا والشيفرة المصدرية",
        tag: "Tech Transfer",
        desc: "تسليم كامل الشيفرات والوثائق المعمارية وتدريب الفرق التقنية لتحقيق استقلالية تامة دون اعتمادية خارجية.",
      },
    ],
    pillar2Badge: "الركيزة الثانية: التدريب التطبيقي",
    pillar2Title: "أكاديمية ديجي نورون المتخصصة",
    pillar2Desc: "تعليم تطبيقي قائم على المشاريع في مسارين: تأهيل الكوادر المؤسسية وتنمية مهارات الجيل القادم من الأطفال واليافعين.",
    corporateSection: {
      title: "التدريب المؤسسي المتخصص",
      desc: "برامج تنفيذية داخلية لرفع كفاءة العاملين وتأهيل الإدارات التنفيذية للتعامل الآمن والمثمر مع أدوات الذكاء الاصطناعي.",
      linkText: "استعراض البرامج المؤسسية",
      heldCoursesText: "استعراض الورش المنجزة وسجل الإنجازات",
      features: [
        "برامج تنفيذية لكبار المديرين في استراتيجيات الذكاء الاصطناعي",
        "ورش عمل صياغة الأوامر (Prompting) لفرق العمل",
        "وضع سياسات أمن البيانات وحوكمة الذكاء الاصطناعي المؤسسي",
        "سجل تدريبي مع قطاعات البتروكيماويات، المكتبات الوطنية والبلديات",
      ],
    },
    kidsSection: {
      title: "أكاديمية الأطفال واليافعين",
      desc: "مناهج ابتكارية محفزة قائمة على الألعاب لتطوير التفكير المنطقي والخوارزمي وسواد الذكاء الاصطناعي للأعمار من ٨ إلى ١٧ عاماً.",
      linkText: "استعراض برامج اليافعين",
      features: [
        "تعلم تفاعلي قائم على بناء ألعاب ذكية وروبوتات",
        "توليد الصور، الفيديو والسرد القصصي بالذكاء الاصطناعي",
        "أساسيات البرمجة بلغة بايثون والمنطق الخوارزمي",
        "تعزيز مهارات حل المشكلات والتفكير الابتكاري للمستقبل",
      ],
    },
  },
};
