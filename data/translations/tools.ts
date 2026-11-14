import { Locale } from "@/lib/i18n";

export interface ToolItem {
  id: string;
  name: string;
  tagline: string;
  category: string;
  badge: string;
  description: string;
  features: string[];
  appUrl: string;
  blogUrl?: string;
  appButtonText: string;
  blogButtonText?: string;
  accentColor: "indigo" | "emerald" | "cyan" | "rose";
  stats?: { label: string; value: string };
}

export interface ToolsPageTranslations {
  metaTitle: string;
  metaDesc: string;
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  featuresTitle: string;
  appLinkAria: string;
  blogLinkAria: string;
  tools: ToolItem[];
  cta: {
    badge: string;
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
}

export const TOOLS_TRANSLATIONS: Record<Locale, ToolsPageTranslations> = {
  fa: {
    metaTitle: "ابزارهای هوش مصنوعی دیجی نورون | اکوسیستم نرم‌افزارهای تخصصی AI",
    metaDesc: "معرفی و دسترسی مستقیم به ابزارهای هوشمند دیجی نورون شامل دستیار پایان‌نامه، سیستم معامله‌گری الگوریتمی، دستیار مقاله‌نویسی اسکالر و سوپراپلیکیشن آنالیز چهره و پوست.",
    badge: "اکوسیستم ابزارهای هوش مصنوعی دیجی نورون",
    title: "ابزارهای هوشمند و تخصصی",
    titleHighlight: "دیجی نورون",
    subtitle: "مجموعه‌ای از سامانه‌ها و سوپراپلیکیشن‌های هوش مصنوعی توسعه‌یافته در دیجی نورون، طراحی‌شده برای حل مسائل واقعی در حوزه‌های پژوهش دانشگاهی، بازارهای مالی و سلامت و زیبایی.",
    featuresTitle: "قابلیت‌های کلیدی و امکانات:",
    appLinkAria: "ورود به نسخه وب‌اپلیکیشن",
    blogLinkAria: "مشاهده مقالات و وبلاگ آموزشی",
    tools: [
      {
        id: "thesis",
        name: "دستیار هوشمند تدوین پایان‌نامه و نگارش رساله",
        tagline: "سامانه تخصصی هوش مصنوعی نگارش پروپوزال، پایان‌نامه و تحلیل آماری",
        category: "تحصیلات تکمیلی و پژوهش‌های دانشگاهی",
        badge: "هوش مصنوعی آکادمیک",
        description: "دستیار جامع پژوهشی مبتنی بر مدل‌های هوش مصنوعی پیشرفته برای همراهی گام‌به‌گام دانشجویان کارشناسی ارشد و دکتری؛ از انتخاب عنوان و تدوین پروپوزال تا نگارش فصول پنج‌گانه، استخراج داده‌ها، اعتبارسنجی متدولوژی و تدوین مراجع استاندارد.",
        features: [
          "تدوین ساختار استاندارد پروپوزال و فصول ۱ تا ۵ پایان‌نامه",
          "مرور نظام‌مند ادبیات پژوهش و استخراج پیشینه از پایگاه‌های معتبر علمی",
          "تحلیل آماری داده‌ها و تفسیر آزمون‌های کیفی و کمی",
          "ویرایش علمی، پارافریز تخصصی و کاهش درصد همانندجویی"
        ],
        appUrl: "https://thesis.diginoron.com/",
        blogUrl: "https://ai.caspianthesis.com/",
        appButtonText: "ورود به اپلیکیشن پایان‌نامه",
        blogButtonText: "وبلاگ و راهنماهای آموزشی",
        accentColor: "indigo",
        stats: { label: "مخاطبان هدف", value: "کارشناسی ارشد و دکتری" }
      },
      {
        id: "trading",
        name: "سیستم هوشمند تحلیل و معامله‌گری بازارهای مالی",
        tagline: "پایش بلادرنگ بازارها، الگوهای قیمتی و سیگنال‌های پیش‌بینانه",
        category: "معامله‌گری الگوریتمی و مالی",
        badge: "سیستم تحلیل الگوریتمی",
        description: "پلتفرم پیشرفته تحلیل داده‌های مالی و کریپتو مبتنی بر هوش مصنوعی؛ مجهز به الگوریتم‌های پردازش داده‌های زنده بازار، مدل‌سازی رفتار خریداران و فروشندگان، کشف الگوهای سودساز و بهینه‌سازی نقاط ورود و خروج با کمترین ریسک.",
        features: [
          "تحلیل تکنیکال و فاندامنتال خودکار بازارهای کریپتو و فارکس",
          "کشف الگوهای قیمتی پنهان با مدل‌های یادگیری عمیق (Deep Learning)",
          "مدیریت سرمایه پویا و محاسبه ریسک به ریوارد هوشمند",
          "داشبورد تحلیلی یکپارچه برای تصمیم‌گیری سریع و دقیق معاملاتی"
        ],
        appUrl: "https://trading.diginoron.com/",
        appButtonText: "ورود به اپلیکیشن تریدینگ",
        accentColor: "emerald",
        stats: { label: "نوع تحلیل", value: "بلادرنگ و پیش‌بینانه" }
      },
      {
        id: "scholar",
        name: "دستیار هوشمند مقاله‌نویسی و پژوهش اسکالر",
        tagline: "دستیار پژوهشی هوشمند برای تدوین و پذیرش مقالات ISI و Scopus",
        category: "تولید علم و مقالات بین‌المللی",
        badge: "ویژه پژوهشگران و اساتید",
        description: "سامانه هوشمند استخراج و تدوین مقالات علمی معتبر بین‌المللی؛ بهینه‌سازی شده برای جستجوی مقالات در پایگاه‌های جهانی، فرمول‌بندی فرضیات، نگارش حرفه‌ای بخش‌های مقاله، رفرنس‌دهی استاندارد و آماده‌سازی برای ژورنال‌های معتبر.",
        features: [
          "سنتز هوشمند پیشینه پژوهش از ژورنال‌های معتبر بین‌المللی",
          "نگارش ساختاریافته بخش‌های مختلف مقاله به زبان انگلیسی تخصصی",
          "مدیریت مراجع و ارجاع‌دهی استاندارد (APA, IEEE, Vancouver, Harvard)",
          "آنالیز هوشمند برای رفع پلاجیاریسم و انطباق با معیارهای داوری ژورنال‌ها"
        ],
        appUrl: "https://scholar.diginoron.com/",
        blogUrl: "https://scholarmag.diginoron.com/",
        appButtonText: "ورود به اپلیکیشن اسکالر",
        blogButtonText: "مجله تخصصی اسکالر",
        accentColor: "cyan",
        stats: { label: "استاندارد مقالات", value: "ISI & Scopus" }
      },
      {
        id: "beauty",
        name: "سوپراپلیکیشن سلامت، زیبایی و آنالیز چهره",
        tagline: "اسکن بیومتریک و آنالیز بدون تماس پوست و فرم چهره با بینایی ماشین",
        category: "بینایی ماشین و سلامت پوست",
        badge: "سوپراپلیکیشن هوش مصنوعی",
        description: "سامانه انقلابی مبتنی بر بینایی ماشین برای آنالیز دقیق پوست و چهره؛ سنجش تقارن بر اساس نسبت طلایی، بررسی سن بیولوژیکی پوست، تشخیص چین‌وچروک و ناهنجاری‌های پوستی، سنجش بیومتریک استرس بدون تماس (rPPG) و ارائه روتین‌های مراقبتی کاملاً علمی.",
        features: [
          "آنالیز نسبت طلایی و ارزیابی تقارن هندسی اجزای صورت",
          "تشخیص هوشمند بافت پوست، عمق خطوط، منافذ و لک‌های پوستی",
          "اسکن بیومتریک بدون تماس علائم حیاتی و سنجش سطح استرس (rPPG)",
          "پیشنهاد روتین درمانی و مراقبتی اختصاصی متناسب با نوع پوست"
        ],
        appUrl: "https://beauty.diginoron.com/",
        blogUrl: "https://beautymag.diginoron.com/",
        appButtonText: "ورود به اپلیکیشن بیوتی",
        blogButtonText: "مجله زیبایی و سلامت",
        accentColor: "rose",
        stats: { label: "تکنولوژی آنالیز", value: "بینایی ماشین و rPPG" }
      }
    ],
    cta: {
      badge: "توسعه ابزارهای سفارشی هوش مصنوعی",
      title: "نیاز به ابزار یا ایجنت اختصاصی برای سازمان خود دارید؟",
      description: "دیجی نورون علاوه بر ابزارهای فوق، سیستم‌ها و ایجنت‌های هوش مصنوعی اختصاصی را متناسب با فرآیندهای کسب‌وکار یا سازمان شما طراحی و پیاده‌سازی می‌کند.",
      buttonText: "درخواست مشاوره و طراحی اختصاصی",
      buttonLink: "/services/enterprise-ai"
    }
  },
  en: {
    metaTitle: "AI Tools Ecosystem | DigiNoron Applied Artificial Intelligence",
    metaDesc: "Explore DigiNoron's specialized AI tools and platforms: DigiNoron Scholar for scientific research & paper drafting, and DigiNoron Beauty for AI facial diagnostics and skin health.",
    badge: "DigiNoron AI Tools Ecosystem",
    title: "Specialized & Applied",
    titleHighlight: "AI Tools",
    subtitle: "A curated suite of intelligent applications and super apps developed by DigiNoron, engineered to solve complex challenges in academic research, diagnostics, and aesthetic health.",
    featuresTitle: "Core Capabilities & Highlights:",
    appLinkAria: "Launch web application",
    blogLinkAria: "Read magazine and guides",
    tools: [
      {
        id: "scholar",
        name: "DigiNoron Scholar — AI Academic Research & Writing Assistant",
        tagline: "Intelligent research companion for high-impact ISI & Scopus publications",
        category: "Academic Research & Publishing",
        badge: "Academic & Research AI",
        description: "An advanced academic assistant engineered for university researchers, professors, and postgraduate scholars. Seamlessly search literature across global scientific databases, formulate robust hypotheses, draft peer-reviewed manuscript sections, and manage citations effortlessly.",
        features: [
          "AI-driven literature review synthesis from peer-reviewed databases",
          "Structured manuscript drafting with fluent academic phrasing and formatting",
          "Automated citation formatting (APA, IEEE, Harvard, Nature, Vancouver)",
          "Plagiarism checking and academic rigor optimization for journal peer review"
        ],
        appUrl: "https://scholar.diginoron.com/",
        blogUrl: "https://scholarmag.diginoron.com/",
        appButtonText: "Launch Scholar App",
        blogButtonText: "Scholar Magazine & Guides",
        accentColor: "cyan",
        stats: { label: "Standards", value: "ISI & Scopus Indexed" }
      },
      {
        id: "beauty",
        name: "DigiNoron Beauty — AI Facial & Dermatological Diagnostics",
        tagline: "Contactless computer-vision skin diagnostics and biometric facial symmetry",
        category: "Computer Vision & Aesthetic Health",
        badge: "AI Health & Beauty Super App",
        description: "A cutting-edge computer-vision application providing non-invasive dermatological and aesthetic evaluations. Features real-time facial golden ratio calculation, skin aging simulations, micro-pore and wrinkle mapping, and contactless rPPG biometric stress monitoring.",
        features: [
          "Facial symmetry and golden ratio geometric proportion analysis",
          "Deep skin diagnostics: texture, pigmentation, fine lines, and hydration markers",
          "Non-contact rPPG biometric vital-sign and physiological stress assessment",
          "Hyper-personalized skincare routines and clinical-grade recommendations"
        ],
        appUrl: "https://beauty.diginoron.com/en",
        blogUrl: "https://beautymag.diginoron.com/en",
        appButtonText: "Launch Beauty App",
        blogButtonText: "Beauty & Health Magazine",
        accentColor: "rose",
        stats: { label: "Core AI Engine", value: "Computer Vision & rPPG" }
      }
    ],
    cta: {
      badge: "Custom AI Development",
      title: "Need Custom AI Tools or Agents for Your Enterprise?",
      description: "DigiNoron designs, develops, and deploys tailor-made autonomous AI agents and intelligent applications customized for your enterprise operations and workflow automation.",
      buttonText: "Request Enterprise Consultation",
      buttonLink: "/services/enterprise-ai"
    }
  },
  ar: {
    metaTitle: "أدوات الذكاء الاصطناعي | ديجي نورون للحلول الذكية",
    metaDesc: "تعرف على منظومة أدوات ديجي نورون الذكية: تطبيق سكولار للأبحاث العلمية والأوراق الأكاديمية، وتطبيق بيوتي للفحص الذكي للوجه والعناية بالبشرة بالرؤية الحاسوبية.",
    badge: "منظومة أدوات ديجي نورون للذكاء الاصطناعي",
    title: "أدوات وتطبيقات",
    titleHighlight: "الذكاء الاصطناعي",
    subtitle: "باقة من التطبيقات الذكية والسوبر تطبيقات المتقدمة المطورة في ديجي نورون، المخصصة لحل التحديات في مجالات البحث العلمي، الرؤية الحاسوبية، وصحة البشرة والجمال.",
    featuresTitle: "الميزات والقدرات الأساسية:",
    appLinkAria: "فتح تطبيق الويب",
    blogLinkAria: "زيارة المدونة والمجلة التعليمية",
    tools: [
      {
        id: "scholar",
        name: "ديجي نورون سكولار — المساعد الذكي للأبحاث والأوراق العلمية",
        tagline: "منصة ذكاء اصطناعي متقدمة لإعداد ونشر الأبحاث في مجلات ISI وScopus",
        category: "البحث العلمي والنشر الأكاديمي",
        badge: "ذكاء اصطناعي أكاديمي",
        description: "مساعد بحثي متطور مصمم خصيصاً للباحثين وطلاب الدراسات العليا وأعضاء الهيئة التدريسية؛ يسهل استخراج ومراجعة الأدبيات العلمية، صياغة الأوراق البحثية بمعايير أكاديمية دولية، تنظيم الاستشهادات، وإعداد المخطوطات للتحكيم.",
        features: [
          "مسح واستخلاص مراجعة الأدبيات من كبرى قواعد البيانات العالمية",
          "صياغة أكاديمية رصينة باللغة الإنجليزية المتخصصة",
          "إدارة الاستشهادات والمراجع بنظم متعددة (APA, IEEE, Harvard)",
          "فحص وتفادي الانتحال العلمي ورفع جاهزية النشر الدولي"
        ],
        appUrl: "https://scholar.diginoron.com/",
        blogUrl: "https://scholarmag.diginoron.com/",
        appButtonText: "فتح تطبيق سكولار",
        blogButtonText: "مجلة سكولار الأكاديمية",
        accentColor: "cyan",
        stats: { label: "معايير النشر", value: "ISI و Scopus" }
      },
      {
        id: "beauty",
        name: "ديجي نورون بيوتي — الفحص الذكي للوجه والعناية بالبشرة",
        tagline: "تحليل بصري غير تلامسي لملامح الوجه وصحة البشرة بالرؤية الحاسوبية",
        category: "الرؤية الحاسوبية وصحة البشرة",
        badge: "سوبر تطبيق الجمال والصحة",
        description: "منظومة ذكية مبتكرة تعتمد على خوارزميات الرؤية الحاسوبية لفحص وتدقيق حالة البشرة والوجه بدقة بالغة؛ تتضمن حساب النسبة الذهبية وتناسق الوجه، تشخيص التجاعيد والعيوب، الفحص البيومتري لمستوى الإجهاد بدون لمس (rPPG)، واقتراح روتين عناية شخصي متكامل.",
        features: [
          "تحليل التناغم الهندسي وتناسق ملامح الوجه وفق النسبة الذهبية",
          "تشخيص دقيق لنوع البشرة، المسام، التصبغات ومؤشرات الشيخوخة",
          "فحص بيومتري بدون تلامس للمؤشرات الحيوية ومستوى الإجهاد (rPPG)",
          "توصيات علاجية وروتين عناية يومي مخصص لكل مستخدم"
        ],
        appUrl: "https://beauty.diginoron.com/en",
        blogUrl: "https://beautymag.diginoron.com/en",
        appButtonText: "فتح تطبيق بيوتي",
        blogButtonText: "مجلة الجمال والصحة",
        accentColor: "rose",
        stats: { label: "محرك الذكاء الاصطناعي", value: "الرؤية الحاسوبية و rPPG" }
      }
    ],
    cta: {
      badge: "تطوير أنظمة وأدوات مخصصة",
      title: "هل تحتاج إلى أداة أو وكيل ذكاء اصطناعي خاص بمؤسستك؟",
      description: "يقوم مركز ديجي نورون بتصميم وهندسة حلول ووكلاء الذكاء الاصطناعي المخصصة لتلبية الاحتياجات التشغيلية الفريدة لشركتك وأتمتة العمليات بدقة عالية.",
      buttonText: "طلب استشارة للمؤسسات",
      buttonLink: "/services/enterprise-ai"
    }
  }
};
