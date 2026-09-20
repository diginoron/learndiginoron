import { BlogPost } from "@/data/blog";
import { Locale } from "@/lib/i18n";

export interface BlogTranslation {
  title: string;
  excerpt: string;
  categoryName: string;
  readTime: string;
}

export const BLOG_TRANSLATIONS: Record<string, Record<Locale, Partial<BlogTranslation>>> = {
  "ai-extinction-warnings-and-risks": {
    en: {
      title: "AI Extinction Warnings & Operational Risks: Global Analysis & Solutions",
      excerpt: "An exhaustive investigation into existential risks, regulatory milestones, autonomous agent governance, and mitigation strategies for enterprises.",
      categoryName: "Analysis & Governance",
      readTime: "12 min read",
    },
    fa: {},
    ar: {
      title: "تحذيرات انقراض الذكاء الاصطناعي والمخاطر التشغيلية: تحليل استراتيجي شامل",
      excerpt: "قراءة معمقة في تقارير المخاطر الوجودية، الأطر التنظيمية العالمية، وحوكمة وكلاء الذكاء الاصطناعي المستقلين للمؤسسات.",
      categoryName: "التحليلات والحوكمة",
      readTime: "١٢ دقيقة قراءة",
    },
  },
  "practical-guide-enterprise-ai-agents": {
    en: {
      title: "The Ultimate Guide to Deploying Autonomous Enterprise AI Agents",
      excerpt: "How multi-agent networks and autonomous decision copilots are revolutionizing organizational efficiency, legacy systems, and operational ROI.",
      categoryName: "Enterprise AI",
      readTime: "9 min read",
    },
    fa: {},
    ar: {
      title: "الدليل الشامل لنشر وكلاء الذكاء الاصطناعي المستقلين في المؤسسات",
      excerpt: "كيف تعيد شبكات الوكلاء المتعددين صياغة كفاءة العمليات، تحديث الأنظمة القديمة، وتعظيم العائد الاستثماري.",
      categoryName: "الذكاء الاصطناعي للشركات",
      readTime: "٩ دقائق قراءة",
    },
  },
  "apqc-ai-process-mapping": {
    en: {
      title: "Business Process Auditing via APQC: Blueprinting High-ROI AI Projects",
      excerpt: "Leveraging the global APQC taxonomy to diagnose process bottlenecks and prioritize AI automation initiatives with measurable financial payback.",
      categoryName: "Strategy & Roadmap",
      readTime: "8 min read",
    },
    fa: {},
    ar: {
      title: "تدقيق العمليات المؤسسية بمعايير APQC وتحديد مشاريع الذكاء الاصطناعي ذات العائد المرتفع",
      excerpt: "استخدام تصنيف APQC العالمي لتشخيص الاختناقات وتوجيه استثمارات أتمتة العمليات نحو أقصى عائد مالي وتشغيلي.",
      categoryName: "الاستراتيجية وخارطة الطريق",
      readTime: "٨ دقائق قراءة",
    },
  },
};

export function getLocalizedPost(post: BlogPost, locale: Locale): BlogPost {
  if (locale === "fa") {
    return post;
  }

  const translation = BLOG_TRANSLATIONS[post.slug]?.[locale];
  if (!translation) {
    return post;
  }

  return {
    ...post,
    title: translation.title || post.title,
    excerpt: translation.excerpt || post.excerpt,
    categoryName: translation.categoryName || post.categoryName,
    readTime: translation.readTime || post.readTime,
  };
}
