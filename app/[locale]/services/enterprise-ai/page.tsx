import Link from "next/link";
import {
  ShieldCheck,
  Zap,
  CheckCircle2,
  Phone,
  Globe,
  ArrowRight,
  ArrowLeft,
  Layers,
  Database,
  Bot,
  GitBranch,
  BarChart3,
  Lock,
  Scale,
  Server,
} from "lucide-react";
import ContactTeaser from "@/components/ContactTeaser";
import EnterpriseContactForm from "@/components/EnterpriseContactForm";
import EnterpriseServices from "@/components/EnterpriseServices";
import { Locale, isValidLocale, getAlternateUrls, getLocalizedPath, getDirection } from "@/lib/i18n";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ locale: string }>;
}

interface InfrastructurePillar {
  num: string;
  enTerm: string;
  title: string;
  desc: string;
  specs: string[];
  accent: "cyan" | "indigo" | "purple" | "blue" | "amber" | "emerald" | "rose";
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const alternates = getAlternateUrls("/services/enterprise-ai");

  const titles: Record<Locale, string> = {
    en: "Enterprise AI Transformation, Infrastructure & Strategic Roadmap | DigiNoron",
    fa: "خدمات هوشمندسازی سازمانی، زیرساخت‌های هوش مصنوعی و سند راهبردی | دیجی نورون",
    ar: "حلول التحول الذكي والبنية التحتية وخريطة طريق الذكاء الاصطناعي للمؤسسات | ديجي نورون",
  };

  const descriptions: Record<Locale, string> = {
    en: "Enterprise AI consulting, APQC gap analysis, Enterprise AI Architecture, Knowledge Base, Multi-Agent Systems, Workflow Automation, Predictive Analytics, AI Security, and AI Governance.",
    fa: "پیاده‌سازی زیرساخت‌های جامع هوش مصنوعی سازمانی شامل Enterprise AI Architecture، پایگاه دانش و حافظه سازمانی، سیستم‌های Multi-Agent، اتوماسیون گردش کار، تحلیل پیش‌بینانه، امنیت و حاکمیت هوش مصنوعی.",
    ar: "خدمات متخصصة في بناء البنية التحتية للذكاء الاصطناعي المؤسسي، قواعد المعرفة، أنظمة الوكلاء المتعددين، أتمتة مسارات العمل، التحليلات التنبؤية، الأمن وحوكمة الذكاء الاصطناعي.",
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

export default async function EnterpriseAIPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const isLtr = getDirection(locale) === "ltr";

  const content = {
    en: {
      badge: "DigiNoron Enterprise AI Division",
      title: "Strategic AI Roadmaps &",
      titleHighlight: "Enterprise Autonomous Transformation",
      description:
        "From APQC-aligned organizational auditing and high-ROI opportunity atlases to autonomous multi-agent systems, BPA process automation, air-gapped On-Premise infrastructure, and comprehensive IP transfer.",
      demoBtn: "Request Architectural Consultation",
      phoneBtn: "Direct Line: +61 451 410 352",
      advantagesTitle: "Key Advantages of DigiNoron Solutions",
      adv1Title: "Global APQC Standard:",
      adv1Desc: "Systematic process gap analysis and establishing an initiative atlas prioritized by ROI payback.",
      adv2Title: "Secure On-Premise Hosting:",
      adv2Desc: "100% guarantee that confidential operational data never leaves your enterprise boundary.",
      adv3Title: "Autonomous Multi-Agents:",
      adv3Desc: "Cooperative agent swarms executing cross-departmental tasks with machine speed and human precision.",
      adv4Title: "Full Source & IP Transfer:",
      adv4Desc: "Zero long-term vendor dependency; complete code handover and mentoring for in-house engineering squads.",
      infraBadge: "End-to-End Enterprise AI Stack",
      infraTitle: "Core AI Infrastructures We",
      infraTitleHighlight: "Architect & Deploy in Your Organization",
      infraSubtitle:
        "Beyond isolated tools, DigiNoron designs and deploys a cohesive 7-layer enterprise AI infrastructure stack—transforming your organization into a secure, autonomous, and data-driven ecosystem.",
      infraPillars: [
        {
          num: "01",
          enTerm: "Enterprise AI Architecture",
          title: "Comprehensive Enterprise AI Architecture",
          desc: "Designing a scalable, modular, and future-proof AI blueprint that seamlessly integrates local LLMs, cloud gateways, microservices, and existing legacy ERP/CRM systems.",
          specs: ["On-Premise & Hybrid Cloud Topology", "API Gateway & Model Routing", "Legacy ERP/CRM Integration"],
          accent: "cyan",
        },
        {
          num: "02",
          enTerm: "Enterprise Knowledge Base",
          title: "Organizational Intelligence Brain & Memory",
          desc: "Transforming scattered documents, SOPs, contracts, and institutional know-how into a living, searchable semantic memory powered by advanced Enterprise RAG and Vector Databases.",
          specs: ["Advanced Enterprise RAG", "Vector Databases & Knowledge Graphs", "Real-Time Document Indexing"],
          accent: "indigo",
        },
        {
          num: "03",
          enTerm: "Multi-Agent System",
          title: "Cooperative Network of Autonomous AI Agents",
          desc: "Deploying specialized AI agents across finance, HR, sales, legal, and operations that communicate, delegate tasks, call internal tools, and solve complex workflows collaboratively.",
          specs: ["Multi-Agent Orchestration", "Tool & Function Calling (MCP)", "Cross-Departmental Collaboration"],
          accent: "purple",
        },
        {
          num: "04",
          enTerm: "AI Workflow Automation",
          title: "Intelligent Organizational Workflow Automation",
          desc: "Eliminating manual bottlenecks and repetitive administrative tasks by embedding intelligent reasoning pipelines directly into end-to-end organizational processes.",
          specs: ["Intelligent BPA Pipelines", "Automated Document & OCR Processing", "Zero-Touch Task Execution"],
          accent: "blue",
        },
        {
          num: "05",
          enTerm: "Predictive Analytics",
          title: "Forecasting, Analysis & Executive Decision-Making",
          desc: "Empowering C-suite leaders and department heads with AI-driven Decision Support Systems (DSS), demand forecasting, anomaly detection, and strategic scenario simulation.",
          specs: ["Executive Decision Support (DSS)", "Market & Financial Forecasting", "Real-Time KPI Telemetry"],
          accent: "amber",
        },
        {
          num: "06",
          enTerm: "Enterprise AI Security",
          title: "Security, Access Control & Data Confidentiality",
          desc: "Protecting sensitive corporate assets with air-gapped local deployments, granular Role-Based Access Control (RBAC), data anonymization, and Prompt Injection guardrails.",
          specs: ["100% Air-Gapped / On-Premise Option", "Granular Document RBAC", "DLP & Prompt Guardrails"],
          accent: "emerald",
        },
        {
          num: "07",
          enTerm: "AI Governance",
          title: "Monitoring, Control & AI Performance Evaluation",
          desc: "Establishing complete observability, audit trails, hallucination monitoring, token cost governance, and continuous accuracy benchmarking across all deployed models and agents.",
          specs: ["LLMOps & Real-Time Tracing", "Hallucination & Accuracy Audits", "Regulatory & Policy Compliance", "ROI & Token Cost Control"],
          accent: "rose",
        },
      ] as InfrastructurePillar[],
    },
    fa: {
      badge: "دپارتمان تخصصی هوشمندسازی سازمانی دیجی نورون",
      title: "طراحی سند راهبردی و",
      titleHighlight: "هوشمندسازی جامع سازمان‌ها",
      description:
        "ما از تحلیل ساختار و فرآیندها مبتنی بر چارچوب بین‌المللی APQC و تدوین اطلس پروژه‌های بهبود تا طراحی ایجنت‌های خودمختار، اتوماسیون هوشمند (BPA)، استقرار امن On-Premise، انتقال تکنولوژی و آموزش‌های سازمانی در کنار شما هستیم.",
      demoBtn: "درخواست جلسه دمو و تدوین سند راهبردی",
      phoneBtn: "مشاوره مستقیم: ۰۲۱۸۸۲۵۲۴۹۷",
      advantagesTitle: "مزایای راهکارهای سازمانی دیجی نورون",
      adv1Title: "استاندارد جهانی APQC:",
      adv1Desc: "عارضه‌یابی فرآیندها، تحلیل شکاف و اطلس پروژه‌های با بالاترین ROI",
      adv2Title: "استقرار محلی (On-Premise):",
      adv2Desc: "تضمین ۱۰۰٪ عدم خروج داده‌های حساس و محرمانه از شبکه سازمان",
      adv3Title: "ایجنت‌های چندعامله (Multi-Agent):",
      adv3Desc: "انجام خودکار وظایف بین‌واحدی با دقت انسانی و سرعت ماشین",
      adv4Title: "انتقال کامل سورس‌کد و دانش:",
      adv4Desc: "عدم وابستگی دائمی به پیمانکار و آموزش کامل تیم IT داخلی",
      infraBadge: "معماری ۷ لایه هوش مصنوعی سازمانی",
      infraTitle: "زیرساخت‌های کلیدی هوش مصنوعی که در",
      infraTitleHighlight: "سازمان شما پیاده‌سازی می‌کنیم",
      infraSubtitle:
        "هوشمندسازی واقعی فراتر از نصب چند چت‌بات مجزاست؛ ما در دیجی نورون ۷ زیرساخت بنیادین و یکپارچه هوش مصنوعی را در سازمان شما طراحی و مستقر می‌کنیم تا تمامی بخش‌ها به صورت امن، هماهنگ و هوشمند عمل کنند:",
      infraPillars: [
        {
          num: "۱",
          enTerm: "Enterprise AI Architecture",
          title: "معماری جامع هوش مصنوعی سازمان",
          desc: "طراحی و استقرار زیرساخت مقیاس‌پذیر، ماژولار و بومی هوش مصنوعی که مدل‌های زبانی، سرورهای پردازشی و سامانه‌های فعلی سازمان (ERP، CRM و اتوماسیون) را در یک معماری یکپارچه به هم متصل می‌کند.",
          specs: ["استقرار On-Premise و هیبریدی", "لایه یکپارچه‌سازی API و میکروسرویس", "اتصال امن به سامانه‌های سازمانی"],
          accent: "cyan",
        },
        {
          num: "۲",
          enTerm: "Enterprise Knowledge Base",
          title: "مغز اطلاعاتی و حافظه سازمان",
          desc: "تبدیل تمامی اسناد، آیین‌نامه‌ها، قراردادها، گزارش‌ها و دانش ضمنی افراد به یک حافظه متمرکز، پویا و قابل جستجوی معنایی با بهره‌گیری از معماری RAG سازمانی پیشرفته و پایگاه‌های داده برداری.",
          specs: ["معماری RAG سازمانی پیشرفته", "پایگاه داده برداری و گراف دانش", "حفظ و تجمیع دانش سازمانی"],
          accent: "indigo",
        },
        {
          num: "۳",
          enTerm: "Multi-Agent System",
          title: "شبکه‌ای از عامل‌های هوشمند که با هم کار می‌کنند",
          desc: "طراحی اکوسیستمی از ایجنت‌های تخصصی در واحدهای مالی، فروش، منابع انسانی، حقوقی و عملیات که به صورت هماهنگ با یکدیگر تبادل داده کرده، ابزارها را فراخوانی می‌کنند و پروژه‌های چندمرحله‌ای را پیش می‌برند.",
          specs: ["هماهنگی خودکار بین ایجنت‌ها", "فراخوانی ابزارها و دیتابیس‌ها (MCP)", "اجرای وظایف پیچیده بین‌واحدی"],
          accent: "purple",
        },
        {
          num: "۴",
          enTerm: "AI Workflow Automation",
          title: "خودکارسازی گردش کارهای سازمانی",
          desc: "حذف گلوگاه‌های دستی، کاغذبازی‌ها و فرآیندهای تکراری از طریق تزریق هوش مصنوعی تصمیم‌گیر به زنجیره گردش کارهای اداری، مالی، تدارکات، بازرگانی و خدمات مشتریان.",
          specs: ["اتوماسیون هوشمند فرآیندها (BPA)", "پردازش هوشمند اسناد و فرم‌ها (OCR)", "کاهش چشمگیر زمان انجام فرآیندها"],
          accent: "blue",
        },
        {
          num: "۵",
          enTerm: "Predictive Analytics",
          title: "پیش‌بینی، تحلیل و تصمیم‌سازی مدیریتی",
          desc: "تجهیز مدیران ارشد و میانی به سیستم‌های پشتیبان تصمیم (DSS) و داشبوردهای تحلیلی پیش‌بینانه جهت آینده‌پژوهی بازار، پیش‌بینی تقاضا و فروش، تشخیص زودهنگام ریسک‌ها و سناریونگاری استراتژیک.",
          specs: ["سیستم‌های پشتیبان تصمیم‌گیری (DSS)", "پیش‌بینی روندهای مالی و بازار", "داشبوردهای تحلیلی لحظه‌ای مدیران"],
          accent: "amber",
        },
        {
          num: "۶",
          enTerm: "Enterprise AI Security",
          title: "امنیت، سطح دسترسی و محرمانگی اطلاعات",
          desc: "تضمین حفاظت ۱۰۰ درصدی از اسرار تجاری و داده‌های حساس سازمان با کنترل دسترسی مبتنی بر نقش (RBAC)، ناشناس‌سازی اطلاعات، سپرهای دفاعی در برابر حملات سایبری و عدم خروج داده از شبکه داخلی.",
          specs: ["کنترل سطح دسترسی دقیق (RBAC)", "جلوگیری از نشت داده (DLP)", "محافظت در برابر Prompt Injection"],
          accent: "emerald",
        },
        {
          num: "۷",
          enTerm: "AI Governance",
          title: "نظارت، کنترل و ارزیابی عملکرد هوش مصنوعی",
          desc: "ایجاد چارچوب حاکمیت، پایش مستمر دقت پاسخ‌ها، جلوگیری از خطای توهم (Hallucination)، ثبت کامل لاگ‌های عملیاتی (Audit Logs)، مدیریت مصرف منابع و سنجش نرخ بازگشت سرمایه (ROI) مدل‌ها و ایجنت‌ها.",
          specs: ["پایش و ردیابی لحظه‌ای (LLMOps)", "کنترل دقت و حذف توهم مدل‌ها", "ثبت لاگ‌های ممیزی و انطباق با قوانین", "مدیریت هزینه و ارزیابی مستمر ROI"],
          accent: "rose",
        },
      ] as InfrastructurePillar[],
    },
    ar: {
      badge: "قطاع حلول الذكاء الاصطناعي للمؤسسات - ديجي نورون",
      title: "إعداد خريطة الطريق الاستراتيجية و",
      titleHighlight: "التحول الذكي الشامل للمؤسسات",
      description:
        "نرافقكم من التشخيص الهيكلي للعمليات وفق معايير APQC العالمية وإعداد أطلس المشاريع، إلى تطوير وكلاء الذكاء الاصطناعي المستقلين، أتمتة العمليات (BPA)، النشر المحلي الآمن (On-Premise)، ونقل التكنولوجيا بالكامل.",
      demoBtn: "طلب جلسة استشارية وعرض حي",
      phoneBtn: "الاتصال المباشر: +61 451 410 352",
      advantagesTitle: "مزايا حلول ديجي نورون المؤسسية",
      adv1Title: "معايير APQC العالمية:",
      adv1Desc: "تشخيص العمليات، تحليل الفجوات وأطلس مشاريع ذكاء اصطناعي بأعلى عائد استثماري (ROI).",
      adv2Title: "النشر المحلي الآمن (On-Premise):",
      adv2Desc: "ضمان عدم خروج أي بيانات سرية أو حساسة خارج خوادم المؤسسة.",
      adv3Title: "شبكات الوكلاء المتعددين (Multi-Agents):",
      adv3Desc: "تنفيذ مؤتمت للعمليات بين الإدارات بدقة بشرية وسرعة فائقة.",
      adv4Title: "نقل كامل للشيفرة والخبرة:",
      adv4Desc: "استقلالية تقنية تامة دون اعتمادية خارجية مع تأهيل الفريق التقني الداخلي.",
      infraBadge: "منظومة البنية التحتية السباعية للذكاء الاصطناعي",
      infraTitle: "البنى التحتية للذكاء الاصطناعي التي",
      infraTitleHighlight: "نبنيها وننفذها في مؤسستكم",
      infraSubtitle:
        "يتجاوز التحول الذكي الحقيقي مجرد استخدام أدوات منفصلة؛ نحن في ديجي نورون نصمم وننشر ٧ ركائز بنية تحتية متكاملة للذكاء الاصطناعي لتحويل مؤسستكم إلى منظومة ذكية، آمنة ومستقلة:",
      infraPillars: [
        {
          num: "١",
          enTerm: "Enterprise AI Architecture",
          title: "المعمارية الشاملة للذكاء الاصطناعي المؤسسي",
          desc: "تصميم ونشر بنية تحتية معيارية وقابلة للتوسع تربط النماذج اللغوية والخوادم المحلية بأنظمة المؤسسة الحالية (ERP وCRM وقواعد البيانات) ضمن معمارية هندسية موحدة.",
          specs: ["نشر محلي On-Premise وهجين", "بوابات API وتوجيه النماذج", "تكامل سلس مع أنظمة ERP/CRM"],
          accent: "cyan",
        },
        {
          num: "٢",
          enTerm: "Enterprise Knowledge Base",
          title: "العقل المعلوماتي والذاكرة المؤسسية",
          desc: "تحويل كافة الوثائق، اللوائح، العقود، التقارير والخبرات التراكمية إلى ذاكرة مؤسسية مركزية ذكية قابلة للبحث الدلالي عبر معمارية RAG المتقدمة وقواعد البيانات المتجهة.",
          specs: ["معمارية RAG المؤسسية المتقدمة", "قواعد البيانات المتجهة والرسوم المعرفية", "فهرسة فورية ومستمرة للوثائق"],
          accent: "indigo",
        },
        {
          num: "٣",
          enTerm: "Multi-Agent System",
          title: "شبكة من الوكلاء الأذكياء الذين يعملون معاً",
          desc: "بناء منظومة متعاونة من الوكلاء الأذكياء المتخصصين في المالية، الموارد البشرية، المبيعات، الشؤون القانونية والعمليات يتبادلون البيانات وينفذون المهام المعقدة بتناغم تام.",
          specs: ["تنسيق تعاوني بين الوكلاء", "استدعاء الأدوات والأنظمة (MCP)", "إنجاز المهام العابرة للإدارات"],
          accent: "purple",
        },
        {
          num: "٤",
          enTerm: "AI Workflow Automation",
          title: "أتمتة مسارات العمل المؤسسية",
          desc: "إزالة الاختناقات اليدوية والإجراءات الروتينية عبر دمج خوارزميات الذكاء الاصطناعي التقريرية مباشرة في صميم مسارات العمل الإدارية والمالية واللوجستية.",
          specs: ["أتمتة العمليات الذكية (BPA)", "معالجة ذكية للمستندات (OCR)", "تقليص جذري لزمن إنجاز المعاملات"],
          accent: "blue",
        },
        {
          num: "٥",
          enTerm: "Predictive Analytics",
          title: "التنبؤ، التحليل وصناعة القرار الإداري",
          desc: "تمكين القيادات التنفيذية ومديري الإدارات بأنظمة دعم القرار (DSS) ولوحات التحليل التنبؤي لاستشراف اتجاهات السوق، التنبؤ بالطلب، واكتشاف المخاطر مبكراً.",
          specs: ["أنظمة دعم اتخاذ القرار (DSS)", "التنبؤ المالي واستشراف السوق", "لوحات مؤشرات أداء لحظية"],
          accent: "amber",
        },
        {
          num: "٦",
          enTerm: "Enterprise AI Security",
          title: "الأمان، صلاحيات الوصول وسرية المعلومات",
          desc: "حماية صارمة لأسرار العمل والبيانات الحساسة عبر التحكم الدقيق بالوصول المبني على الأدوار (RBAC)، إخفاء الهوية، والحماية من هجمات حقن الأوامر مع ضمان عدم تسرب البيانات.",
          specs: ["تحكم دقيق بالصلاحيات (RBAC)", "منع تسرب البيانات (DLP)", "حواجز حماية ضد Prompt Injection"],
          accent: "emerald",
        },
        {
          num: "٧",
          enTerm: "AI Governance",
          title: "الرقابة، التحكم وتقييم أداء الذكاء الاصطناعي",
          desc: "إرساء منظومة حوكمة شاملة لمراقبة دقة المخرجات، منع الهلوسة، توثيق سجلات التدقيق (Audit Logs)، التحكم بالتكاليف التشغيلية، وقياس العائد الاستثماري (ROI) للنماذج والوكلاء.",
          specs: ["مراقبة وتتبع لحظي (LLMOps)", "فحص الدقة ومنع الهلوسة", "سجلات تدقيق وامتثال تنظيمي", "حوكمة التكاليف وتقييم العائد ROI"],
          accent: "rose",
        },
      ] as InfrastructurePillar[],
    },
  };

  const t = content[locale] || content.en;

  const getInfraStyle = (accent: InfrastructurePillar["accent"], idx: number) => {
    const icons = [Layers, Database, Bot, GitBranch, BarChart3, Lock, Scale];
    const IconComp = icons[idx] || Server;

    switch (accent) {
      case "cyan":
        return {
          icon: IconComp,
          cardBorder: "border-cyan-200 hover:border-cyan-400",
          iconBg: "bg-cyan-600 text-white shadow-cyan-600/25",
          enBadge: "bg-cyan-50 text-cyan-800 border-cyan-200",
          numBadge: "bg-cyan-100 text-cyan-900",
          specDot: "text-cyan-600",
          topBar: "from-cyan-500 to-blue-600",
        };
      case "indigo":
        return {
          icon: IconComp,
          cardBorder: "border-indigo-200 hover:border-indigo-400",
          iconBg: "bg-indigo-600 text-white shadow-indigo-600/25",
          enBadge: "bg-indigo-50 text-indigo-800 border-indigo-200",
          numBadge: "bg-indigo-100 text-indigo-900",
          specDot: "text-indigo-600",
          topBar: "from-indigo-500 to-purple-600",
        };
      case "purple":
        return {
          icon: IconComp,
          cardBorder: "border-purple-200 hover:border-purple-400",
          iconBg: "bg-purple-600 text-white shadow-purple-600/25",
          enBadge: "bg-purple-50 text-purple-800 border-purple-200",
          numBadge: "bg-purple-100 text-purple-900",
          specDot: "text-purple-600",
          topBar: "from-purple-500 to-fuchsia-600",
        };
      case "blue":
        return {
          icon: IconComp,
          cardBorder: "border-blue-200 hover:border-blue-400",
          iconBg: "bg-blue-600 text-white shadow-blue-600/25",
          enBadge: "bg-blue-50 text-blue-800 border-blue-200",
          numBadge: "bg-blue-100 text-blue-900",
          specDot: "text-blue-600",
          topBar: "from-blue-500 to-cyan-600",
        };
      case "amber":
        return {
          icon: IconComp,
          cardBorder: "border-amber-200 hover:border-amber-400",
          iconBg: "bg-amber-500 text-slate-950 shadow-amber-500/25",
          enBadge: "bg-amber-50 text-amber-900 border-amber-200",
          numBadge: "bg-amber-100 text-amber-950",
          specDot: "text-amber-600",
          topBar: "from-amber-500 to-orange-500",
        };
      case "emerald":
        return {
          icon: IconComp,
          cardBorder: "border-emerald-200 hover:border-emerald-400",
          iconBg: "bg-emerald-600 text-white shadow-emerald-600/25",
          enBadge: "bg-emerald-50 text-emerald-800 border-emerald-200",
          numBadge: "bg-emerald-100 text-emerald-900",
          specDot: "text-emerald-600",
          topBar: "from-emerald-500 to-teal-600",
        };
      case "rose":
      default:
        return {
          icon: IconComp,
          cardBorder: "border-rose-200 hover:border-rose-400",
          iconBg: "bg-rose-600 text-white shadow-rose-600/25",
          enBadge: "bg-rose-50 text-rose-800 border-rose-200",
          numBadge: "bg-rose-100 text-rose-900",
          specDot: "text-rose-600",
          topBar: "from-rose-500 via-purple-600 to-cyan-600",
        };
    }
  };

  return (
    <div className="space-y-20 py-10">
      {/* Hero Header */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white p-8 sm:p-14 rounded-3xl border border-cyan-500/30 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 text-xs font-bold">
                  <Zap className="w-4 h-4 text-cyan-400 animate-pulse" />
                  <span>{t.badge}</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-black leading-tight">
                  {t.title} <span className="text-gradient-cyan">{t.titleHighlight}</span>
                </h1>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {t.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#consultation-form"
                    className="px-7 py-4 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-black rounded-xl shadow-lg shadow-cyan-500/25 text-sm transition-all hover:scale-105"
                  >
                    {t.demoBtn}
                  </a>
                  <a
                    href={locale === "fa" ? "tel:02188252497" : "tel:+61451410352"}
                    className="px-6 py-4 bg-slate-800/80 border border-slate-700 hover:bg-slate-800 text-white text-sm font-bold rounded-xl flex items-center gap-2 transition-all"
                  >
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span dir="ltr">{t.phoneBtn}</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs font-bold text-cyan-300">
                  <span>{t.advantagesTitle}</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex items-start gap-2.5 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>{t.adv1Title}</strong> {t.adv1Desc}
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>{t.adv2Title}</strong> {t.adv2Desc}
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>{t.adv3Title}</strong> {t.adv3Desc}
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>{t.adv4Title}</strong> {t.adv4Desc}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7 Enterprise AI Infrastructures Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-800 text-xs font-bold shadow-2xs">
            <Server className="w-4 h-4 text-cyan-700" />
            <span>{t.infraBadge}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
            {t.infraTitle}{" "}
            <span className="text-gradient-cyan">{t.infraTitleHighlight}</span>
          </h2>

          <p className="text-xs sm:text-base text-slate-600 leading-relaxed">
            {t.infraSubtitle}
          </p>
        </div>

        {/* 7-Layer Architectural Grid: Items 1-6 in 3-col grid, Item 7 (AI Governance) spanning full width */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {t.infraPillars.map((pillar, idx) => {
            const style = getInfraStyle(pillar.accent, idx);
            const IconComp = style.icon;
            const isFullWidth = idx === 6;

            return (
              <div
                key={pillar.enTerm}
                className={`${
                  isFullWidth ? "md:col-span-2 lg:col-span-12" : "lg:col-span-4"
                } glass-panel bg-white rounded-3xl border ${
                  style.cardBorder
                } shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between group`}
              >
                {/* Top Gradient Accent Bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${style.topBar}`} />

                <div className={`p-6 sm:p-7 ${isFullWidth ? "lg:p-8" : ""} space-y-5 flex-1 flex flex-col justify-between`}>
                  <div className={isFullWidth ? "grid grid-cols-1 lg:grid-cols-12 gap-6 items-center" : "space-y-4"}>
                    <div className={isFullWidth ? "lg:col-span-7 space-y-4" : "space-y-4"}>
                      {/* Header Row: Icon + Number & English Technical Term */}
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className={`p-3 rounded-2xl shadow-md ${style.iconBg} group-hover:scale-105 transition-transform`}>
                            <IconComp className="w-6 h-6" />
                          </div>
                          <span
                            dir="ltr"
                            className={`px-3 py-1 rounded-xl text-xs font-mono font-extrabold border ${style.enBadge}`}
                          >
                            {pillar.enTerm}
                          </span>
                        </div>

                        <span className={`w-8 h-8 rounded-xl text-xs font-black flex items-center justify-center shrink-0 ${style.numBadge}`}>
                          {pillar.num}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <div className="space-y-2">
                        <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
                          {pillar.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>

                    {/* Technical Capabilities / Specs List */}
                    <div
                      className={
                        isFullWidth
                          ? "lg:col-span-5 bg-slate-50/90 p-5 rounded-2xl border border-slate-200/80"
                          : "pt-4 border-t border-slate-100"
                      }
                    >
                      <div className={`grid grid-cols-1 ${isFullWidth ? "sm:grid-cols-2" : ""} gap-2`}>
                        {pillar.specs.map((spec, sIdx) => (
                          <div
                            key={sIdx}
                            className="flex items-center gap-2 text-xs font-bold text-slate-700 bg-slate-50/80 px-3 py-2 rounded-xl border border-slate-200/60"
                          >
                            <CheckCircle2 className={`w-4 h-4 shrink-0 ${style.specDot}`} />
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6 Core Enterprise Solutions Interactive Display */}
      <EnterpriseServices locale={locale} />

      {/* Featured Sub-Division: International Trade AI */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-950/60 p-6 sm:p-10 rounded-3xl border border-emerald-500/30 shadow-xl relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-300 text-xs font-bold">
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span>
                {locale === "en"
                  ? "Specialized Enterprise Division"
                  : locale === "fa"
                  ? "دپارتمان تخصصی بازرگانی خارجی"
                  : "القطاع التخصصي للتجارة الدولية"}
              </span>
            </div>
            <h3 className="text-xl sm:text-3xl font-black text-white">
              {locale === "en"
                ? "AI for International Trade & Cross-Border Commerce"
                : locale === "fa"
                ? "هوشمند سازی جامع تجارت بین‌الملل و بازرگانی خارجی"
                : "التحول الذكي الشامل للتجارة الدولية"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {locale === "en"
                ? "Specialized multi-agent swarms engineered for International Trade Law & Sanctions, Global B2B Export Marketing, Smart Logistics & HS Code Clearance, and Trade Finance & Settlement (LCs & FX Hedging)."
                : locale === "fa"
                ? "راهکار تخصصی چندعامله دیجی نورون در چهار رکن: حقوق تجارت و تحریم‌ها، بازاریابی صادراتی، لجستیک و گمرک هوشمند، و تسویه مالی بین‌الملل (ستلمنت و مدیریت ارزی)."
                : "حلول الوكلاء المتعددين المتخصصة في القانون التجاري، التسويق التصديري الذكي، اللوجستيات والتخليص الجمركي، والتمويل والتسوية المالية الدولية."}
            </p>
          </div>

          <Link
            href={getLocalizedPath("/services/international-trade-ai", locale)}
            className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs sm:text-sm font-black transition-all flex items-center gap-2 self-start lg:self-center shrink-0 shadow-lg shadow-emerald-600/20"
          >
            <span>
              {locale === "en"
                ? "Explore Trade AI Solutions"
                : locale === "fa"
                ? "ورود به بخش هوشمندسازی تجارت"
                : "عرض حلول التجارة الدولية"}
            </span>
            {isLtr ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
          </Link>
        </div>
      </section>

      {/* Enterprise Lead Inbound Form */}
      <section id="consultation-form" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <EnterpriseContactForm locale={locale} />
      </section>

      <ContactTeaser locale={locale} />
    </div>
  );
}
