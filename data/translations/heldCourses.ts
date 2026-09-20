import { HeldCourse } from "@/data/heldCourses";
import { Locale } from "@/lib/i18n";

export interface HeldCourseTranslation {
  title: string;
  categoryName: string;
  date: string;
  year: string;
  location: string;
  city: string;
  partner?: string;
  instructor?: string;
  audience: string;
  shortDesc: string;
  fullDesc: string;
  topics: string[];
  achievements: string[];
  keyPoints?: { title: string; desc: string }[];
}

export const HELD_COURSES_TRANSLATIONS: Record<string, Record<Locale, Partial<HeldCourseTranslation>>> = {
  "held-ai-asia-water-desalination": {
    en: {
      title: "20-Hour AI Workshop & Specialized Agent Design for Finance, Budgeting & Strategic Planning at Asia Water Desalination Co.",
      categoryName: "Water, Energy & Financial Engineering",
      date: "September 2026 (20-Hour Intensive Program)",
      year: "2026",
      location: "Asia Water Engineering Development Training Center (On-Premise)",
      city: "Corporate / On-Premise",
      partner: "Asia Water Engineering Development Co. (Largest Seawater Desalination Complex)",
      instructor: "Dr. Mehran Shirzad",
      audience: "C-Level Executives, Directors & Senior Analysts in Finance, Budgeting & Systems Planning",
      shortDesc: "Comprehensive 20-hour applied AI training and specialized autonomous agent engineering for finance, budgeting, and planning departments at Asia Water Desalination Co.",
      fullDesc: "An intensive 20-hour corporate program delivered for executives and senior analysts of Asia Water Engineering Development Co. The curriculum focused on deploying autonomous multi-agent workflows to automate budget deviation tracking, financial forecasting, cost variance analysis, and data-driven executive decision-making.",
      topics: [
        "Core and advanced enterprise AI models & computational architectures",
        "Enterprise-grade prompt engineering and context orchestration",
        "Autonomous agent architectures (AI Agents) for industrial operations",
        "Specialized agent engineering for industrial accounting & financial units",
        "Designing intelligent agents for budget auditing & cost control",
        "Applying AI agents to corporate project management & scheduling",
        "Customizing local assistants on internal financial spreadsheets & secure data",
      ],
      achievements: [
        "Participants mastered core and advanced AI paradigms tailored to infrastructure industries",
        "Hands-on operational skill in architecting custom agents for financial and budgeting workflows",
        "Significant reduction in complex financial reporting and scheduling turnaround times",
        "Delivery of a localized AI deployment roadmap for Asia Water Engineering Development Co.",
      ],
      keyPoints: [
        {
          title: "Financial & Budget Agent Engineering",
          desc: "Operational design of autonomous agents to audit accounting balances, monitor expense flows, and identify budget variances.",
        },
        {
          title: "Planning Department Intelligent Automation",
          desc: "Deploying automated assistants to evaluate project milestones, operational forecasts, and executive resource decisions.",
        },
        {
          title: "20 Hours of Applied Mentorship",
          desc: "A progressive curriculum spanning foundational AI literacy to on-premise execution of custom multi-agent workflows.",
        },
      ],
    },
    fa: {},
    ar: {
      title: "دورة تدريبية متقدمة (٢٠ ساعة) في الذكاء الاصطناعي وتصميم وكلاء المالية والموازنة والتخطيط لشركة آسيا لتحلية المياه",
      categoryName: "قطاع المياه، الطاقة والإدارة المالية",
      date: "سبتمبر ٢٠٢٦ (برنامج مكثف ٢٠ ساعة)",
      year: "٢٠٢٦",
      location: "قاعة تدريب شركة تطوير هندسة مياه آسيا (حضورياً وتطبيقياً)",
      city: "حضوري / تدريب مؤسسي",
      partner: "شركة تطوير هندسة مياه آسيا (أكبر مجمع لتحلية مياه البحر)",
      instructor: "د. مهران شيرزاد",
      audience: "المديرون التنفيذيون، رؤساء الأقسام وخبراء المالية والموازنة والتخطيط",
      shortDesc: "دورة تخصصية شاملة (٢٠ ساعة) لتعليم الذكاء الاصطناعي وهندسة الوكلاء الذاتيين لأقسام المالية والموازنة والتخطيط في شركة آسيا لتحلية المياه.",
      fullDesc: "برنامج تدريبي تطبيقي مكثف استمر ٢٠ ساعة لمديري وخبراء شركة تطوير هندسة مياه آسيا. ركزت الدورة على تدريب وتطوير وكلاء أذكياء لأتمتة فحص انحرافات الموازنة، وتسريع النمذجة المالية ودعم اتخاذ القرارات الاستراتيجية.",
      topics: [
        "مفاهيم الذكاء الاصطناعي والنماذج الحاسوبية الحديثة للمؤسسات",
        "هندسة الأوامر المتقدمة واختيار النماذج المناسبة لبيئة العمل",
        "أسس وهيكلية عمل الوكلاء الأذكياء المستقلين (AI Agents)",
        "برمجة وتطوير وكلاء مخصصين للإدارات المالية والمحاسبة الصناعية",
        "تصميم وكلاء لتحليل الموازنات، تدقيق التكاليف ومطابقة البيانات",
        "توظيف وكلاء الذكاء الاصطناعي في إدارة المشاريع والتخطيط المؤسسي",
        "تخصيص مساعدات ذكية مدربة على السجلات والبيانات المالية للشركة",
      ],
      achievements: [
        "إتقان المتدربين لمبادئ وتطبيقات الذكاء الاصطناعي الملائمة لقطاعات البنية التحتية",
        "اكتساب مهارات عملية في تصميم وبناء وكلاء متخصصين للمالية والموازنة",
        "تقليص ملحوظ في زمن إعداد وتحليل التقارير المالية المعقدة",
        "تقديم نموذج تطبيقي مخصص لنشر أدوات الذكاء الاصطناعي في الشركة",
      ],
      keyPoints: [
        {
          title: "وكلاء المحاسبة والموازنة",
          desc: "تصميم سيناريوهات تشغيلية لتحليل السجلات المالية، ضبط النفقات واكتشاف الفروقات المالية آلياً.",
        },
        {
          title: "أتمتة إدارة التخطيط",
          desc: "توظيف الوكلاء المستقلين لمتابعة نسب الإنجاز والتخطيط التشغيلي ودعم اتخاذ القرار المؤسسي.",
        },
        {
          title: "تدريب عملي متقدم لمدة ٢٠ ساعة",
          desc: "مسار تدريبي شامل من المفاهيم الأساسية حتى بناء واختبار الوكلاء داخل بيئة عمل المؤسسة.",
        },
      ],
    },
  },
  "held-ai-procurement-behshahr": {
    en: {
      title: "On-Premise AI Masterclass in Corporate Procurement for Behshahr Industrial Development Group",
      categoryName: "Procurement, Logistics & Supply Chain",
      date: "September 2026 (8-Hour In-Person Workshop)",
      year: "2026",
      location: "Behshahr Industrial Development Conference Center (In-Person)",
      city: "In-Person / Workshop",
      partner: "Behshahr Industrial Development Group",
      instructor: "Dr. Mehran Shirzad",
      audience: "Procurement Directors, Supply Chain Managers & Purchasing Specialists",
      shortDesc: "Specialized 8-hour hands-on training on enterprise AI applications in procurement, supplier evaluation, and building custom autonomous purchasing agents.",
      fullDesc: "Delivered on-site at Behshahr Industrial Development Group to empower supply chain and purchasing squads. The masterclass provided step-by-step guidance on integrating autonomous agents into enterprise procurement pipelines, RFQ parsing, supplier scoring, and automating contract workflows.",
      topics: [
        "Core AI concepts and modern enterprise LLM capabilities",
        "Taxonomy of AI models and their exact operational fit in procurement",
        "Autonomous AI agents in enterprise purchasing & logistics",
        "Architecting custom procurement agents for RFQs, invoicing & vendor vetting",
      ],
      achievements: [
        "Empowering procurement staff with hands-on AI agent tools",
        "Precise understanding of AI architectures for procurement automation",
        "Mastering the configuration of custom agents for RFQ parsing and supplier comparisons",
        "Identifying supply bottlenecks and deploying AI patterns to increase corporate purchasing speed",
      ],
      keyPoints: [
        {
          title: "AI Agents in Corporate Procurement",
          desc: "Investigating the role of autonomous agents in analyzing quotation requests, screening vendors, and monitoring order lifecycles.",
        },
        {
          title: "Automated Supply Chain Workflows",
          desc: "Leveraging intelligent systems to reduce turnaround delays and optimize commercial vendor selection.",
        },
      ],
    },
    fa: {},
    ar: {
      title: "ورشة عمل حضورية في تطبيقات الذكاء الاصطناعي للمشتريات وسلاسل الإمداد لمجموعة بهشهر الصناعية",
      categoryName: "المشتريات، التوريد وإدارة سلاسل الإمداد",
      date: "سبتمبر ٢٠٢٦ (ورشة حضورية ٨ ساعات)",
      year: "٢٠٢٦",
      location: "قاعة مؤتمرات مجموعة بهشهر الصناعية (حضورياً)",
      city: "حضوري / ورشة تفاعلية",
      partner: "مجموعة بهشهر للتطوير الصناعي",
      instructor: "د. مهران شيرزاد",
      audience: "مديرو المشتريات، مسؤولو سلاسل الإمداد وخبراء التوريد",
      shortDesc: "برنامج عملي مكثف لمدة ٨ ساعات لتدريب فرق المشتريات وسلاسل الإمداد على نماذج الذكاء الاصطناعي وبناء وكلاء مؤتمتين لتقييم الموردين ومقارنة العروض.",
      fullDesc: "ورشة حضورية متخصصة عقدت في مقر مجموعة بهشهر لتمكين كوادر المشتريات من استثمار الذكاء الاصطناعي؛ شملت تدريباً عملياً على أتمتة فحص عروض الأسعار، غربلة الموردين وتسريع دورات الشراء المؤسسية.",
      topics: [
        "المفاهيم الأساسية للذكاء الاصطناعي واستخداماته المؤسسية",
        "أنواع النماذج الذكية وتوظيفها الأمثل في دورات المشتريات",
        "وكلاء الذكاء الاصطناعي في إدارة التوريد والمخزون",
        "تصميم وبرمجة وكلاء لتحليل استدراج العروض، الفواتير ومقارنة الأسعار",
      ],
      achievements: [
        "تمكين كوادر المشتريات من استخدام أدوات ووكلاء الذكاء الاصطناعي بكفاءة",
        "تحديد النماذج المناسبة لأتمتة العمليات التكرارية في إدارة التوريد",
        "إتقان بناء وكلاء لفحص عروض الأسعار والمراسلات التجارية آلياً",
        "معالجة اختناقات التوريد ورفع سرعة وإنتاجية المشتريات المؤسسية",
      ],
      keyPoints: [
        {
          title: "وكلاء الذكاء الاصطناعي للمشتريات",
          desc: "دراسة دور الوكلاء المستقلين في تحليل استدراج العروض، تقييم عروض الموردين وتتبع خطط التوريد.",
        },
        {
          title: "أتمتة تدفقات سلاسل الإمداد",
          desc: "استخدام الأنظمة الذكية لتقليص أوقات الانتظار واختيار أفضل شروط التعاقد التجاري.",
        },
      ],
    },
  },
  "held-ai-ecommerce-center": {
    en: {
      title: "AI Masterclass for E-Commerce Development Center Leaders & Specialists",
      categoryName: "E-Commerce & Digital Economy",
      date: "August 2026 (12-Hour Program)",
      year: "2026",
      location: "Auditorium of E-Commerce Development Center",
      city: "On-Premise / Hybrid",
      partner: "E-Commerce Development Center",
      instructor: "Dr. Mehran Shirzad",
      audience: "Directors, Senior Product Managers & Digital Transformation Leads",
      shortDesc: "Applied executive workshop covering agent-driven digital commerce, fraud detection, and regulatory AI compliance.",
      fullDesc: "A dedicated 12-hour masterclass empowering leadership and product teams at the E-Commerce Development Center with autonomous agent frameworks, intelligent trust certification, and conversational commerce technologies.",
      topics: [
        "Architecting autonomous conversational agents for online retail",
        "Predictive fraud prevention & automated transaction screening",
        "Personalization algorithms and real-time behavioral telemetry",
        "Compliance guidelines for trustworthy enterprise AI in e-commerce",
      ],
      achievements: [
        "Formulation of an AI roadmap tailored for commercial platforms",
        "Standard operating guidelines for regulatory AI deployment",
        "Prototypes of automated customer service dispute resolution agents",
      ],
    },
    fa: {},
    ar: {
      title: "دورة الذكاء الاصطناعي لمديري وخبراء مركز تنمية التجارة الإلكترونية",
      categoryName: "التجارة الإلكترونية والاقتصاد الرقمي",
      date: "أغسطس ٢٠٢٦ (برنامج ١٢ ساعة)",
      year: "٢٠٢٦",
      location: "قاعة مركز تنمية التجارة الإلكترونية",
      city: "حضوري / مدمج",
      partner: "مركز تنمية التجارة الإلكترونية",
      instructor: "د. مهران شيرزاد",
      audience: "المديرون، مديرو المنتجات الرقمية وقادة التحول الرقمي",
      shortDesc: "ورشة عمل تنفيذية تغطي التجارة الرقمية الموجهة بالوكلاء الأذكياء، كشف الاحتيال والامتثال التنظيمي للذكاء الاصطناعي.",
      fullDesc: "برنامج تدريبي متقدم استمر ١٢ ساعة لتمكين الإدارات التنفيذية في مركز تنمية التجارة الإلكترونية من توظيف تقنيات الوكلاء الأذكياء، معايير الثقة الرقمية والتجارة التحاورية.",
      topics: [
        "هندسة وكلاء المحادثة الذاتيين لقطاع التجزئة الرقمي",
        "الكشف الاستباقي عن الاحتيال والتدقيق الآلي للمعاملات",
        "خوارزميات التخصيص والتحليل الفوري لسلوك المتسوقين",
        "معايير الحوكمة والامتثال للذكاء الاصطناعي الأخلاقي في التجارة",
      ],
      achievements: [
        "صياغة خريطة طريق لاعتماد الذكاء الاصطناعي في المنصات التجارية",
        "إعداد أدلة إرشادية لاستخدام الذكاء الاصطناعي في الخدمات الحكومية الرقمية",
        "بناء نماذج أولية لوكلاء معالجة شكاوى العملاء وحل النزاعات آلياً",
      ],
    },
  },
  "held-ai-polymer-industry": {
    en: {
      title: "AI & Process Automation Masterclass for Petrochemical & Polymer Guild",
      categoryName: "Petrochemicals & Heavy Industry",
      date: "July 2026",
      year: "2026",
      location: "Industrial Guild Headquarters",
      city: "Industrial Center",
      partner: "Polymer & Petrochemical Industries Guild",
      instructor: "Dr. Shahriar Karimi",
      audience: "Plant Managers, Process Engineers & Production Supervisors",
      shortDesc: "Industrial AI applications for predictive maintenance, process yield optimization, and raw material inventory forecasting.",
      fullDesc: "Hands-on corporate program focused on machine learning applications in polymer production lines, energy efficiency forecasting, and automated supply tracking.",
      topics: [
        "Predictive maintenance models for manufacturing equipment",
        "LLM-driven analysis of chemical safety data sheets (MSDS)",
        "Material waste minimization algorithms",
        "Optimizing thermal processing and yield forecasting",
      ],
      achievements: [
        "Up to 15% reduction in simulated plant downtime through predictive maintenance",
        "Automating compliance reporting for environmental and safety standards",
        "Establishment of an in-house AI champions taskforce",
      ],
    },
    fa: {},
    ar: {
      title: "ورشة الذكاء الاصطناعي وأتمتة العمليات لنقابة الصناعات البتروكيماوية والبوليمرية",
      categoryName: "البتروكيماويات والصناعات الثقيلة",
      date: "يوليو ٢٠٢٦",
      year: "٢٠٢٦",
      location: "مقر النقابة الصناعية",
      city: "مجمع صناعي",
      partner: "نقابة الصناعات البوليمرية والبتروكيماوية",
      instructor: "د. شهريار كريمي",
      audience: "مديرو المصانع، مهندسو العمليات ومشرفو خطوط الإنتاج",
      shortDesc: "تطبيقات الذكاء الاصطناعي الصناعي للصيانة التنبؤية، تحسين كفاءة الإنتاج والتنبؤ بمخزون المواد الخام.",
      fullDesc: "برنامج تدريبي صناعي ركز على خوارزميات التعلم الآلي في خطوط إنتاج البوليمر، خفض استهلاك الطاقة وأتمتة متابعة سلاسل التوريد الكيميائية.",
      topics: [
        "نماذج الصيانة التنبؤية للآلات ومعدات المصانع",
        "استخراج البيانات وتحليل تقارير السلامة الكيميائية بنماذج LLM",
        "خوارزميات تقليص الهدر في المواد الأولية",
        "تحسين كفاءة المعالجة الحرارية والتنبؤ بمعدلات الإنتاج",
      ],
      achievements: [
        "خفض فترات التوقف غير المخطط لها بنسبة تصل إلى ١٥٪ عبر الصيانة التنبؤية",
        "أتمتة إعداد تقارير الامتثال البيئي ومعايير السلامة المهنية",
        "تأهيل فريق داخلي لقيادة مبادرات الذكاء الاصطناعي في المنشآت",
      ],
    },
  },
  "held-ai-tourism-shiraz": {
    en: {
      title: "Generative AI in Hospitality & Tourism Management",
      categoryName: "Hospitality & Tourism",
      date: "June 2026",
      year: "2026",
      location: "Grand Tourism Conference Hall",
      city: "Hospitality Hub",
      partner: "Hospitality & Tourism Association",
      instructor: "Dr. Mehran Shirzad",
      audience: "Hotel General Managers, Travel Agency Owners & Tourism Strategists",
      shortDesc: "Deploying multi-lingual conversational concierges, dynamic pricing algorithms, and personalized travel curation.",
      fullDesc: "Specialized executive workshop highlighting how generative AI and predictive analytics revolutionize guest experiences, dynamic room yields, and automated marketing campaigns.",
      topics: [
        "Multilingual conversational concierges across digital channels",
        "Dynamic pricing optimization based on demand elasticity",
        "Automated visual itinerary and promotional content generation",
        "Guest sentiment telemetry and reputation management",
      ],
      achievements: [
        "Deployment of multilingual reservation assistant blueprints",
        "Increasing booking conversion rates via personalized dynamic offers",
        "Bilingual digital strategy roadmap for regional hospitality brands",
      ],
    },
    fa: {},
    ar: {
      title: "الذكاء الاصطناعي التوليدي في إدارة الضيافة والخدمات السياحية",
      categoryName: "الضيافة والسياحة",
      date: "يونيو ٢٠٢٦",
      year: "٢٠٢٦",
      location: "قاعة المؤتمرات السياحية الكبرى",
      city: "مركز المؤتمرات",
      partner: "اتحاد الفنادق والسياحة",
      instructor: "د. مهران شيرزاد",
      audience: "مديرو الفنادق، أصحاب وكالات السفر واستراتيجيو السياحة",
      shortDesc: "نشر المساعدات الذكية متعددة اللغات لخدمة النزلاء، خوارزميات التسعير الديناميكي وتصميم البرامج السياحية المخصصة.",
      fullDesc: "ورشة عمل تنفيذية بينت كيف يساهم الذكاء الاصطناعي التوليدي والتحليل التنبؤي في تطوير تجربة الضيوف، تحسين إيرادات الحجوزات وأتمتة التسويق السياحي.",
      topics: [
        "مساعدات الاستقبال والضيافة متعددة اللغات عبر المنصات الرقمية",
        "تحسين التسعير الديناميكي للغرف وفق مؤشرات الطلب الموسمي",
        "إنتاج المحتوى البصري والمسارات السياحية الذكية آلياً",
        "تحليل مشاعر النزلاء وإدارة السمعة الرقمية للعلامة التجارية",
      ],
      achievements: [
        "تطبيق نماذج أولية لمساعدات الحجز والرد الآلي متعدد اللغات",
        "رفع معدلات تحويل الحجوزات عبر العروض التفاعلية المخصصة",
        "خريطة طريق استراتيجية للتحول الرقمي لقطاع الضيافة",
      ],
    },
  },
  "held-ai-kids-poorsina-school": {
    en: {
      title: "Young Innovators AI & Algorithmic Thinking Workshop at Poorsina Smart Academy",
      categoryName: "Kids & Youth Education",
      date: "May 2026",
      year: "2026",
      location: "Poorsina Computer & Robotics Lab",
      city: "Academic Campus",
      partner: "Poorsina Smart Academy",
      instructor: "Dr. Mehran Shirzad",
      audience: "Elementary & Middle School Students (Ages 9-14)",
      shortDesc: "Interactive workshop teaching youth how to build voice bots, train image classifiers, and script games with Scratch AI.",
      fullDesc: "A dynamic and joyful hands-on workshop guiding students to create their first machine learning projects without writing complex code, instilling algorithmic thinking and digital confidence.",
      topics: [
        "Foundational machine learning concepts explained through games",
        "Computer vision classification with Teachable Machine",
        "Interactive storytelling and AI game design in Scratch",
        "Digital safety and responsible AI exploration",
      ],
      achievements: [
        "Every student successfully deployed a working AI interactive game",
        "High engagement and active parental participation showcase",
        "Accredited junior certification from DigiNoron Academy",
      ],
    },
    fa: {},
    ar: {
      title: "ورشة الابتكار والتفكير الخوارزمي للأشبال في مدرسة بورسينار الذكية",
      categoryName: "تعليم الأطفال والناشئة",
      date: "مايو ٢٠٢٦",
      year: "٢٠٢٦",
      location: "مختبر الروبوتات والبرمجة",
      city: "المجمع التعليمي",
      partner: "مدرسة بورسينار الذكية",
      instructor: "د. مهران شيرزاد",
      audience: "طلاب المرحلتين الابتدائية والمتوسطة (٩-١٤ سنة)",
      shortDesc: "ورشة تفاعلية يتعلم فيها الصغار بناء المساعدات الصوتية، تدريب نماذج التعرف على الصور، وبرمجة الألعاب الذكية ببرنامج Scratch.",
      fullDesc: "برنامج تدريبي حيوي ومشوق قاد الطلاب لبناء أولى مشاريعهم في التعلم الآلي بدون تعقيد برمجيات الأكواد النصية، لغرس التفكير المنطقي والثقة الرقمية.",
      topics: [
        "مبادئ التعلم الآلي من خلال الألعاب التفاعلية الممتعة",
        "تدريب نماذج الرؤية الحاسوبية بواسطة Teachable Machine",
        "سرد القصص الرقمية وبرمجة الألعاب الذكية عبر Scratch",
        "الأمان الرقمي وأخلاقيات التعامل السليم مع الذكاء الاصطناعي",
      ],
      achievements: [
        "نجاح كل طالب في بناء وبرمجة لعبة ذكية تفاعلية متكاملة",
        "تفاعل طلابي استثنائي مع معرض للمشاريع بحضور أولياء الأمور",
        "شهادة Junior معتمدة من أكاديمية ديجي نورون",
      ],
    },
  },
  "held-ai-urban-transportation-shiraz": {
    en: {
      title: "Intelligent Traffic Management & Predictive Analytics for Urban Mobility Authority",
      categoryName: "Smart Cities & Urban Transport",
      date: "April 2026",
      year: "2026",
      location: "Transportation Operations & Traffic Command Center",
      city: "Operations Command Center",
      partner: "Urban Transportation & Mobility Authority",
      instructor: "Dr. Shahriar Karimi",
      audience: "Traffic Engineers, Smart City Specialists & Dispatch Directors",
      shortDesc: "Deploying deep learning for traffic flow optimization, signal control forecasting, and transit fleet dispatch.",
      fullDesc: "Technical training masterclass on processing camera feeds, real-time vehicle counting, automated congestion alleviation, and transit schedule optimization using neural networks.",
      topics: [
        "Computer vision frameworks for real-time intersection monitoring",
        "Time-series modeling for congestion bottlenecks and signal timing",
        "Automated public transit fleet balancing and passenger telemetry",
        "Edge AI computing for roadside traffic infrastructure",
      ],
      achievements: [
        "Pilot deployment of an automated intersection signal adjustment model",
        "Enhanced predictive visibility into rush-hour traffic choke points",
        "Comprehensive urban AI data governance blueprint",
      ],
    },
    fa: {},
    ar: {
      title: "إدارة المرور الذكية والتحليلات التنبؤية لهيئة النقل والحركة الحضرية",
      categoryName: "المدن الذكية والنقل الحضري",
      date: "أبريل ٢٠٢٦",
      year: "٢٠٢٦",
      location: "مركز التحكم والعمليات المرورية",
      city: "مركز القيادة الميدانية",
      partner: "هيئة النقل والمرور الحضرية",
      instructor: "د. شهريار كريمي",
      audience: "مهندسو المرور، خبراء المدن الذكية ومسؤولو تشغيل الأساطيل",
      shortDesc: "توظيف التعلم العميق لتحسين تدفق حركة السير، التنبؤ بضبط الإشارات الضوئية وتوجيه أساطيل النقل العام.",
      fullDesc: "ورشة فنية متقدمة حول معالجة بث الكاميرات المرورية، العد التلقائي للمركبات، حل الاختناقات المرورية آلياً وجدولة حافلات النقل بالشبكات العصبية.",
      topics: [
        "أطر الرؤية الحاسوبية لمراقبة التقاطعات المرورية لحظياً",
        "النمذجة التنبؤية للسلاسل الزمنية لتقدير أوقات الذروة",
        "إدارة وتوازن أسطول النقل العام بناءً على كثافة الركاب",
        "الحوسبة الطرفية (Edge AI) لأنظمة التحكم المروري الذكية",
      ],
      achievements: [
        "بناء نموذج تجريبي لضبط توقيت الإشارات الضوئية ذاتياً",
        "تعزيز دقة التنبؤ بالازدحامات وتوجيه الفرق الميدانية استباقياً",
        "وثيقة حوكمة شاملة لبيانات النقل الذكي للمدينة",
      ],
    },
  },
  "held-ai-house-shiraz-launch": {
    en: {
      title: "Keynote & Applied Masterclasses at the Regional AI Hub Launch",
      categoryName: "Ecosystem Launch & Public Keynote",
      date: "March 2026",
      year: "2026",
      location: "Central Innovation & Technology Hall",
      city: "Innovation Center",
      partner: "AI Hub & Regional Innovation Center",
      instructor: "Dr. Mehran Shirzad",
      audience: "Tech Founders, University Researchers & Corporate Innovation Officers",
      shortDesc: "Inaugural keynote and practical workshops presenting autonomous agent ecosystems and regional AI commercialization pathways.",
      fullDesc: "DigiNoron was selected as the flagship academic partner to deliver the opening keynote and interactive masterclasses for hundreds of founders, researchers, and enterprise stakeholders celebrating the launch of the Regional AI Innovation Hub.",
      topics: [
        "The shift from static models to autonomous enterprise swarms",
        "Commercializing AI research in high-value local sectors",
        "On-Premise infrastructure deployment vs public cloud economics",
        "Fostering next-gen engineering talent in generative AI",
      ],
      achievements: [
        "Live technical keynote presented to over 400 technology leaders",
        "Formalization of cooperative training partnerships with 5 corporate entities",
        "Launch of the first regional AI Agent development cohort",
      ],
    },
    fa: {},
    ar: {
      title: "الكلمة الرئيسية والورش التطبيقية في افتتاح مركز الابتكار وحاضنة الذكاء الاصطناعي",
      categoryName: "تدشين بيئة الابتكار والندوات العامة",
      date: "مارس ٢٠٢٦",
      year: "٢٠٢٦",
      location: "قاعة الابتكار والتكنولوجيا المركزية",
      city: "مركز الابتكار",
      partner: "دار الذكاء الاصطناعي ومركز الابتكار",
      instructor: "د. مهران شيرزاد",
      audience: "مؤسسو الشركات الناشئة، باحثو الجامعات ومديرو الابتكار بالشركات",
      shortDesc: "الكلمة الافتتاحية والورش العملية حول منظومات الوكلاء المستقلين ومسارات التسويق التجاري للذكاء الاصطناعي.",
      fullDesc: "اختير ديجي نورون كشريك أكاديمي رئيسي لإلقاء الكلمة الافتتاحية وتقديم ورش عمل تطبيقية لمئات المبتكرين والباحثين ومسؤولي المؤسسات بمناسبة افتتاح المركز الإقليمي للذكاء الاصطناعي.",
      topics: [
        "التحول من النماذج اللغوية البسيطة إلى أسراب الوكلاء المؤتمتة",
        "تحويل البحوث التقنية إلى منتجات تجارية ذات قيمة مضافة",
        "مقارنة تكاليف البنية التحتية المحلية (On-Premise) مقابل السحابية",
        "تمكين ورعاية الكوادر الهندسية الصاعدة في الذكاء الاصطناعي",
      ],
      achievements: [
        "إلقاء الكلمة الرئيسية أمام أكثر من ٤٠٠ شخصية من قادة التكنولوجيا",
        "توقيع مذكرات تفاهم تدريبية مع ٥ مؤسسات صناعية وتجارية",
        "إطلاق أول دفعة لتأهيل مطوري وكلاء الذكاء الاصطناعي بالمنطقة",
      ],
    },
  },
};

export function getLocalizedHeldCourse(course: HeldCourse, locale: Locale): HeldCourse {
  if (locale === "fa") {
    return course;
  }

  const translation = HELD_COURSES_TRANSLATIONS[course.id]?.[locale];

  let instructorName = course.instructor;
  if (translation?.instructor) {
    instructorName = translation.instructor;
  } else if (course.instructor === "دکتر مهران شیرزاد") {
    instructorName = locale === "ar" ? "د. مهران شيرزاد" : "Dr. Mehran Shirzad";
  } else if (course.instructor === "دکتر شهریار کریمی") {
    instructorName = locale === "ar" ? "د. شهريار كريمي" : "Dr. Shahriar Karimi";
  } else if (course.instructor === "دکتر علی امیری") {
    instructorName = locale === "ar" ? "د. علي أميري" : "Dr. Ali Amiri";
  } else if (course.instructor === "گروه تخصصی دیجی نورون") {
    instructorName = locale === "ar" ? "فريق ديجي نورون المتخصص" : "DigiNoron Specialist Team";
  }

  if (!translation) {
    return {
      ...course,
      instructor: instructorName,
    };
  }

  return {
    ...course,
    title: translation.title || course.title,
    categoryName: translation.categoryName || course.categoryName,
    date: translation.date || course.date,
    year: translation.year || course.year,
    location: translation.location || course.location,
    city: translation.city || course.city,
    partner: translation.partner !== undefined ? translation.partner : course.partner,
    instructor: instructorName,
    audience: translation.audience || course.audience,
    shortDesc: translation.shortDesc || course.shortDesc,
    fullDesc: translation.fullDesc || course.fullDesc,
    topics: translation.topics || course.topics,
    achievements: translation.achievements || course.achievements,
    keyPoints: translation.keyPoints || course.keyPoints,
  };
}
