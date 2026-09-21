import { BlogPost } from "@/data/blog";
import { Locale } from "@/lib/i18n";
import { aiExtinctionTranslation } from "./blog/aiExtinction";
import { smartOrgTranslation } from "./blog/smartOrg";
import { whyKidsTranslation } from "./blog/whyKids";
import { corporateGuideTranslation } from "./blog/corporateGuide";
import { topToolsTranslation } from "./blog/topTools";
import { pythonTeenagersTranslation } from "./blog/pythonTeenagers";
import { promptEngineeringTranslation } from "./blog/promptEngineering";
import { futureEducationTranslation } from "./blog/futureEducation";

export interface BlogTranslation {
  title: string;
  excerpt: string;
  categoryName: string;
  readTime: string;
  tags?: string[];
  content?: string;
  faq?: { question: string; answer: string }[];
}

export const BLOG_TRANSLATIONS: Record<string, Record<Locale, Partial<BlogTranslation>>> = {
  "ai-extinction-warnings-and-risks": aiExtinctionTranslation,
  "smart-organization-ai-2026": smartOrgTranslation,
  "why-kids-should-learn-ai-early": whyKidsTranslation,
  "corporate-ai-transformation-guide": corporateGuideTranslation,
  "top-10-ai-tools-for-productivity": topToolsTranslation,
  "python-programming-for-teenagers": pythonTeenagersTranslation,
  "prompt-engineering-best-practices": promptEngineeringTranslation,
  "future-of-ai-in-education-2026": futureEducationTranslation,
};

export const BLOG_DATE_TRANSLATIONS: Record<string, Record<Locale, string>> = {
  "۲۷ اسفند ۱۴۰۴": { en: "March 18, 2026", fa: "۲۷ اسفند ۱۴۰۴", ar: "١٨ مارس ٢٠٢٦" },
  "۲۶ اسفند ۱۴۰۴": { en: "March 17, 2026", fa: "۲۶ اسفند ۱۴۰۴", ar: "١٧ مارس ٢٠٢٦" },
  "۲۲ مرداد ۱۴۰۵": { en: "August 13, 2026", fa: "۲۲ مرداد ۱۴۰۵", ar: "١٣ أغسطس ٢٠٢٦" },
  "۱۹ مرداد ۱۴۰۵": { en: "August 10, 2026", fa: "۱۹ مرداد ۱۴۰۵", ar: "١٠ أغسطس ٢٠٢٦" },
  "۱۵ مرداد ۱۴۰۵": { en: "August 6, 2026", fa: "۱۵ مرداد ۱۴۰۵", ar: "٦ أغسطس ٢٠٢٦" },
  "۱۰ مرداد ۱۴۰۵": { en: "August 1, 2026", fa: "۱۰ مرداد ۱۴۰۵", ar: "١ أغسطس ٢٠٢٦" },
  "۵ مرداد ۱۴۰۵": { en: "July 27, 2026", fa: "۵ مرداد ۱۴۰۵", ar: "٢٧ يوليو ٢٠٢٦" },
  "۱ مرداد ۱۴۰۵": { en: "July 23, 2026", fa: "۱ مرداد ۱۴۰۵", ar: "٢٣ يوليو ٢٠٢٦" },
};

export const BLOG_AUTHOR_NAME_TRANSLATIONS: Record<string, Record<Locale, string>> = {
  "گروه تخصصی دیجی نورون": {
    en: "DigiNoron Specialist Team",
    fa: "گروه تخصصی دیجی نورون",
    ar: "فريق ديجي نورون المتخصص",
  },
  "دکتر مهران شیرزاد": {
    en: "Dr. Mehran Shirzad",
    fa: "دکتر مهران شیرزاد",
    ar: "د. مهران شيرزاد",
  },
  "دکتر محمد کریمی": {
    en: "Dr. Mohammad Karimi",
    fa: "دکتر محمد کریمی",
    ar: "د. محمد كريمي",
  },
  "مریم صادقی": {
    en: "Maryam Sadeghi",
    fa: "مریم صادقی",
    ar: "مريم صادقي",
  },
  "دکتر علی امیری": {
    en: "Dr. Ali Amiri",
    fa: "دکتر علی امیری",
    ar: "د. علي أميري",
  },
  "رضا حسینی": {
    en: "Reza Hosseini",
    fa: "رضا حسینی",
    ar: "رضا حسيني",
  },
};

export const BLOG_AUTHOR_ROLE_TRANSLATIONS: Record<string, Record<Locale, string>> = {
  "تیم پژوهش و توسعه دیجی نورون": {
    en: "DigiNoron AI R&D Editorial Team",
    fa: "تیم پژوهش و توسعه دیجی نورون",
    ar: "فريق البحث والتطوير في ديجي نورون",
  },
  "تحریریه دیجی نورون": {
    en: "DigiNoron Editorial Board",
    fa: "تحریریه دیجی نورون",
    ar: "هيئة تحرير ديجي نورون",
  },
  "مدیر بخش آموزش کودکان دیجی نورون": {
    en: "Director of Youth AI Education",
    fa: "مدیر بخش آموزش کودکان دیجی نورون",
    ar: "مدير قطاع تعليم الذكاء الاصطناعي للأطفال",
  },
  "مشاور ارشد تحول دیجیتال": {
    en: "Senior Digital Transformation Advisor",
    fa: "مشاور ارشد تحول دیجیتال",
    ar: "كبير مستشاري التحول الرقمي",
  },
  "تولیدکننده محتوا و پژوهشگر هوش مصنوعی": {
    en: "AI Researcher & Content Strategist",
    fa: "تولیدکننده محتوا و پژوهشگر هوش مصنوعی",
    ar: "باحث وصانع محتوى في الذكاء الاصطناعي",
  },
  "مدرس برنامه‌نویسی و هوش مصنوعی": {
    en: "Programming & AI Instructor",
    fa: "مدرس برنامه‌نویسی و هوش مصنوعی",
    ar: "محاضر البرمجة والذكاء الاصطناعي",
  },
  "پژوهشگر ارشد هوش مصنوعی": {
    en: "Senior AI Researcher",
    fa: "پژوهشگر ارشد هوش مصنوعی",
    ar: "باحث أول في الذكاء الاصطناعي",
  },
};

export function getLocalizedPost(post: BlogPost, locale: Locale): BlogPost {
  if (locale === "fa") {
    return post;
  }

  const translation = BLOG_TRANSLATIONS[post.slug]?.[locale];

  const localizedDate =
    BLOG_DATE_TRANSLATIONS[post.date]?.[locale] ||
    (locale === "ar" ? "٢٠٢٦" : "2026");

  const localizedAuthorName =
    BLOG_AUTHOR_NAME_TRANSLATIONS[post.author.name]?.[locale] ||
    (post.author.name.includes("دیجی نورون")
      ? (locale === "ar" ? "فريق ديجي نورون المتخصص" : "DigiNoron Specialist Team")
      : post.author.name);

  const localizedAuthorRole =
    BLOG_AUTHOR_ROLE_TRANSLATIONS[post.author.role]?.[locale] ||
    (locale === "ar" ? "باحث وخبير في الذكاء الاصطناعي" : "AI Researcher & Specialist");

  if (!translation) {
    return {
      ...post,
      date: localizedDate,
      author: {
        ...post.author,
        name: localizedAuthorName,
        role: localizedAuthorRole,
      },
    };
  }

  return {
    ...post,
    title: translation.title || post.title,
    excerpt: translation.excerpt || post.excerpt,
    categoryName: translation.categoryName || post.categoryName,
    readTime: translation.readTime || post.readTime,
    tags: translation.tags || post.tags,
    content: translation.content || post.content,
    faq: translation.faq || post.faq,
    date: localizedDate,
    author: {
      ...post.author,
      name: localizedAuthorName,
      role: localizedAuthorRole,
    },
  };
}
