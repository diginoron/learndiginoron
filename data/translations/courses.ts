import { Course } from "@/data/courses";
import { Locale } from "@/lib/i18n";

export interface CourseTranslation {
  title: string;
  categoryName: string;
  targetAudience: string;
  shortDesc: string;
  fullDesc: string;
  level: string;
  duration: string;
  price: string;
  badge?: string;
  topics: string[];
  prerequisites: string;
  instructorRole: string;
  features: string[];
}

export const COURSE_TRANSLATIONS: Record<string, Record<Locale, Partial<CourseTranslation>>> = {
  "ai-for-kids-teens-starter": {
    en: {
      title: "Foundations of AI & Algorithmic Logic for Kids (Ages 8-12)",
      categoryName: "Kids & Teens",
      targetAudience: "Ages 8 to 12",
      shortDesc: "Fun-filled exploration of machine learning, interactive bots, and visual game development.",
      fullDesc: "An exciting gateway into machine learning, computer vision, and speech recognition through visual coding with Scratch and Teachable Machine.",
      level: "Beginner",
      duration: "8 hours (4 sessions)",
      price: "Inquire for Rates",
      badge: "Top Youth Choice",
      topics: [
        "AI concepts explained in simple, playful terms",
        "Computer vision & audio models with Teachable Machine",
        "Building smart interactive games in Scratch",
        "Safety and ethical principles of digital media",
      ],
      prerequisites: "Familiarity with basic computer and mouse usage",
      instructorRole: "Senior Mentor in Youth Computer Science & AI",
      features: [
        "100% project-based & playful curriculum",
        "Official certificate from DigiNoron Academy",
        "Hands-on development of 3 interactive games",
        "Dedicated parental progress reports",
      ],
    },
    fa: {},
    ar: {
      title: "أساسيات الذكاء الاصطناعي والتفكير الخوارزمي للأطفال (٨-١٢ سنة)",
      categoryName: "الأطفال واليافعون",
      targetAudience: "الأعمار من ٨ إلى ١٢ عاماً",
      shortDesc: "استكشاف تفاعلي وممتع لمفاهيم التعلم الآلي، بناء البوتات والألعاب الذكية بالبرمجة المرئية.",
      fullDesc: "دورة تفاعلية مشوقة يتعلم فيها الطفل مبادئ الرؤية الحاسوبية والتعرف على الصوت وبناء ألعاب تفاعلية دون تعقيدات برمجية.",
      level: "مبتدئ",
      duration: "٨ ساعات (٤ جلسات)",
      price: "حسب الاستفسار",
      badge: "الأكثر إقبالاً للأطفال",
      topics: [
        "مبادئ الذكاء الاصطناعي بأسلوب مبسط وممتع",
        "نماذج التعرف على الصور والصوت عبر Teachable Machine",
        "برمجة ألعاب ذكية تفاعلية باستخدام Scratch",
        "أخلاقيات الاستخدام الآمن للإنترنت والذكاء الاصطناعي",
      ],
      prerequisites: "معرفة أولية باستخدام الحاسوب",
      instructorRole: "خبير وموجه في علوم الحاسوب والذكاء الاصطناعي للصغار",
      features: [
        "منهج تفاعلي قائم على المشاريع بنسبة ١٠٠٪",
        "شهادة معتمدة من أكاديمية ديجي نورون",
        "تصميم وبرمجة ٣ ألعاب ذكية خلال الدورة",
        "تقارير دورية لأولياء الأمور عن تقدم الطالب",
      ],
    },
  },
  "ai-for-managers-executives": {
    en: {
      title: "Strategic AI for Executives & Board Members",
      categoryName: "Corporate & Executive",
      targetAudience: "CEOs, Directors, Innovation Leaders & Senior Managers",
      shortDesc: "Developing enterprise AI strategy, orchestrating digital transformation, and deploying autonomous agent ecosystems.",
      fullDesc: "A high-impact executive program equipping C-suite leadership with strategic frameworks to assess AI readiness, audit process gaps via APQC, and drive sustainable enterprise ROI.",
      level: "Advanced / Executive",
      duration: "16 hours (4 workshops)",
      price: "Inquire for Enterprise Quotation",
      badge: "Flagship Corporate Program",
      topics: [
        "The Paradigm Shift: From Automation to Autonomous Multi-Agents",
        "APQC Framework for Enterprise AI Process Auditing",
        "Data Governance, Privacy & On-Premise AI Deployment",
        "Evaluating AI Investment Portfolios & Measuring ROI",
      ],
      prerequisites: "Managerial experience in corporate strategy or operations",
      instructorRole: "Chief AI Strategist & Enterprise Transformation Lead",
      features: [
        "Tailored executive case studies from regional enterprises",
        "Interactive AI roadmap template based on APQC",
        "Executive roundtable and networking sessions",
        "Official enterprise certification",
      ],
    },
    fa: {},
    ar: {
      title: "الذكاء الاصطناعي الاستراتيجي للمديرين التنفيذيين وصناع القرار",
      categoryName: "التدريب المؤسسي والتنفيذي",
      targetAudience: "المديرون التنفيذيون، قادة الابتكار ومديرو العمليات",
      shortDesc: "صياغة استراتيجية الذكاء الاصطناعي المؤسسية، قيادة التحول الرقمي ونشر أنظمة الوكلاء المستقلين.",
      fullDesc: "برنامج تدريبي متقدم للإدارات العليا لتحديد الأولويات، تدقيق العمليات بمعايير APQC، وبناء مشاريع ذكاء اصطناعي ذات عائد استثماري استثنائي.",
      level: "متقدم / تنفيذي",
      duration: "١٦ ساعة (٤ ورش)",
      price: "عرض فني للمؤسسات",
      badge: "البرنامج التنفيذي الأبرز",
      topics: [
        "التحول الجذري: من البرمجيات التقليدية إلى شبكات الوكلاء المستقلين",
        "إطار عمل APQC لتشخيص العمليات المؤهلة للأتمتة",
        "حوكمة البيانات، الخصوصية ومتطلبات النشر On-Premise",
        "حساب العائد الاستثماري (ROI) للمشاريع التقنية",
      ],
      prerequisites: "خبرة إدارية في قيادة الفرق أو العمليات",
      instructorRole: "كبير مستشاري التحول الذكي واستراتيجية الذكاء الاصطناعي",
      features: [
        "دراسات حالة واقعية من كبرى الشركات الإقليمية",
        "قالب جاهز لخريطة طريق الذكاء الاصطناعي المؤسسية",
        "جلسات نقاش مغلقة واستشارات استراتيجية",
        "شهادة تدريب تنفيذي دولية معتمدة",
      ],
    },
  },
  "enterprise-automation-ai": {
    en: {
      title: "Business Process Automation (BPA) with AI Multi-Agents",
      categoryName: "Corporate & Technical",
      targetAudience: "Business Analysts, System Architects & Process Leads",
      shortDesc: "Architecting end-to-end autonomous agents for finance, supply chain, and customer service automation.",
      fullDesc: "Hands-on engineering masterclass on designing, benchmarking, and integrating multi-agent LLM systems with legacy databases and enterprise ERPs.",
      level: "Intermediate to Advanced",
      duration: "24 hours (8 sessions)",
      price: "Inquire for Rates",
      badge: "High Industry Demand",
      topics: [
        "Multi-agent system topologies (LangGraph, CrewAI, AutoGen)",
        "Enterprise Knowledge Retrieval (Advanced RAG & Vector Stores)",
        "API Orchestration & Tool Calling for ERP Integration",
        "Local LLM Deployment, Quantization & Latency Optimization",
      ],
      prerequisites: "Basic Python programming and familiarity with enterprise data flows",
      instructorRole: "Lead AI Engineer & Enterprise Automation Architect",
      features: [
        "Live development of 2 production-ready agents",
        "Production deployment blueprint on local servers",
        "Access to private code repositories and architectures",
        "1-on-1 technical mentoring",
      ],
    },
    fa: {},
    ar: {
      title: "أتمتة العمليات التجارية (BPA) بشبكات وكلاء الذكاء الاصطناعي",
      categoryName: "التدريب المؤسسي والتقني",
      targetAudience: "محللو الأعمال، مهندسو النظم ومطورو البرمجيات",
      shortDesc: "هندسة وبناء وكلاء مستقلين لأتمتة العمليات المالية، المشتريات وإدارة علاقات العملاء.",
      fullDesc: "ورشة عمل تقنية مكثفة لتصميم ونشر أنظمة الوكلاء المتعددة ودمجها مع قواعد البيانات وأنظمة ERP القائمة في الشركات.",
      level: "متوسط إلى متقدم",
      duration: "٢٤ ساعة (٨ جلسات)",
      price: "حسب الاستفسار",
      badge: "طلب مرتفع في السوق",
      topics: [
        "هيكلية منظومات الوكلاء المتعددين (Multi-Agents)",
        "استرجاع المعرفة المؤسسية المتقدم (Advanced RAG)",
        "استدعاء الأدوات وربط واجهات برمجة التطبيقات (APIs)",
        "تثبيت وتشغيل النماذج محلياً (Local LLMs) وتأمين البيانات",
      ],
      prerequisites: "إلمام بلغة بايثون والمفاهيم الأساسية للبيانات",
      instructorRole: "كبير مهندسي الذكاء الاصطناعي وأتمتة العمليات",
      features: [
        "بناء وكيلين عمليين جاهزين للنشر خلال الدورة",
        "خطة جاهزة للنشر على الخوادم المحلية الآمنة",
        "الوصول للشيفرات المصدرية والمكتبات البرمجية",
        "جلسات إرشاد وتوجيه تقني مخصصة",
      ],
    },
  },
};

export function getLocalizedCourse(course: Course, locale: Locale): Course {
  if (locale === "fa") {
    return course;
  }

  const translation = COURSE_TRANSLATIONS[course.slug]?.[locale];
  if (!translation) {
    return course;
  }

  return {
    ...course,
    title: translation.title || course.title,
    categoryName: translation.categoryName || course.categoryName,
    targetAudience: translation.targetAudience || course.targetAudience,
    shortDesc: translation.shortDesc || course.shortDesc,
    fullDesc: translation.fullDesc || course.fullDesc,
    level: (translation.level as any) || course.level,
    duration: translation.duration || course.duration,
    price: translation.price || course.price,
    badge: translation.badge || course.badge,
    topics: translation.topics || course.topics,
    prerequisites: translation.prerequisites || course.prerequisites,
    instructor: {
      ...course.instructor,
      role: translation.instructorRole || course.instructor.role,
    },
    features: translation.features || course.features,
  };
}
