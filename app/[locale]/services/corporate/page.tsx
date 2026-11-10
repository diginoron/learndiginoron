import Image from "next/image";
import {
  Building2,
  Phone,
  TrendingUp,
  Cpu,
  ShieldCheck,
  Users,
  Compass,
  Layers,
  Sparkles,
  Server,
  CheckCircle2,
  Target,
  Award,
  BookOpen,
} from "lucide-react";
import { COURSES } from "@/data/courses";
import CourseCard from "@/components/CourseCard";
import ContactTeaser from "@/components/ContactTeaser";
import { Locale, isValidLocale, getAlternateUrls, getDirection } from "@/lib/i18n";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ locale: string }>;
}

interface AudienceGroupData {
  id: string;
  levelBadge: string;
  groupName: string;
  coreTopic: string;
  summary: string;
  durationFormat: string;
  keyOutcome: string;
  detailedDesc: string;
  modules: string[];
  toolsAndConcepts: string[];
  deliverable: string;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const alternates = getAlternateUrls("/services/corporate");

  const titles: Record<Locale, string> = {
    en: "Corporate AI Training, Target Audiences & Executive Masterclasses | DigiNoron",
    fa: "خدمات آموزش هوش مصنوعی سازمانی، مخاطبین و سرفصل‌های دوره | دیجی نورون",
    ar: "التدريب المؤسسي في الذكاء الاصطناعي والفئات المستهدفة والمناهج | ديجي نورون",
  };

  const descriptions: Record<Locale, string> = {
    en: "Comprehensive corporate AI training programs tailored for CEOs & Senior Executives, Middle Managers, Specialists & Staff, and Enterprise IT Teams.",
    fa: "دوره‌ها و کارگاه‌های تخصصی آموزش هوش مصنوعی سازمانی دیجی نورون ویژه مدیرعامل و مدیران ارشد، مدیران میانی، کارشناسان و کارکنان، و تیم فناوری اطلاعات (IT).",
    ar: "برامج وورش عمل تدريبية متخصصة في الذكاء الاصطناعي للمؤسسات موجهة للرؤساء التنفيذيين، المديرين التنفيذيين، الموظفين، وفرق تقنية المعلومات.",
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

export default async function CorporateServicePage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const isLtr = getDirection(locale) === "ltr";
  const corporateCourses = COURSES.filter((c) => c.category === "corporate");

  const content = {
    en: {
      badge: "DigiNoron Corporate Training Department",
      title: "Comprehensive Corporate & Executive",
      titleHighlight: "AI Training Solutions",
      description:
        "Accelerate organizational throughput, automate administrative routines, and build end-to-end AI capability across every layer of your enterprise—from the C-Suite and middle management to operational specialists and IT engineering teams.",
      requestWorkshopBtn: "Request Customized Enterprise Workshop",
      inquiryPhoneBtn: "Enterprise Line: +61 451 410 352",
      calloutTitle: "Role-Based Organizational Transformation",
      calloutSubtitle: "Curricula completely customized around your organizational hierarchy, data, and workflows",
      matrixBadge: "Structured Organizational Enablement",
      matrixTitle: "Target Audience Groups & Educational Content Matrix",
      matrixSubtitle:
        "Every organizational tier interacts with Artificial Intelligence differently. We have engineered four specialized training tracks tailored to the exact responsibilities of each group.",
      colAudience: "Audience Group",
      colCoreContent: "Core Educational Content",
      colFormat: "Recommended Format",
      colOutcome: "Key Organizational Outcome",
      detailedSectionBadge: "Detailed Syllabus by Organizational Tier",
      detailedSectionTitle: "Comprehensive Educational Content for Each Audience Group",
      detailedSectionSubtitle:
        "In-depth modules, practical workshops, tools, and concrete deliverables designed specifically for your leadership, management, staff, and technical squads.",
      modulesLabel: "Comprehensive Educational Modules & Syllabus:",
      toolsLabel: "Core Concepts, Frameworks & Tools:",
      deliverableLabel: "Tangible Workshop Deliverable:",
      pillarsTitle: "Core Dimensions of DigiNoron Corporate Training",
      pillarsSubtitle: "Strategic advantages of our in-house and virtual enterprise academies",
      p1Title: "1. Executive Leadership Masterclass",
      p1Desc:
        "AI strategic roadmapping, enterprise readiness assessment, leading AI-first teams, and benchmarking investment ROI.",
      p2Title: "2. Staff Workflow Automation Labs",
      p2Desc:
        "Multiplying operational speed across finance, HR, marketing, and legal via advanced prompting, summarization, and custom GPTs.",
      p3Title: "3. Enterprise Privacy & Security Protocols",
      p3Desc:
        "Formulating strict compliance policies, preventing data leakage, On-Premise LLM deployment, and secure enterprise RAG integration.",
      coursesSectionTitle: "Featured Corporate Training Curricula",
      audiences: [
        {
          id: "executives",
          levelBadge: "Tier 1: Strategic Leadership",
          groupName: "CEO & Senior Executives",
          coreTopic: "AI Strategy, Decision-Making & Organizational Transformation",
          summary: "Strategic AI roadmapping, data-driven C-suite decision support, ROI governance, and leading AI-First organizational transformation.",
          durationFormat: "8 Hours (Executive Masterclass / Board Intensive)",
          keyOutcome: "3-Year AI Transformation Roadmap & Governance Charter",
          detailedDesc:
            "At the executive level, the objective goes far beyond learning individual tools; the focus is on intelligent organizational leadership, shifting decision-making paradigms with AI Decision Support Systems (DSS), and architecting the future of the enterprise. Senior leaders learn how to prioritize high-ROI AI investments, restructure teams around autonomous agents, and govern enterprise risk.",
          modules: [
            "Formulating a 3-to-5 year Enterprise AI Strategic Blueprint aligned with global APQC process frameworks and AI Readiness indices",
            "AI-Augmented Decision-Making (DSS): utilizing reasoning models for macroeconomic forecasting, scenario simulation, and board-level strategy",
            "Economics of Enterprise AI: evaluating Return on Investment (ROI), Total Cost of Ownership (TCO), and prioritizing the project opportunity atlas",
            "Organizational Transformation & Change Management: transitioning to an AI-First culture, overcoming staff resistance, and leading hybrid human-agent teams",
            "Strategic capabilities of Autonomous AI Agents and Multi-Agent Swarms in creating sustainable competitive advantages and new business models",
            "Enterprise Data Governance, sovereign AI security policies, intellectual property protection, and regulatory/ethical compliance frameworks",
            "Global & regional industry case studies: analyzing successful enterprise AI transformations vs. common root causes of project failure",
            "Hands-on Executive Lab: working with executive BI copilots, automated board report synthesis, and building a personal strategic advisor agent",
          ],
          toolsAndConcepts: [
            "AI Strategy & Roadmap",
            "APQC Framework",
            "Executive DSS",
            "ROI & TCO Modeling",
            "Data Governance",
            "Multi-Agent Vision",
          ],
          deliverable:
            "Draft Enterprise AI Strategic Blueprint, Prioritized High-ROI Initiative Matrix, and Organizational AI Governance Charter.",
        },
        {
          id: "middle-managers",
          levelBadge: "Tier 2: Operational Management",
          groupName: "Middle Managers & Department Heads",
          coreTopic: "Applied AI in Unit & Process Management",
          summary: "Identifying departmental bottlenecks, redesigning unit workflows with BPA, smart KPI tracking, and managing AI-augmented teams.",
          durationFormat: "8 to 12 Hours (Applied Management Workshop)",
          keyOutcome: "Re-engineered Departmental Workflows & Smart KPIs",
          detailedDesc:
            "Middle managers are the vital bridge between board-level strategy and daily execution. Designed for heads of Finance, HR, Sales, Marketing, Procurement, and Operations, this track teaches managers how to audit departmental workflows, eliminate human bottlenecks using intelligent Business Process Automation (BPA), and multiply team throughput.",
          modules: [
            "Departmental Process Auditing: identifying operational bottlenecks and high-impact automation opportunities across business units",
            "Applied AI for Functional Units: specialized use cases for Finance & Accounting, HR & Talent, Sales & CRM, Marketing, Supply Chain, and Support",
            "Designing & managing Intelligent Workflows and cross-departmental Business Process Automation (BPA) to cut cycle times by up to 70%",
            "AI-Driven Performance Management: defining smart KPIs/OKRs, real-time unit telemetry, and automated analytical reporting for senior leadership",
            "Orchestrating Departmental AI Agents & Multi-Agent workflows for task routing, quality assurance, project tracking, and resource allocation",
            "Developing Standard Operating Procedures (SOPs) and Departmental Prompt Playbooks to standardize quality and consistency across staff outputs",
            "Coaching, supervising, and evaluating employees in the safe, ethical, and high-impact adoption of AI tools in daily operations",
            "Practical Capstone Workshop: mapping a real process from the manager's own department and converting it into an automated AI workflow",
          ],
          toolsAndConcepts: [
            "Business Process Automation (BPA)",
            "Departmental AI Agents",
            "Smart KPIs & Analytics",
            "Workflow Redesign",
            "Departmental Prompt Playbooks",
            "Team Enablement",
          ],
          deliverable:
            "Re-engineered Departmental Process Blueprint, Standardized Unit Prompt Playbook, and Automated Managerial Reporting Template.",
        },
        {
          id: "specialists",
          levelBadge: "Tier 3: Workforce Productivity",
          groupName: "Specialists & Employees",
          coreTopic: "AI Tools, Prompt Engineering & Automation",
          summary: "Mastering advanced prompt engineering, generative AI tools, document/Excel analysis, custom assistants, and daily task automation.",
          durationFormat: "8 to 16 Hours (Hands-On Practical Lab)",
          keyOutcome: "3x–5x Faster Execution of Daily Administrative Tasks",
          detailedDesc:
            "A major portion of specialist bandwidth is consumed by repetitive correspondence, document searches, spreadsheet formatting, and routine reporting. In this 100% hands-on lab, employees move beyond superficial chatbot usage to master structured prompt engineering, specialized AI tools, and personal workflow automation.",
          modules: [
            "Advanced Prompt Engineering Mastery: structured frameworks, Chain-of-Thought, Few-Shot prompting, role conditioning, and eliminating hallucinations",
            "Practical mastery of leading AI workspaces (ChatGPT, Claude, Google Gemini, Microsoft Copilot, Perplexity) tailored to specific job roles",
            "Administrative & Communication Automation: drafting official correspondence, summarizing lengthy reports, automated meeting minutes, and technical translation",
            "Intelligent Data & Document Analysis: analyzing complex Excel/CSV spreadsheets, extracting structured data from PDFs/contracts, and generating executive charts",
            "Building Custom Job Assistants (Custom GPTs, Claude Projects, Gemini Gems) trained on departmental guidelines, templates, and rubrics",
            "Hands-on Vibe Coding for Non-Programmers: building practical internal calculators, dashboards, forms, and micro-apps using natural language",
            "Personal Workflow Automation: connecting everyday office apps with No-Code automation platforms (n8n, Make, Zapier) to eliminate manual data entry",
            "Employee Data Security & Privacy Hygiene: practical data anonymization techniques and strict adherence to corporate confidential data policies",
          ],
          toolsAndConcepts: [
            "Advanced Prompt Engineering",
            "ChatGPT / Claude / Gemini",
            "Excel & Document AI",
            "Custom Assistants & GPTs",
            "Vibe Coding",
            "No-Code Automation",
          ],
          deliverable:
            "At least 2 custom AI assistants built for each employee's specific role + a personal library of verified job prompts saving 30–50% of daily time.",
        },
        {
          id: "it-team",
          levelBadge: "Tier 4: Technical & Infrastructure",
          groupName: "IT & Technical Engineering Team",
          coreTopic: "RAG, AI Agents, API, Security & Model Deployment",
          summary: "Architecting Enterprise RAG, multi-agent systems, secure API gateways, On-Premise open-source LLM deployment, and AI cybersecurity.",
          durationFormat: "16 to 24 Hours (Deep Technical Bootcamp)",
          keyOutcome: "Self-Sufficient In-House AI Infrastructure & Engineering Squad",
          detailedDesc:
            "The IT and software engineering team is the backbone of technological sovereignty in any organization. This deep technical bootcamp equips software developers, DevOps/infrastructure engineers, data architects, and cybersecurity specialists to build, deploy, secure, and maintain production-grade AI systems on internal servers (On-Premise) or private clouds.",
          modules: [
            "Enterprise RAG Architecture: advanced document parsing, semantic chunking, embedding models, Vector Databases (Qdrant, Milvus, pgvector), and Hybrid Search + Reranking",
            "Engineering Autonomous AI Agents & Multi-Agent Systems using modern frameworks (LangGraph, CrewAI, AutoGen), Tool/Function Calling, and Model Context Protocol (MCP)",
            "API Engineering & Legacy Integration: connecting LLMs to enterprise ERP, CRM, SQL/NoSQL databases, semantic caching, rate limiting, and AI API Gateways",
            "On-Premise & Air-Gapped Model Deployment: hosting open-weights LLMs (Llama, Qwen, Mistral, DeepSeek) locally via vLLM, Ollama, TGI, Docker, and Kubernetes",
            "Hardware & Inference Optimization: model quantization (AWQ, GGUF, FP8), VRAM capacity planning, multi-GPU orchestration, and high-throughput batching",
            "Enterprise AI Security & Governance: defending against Prompt Injection & Jailbreaks, implementing input/output Guardrails, Role-Based Access Control (RBAC) in RAG, and Data Loss Prevention (DLP)",
            "LLMOps & Production Observability: tracing agent execution, automated accuracy & hallucination evaluation (RAGAS / LLM-as-a-Judge), logging, and token cost optimization",
            "Domain Adaptation & Fine-Tuning: preparing proprietary enterprise datasets and executing parameter-efficient fine-tuning (LoRA / QLoRA)",
          ],
          toolsAndConcepts: [
            "Enterprise RAG & Vector DBs",
            "LangGraph & Multi-Agents",
            "vLLM & On-Premise LLMs",
            "API Gateways & MCP",
            "AI Security, RBAC & Guardrails",
            "LLMOps & Fine-Tuning",
          ],
          deliverable:
            "Production-ready local LLM + Enterprise RAG prototype with RBAC security deployed on internal infrastructure, plus complete architectural documentation.",
        },
      ] as AudienceGroupData[],
    },
    fa: {
      badge: "دپارتمان آموزش‌های سازمانی دیجی نورون",
      title: "خدمات جامع",
      titleHighlight: "آموزش هوش مصنوعی سازمانی و ارگان‌ها",
      description:
        "توانمندسازی هدفمند تمامی سطوح سرمایه انسانی سازمان—از مدیرعامل و اعضای هیئت‌مدیره تا مدیران میانی، کارشناسان اجرایی و تیم فناوری اطلاعات (IT)—با سرفصل‌های کاملاً سفارشی، کارگاه‌های عملی و پروژه‌های واقعی منطبق بر نیازهای سازمان شما.",
      requestWorkshopBtn: "درخواست کارگاه اختصاصی برای شرکت شما",
      inquiryPhoneBtn: "استعلام سازمانی: ۰۲۱۸۸۲۵۲۴۹۷",
      calloutTitle: "تحول دیجیتال و آموزش مبتنی بر جایگاه شغلی",
      calloutSubtitle: "سفارشی‌سازی کامل محتوای آموزشی بر اساس ساختار سازمانی، داده‌ها و فرایندهای اختصاصی شما",
      matrixBadge: "معماری آموزشی لایه‌بندی شده",
      matrixTitle: "مخاطبین دوره و ماتریس محتوای آموزشی سازمانی",
      matrixSubtitle:
        "در یک سازمان هوشمند، هر رده شغلی به دانش و مهارت متفاوتی از هوش مصنوعی نیاز دارد. ما محتوای آموزشی را به صورت دقیق برای ۴ گروه اصلی مخاطبین سازمانی تفکیک و طراحی کرده‌ایم:",
      colAudience: "گروه مخاطب",
      colCoreContent: "محتوای آموزشی",
      colFormat: "فرمت و زمان پیشنهادی",
      colOutcome: "دستاورد کلیدی برای سازمان",
      detailedSectionBadge: "سرفصل‌های جامع به تفکیک رده سازمانی",
      detailedSectionTitle: "محتوای آموزشی کامل ویژه هر گروه از مخاطبین سازمانی",
      detailedSectionSubtitle:
        "شرح کامل مباحث، سرفصل‌های تخصصی، ابزارهای کاربردی و خروجی‌های ملموس کارگاه‌ها برای چهار سطح کلیدی سازمان شما",
      modulesLabel: "ریزسرفصل‌ها و محتوای کامل آموزشی این گروه:",
      toolsLabel: "مفاهیم، چارچوب‌ها و ابزارهای کلیدی:",
      deliverableLabel: "خروجی عملی و دستاورد پایان دوره:",
      pillarsTitle: "محورهای خدمات آموزشی سازمانی دیجی نورون",
      pillarsSubtitle: "مزایای رقابتی و استانداردهای برگزاری دوره‌های درون‌سازمانی ما",
      p1Title: "۱. مسترکلاس مدیران ارشد و تصمیم‌گیرندگان",
      p1Desc:
        "تدوین استراتژی هوش مصنوعی، سنجش آمادگی سازمانی، تصمیم‌سازی داده‌محور، نحوه رهبری تیم‌های AI-First و ارزیابی نرخ بازگشت سرمایه (ROI).",
      p2Title: "۲. کارگاه‌های کاربردی مدیران میانی و کارشناسان",
      p2Desc:
        "افزایش سرعت مدیریت واحدها و کارهای اداری، مالی، منابع انسانی و مارکتینگ با پرامپت‌نویسی پیشرفته، اتوماسیون فرایندها و دستیارهای هوشمند.",
      p3Title: "۳. بوت‌کمپ فنی IT، امنیت داده و استقرار مدل‌ها",
      p3Desc:
        "آموزش تخصصی پیاده‌سازی RAG سازمانی، توسعه ایجنت‌ها، اتصال API، استقرار محلی (On-Premise) و پروتکل‌های امنیت و حریم خصوصی شرکتی.",
      coursesSectionTitle: "دوره‌های تخصصی مرتبط با آموزش سازمانی",
      audiences: [
        {
          id: "executives",
          levelBadge: "سطح ۱: رهبری و سیاست‌گذاری کلان",
          groupName: "مدیرعامل و مدیران ارشد",
          coreTopic: "استراتژی AI، تصمیم‌سازی و تحول سازمان",
          summary: "ترسیم نقشه راه هوشمندسازی، تصمیم‌سازی کلان با سیستم‌های پشتیبان تصمیم (DSS)، ارزیابی ROI و رهبری تحول دیجیتال سازمان.",
          durationFormat: "۸ ساعت (مسترکلاس ویژه مدیران ارشد و هیئت‌مدیره)",
          keyOutcome: "نقشه راه تحول هوشمند، اولویت‌بندی سرمایه‌گذاری و منشور حاکمیت AI",
          detailedDesc:
            "در سطح مدیرعامل، اعضای هیئت‌مدیره و معاونین ارشد، هدف فراتر از کار با ابزارهای روزمره است؛ تمرکز اصلی بر «رهبری هوشمند سازمان»، تغییر پارادایم تصمیم‌گیری به تصمیم‌سازی مبتنی بر هوش مصنوعی و طراحی معماری آینده کسب‌وکار است. مدیران ارشد در این دوره می‌آموزند چگونه سرمایه‌گذاری‌های AI را با بالاترین نرخ بازگشت سرمایه (ROI) هدایت کرده و سازمان را به یک ساختار چابک و هوشمند تبدیل کنند.",
          modules: [
            "تدوین استراتژی کلان و نقشه راه ۳ تا ۵ ساله هوشمندسازی سازمان (مبتنی بر چارچوب جهانی APQC و شاخص سنجش آمادگی AI Readiness)",
            "تصمیم‌سازی کلان و هوش تجاری پیشرفته: کاربست سیستم‌های پشتیبان تصمیم‌گیری (DSS) و مدل‌های استدلال‌گر در تحلیل بازار، پیش‌بینی روندها و سناریونگاری استراتژیک",
            "اقتصاد هوش مصنوعی برای مدیران: ارزیابی نرخ بازگشت سرمایه (ROI)، برآورد هزینه کل مالکیت (TCO) و اولویت‌بندی اطلس پروژه‌های هوش مصنوعی سازمان",
            "مدیریت تحول سازمانی و رهبری تغییر: بازطراحی ساختار سازمانی به سمت الگوی AI-First، رفع مقاومت فرهنگی بدنه سازمان و مدیریت تیم‌های ترکیبی (انسان و ایجنت)",
            "شناخت ظرفیت‌های راهبردی ایجنت‌های خودمختار (AI Agents) و سیستم‌های چندعامله (Multi-Agent) در خلق مدل‌های نوین درآمدزایی و مزیت رقابتی پایدار",
            "حاکمیت داده (Data Governance)، سیاست‌گذاری کلان امنیت اطلاعات، حفظ اسرار تجاری و مدیریت ریسک‌های حقوقی، نظارتی و اخلاقی هوش مصنوعی",
            "بررسی مطالعات موردی (Case Studies) موفق جهانی و بومی در صنایع مشابه و کالبدشکافی دلایل شکست پروژه‌های هوش مصنوعی در سازمان‌ها",
            "کارگاه عملی مدیران ارشد: تحلیل گزارش‌های جامع مالی و عملکردی، پایش داشبوردهای مدیریتی و ساخت دستیار مشاور استراتژیک اختصاصی مدیرعامل",
          ],
          toolsAndConcepts: [
            "استراتژی و نقشه راه AI",
            "چارچوب APQC",
            "سیستم‌های تصمیم‌یار (DSS)",
            "تحلیل ROI و اقتصاد AI",
            "حاکمیت داده و اخلاق AI",
            "رهبری سازمان AI-First",
          ],
          deliverable:
            "پیش‌نویس سند راهبردی هوشمندسازی سازمان، ماتریس اولویت‌بندی پروژه‌های هوش مصنوعی بر اساس ROI و منشور سیاست‌گذاری کلان AI.",
        },
        {
          id: "middle-managers",
          levelBadge: "سطح ۲: مدیریت اجرایی و فرآیندی",
          groupName: "مدیران میانی",
          coreTopic: "کاربرد AI در مدیریت واحدها و فرایندها",
          summary: "عارضه‌یابی و بهینه‌سازی فرایندهای دپارتمان‌ها، اتوماسیون گردش‌کارهای بین‌واحدی، پایش هوشمند KPIها و هدایت تیم‌های عملیاتی.",
          durationFormat: "۸ تا ۱۲ ساعت (کارگاه کاربردی مدیریت واحدها)",
          keyOutcome: "بازمهندسی فرایندهای واحد، کاهش گلوگاه‌ها و گزارش‌گیری خودکار",
          detailedDesc:
            "مدیران میانی، رؤسای ادارات و سرپرستان واحدها حلقه اتصال استراتژی‌های کلان به عملیات اجرایی سازمان هستند. این دوره به مدیران واحدهای مالی، منابع انسانی، فروش، بازاریابی، بازرگانی، تدارکات، تولید و پشتیبانی می‌آموزد که چگونه فرایندهای واحد خود را عارضه‌یابی کرده، گلوگاه‌های زمان‌بر را با هوش مصنوعی برطرف سازند و بهره‌وری و کیفیت خروجی تیم خود را به شکل ملموس ارتقا دهند.",
          modules: [
            "عارضه‌یابی فرایندهای جاری واحدها و شناسایی گلوگاه‌های عملیاتی مستعد هوشمندسازی و اتوماسیون (Process Bottleneck Analysis)",
            "کاربردهای تخصصی هوش مصنوعی به تفکیک واحدهای سازمانی (مدیریت مالی و حسابداری، منابع انسانی و جذب، فروش و CRM، بازاریابی، زنجیره تأمین و خدمات مشتریان)",
            "طراحی و مدیریت گردش‌کارهای هوشمند (AI Workflows) و اتوماسیون فرایندهای کسب‌وکار (BPA) برای حذف دوباره‌کاری‌ها و تسریع تعاملات بین‌واحدی",
            "مدیریت عملکرد داده‌محور: تعریف و پایش هوشمند شاخص‌های کلیدی عملکرد (KPIs و OKRs)، کنترل کیفیت خودکار و تولید گزارش‌های تحلیلی برای مدیران ارشد",
            "بهره‌گیری از ایجنت‌های هوشمند و سیستم‌های مولتی‌ایجنت در سطح دپارتمان جهت تخصیص بهینه منابع، زمان‌بندی پروژه‌ها و پیگیری خودکار وظایف",
            "تدوین دستورالعمل‌های اجرایی استاندارد (SOP) و کتابچه پرامپت‌های اختصاصی واحد (Departmental Prompt Playbook) برای یکپارچه‌سازی کیفیت کار کارشناسان",
            "نحوه هدایت، توانمندسازی، فرهنگ‌سازی و ارزیابی عملکرد کارکنان در استفاده صحیح، ایمن و اثربخش از ابزارهای هوش مصنوعی",
            "کارگاه عملی (پروژه محور): انتخاب یک فرایند واقعی از واحد سازمانی هر مدیر و بازطراحی گام‌به‌گام آن با ابزارها و ایجنت‌های هوش مصنوعی",
          ],
          toolsAndConcepts: [
            "اتوماسیون فرایندها (BPA)",
            "مدیریت هوشمند واحدها",
            "پایش KPI و داشبورد تحلیلی",
            "ایجنت‌های دپارتمانی",
            "تدوین SOP و پلی‌بوک پرامپت",
            "بهینه‌سازی گردش‌کار",
          ],
          deliverable:
            "نقشه بازمهندسی و هوشمندسازی فرایندهای واحد، کتابچه پرامپت‌های استاندارد دپارتمان و قالب گزارش‌گیری مدیریتی خودکار.",
        },
        {
          id: "specialists",
          levelBadge: "سطح ۳: بهره‌وری عملیاتی و اجرایی",
          groupName: "کارشناسان و کارکنان",
          coreTopic: "ابزارهای AI، پرامپت‌نویسی و اتوماسیون",
          summary: "تسلط کامل بر مهندسی پرامپت پیشرفته، ابزارهای هوش مصنوعی مولد، تحلیل اسناد و اکسل، ساخت دستیار شغلی و اتوماسیون امور روزمره.",
          durationFormat: "۸ تا ۱۶ ساعت (کارگاه کاملاً عملی و مهارتی)",
          keyOutcome: "افزایش ۳ تا ۵ برابری سرعت انجام وظایف روزانه و کاهش خطای انسانی",
          detailedDesc:
            "بخش بزرگی از زمان کارشناسان و کارکنان سازمان صرف امور تکراری، نگارش مکاتبات اداری، جستجو در آیین‌نامه‌ها، کار با فایل‌های اکسل و تهیه گزارش‌ها می‌شود. در این کارگاه عملی، پرسنل سازمان یاد می‌گیرند چگونه فراتر از چت‌های ساده، با مهندسی پرامپت اصولی، ابزارهای تخصصی AI و اتوماسیون فردی، یک دستیار هوشمند تمام‌وقت برای شغل خود بسازند.",
          modules: [
            "مهندسی پرامپت پیشرفته و ساختاریافته: تکنیک‌های Chain-of-Thought، Few-Shot، نقش‌دهی تخصصی، کنترل دقیق فرمت خروجی و جلوگیری از خطای توهم (Hallucination)",
            "تسلط کاربردی بر برترین مدل‌ها و ابزارهای هوش مصنوعی (ChatGPT، Claude، Google Gemini، Microsoft Copilot و Perplexity) متناسب با نیاز هر شغل",
            "اتوماسیون مکاتبات و امور اداری: نگارش و ویرایش نامه‌های رسمی، خلاصه‌سازی گزارش‌ها و پرونده‌های طولانی، تنظیم خودکار صورت‌جلسات و ترجمه تخصصی متون",
            "تحلیل هوشمند داده‌ها و اسناد: کار پیشرفته با فایل‌های Excel و CSV، فرمول‌نویسی هوشمند، استخراج اطلاعات ساختاری از اسناد PDF و قراردادها و مصورسازی داده‌ها",
            "ساخت دستیارهای هوشمند اختصاصی شغلی (Custom GPTs / Claude Projects / Gems) آموزش‌دیده بر روی بخشنامه‌ها، فرم‌ها و استانداردهای کاری هر کارشناس",
            "آموزش کاربردی وایب کدینگ (Vibe Coding) برای غیربرنامه‌نویسان: ساخت ابزارک‌های محاسباتی، فرم‌های هوشمند و داشبوردهای کاری تنها با توصیف به زبان طبیعی",
            "اتوماسیون گردش‌کارهای فردی بدون کدنویسی (No-Code Automation با ابزارهایی نظیر n8n و Make) برای اتصال ایمیل، تقویم، شیت‌ها و سامانه‌های اداری",
            "پروتکل‌های امنیت اطلاعات برای کارکنان: نحوه ناشناس‌سازی داده‌های حساس (Data Anonymization) پیش از وارد کردن در ابزارهای AI و رعایت حریم خصوصی سازمان",
          ],
          toolsAndConcepts: [
            "مهندسی پرامپت پیشرفته",
            "ChatGPT / Claude / Gemini",
            "تحلیل هوشمند Excel و PDF",
            "ساخت دستیار اختصاصی (Custom GPT)",
            "وایب کدینگ (Vibe Coding)",
            "اتوماسیون بدون کد (No-Code)",
          ],
          deliverable:
            "ساخت حداقل ۲ دستیار هوشمند اختصاصی برای شرح وظایف هر کارشناس + بانک پرامپت‌های استاندارد شغلی و صرفه‌جویی ۳۰ تا ۵۰ درصدی در زمان کاری.",
        },
        {
          id: "it-team",
          levelBadge: "سطح ۴: زیرساخت، توسعه و امنیت فنی",
          groupName: "تیم فناوری اطلاعات",
          coreTopic: "RAG، ایجنت‌ها، API، امنیت و استقرار مدل‌ها",
          summary: "پیاده‌سازی معماری RAG سازمانی، توسعه ایجنت‌ها و مولتی‌ایجنت‌ها، یکپارچه‌سازی API، استقرار محلی (On-Premise) مدل‌ها و امنیت سایبری AI.",
          durationFormat: "۱۶ تا ۲۴ ساعت (بوت‌کمپ تخصصی و فنی)",
          keyOutcome: "خودکفایی فنی تیم IT در استقرار، توسعه و نگهداری امن زیرساخت AI",
          detailedDesc:
            "تیم فناوری اطلاعات، مهندسان نرم‌افزار و متخصصان امنیت و زیرساخت، ستون فقرات استقلال فناورانه سازمان در عصر هوش مصنوعی هستند. این بوت‌کمپ عمیق و کاملاً فنی برای تیم‌های IT طراحی شده تا بتوانند مدل‌های زبانی، پایگاه‌های دانش RAG و ایجنت‌های هوشمند را با رعایت کامل الزامات امنیتی، به صورت درون‌سازمانی (On-Premise) یا ابری پیاده‌سازی کرده و به سامانه‌های فعلی سازمان متصل نمایند.",
          modules: [
            "معماری و پیاده‌سازی سیستم‌های RAG سازمانی پیشرفته: پردازش اسناد پیچیده و OCR، استراتژی‌های Chunking، مدل‌های Embedding، دیتابیس‌های برداری (Qdrant، Milvus، pgvector) و جستجوی ترکیبی (Hybrid Search & Reranking)",
            "مهندسی ایجنت‌های هوشمند (AI Agents) و سیستم‌های چندعامله (Multi-Agent): کار با فریم‌ورک‌های LangGraph، CrewAI و AutoGen، پیاده‌سازی Tool/Function Calling و استاندارد Model Context Protocol (MCP)",
            "یکپارچه‌سازی امن از طریق API و معماری میکروسرویس: اتصال مدل‌های هوش مصنوعی به سامانه‌های ERP، CRM، اتوماسیون اداری و پایگاه‌های داده SQL/NoSQL، مدیریت AI Gateway و Semantic Caching",
            "استقرار محلی و درون‌سازمانی مدل‌های زبانی متن‌باز (On-Premise / Self-Hosted LLMs): راه‌اندازی مدل‌های Llama، Qwen، Mistral و DeepSeek روی سرورهای داخلی با vLLM، Ollama، TGI و Docker/Kubernetes",
            "بهینه‌سازی سخت‌افزاری و مدیریت منابع پردازشی: تکنیک‌های کوانتیزاسیون (AWQ, GGUF, FP8)، محاسبه و مدیریت مصرف VRAM، پردازش دسته‌ای (Continuous Batching) و ارکستریشن GPU",
            "امنیت هوش مصنوعی و حفاظت از داده‌ها (AI Security & Privacy): مقابله با حملات Prompt Injection و Jailbreak، پیاده‌سازی لایه‌های Guardrails، کنترل دسترسی مبتنی بر نقش (RBAC) در سطح اسناد RAG و جلوگیری از نشت داده (DLP)",
            "اصول LLMOps و پایش در محیط عملیاتی (Production): مانیتورینگ و ردیابی ایجنت‌ها (Tracing)، ارزیابی خودکار دقت و نرخ توهم مدل (RAGAS / LLM-as-a-Judge)، مدیریت لاگ و بهینه‌سازی هزینه توکن‌ها",
            "بومی‌سازی و آموزش مدل‌ها (Fine-Tuning): آماده‌سازی مجموعه‌داده‌های اختصاصی سازمان و اجرای Fine-Tuning بهینه (LoRA / QLoRA) برای وظایف تخصصی",
          ],
          toolsAndConcepts: [
            "معماری RAG و Vector DB",
            "ایجنت‌ها، LangGraph و MCP",
            "استقرار On-Premise با vLLM/Ollama",
            "یکپارچه‌سازی API و ERP/CRM",
            "امنیت AI، RBAC و Guardrails",
            "LLMOps و Fine-Tuning",
          ],
          deliverable:
            "پیاده‌سازی عملی یک نمونه کامل از سرویس LLM محلی + سیستم RAG و ایجنت امن متصل به داده‌های آزمایشی سازمان به همراه مستندات معماری و چک‌لیست امنیتی.",
        },
      ] as AudienceGroupData[],
    },
    ar: {
      badge: "دائرة التدريب المؤسسي - ديجي نورون",
      title: "حلول التدريب الشاملة و",
      titleHighlight: "التأهيل المؤسسي في الذكاء الاصطناعي",
      description:
        "تمكين شامل وممنهج لكافة المستويات الوظيفية في مؤسستكم—من الرئيس التنفيذي وأعضاء مجلس الإدارة إلى مديري الإدارات الوسطى، الأخصائيين والموظفين، وفرق تقنية المعلومات (IT)—عبر حقائب تدريبية مخصصة وورش عمل تطبيقية.",
      requestWorkshopBtn: "طلب ورشة عمل مخصصة لمؤسستكم",
      inquiryPhoneBtn: "الاستفسارات المؤسسية: +61 451 410 352",
      calloutTitle: "التحول الرقمي والتدريب المبني على الأدوار الوظيفية",
      calloutSubtitle: "تخصيص كامل للحقائب التدريبية بما يوافق الهيكل التنظيمي وبيانات وأنظمة مؤسستكم",
      matrixBadge: "منظومة التأهيل المؤسسي المتكاملة",
      matrixTitle: "الفئات المستهدفة ومصفوفة المحتوى التدريبي المؤسسي",
      matrixSubtitle:
        "تختلف احتياجات التعامل مع الذكاء الاصطناعي باختلاف المستوى الإداري والوظيفي داخل المؤسسة؛ لذا صممنا ٤ مسارات تدريبية متخصصة تغطي كافة شرائح المؤسسة:",
      colAudience: "الفئة المستهدفة",
      colCoreContent: "المحتوى التدريبي الأساسي",
      colFormat: "الصيغة والمدة المقترحة",
      colOutcome: "العائد الرئيسي للمؤسسة",
      detailedSectionBadge: "المناهج التفصيلية حسب المستوى الوظيفي",
      detailedSectionTitle: "المحتوى التدريبي الشامل لكل فئة من الفئات المستهدفة",
      detailedSectionSubtitle:
        "تفصيل المحاور التدريبية، الأدوات التطبيقية، والمخرجات العملية المصممة لقيادات المؤسسة، المديرين، الموظفين، والفرق التقنية",
      modulesLabel: "المحاور التفصيلية والمحتوى التدريبي الشامل:",
      toolsLabel: "المفاهيم والأطر والأدوات الرئيسية:",
      deliverableLabel: "المخرجات العملية للبرنامج:",
      pillarsTitle: "ركائز التدريب المؤسسي في ديجي نورون",
      pillarsSubtitle: "برامج مصممة لمختلف المستويات الوظيفية والإدارية بأعلى المعايير العالمية",
      p1Title: "١. برامج الإدارة العليا والتنفيذية",
      p1Desc:
        "بناء استراتيجية الذكاء الاصطناعي، قياس الجاهزية الرقمية، دعم اتخاذ القرار، قيادة فرق العمل، وحساب العائد الاستثماري (ROI).",
      p2Title: "٢. ورش عمل مديري الوحدات والموظفين",
      p2Desc:
        "مضاعفة سرعة إدارة العمليات والمهام المالية، الموارد البشرية، والتقارير عبر صياغة الأوامر المتقدمة وأتمتة الإجراءات.",
      p3Title: "٣. المعسكرات التقنية لفرق IT وأمن البيانات",
      p3Desc:
        "تدريب هندسي متعمق على بناء أنظمة RAG المؤسسية، تطوير الوكلاء (Agents)، ربط API، النشر المحلي (On-Premise) وحوكمة أمن المعلومات.",
      coursesSectionTitle: "الدورات والبرامج المتاحة للشركات",
      audiences: [
        {
          id: "executives",
          levelBadge: "المستوى ١: القيادة الاستراتيجية العليا",
          groupName: "الرئيس التنفيذي والمديرون التنفيذيون",
          coreTopic: "استراتيجية الذكاء الاصطناعي، صناعة القرار والتحول المؤسسي",
          summary: "رسم خريطة طريق التحول الذكي، دعم اتخاذ القرار الاستراتيجي، تقييم العائد الاستثماري (ROI) وقيادة التغيير المؤسسي.",
          durationFormat: "٨ ساعات (ماستر كلاس تنفيذي لمجلس الإدارة والقيادات)",
          keyOutcome: "خريطة طريق التحول الذكي وميثاق حوكمة الذكاء الاصطناعي",
          detailedDesc:
            "على مستوى الرئيس التنفيذي وأعضاء مجلس الإدارة ونواب الرئيس، يتجاوز الهدف مجرد التعرف على الأدوات؛ حيث يرتكز البرنامج على «القيادة الذكية للمؤسسة»، وتطوير منظومة صناعة القرار المبني على البيانات، وهندسة مستقبل الأعمال في عصر الوكلاء الأذكياء.",
          modules: [
            "صياغة الاستراتيجية الشاملة وخريطة طريق التحول الذكي (٣ إلى ٥ سنوات) وفق إطار APQC العالمي ومؤشرات جاهزية الذكاء الاصطناعي (AI Readiness)",
            "صناعة القرار المدعوم بالذكاء الاصطناعي (DSS): توظيف النماذج الاستدلالية في استشراف الأسواق، محاكاة السيناريوهات، والتخطيط الاستراتيجي",
            "اقتصاديات الذكاء الاصطناعي للمؤسسات: حساب العائد على الاستثمار (ROI)، التكلفة الإجمالية للملكية (TCO)، وترتيب أولويات أطلس المشاريع",
            "قيادة التحول المؤسسي وإدارة التغيير: إعادة هيكلة الفرق نحو نموذج AI-First، معالجة مقاومة التغيير، وإدارة فرق العمل الهجينة (البشر والوكلاء)",
            "استكشاف القدرات الاستراتيجية للوكلاء المستقلين (AI Agents) والأنظمة متعددة الوكلاء (Multi-Agents) في ابتكار نماذج أعمال ومزايا تنافسية مستدامة",
            "حوكمة البيانات (Data Governance)، سياسات الأمن السيبراني العليا، حماية الملكية الفكرية، وإدارة المخاطر القانونية والتنظيمية والأخلاقية",
            "تحليل دراسات حالة عالمية وإقليمية ناجحة في قطاعات مماثلة، وتشخيص الأسباب الجذرية لفشل بعض مشاريع الذكاء الاصطناعي المؤسسية",
            "ورشة تطبيقية للقيادات: العمل مع لوحات ذكاء الأعمال التنفيذية، التحليل الفوري لتقارير الأداء المالي، وبناء مستشار ذكي خاص بالمدير التنفيذي",
          ],
          toolsAndConcepts: [
            "استراتيجية وخريطة طريق AI",
            "إطار عمل APQC",
            "أنظمة دعم القرار (DSS)",
            "تحليل العائد الاستثماري ROI",
            "حوكمة البيانات والأخلاقيات",
            "قيادة التحول المؤسسي",
          ],
          deliverable:
            "مسودة وثيقة استراتيجية التحول الذكي للمؤسسة، مصفوفة أولويات المشاريع عالية العائد، وميثاق حوكمة الذكاء الاصطناعي.",
        },
        {
          id: "middle-managers",
          levelBadge: "المستوى ٢: الإدارة التنفيذية وإدارة العمليات",
          groupName: "المديرون المتوسطون ومديرو الإدارات",
          coreTopic: "تطبيقات الذكاء الاصطناعي في إدارة الوحدات والعمليات",
          summary: "تشخيص اختناقات العمل في الأقسام، أتمتة العمليات بين الإدارات (BPA)، متابعة مؤشرات الأداء الذكية (KPIs) وقيادة الفرق.",
          durationFormat: "٨ إلى ١٢ ساعة (ورشة عمل تطبيقية لمديري الوحدات)",
          keyOutcome: "إعادة هندسة عمليات الإدارات وأتمتة التقارير الرقابية",
          detailedDesc:
            "يمثل مديرو الإدارات ورؤساء الأقسام حلقة الوصل الجوهرية بين الرؤية الاستراتيجية والتنفيذ اليومي. صُمم هذا البرنامج لمديري المالية، الموارد البشرية، المبيعات، التسويق، المشتريات، والعمليات لتمكينهم من تشخيص الاختناقات الإجرائية وأتمتة تدفقات العمل ورفع كفاءة فرقهم.",
          modules: [
            "تشخيص عمليات الوحدات الإدارية وتحديد نقاط الاختناق والفرص ذات الأولوية للأتمتة والتحسين الذكي (Process Bottleneck Analysis)",
            "تطبيقات الذكاء الاصطناعي التخصصية حسب الإدارة (المالية والمحاسبة، الموارد البشرية والتوظيف، المبيعات وCRM، التسويق، سلاسل الإمداد وخدمة العملاء)",
            "تصميم وإدارة مسارات العمل الذكية (AI Workflows) وأتمتة العمليات التجارية (BPA) لتقليص زمن الإنجاز وإنهاء الازدواجية بين الأقسام",
            "إدارة الأداء المبنية على البيانات: تحديد ومتابعة مؤشرات الأداء الرئيسية (KPIs & OKRs) الذكية، مراقبة الجودة، وإعداد التقارير التحليلية المؤتمتة",
            "توظيف الوكلاء الأذكياء وأنظمة Multi-Agents على مستوى القسم لتنسيق المهام، توزيع الموارد، ومتابعة المشاريع آلياً",
            "إعداد أدلة التشغيل القياسية (SOPs) ودليل الأوامر المخصص للقسم (Departmental Prompt Playbook) لضمان جودة وتوحيد مخرجات الموظفين",
            "توجيه وتدريب وتقييم أداء الموظفين في الاستخدام الآمن والفعال لأدوات الذكاء الاصطناعي ضمن مهامهم اليومية",
            "مشروع تطبيقي عملي: اختيار عملية فعلية من إدارة المشارك وإعادة تصميمها خطوة بخطوة لتصبح مسار عمل ذكياً ومؤتمتاً",
          ],
          toolsAndConcepts: [
            "أتمتة العمليات (BPA)",
            "إدارة الوحدات الذكية",
            "مؤشرات الأداء KPIs والتحليلات",
            "وكلاء الأقسام الإدارية",
            "أدلة التشغيل وكتيبات البرومبت",
            "تطوير مسارات العمل",
          ],
          deliverable:
            "مخطط إعادة هندسة عمليات الإدارة، دليل صياغة الأوامر القياسي للقسم، ونموذج تقارير الأداء الإداري المؤتمت.",
        },
        {
          id: "specialists",
          levelBadge: "المستوى ٣: الكفاءة التشغيلية والإنتاجية",
          groupName: "الأخصائيون والموظفون",
          coreTopic: "أدوات الذكاء الاصطناعي، هندسة الأوامر والأتمتة",
          summary: "إتقان هندسة الأوامر المتقدمة (Prompting)، أدوات الذكاء الاصطناعي التوليدي، تحليل المستندات والإكسل، وأتمتة المهام اليومية.",
          durationFormat: "٨ إلى ١٦ ساعة (ورشة عمل تطبيقية ومهارية شاملة)",
          keyOutcome: "مضاعفة سرعة إنجاز المهام اليومية ٣ إلى ٥ مرات وتقليل الأخطاء",
          detailedDesc:
            "يستغرق الموظفون والأخصائيون وقتاً طويلاً في المهام المتكررة، صياغة المراسلات، البحث في اللوائح، معالجة جداول البيانات وإعداد التقارير. في هذه الورشة العملية، يتجاوز الموظفون الاستخدام السطحي لبوتات الدردشة نحو الاحتراف الكامل لهندسة الأوامر وبناء المساعدات الذكية الخاصة بوظائفهم.",
          modules: [
            "إتقان هندسة الأوامر المتقدمة (Advanced Prompt Engineering): أطر التفكير التسلسلي Chain-of-Thought، الأمثلة الموجهة Few-Shot، ضبط المخرجات ومنع الهلوسة (Hallucination)",
            "الاستخدام الاحترافي لأقوى النماذج والمنصات العالمية (ChatGPT، Claude، Google Gemini، Microsoft Copilot، Perplexity) بما يخدم التخصص الوظيفي",
            "أتمتة المراسلات والأعمال الإدارية: صياغة وتدقيق الخطابات الرسمية، تلخيص التقارير والملفات الطويلة، كتابة محاضر الاجتماعات والترجمة التخصصية",
            "التحليل الذكي للبيانات والوثائق: التعامل المتقدم مع ملفات Excel وCSV، استخراج البيانات المنظمة من ملفات PDF والعقود، وإنشاء الرسوم البيانية والعروض التقديمية",
            "بناء المساعدات الذكية الوظيفية المخصصة (Custom GPTs / Claude Projects / Gems) المدربة على لوائح ونماذج وإجراءات عمل الموظف",
            "التدريب العملي على البرمجة باللغة الطبيعية (Vibe Coding) لغير المبرمجين: بناء أدوات حسابية، نماذج تفاعلية ولوحات عمل مصغرة دون الحاجة لخبرة برمجية",
            "أتمتة المهام الفردية دون برمجة (No-Code Automation عبر منصات مثل n8n وMake) لربط البريد الإلكتروني، الجداول والأنظمة المكتبية",
            "ضوابط أمن المعلومات للموظفين: طرق إخفاء البيانات الحساسة (Data Anonymization) قبل إدخالها في أدوات الذكاء الاصطناعي والالتزام بسياسات الخصوصية",
          ],
          toolsAndConcepts: [
            "هندسة الأوامر المتقدمة",
            "ChatGPT / Claude / Gemini",
            "تحليل Excel وملفات PDF",
            "المساعدات المخصصة Custom GPTs",
            "تقنية Vibe Coding",
            "الأتمتة بدون برمجة No-Code",
          ],
          deliverable:
            "بناء مساعدين ذكيين مخصصين على الأقل لكل موظف وفق مهامه الوظيفية + مكتبة أوامر قياسية توفر ٣٠٪ إلى ٥٠٪ من وقت العمل اليومي.",
        },
        {
          id: "it-team",
          levelBadge: "المستوى ٤: البنية التحتية والتطوير والأمن التقني",
          groupName: "فريق تقنية المعلومات (IT)",
          coreTopic: "أنظمة RAG، الوكلاء، واجهات API، الأمان ونشر النماذج",
          summary: "هندسة أنظمة RAG المؤسسية، تطوير الوكلاء المتعددين، تكامل API، النشر المحلي للنماذج مفتوحة المصدر (On-Premise) وأمن الذكاء الاصطناعي.",
          durationFormat: "١٦ إلى ٢٤ ساعة (معسكر تقني وهندسي متعمق)",
          keyOutcome: "استقلالية تقنية كاملة لفريق IT في نشر وتطوير وحماية بنية الذكاء الاصطناعي",
          detailedDesc:
            "يمثل فريق تقنية المعلومات ومهندسو البرمجيات وأمن المعلومات الركيزة الأساسية للاستقلالية التقنية في المؤسسة. صُمم هذا المعسكر الهندسي المتعمق لتمكين الفرق التقنية من بناء ونشر وتأمين نماذج الذكاء الاصطناعي وقواعد المعرفة (RAG) والوكلاء الأذكياء محلياً (On-Premise) وربطها بأنظمة المؤسسة الحيوية.",
          modules: [
            "هندسة وتنفيذ أنظمة RAG المؤسسية المتقدمة: معالجة الوثائق المعقدة وOCR، استراتيجيات التقطيع (Chunking)، نماذج التضمين (Embeddings)، قواعد البيانات المتجهة (Qdrant, Milvus, pgvector) والبحث الهجين (Hybrid Search & Reranking)",
            "هندسة الوكلاء الأذكياء (AI Agents) والأنظمة متعددة الوكلاء (Multi-Agent Systems) باستخدام أطر LangGraph وCrewAI وAutoGen، وتفعيل استدعاء الأدوات (Tool Calling) وبروتوكول MCP",
            "التكامل الآمن عبر واجهات API والمعمارية المصغرة: ربط النماذج بأنظمة ERP وCRM وقواعد بيانات SQL/NoSQL، إدارة بوابات AI Gateway والتخزين المؤقت الدلالي (Semantic Caching)",
            "النشر المحلي والداخلي للنماذج مفتوحة المصدر (On-Premise / Air-Gapped LLMs): تشغيل نماذج Llama وQwen وMistral وDeepSeek على خوادم المؤسسة عبر vLLM وOllama وTGI وحاويات Docker/Kubernetes",
            "تحسين الأداء وإدارة موارد العتاد: تقنيات التكميم (Quantization: AWQ, GGUF, FP8)، تخطيط سعة ذاكرة VRAM، المعالجة الدفعية المستمرة، وإدارة وحدات GPU",
            "أمن الذكاء الاصطناعي وحماية البيانات (AI Security): التصدي لهجمات حقن الأوامر (Prompt Injection) وكسر الحماية، تطبيق حواجز الحماية (Guardrails)، التحكم بالوصول المبني على الأدوار (RBAC) في RAG، ومنع تسرب البيانات (DLP)",
            "منهجيات LLMOps والمراقبة التشغيلية: تتبع أداء الوكلاء (Tracing)، التقييم الآلي لدقة الإجابات ومعدلات الهلوسة (RAGAS / LLM-as-a-Judge)، إدارة السجلات وتحسين تكلفة التوكنات",
            "تكييف النماذج والضبط الدقيق (Fine-Tuning): إعداد مجموعات البيانات المؤسسية وتطبيق تقنيات الضبط الفعال (LoRA / QLoRA) للمهام التخصصية",
          ],
          toolsAndConcepts: [
            "معمارية RAG وقواعد Vector DB",
            "الوكلاء وLangGraph وبروتوكول MCP",
            "النشر المحلي عبر vLLM وOllama",
            "تكامل API وأنظمة ERP/CRM",
            "أمن AI وRBAC وGuardrails",
            "LLMOps والضبط الدقيق Fine-Tuning",
          ],
          deliverable:
            "نشر نموذجي عملي لخدمة LLM محلية + نظام RAG ووكيل ذكي آمن متصل ببيانات تجريبية للمؤسسة مع وثائق المعمارية وقائمة الفحص الأمني.",
        },
      ] as AudienceGroupData[],
    },
  };

  const t = content[locale] || content.en;

  const getAudienceStyle = (id: string) => {
    switch (id) {
      case "executives":
        return {
          icon: Compass,
          border: "border-purple-200 hover:border-purple-400",
          headerBg: "from-purple-950 via-slate-900 to-indigo-950",
          badgeBg: "bg-purple-100 text-purple-800 border-purple-300",
          iconBox: "bg-purple-600 text-white shadow-purple-600/25",
          topicBox: "bg-purple-50 border-purple-200 text-purple-900",
          checkColor: "text-purple-600",
          tagBg: "bg-purple-50 text-purple-800 border-purple-200",
          deliverableBg: "bg-purple-50/70 border-purple-200 text-purple-950",
          rowBadge: "bg-purple-100 text-purple-900 border-purple-300",
        };
      case "middle-managers":
        return {
          icon: Layers,
          border: "border-cyan-200 hover:border-cyan-400",
          headerBg: "from-cyan-950 via-slate-900 to-blue-950",
          badgeBg: "bg-cyan-100 text-cyan-800 border-cyan-300",
          iconBox: "bg-cyan-600 text-white shadow-cyan-600/25",
          topicBox: "bg-cyan-50 border-cyan-200 text-cyan-900",
          checkColor: "text-cyan-600",
          tagBg: "bg-cyan-50 text-cyan-800 border-cyan-200",
          deliverableBg: "bg-cyan-50/70 border-cyan-200 text-cyan-950",
          rowBadge: "bg-cyan-100 text-cyan-900 border-cyan-300",
        };
      case "specialists":
        return {
          icon: Sparkles,
          border: "border-amber-200 hover:border-amber-400",
          headerBg: "from-amber-950 via-slate-900 to-slate-900",
          badgeBg: "bg-amber-100 text-amber-800 border-amber-300",
          iconBox: "bg-amber-500 text-slate-950 shadow-amber-500/25",
          topicBox: "bg-amber-50 border-amber-200 text-amber-950",
          checkColor: "text-amber-600",
          tagBg: "bg-amber-50 text-amber-900 border-amber-200",
          deliverableBg: "bg-amber-50/70 border-amber-200 text-amber-950",
          rowBadge: "bg-amber-100 text-amber-900 border-amber-300",
        };
      case "it-team":
      default:
        return {
          icon: Server,
          border: "border-emerald-200 hover:border-emerald-400",
          headerBg: "from-emerald-950 via-slate-900 to-teal-950",
          badgeBg: "bg-emerald-100 text-emerald-800 border-emerald-300",
          iconBox: "bg-emerald-600 text-white shadow-emerald-600/25",
          topicBox: "bg-emerald-50 border-emerald-200 text-emerald-900",
          checkColor: "text-emerald-600",
          tagBg: "bg-emerald-50 text-emerald-800 border-emerald-200",
          deliverableBg: "bg-emerald-50/70 border-emerald-200 text-emerald-950",
          rowBadge: "bg-emerald-100 text-emerald-900 border-emerald-300",
        };
    }
  };

  return (
    <div className="space-y-20 py-12">
      {/* Hero Header */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel bg-white p-8 sm:p-14 rounded-3xl border border-purple-300 relative overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-100 border border-purple-300 text-purple-800 text-xs font-semibold">
                  <Building2 className="w-4 h-4" />
                  <span>{t.badge}</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
                  {t.title} <span className="text-purple-700">{t.titleHighlight}</span>
                </h1>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {t.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#consultation"
                    className="px-6 py-3.5 bg-purple-700 hover:bg-purple-800 text-white font-extrabold rounded-xl shadow-md text-sm transition-all"
                  >
                    {t.requestWorkshopBtn}
                  </a>
                  <a
                    href={locale === "fa" ? "tel:02188252497" : "tel:+61451410352"}
                    className="px-6 py-3.5 bg-slate-100 border border-slate-300 text-cyan-800 text-sm font-bold rounded-xl flex items-center gap-2 hover:bg-slate-200 transition-all"
                  >
                    <Phone className="w-4 h-4 text-cyan-600" />
                    <span dir="ltr">{t.inquiryPhoneBtn}</span>
                  </a>
                </div>
              </div>

              <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-purple-300 shadow-md">
                <Image
                  src="/images/courses/executive-ai.jpg"
                  alt="Corporate AI Training"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 right-4 left-4 p-4 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200 text-xs text-slate-800 shadow-xs">
                  <div className="font-bold text-purple-800">{t.calloutTitle}</div>
                  <div className="text-slate-500 text-[11px] mt-0.5">{t.calloutSubtitle}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Groups & Educational Content Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-300 text-purple-800 text-xs font-bold">
            <Users className="w-4 h-4 text-purple-700" />
            <span>{t.matrixBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
            {t.matrixTitle}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {t.matrixSubtitle}
          </p>
        </div>

        {/* Summary Matrix Table */}
        <div className="glass-panel bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className={`py-4 px-5 font-extrabold ${isLtr ? "text-left" : "text-right"}`}>
                    {t.colAudience}
                  </th>
                  <th className={`py-4 px-5 font-extrabold ${isLtr ? "text-left" : "text-right"}`}>
                    {t.colCoreContent}
                  </th>
                  <th className={`py-4 px-5 font-extrabold hidden md:table-cell ${isLtr ? "text-left" : "text-right"}`}>
                    {t.colFormat}
                  </th>
                  <th className={`py-4 px-5 font-extrabold hidden lg:table-cell ${isLtr ? "text-left" : "text-right"}`}>
                    {t.colOutcome}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {t.audiences.map((aud) => {
                  const style = getAudienceStyle(aud.id);
                  const IconComp = style.icon;
                  return (
                    <tr key={aud.id} className="hover:bg-slate-50/90 transition-colors">
                      <td className="py-4 px-5 align-top">
                        <a href={`#audience-${aud.id}`} className="flex items-center gap-3 group">
                          <div className={`p-2.5 rounded-xl shrink-0 shadow-xs ${style.iconBox}`}>
                            <IconComp className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="font-black text-slate-900 group-hover:text-purple-700 transition-colors text-sm sm:text-base">
                              {aud.groupName}
                            </div>
                            <span className={`inline-block mt-1 px-2 py-0.5 text-[10px] font-bold rounded-full border ${style.badgeBg}`}>
                              {aud.levelBadge}
                            </span>
                          </div>
                        </a>
                      </td>
                      <td className="py-4 px-5 align-top">
                        <div className={`inline-block px-3 py-1.5 rounded-xl border font-extrabold text-xs sm:text-sm mb-1.5 ${style.rowBadge}`}>
                          {aud.coreTopic}
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed max-w-md">
                          {aud.summary}
                        </p>
                      </td>
                      <td className="py-4 px-5 align-top hidden md:table-cell text-xs font-semibold text-slate-700">
                        {aud.durationFormat}
                      </td>
                      <td className="py-4 px-5 align-top hidden lg:table-cell text-xs text-slate-700 font-medium">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${style.checkColor}`} />
                          <span>{aud.keyOutcome}</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Detailed Educational Content for Each Audience Group */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-800 text-xs font-bold">
            <BookOpen className="w-4 h-4 text-cyan-700" />
            <span>{t.detailedSectionBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
            {t.detailedSectionTitle}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {t.detailedSectionSubtitle}
          </p>
        </div>

        <div className="space-y-10">
          {t.audiences.map((aud, index) => {
            const style = getAudienceStyle(aud.id);
            const IconComp = style.icon;

            return (
              <div
                key={aud.id}
                id={`audience-${aud.id}`}
                className={`glass-panel bg-white rounded-3xl border ${style.border} shadow-md overflow-hidden transition-all scroll-mt-28`}
              >
                {/* Audience Card Top Header */}
                <div className={`bg-gradient-to-r ${style.headerBg} text-white p-6 sm:p-8`}>
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="flex items-start sm:items-center gap-4">
                      <div className={`p-3.5 rounded-2xl shrink-0 shadow-lg ${style.iconBox}`}>
                        <IconComp className="w-7 h-7" />
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-3 py-0.5 rounded-full bg-white/15 text-white text-[11px] font-bold border border-white/20">
                            {aud.levelBadge}
                          </span>
                          <span className="text-xs text-slate-300 font-medium">
                            {aud.durationFormat}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-white">
                          {index + 1}. {aud.groupName}
                        </h3>
                      </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 lg:max-w-md">
                      <div className="text-[11px] text-cyan-300 font-bold uppercase tracking-wider mb-0.5">
                        {t.colCoreContent}:
                      </div>
                      <div className="text-sm sm:text-base font-extrabold text-white">
                        {aud.coreTopic}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Audience Card Body */}
                <div className="p-6 sm:p-8 space-y-8">
                  {/* Strategic Overview Paragraph */}
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80">
                    {aud.detailedDesc}
                  </p>

                  {/* 8 Detailed Modules Grid */}
                  <div className="space-y-4">
                    <h4 className="text-sm sm:text-base font-extrabold text-slate-900 flex items-center gap-2">
                      <Target className={`w-5 h-5 ${style.checkColor}`} />
                      <span>{t.modulesLabel}</span>
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                      {aud.modules.map((mod, mIdx) => (
                        <div
                          key={mIdx}
                          className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-slate-300 transition-all shadow-2xs"
                        >
                          <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${style.checkColor}`} />
                          <span className="text-xs text-slate-800 leading-relaxed font-medium">
                            {mod}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Row: Tools/Concepts & Deliverable */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4 border-t border-slate-100 items-center">
                    <div className="lg:col-span-7 space-y-2.5">
                      <div className="text-xs font-bold text-slate-500">
                        {t.toolsLabel}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {aud.toolsAndConcepts.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className={`px-3 py-1 rounded-xl text-xs font-bold border ${style.tagBg}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className={`lg:col-span-5 p-4 rounded-2xl border ${style.deliverableBg} space-y-1`}>
                      <div className="flex items-center gap-1.5 text-xs font-black">
                        <Award className="w-4 h-4 shrink-0" />
                        <span>{t.deliverableLabel}</span>
                      </div>
                      <p className="text-xs leading-relaxed font-medium">
                        {aud.deliverable}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Enterprise Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {t.pillarsTitle}
          </h2>
          <p className="text-xs text-slate-500 mt-2">
            {t.pillarsSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel bg-white p-6 rounded-2xl border border-purple-200 space-y-4 shadow-xs">
            <div className="p-3 rounded-xl bg-purple-100 text-purple-700 w-fit">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">{t.p1Title}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {t.p1Desc}
            </p>
          </div>

          <div className="glass-panel bg-white p-6 rounded-2xl border border-cyan-200 space-y-4 shadow-xs">
            <div className="p-3 rounded-xl bg-cyan-100 text-cyan-700 w-fit">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">{t.p2Title}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {t.p2Desc}
            </p>
          </div>

          <div className="glass-panel bg-white p-6 rounded-2xl border border-emerald-200 space-y-4 shadow-xs">
            <div className="p-3 rounded-xl bg-emerald-100 text-emerald-700 w-fit">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">{t.p3Title}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {t.p3Desc}
            </p>
          </div>
        </div>
      </section>

      {/* Courses Catalog Filtered */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-2xl font-bold text-slate-900 mb-8 border-purple-600 ${
            isLtr ? "border-l-4 pl-3" : "border-r-4 pr-3"
          }`}
        >
          {t.coursesSectionTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {corporateCourses.map((course) => (
            <CourseCard key={course.id} course={course} locale={locale} />
          ))}
        </div>
      </section>

      <ContactTeaser locale={locale} />
    </div>
  );
}
