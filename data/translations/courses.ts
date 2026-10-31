import { Course, CourseFormat, CourseInstructor } from "@/data/courses";
import { Locale } from "@/lib/i18n";

export interface CourseTranslation {
  title: string;
  categoryName: string;
  targetAudience: string;
  shortDesc: string;
  fullDesc: string;
  level: string;
  duration: string;
  sessionsCount?: string;
  price: string;
  badge?: string;
  topics: string[];
  prerequisites: string;
  instructorName: string;
  instructorRole: string;
  instructors?: CourseInstructor[];
  features: string[];
  formats?: CourseFormat[];
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
      instructorName: "Dr. Mehran Shirzad",
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
      instructorName: "د. مهران شيرزاد",
      instructorRole: "خبير وموجه في علوم الحاسوب والذكاء الاصطناعي للصغار",
      features: [
        "منهج تفاعلي قائم على المشاريع بنسبة ١٠٠٪",
        "شهادة معتمدة من أكاديمية ديجي نورون",
        "تصميم وبرمجة ٣ ألعاب ذكية خلال الدورة",
        "تقارير دورية لأولياء الأمور عن تقدم الطالب",
      ],
    },
  },
  "python-ai-teenagers": {
    en: {
      title: "Python Programming & Applied AI for Teens (Ages 13-18)",
      categoryName: "Kids & Teens",
      targetAudience: "Teens ages 13 to 18",
      shortDesc: "Comprehensive Python coding, neural networks intro, and computer vision & NLP bots.",
      fullDesc: "Designed for ambitious youth to master real Python coding and build intelligent vision, audio, and conversational algorithms.",
      level: "Intermediate",
      duration: "8 hours (4 sessions)",
      price: "Inquire for Rates",
      badge: "Teens Flagship",
      topics: [
        "Core Python programming fundamentals & structured problem solving",
        "Hands-on computer vision with OpenCV and NumPy",
        "Object detection and facial tracking mini-projects",
        "Introduction to Natural Language Processing (NLP)",
      ],
      prerequisites: "Keen interest in computer science and problem solving",
      instructorName: "Dr. Ali Amiri",
      instructorRole: "University Lecturer & Senior AI Researcher",
      features: [
        "Build a personal coding project portfolio",
        "Capstone AI hackathon showcase",
        "Small-group online and in-person cohorts",
        "Accredited bilingual certificate",
      ],
    },
    fa: {},
    ar: {
      title: "برمجة بايثون والذكاء الاصطناعي التطبيقي لليافعين (١٣-١٨ سنة)",
      categoryName: "الأطفال واليافعون",
      targetAudience: "اليافعون من ١٣ إلى ١٨ عاماً",
      shortDesc: "تعليم شامل للغة بايثون، الشبكات العصبية التأسيسية، وبناء روبوتات الرؤية الحاسوبية ومعالجة النصوص.",
      fullDesc: "صممت هذه الدورة خصيصاً لتمكين اليافعين من إتقان البرمجة الحقيقية بلغة بايثون وتطبيق خوارزميات ونماذج الذكاء الاصطناعي عملياً.",
      level: "متوسط",
      duration: "٨ ساعات (٤ جلسات)",
      price: "حسب الاستفسار",
      badge: "برنامج اليافعين الأبرز",
      topics: [
        "أساسيات البرمجة الشاملة بلغة Python",
        "تطبيقات مكتبات OpenCV وNumPy لمعالجة الصور",
        "بناء روبوت التعرف على الأجسام وتتبع العناصر",
        "مقدمة عملية في معالجة اللغات الطبيعية (NLP)",
      ],
      prerequisites: "شغف بالبرمجة والكمبيوتر",
      instructorName: "د. علي أميري",
      instructorRole: "محاضر جامعي وباحث في الذكاء الاصطناعي",
      features: [
        "بناء معرض مشاريع برمجية شخصي (Portfolio)",
        "المشاركة في الهاكاثون الختامي للمشاريع",
        "مجموعات صغيرة تفاعلية حضورياً وعن بعد",
        "شهادة تخرج ثنائية اللغة معتمدة",
      ],
    },
  },
  "generative-ai-for-executives": {
    en: {
      title: "Generative AI Masterclass for Executives & Business Leaders",
      categoryName: "Corporate Training",
      targetAudience: "C-Suite Executives, Directors & Business Owners",
      shortDesc: "Formulating enterprise AI roadmaps, process automation, and boosting cross-departmental team productivity.",
      fullDesc: "Designed for business leaders seeking to leverage Generative AI as a catalyst for growth, cost reduction, and comprehensive workflow automation.",
      level: "Executive / Advanced",
      duration: "8 hours (Focused Executive Masterclass)",
      sessionsCount: "4 two-hour sessions or 2 four-hour sessions",
      price: "Enterprise Quotation",
      badge: "C-Suite Priority",
      topics: [
        "AI concepts & fundamentals",
        "Introduction to the major types of AI models",
        "Professional AI usage beyond chatbots",
        "Prompt engineering for organizational units",
        "AI agents: from concept to building for organizational units",
        "Hands-on exercise: building an agent with Vibe Coding",
        "Multi-agent systems & their role in managing organizational operations",
        "Essential tools & toolkit for AI",
        "Organizational challenges in AI adoption & practical solutions",
        "How to make your organization smarter with AI: a practical guide",
      ],
      prerequisites: "Executive leadership or operational management experience",
      instructorName: "Dr. Mehran Shirzad",
      instructorRole: "Senior AI Strategist & Enterprise Transformation Lead",
      features: [
        "Dedicated organizational process audit for your enterprise",
        "Tailored 3-year AI transformation blueprint",
        "Interactive on-premise or online delivery",
        "6 months of strategic post-training consultation",
      ],
    },
    fa: {},
    ar: {
      title: "الدورة الشاملة في الذكاء الاصطناعي التوليدي للمديرين وقادة المؤسسات",
      categoryName: "التدريب المؤسسي",
      targetAudience: "المديرون التنفيذيون، أصحاب الأعمال وصناع القرار",
      shortDesc: "رسم خريطة طريق التحول الذكي، أتمتة العمليات ومضاعفة إنتاجية فرق العمل.",
      fullDesc: "برنامج مكثف للإدارات العليا للاستفادة من أدوات الذكاء الاصطناعي التوليدي كرافعة للنمو، خفض التكاليف التشغيلية وأتمتة الإجراءات المؤسسية.",
      level: "متقدم / تنفيذي",
      duration: "٨ ساعات (ورشة عمل تنفيذية مركزة)",
      sessionsCount: "٤ جلسة مدة كل منها ساعتان، أو جلستان مدة كل منهما ٤ ساعات",
      price: "عرض فني للمؤسسات",
      badge: "خاص بالقيادات التنفيذية",
      topics: [
        "مفاهيم وأساسيات الذكاء الاصطناعي",
        "التعريف بأنواع نماذج الذكاء الاصطناعي",
        "الاستخدام الاحترافي للذكاء الاصطناعي بما يتجاوز روبوتات الدردشة",
        "هندسة الأوامر (البرومبت) في الوحدات المؤسسية",
        "الوكلاء الأذكياء (الإيجنت): من المفهوم إلى البناء للوحدات المؤسسية",
        "تمرين عملي لبناء وكيل ذكي بتقنية Vibe Coding",
        "أنظمة الوكلاء المتعددة ودورها في إدارة الشؤون المؤسسية",
        "الأدوات اللازمة للذكاء الاصطناعي",
        "التحديات المؤسسية في تبني الذكاء الاصطناعي والحلول العملية",
        "كيف تجعل مؤسستك أذكى بالذكاء الاصطناعي؟ دليل عملي",
      ],
      prerequisites: "خبرة في الإدارة التنفيذية أو قيادة الأعمال",
      instructorName: "د. مهران شيرزاد",
      instructorRole: "استراتيجي الذكاء الاصطناعي وكبير مستشاري التحول المؤسسي",
      features: [
        "تشخيص مخصص لعمليات مؤسستكم",
        "خريطة طريق متكاملة لمدة ٣ سنوات",
        "تنفيذ ورش عمل حضورية أو افتراضية",
        "دعم استشاري مؤسسي مستمر لمدة ٦ أشهر",
      ],
    },
  },
  "enterprise-automation-ai": {
    en: {
      title: "Hands-on Enterprise Process Automation with AI & LLMs",
      categoryName: "Corporate Training",
      targetAudience: "Administrative, Finance, HR & Operations Teams",
      shortDesc: "Automating repetitive workflows, intelligent document extraction, and launching private organizational bots.",
      fullDesc: "In this corporate workshop, company staff learn how to connect modern AI tools to day-to-day office routines, achieving up to 5x acceleration.",
      level: "Intermediate",
      duration: "8 hours (Focused Corporate Masterclass)",
      price: "Enterprise Quotation",
      badge: "Productivity Booster",
      topics: [
        "Automating business correspondence & emails with LLMs",
        "Financial analytics & automated executive reporting",
        "Designing internal HR & customer support assistants",
        "Intelligent content generation & automated marketing pipelines",
      ],
      prerequisites: "General computer literacy and operational office familiarity",
      instructorName: "Dr. Shahriar Karimi",
      instructorRole: "Data Architect & Enterprise AI Automation Specialist",
      features: [
        "Customized scenarios reflecting company challenges",
        "Official DigiNoron Enterprise Certification",
        "Standard exercise templates & prompt playbooks",
        "Post-workshop technical advisory",
      ],
    },
    fa: {},
    ar: {
      title: "ورشة عمل أتمتة العمليات المؤسسية بالذكاء الاصطناعي ونماذج LLM",
      categoryName: "التدريب المؤسسي",
      targetAudience: "فرق العمل الإدارية، المالية، الموارد البشرية والعمليات",
      shortDesc: "أتمتة المهام الروتينية، الفحص الذكي للمستندات ونشر المساعدات الذكية للشركات.",
      fullDesc: "ورشة عملية لتدريب كوادر الشركات على ربط أدوات الذكاء الاصطناعي ببيئة العمل اليومية ومضاعفة سرعة إنجاز المعاملات حتى ٥ أضعاف.",
      level: "متوسط",
      duration: "٨ ساعات (ورشة عمل متخصصة)",
      price: "عرض فني للمؤسسات",
      badge: "رفع الكفاءة التشغيلية",
      topics: [
        "أتمتة المراسلات والبريد الإلكتروني المؤسسي بنماذج LLM",
        "التحليل المالي الذكي وإعداد التقارير المؤتمتة",
        "تصميم مساعد ذكي للموارد البشرية (HR Bot)",
        "صناعة المحتوى الترويجي والحملات التسويقية آلياً",
      ],
      prerequisites: "إلمام بالمهام الإدارية وبرامج أوفيس",
      instructorName: "د. شهريار كريمي",
      instructorRole: "خبير معمارية البيانات وأتمتة العمليات بالذكاء الاصطناعي",
      features: [
        "تخصيص كامل وفق تحديات الشركة الواقعية",
        "شهادة مؤسسية معتمدة من ديجي نورون",
        "كتيبات تدريبية وقوالب صياغة الأوامر القياسية",
        "دعم واستشارات فنية بعد انتهاء البرنامج",
      ],
    },
  },
  "prompt-engineering-mastery": {
    en: {
      title: "Prompt Engineering & Advanced AI Tools Masterclass 2026",
      categoryName: "General & Advanced",
      targetAudience: "Professionals, Freelancers & University Students",
      shortDesc: "Mastering advanced prompt engineering, Midjourney, ChatGPT-4o, and Claude 3.5 Sonnet.",
      fullDesc: "A comprehensive program on utilizing cutting-edge AI engines to accelerate output tenfold and monetize specialized generative workflows.",
      level: "Intermediate",
      duration: "20 hours (10 sessions)",
      price: "Inquire for Rates",
      badge: "Updated for 2026",
      topics: [
        "Chain of Thought & Multi-Turn prompt engineering frameworks",
        "Ultra-realistic creative image generation with Midjourney & Stable Diffusion",
        "Big data analytics & automation with Code Interpreter",
        "Architecting custom domain agents (Custom GPTs & assistants)",
      ],
      prerequisites: "Enthusiasm for digital tools and continuous learning",
      instructorName: "Eng. Maryam Sadeghi",
      instructorRole: "AI Content Strategist & Generative Tech Instructor",
      features: [
        "Lifetime access to high-definition recordings",
        "Private collaborative troubleshooting group",
        "Proprietary prompt blueprints & code snippets",
        "Official verifiable certificate",
      ],
    },
    fa: {},
    ar: {
      title: "ماستر كلاس هندسة الأوامر وأدوات الذكاء الاصطناعي التوليدي ٢٠٢٦",
      categoryName: "العامة والتخصصية",
      targetAudience: "المحترفون، المستقلون، والطلاب الجامعيون",
      shortDesc: "إتقان هندسة الأوامر المتقدمة، Midjourney، ChatGPT 4o وClaude 3.5 لرفع الإنتاجية.",
      fullDesc: "دورة شاملة في توظيف محركات الذكاء الاصطناعي الحديثة لمضاعفة إنتاجية العمل عشر مرات واحتراف أدوات الجيل القادم.",
      level: "متوسط",
      duration: "٢٠ ساعة (١٠ جلسات)",
      price: "حسب الاستفسار",
      badge: "محدث لعام ٢٠٢٦",
      topics: [
        "استراتيجيات التفكير التسلسلي (Chain of Thought) في صياغة الأوامر",
        "إنتاج الصور الاحترافية عبر Midjourney وStable Diffusion",
        "تحليل مجموعات البيانات الكبيرة عبر مترجم الأكواد الذكي",
        "بناء مساعدات مخصصة ونماذج Custom GPTs",
      ],
      prerequisites: "شغف بتعلم الأدوات الرقمية الحديثة",
      instructorName: "م. مريم صادقي",
      instructorRole: "استراتيجية المحتوى ومدربة أدوات الذكاء الاصطناعي",
      features: [
        "وصول غير محدود للتسجيلات عالية الدقة",
        "مجتمع تفاعلي للإجابة عن الأسئلة والاستشارات",
        "قوالب أوامر حصرية ونماذج برمجية جاهزة",
        "شهادة رسمية معتمدة قابلة للتحقق",
      ],
    },
  },
  "ai-entrepreneurship-kids-teens": {
    en: {
      title: "AI Entrepreneurship & Solo-Business Masterclass for Youth (Ages 10-18)",
      categoryName: "Kids & Teens",
      targetAudience: "Children & Teens (Ages 10 to 18)",
      shortDesc: "Nurturing AI-mastered critical thinkers and value creators: comprehensive AI entrepreneurship, professional prompting, Vibe Coding, AI agents & multi-agents, app/web building, data analysis, and digital marketing.",
      fullDesc: "Our goal is not to train your children merely as 'technical engineers' — in the AI era, the world needs thinking humans who master AI to create real added value, not mere technical AI engineers. In this 16-hour program (8 two-hour sessions) with full post-course support, youth master everything from foundational AI concepts, neural networks, and professional prompt engineering to Vibe Coding, building AI agents and multi-agent systems, developing AI apps and websites, data analysis tools, digital marketing & SEO, and full-cycle AI entrepreneurship (team building, HR, financial management, product development, resource management, and control) based on a real-world project.",
      level: "Beginner to Intermediate",
      duration: "16 hours (8 two-hour sessions)",
      sessionsCount: "8 two-hour sessions + post-course support",
      price: "Inquire for Rates",
      badge: "New - Entrepreneurship Track",
      topics: [
        "Introduction to foundational AI concepts and history",
        "Neural networks, deep learning, and machine learning (conceptual overview)",
        "Content creation and media production with AI",
        "Professional prompt engineering",
        "Building AI agents",
        "Building AI-powered apps and websites",
        "Vibe Coding with AI",
        "Building multi-agent systems with AI",
        "Mastering data analysis tools and working professionally with AI",
        "Digital marketing: from market research to web design, SEO, and beyond",
        "AI entrepreneurship concepts from team building to idea development based on a real project (HR, financial management, ideation & product development, continuous improvement, resource management, marketing, organization & control, etc.)",
      ],
      prerequisites: "Basic computer and web browsing skills",
      instructorName: "Dr. Mehran Shirzad",
      instructorRole: "Specialist in Entrepreneurship & Technology Education for Kids & Teens",
      instructors: [
        {
          name: "Dr. Mehran Shirzad",
          role: "Specialist in Entrepreneurship & Technology Education for Kids & Teens",
          avatar: "/images/instructors/shirzad.jpg",
        },
        {
          name: "Dr. Shahriar Karimi",
          role: "Specialist in Entrepreneurship & Technology Education for Kids & Teens",
          avatar: "/images/instructors/shahriar-karimi.jpg",
        },
      ],
      features: [
        "Cultivating thinking, value-creating leaders who master AI (not mere technical engineers)",
        "16 hours of hands-on training (8 two-hour sessions) + ongoing post-course support",
        "Practical AI entrepreneurship, team building & management based on a real project",
        "Hands-on AI agent, multi-agent & Vibe Coding training",
        "Real app & website development, SEO, and digital marketing with modern AI tools",
        "Official DigiNoron Youth Entrepreneurship Diploma",
      ],
    },
    fa: {},
    ar: {
      title: "ريادة الأعمال بالذكاء الاصطناعي للأطفال واليافعين (١٠-١٨ سنة)",
      categoryName: "الأطفال واليافعون",
      targetAudience: "الأطفال واليافعون (١٠ إلى ١٨ عاماً)",
      shortDesc: "إعداد جيل مفكر وصانع للقيمة يتقن الذكاء الاصطناعي؛ تدريب شامل على ريادة الأعمال، هندسة الأوامر الاحترافية، البرمجة الإبداعية (Vibe Coding)، بناء الوكلاء وتطوير التطبيقات والمواقع عبر مشروع واقعي.",
      fullDesc: "هدفنا في هذه الدورة ليس تخرج أبنائكم كمجرد «مهندسين تقنيين»؛ ففي عصر الذكاء الاصطناعي يحتاج العالم إلى «الإنسان المفكر المتقن للذكاء الاصطناعي» القادر على صناعة قيمة مضافة حقيقية به، لا مجرد المهندس التقني الصرف. في هذه الدورة الممتدة لـ ١٦ ساعة (٨ جلسات مدة كل منها ساعتان) مع دعم كامل بعد الدورة، يتعلم الأطفال واليافعون المفاهيم الأساسية والشبكات العصبية وهندسة الأوامر الاحترافية، وصولاً إلى البرمجة الإبداعية (Vibe Coding)، وبناء الوكلاء الأذكياء والأنظمة متعددة الوكلاء، وتطوير التطبيقات والمواقع، وأدوات تحليل البيانات، والتسويق الرقمي وتحسين محركات البحث (SEO)، ومفاهيم ريادة الأعمال الشاملة (بناء الفرق، الموارد البشرية، الإدارة المالية، وتطوير المنتجات) على أساس مشروع حقيقي.",
      level: "مبتدئ إلى متوسط",
      duration: "١٦ ساعة (٨ جلسات مدة كل منها ساعتان)",
      sessionsCount: "٨ جلسات (ساعتان للجلسة) + دعم ما بعد الدورة",
      price: "حسب الاستفسار",
      badge: "جديد - مسار ريادة الأعمال",
      topics: [
        "التعرف على المفاهيم الأساسية للذكاء الاصطناعي وتاريخه",
        "الشبكات العصبية والتعلم العميق وتعلم الآلة على مستوى المفاهيم",
        "التعرف على كيفية صناعة المحتوى بالذكاء الاصطناعي",
        "هندسة الأوامر الاحترافية (Prompt Engineering)",
        "بناء وكيل ذكاء اصطناعي (AI Agent)",
        "بناء تطبيقات أو مواقع ويب بالذكاء الاصطناعي",
        "البرمجة الإبداعية بالذكاء الاصطناعي (Vibe Coding)",
        "بناء الأنظمة متعددة الوكلاء (Multi-Agents) بالذكاء الاصطناعي",
        "تعلم أدوات تحليل البيانات والعمل الاحترافي مع الذكاء الاصطناعي",
        "التسويق الرقمي من أبحاث السوق إلى تصميم المواقع وتحسين محركات البحث (SEO) وغيرها",
        "تعليم مفاهيم ريادة الأعمال بالذكاء الاصطناعي من بناء الفريق إلى تطوير الفكرة على أساس مشروع واقعي (الموارد البشرية، الإدارة المالية، ابتكار الأفكار وتطوير المنتجات، التحسين المستمر، إدارة الموارد، التسويق، التنظيم والرقابة وغيرها)",
      ],
      prerequisites: "معرفة أساسية باستخدام الحاسوب والإنترنت",
      instructorName: "د. مهران شيرزاد",
      instructorRole: "متخصص في تعليم ريادة الأعمال والتكنولوجيا للأطفال واليافعين",
      instructors: [
        {
          name: "د. مهران شيرزاد",
          role: "متخصص في تعليم ريادة الأعمال والتكنولوجيا للأطفال واليافعين",
          avatar: "/images/instructors/shirzad.jpg",
        },
        {
          name: "د. شهريار كريمي",
          role: "متخصص في تعليم ريادة الأعمال والتكنولوجيا للأطفال واليافعين",
          avatar: "/images/instructors/shahriar-karimi.jpg",
        },
      ],
      features: [
        "إعداد الإنسان المفكر الصانع للقيمة والمتقن للذكاء الاصطناعي (وليس مجرد مهندس تقني صرف)",
        "١٦ ساعة تدريبية تطبيقية (٨ جلسات مدة كل منها ساعتان) مع دعم مستمر بعد الدورة",
        "تدريب عملي على ريادة الأعمال بالذكاء الاصطناعي وبناء الفرق والإدارة عبر مشروع واقعي",
        "بناء الوكلاء الأذكياء والأنظمة متعددة الوكلاء والبرمجة بالذكاء الاصطناعي (Vibe Coding)",
        "تصميم تطبيقات ومواقع حقيقية وتحسين محركات البحث (SEO) والتسويق الرقمي بأحدث أدوات الذكاء الاصطناعي",
        "شهادة رسمية معتمدة من أكاديمية ديجي نورون",
      ],
    },
  },
};

export function getLocalizedCourse(course: Course, locale: Locale): Course {
  if (locale === "fa") {
    return course;
  }

  const translation = COURSE_TRANSLATIONS[course.slug]?.[locale];
  
  // Default instructor localization if not specifically overridden
  let instructorName = course.instructor.name;
  if (translation?.instructorName) {
    instructorName = translation.instructorName;
  } else if (course.instructor.name === "دکتر مهران شیرزاد") {
    instructorName = locale === "ar" ? "د. مهران شيرزاد" : "Dr. Mehran Shirzad";
  } else if (course.instructor.name === "دکتر علی امیری") {
    instructorName = locale === "ar" ? "د. علي أميري" : "Dr. Ali Amiri";
  } else if (course.instructor.name === "دکتر شهریار کریمی") {
    instructorName = locale === "ar" ? "د. شهريار كريمي" : "Dr. Shahriar Karimi";
  } else if (course.instructor.name === "مهندس مریم صادقی") {
    instructorName = locale === "ar" ? "م. مريم صادقي" : "Eng. Maryam Sadeghi";
  } else if (course.instructor.name === "گروه تخصصی دیجی نورون") {
    instructorName = locale === "ar" ? "فريق ديجي نورون المتخصص" : "DigiNoron Specialist Team";
  }

  if (!translation) {
    return {
      ...course,
      instructor: {
        ...course.instructor,
        name: instructorName,
      },
    };
  }

  return {
    ...course,
    title: translation.title || course.title,
    categoryName: translation.categoryName || course.categoryName,
    targetAudience: translation.targetAudience || course.targetAudience,
    shortDesc: translation.shortDesc || course.shortDesc,
    fullDesc: translation.fullDesc || course.fullDesc,
    level: (translation.level as Course["level"]) || course.level,
    duration: translation.duration || course.duration,
    sessionsCount: translation.sessionsCount || course.sessionsCount,
    price: translation.price || course.price,
    badge: translation.badge || course.badge,
    topics: translation.topics || course.topics,
    prerequisites: translation.prerequisites || course.prerequisites,
    instructor: {
      ...course.instructor,
      name: instructorName,
      role: translation.instructorRole || course.instructor.role,
    },
    instructors: translation.instructors || course.instructors,
    features: translation.features || course.features,
    formats: translation.formats || course.formats,
  };
}
