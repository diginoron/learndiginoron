import { Locale } from "@/lib/i18n";

export interface CommonTranslations {
  brand: {
    name: string;
    tagline: string;
    topBannerTagline: string;
    phoneLabel: string;
    phoneNumber: string;
    workingHours: string;
  };
  nav: {
    home: string;
    enterpriseAI: string;
    enterpriseAIDesc: string;
    corporateTraining: string;
    corporateTrainingDesc: string;
    kidsAndTeens: string;
    kidsAndTeensDesc: string;
    heldCourses: string;
    heldCoursesDesc: string;
    courses: string;
    blog: string;
    about: string;
    contact: string;
    servicesDropdown: string;
    academyDropdown: string;
    freeConsultationBtn: string;
    viewAllCoursesBtn: string;
  };
  footer: {
    aboutDiginoron: string;
    aboutDiginoronDesc: string;
    quickLinks: string;
    servicesTitle: string;
    contactTitle: string;
    address: string;
    email: string;
    phone: string;
    workingDays: string;
    rightsReserved: string;
    disclaimer: string;
  };
  buttons: {
    readMore: string;
    viewAll: string;
    learnMore: string;
    getConsultation: string;
    requestProposal: string;
    registerNow: string;
    sendInquiry: string;
    backToHome: string;
    backToBlog: string;
    backToCourses: string;
    loading: string;
    submit: string;
  };
  language: {
    selectLanguage: string;
    currentLanguage: string;
  };
}

export const COMMON_TRANSLATIONS: Record<Locale, CommonTranslations> = {
  en: {
    brand: {
      name: "DigiNoron",
      tagline: "Enterprise AI Transformation & Applied AI Academy",
      topBannerTagline: "Strategic AI Roadmaps, Enterprise Automation & Applied AI Academy",
      phoneLabel: "Consultation & Inquiries:",
      phoneNumber: "+98 21 8825 2497",
      workingHours: "Saturday to Wednesday, 8:00 - 17:00",
    },
    nav: {
      home: "Home",
      enterpriseAI: "Enterprise AI Solutions",
      enterpriseAIDesc: "Autonomous AI Agents, BPA Process Automation & Tech Transfer",
      corporateTraining: "Corporate AI Academy",
      corporateTrainingDesc: "Specialized in-house workshops for executives and specialists",
      kidsAndTeens: "Kids & Teens Academy",
      kidsAndTeensDesc: "Practical AI creativity and logic for the next generation",
      heldCourses: "Held Courses & Case Studies",
      heldCoursesDesc: "Portfolio of workshops delivered to leading industries",
      courses: "Course Catalog",
      blog: "Articles & Insights",
      about: "About Us",
      contact: "Contact & Consultation",
      servicesDropdown: "Enterprise Services",
      academyDropdown: "AI Academy",
      freeConsultationBtn: "Free Consultation",
      viewAllCoursesBtn: "View All Courses",
    },
    footer: {
      aboutDiginoron: "About DigiNoron",
      aboutDiginoronDesc: "DigiNoron is an enterprise AI innovation center specializing in customized AI Agents, Business Process Automation (BPA), technology transfer, and applied corporate training across the Middle East.",
      quickLinks: "Quick Links",
      servicesTitle: "Specialized Services",
      contactTitle: "Contact & Head Office",
      address: "Technology & AI Innovation Center (Online & On-Premise Operations)",
      email: "diginoron@gmail.com",
      phone: "021-88252497",
      workingDays: "Saturday to Wednesday, 8:00 AM to 5:00 PM",
      rightsReserved: "All rights reserved for DigiNoron Enterprise AI Center (diginoron.com).",
      disclaimer: "DigiNoron operates in compliance with international technology standards, empowering modern enterprises through ethical, autonomous, and high-performance AI integration.",
    },
    buttons: {
      readMore: "Read Article",
      viewAll: "View All",
      learnMore: "Learn More",
      getConsultation: "Book Free Consultation",
      requestProposal: "Request Enterprise Proposal",
      registerNow: "Enroll in Course",
      sendInquiry: "Submit Request",
      backToHome: "Return to Home",
      backToBlog: "Return to Articles",
      backToCourses: "Return to Courses",
      loading: "Sending...",
      submit: "Send Message",
    },
    language: {
      selectLanguage: "Change Language",
      currentLanguage: "English",
    },
  },
  fa: {
    brand: {
      name: "دیجی نورون",
      tagline: "هوشمندسازی سازمانی و آموزش کاربردی هوش مصنوعی",
      topBannerTagline: "طراحی سند راهبردی، هوشمندسازی سازمانی و آکادمی هوش مصنوعی",
      phoneLabel: "مشاوره و استعلام:",
      phoneNumber: "۰۲۱۸۸۲۵۲۴۹۷",
      workingHours: "شنبه تا چهارشنبه ۸ الی ۱۷",
    },
    nav: {
      home: "صفحه اصلی",
      enterpriseAI: "هوشمندسازی سازمانی",
      enterpriseAIDesc: "طراحی ایجنت‌های سازمانی، اتوماسیون فرآیندها (BPA) و انتقال تکنولوژی",
      corporateTraining: "آموزش هوش مصنوعی سازمانی",
      corporateTrainingDesc: "دوره‌ها و کارگاه‌های تخصصی برای مدیران و کارشناسان صنایع",
      kidsAndTeens: "آموزش کودکان و نوجوانان",
      kidsAndTeensDesc: "پرورش خلاقیت، تفکر الگوریتمی و سواد هوش مصنوعی نسل نو",
      heldCourses: "دوره‌های برگزار شده",
      heldCoursesDesc: "سوابق برگزاری در صنایع پتروشیمی، مراکز صنعتی، سازمان‌ها و نهادهای پیشرو...",
      courses: "کاتالوگ دوره‌ها",
      blog: "مقالات و تحلیل‌ها",
      about: "درباره ما",
      contact: "تماس و مشاوره",
      servicesDropdown: "خدمات سازمانی",
      academyDropdown: "آکادمی آموزشی",
      freeConsultationBtn: "مشاوره رایگان سازمانی",
      viewAllCoursesBtn: "مشاهده تمام دوره‌ها",
    },
    footer: {
      aboutDiginoron: "درباره دیجی نورون",
      aboutDiginoronDesc: "مرکز تخصصی هوشمندسازی سازمانی و آموزش کاربردی هوش مصنوعی. ما در دیجی نورون با طراحی ایجنت‌های اختصاصی، اتوماسیون فرآیندها (BPA) و برگزاری دوره‌های توانمندسازی شرکتی، بهره‌وری سازمان شما را ارتقا می‌دهیم.",
      quickLinks: "دسترسی سریع",
      servicesTitle: "خدمات تخصصی",
      contactTitle: "تماس با ما",
      address: "مرکز نوآوری و فناوری (ارائه خدمات حضوری، آنلاین و On-Premise)",
      email: "diginoron@gmail.com",
      phone: "۰۲۱۸۸۲۵۲۴۹۷",
      workingDays: "شنبه تا چهارشنبه ۸:۰۰ الی ۱۷:۰۰",
      rightsReserved: "تمامی حقوق مادی و معنوی برای وب‌سایت دیجی نورون (diginoron.com) محفوظ است.",
      disclaimer: "محتوای دیجی نورون با بالاترین استانداردهای هوش مصنوعی تدوین شده و هدف آن جهش فناوری در بخش سازمانی و عمومی است.",
    },
    buttons: {
      readMore: "مطالعه مقاله",
      viewAll: "مشاهده همه",
      learnMore: "اطلاعات بیشتر",
      getConsultation: "دریافت مشاوره رایگان",
      requestProposal: "درخواست پروپوزال سازمانی",
      registerNow: "ثبت‌نام در دوره",
      sendInquiry: "ثبت درخواست استعلام",
      backToHome: "بازگشت به صفحه اصلی",
      backToBlog: "بازگشت به مقالات",
      backToCourses: "بازگشت به دوره‌ها",
      loading: "در حال ارسال...",
      submit: "ارسال پیام",
    },
    language: {
      selectLanguage: "انتخاب زبان",
      currentLanguage: "فارسی",
    },
  },
  ar: {
    brand: {
      name: "ديجي نورون",
      tagline: "التحول الذكي للمؤسسات وأكاديمية الذكاء الاصطناعي التطبيقي",
      topBannerTagline: "تخطيط استراتيجي، أتمتة العمليات ووكلاء الذكاء الاصطناعي للمؤسسات",
      phoneLabel: "الاستشارات والاستفسارات:",
      phoneNumber: "+98 21 8825 2497",
      workingHours: "السبت إلى الأربعاء ٨:٠٠ حتى ١٧:٠٠",
    },
    nav: {
      home: "الرئيسية",
      enterpriseAI: "حلول الذكاء الاصطناعي للشركات",
      enterpriseAIDesc: "وكلاء الذكاء الاصطناعي المستقلون، أتمتة BPA ونقل التكنولوجيا",
      corporateTraining: "التدريب المؤسسي المتخصص",
      corporateTrainingDesc: "ورش عمل مخصصة للمديرين التنفيذيين والخبراء والمهندسين",
      kidsAndTeens: "أكاديمية الأطفال واليافعين",
      kidsAndTeensDesc: "تنمية التفكير الابتكاري والبرمجة بالذكاء الاصطناعي للجيل القادم",
      heldCourses: "الدورات المنجزة والمشاريع",
      heldCoursesDesc: "سجل حافل بالتدريب في كبرى الشركات والمؤسسات الحكومية والخاصة",
      courses: "دليل الدورات التدريبية",
      blog: "المقالات والتحليلات",
      about: "من نحن",
      contact: "التواصل والاستشارة",
      servicesDropdown: "الخدمات المؤسسية",
      academyDropdown: "الأكاديمية التدريبية",
      freeConsultationBtn: "استشارة مجانية للمؤسسات",
      viewAllCoursesBtn: "عرض جميع الدورات",
    },
    footer: {
      aboutDiginoron: "عن ديجي نورون",
      aboutDiginoronDesc: "مركز ديجي نورون رائد في حلول الذكاء الاصطناعي المؤسسي، وتطوير وكلاء الذكاء الاصطناعي (AI Agents)، وأتمتة العمليات التجارية (BPA)، وتأهيل الكوادر البشرية عبر برامج تدريبية احترافية في الشرق الأوسط.",
      quickLinks: "روابط سريعة",
      servicesTitle: "الخدمات المتخصصة",
      contactTitle: "التواصل والمقر",
      address: "مركز الابتكار والتكنولوجيا المتقدمة (خدمات حضورية وافتراضية)",
      email: "diginoron@gmail.com",
      phone: "021-88252497",
      workingDays: "السبت إلى الأربعاء: ٨:٠٠ ص حتى ٥:٠٠ م",
      rightsReserved: "جميع الحقوق محفوظة لمركز ديجي نورون للذكاء الاصطناعي (diginoron.com).",
      disclaimer: "نلتزم بأعلى المعايير التكنولوجية وأخلاقيات الذكاء الاصطناعي لتمكين المؤسسات من تحقيق أعلى مستويات الكفاءة والإنتاجية.",
    },
    buttons: {
      readMore: "قراءة المقال",
      viewAll: "عرض الكل",
      learnMore: "المزيد من التفاصيل",
      getConsultation: "حجز استشارة مجانية",
      requestProposal: "طلب عرض فني للمؤسسات",
      registerNow: "التسجيل في الدورة",
      sendInquiry: "إرسال الاستفسار",
      backToHome: "العودة للرئيسية",
      backToBlog: "العودة للمقالات",
      backToCourses: "العودة للدورات",
      loading: "جارٍ الإرسال...",
      submit: "إرسال الرسالة",
    },
    language: {
      selectLanguage: "تغيير اللغة",
      currentLanguage: "العربية",
    },
  },
};
