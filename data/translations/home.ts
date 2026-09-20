import { Locale } from "@/lib/i18n";

export interface HomeTranslations {
  hero: {
    badgeTag: string;
    badgeDesc: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    enterpriseBtn: string;
    academyBtn: string;
    consultationBtn: string;
    card1Badge: string;
    card1Title: string;
    card1Desc: string;
    card1Link: string;
    card2Title: string;
    card2Desc: string;
    card2Link: string;
    card3Title: string;
    card3Desc: string;
    card3Link: string;
    stats: {
      stat1Number: string;
      stat1Label: string;
      stat2Number: string;
      stat2Label: string;
      stat3Number: string;
      stat3Label: string;
      stat4Number: string;
      stat4Label: string;
    };
  };
  enterpriseSection: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    tabs: {
      agents: string;
      bpa: string;
      techTransfer: string;
      strategy: string;
    };
    consultationCta: string;
    viewAllServicesBtn: string;
  };
  servicesOverview: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    corporateTitle: string;
    corporateSubtitle: string;
    corporateDesc: string;
    corporateBtn: string;
    kidsTitle: string;
    kidsSubtitle: string;
    kidsDesc: string;
    kidsBtn: string;
  };
  courseGrid: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    allFilter: string;
    corporateFilter: string;
    specialistFilter: string;
    kidsFilter: string;
    viewAllCoursesBtn: string;
  };
  roadmap: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
  };
  latestArticles: {
    badge: string;
    title: string;
    titleHighlight: string;
    viewAllBtn: string;
    authorPrefix: string;
    readArticleBtn: string;
  };
  contactTeaser: {
    badge: string;
    title: string;
    description: string;
    callNowBtn: string;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    phoneLabel: string;
    orgLabel: string;
    serviceTypeLabel: string;
    notesLabel: string;
    submitBtn: string;
    successMessage: string;
  };
}

export const HOME_TRANSLATIONS: Record<Locale, HomeTranslations> = {
  en: {
    hero: {
      badgeTag: "DigiNoron:",
      badgeDesc: "Enterprise AI Transformation & Applied AI Academy",
      titleLine1: "Comprehensive Enterprise AI &",
      titleLine2: "Applied AI Training Academy",
      description: "DigiNoron delivers end-to-end autonomous AI Agent development, business process automation (BPA), on-premise technology transfer, and industry-grade training for enterprises and next-gen learners.",
      enterpriseBtn: "Enterprise AI Solutions",
      academyBtn: "Training Academy",
      consultationBtn: "Call: 02188252497",
      card1Badge: "Enterprise Priority",
      card1Title: "Enterprise AI & Multi-Agents",
      card1Desc: "Custom multi-agent workflows, finance/sales/HR process automation, secure On-Premise deployment, and complete IP transfer.",
      card1Link: "Explore Services & Case Studies",
      card2Title: "Corporate AI Upskilling",
      card2Desc: "Executive AI strategy masterclasses, prompt engineering workshops, and organizational data governance guidelines.",
      card2Link: "View Corporate Programs",
      card3Title: "Kids & Teens AI Academy",
      card3Desc: "Game-based learning, interactive AI bots, Python coding, and developing algorithmic thinking for future leaders.",
      card3Link: "Explore Youth Academy",
      stats: {
        stat1Number: "+50",
        stat1Label: "Partner Enterprises & Projects",
        stat2Number: "+150",
        stat2Label: "Deployed AI Agents & Workflows",
        stat3Number: "100%",
        stat3Label: "IP Transfer & On-Premise Security",
        stat4Number: "+10,000",
        stat4Label: "Active Academy Graduates",
      },
    },
    enterpriseSection: {
      badge: "Core Enterprise Services",
      title: "Sustainable Transformation via",
      titleHighlight: "Autonomous AI Solutions",
      description: "We don't just provide consulting; we engineer, deploy, and benchmark tailored AI architectures inside your infrastructure.",
      tabs: {
        agents: "Specialized AI Agents",
        bpa: "Process Automation (BPA)",
        techTransfer: "Tech Transfer & On-Prem",
        strategy: "Strategy & Governance",
      },
      consultationCta: "Request Technical Consultation",
      viewAllServicesBtn: "View All Enterprise Solutions",
    },
    servicesOverview: {
      badge: "Applied Educational Tracks",
      title: "Bridging the Gap with",
      titleHighlight: "Practical AI Academies",
      subtitle: "Tailored learning roadmaps designed for both high-stakes corporate teams and enthusiastic youth.",
      corporateTitle: "Corporate Upskilling Academy",
      corporateSubtitle: "Enterprise Teams & Executive Boards",
      corporateDesc: "Empower staff with cutting-edge generative tools, predictive models, and security protocols to boost operational throughput.",
      corporateBtn: "Explore Corporate Programs",
      kidsTitle: "Youth & Teens Innovation Lab",
      kidsSubtitle: "Ages 8 to 17",
      kidsDesc: "Transform screen time into creative engineering through playful prompt engineering, game logic, and Python AI fundamentals.",
      kidsBtn: "Explore Youth Programs",
    },
    courseGrid: {
      badge: "Active Course Catalog",
      title: "Featured Courses &",
      titleHighlight: "Workshops",
      subtitle: "Filter through specialized curricula curated by veteran AI engineers and educational mentors.",
      allFilter: "All Courses",
      corporateFilter: "Executive & Corporate",
      specialistFilter: "Specialists & Analysts",
      kidsFilter: "Youth & Teens",
      viewAllCoursesBtn: "Explore Entire Catalog",
    },
    roadmap: {
      badge: "Learning & Implementation Journey",
      title: "Our 4-Step Pathway to",
      titleHighlight: "AI Mastery & Adoption",
      subtitle: "A structured, battle-tested methodology from initial discovery to autonomous operations.",
      step1Title: "1. Diagnostic & Needs Assessment",
      step1Desc: "Evaluating existing workflows, data maturity, and operational bottlenecks to define clear targets.",
      step2Title: "2. Strategic Architecture & Design",
      step2Desc: "Crafting customized curricula or AI agent topology tailored to organizational goals.",
      step3Title: "3. Hands-On Execution & Training",
      step3Desc: "Interactive workshop delivery, live prompt labs, and initial agent deployment in sandbox environments.",
      step4Title: "4. Deployment & Full Tech Transfer",
      step4Desc: "Rolling out production workflows, benchmarking KPIs, and transferring comprehensive IP and documentation.",
    },
    latestArticles: {
      badge: "Knowledge Hub & Insights",
      title: "Latest Articles &",
      titleHighlight: "AI Industry Analysis",
      viewAllBtn: "View All Publications",
      authorPrefix: "Author:",
      readArticleBtn: "Read Full Article",
    },
    contactTeaser: {
      badge: "Immediate Consultation",
      title: "Ready to Accelerate Your Enterprise with AI?",
      description: "Our technical advisors will analyze your business challenges and outline a roadmap within 48 hours.",
      callNowBtn: "Call: 021-88252497",
      formTitle: "Schedule a Consultation Session",
      formSubtitle: "Fill in the details below and our solution architects will contact you shortly.",
      nameLabel: "Full Name / Representative",
      phoneLabel: "Phone Number",
      orgLabel: "Organization / Company Name",
      serviceTypeLabel: "Service of Interest",
      notesLabel: "Project Brief & Requirements",
      submitBtn: "Submit Consultation Request",
      successMessage: "Your request has been received. Our team will contact you shortly.",
    },
  },
  fa: {
    hero: {
      badgeTag: "دیجی نورون:",
      badgeDesc: "مرکز هوشمندسازی سازمانی و آموزش تخصصی هوش مصنوعی",
      titleLine1: "هوشمندسازی جامع سازمان‌ها و",
      titleLine2: "آموزش کاربردی هوش مصنوعی",
      description: "دیجی نورون ارائه‌دهنده خدمات تخصصی طراحی ایجنت‌ها، هوشمندسازی فرآیندها، پیاده‌سازی و انتقال تکنولوژی سازمانی و همچنین خدمات آموزشی نوین در دو بخش سازمانی و کودکان/نوجوانان است.",
      enterpriseBtn: "خدمات هوشمندسازی سازمانی",
      academyBtn: "خدمات آموزشی و آکادمی",
      consultationBtn: "مشاوره: ۰۲۱۸۸۲۵۲۴۹۷",
      card1Badge: "اولویت سازمانی",
      card1Title: "هوشمندسازی و ایجنت‌های سازمانی",
      card1Desc: "طراحی ایجنت‌های چندعامله، اتوماسیون فرآیندهای مالی، فروش و منابع انسانی، پیاده‌سازی On-Premise و انتقال کامل تکنولوژی.",
      card1Link: "بررسی خدمات و سناریوها",
      card2Title: "آموزش‌های تخصصی سازمانی",
      card2Desc: "مسترکلاس‌های استراتژی هوش مصنوعی مدیران ارشد، کارگاه‌های پرامپت‌نویسی پرسنل و شیوه‌نامه‌های امنیت داده‌های شرکتی.",
      card2Link: "مشاهده دوره‌های سازمانی",
      card3Title: "آموزش کودکان و نوجوانان",
      card3Desc: "آموزش بازی‌محور، ساخت ربات‌های تعاملی، برنامه‌نویسی پایتون کودکان و پرورش تفکر الگوریتمی و سواد هوش مصنوعی.",
      card3Link: "مشاهده آکادمی نوجوانان",
      stats: {
        stat1Number: "+۵۰",
        stat1Label: "پروژه و سازمان همکار",
        stat2Number: "+۱۵۰",
        stat2Label: "ایجنت و فرآیند هوشمندسازی شده",
        stat3Number: "۱۰۰٪",
        stat3Label: "انتقال دانش و امنیت On-Premise",
        stat4Number: "+۱۰,۰۰۰",
        stat4Label: "دانش‌پذیر فعال آکادمی",
      },
    },
    enterpriseSection: {
      badge: "خدمات تحول سازمانی",
      title: "افزایش بهره‌وری و کاهش هزینه‌ها با",
      titleHighlight: "راهکارهای هوش مصنوعی دیجی نورون",
      description: "ما تنها مشاوره نمی‌دهیم؛ در کنار شما سیستم‌های واقعی و ایجنت‌های هوشمند سازمانی را طراحی، پیاده‌سازی و مستقر می‌کنیم.",
      tabs: {
        agents: "ایجنت‌های هوشمند اختصاصی",
        bpa: "اتوماسیون فرآیندها (BPA)",
        techTransfer: "انتقال تکنولوژی و زیرساخت",
        strategy: "سند راهبردی و امنیت داده",
      },
      consultationCta: "درخواست جلسه مشاوره فنی",
      viewAllServicesBtn: "مشاهده تمام خدمات سازمانی",
    },
    servicesOverview: {
      badge: "دو لاین آموزشی تخصصی",
      title: "آموزش هوش مصنوعی متناسب با نیاز",
      titleHighlight: "سازمان‌ها و نسل آینده",
      subtitle: "برنامه‌ریزی آموزشی مدون، پروژه‌محور و کاملاً کاربردی با حضور اساتید مجرب حوزه هوش مصنوعی.",
      corporateTitle: "آکادمی آموزش سازمانی",
      corporateSubtitle: "مدیران، تصمیم‌گیرندگان و کارشناسان",
      corporateDesc: "توانمندسازی پرسنل و مدیران جهت استفاده ایمن و موثر از ابزارهای هوش مصنوعی برای جهش در بهره‌وری و کاهش خطای انسانی.",
      corporateBtn: "مشاهده دوره‌های سازمانی",
      kidsTitle: "آکادمی هوش مصنوعی کودکان و نوجوانان",
      kidsSubtitle: "رده سنی ۸ الی ۱۷ سال",
      kidsDesc: "تبدیل اوقات فراغت به یادگیری عمیق؛ آشنایی با منطق هوش مصنوعی، ساخت بازی، برنامه‌نویسی پایتون و ابزارهای تولید محتوا.",
      kidsBtn: "مشاهده دوره‌های کودکان",
    },
    courseGrid: {
      badge: "دوره‌های فعال آکادمی",
      title: "جدیدترین دوره‌ها و",
      titleHighlight: "کارگاه‌های آموزشی",
      subtitle: "دوره‌های حضوری، آنلاین و ترکیبی برای کلیه سطوح تخصصی از مقدماتی تا پیاده‌سازی‌های پیشرفته.",
      allFilter: "همه دوره‌ها",
      corporateFilter: "مدیران و سازمانی",
      specialistFilter: "کارشناسان و تحلیل‌گران",
      kidsFilter: "کودکان و نوجوانان",
      viewAllCoursesBtn: "مشاهده کاتالوگ جامع دوره‌ها",
    },
    roadmap: {
      badge: "مسیر یادگیری و پیاده‌سازی",
      title: "نقشه راه ۴ مرحله‌ای",
      titleHighlight: "تحول با هوش مصنوعی",
      subtitle: "رویکردی منسجم و استاندارد برای رسیدن به بالاترین بهره‌وری سازمانی یا یادگیری فردی.",
      step1Title: "۱. ارزیابی و نیازسنجی دقیق",
      step1Desc: "بررسی فرآیندهای موجود، گلوگاه‌های سازمان و تعیین اهداف هوشمندسازی یا تعیین سطح دانش‌پذیران.",
      step2Title: "۲. طراحی ساختار و سند اقدام",
      step2Desc: "تدوین سرفصل‌های اختصاصی آموزش یا معماری فنی ایجنت‌ها متناسب با زیرساخت سازمان.",
      step3Title: "۳. اجرا، آموزش و استقرار اولیه",
      step3Desc: "برگزاری کارگاه‌های تعاملی عملی و پیاده‌سازی اولیه فرآیندهای اتوماسیون در محیط آزمایشگاهی.",
      step4Title: "۴. انتقال کامل دانش و پشتیبانی",
      step4Desc: "مستندسازی کامل، تحویل سورس‌کدها، استقرار نهایی On-Premise و همراهی تیم در فاز عملیاتی.",
    },
    latestArticles: {
      badge: "مجله علمی و مقالات تخصصی",
      title: "آخرین تحلیل‌ها و",
      titleHighlight: "اخبار هوش مصنوعی",
      viewAllBtn: "مشاهده تمامی مقالات",
      authorPrefix: "نویسنده:",
      readArticleBtn: "مطالعه مقاله",
    },
    contactTeaser: {
      badge: "مشاوره اختصاصی و فوری",
      title: "آماده هوشمندسازی سازمان خود هستید؟",
      description: "کارشناسان فنی دیجی نورون ظرف ۴۸ ساعت چالش‌های سازمان شما را تحلیل و نقشه راه اولیه را ارائه می‌دهند.",
      callNowBtn: "تماس: ۰۲۱۸۸۲۵۲۴۹۷",
      formTitle: "درخواست جلسه مشاوره سازمانی",
      formSubtitle: "اطلاعات اولیه سازمان خود را وارد کنید تا کارشناسان ما با شما تماس حاصل نمایند.",
      nameLabel: "نام و نام خانوادگی نماینده",
      phoneLabel: "شماره تماس مستقیم",
      orgLabel: "نام شرکت یا سازمان",
      serviceTypeLabel: "نوع خدمت درخواستی",
      notesLabel: "توضیحات یا چالش مدنظر",
      submitBtn: "ثبت درخواست مشاوره",
      successMessage: "درخواست شما با موفقیت ثبت شد. به زودی با شما تماس خواهیم گرفت.",
    },
  },
  ar: {
    hero: {
      badgeTag: "ديجي نورون:",
      badgeDesc: "مركز التحول الذكي للمؤسسات والتدريب التخصصي في الذكاء الاصطناعي",
      titleLine1: "التحول الذكي المتكامل للشركات و",
      titleLine2: "أكاديمية الذكاء الاصطناعي التطبيقي",
      description: "يقدم ديجي نورون خدمات احترافية في تطوير وكلاء الذكاء الاصطناعي (AI Agents)، وأتمتة العمليات (BPA)، ونقل التكنولوجيا محلياً (On-Premise)، إلى جانب مسارات تعليمية متطورة للكوادر المؤسسية والناشئة.",
      enterpriseBtn: "خدمات التحول المؤسسي",
      academyBtn: "الأكاديمية والبرامج التدريبية",
      consultationBtn: "اتصال: 02188252497",
      card1Badge: "أولوية استراتيجية",
      card1Title: "وكلاء الذكاء الاصطناعي للشركات",
      card1Desc: "تصميم أنظمة وكلاء متعددة، أتمتة العمليات المالية، المبيعات والموارد البشرية، وتثبيت آمن On-Premise مع نقل الملكية الفكرية.",
      card1Link: "استعراض الخدمات ودراسات الحالة",
      card2Title: "التأهيل المؤسسي للكوادر",
      card2Desc: "برامج تنفيذية لكبار المديرين في استراتيجية الذكاء الاصطناعي، وورش عمل صياغة الأوامر (Prompting)، وأمن البيانات.",
      card2Link: "استعراض البرامج المؤسسية",
      card3Title: "أكاديمية الأطفال واليافعين",
      card3Desc: "تعلم تفاعلي قائم على المشاريع، برمجة البوتات، بايثون للصغار، وتنمية التفكير الخوارزمي وسواد الذكاء الاصطناعي.",
      card3Link: "استعراض أكاديمية اليافعين",
      stats: {
        stat1Number: "+٥٠",
        stat1Label: "مشروع ومؤسسة شريكة",
        stat2Number: "+١٥٠",
        stat2Label: "وكيل ذكي وعملية مؤتمتة",
        stat3Number: "١٠٠٪",
        stat3Label: "نقل المعرفة وأمان On-Premise",
        stat4Number: "+١٠,٠٠٠",
        stat4Label: "متدرب خريج في الأكاديمية",
      },
    },
    enterpriseSection: {
      badge: "حلول التحول المؤسسي",
      title: "تعزيز الكفاءة وخفض التكاليف عبر",
      titleHighlight: "حلول الذكاء الاصطناعي المستقلة",
      description: "لا نكتفي بتقديم التوصيات، بل نصمم وننفذ حلول الذكاء الاصطناعي الواقعية داخل بنيتكم التحتية مع نقل كامل للشيفرة والخبرة.",
      tabs: {
        agents: "وكلاء الذكاء الاصطناعي المخصصون",
        bpa: "أتمتة العمليات المؤسسية (BPA)",
        techTransfer: "نقل التكنولوجيا والبنية المحلية",
        strategy: "الاستراتيجية وحوكمة البيانات",
      },
      consultationCta: "طلب جلسة استشارة فنية",
      viewAllServicesBtn: "عرض كافة الحلول المؤسسية",
    },
    servicesOverview: {
      badge: "مسارات تدريبية تطبيقية",
      title: "برامج تدريبية متخصصة تلبي تطلعات",
      titleHighlight: "المؤسسات وجيل المستقبل",
      subtitle: "مناهج مصممة بعناية تجمع بين الجانب التطبيقي والمشاريع العملية بإشراف خبراء الذكاء الاصطناعي.",
      corporateTitle: "أكاديمية التدريب المؤسسي",
      corporateSubtitle: "المديرون، صناع القرار والمتخصصون",
      corporateDesc: "تمكين الفرق الإدارية والفنية من توظيف أدوات الذكاء الاصطناعي لتحقيق قفزات نوعية في الإنتاجية والدقة.",
      corporateBtn: "استعراض برامج الشركات",
      kidsTitle: "مختبر الابتكار للأطفال واليافعين",
      kidsSubtitle: "الفئة العمرية من ٨ إلى ١٧ عاماً",
      kidsDesc: "تحويل شغف التكنولوجيا إلى مهارات حقيقية عبر بناء ألعاب ذكية، البرمجة بلغة بايثون، وتصميم المحتوى التوليدي.",
      kidsBtn: "استعراض برامج اليافعين",
    },
    courseGrid: {
      badge: "الدورات المتاحة حالياً",
      title: "أحدث البرامج و",
      titleHighlight: "ورش العمل التفاعلية",
      subtitle: "دورات حضورية وافتراضية تغطي كافة المستويات من المبادئ الأساسية وحتى التطبيقات المتقدمة.",
      allFilter: "كافة الدورات",
      corporateFilter: "المديرون والمؤسسات",
      specialistFilter: "المحللون والخبراء",
      kidsFilter: "الأطفال واليافعون",
      viewAllCoursesBtn: "عرض دليل الدورات الكامل",
    },
    roadmap: {
      badge: "مسار التحول والتعلم",
      title: "خريطة الطريق المنهجية",
      titleHighlight: "في ٤ مراحل رئيسية",
      subtitle: "منهجية علمية مجربة تقودكم من التحليل الأولي إلى التشغيل الذاتي والتمكين الشامل.",
      step1Title: "١. التقييم وتشخيص الاحتياجات",
      step1Desc: "فحص العمليات الحالية، تحديد الاختناقات وتحديد أهداف الأتمتة أو مستويات المتدربين بدقة.",
      step2Title: "٢. التصميم المعماري والمناهج",
      step2Desc: "إعداد هيكلية وكلاء الذكاء الاصطناعي أو خطة تدريبية مخصصة توافق بنية المؤسسة.",
      step3Title: "٣. التنفيذ والتدريب العملي",
      step3Desc: "تقديم ورش عمل تطبيقية ومختبرات حية، ونشر أولي للحلول في بيئة تجريبية آمنة.",
      step4Title: "٤. النشر النهائي ونقل التكنولوجيا",
      step4Desc: "استقرار النظم On-Premise، تسليم الوثائق والشيفرات المصدرية، وتوفير الدعم المستمر.",
    },
    latestArticles: {
      badge: "المعرفة والأبحاث",
      title: "أحدث التحليلات و",
      titleHighlight: "أخبار الذكاء الاصطناعي",
      viewAllBtn: "عرض جميع المقالات",
      authorPrefix: "الكاتب:",
      readArticleBtn: "قراءة المقال بالكامل",
    },
    contactTeaser: {
      badge: "استشارة فورية",
      title: "هل أنتم مستعدون لقيادة التحول الذكي في مؤسستكم؟",
      description: "يقوم مستشارونا التقنيون بدراسة متطلباتكم وتقديم خطة أولية متكاملة خلال ٤٨ ساعة.",
      callNowBtn: "اتصال: 021-88252497",
      formTitle: "طلب جلسة استشارة فنية",
      formSubtitle: "سجل بيانات مؤسستك وسيتواصل معك مهندسو الحلول في أقرب وقت.",
      nameLabel: "الاسم الكامل / الممثل",
      phoneLabel: "رقم الهاتف المباشر",
      orgLabel: "اسم المؤسسة أو الشركة",
      serviceTypeLabel: "نوع الخدمة المطلوبة",
      notesLabel: "نبذة عن المشروع والتحديات",
      submitBtn: "إرسال طلب الاستشارة",
      successMessage: "تم استلام طلبكم بنجاح. سيتواصل معكم فريقنا المتخصص قريباً.",
    },
  },
};
