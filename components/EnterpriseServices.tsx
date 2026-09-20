"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Bot, 
  Cpu, 
  GitBranch, 
  ArrowRightLeft, 
  Building2, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  ArrowLeft, 
  ArrowRight,
  Phone, 
  Compass
} from "lucide-react";
import { Locale, getDirection, getLocalizedPath } from "@/lib/i18n";
import { HOME_TRANSLATIONS } from "@/data/translations/home";

interface EnterpriseServicesProps {
  locale?: Locale;
}

export default function EnterpriseServices({ locale = "en" }: EnterpriseServicesProps) {
  const [activePillar, setActivePillar] = useState<number>(0);
  const t = HOME_TRANSLATIONS[locale]?.enterpriseSection || HOME_TRANSLATIONS.en.enterpriseSection;
  const isLtr = getDirection(locale) === "ltr";

  const pillarsData = {
    en: [
      {
        id: 0,
        title: "Strategic AI Transformation Roadmap",
        subtitle: "AI Strategic Blueprint, APQC Gap Analysis & Readiness Atlas",
        icon: Compass,
        color: "amber",
        badge: "Essential Foundation",
        tagline: "APQC-aligned process auditing, organizational gap analysis, and establishing an ROI-focused AI roadmap.",
        description: "In this foundational engagement, we audit existing processes, data topology, and organizational readiness. Using the global APQC framework and AI readiness indices, we deliver a phased strategic atlas prioritizing AI investments for measurable ROI.",
        capabilities: [
          "Enterprise process modeling and diagnostic benchmarking aligned with APQC standards",
          "Digital maturity assessment and AI Readiness Index scoring across all operational divisions",
          "Departmental Gap Analysis contrasting current state with optimal AI-driven throughput",
          "Formulating a prioritized AI initiative portfolio with concrete ROI payback metrics",
          "Comprehensive 3-to-5 year strategic AI architecture blueprint and execution roadmap",
        ],
        deliverables: ["Approved Strategic Blueprint", "AI Project Opportunity Atlas", "APQC Gap Analysis Report", "AI Readiness Index Scorecard"],
      },
      {
        id: 1,
        title: "Autonomous AI Multi-Agents",
        subtitle: "AI Agents & Autonomous Multi-Agent Systems",
        icon: Bot,
        color: "cyan",
        badge: "Custom Engineering",
        tagline: "Deploying autonomous decision-making agents connected securely to enterprise databases and tool ecosystems.",
        description: "We architect custom multi-agent networks capable of executing complex analytical tasks, 24/7 system monitoring, customer operations, and automated cross-departmental coordination.",
        capabilities: [
          "Engineering cooperative Multi-Agent Swarms for autonomous operations",
          "Enterprise RAG assistants with granular access control over confidential files",
          "Seamless API connectors for CRM, ERP, messaging, and relational databases",
          "Executive Decision Support Systems (DSS) tailored for C-level intelligence",
        ],
        deliverables: ["Custom Codebase Repository", "Agent Management Console", "Data Governance Guarantee", "Comprehensive SLA Support"],
      },
      {
        id: 2,
        title: "Business Process Automation (BPA)",
        subtitle: "Business Process Intelligence & Intelligent Automation",
        icon: Cpu,
        color: "blue",
        badge: "Comprehensive Automation",
        tagline: "Eliminating human bottlenecks and accelerating operational workflows up to 5x.",
        description: "Re-engineering core business processes with intelligent algorithms; automating redundant, manual tasks across finance, procurement, customer success, and human resources.",
        capabilities: [
          "Intelligent document and invoice extraction (Advanced OCR + LLM structured schema parsing)",
          "Automated customer churn prediction and real-time behavioral telemetry",
          "AI-augmented recruitment pipelines, resume screening, and workforce analytics",
          "Predictive operational dashboards with automated executive reporting",
        ],
        deliverables: ["Optimized Process Flowcharts", "Automated Execution Pipelines", "Up to 70% Time Reduction", "Real-Time Error Telemetry"],
      },
      {
        id: 3,
        title: "Deployment, Integration & Modernization",
        subtitle: "Implementation, Integration & Legacy Upgrades",
        icon: GitBranch,
        color: "indigo",
        badge: "Technical Deployment",
        tagline: "Deploying production-grade AI on internal servers (On-Premise) or sovereign cloud infrastructure.",
        description: "End-to-end engineering including private LLM hosting, local fine-tuning on corporate datasets, legacy ERP/CRM augmentation, and secure API gateway integration.",
        capabilities: [
          "Air-gapped and On-Premise local LLM deployment with zero data egress guarantee",
          "Enterprise integration with SAP, Microsoft Dynamics, and local ERP backbones",
          "GPU orchestration and inference quantization to minimize computational overhead",
          "Upgrading legacy monolithic architectures to intelligent microservice standards",
        ],
        deliverables: ["Server Architecture Blueprint", "Hardened API Gateway", "Uptime SLA Guarantee", "Complete System Documentation"],
      },
      {
        id: 4,
        title: "Technology & IP Transfer",
        subtitle: "Technology Transfer & Internal IP Ownership",
        icon: ArrowRightLeft,
        color: "emerald",
        badge: "Technological Autonomy",
        tagline: "Full intellectual property handover, source code delivery, and internal engineering enablement.",
        description: "We don't lock organizations into perpetual vendor dependency. All technical IP, repositories, and MLOps procedures are transferred to your in-house engineering squads.",
        capabilities: [
          "Complete source code repository handover with architectural documentation",
          "Intensive technical mentorship workshops for internal developers and architects",
          "Standard Operating Procedures (SOPs) for MLOps, model monitoring, and retraining",
          "Advisory on enterprise data governance and cybersecurity compliance",
        ],
        deliverables: ["100% Source Code Transfer", "Knowledge Transfer Sessions", "MLOps Governance SOPs", "Self-Sufficient Internal Team"],
      },
      {
        id: 5,
        title: "Corporate Upskilling Programs",
        subtitle: "Enterprise Upskilling & Executive AI Masterclasses",
        icon: Building2,
        color: "purple",
        badge: "Workforce Enablement",
        tagline: "Empowering management boards and technical staff with state-of-the-art AI capabilities.",
        description: "Targeted educational tracks designed to build in-house AI champions, establish safe usage protocols, and maximize company-wide software ROI.",
        capabilities: [
          "Executive AI Strategy Masterclasses for board members and enterprise directors",
          "Staff prompt engineering and workflow automation workshops for departments",
          "Formulating enterprise data privacy policies and AI acceptable use guidelines",
          "Proven track record with regional petrochemical, public library, and municipal bodies",
        ],
        deliverables: ["Accredited Certificates", "Training Slide Decks & Labs", "Internal Prompt Playbooks", "Pre/Post Training Assessments"],
      },
    ],
    fa: [
      {
        id: 0,
        title: "طراحی سند راهبردی هوشمندسازی سازمانی",
        subtitle: "AI Strategic Blueprint, APQC Gap Analysis & Readiness Atlas",
        icon: Compass,
        color: "amber",
        badge: "گام نخست و بنیادین",
        tagline: "تحلیل ساختار و فرآیندها مبتنی بر APQC، تحلیل شکاف و ترسیم اطلس پروژه‌های بهبود هوش مصنوعی",
        description: "در این خدمت بنیادین، ابتدا فرآیندها، ساختار سازمانی و معماری داده‌های سازمان مورد تحلیل و عارضه‌یابی همه‌جانبه قرار می‌گیرند. سپس بر اساس تحلیل شکاف (Gap Analysis)، چارچوب بین‌المللی APQC و شاخص‌های سنجش آمادگی سازمان برای هوش مصنوعی (AI Readiness Index)، اطلس راهبردی پروژه‌های بهبود مبتنی بر هوش مصنوعی در قالب یک سند راهبردی جامع و نقشه راه فازبندی‌شده ارائه می‌گردد.",
        capabilities: [
          "عارضه‌یابی و مدلسازی فرآیندهای سازمان منطبق بر متدولوژی استاندارد جهانی APQC",
          "ارزیابی سطح بلوغ دیجیتال و شاخص‌های سنجش آمادگی سازمان برای هوش مصنوعی (AI Readiness)",
          "تحلیل شکاف (Gap Analysis) وضع موجود با وضع مطلوب فناوری در تمامی دپارتمان‌ها",
          "تدوین اطلس راهبردی پروژه‌های بهبود مبتنی بر AI با اولویت‌بندی نرخ بازگشت سرمایه (ROI)",
          "ارائه سند جامع معماری راهبردی هوشمندسازی و نقشه راه اجرایی ۳ تا ۵ ساله",
        ],
        deliverables: ["سند راهبردی مصوب", "اطلس پروژه‌های هوشمندسازی", "گزارش تحلیل شکاف APQC", "شاخص‌های سنجش آمادگی"],
      },
      {
        id: 1,
        title: "طراحی هوش مصنوعی و ایجنت‌های سازمانی",
        subtitle: "AI Agents & Autonomous Multi-Agent Systems",
        icon: Bot,
        color: "cyan",
        badge: "طراحی اختصاصی",
        tagline: "پیاده‌سازی ایجنت‌های تصمیم‌گیر و پردازش‌گر متصل به دیتابیس‌ها و ابزارهای سازمانی",
        description: "ما برای سازمان شما دستیارها و ایجنت‌های خودمختار (AI Agents) چندعامله طراحی می‌کنیم که قادرند وظایف پیچیده تحلیلی، مانیتورینگ سیستم‌ها، پاسخگویی ۲۴/۷ مشتریان و پردازش داده‌ها را با هماهنگی کامل بین ابزارها انجام دهند.",
        capabilities: [
          "طراحی ایجنت‌های چندعامله (Multi-Agent Swarms) برای اتوماسیون عملیاتی",
          "توسعه دستیارهای هوشمند داخلی با دسترسی کنترل‌شده به اسناد محرمانه (RAG سازمانی)",
          "اتصال ایجنت‌ها به سامانه‌های CRM، ERP، ایمیل و پایگاه‌های داده سازمان",
          "طراحی سیستم‌های تصمیم‌یار هوشمند (Decision Support Systems) برای مدیران ارشد",
        ],
        deliverables: ["کدبیس اختصاصی", "پنل مدیریت ایجنت‌ها", "تضمین امنیت داده‌ها", "پشتیبانی فنی"],
      },
      {
        id: 2,
        title: "هوشمندسازی فرآیندها (BPA)",
        subtitle: "Business Process Intelligence & Intelligent Automation",
        icon: Cpu,
        color: "blue",
        badge: "اتوماسیون جامع",
        tagline: "حذف گلوگاه‌های انسانی و ارتقای ۵ برابری سرعت گردش کار سازمان",
        description: "بررسی، عارضه‌یابی و مهندسی مجدد فرآیندهای کسب‌وکار با تزریق الگوریتم‌های هوش مصنوعی؛ فرآیندهای تکراری و وقت‌گیر مالی، بازاریابی، منابع انسانی و پشتیبانی را کاملاً خودکار و هوشمند می‌کنیم.",
        capabilities: [
          "اتوماسیون هوشمند اسناد و صورت‌حساب‌ها (OCR پیشرفته + استخراج فیلدها)",
          "تحلیل خودکار رفتار مشتریان و پیش‌بینی ریزش (Churn Prediction)",
          "هوشمندسازی فرآیند استخدام، غربالگری رزومه‌ها و مدیریت استعدادها",
          "داشبوردهای هوشمند پیش‌بینانه (Predictive Analytics) و گزارش‌گیری خودکار",
        ],
        deliverables: ["نقشه فرآیندی جدید", "پایپ‌لاین اتوماتیک", "کاهش ۷۰٪ زمان پردازش", "مانیتورینگ خطای Real-time"],
      },
      {
        id: 3,
        title: "پیاده‌سازی، یکپارچه‌سازی و به‌روزرسانی",
        subtitle: "Implementation, Integration & Upgrades",
        icon: GitBranch,
        color: "indigo",
        badge: "استقرار فنی",
        tagline: "استقرار زیرساخت‌های نوین AI روی سرورهای داخلی (On-Premise) یا ابری",
        description: "خدمات فنی صفر تا صد شامل استقرار مدل‌های زبانی بزرگ، Fine-tuning روی داده‌های بومی سازمان، ارتقای نرم‌افزارهای سنتی به نسخه‌های هوش مصنوعی و یکپارچه‌سازی امن با APIهای سازمانی.",
        capabilities: [
          "استقرار On-Premise مدل‌های زبانی متن‌باز (Local LLMs) با صفر درصد نشت اطلاعات",
          "متصل‌سازی زیرساخت هوش مصنوعی به سرویس‌های Microsoft Dynamics, SAP, همکاران سیستم و...",
          "بهینه‌سازی سخت‌افزاری و GPU Orchestraction جهت کاهش هزینه‌های محاسباتی",
          "به‌روزرسانی و ارتقای نرم‌افزارهای legacy موجود در سازمان به استانداردهای مدرن هوش مصنوعی",
        ],
        deliverables: ["کانفیگ سرور و پایپ‌لاین", "API Gateway امن", "گارانتی SLA آپ‌تایم", "مستندات معماری سیستم"],
      },
      {
        id: 4,
        title: "انتقال تکنولوژی و دانش فنی",
        subtitle: "Technology Transfer & Internal IP Ownership",
        icon: ArrowRightLeft,
        color: "emerald",
        badge: "استقلال فناورانه",
        tagline: "انتقال کامل مالکیت فنی، سورس‌کدها و توانمندسازی تیم IT درون‌سازمانی",
        description: "ما سازمان‌ها را وابسته به خود نگه نمی‌داریم! تمام دانش فنی توسعه، راه‌اندازی و نگهداری ابزارها و مدل‌ها را همراه با مستندات استاندارد و آموزش فشرده به تیم فنی و مهندسی شما منتقل می‌کنیم.",
        capabilities: [
          "تحویل کامل مستندات معماری، سورس‌کدها و ریپازیتوری‌های پروژه",
          "آموزش Mentorship اختصاصی به مهندسان و برنامه‌نویسان سازمان شما",
          "تدوین شیوه‌نامه‌های نگهداری، پایش (MLOps) و بازآموزی مدل‌ها (Continuous Retraining)",
          "مشاوره در تدوین استانداردهای حاکمیت داده (Data Governance) و امنیت سایبری",
        ],
        deliverables: ["انتقال کامل سورس‌کد", "جلسات انتقال دانش", "شیوه‌نامه MLOps", "استقلال کامل تیم داخلی"],
      },
      {
        id: 5,
        title: "آموزش‌های تخصصی سازمانی",
        subtitle: "Enterprise Upskilling & Executive AI Masterclasses",
        icon: Building2,
        color: "purple",
        badge: "توانمندسازی کادر",
        tagline: "ارتقای مهارت مدیران ارشد و تیم‌های فنی سازمان در بهره‌برداری از ابزارهای هوش مصنوعی",
        description: "برگزاری دوره‌ها و کارگاه‌های درون‌سازمانی جهت ایجاد زبان مشترک، رفع مقاومت در برابر تغییر و توانمندسازی پرسنل برای استفاده روزمره و موثر از AI.",
        capabilities: [
          "مسترکلاس‌های اختصاصی استراتژی هوش مصنوعی ویژه اعضای هیئت مدیره و مدیران ارشد",
          "کارگاه‌های کاربردی مهندسی پرامپت و ابزارهای مولد (GenAI) برای کارکنان دپارتمان‌ها",
          "تدوین شیوه‌نامه‌های امنیت داده، حریم خصوصی و دستورالعمل‌های استفاده مجاز از AI در شرکت",
          "سوابق برگزاری در شرکت پتروشیمی تبریز، کتابخانه ملی، سازمان‌ها و هلدینگ‌های بزرگ کشور...",
        ],
        deliverables: ["گواهی رسمی پایان‌دوره", "اسلایدهای اختصاصی و محتوای کارگاه", "شیوه‌نامه اختصاصی پرامپت", "سنجش اثربخشی آموزش"],
      },
    ],
    ar: [
      {
        id: 0,
        title: "خريطة طريق التحول الذكي للمؤسسات",
        subtitle: "AI Strategic Blueprint, APQC Gap Analysis & Readiness Atlas",
        icon: Compass,
        color: "amber",
        badge: "الخطوة التأسيسية الأولى",
        tagline: "تشخيص هيكلي للعمليات وفق معايير APQC وتحليل الفجوات لبناء أطلس مشاريع ذكاء اصطناعي عالي العائد.",
        description: "في هذه الخدمة الأساسية، نقوم بفحص شامل للعمليات وهيكلية البيانات ومؤشرات الجاهزية الرقمية للمؤسسة. بناءً على إطار عمل APQC العالمي، نقدم وثيقة استراتيجية متكاملة وخريطة طريق مرحلية ذات عائد استثماري مجزٍ.",
        capabilities: [
          "نمذجة وتشخيص عمليات المؤسسة وفق منهجية التصنيف العالمي APQC",
          "تقييم مستوى النضج الرقمي ومؤشرات جاهزية المؤسسة للذكاء الاصطناعي (AI Readiness)",
          "تحليل الفجوات بين الوضع الحالي والمستهدف التقني في كافة الإدارات",
          "إعداد أطلس استراتيجي للمشاريع الذكية مع ترتيب أولويات العائد الاستثماري (ROI)",
          "تقديم وثيقة معمارية شاملة للتحول الذكي وخطة تنفيذية من ٣ إلى ٥ سنوات",
        ],
        deliverables: ["الوثيقة الاستراتيجية المعتمدة", "أطلس مشاريع التحول الذكي", "تقرير تحليل فجوات APQC", "مؤشر الجاهزية الرقمية"],
      },
      {
        id: 1,
        title: "وكلاء الذكاء الاصطناعي المستقلون (AI Agents)",
        subtitle: "AI Agents & Autonomous Multi-Agent Systems",
        icon: Bot,
        color: "cyan",
        badge: "تصميم مخصص",
        tagline: "تطوير وكلاء مستقلين لاتخاذ القرار ومعالجة البيانات وربطهم بأنظمة المؤسسة الداخلية.",
        description: "نبني لمؤسستكم شبكات وكلاء متعددة (Multi-Agents) قادرة على أداء المهام التحليلية المعقدة، المراقبة التشغيلية، خدمة العملاء على مدار الساعة، والتنسيق المؤتمت بين الأدوات.",
        capabilities: [
          "هندسة أسراب الوكلاء المتعددين (Multi-Agent Swarms) للأتمتة التشغيلية",
          "تطوير مساعدين أذكياء مع صلاحيات دخول صارمة للوثائق السرية (RAG مؤسسي)",
          "ربط الوكلاء بأنظمة ERP وCRM وقواعد البيانات والبريد الإلكتروني",
          "بناء أنظمة دعم اتخاذ القرار (Decision Support Systems) للإدارات العليا",
        ],
        deliverables: ["الشيفرة البرمجية المخصصة", "لوحة تحكم وإدارة الوكلاء", "ضمان حماية وسرية البيانات", "دعم فني مستمر"],
      },
      {
        id: 2,
        title: "أتمتة العمليات التجارية الذكية (BPA)",
        subtitle: "Business Process Intelligence & Intelligent Automation",
        icon: Cpu,
        color: "blue",
        badge: "أتمتة شاملة",
        tagline: "إزالة الاختناقات البشرية ومضاعفة سرعة تدفق العمليات المؤسسية حتى ٥ أضعاف.",
        description: "إعادة هندسة العمليات بدمج خوارزميات الذكاء الاصطناعي؛ أتمتة الإجراءات المالية، التوريد، الموارد البشرية وخدمات الدعم الفني بشكل ذكي بالكامل.",
        capabilities: [
          "المعالجة الذكية للوثائق والفواتير (Advanced OCR + استخراج البيانات المنظمة)",
          "التحليل التنبؤي لسلوك العملاء والتنبؤ بنسب الإلغاء (Churn Prediction)",
          "أتمتة دورات التوظيف وفرز السير الذاتية وإدارة الكفاءات",
          "لوحات بيانات تنبؤية وتقارير أداء مؤتمتة في الوقت الفعلي",
        ],
        deliverables: ["مخطط العمليات الجديد", "مسارات تدفق مؤتمتة", "خفض زمن المعالجة بنسبة ٧٠٪", "مراقبة الأخطاء في الوقت الفعلي"],
      },
      {
        id: 3,
        title: "النشر، التكامل والتحديث الفني",
        subtitle: "Implementation, Integration & Upgrades",
        icon: GitBranch,
        color: "indigo",
        badge: "استقرار تقني",
        tagline: "تثبيت نماذج الذكاء الاصطناعي محلياً على خوادم المؤسسة (On-Premise) أو البيئات السحابية السيادية.",
        description: "خدمات فنية متكاملة تشمل نشر النماذج اللغوية، الضبط الدقيق (Fine-Tuning) على البيانات المؤسسية، وتحديث الأنظمة القديمة مع بوابات API آمنة.",
        capabilities: [
          "النشر المحلي للنماذج مفتوحة المصدر (Local LLMs) مع ضمان عدم تسريب أي بيانات",
          "التكامل الآمن مع نظم SAP وMicrosoft Dynamics والأنظمة المحاسبية",
          "تحسين استهلاك عتاد معالجة الرسوميات (GPU Optimization) لخفض التكاليف",
          "تحديث البرمجيات القديمة (Legacy Systems) لترقيتها إلى معايير الذكاء الاصطناعي",
        ],
        deliverables: ["إعدادات الخوادم والمسارات", "بوابة API مشفرة وآمنة", "ضمان استقرار الخدمة (SLA)", "توثيق المعمارية البرمجية"],
      },
      {
        id: 4,
        title: "نقل التكنولوجيا والملكية الفكرية",
        subtitle: "Technology Transfer & Internal IP Ownership",
        icon: ArrowRightLeft,
        color: "emerald",
        badge: "استقلالية تقنية",
        tagline: "تسليم كامل الشيفرات والوثائق وتمكين الكوادر الهندسية الداخلية للمؤسسة.",
        description: "نحرص على تحقيق استقلالية المؤسسة التامة دون أي اعتمادية خارجية؛ حيث ننقل كافة المعارف والشيفرات مع برامج تدريبية وتأهيلية مكثفة.",
        capabilities: [
          "تسليم كامل مستودعات الشيفرات المصدرية والوثائق المعمارية",
          "برامج إرشاد وتدريب متقدمة لمهندسي ومبرمجي المؤسسة",
          "وضع أدلة تشغيل MLOps ومراقبة النماذج وتحديثها المستمر",
          "استشارات حوكمة البيانات وأمن المعلومات المتوافقة مع المعايير",
        ],
        deliverables: ["تسليم الشيفرة بنسبة ١٠٠٪", "جلسات نقل الخبرة الفنية", "أدلة تشغيل MLOps", "فريق داخلي مكتفٍ ذاتياً"],
      },
      {
        id: 5,
        title: "التدريب والتأهيل المؤسسي",
        subtitle: "Enterprise Upskilling & Executive AI Masterclasses",
        icon: Building2,
        color: "purple",
        badge: "تمكين الكوادر",
        tagline: "تأهيل الإدارات التنفيذية وفرق العمل للاستفادة القصوى من أدوات الذكاء الاصطناعي.",
        description: "ورش عمل مصممة لبناء لغة تقنية مشتركة، تقليل مقاومة التغيير وتمكين الموظفين من رفع إنتاجيتهم اليومية بأمان واحترافية.",
        capabilities: [
          "برامج تنفيذية استراتيجية لأعضاء مجالس الإدارة والمديرين التنفيذيين",
          "ورش عمل تطبيقية في صياغة الأوامر وهندسة البرومبت لمختلف الأقسام",
          "صياغة سياسات أمن البيانات والاستخدام الأخلاقي والمصرح به للذكاء الاصطناعي",
          "سجل تدريبي واسع مع قطاعات الطاقة، البلديات والمؤسسات الوطنية",
        ],
        deliverables: ["شهادات تدريب معتمدة", "عروض تقديمية وحقائب تدريبية", "دليل صياغة الأوامر المؤسسي", "تقييم العائد التدريبي"],
      },
    ],
  };

  const pillars = pillarsData[locale] || pillarsData.en;
  const currentPillar = pillars[activePillar] || pillars[0];

  return (
    <section id="enterprise-services" className="py-20 relative bg-slate-900 text-white overflow-hidden">
      {/* Background Decorative Grid and Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/90 border border-cyan-500/40 text-cyan-300 text-xs font-bold shadow-xs">
            <Zap className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            {t.title} <span className="text-gradient-cyan">{t.titleHighlight}</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl mx-auto">
            {t.description}
          </p>
        </div>

        {/* 6 Tabs Navigator */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-8">
          {pillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            const isActive = activePillar === idx;

            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillar(idx)}
                className={`p-3 sm:p-4 rounded-2xl border transition-all duration-200 flex flex-col items-center justify-center text-center gap-2 relative ${
                  isActive
                    ? "bg-slate-800 border-cyan-400 text-white shadow-lg shadow-cyan-950/50"
                    : "bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200"
                }`}
              >
                <div className={`p-2 rounded-xl transition-colors ${isActive ? "bg-cyan-500 text-slate-950" : "bg-slate-800 text-slate-300"}`}>
                  <IconComp className="w-5 h-5" />
                </div>
                <span className="font-bold text-[11px] sm:text-xs leading-tight line-clamp-2">
                  {pillar.title}
                </span>
                {isActive && (
                  <div className="absolute -bottom-1 w-10 h-1 bg-cyan-400 rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Pillar Showcase Panel */}
        <div className="glass-panel bg-slate-950/80 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left/Main Column: Overview & Capabilities */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 rounded-full text-xs font-black">
                  {currentPillar.badge}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {currentPillar.subtitle}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                  {currentPillar.title}
                </h3>
                <p className="text-sm font-semibold text-cyan-300/90 leading-snug">
                  {currentPillar.tagline}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {currentPillar.description}
              </p>

              {/* Capabilities List */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">
                  {locale === "en" ? "Key Scope & Technical Capabilities:" : locale === "fa" ? "دامنه اجرایی و قابلیت‌های فنی:" : "النطاق التنفيذي والقدرات التقنية:"}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentPillar.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/90 border border-slate-800/80 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right/Side Column: Deliverables & Direct CTA */}
            <div className="lg:col-span-4 space-y-6 bg-slate-900/90 border border-slate-800 p-6 rounded-2xl">
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-cyan-300 mb-3 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>{locale === "en" ? "Verified Deliverables" : locale === "fa" ? "خروجی‌ها و مستندات تحویلی" : "المخرجات والوثائق المسلمة"}</span>
                </h4>
                <ul className="space-y-2">
                  {currentPillar.deliverables.map((del, i) => (
                    <li key={i} className="text-xs text-slate-300 flex items-center gap-2 border-b border-slate-800/60 pb-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 border-t border-slate-800 space-y-3">
                <Link
                  href={getLocalizedPath("/contact", locale)}
                  className="w-full py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-black text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 transition-all shadow-md active:scale-98"
                >
                  <Phone className="w-4 h-4" />
                  <span>{t.consultationCta}</span>
                </Link>

                <Link
                  href={getLocalizedPath("/services/enterprise-ai", locale)}
                  className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all border border-slate-700"
                >
                  <span>{t.viewAllServicesBtn}</span>
                  {isLtr ? <ArrowRight className="w-3.5 h-3.5" /> : <ArrowLeft className="w-3.5 h-3.5" />}
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
