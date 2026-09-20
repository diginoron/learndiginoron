import { Locale } from "@/lib/i18n";

export interface AboutTranslations {
  metaTitle: string;
  metaDesc: string;
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  missionTitle: string;
  missionP1: string;
  missionP2: string;
  track1Title: string;
  track1Desc: string;
  track2Title: string;
  track2Desc: string;
}

export const ABOUT_TRANSLATIONS: Record<Locale, AboutTranslations> = {
  en: {
    metaTitle: "About Us | DigiNoron Enterprise AI Center (diginoron.com)",
    metaDesc: "Learn about DigiNoron's mission, executive team, and vision in pioneering enterprise AI automation, autonomous agents, and applied education across industries.",
    badge: "About DigiNoron (diginoron.com)",
    title: "Pioneering in",
    titleHighlight: "Enterprise AI Transformation",
    subtitle: "Preparing organizations and ambitious learners to lead in the era of artificial intelligence through enterprise automation and cutting-edge academies.",
    missionTitle: "Our Mission & Strategic Vision",
    missionP1: "DigiNoron (diginoron.com) is an enterprise AI innovation center established to engineer state-of-the-art AI agents, modernize corporate workflows, and empower the future workforce through applied technological literacy.",
    missionP2: "We believe artificial intelligence should never remain a theoretical exercise. To thrive and remain profitable, organizations must autonomously orchestrate processes, and learners of all ages must develop algorithmic thinking and hands-on AI competencies.",
    track1Title: "Track 1: Enterprise AI Transformation",
    track1Desc: "Designing autonomous multi-agent systems, automating finance/sales/HR pipelines, secure On-Premise deployment, and 100% technology transfer.",
    track2Title: "Track 2: Applied Educational Academies",
    track2Desc: "Executive AI strategy masterclasses, employee prompt engineering labs, and youth Python & robotics programs.",
  },
  fa: {
    metaTitle: "درباره ما | دیجی نورون (diginoron.com)",
    metaDesc: "آشنایی با تاریخچه، ماموریت و اهداف دیجی نورون در حوزه هوشمندسازی سازمانی و آموزش کاربردی هوش مصنوعی.",
    badge: "درباره دیجی نورون (diginoron.com)",
    title: "پیشگام در",
    titleHighlight: "هوشمندسازی سازمانی و آموزش هوش مصنوعی",
    subtitle: "ما با هدف آماده‌سازی افراد و سازمان‌ها برای زیست و رقابت در عصر هوش مصنوعی، دو محور اصلی «خدمات هوشمندسازی سازمانی» و «خدمات آموزشی» را در دستور کار قرار داده‌ایم.",
    missionTitle: "ماموریت و چشم‌انداز دیجی نورون",
    missionP1: "دیجی نورون (DigiNoron) به عنوان یکی از پیشگامان تحول دیجیتال، بستر تخصصی خود را با دامنه اختصاصی diginoron.com جهت ارائه خدمات مهندسی هوش مصنوعی، استقرار ایجنت‌های سازمانی و ارتقای سطح سواد و مهارت‌های هوش مصنوعی ایجاد نموده است.",
    missionP2: "با توجه به اهمیت فزاینده تکنولوژی‌های هوشمند، ما باور داریم که بهره‌گیری از هوش مصنوعی نباید تنها به پروژه‌های تئوریک محدود شود؛ بلکه شرکت‌ها برای بقا و سودآوری باید فرآیندهای خود را هوشمند کنند و کودکان و نوجوانان از سنین پایه باید تفکر الگوریتمی و سواد هوش مصنوعی را فراگیرند.",
    track1Title: "محور اول: هوشمندسازی سازمانی",
    track1Desc: "طراحی ایجنت‌های چندعامله، اتوماسیون هوشمند فرآیندهای مالی، فروش و اداری، پیاده‌سازی On-Premise و انتقال کامل تکنولوژی.",
    track2Title: "محور دوم: خدمات آموزشی (سازمانی و کودکان)",
    track2Desc: "برگزاری مسترکلاس‌های مدیران ارشد، پرامپت‌نویسی پرسنل و آموزش پایتون و هوش مصنوعی بازی‌محور کودکان و نوجوانان.",
  },
  ar: {
    metaTitle: "من نحن | مركز ديجي نورون للذكاء الاصطناعي (diginoron.com)",
    metaDesc: "تعرف على رؤية ورسالة مركز ديجي نورون في ريادة التحول الذكي للمؤسسات وتطوير وكلاء الذكاء الاصطناعي والتدريب المتخصص.",
    badge: "عن ديجي نورون (diginoron.com)",
    title: "رواد في",
    titleHighlight: "التحول الذكي للمؤسسات والتدريب التخصصي",
    subtitle: "نهدف إلى تمكين المؤسسات والأفراد من قيادة المستقبل والمنافسة في عصر الذكاء الاصطناعي عبر حلول الأتمتة المتقدمة والمسارات الأكاديمية.",
    missionTitle: "رسالتنا ورؤيتنا الاستراتيجية",
    missionP1: "تأسس مركز ديجي نورون (diginoron.com) ليكون منصة تقنية متقدمة تقدم خدمات هندسة الذكاء الاصطناعي، نشر الوكلاء المستقلين (AI Agents)، وتأهيل الكوادر البشرية في مختلف القطاعات.",
    missionP2: "نؤمن بأن الذكاء الاصطناعي ليس مجرد أبحاث نظرية، بل ضرورة حتمية لتعزيز الإنتاجية والربحية عبر أتمتة العمليات، إلى جانب تزويد الجيل الصاعد بمهارات التفكير الخوارزمي وسواد التكنولوجيا المتقدمة.",
    track1Title: "المسار الأول: التحول المؤسسي والأتمتة",
    track1Desc: "تصميم وكلاء مستقلين، أتمتة سلاسل الإمداد والمالية والموارد البشرية، النشر المحلي On-Premise، ونقل كامل للملكية الفكرية.",
    track2Title: "المسار الثاني: المسارات الأكاديمية والتعليمية",
    track2Desc: "برامج تنفيذية للإدارات العليا، ورش عمل صياغة الأوامر (Prompting)، ومختبرات البرمجة والذكاء الاصطناعي للأطفال واليافعين.",
  },
};
