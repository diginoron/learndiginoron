import { Course, CourseFormat } from "@/data/courses";
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
  instructorName: string;
  instructorRole: string;
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
      price: "Enterprise Quotation",
      badge: "C-Suite Priority",
      topics: [
        "Strategic landscape of Generative AI & commercial applications",
        "Enterprise AI readiness auditing & roadmap formulation",
        "Advanced prompt engineering for executive decision support",
        "Data privacy governance, compliance & enterprise risk management",
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
      price: "عرض فني للمؤسسات",
      badge: "خاص بالقيادات التنفيذية",
      topics: [
        "فهم الذكاء الاصطناعي التوليدي والتطبيقات التجارية",
        "صياغة استراتيجية الذكاء الاصطناعي وتقييم الجاهزية",
        "هندسة الأوامر المتقدمة لإدارة المشاريع ودعم اتخاذ القرار",
        "حوكمة وسرية البيانات، الامتثال والسياسات الأخلاقية",
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
      shortDesc: "Learning digital entrepreneurship, market research, content creation, character design, animation, and website design with AI.",
      fullDesc: "In this creative and economic empowerment bootcamp, youth learn how to use AI for everything from market discovery to brand creation, animation, WordPress web design, and digital campaigns.",
      level: "Beginner to Intermediate",
      duration: "1-Day Intensive Workshop (8 hrs) or Full 7-Session Bootcamp",
      price: "Inquire for Rates",
      badge: "New - Entrepreneurship Track",
      topics: [
        "Core AI concepts, neural networks & digital literacy",
        "Market research, ideation & solo-business fundamentals",
        "Scriptwriting, character design & animation with AI",
        "WordPress web design & AI-driven content generation",
        "Digital marketing campaigns & product launches",
        "Interactive Q&A and capstone project mentoring",
      ],
      prerequisites: "Basic computer and web browsing skills",
      instructorName: "Dr. Mehran Shirzad",
      instructorRole: "Youth Entrepreneurship & Innovation Mentor",
      features: [
        "Option for 1-day workshop or comprehensive 7-session format",
        "Practical digital solo-business training",
        "AI poster, catalog, animation and video creation",
        "Real WordPress website deployment with AI tools",
        "Official DigiNoron Youth Entrepreneurship Diploma",
      ],
      formats: [
        {
          title: "1-Day Intensive Workshop",
          subtitle: "8 Focused Workshop Hours",
          note: "Note: This intensive workshop format provides an end-to-end overview, tool walkthroughs, and practical demonstrations.",
          sections: [
            {
              title: "Foundations of AI",
              duration: "1 Hour",
              items: [
                "What is AI and how it works",
                "Neural network concepts simplified",
                "Historical evolution of intelligent models",
                "Current state & future horizons of AI",
              ],
            },
            {
              title: "How to Build a Business with AI",
              duration: "2 Hours",
              items: [
                "AI applications for entrepreneurship from market research to digital campaigns",
                "The Solo-Business concept and execution",
                "Conducting market research with AI assistants",
                "AI-driven product & service ideation",
                "Formulating & launching marketing campaigns",
              ],
            },
            {
              title: "AI in Creative Content & Media",
              duration: "2 Hours",
              items: [
                "Hands-on multimedia content generation",
                "AI-assisted scriptwriting & narrative development",
                "Visual character & mascot design",
                "Video and animation synthesis with AI engines",
                "Creating promotional posters, logos, and catalogs",
              ],
            },
            {
              title: "AI & WordPress Web Design",
              duration: "2 Hours",
              items: [
                "Building a responsive WordPress website from architecture to full copywriting with AI",
              ],
            },
            {
              title: "Interactive Q&A & Mentorship",
              duration: "1 Hour",
              items: [
                "Live student Q&A, idea feedback & project guidance",
              ],
            },
          ],
        },
        {
          title: "Comprehensive Business & AI Bootcamp",
          subtitle: "7 Specialized Sessions (1.5 hrs each)",
          sections: [
            {
              title: "Understanding Modern AI Foundations",
              duration: "Session 1 (1.5 Hours)",
              description: "Comprehensive introduction to artificial intelligence, neural networks, machine learning paradigms, real-world industrial applications, and ethical considerations.",
              items: [
                "Neural networks and historical milestones",
                "Modern industrial applications across sectors",
                "Future trends: AGI and generative autonomy",
              ],
            },
            {
              title: "AI-Powered Market Research & Validation",
              duration: "Session 2 (1.5 Hours)",
              description: "Using AI to analyze customer needs, uncover niche opportunities, model consumer personas, and assess competitive landscapes with data-driven predictive tools.",
              items: [
                "AI-driven R&D and innovative idea generation",
                "Extracting consumer preferences and behavioral patterns",
                "Identifying disruptive service niches",
                "Tracking industry market trends and competitor signals",
              ],
            },
            {
              title: "Marketing & Creative Content Generation",
              duration: "Sessions 3 & 4 (3 Hours)",
              description: "End-to-end mastery of promotional asset generation, social media copywriting, campaign structuring, visual identity design, and automated digital engagement.",
              items: [
                "Strategic advertising campaign design with AI",
                "Creating multi-format promotional visual collateral",
                "Digital SEO optimization and targeted messaging",
                "Social media automation and audience growth loops",
              ],
            },
            {
              title: "Web Design & Deployment with AI",
              duration: "Sessions 5 & 6 (3 Hours)",
              description: "From UX/UI wireframing to production deployment: building engaging, modern WordPress portals populated with high-quality SEO-optimized AI copy and imagery.",
              items: [
                "Core UI/UX web design fundamentals",
                "Automated web layout synthesis with AI builders",
                "Creating dynamic SEO-rich website content",
              ],
            },
            {
              title: "Live Project Pitching & Capstone Q&A",
              duration: "Session 7 (1.5 Hours)",
              description: "Interactive showcase where students present their business models, review feedback from mentors, and finalize their launch roadmap.",
              items: [
                "Project presentations and student evaluations",
                "Hands-on mentorship and roadmap finalization",
              ],
            },
          ],
        },
      ],
    },
    fa: {},
    ar: {
      title: "ريادة الأعمال بالذكاء الاصطناعي للأطفال واليافعين (١٠-١٨ سنة)",
      categoryName: "الأطفال واليافعون",
      targetAudience: "الأطفال واليافعون (١٠ إلى ١٨ عاماً)",
      shortDesc: "تعليم ريادة الأعمال الرقمية، أبحاث السوق، صناعة المحتوى، الرسوم المتحركة وتصميم المواقع بالذكاء الاصطناعي.",
      fullDesc: "دورة تطبيقية فريدة لتنمية روح الابتكار والمهارات الاقتصادية لليافعين، تمكنهم من استثمار الذكاء الاصطناعي في إطلاق المشاريع، إنتاج الوسائط المتعددة وبناء مواقع الويب.",
      level: "مبتدئ إلى متوسط",
      duration: "ورشة يوم واحد مكثفة (٨ ساعات) أو دورة كاملة من ٧ جلسات",
      price: "حسب الاستفسار",
      badge: "جديد - مسار ريادة الأعمال",
      topics: [
        "المفاهيم الأساسية للذكاء الاصطناعي والشبكات العصبية",
        "أبحاث السوق، استكشاف الأفكار ومفهوم المشاريع الفردية (Solo Business)",
        "صناعة المحتوى، كتابة السيناريو والرسوم المتحركة بالذكاء الاصطناعي",
        "تصميم مواقع ووردبريس وصناعة محتوى المواقع بالذكاء الاصطناعي",
        "إطلاق وإدارة الحملات التسويقية الرقمية",
        "جلسات تفاعلية للإجابة عن الاستفسارات وتطوير المشاريع",
      ],
      prerequisites: "معرفة أساسية باستخدام الحاسوب والإنترنت",
      instructorName: "د. مهران شيرزاد",
      instructorRole: "خبير ريادة الأعمال وتكنولوجيا الجيل القادم لليافعين",
      features: [
        "خيار المشاركة في ورشة اليوم الواحد أو الدورة الكاملة من ٧ جلسات",
        "تدريب عملي على ريادة الأعمال الرقمية والمشاريع الفردية",
        "إنتاج الملصقات والكتالوجات ومقاطع الفيديو والأنيميشن بالذكاء الاصطناعي",
        "بناء وإطلاق موقع ووردبريس فعلي بالاستعانة بأدوات الذكاء الاصطناعي",
        "شهادة رسمية معتمدة من أكاديمية ديجي نورون",
      ],
      formats: [
        {
          title: "ورشة اليوم الواحد المكثفة",
          subtitle: "٨ ساعات تدريبية عملية مركزة",
          note: "ملاحظة: تقدم هذه الورشة مدخلاً شاملاً وتطبيقياً للتعرف على الأدوات وسيناريوهات الاستخدام العملي.",
          sections: [
            {
              title: "مقدمة في الذكاء الاصطناعي",
              duration: "ساعة واحدة",
              items: [
                "ما هو الذكاء الاصطناعي وتاريخه",
                "مفاهيم الشبكات العصبية بأسلوب مبسط",
                "كيف يعمل التعلم الآلي والأنظمة الذكية",
                "الواقع الراهن ومستقبل الذكاء الاصطناعي",
              ],
            },
            {
              title: "كيف نؤسس مشروعاً بالذكاء الاصطناعي؟",
              duration: "ساعتان",
              items: [
                "استخدامات الذكاء الاصطناعي من دراسة السوق إلى التسويق",
                "مفهوم ريادة الأعمال والمشاريع الفردية (Solo Business)",
                "إجراء أبحاث السوق باستخدام الذكاء الاصطناعي",
                "تصميم المنتجات والأفكار المبتكرة",
                "بناء وإطلاق الحملات التسويقية بالذكاء الاصطناعي",
              ],
            },
            {
              title: "صناعة المحتوى والوسائط بالذكاء الاصطناعي",
              duration: "ساعتان",
              items: [
                "التطبيق العملي لصناعة المحتوى المتعدد",
                "كتابة السيناريوهات والقصص الإعلانية بالذكاء الاصطناعي",
                "تصميم الشخصيات والرسوم التعبيرية",
                "صناعة الفيديو والرسوم المتحركة بالذكاء الاصطناعي",
                "تصميم البوسترات والكتالوجات الاحترافية",
              ],
            },
            {
              title: "تصميم المواقع بالذكاء الاصطناعي",
              duration: "ساعتان",
              items: [
                "تصميم موقع ووردبريس متكامل وتوليد محتواه بالذكاء الاصطناعي",
              ],
            },
            {
              title: "جلسة حوارية وتوجيه المشاريع",
              duration: "ساعة واحدة",
              items: [
                "الإجابة عن استفسارات الطلاب وتوجيه أفكارهم",
              ],
            },
          ],
        },
        {
          title: "الدورة المتكاملة في الأعمال والذكاء الاصطناعي",
          subtitle: "٧ جلسات تفاعلية (ساعة ونصف لكل جلسة)",
          sections: [
            {
              title: "فهم المفاهيم الأساسية للذكاء الاصطناعي",
              duration: "الجلسة الأولى (١.٥ ساعة)",
              description: "مدخل تأسيسي لشبكات الأعصاب، تاريخ التطور، والتطبيقات المعاصرة مع مناقشة الجوانب الأخلاقية.",
              items: [
                "الشبكات العصبية وتاريخ الذكاء الاصطناعي",
                "الاستخدامات الصناعية والواقع الحالي",
                "التوجهات المستقبلية والذكاء العام (AGI)",
              ],
            },
            {
              title: "أبحاث السوق الذكية واستكشاف الفرص",
              duration: "الجلسة الثانية (١.٥ ساعة)",
              description: "استخدام خوارزميات التحليل لاستكشاف احتياجات العملاء وبناء نماذج الطلب والميزة التنافسية.",
              items: [
                "تطوير المنتجات والخدمات بالذكاء الاصطناعي",
                "استخراج بيانات ورغبات العملاء بدقة",
                "تحديد الأفكار المبتكرة لتطوير المشاريع",
                "تحليل المنافسين ومؤشرات السوق",
              ],
            },
            {
              title: "التسويق وصناعة المحتوى الإبداعي",
              duration: "الجلستان الثالثة والرابعة (٣ ساعات)",
              description: "تصميم الحملات التسويقية، إنتاج المواد البصرية، والتسويق الرقمي عبر شبكات التواصل الاجتماعي.",
              items: [
                "تصميم الحملات الإعلانية بالذكاء الاصطناعي",
                "إنتاج المواد الإعلانية والتصاميم المبتكرة",
                "تحسين محركات البحث والتسويق المستهدف",
                "إدارة وأتمتة النشر على الشبكات الاجتماعية",
              ],
            },
            {
              title: "تصميم وإطلاق المواقع الإلكترونية",
              duration: "الجلستان الخامسة والسادسة (٣ ساعات)",
              description: "تعلم مبادئ UI/UX واستخدام أدوات الذكاء الاصطناعي لبناء وإطلاق مواقع ويب تفاعلية متوافقة مع محركات البحث.",
              items: [
                "مبادئ تصميم واجهات المستخدم والمواقع",
                "بناء المواقع الإلكترونية بمساعدة الذكاء الاصطناعي",
                "إنتاج المحتوى النصي والمرئي المحسن للمواقع",
              ],
            },
            {
              title: "عرض المشاريع والتقييم الختامي",
              duration: "الجلسة السابعة (١.٥ ساعة)",
              description: "عرض الطلاب لمشاريعهم الرقمية وتلقي الملاحظات والتوجيهات من المدربين المعتمدين.",
              items: [
                "عروض مشاريع التخرج ومناقشتها",
                "توجيهات الإطلاق التجاري والشهادات",
              ],
            },
          ],
        },
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
    level: (translation.level as any) || course.level,
    duration: translation.duration || course.duration,
    price: translation.price || course.price,
    badge: translation.badge || course.badge,
    topics: translation.topics || course.topics,
    prerequisites: translation.prerequisites || course.prerequisites,
    instructor: {
      ...course.instructor,
      name: instructorName,
      role: translation.instructorRole || course.instructor.role,
    },
    features: translation.features || course.features,
    formats: translation.formats || course.formats,
  };
}
