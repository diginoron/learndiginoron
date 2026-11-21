import Image from "next/image";
import Link from "next/link";
import {
  Crown,
  Phone,
  TrendingDown,
  Compass,
  Bot,
  Network,
  Building2,
  CheckCircle2,
  Target,
  Award,
  Users,
  BookOpen,
  ShieldCheck,
  Calculator,
  Landmark,
  Briefcase,
  Megaphone,
  ClipboardList,
  Scale,
  Handshake,
  PackageSearch,
  AlertTriangle,
  Quote,
  Lock,
  Puzzle,
} from "lucide-react";
import { COURSES } from "@/data/courses";
import CourseCard from "@/components/CourseCard";
import ContactTeaser from "@/components/ContactTeaser";
import { Locale, isValidLocale, getAlternateUrls, getDirection, getLocalizedPath } from "@/lib/i18n";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ locale: string }>;
}

interface TrackData {
  id: string;
  badge: string;
  trackName: string;
  coreTopic: string;
  durationFormat: string;
  keyOutcome: string;
  detailedDesc: string;
  modules: string[];
  toolsAndConcepts: string[];
  deliverable: string;
}

interface DepartmentData {
  id: string;
  name: string;
  desc: string;
}

interface FurtherLinkData {
  title: string;
  href: string;
  desc: string;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const alternates = getAlternateUrls("/services/executive-ai-courses");

  const titles: Record<Locale, string> = {
    en: "Private AI Courses for Executives & Organizational Leaders | DigiNoron",
    fa: "دوره‌های خصوصی هوش مصنوعی مدیران و رهبران سازمانی | دیجی نورون",
    ar: "الدورات الخاصة في الذكاء الاصطناعي للمديرين وقيادات المؤسسات | ديجي نورون",
  };

  const descriptions: Record<Locale, string> = {
    en: "Closed, confidential AI courses designed exclusively for managers and organizational leaders: from AI content and application, to AI agents & multi-agent systems, to enterprise smart-organization transformation.",
    fa: "دوره‌های خصوصی و مخصوص مدیران و رهبران سازمان‌ها: از آموزش هوش مصنوعی از محتوا تا کاربرد، ایجنت‌ها و مولتی‌ایجنت‌ها، تا هوشمندسازی کامل سازمان؛ چون وظیفه هوشمندسازی سازمانی با مدیران است.",
    ar: "دورات خاصة ومغلقة مصممة للمديرين وقيادات المؤسسات: من الذكاء الاصطناعي من المحتوى إلى التطبيق، والوكلاء والأنظمة متعددة الوكلاء، إلى التحول الذكي الكامل للمؤسسة.",
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

export default async function ExecutiveAiCoursesPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const isLtr = getDirection(locale) === "ltr";
  const executiveCourses = COURSES.filter((c) => c.slug === "generative-ai-for-executives");

  const content = {
    en: {
      badge: "DigiNoron Executive AI Academy",
      title: "Private AI Courses for",
      titleHighlight: "Managers & Organizational Leaders",
      description:
        "A closed, confidential learning journey designed exclusively for the leadership team of your organization: from truly understanding AI — content, tools and application — to autonomous agents, multi-agent systems, and enterprise smart-organization strategy.",
      requestCourseBtn: "Request a Private Leadership Course",
      inquiryPhoneBtn: "Enterprise Line: +61 451 410 352",
      calloutTitle: "Smart transformation starts in the boardroom",
      calloutSubtitle: "Curricula fully customized around your industry, data, and management hierarchy",
      failBadge: "The Hard Reality of Enterprise AI",
      failTitleMain: "95% of AI projects in organizations",
      failTitleHighlight: "fail",
      failStatLabel:
        "of enterprise generative-AI pilots deliver no measurable business value (MIT NANDA, State of AI in Business)",
      failDesc:
        "Global research keeps confirming a hard truth: the vast majority of enterprise AI projects never produce tangible results. A significant share of these failures has no technical root cause — it stems from an incorrect understanding of AI at the leadership level: investing in tools instead of capability, showcase projects instead of real problems, and delegating strategic decisions to technology vendors without the manager's own AI literacy.",
      failReasonsTitle: "The most common root causes of failure:",
      failReasons: [
        "Managers' insufficient understanding of the real capabilities and limits of AI",
        "Buying tools without redesigning processes and running role-based training",
        "No strategy or roadmap: scattered, showcase projects with zero ROI",
        "Expecting IT teams alone to deliver business transformation",
      ],
      responsibilityBadge: "Leadership First, Technology Second",
      responsibilityTitle: "Enterprise smart-ification is the manager's responsibility",
      responsibilityDesc:
        "Technology alone does not transform an organization. The mandate of building a smart organization sits with managers and leaders: a leader who genuinely understands AI makes the right investment decisions, re-engineers the right processes, and guarantees successful AI implementation for the whole company.",
      responsibilityPoints: [
        {
          title: "Understanding before deciding",
          desc: "An AI-literate manager asks the right questions, challenges vendor promises, and separates real value from hype.",
        },
        {
          title: "Guaranteed implementation",
          desc: "When leadership understands AI, adoption stops being an IT experiment and becomes a company-wide transformation with measurable ROI.",
        },
        {
          title: "Leading the human side",
          desc: "Change management, culture-building, and designing hybrid human-agent teams can only be led from the top.",
        },
        {
          title: "Smart selection",
          desc: "A knowledgeable leader knows what to smart-ify, where to deploy agents, and how much to invest.",
        },
      ],
      responsibilityQuote:
        "Humans must think and AI must execute — otherwise AI thinks and humans execute.",
      tracksBadge: "Three Progressive Leadership Tracks",
      tracksTitle: "From understanding AI to running an intelligent organization",
      tracksSubtitle:
        "Each track is delivered exclusively and privately for your leadership team; tracks can be completed sequentially or as one combined program.",
      colTrack: "Track",
      colCoreContent: "Core Educational Content",
      colFormat: "Recommended Format",
      colOutcome: "Key Outcome for the Leadership Team",
      tracksLabel: "Detailed modules:",
      toolsLabel: "Core concepts, frameworks & tools:",
      deliverableLabel: "Tangible outcome:",
      tracks: [
        {
          id: "content-to-application",
          badge: "Track 1 — Foundation",
          trackName: "AI: From Content to Application",
          coreTopic: "Managerial mastery of AI tools & real application",
          durationFormat: "8 Hours (1 full day or 2 half-day sessions)",
          keyOutcome: "Manager-grade command of AI tools + a personal AI workflow",
          detailedDesc:
            "The starting point for every organizational leader. This track builds a realistic, hype-free picture of AI: how language models reason, what they can truly do, and where their limits are. The manager then moves from casual user to professional operator and decision-maker — applying AI directly to their own daily leadership tasks.",
          modules: [
            "Understanding AI and language models correctly: beyond the hype and Instagram-style training",
            "Managerial mastery of leading tools (ChatGPT, Claude, Gemini, Copilot) and choosing the right tool for every need",
            "Applied prompt engineering for managers: precise, reliable, standardized outputs for decision-making",
            "From content generation to real application: analyzing reports, documents, financial data and Excel with AI",
            "Building a custom assistant (Custom GPT) trained on your organization's policies and standards",
            "Hands-on workshop: converting 3 of each manager's daily tasks into a smart workflow",
            "Data security & privacy: using AI without leaking confidential organizational information",
            "Designing a prompt library and smart SOPs for the team you manage",
          ],
          toolsAndConcepts: [
            "Managerial Prompt Engineering",
            "ChatGPT / Claude / Gemini",
            "Document & Excel Analysis",
            "Custom GPT Assistants",
            "Data Security",
            "Personal AI Workflow",
          ],
          deliverable:
            "A managerial prompt library + 3 real smart workflows built from the manager's own daily tasks.",
        },
        {
          id: "agents-multiagents",
          badge: "Track 2 — Advanced",
          trackName: "AI Agents & Multi-Agent Systems",
          coreTopic: "From the agent concept to hands-on design & deployment",
          durationFormat: "8 Hours (1 full day or 2 half-day sessions)",
          keyOutcome: "An agent deployment map for your unit + a working prototype",
          detailedDesc:
            "Autonomous agents are the next generation of enterprise AI: entities that don't just answer — they execute the work. In this track managers learn what an agent really is, how it operates, how a team of agents (multi-agent systems) orchestrates multi-step processes, and how to design and deploy their first organizational agent without total dependence on the IT team.",
          modules: [
            "The architecture of AI Agents: from a simple chatbot to an autonomous operator with memory and tools",
            "Building your first organizational agent hands-on, without heavy coding (Vibe Coding)",
            "Multi-agent systems: coordinating an agent team for multi-step business processes",
            "Connecting agents to organizational data (Enterprise RAG) and existing systems",
            "Defining authority levels, security boundaries, and agent governance in the organization",
            "Case studies: successful and failed agents inside global organizations",
            "Hands-on workshop: designing the agent map for your own business unit",
            "Evaluating agent ROI: which tasks to delegate to agents — and which never",
          ],
          toolsAndConcepts: [
            "AI Agent Architecture",
            "Multi-Agent Systems",
            "Enterprise RAG",
            "Vibe Coding",
            "Tool Calling",
            "Agent Governance & Security",
          ],
          deliverable:
            "A deployment map of agents for the business unit + a working agent prototype built during the workshop.",
        },
        {
          id: "enterprise-smartification",
          badge: "Track 3 — Strategic",
          trackName: "Enterprise Smart-Organization Transformation",
          coreTopic: "Strategy blueprint, roadmap & transformation leadership",
          durationFormat: "12 Hours (2-day strategic workshop)",
          keyOutcome: "Smart-organization strategy blueprint + a 90-day action plan",
          detailedDesc:
            "The final, strategic track: where the manager evolves from an AI user into a transformation architect. Built on global frameworks, the leadership team audits their own organization, drafts the smart-ification roadmap, prioritizes projects by ROI, and leaves with a realistic 90-day execution plan.",
          modules: [
            "Organizational readiness assessment & process diagnosis based on the APQC framework",
            "Drafting the smart-organization strategy blueprint and a 3-to-5-year roadmap",
            "Prioritizing AI projects by ROI and preventing resource dispersion",
            "Business Process Automation (BPA) across finance, HR, sales and administrative units",
            "Leading change: culture-building, overcoming resistance, and managing hybrid human-agent teams",
            "Data governance, security, legal compliance, and the ethics of AI",
            "In-house team or outsourcing? Models for hiring, upskilling, and partnering with technology vendors",
            "Closing workshop: issuing the organization's Smart-Transformation Charter and a 90-day plan",
          ],
          toolsAndConcepts: [
            "APQC Framework",
            "AI Readiness Assessment",
            "3–5 Year Roadmap",
            "BPA Automation",
            "Data Governance",
            "Transformation Management",
          ],
          deliverable:
            "A draft smart-organization strategy blueprint + an AI governance charter + a 90-day execution plan.",
        },
      ],
      deptBadge: "AI Applications by Department",
      deptTitle: "Artificial Intelligence for Every Unit of Your Organization",
      deptSubtitle:
        "Throughout the private tracks, every topic is tied to the real day-to-day work of each department:",
      deptItems: [
        {
          id: "accounting",
          name: "Accounting",
          desc: "Automated journal entries, reconciliations, closing processes, and financial reporting with intelligent agents",
        },
        {
          id: "finance",
          name: "Finance",
          desc: "Financial statement analysis, cash-flow forecasting, investment modeling, and risk management",
        },
        {
          id: "management",
          name: "Management & Strategy",
          desc: "Data-driven decision-making, executive dashboards, scenario planning, and competitor analysis",
        },
        {
          id: "marketing",
          name: "Marketing",
          desc: "Campaign design, market analysis & SEO, content-engine systems, and personalized brand messaging",
        },
        {
          id: "hr",
          name: "Human Resources",
          desc: "Resume screening, career architecture, employee upskilling, and attrition prediction",
        },
        {
          id: "operations",
          name: "Operations & Administration",
          desc: "Official correspondence, automated meeting minutes, task management, and workflow automation",
        },
        {
          id: "legal",
          name: "Legal",
          desc: "Contract analysis, regulatory monitoring, document drafting, and comparative studies",
        },
        {
          id: "sales",
          name: "Sales & Trade",
          desc: "Sales forecasting, lead scoring, intelligent CRM, and AI-powered customer support",
        },
        {
          id: "procurement",
          name: "Procurement & Supply Chain",
          desc: "Demand forecasting, supplier evaluation, and inventory optimization",
        },
      ] as DepartmentData[],
      privateBadge: "Private Format",
      privateTitle: "Why a Private, Closed Course?",
      privateDesc:
        "Unlike public workshops, DigiNoron private courses are delivered exclusively to your organization's leadership team: confidential, customized, and built on your real data and processes.",
      privatePoints: [
        {
          title: "Fully Confidential",
          desc: "Sessions dedicated to your management team; sensitive strategies stay inside the organization.",
        },
        {
          title: "Fully Customized",
          desc: "Content tailored to your industry, digital-maturity level, and real organizational data.",
        },
        {
          title: "On-Site or Online",
          desc: "Delivered at your premises or online, scheduled around your executives' calendars.",
        },
        {
          title: "Post-Course Support",
          desc: "Follow-up consulting to turn the learnings into live projects.",
        },
      ],
      coursesSectionTitle: "Featured Course for Executives",
      furtherTitle: "Continue Reading",
      furtherLinks: [
        {
          title: "Why Managers Must Learn AI Beyond Content Creation",
          href: "/blog/why-managers-employees-must-learn-ai-beyond-content-creation",
          desc: "From Instagram-style tutorials to agents and real organizational transformation",
        },
        {
          title: "Enterprise AI Transformation — The DigiNoron Model",
          href: "/blog/enterprise-ai-transformation-diginoron-model",
          desc: "The six-pillar model for smart organizational transformation",
        },
        {
          title: "Corporate AI Training (All Levels)",
          href: "/services/corporate",
          desc: "Training programs for managers, specialists, and IT teams",
        },
      ] as FurtherLinkData[],
    },
    fa: {
      badge: "آکادمی هوش مصنوعی مدیران دیجی نورون",
      title: "دوره‌های خصوصی هوش مصنوعی",
      titleHighlight: "ویژه مدیران و رهبران سازمانی",
      description:
        "یک مسیر آموزشی کاملاً خصوصی و مخصوص تیم رهبری سازمان شما: از شناخت واقعی هوش مصنوعی — محتوا، ابزارها و کاربرد — تا ایجنت‌های خودمختار، مولتی‌ایجنت‌ها و راهبرد هوشمندسازی سازمانی.",
      requestCourseBtn: "درخواست دوره خصوصی مدیران",
      inquiryPhoneBtn: "استعلام سازمانی: ۰۲۱۸۸۲۵۲۴۹۷",
      calloutTitle: "هوشمندسازی از اتاق مدیران آغاز می‌شود",
      calloutSubtitle: "محتوای کاملاً سفارشی بر اساس صنعت، داده‌ها و ساختار مدیریتی شما",
      failBadge: "واقعیت تلخ پروژه‌های هوش مصنوعی سازمانی",
      failTitleMain: "۹۵٪ پروژه‌های هوش مصنوعی در سازمان‌ها",
      failTitleHighlight: "شکست می‌خورند",
      failStatLabel:
        "از پروژه‌های هوش مصنوعی مولد سازمانی هیچ ارزش تجاری قابل اندازه‌گیری ایجاد نمی‌کنند (گزارش MIT NANDA، وضعیت AI در کسب‌وکار)",
      failDesc:
        "پژوهش‌های جهانی بارها تایید کرده‌اند که اکثر پروژه‌های هوش مصنوعی سازمانی به نتیجه ملموس نمی‌رسند. بخش مهمی از این شکست‌ها ریشه فنی ندارد؛ ریشه در درک نادرست مدیران از هوش مصنوعی است: سرمایه‌گذاری روی ابزار به جای توانمندی، پروژه‌های نمایشی به جای مسئله‌های واقعی، و سپردن تصمیم‌های راهبردی به فروشندگان فناوری بدون شناخت خودِ مدیر.",
      failReasonsTitle: "شایع‌ترین ریشه‌های شکست:",
      failReasons: [
        "شناخت ناکافی مدیران از ظرفیت‌ها و مرزهای واقعی هوش مصنوعی",
        "خرید ابزار بدون بازطراحی فرایندها و آموزش نقش‌محور",
        "نبود استراتژی و نقشه راه؛ پروژه‌های پراکنده و نمایشی بدون ROI",
        "انتظار معجزه از تیم IT بدون مشارکت فعال مدیران کسب‌وکار",
      ],
      responsibilityBadge: "اول رهبری، بعد فناوری",
      responsibilityTitle: "وظیفه هوشمندسازی سازمانی با مدیران است",
      responsibilityDesc:
        "فناوری به تنهایی سازمان را متحول نمی‌کند. مسئولیت ساختن سازمان هوشمند بر عهده مدیران و رهبران است: مدیری که هوش مصنوعی را واقعاً بشناسد، تصمیم‌های درست سرمایه‌گذاری می‌گیرد، فرایندهای درست را بازطراحی می‌کند و پیاده‌سازی موفق هوش مصنوعی را برای کل شرکت تضمین می‌کند.",
      responsibilityPoints: [
        {
          title: "شناخت قبل از تصمیم",
          desc: "مدیرِ آشنا به هوش مصنوعی سؤال درست می‌پرسد، وعده‌های فروشندگان را به چالش می‌کشد و ارزش واقعی را از هیاهو جدا می‌کند.",
        },
        {
          title: "تضمین پیاده‌سازی",
          desc: "وقتی رهبری هوش مصنوعی را بشناسد، پذیرش AI از یک آزمایش IT به تحولی شرکت‌پهن با ROI قابل اندازه‌گیری تبدیل می‌شود.",
        },
        {
          title: "رهبری ضلع انسانی",
          desc: "مدیریت تغییر، فرهنگ‌سازی و طراحی تیم‌های ترکیبی انسان و ایجنت فقط از بالای سازمان قابل رهبری است.",
        },
        {
          title: "انتخاب هوشمندانه",
          desc: "مدیرِ آگاه می‌داند چه چیزی را باید هوشمندسازی کرد، ایجنت‌ها را کجا مستقر کرد و چقدر باید سرمایه‌گذاری کرد.",
        },
      ],
      responsibilityQuote:
        "«انسان باید فکر کند و هوش مصنوعی اجرا؛ وگرنه هوش مصنوعی فکر می‌کند و انسان اجرا.»",
      tracksBadge: "سه مسیر پیشرونده ویژه مدیران",
      tracksTitle: "از شناخت هوش مصنوعی تا رهبری سازمان هوشمند",
      tracksSubtitle:
        "هر مسیر به‌صورت کاملاً خصوصی برای تیم رهبری شما برگزار می‌شود؛ می‌توانید مسیرها را پشت سر هم یا به‌صورت یک برنامه ترکیبی تکمیل کنید.",
      colTrack: "مسیر",
      colCoreContent: "محتوای آموزشی",
      colFormat: "فرمت و زمان پیشنهادی",
      colOutcome: "دستاورد کلیدی برای تیم رهبری",
      tracksLabel: "ریزسرفصل‌ها:",
      toolsLabel: "مفاهیم، چارچوب‌ها و ابزارهای کلیدی:",
      deliverableLabel: "خروجی عملی:",
      tracks: [
        {
          id: "content-to-application",
          badge: "مسیر ۱ — پایه",
          trackName: "هوش مصنوعی از محتوا تا کاربرد",
          coreTopic: "تسلط مدیریتی بر ابزارهای AI و کاربرد واقعی",
          durationFormat: "۸ ساعت (۱ روز کامل یا ۲ جلسه)",
          keyOutcome: "تسلط درجه‌یک مدیریتی بر AI + گردش‌کار هوشمند شخصی",
          detailedDesc:
            "نقطه شروع برای هر رهبر سازمانی؛ این مسیر تصویری واقعی و بدون اغراق از هوش مصنوعی می‌سازد: مدل‌های زبانی چگونه استدلال می‌کنند، واقعاً چه کاری از آن‌ها برمی‌آید و مرزهایشان کجاست. سپس مدیر از یک کاربر عادی به کاربر حرفه‌ای و تصمیم‌گیر تبدیل می‌شود و یاد می‌گیرد وظایف واقعی رهبری روزانه خود را مستقیماً با هوش مصنوعی انجام دهد.",
          modules: [
            "درک درست هوش مصنوعی و مدل‌های زبانی: فراتر از هیاهو و آموزش‌های اینستاگرامی",
            "تسلط مدیریتی بر ابزارهای روز (ChatGPT، Claude، Gemini، Copilot) و انتخاب ابزار درست برای هر نیاز",
            "مهندسی پرامپت کاربردی برای مدیران: خروجی‌های دقیق، قابل اتکا و استاندارد برای تصمیم‌گیری",
            "از تولید محتوا تا کاربرد واقعی: تحلیل گزارش‌ها، اسناد، داده‌های مالی و اکسل با AI",
            "ساخت دستیار اختصاصی (Custom GPT) آموزش‌دیده بر بخشنامه‌ها و استانداردهای سازمان",
            "کارگاه عملی: تبدیل ۳ وظیفه روزانه هر مدیر به یک گردش‌کار هوشمند",
            "امنیت داده و حریم خصوصی: استفاده از AI بدون نشت اطلاعات محرمانه سازمان",
            "طراحی بانک پرامپت و SOPهای هوشمند برای تیم تحت مدیریت",
          ],
          toolsAndConcepts: [
            "مهندسی پرامپت مدیریتی",
            "ChatGPT / Claude / Gemini",
            "تحلیل اسناد و اکسل",
            "دستیار اختصاصی Custom GPT",
            "امنیت داده",
            "گردش‌کار شخصی AI",
          ],
          deliverable:
            "بانک پرامپت مدیریتی + ۳ گردش‌کار هوشمند واقعی ساخته‌شده از وظایف خود مدیر.",
        },
        {
          id: "agents-multiagents",
          badge: "مسیر ۲ — پیشرفته",
          trackName: "ایجنت‌ها و مولتی‌ایجنت‌ها",
          coreTopic: "از مفهوم ایجنت تا طراحی و استقرار عملی",
          durationFormat: "۸ ساعت (۱ روز کامل یا ۲ جلسه)",
          keyOutcome: "نقشه استقرار ایجنت‌ها برای واحد کاری + نمونه عملی ساخته‌شده",
          detailedDesc:
            "ایجنت‌ها نسل بعدی هوش مصنوعی سازمانی‌اند: عامل‌هایی که فقط جواب نمی‌دهند، بلکه کار را انجام می‌دهند. در این مسیر مدیران می‌آموزند ایجنت چیست و چگونه کار می‌کند، چگونه تیمی از ایجنت‌ها (مولتی‌ایجنت) فرایندهای چندمرحله‌ای را هماهنگ می‌کنند و چطور بدون وابستگی کامل به تیم فنی، اولین ایجنت سازمانی خود را طراحی و استقرار دهند.",
          modules: [
            "معماری ایجنت‌های هوشمند (AI Agents): از چت‌بات ساده تا عامل خودمختار با حافظه و ابزار",
            "ساخت عملی اولین ایجنت سازمانی بدون کدنویسی سنگین (Vibe Coding)",
            "سیستم‌های مولتی‌ایجنت: هماهنگی تیمی ایجنت‌ها برای فرایندهای چندمرحله‌ای",
            "اتصال ایجنت‌ها به داده‌های سازمان (Enterprise RAG) و سامانه‌های موجود",
            "تعریف سطح اختیار، محدوده امنیتی و حاکمیت ایجنت‌ها در سازمان",
            "مطالعات موردی: ایجنت‌های موفق و شکست‌خورده در سازمان‌های جهانی",
            "کارگاه عملی: طراحی نقشه ایجنت‌های واحد کاری خود",
            "ارزیابی ROI ایجنت‌ها: چه وظایفی را باید به ایجنت سپرد و چه وظایفی را نه",
          ],
          toolsAndConcepts: [
            "معماری AI Agents",
            "سیستم‌های مولتی‌ایجنت",
            "Enterprise RAG",
            "Vibe Coding",
            "Tool Calling",
            "حاکمیت و امنیت ایجنت",
          ],
          deliverable:
            "نقشه استقرار ایجنت‌های واحد کاری + نمونه عملی یک ایجنت ساخته‌شده در کارگاه.",
        },
        {
          id: "enterprise-smartification",
          badge: "مسیر ۳ — راهبردی",
          trackName: "هوشمندسازی سازمانی",
          coreTopic: "سند راهبردی، نقشه راه و رهبری تحول",
          durationFormat: "۱۲ ساعت (کارگاه استراتژیک ۲ روزه)",
          keyOutcome: "سند راهبردی هوشمندسازی + برنامه اجرایی ۹۰ روزه",
          detailedDesc:
            "مسیر پایانی و استراتژیک؛ جایی که مدیر از «کاربر هوش مصنوعی» به «معمار تحول» تبدیل می‌شود. تیم رهبری بر پایه چارچوب‌های جهانی، سازمان خود را عارضه‌یابی می‌کند، نقشه راه هوشمندسازی را تدوین می‌کند، پروژه‌ها را بر اساس ROI اولویت‌بندی می‌کند و با یک برنامه اجرایی واقع‌بینانه برای ۹۰ روز آینده از کارگاه خارج می‌شود.",
          modules: [
            "سنجش آمادگی سازمانی و عارضه‌یابی فرایندها بر پایه چارچوب APQC",
            "تدوین سند راهبردی و نقشه راه ۳ تا ۵ ساله هوشمندسازی سازمان",
            "اولویت‌بندی پروژه‌ها بر اساس ROI و جلوگیری از پخش‌شدن منابع",
            "اتوماسیون فرایندهای کسب‌وکار (BPA) در واحدهای مالی، منابع انسانی، فروش و اداری",
            "رهبری تغییر: فرهنگ‌سازی، مقابله با مقاومت و مدیریت تیم‌های ترکیبی انسان و ایجنت",
            "حاکمیت داده، امنیت، انطباق قانونی و ملاحظات اخلاقی AI",
            "تیم داخلی یا برون‌سپاری؟ مدل جذب، توانمندسازی و همکاری با شرکای فناوری",
            "کارگاه پایانی: تدوین «منشور هوشمندسازی» سازمان و برنامه اجرایی ۹۰ روزه",
          ],
          toolsAndConcepts: [
            "چارچوب APQC",
            "سنجش AI Readiness",
            "نقشه راه ۳–۵ ساله",
            "اتوماسیون BPA",
            "حاکمیت داده",
            "مدیریت تحول",
          ],
          deliverable:
            "پیش‌نویس سند راهبردی هوشمندسازی + منشور حاکمیت AI + برنامه اجرایی ۹۰ روزه.",
        },
      ],
      deptBadge: "کاربرد AI به تفکیک واحد سازمانی",
      deptTitle: "هوش مصنوعی برای تک‌تک واحدهای سازمان شما",
      deptSubtitle:
        "در طول مسیرهای خصوصی، هر مبحث به کار واقعی روزمره هر دپارتمان گره زده می‌شود:",
      deptItems: [
        {
          id: "accounting",
          name: "حسابداری",
          desc: "ثبت خودکار اسناد، مغایرت‌گیری، بستن حساب‌ها و گزارشگری مالی با ایجنت‌های هوشمند",
        },
        {
          id: "finance",
          name: "مالی",
          desc: "تحلیل صورت‌های مالی، پیش‌بینی جریان نقد، مدل‌سازی سرمایه‌گذاری و مدیریت ریسک",
        },
        {
          id: "management",
          name: "مدیریت و راهبری",
          desc: "تصمیم‌سازی داده‌محور، داشبوردهای مدیریتی، سناریونگاری و تحلیل رقبا",
        },
        {
          id: "marketing",
          name: "بازاریابی",
          desc: "طراحی کمپین، تحلیل بازار و سئو، موتور تولید محتوا و شخصی‌سازی پیام برند",
        },
        {
          id: "hr",
          name: "منابع انسانی",
          desc: "غربالگری رزومه، معماری شغلی، توانمندسازی کارکنان و پیش‌بینی ترک خدمت",
        },
        {
          id: "operations",
          name: "اجرایی و اداری",
          desc: "مکاتبات رسمی، صورت‌جلسات خودکار، مدیریت وظایف و اتوماسیون گردش‌کارها",
        },
        {
          id: "legal",
          name: "حقوقی",
          desc: "تحلیل قراردادها، پایش قوانین، پیش‌نویس اسناد و مطالعات تطبیقی",
        },
        {
          id: "sales",
          name: "فروش و تجارت",
          desc: "پیش‌بینی فروش، امتیازدهی سرنخ‌ها، CRM هوشمند و پشتیبانی مشتری با AI",
        },
        {
          id: "procurement",
          name: "تدارکات و زنجیره تأمین",
          desc: "پیش‌بینی تقاضا، ارزیابی تأمین‌کنندگان و بهینه‌سازی موجودی",
        },
      ] as DepartmentData[],
      privateBadge: "فرمت خصوصی",
      privateTitle: "چرا دوره خصوصی و مخصوص؟",
      privateDesc:
        "برخلاف کارگاه‌های عمومی، دوره‌های خصوصی دیجی نورون فقط برای تیم رهبری سازمان شما برگزار می‌شوند؛ محرمانه، سفارشی و ساخته‌شده روی داده‌ها و فرایندهای واقعی شما.",
      privatePoints: [
        {
          title: "کاملاً محرمانه",
          desc: "جلسات مختص تیم مدیریتی شما؛ راهبردهای حساس درون سازمان می‌مانند.",
        },
        {
          title: "کاملاً سفارشی",
          desc: "محتوای متناسب با صنعت، سطح بلوغ دیجیتال و داده‌های واقعی سازمان.",
        },
        {
          title: "حضوری یا آنلاین",
          desc: "برگزاری در محل سازمان یا به‌صورت آنلاین، با زمان‌بندی هماهنگ با تقویم مدیران.",
        },
        {
          title: "همراهی پس از دوره",
          desc: "مشاوره پیگیری برای تبدیل آموخته‌ها به پروژه‌های زنده.",
        },
      ],
      coursesSectionTitle: "دوره ویژه مدیران",
      furtherTitle: "ادامه مطالعه",
      furtherLinks: [
        {
          title: "چرا مدیران باید هوش مصنوعی را فراتر از تولید محتوا یاد بگیرند؟",
          href: "/blog/why-managers-employees-must-learn-ai-beyond-content-creation",
          desc: "از آموزش‌های اینستاگرامی تا ایجنت‌ها و تحول سازمانی واقعی",
        },
        {
          title: "هوشمندسازی سازمانی با الگوی دیجی نورون",
          href: "/blog/enterprise-ai-transformation-diginoron-model",
          desc: "مدل ۶ ستونی تحول هوشمند سازمان‌ها",
        },
        {
          title: "آموزش هوش مصنوعی سازمانی (همه سطوح)",
          href: "/services/corporate",
          desc: "برنامه‌های آموزشی برای مدیران، کارشناسان و تیم IT",
        },
      ] as FurtherLinkData[],
    },
    ar: {
      badge: "أكاديمية الذكاء الاصطناعي للقيادات - ديجي نورون",
      title: "الدورات الخاصة في الذكاء الاصطناعي",
      titleHighlight: "للمديرين وقيادات المؤسسات",
      description:
        "رحلة تعليمية مغلقة وسرية مصممة حصرياً لفريق القيادة في مؤسستكم: من الفهم الحقيقي للذكاء الاصطناعي — المحتوى والأدوات والتطبيق — إلى الوكلاء المستقلين والأنظمة متعددة الوكلاء واستراتيجية التحول الذكي للمؤسسة.",
      requestCourseBtn: "اطلب دورة خاصة للقيادات",
      inquiryPhoneBtn: "الاستفسارات المؤسسية: +61 451 410 352",
      calloutTitle: "التحول الذكي يبدأ من مجلس الإدارة",
      calloutSubtitle: "مناهج مخصصة بالكامل وفق قطاعكم وبياناتكم وهيكل الإدارة",
      failBadge: "الواقع القاسٍ لمشاريع الذكاء الاصطناعي المؤسسية",
      failTitleMain: "٩٥٪ من مشاريع الذكاء الاصطناعي في المؤسسات",
      failTitleHighlight: "تفشل",
      failStatLabel:
        "من المشاريع التجريبية للذكاء الاصطناعي التوليدي لا تحقق أي قيمة تجارية قابلة للقياس (تقرير MIT NANDA)",
      failDesc:
        "تؤكد الأبحاث العالمية مراراً أن غالبية مشاريع الذكاء الاصطناعي المؤسسية لا تصل إلى نتائج ملموسة. وجذر جزء كبير من هذه الإخفاقات ليس تقنياً؛ بل هو الفهم الخاطئ للذكاء الاصطناعي على مستوى القيادة: الاستثمار في الأدوات بدلاً من بناء القدرات، ومشاريع استعراضية بدلاً من مشكلات حقيقية، وتفويض القرارات الاستراتيجية للموردين دون معرفة المدير نفسه بالذكاء الاصطناعي.",
      failReasonsTitle: "أبرز الأسباب الجذرية للفشل:",
      failReasons: [
        "معرفة غير كافية لدى المديرين بالقدرات والحدود الحقيقية للذكاء الاصطناعي",
        "شراء الأدوات دون إعادة تصميم العمليات والتدريب حسب الأدوار",
        "غياب الاستراتيجية وخريطة الطريق؛ مشاريع مبعثرة واستعراضية بلا عائد",
        "انتظار المعجزة من فريق تقنية المعلومات دون مشاركة فعالة من قيادة الأعمال",
      ],
      responsibilityBadge: "القيادة أولاً، ثم التقنية",
      responsibilityTitle: "التحول الذكي للمؤسسة مسؤولية المديرين",
      responsibilityDesc:
        "التقنية وحدها لا تحوّل المؤسسة. مسؤولية بناء المؤسسة الذكية تقع على عاتق المديرين والقيادات: المدير الذي يفهم الذكاء الاصطناعي فهماً حقيقياً يتخذ قرارات استثمارية صحيحة، ويعيد هندسة العمليات الصحيحة، ويضمن نجاح تنفيذ الذكاء الاصطناعي للشركة بأكملها.",
      responsibilityPoints: [
        {
          title: "الفهم قبل القرار",
          desc: "المدير الملم بالذكاء الاصطناعي يطرح الأسئلة الصحيحة، ويحاسِب وعود الموردين، ويفصل القيمة الحقيقية عن الضجة.",
        },
        {
          title: "ضمان التنفيذ",
          desc: "عندما تفهم القيادة الذكاء الاصطناعي، يتحول تبنّيه من تجربة تقنية إلى تحول مؤسسي بعائد قابل للقياس.",
        },
        {
          title: "قيادة الجانب الإنساني",
          desc: "إدارة التغيير وبناء الثقافة وتصميم الفرق الهجينة (البشر والوكلاء) لا تُقاد إلا من قمة المؤسسة.",
        },
        {
          title: "الاختيار الذكي",
          desc: "المدير الواعي يعرف ما يجب تحويله ذكياً، وأين ينشر الوكلاء، وكم يستثمر.",
        },
      ],
      responsibilityQuote:
        "«البشر يفكرون والذكاء الاصطناعي ينفذ — وإلا فسيفكر الذكاء الاصطناعي وينفذ البشر.»",
      tracksBadge: "ثلاثة مسارات متدرجة للقيادات",
      tracksTitle: "من فهم الذكاء الاصطناعي إلى قيادة المؤسسة الذكية",
      tracksSubtitle:
        "يُعقد كل مسار بشكل خاص حصرياً لفريق القيادة لديكم؛ ويمكن إكمال المسارات تباعاً أو كبرنامج موحد واحد.",
      colTrack: "المسار",
      colCoreContent: "المحتوى التدريبي",
      colFormat: "الصيغة والمدة المقترحة",
      colOutcome: "العائد الرئيسي لفريق القيادة",
      tracksLabel: "المحاور التفصيلية:",
      toolsLabel: "المفاهيم والأطر والأدوات الرئيسية:",
      deliverableLabel: "المخرج العملي:",
      tracks: [
        {
          id: "content-to-application",
          badge: "المسار ١ — الأساس",
          trackName: "الذكاء الاصطناعي من المحتوى إلى التطبيق",
          coreTopic: "إتقان إداري لأدوات الذكاء الاصطناعي وتطبيقها الواقعي",
          durationFormat: "٨ ساعات (يوم كامل أو جلستان)",
          keyOutcome: "إتقان قيادي لأدوات AI + مسار عمل ذكي شخصي",
          detailedDesc:
            "نقطة البداية لكل قائد مؤسسي؛ هذا المسار يبني صورة واقعية بلا مبالغة عن الذكاء الاصطناعي: كيف تستدل النماذج اللغوية، وماذا تستطيع فعلاً، وأين حدودها. ثم يتحول المدير من مستخدم عادي إلى مستخدم محترف وصانع قرار، ويتعلم إنجاز مهامه القيادية اليومية الحقيقية مباشرة بواسطة الذكاء الاصطناعي.",
          modules: [
            "الفهم الصحيح للذكاء الاصطناعي والنماذج اللغوية: أبعد من الضجة ودورات التواصل الاجتماعي",
            "إتقان إداري للأدوات العالمية (ChatGPT، Claude، Gemini، Copilot) واختيار الأداة المناسبة لكل حاجة",
            "هندسة الأوامر التطبيقية للمديرين: مخرجات دقيقة وموثوقة ومعيارية لصناعة القرار",
            "من توليد المحتوى إلى التطبيق الحقيقي: تحليل التقارير والمستندات والبيانات المالية والإكسل بالذكاء الاصطناعي",
            "بناء مساعد ذكي مخصص (Custom GPT) مدرب على لوائح ومعايير مؤسستكم",
            "ورشة عملية: تحويل ٣ مهام يومية لكل مدير إلى مسار عمل ذكي",
            "أمن البيانات والخصوصية: استخدام الذكاء الاصطناعي دون تسريب معلومات مؤسستكم السرية",
            "تصميم بنك أوامر وإجراءات تشغيل ذكية لفريق العمل",
          ],
          toolsAndConcepts: [
            "هندسة الأوامر الإدارية",
            "ChatGPT / Claude / Gemini",
            "تحليل المستندات والإكسل",
            "مساعد مخصص Custom GPT",
            "أمن البيانات",
            "مسار عمل شخصي",
          ],
          deliverable:
            "بنك أوامر إداري + ٣ مسارات عمل ذكية من مهام المدير الفعلية.",
        },
        {
          id: "agents-multiagents",
          badge: "المسار ٢ — متقدم",
          trackName: "الوكلاء والأنظمة متعددة الوكلاء",
          coreTopic: "من مفهوم الوكيل إلى التصميم والنشر العملي",
          durationFormat: "٨ ساعات (يوم كامل أو جلستان)",
          keyOutcome: "خريطة نشر الوكلاء لوحداتكم + نموذج عملي مُنجز",
          detailedDesc:
            "الوكلاء الأذكياء هم الجيل القادم للذكاء الاصطناعي المؤسسي: كيانات لا تكفي بالإجابة بل تنجز العمل. في هذا المسار يتعلم المديرون ما هو الوكيل وكيف يعمل، وكيف ينسق فريق من الوكلاء (Multi-Agent) العمليات متعددة المراحل، وكيف يصممون وينشرون أول وكيل مؤسسي دون اعتماد كامل على الفريق التقني.",
          modules: [
            "معمارية الوكلاء الأذكياء (AI Agents): من روبوت الدردشة البسيط إلى وكيل مستقل بذاكرة وأدوات",
            "بناء أول وكيل مؤسسي عملياً دون برمجة معقدة (Vibe Coding)",
            "الأنظمة متعددة الوكلاء (Multi-Agent): تنسيق فريق الوكلاء للعمليات متعددة المراحل",
            "ربط الوكلاء ببيانات المؤسسة (Enterprise RAG) والأنظمة القائمة",
            "تحديد مستوى الصلاحيات والحدود الأمنية وحوكمة الوكلاء في المؤسسة",
            "دراسات حالة: وكلاء ناجحون ووكلاء فاشلون في مؤسسات عالمية",
            "ورشة عملية: تصميم خريطة وكلاء وحدتكم الإدارية",
            "تقييم عائد الوكلاء (ROI): أي المهام تُسند للوكيل وأيها لا",
          ],
          toolsAndConcepts: [
            "معمارية AI Agents",
            "أنظمة Multi-Agent",
            "Enterprise RAG",
            "Vibe Coding",
            "استدعاء الأدوات Tool Calling",
            "حوكمة وأمن الوكلاء",
          ],
          deliverable:
            "خريطة نشر وكلاء وحدة العمل + نموذج عملي لوكيل مُنجز في الورشة.",
        },
        {
          id: "enterprise-smartification",
          badge: "المسار ٣ — استراتيجي",
          trackName: "التحول الذكي للمؤسسة",
          coreTopic: "الوثيقة الاستراتيجية وخريطة الطريق وقيادة التغيير",
          durationFormat: "١٢ ساعة (ورشة استراتيجية على يومين)",
          keyOutcome: "وثيقة استراتيجية للتحول الذكي + خطة تنفيذية ٩٠ يوماً",
          detailedDesc:
            "المسار الاستراتيجي الختامي؛ حيث يتحول المدير من «مستخدم للذكاء الاصطناعي» إلى «مهندس تحول». استناداً إلى الأطر العالمية، يقوم فريق القيادة بتشخيص مؤسستهم، وصياغة خريطة طريق التحول الذكي، وترتيب أولويات المشاريع وفق العائد على الاستثمار، والخروج بخطة تنفيذ واقعية لل ٩٠ يوماً القادمة.",
          modules: [
            "قياس الجاهزية المؤسسية وتشخيص العمليات وفق إطار APQC العالمي",
            "صياغة الوثيقة الاستراتيجية وخريطة طريق التحول الذكي (٣ إلى ٥ سنوات)",
            "ترتيب أولويات المشاريع وفق العائد على الاستثمار (ROI) ومنع تشتت الموارد",
            "أتمتة العمليات التجارية (BPA) في الإدارات المالية والموارد البشرية والمبيعات والإدارية",
            "قيادة التغيير: بناء الثقافة، معالجة مقاومة التغيير، وإدارة الفرق الهجينة",
            "حوكمة البيانات والأمن والامتثال القانوني والاعتبارات الأخلاقية للذكاء الاصطناعي",
            "فريق داخلي أم الاستعانة الخارجية؟ نموذج التوظيف والتمكين والشراكات التقنية",
            "ورشة ختامية: إصدار «ميثاق التحول الذكي» وخطة التنفيذ ٩٠ يوماً",
          ],
          toolsAndConcepts: [
            "إطار APQC",
            "قياس AI Readiness",
            "خريطة طريق ٣–٥ سنوات",
            "أتمتة BPA",
            "حوكمة البيانات",
            "إدارة التحول",
          ],
          deliverable:
            "مسودة الوثيقة الاستراتيجية + ميثاق حوكمة AI + خطة تنفيذ ٩٠ يوماً.",
        },
/*AR_TRACKS*/
      ],
      deptBadge: "تطبيقات AI حسب الإدارة",
      deptTitle: "الذكاء الاصطناعي لكل إدارات مؤسستكم",
      deptSubtitle:
        "خلال المسارات الخاصة، يُربط كل محور بالعمل اليومي الفعلي لكل إدارة:",
      deptItems: [
        {
          id: "accounting",
          name: "المحاسبة",
          desc: "القيود الآلية، التسويات، إقفال الحسابات والتقارير المالية عبر وكلاء أذكياء",
        },
        {
          id: "finance",
          name: "المالية",
          desc: "تحليل القوائم المالية، توقع التدفقات النقدية، نمذجة الاستثمار وإدارة المخاطر",
        },
        {
          id: "management",
          name: "الإدارة والاستراتيجية",
          desc: "قرارات مبنية على البيانات، لوحات القيادة التنفيذية، محاكاة السيناريوهات وتحليل المنافسين",
        },
        {
          id: "marketing",
          name: "التسويق",
          desc: "تصميم الحملات، تحليل السوق وتحسين محركات البحث، محرك المحتوى وتخصيص رسالة العلامة",
        },
        {
          id: "hr",
          name: "الموارد البشرية",
          desc: "فرز السير الذاتية، هندسة المسارات الوظيفية، تأهيل الموظفين وتوقع ترك العمل",
        },
        {
          id: "operations",
          name: "الشؤون التنفيذية والإدارية",
          desc: "المراسلات الرسمية، محاضر الاجتماعات الآلية، إدارة المهام وأتمتة تدفقات العمل",
        },
        {
          id: "legal",
          name: "القانونية",
          desc: "تحليل العقود، متابعة الأنظمة، صياغة المستندات والدراسات المقارنة",
        },
        {
          id: "sales",
          name: "المبيعات والتجارة",
          desc: "توقع المبيعات، تقييم العملاء المحتملين، CRM ذكي ودعم العملاء بالذكاء الاصطناعي",
        },
        {
          id: "procurement",
          name: "المشتريات وسلسلة الإمداد",
          desc: "توقع الطلب، تقييم الموردين وتحسين المخزون",
        },
      ] as DepartmentData[],
      privateBadge: "الصيغة الخاصة",
      privateTitle: "لماذا دورة خاصة ومغلقة؟",
      privateDesc:
        "على عكس الورش المفتوحة، تُعقد الدورات الخاصة في ديجي نورون حصرياً لفريق القيادة لديكم؛ سرية ومخصصة ومبنية على بياناتكم وعملياتكم الحقيقية.",
      privatePoints: [
        {
          title: "سرية تامة",
          desc: "جلسات مخصصة لفريق الإدارة فقط؛ الاستراتيجيات الحساسة تبقى داخل المؤسسة.",
        },
        {
          title: "تخصيص كامل",
          desc: "محتوى ملائم لقطاعكم ومستوى النضج الرقمي وبياناتكم الفعلية.",
        },
        {
          title: "حضوري أو افتراضي",
          desc: "تنفيذ في مقر المؤسسة أو أونلاين، بجدولة تتناسب مع تقويم المديرين.",
        },
        {
          title: "متابعة بعد الدورة",
          desc: "استشارات متابعة لتحويل التعلم إلى مبادرات حية.",
        },
      ],
      coursesSectionTitle: "الدورة المميزة للقيادات",
      furtherTitle: "تابع القراءة",
      furtherLinks: [
        {
          title: "لماذا يجب على المديرين تعلم الذكاء الاصطناعي أبعد من توليد المحتوى؟",
          href: "/blog/why-managers-employees-must-learn-ai-beyond-content-creation",
          desc: "من دورات التواصل إلى الوكلاء والتحول المؤسسي الحقيقي",
        },
        {
          title: "التحول الذكي للمؤسسات بنموذج ديجي نورون",
          href: "/blog/enterprise-ai-transformation-diginoron-model",
          desc: "نموذج الركائز الست للتحول الذكي للمؤسسات",
        },
        {
          title: "التدريب المؤسسي في الذكاء الاصطناعي (جميع المستويات)",
          href: "/services/corporate",
          desc: "برامج تدريبية للمديرين والخبراء وفرق IT",
        },
      ] as FurtherLinkData[],
    },
  };

  const t = content[locale] || content.en;

  const getTrackStyle = (id: string) => {
    switch (id) {
      case "content-to-application":
        return {
          icon: Compass,
          border: "border-indigo-200 hover:border-indigo-400",
          headerBg: "from-indigo-950 via-slate-900 to-slate-900",
          badgeBg: "bg-indigo-100 text-indigo-800 border-indigo-300",
          iconBox: "bg-indigo-600 text-white shadow-indigo-600/25",
          checkColor: "text-indigo-600",
          tagBg: "bg-indigo-50 text-indigo-800 border-indigo-200",
          deliverableBg: "bg-indigo-50/70 border-indigo-200 text-indigo-950",
          rowBadge: "bg-indigo-100 text-indigo-900 border-indigo-300",
        };
      case "agents-multiagents":
        return {
          icon: Bot,
          border: "border-cyan-200 hover:border-cyan-400",
          headerBg: "from-cyan-950 via-slate-900 to-blue-950",
          badgeBg: "bg-cyan-100 text-cyan-800 border-cyan-300",
          iconBox: "bg-cyan-600 text-white shadow-cyan-600/25",
          checkColor: "text-cyan-600",
          tagBg: "bg-cyan-50 text-cyan-800 border-cyan-200",
          deliverableBg: "bg-cyan-50/70 border-cyan-200 text-cyan-950",
          rowBadge: "bg-cyan-100 text-cyan-900 border-cyan-300",
        };
      case "enterprise-smartification":
      default:
        return {
          icon: Network,
          border: "border-emerald-200 hover:border-emerald-400",
          headerBg: "from-emerald-950 via-slate-900 to-teal-950",
          badgeBg: "bg-emerald-100 text-emerald-800 border-emerald-300",
          iconBox: "bg-emerald-600 text-white shadow-emerald-600/25",
          checkColor: "text-emerald-600",
          tagBg: "bg-emerald-50 text-emerald-800 border-emerald-200",
          deliverableBg: "bg-emerald-50/70 border-emerald-200 text-emerald-950",
          rowBadge: "bg-emerald-100 text-emerald-900 border-emerald-300",
        };
    }
  };

  const getDeptStyle = (id: string) => {
    switch (id) {
      case "accounting":
        return { icon: Calculator, color: "text-amber-600", bg: "bg-amber-100" };
      case "finance":
        return { icon: Landmark, color: "text-emerald-600", bg: "bg-emerald-100" };
      case "management":
        return { icon: Briefcase, color: "text-indigo-600", bg: "bg-indigo-100" };
      case "marketing":
        return { icon: Megaphone, color: "text-rose-600", bg: "bg-rose-100" };
      case "hr":
        return { icon: Users, color: "text-cyan-600", bg: "bg-cyan-100" };
      case "operations":
        return { icon: ClipboardList, color: "text-purple-600", bg: "bg-purple-100" };
      case "legal":
        return { icon: Scale, color: "text-slate-600", bg: "bg-slate-100" };
      case "sales":
        return { icon: Handshake, color: "text-orange-600", bg: "bg-orange-100" };
      case "procurement":
      default:
        return { icon: PackageSearch, color: "text-teal-600", bg: "bg-teal-100" };
    }
  };

  return (
    <div className="space-y-20 py-12">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/80 via-slate-900 to-cyan-950/60" />
        <div className="absolute -top-24 -end-24 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -start-24 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-6 py-16 sm:py-20 text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-cyan-200">
            <Crown className="w-4 h-4" />
            {t.badge}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
            {t.title}{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
              {t.titleHighlight}
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-slate-300 text-base sm:text-lg leading-relaxed">
            {t.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href={getLocalizedPath("/contact", locale)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-white font-bold shadow-lg shadow-cyan-500/25 transition-colors"
            >
              <Crown className="w-5 h-5" />
              {t.requestCourseBtn}
            </Link>
            <a
              href={`tel:${locale === "fa" ? "02188252497" : "+61451410352"}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold transition-colors"
              dir="ltr"
            >
              <Phone className="w-5 h-5" />
              {t.inquiryPhoneBtn}
            </a>
          </div>
        </div>
      </section>

      {/* ── Callout ── */}
      <section className="rounded-2xl border border-indigo-200 bg-indigo-50/60 px-6 py-6 text-center">
        <p className="text-lg font-bold text-indigo-950">{t.calloutTitle}</p>
        <p className="text-sm text-indigo-700 mt-1">{t.calloutSubtitle}</p>
      </section>

      {/* ── 95% Failure Reality ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-sm font-medium">
            <AlertTriangle className="w-4 h-4" />
            {t.failBadge}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            {t.failTitleMain}{" "}
            <span className="text-red-600">{t.failTitleHighlight}</span>
          </h2>
          <p className="text-sm text-slate-500 max-w-3xl mx-auto" dir={isLtr ? "ltr" : "rtl"}>
            {t.failStatLabel}
          </p>
          <p className="text-slate-600 max-w-4xl mx-auto leading-relaxed text-start">
            {t.failDesc}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {t.failReasons.map((reason, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <TrendingDown className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <p className="text-sm text-slate-700 leading-relaxed">{reason}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-sm font-semibold text-slate-500">
          {t.failReasonsTitle}
        </p>
      </section>

      {/* ── Manager Responsibility ── */}
      <section className="bg-slate-900 text-white rounded-3xl mx-4 sm:mx-6 py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/15 border border-indigo-400/30 text-indigo-300 text-sm font-medium">
              <Target className="w-4 h-4" />
              {t.responsibilityBadge}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold">
              {t.responsibilityTitle}
            </h2>
            <p className="text-slate-300 max-w-4xl mx-auto leading-relaxed">
              {t.responsibilityDesc}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.responsibilityPoints.map((point, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white/5 border border-white/10 p-6 space-y-3 hover:bg-white/10 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-white">{point.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto rounded-2xl border border-cyan-500/30 bg-cyan-500/5 p-6 flex items-start gap-4">
            <Quote className="w-6 h-6 text-cyan-400 shrink-0" />
            <p className="text-lg font-semibold text-cyan-100 leading-relaxed">
              {t.responsibilityQuote}
            </p>
          </div>
        </div>
      </section>

      {/* ── Tracks Matrix ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center space-y-3">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-sm font-medium">
            <Award className="w-4 h-4" />
            {t.tracksBadge}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            {t.tracksTitle}
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto">{t.tracksSubtitle}</p>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-sm min-w-[720px]">
            <thead>
              <tr className="bg-slate-900 text-white text-start">
                <th className="py-4 px-5 text-start font-semibold">{t.colTrack}</th>
                <th className="py-4 px-5 text-start font-semibold">{t.colCoreContent}</th>
                <th className="py-4 px-5 text-start font-semibold">{t.colFormat}</th>
                <th className="py-4 px-5 text-start font-semibold">{t.colOutcome}</th>
              </tr>
            </thead>
            <tbody>
              {t.tracks.map((track) => {
                const style = getTrackStyle(track.id);
                const IconComp = style.icon;
                return (
                  <tr key={track.id} className="border-t border-slate-100 hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-5 align-top">
                      <span
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold ${style.rowBadge}`}
                      >
                        <IconComp className="w-3.5 h-3.5" />
                        {track.badge}
                      </span>
                      <p className="mt-2 font-bold text-slate-900">{track.trackName}</p>
                    </td>
                    <td className="py-4 px-5 align-top text-slate-600">{track.coreTopic}</td>
                    <td className="py-4 px-5 align-top text-slate-600">{track.durationFormat}</td>
                    <td className="py-4 px-5 align-top text-slate-600">{track.keyOutcome}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Detailed Track Cards ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        {t.tracks.map((track) => {
          const style = getTrackStyle(track.id);
          const IconComp = style.icon;
          return (
            <article
              key={track.id}
              className={`rounded-3xl border-2 bg-white shadow-lg overflow-hidden ${style.border}`}
            >
              <div className={`bg-gradient-to-br px-6 sm:px-10 py-10 text-white ${style.headerBg}`}>
                <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg shrink-0 ${style.iconBox}`}>
                    <IconComp className="w-7 h-7" />
                  </div>
                  <div className="space-y-2">
                    <span className={`inline-block px-3 py-1 rounded-full border text-xs font-bold ${style.badgeBg}`}>
                      {track.badge}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold">{track.trackName}</h3>
                    <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-slate-300">
                      <span>{track.coreTopic}</span>
                      <span className="flex items-center gap-1.5">
                        <Award className="w-4 h-4" />
                        {track.durationFormat}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-slate-200 leading-relaxed max-w-4xl">
                  {track.detailedDesc}
                </p>
              </div>
              <div className="px-6 sm:px-10 py-8 grid lg:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <p className="font-bold text-slate-900">{t.tracksLabel}</p>
                  <ul className="space-y-2.5">
                    {track.modules.map((module, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                        <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${style.checkColor}`} />
                        {module}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-5">
                  <div className="space-y-3">
                    <p className="font-bold text-slate-900">{t.toolsLabel}</p>
                    <div className="flex flex-wrap gap-2">
                      {track.toolsAndConcepts.map((tool, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1.5 rounded-lg border text-xs font-medium ${style.tagBg}`}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className={`rounded-xl border p-4 space-y-1.5 ${style.deliverableBg}`}>
                    <p className="text-sm font-bold">{t.deliverableLabel}</p>
                    <p className="text-sm leading-relaxed">{track.deliverable}</p>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* ── Departments Grid ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center space-y-3">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-sm font-medium">
            <Building2 className="w-4 h-4" />
            {t.deptBadge}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            {t.deptTitle}
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto">{t.deptSubtitle}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.deptItems.map((dept) => {
            const style = getDeptStyle(dept.id);
            const IconComp = style.icon;
            return (
              <div
                key={dept.id}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all space-y-3"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${style.bg}`}>
                  <IconComp className={`w-5 h-5 ${style.color}`} />
                </div>
                <h3 className="font-bold text-slate-900">{dept.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{dept.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Private Format ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl border border-emerald-200 bg-emerald-50/50 p-8 sm:p-12 grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-sm font-medium">
              <Lock className="w-4 h-4" />
              {t.privateBadge}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
              {t.privateTitle}
            </h2>
            <p className="text-slate-600 leading-relaxed">{t.privateDesc}</p>
            <Link
              href={getLocalizedPath("/contact", locale)}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold shadow-lg shadow-emerald-600/25 transition-colors"
            >
              <Crown className="w-5 h-5" />
              {t.requestCourseBtn}
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {t.privatePoints.map((point, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-emerald-100 p-5 space-y-2 shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                  <p className="font-bold text-slate-900 text-sm">{point.title}</p>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Executive Course ── */}
      {executiveCourses.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 text-center">
            {t.coursesSectionTitle}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {executiveCourses.map((course) => (
              <CourseCard key={course.slug} course={course} locale={locale} />
            ))}
          </div>
        </section>
      )}

      {/* ── Further Reading ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 text-center">
          {t.furtherTitle}
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {t.furtherLinks.map((link, idx) => (
            <Link
              key={idx}
              href={getLocalizedPath(link.href, locale)}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-cyan-300 transition-all space-y-2"
            >
              <p className="font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                {link.title}
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">{link.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <ContactTeaser locale={locale} />
    </div>
  );
}