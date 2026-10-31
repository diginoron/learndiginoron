import { Locale } from "@/lib/i18n";

export interface TradeCapabilityDetail {
  title: string;
  desc: string;
  items: string[];
}

export interface TradePillarItem {
  id: string;
  number: string;
  title: string;
  englishTitle: string;
  tagline: string;
  badge: string;
  summary: string;
  accentColor: "indigo" | "emerald" | "amber" | "cyan";
  agents: TradeCapabilityDetail;
  multiAgents: TradeCapabilityDetail;
  processOptimization: TradeCapabilityDetail;
  training: TradeCapabilityDetail;
  dashboards: TradeCapabilityDetail;
  keyDeliverables: string[];
  businessImpact: string;
}

export interface TradeTranslations {
  metaTitle: string;
  metaDesc: string;
  hero: {
    badge: string;
    titleStart: string;
    titleHighlight: string;
    titleEnd: string;
    description: string;
    ctaConsultation: string;
    ctaDirectLine: string;
    phone: string;
    stats: Array<{ value: string; label: string; desc: string }>;
  };
  settlementExplainer: {
    badge: string;
    title: string;
    subtitle: string;
    definition: string;
    traditionalVsAI: {
      traditionalTitle: string;
      traditionalDesc: string;
      aiTitle: string;
      aiDesc: string;
    };
  };
  pillarsSection: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    tabLabels: {
      all: string;
      law: string;
      marketing: string;
      logistics: string;
      settlement: string;
    };
    axesLabels: {
      agents: string;
      multiAgents: string;
      processOptimization: string;
      training: string;
      dashboards: string;
      deliverables: string;
      impact: string;
    };
  };
  pillars: TradePillarItem[];
  multiAgentOrchestration: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    steps: Array<{
      step: string;
      agentName: string;
      role: string;
      action: string;
    }>;
  };
  comparison: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    headers: {
      feature: string;
      traditional: string;
      diginoron: string;
    };
    rows: Array<{
      metric: string;
      traditional: string;
      diginoron: string;
    }>;
  };
  techSecurity: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    features: Array<{
      title: string;
      desc: string;
    }>;
  };
  faq: {
    badge: string;
    title: string;
    items: Array<{
      q: string;
      a: string;
    }>;
  };
}

export const TRADE_TRANSLATIONS: Record<Locale, TradeTranslations> = {
  fa: {
    metaTitle: "هوشمند سازی تجارت بین‌الملل با هوش مصنوعی | دیجی نورون",
    metaDesc: "راهکارهای جامع دیجی نورون در هوشمندسازی بازرگانی خارجی: حقوق تجارت و قراردادها، بازاریابی صادراتی، لجستیک و گمرک (HS Code)، و مالی و تسویه بین‌الملل (Settlement) با ایجنت‌های هوشمند، سیستم‌های چندعامله، آموزش و داشبوردهای مدیریتی.",
    hero: {
      badge: "دپارتمان تخصصی هوشمندسازی تجارت بین‌الملل دیجی نورون",
      titleStart: "جهش در بازرگانی خارجی با",
      titleHighlight: "هوشمند سازی تجارت بین‌الملل",
      titleEnd: "و اکوسیستم چندعامله",
      description: "دیجی نورون با تلفیق مدل‌های پیشرفته هوش مصنوعی، ایجنت‌های تصمیم‌گیر و پردازش اسناد تجاری، زنجیره ارزش تجارت بین‌الملل را در چهار رکن بنیادین متحول می‌کند: حقوق تجارت و تحریم‌ها، بازاریابی جهانی، لجستیک و گمرک هوشمند، و تسویه مالی بین‌الملل (ستلمنت).",
      ctaConsultation: "درخواست جلسه دمو و مشاوره تجاری",
      ctaDirectLine: "تماس مستقیم با دپارتمان بازرگانی",
      phone: "۰۲۱۸۸۲۵۲۴۹۷",
      stats: [
        { value: "۹۹.۴٪", label: "دقت تشخیص کد تعرفه (HS)", desc: "حذف جریمه‌های گمرکی و تاخیر در ترخیص" },
        { value: "۸۵٪", label: "کاهش زمان بررسی اسناد", desc: "بررسی چنددقیقه‌ای قراردادها و اعتبارات اسنادی" },
        { value: "۳.۵x", label: "افزایش سرنخ‌های صادراتی", desc: "کشف خریداران واقعی در بازارهای هدف جهانی" },
        { value: "صفر", label: "ریسک عدم تطابق تحریم‌ها", desc: "پایش بلادرنگ اشخاص و مسیرهای تجاری ممنوعه" },
      ],
    },
    settlementExplainer: {
      badge: "مفاهیم کلیدی بازرگانی هوشمند",
      title: "«ستلمنت» (Settlement) در تجارت بین‌الملل به چه معناست؟",
      subtitle: "تسویه مالی نهایی، مدیریت ریسک جفت‌ارزها و تبادل وجوه در قراردادهای فرامرزی",
      definition: "واژه «ستلمنت» (Settlement) در ادبیات مالی و تجارت بین‌الملل به معنای «تسویه نهایی حساب‌ها و مبادله قطعی وجوه یا ارز» میان خریدار، فروشنده، بانک‌های کارگزار یا پلتفرم‌های واسط پس از ایفای تعهدات قراردادی است. در بازرگانی خارجی، ستلمنت شامل انطباق اسناد با اعتبارات اسنادی (LC)، وصول حواله‌های ارزی، پوشش ریسک نوسان نرخ ارز (FX Hedging)، و پیشگیری از بلوکه شدن دارایی‌هاست که دیجی نورون با ایجنت‌های هوشمند آن را کاملاً امن و خودکار می‌سازد.",
      traditionalVsAI: {
        traditionalTitle: "تسویه سنتی (پرچالش و پرهزینه)",
        traditionalDesc: "تاخیرهای چندهفته‌ای در تایید اسناد بانکی، رد شدن مدارک به دلیل کوچک‌ترین مغایرت با UCP 600، ضررهای سنگین ناشی از نوسانات لحظه‌ای ارز، و عدم شفافیت در کارمزد واسطه‌ها.",
        aiTitle: "تسویه هوشمند دیجی نورون (امن و خودکار)",
        aiDesc: "اعتبارسنجی بلادرنگ اسناد قبل از ارسال به بانک، پیش‌بینی هوشمند نوسانات جفت‌ارزها جهت اجرای هجینگ در بهترین نقطه زمانی، و تطبیق خودکار تراکنش‌ها در سامانه‌های حسابداری ارزی.",
      },
    },
    pillarsSection: {
      badge: "چهار رکن بنیادین خدمات دیجی نورون",
      title: "خدمات تخصصی دیجی نورون در",
      titleHighlight: "چهار حوزه کلیدی تجارت بین‌الملل",
      subtitle: "در هر یک از این حوزه‌ها، ما راهکار را در ۵ محور به صورت یکپارچه اجرا می‌کنیم: طراحی ایجنت‌های مستقل، سیستم‌های چندعامله هماهنگ، بهینه‌سازی فرآیندها، آموزش تخصصی تیم‌های بازرگانی و پیاده‌سازی داشبوردهای تصمیم‌گیری.",
      tabLabels: {
        all: "نمایش همه حوزه‌ها",
        law: "۱. حقوق تجارت با هوش مصنوعی",
        marketing: "۲. بازاریابی هوشمند بین‌الملل",
        logistics: "۳. لجستیک و گمرک هوشمند",
        settlement: "۴. مالی و تسویه (ستلمنت) هوشمند",
      },
      axesLabels: {
        agents: "طراحی ایجنت‌های هوشمند اختصاصی (Autonomous Agents)",
        multiAgents: "سیستم‌های چندعامله هماهنگ (Multi-Agent Swarms)",
        processOptimization: "بهینه‌سازی و خودکارسازی فرآیندها (BPA)",
        training: "آموزش تخصصی و توانمندسازی سازمانی (Corporate Training)",
        dashboards: "طراحی داشبوردهای هوش تجاری و تصمیم‌گیری (BI Dashboards)",
        deliverables: "خروجی‌ها و تحویل‌دادنی‌های ملموس",
        impact: "تاثیر ملموس بر کسب‌وکار (Business Impact)",
      },
    },
    pillars: [
      {
        id: "law",
        number: "۰۱",
        title: "حقوق تجارت با هوش مصنوعی",
        englishTitle: "AI in International Trade Law & Compliance",
        badge: "امنیت حقوقی و تحریمی",
        accentColor: "indigo",
        tagline: "بررسی هوشمند قراردادهای بین‌المللی، انطباق با اینکوترمز ۲۰۲۰ و رصد ۲۴ ساعته تحریم‌ها",
        summary: "عقد قراردادهای بین‌المللی با ریسک‌های عظیمی از جمله عدم انطباق با مقررات حاکم، شرایط نامتقارن فورس‌ماژور، و تحریم‌های پیچیده همراه است. دیجی نورون با ایجنت‌های مسلط بر حقوق بین‌الملل و رویه‌های اتاق بازرگانی بین‌المللی (ICC)، امنیت حقوقی شرکت شما را به حداکثر می‌رساند.",
        agents: {
          title: "ایجنت‌های خودمختار حقوقی و تطبیق مقررات",
          desc: "ایجنت‌های تخصصی مجهز به دانش حقوق تطبیقی و متن‌کاوی عمیق قراردادها:",
          items: [
            "ایجنت بازبینی و اصلاح خودکار قرارداد (Contract Review & Redlining Agent): تحلیل بندهای تعهدآور، جریمه‌های تاخیر، شروط پرداخت و حوزه صلاحیت قضایی در کمتر از ۳ دقیقه.",
            "ایجنت رصد تحریم‌ها و انطباق بین‌المللی (Sanctions & KYC Screening Agent): اعتبارسنجی بلادرنگ هویت خریدار، سهامداران ذی‌نفع (UBO) و مسیرهای بانکی در برابر لیست‌های OFAC، اتحادیه اروپا و سازمان ملل.",
            "ایجنت انطباق اینکوترمز (Incoterms 2020 Compliance Agent): تطبیق دقیق شروط تحویل (FOB, CIF, CFR, DDP و ...) با هزینه‌های بیمه، انتقال ریسک و الزامات بارنامه.",
          ],
        },
        multiAgents: {
          title: "شبکه چندعامله حل اختلاف و تدوین قرارداد",
          desc: "همکاری تیمی ایجنت‌ها برای اطمینان از پوشش کامل ابعاد حقوقی و مالی معامله:",
          items: [
            "ارکستراسیون ۳ جانبه: ایجنت حقوقی محلی + ایجنت کنوانسیون بیع بین‌المللی کالا (CISG) + ایجنت تحلیل ریسک مالی خریدار برای تدوین پیش‌نویس جامع.",
            "ایجنت‌های دوگانه شبیه‌سازی داوری (Arbitration Simulation): سنجش میزان آسیب‌پذیری شرکت در فرضیات نقض تعهد طرف مقابل قبل از نهایی شدن قرارداد.",
          ],
        },
        processOptimization: {
          title: "بهینه‌سازی و خودکارسازی فرآیندهای حقوقی",
          desc: "حذف گلوگاه‌های حقوقی و کاهش ۹۰ درصدی چرخه مذاکره و امضا:",
          items: [
            "ایجاد کتابخانه هوشمند بندهای استاندارد (Clause Library) و پیشنهاد شروط حمایتی اختصاصی برای صنایع صادراتی.",
            "اتصال خودکار سیستم‌های CRM و ERP به پایپ‌لاین بازبینی حقوقی جهت صدور قراردادهای متناسب با سفارش در چند لحظه.",
            "پایش خودکار تغییرات قوانین صادرات و واردات در کشورهای مبدا و مقصد و هشدار ریسک به مدیران بازرگانی.",
          ],
        },
        training: {
          title: "آموزش تخصصی و توانمندسازی تیم حقوقی و بازرگانی",
          desc: "انتقال مهارت‌های عملی کار با هوش مصنوعی مولد در امور حقوقی:",
          items: [
            "کارگاه تخصصی پرامپت‌نویسی پیشرفته برای تحلیل اسناد حقوقی و آرای داوری بین‌المللی.",
            "آموزش روش‌های اعتبارسنجی و خطایابی خروجی مدل‌های زبانی در اسناد حساس تجاری.",
            "اصول محرمانگی داده‌ها، حاکمیت داده حقوقی و استفاده از مدل‌های اختصاصی On-Premise بدون نشت اطلاعات.",
          ],
        },
        dashboards: {
          title: "داشبورد مدیریتی پایش ریسک حقوقی و قراردادی",
          desc: "رصد شفاف وضعیت تمامی تعهدات و پرونده‌های بازرگانی:",
          items: [
            "نمای پرنده‌نگر (Birds-Eye View) از وضعیت فعال، منقضی یا نیازمند تمدید تمامی قراردادهای صادرات و واردات.",
            "نقشه حرارتی ریسک تحریمی شرکای تجاری و امتیاز سلامت حقوقی برای هر قرارداد قبل از واریز پیش‌پرداخت.",
            "تقویم هوشمند موعدهای حقوقی: سررسید تحویل کالا، مهلت اعلام خسارت، سررسید تمدید ضمانت‌نامه‌ها.",
          ],
        },
        keyDeliverables: [
          "موتور هوشمند اعتبارسنجی قراردادها متصل به سامانه مدیریت قراردادها (CLM)",
          "پایگاه دانش محرمانه حقوقی On-Premise مجهز به موتور RAG اختصاصی",
          "سند اطلس ریسک‌های حقوقی و تحریمی شرکت به همراه دستورالعمل‌های اقدام سریع",
          "گواهینامه دوره‌های آموزشی ویژه کارشناسان حقوقی و مدیران ارشد بازرگانی",
        ],
        businessImpact: "کاهش ۹۰٪ زمان بررسی قراردادها، به صفر رساندن خطر تحریم‌های ناخواسته، و تضمین انطباق کامل با Incoterms 2020.",
      },
      {
        id: "marketing",
        number: "۰۲",
        title: "بازاریابی هوشمند بین‌الملل",
        englishTitle: "Smart B2B Marketing & Global Market Intelligence",
        badge: "توسعه صادرات و کشف خریدار",
        accentColor: "emerald",
        tagline: "کشف هوشمند خریداران جهانی، رصد رقبا، تحلیل کلان‌داده‌های گمرکی و بازاریابی B2B خودکار",
        summary: "دستیابی به بازارهای خارجی دیگر نیازمند تکیه بر واسطه‌ها یا حضور پرهزینه در نمایشگاه‌های سنتی نیست. با هوش مصنوعی دیجی نورون، شرکت‌ها می‌توانند از میان میلیون‌ها داده تجاری، خریداران واقعی محصولات خود را پیدا کرده و با ایجنت‌های چندزبانه، مذاکرات تجاری را شخصی‌سازی کنند.",
        agents: {
          title: "ایجنت‌های کاوشگر و ارزیابی سرنخ صادراتی",
          desc: "ایجنت‌هایی که به طور مستمر بازارهای بین‌المللی را اسکن می‌کنند:",
          items: [
            "ایجنت شکارچی خریداران B2B (Global Lead Hunter Agent): پایش مستمر داده‌های ترخیص گمرکی کشورهای هدف، پایگاه‌های مناقصات و دایرکتوری‌های صنعتی جهت استخراج خریداران بالقوه.",
            "ایجنت سنجش اعتبار و پتانسیل خریدار (Buyer Profiling & Intent Scoring Agent): تحلیل حجم واردات، توان مالی، تامین‌کنندگان فعلی و ارزیابی آمادگی خریدار برای مذاکره.",
            "ایجنت رصد قیمت و رقبا (Competitor Intelligence Agent): رصد لحظه‌ای نرخ‌های فروش کالاهای رقیب در بنادر هدف، تغییرات تعرفه‌ای و نوسانات تقاضا.",
          ],
        },
        multiAgents: {
          title: "سیستم چندعامله مذاکره صادراتی و تولید محتوای چندزبانه",
          desc: "ایجنت‌های همکار که پیام‌های بازرگانی را متناسب با فرهنگ بازار هدف تنظیم می‌کنند:",
          items: [
            "همکاری زنجیره‌ای: ایجنت تحلیلگر رفتار تجاری منطقه (مانند خلیج فارس، اوراسیا، شرق آسیا) + ایجنت نگارش پیشنهاد تجاری (Commercial Proposal) با لحن بومی + ایجنت پیگیری منظم ایمیل‌ها و پاسخ به استعلام‌ها.",
            "ایجنت پاسخگوی فنی چندزبانه (Multilingual Technical Copilot): پاسخ ۲۴ ساعته به سوالات کاتالوگی خریداران به زبان‌های عربی، انگلیسی، روسی، چینی و ترکی.",
          ],
        },
        processOptimization: {
          title: "بهینه‌سازی قیف فروش و ارتباطات تجاری B2B",
          desc: "سرعت‌بخشی به فرآیند تبدیل مشتری سرنخ به خریدار قطعی:",
          items: [
            "تولید خودکار کاتالوگ‌های اختصاصی داینامیک متناسب با نیاز هر واردکننده و کدهای HS مورد نظرش.",
            "حذف وقفه‌های طولانی در پاسخگویی به درخواست‌های پیش‌فاکتور (RFQ) با تولید اتوماتیک Draft پیش‌فاکتور بر اساس قیمت روز و موجودی انبار.",
            "دسته‌بندی و امتیازبندی هوشمند سرنخ‌های ورودی به منظور هدایت زمان مدیران فروش تنها به پرسودترین مشتریان.",
          ],
        },
        training: {
          title: "آموزش هوش مصنوعی در بازاریابی و فروش خارجی",
          desc: "ارتقای سطح مهارت تیم‌های بازرگانی و بین‌الملل:",
          items: [
            "آموزش استفاده از ابزارهای هوش مصنوعی مولد در نگارش پیام‌های موثر در لینکدین و مکاتبات رسمی تجاری B2B.",
            "تحلیل داده‌های آماری تجارت بین‌الملل با مدل‌های پیش‌بینی تقاضا و شناسایی روندهای فصلی کالاها.",
            "تکنیک‌های مذاکره و اقناع با پشتیبانی ایجنت‌های هوش مصنوعی تصمیم‌یار.",
          ],
        },
        dashboards: {
          title: "داشبورد هوش بازار و توسعه صادرات (Market Radar)",
          desc: "تصمیم‌گیری استراتژیک بر اساس داده‌های زنده بازارهای جهانی:",
          items: [
            "نقشه تعاملی جذابیت بازارهای هدف (Market Attractiveness Index) بر پایه تعرفه‌ها، هزینه‌های حمل و حجم واردات.",
            "داشبورد پایش قیمت جهانی کالاها (Commodities) و مقایسه حاشیه سود صادرات به کشورهای مختلف.",
            "پایش قیف فروش صادراتی: تعداد خریداران کشف‌شده، مذاکرات جاری، ارزش پیش‌فاکتورها و قراردادهای محقق‌شده.",
          ],
        },
        keyDeliverables: [
          "موتور اختصاصی اسکرپ و غنی‌سازی دیتای خریداران بین‌المللی با تطبیق استاندارد صنعتی",
          "سیستم خودکار تولید پیش‌فاکتور و کاتالوگ داینامیک چندزبانه متصل به ERP",
          "داشبورد لایو تحلیل بازار هدف و ترندهای وارداتی رقبا",
          "پکیج دوره‌های آموزشی توانمندسازی تیم‌های فروش خارجی و بازاریابی دیجیتال بین‌الملل",
        ],
        businessImpact: "افزایش ۳.۵ برابری سرنخ‌های معتبر صادراتی، کوتاه شدن چرخه فروش خارجی از ماه به هفته، و دستیابی مستقیم به واردکنندگان اصلی بدون دلالان.",
      },
      {
        id: "logistics",
        number: "۰۳",
        title: "لجستیک و گمرک هوشمند",
        englishTitle: "Smart Logistics, Customs & Supply Chain AI",
        badge: "کاهش هزینه‌های حمل و ترخیص",
        accentColor: "cyan",
        tagline: "طبقه‌بندی خودکار کدهای تعرفه (HS Code)، ترخیص فوق‌سریع اسنادی و رهگیری چندوجهی",
        summary: "اشتباه در درج کد تعرفه گمرکی (HS Code) می‌تواند ماه‌ها بار را در گمرک معطل کند و جریمه‌های سنگین به همراه داشته باشد. همچنین مدیریت زنجیره تامین در اقیانوس‌ها، مرزهای زمینی و ایستگاه‌های ریلی نیازمند دید لحظه‌ای است. دیجی نورون با مدل‌های بینایی ماشین و پردازش زبان تخصصی گمرک، ترخیص و حمل را هوشمند می‌کند.",
        agents: {
          title: "ایجنت‌های تخصصی تعرفه و اسناد گمرکی",
          desc: "مدل‌های تخصصی آموزش‌دیده بر روی نمانکلاتور WCO و مقررات گمرکی:",
          items: [
            "ایجنت هوشمند طبقه‌بندی کد تعرفه (Automated HS Code Classifier Agent): استخراج ویژگی‌های فنی کالا از کاتالوگ و اینوویس و پیشنهاد دقیق کد ۸ رقمی یا ۱۰ رقمی تعرفه همراه با رفرنس قانونی و درصد عوارض با دقت بالای ۹۹٪.",
            "ایجنت پردازش و اعتبارسنجی اسناد ترخیص (Customs Document Parsing Agent): اسکن هوشمند (OCR چندزبانه + LLM) بارنامه (B/L)، پکینگ‌لیست، گواهی مبدا و گواهی‌های بازرسی، و انطباق سنجی اطلاعات میان تمام اسناد جهت جلوگیری از هرگونه مغایرت.",
            "ایجنت پیش‌بینی تاخیرات بندری و لجستیکی (ETA & Port Congestion Predictor): تخمین زمان دقیق تخلیه و بارگیری بر مبنای ترافیک بنادر، آب‌وهوا و سوابق عملیاتی شرکت‌های کشتیرانی.",
          ],
        },
        multiAgents: {
          title: "سیستم چندعامله هماهنگی زنجیره تامین و استعلام نرخ حمل",
          desc: "شبکه هماهنگ‌کننده میان صاحب کالا، فورواردر، ترخیص‌کار و شرکت‌های بیمه:",
          items: [
            "ارکستراسیون استعلام خودکار استعلام نرخ کرایه (Freight Rate Quoting Swarm): ارسال استعلام به چندین خط کشتیرانی و شرکت حمل جاده‌ای، مقایسه زمان ترانزیت در برابر هزینه، و انتخاب بهینه‌ترین گزینه.",
            "سیستم هشدار پیشگیرانه دموراژ (Demurrage Prevention Swarm): پایش روزشمار مهلت نگهداری کانتینرها در بندر و اولویت‌بندی ترخیص اسنادی قبل از اعمال جریمه‌های سنگین انبارداری.",
          ],
        },
        processOptimization: {
          title: "بهینه‌سازی و اتوماسیون فرآیندهای لجستیک و انبارداری",
          desc: "حذف دوباره‌کاری‌ها و خودکارسازی ثبت اظهارنامه‌ها:",
          items: [
            "تولید خودکار پیش‌نویس اظهارنامه گمرکی منطبق با فرمت سامانه‌های گمرکی (مانند سامانه جامع تجارت و پنجره واحد EPL).",
            "بهینه‌سازی چیدمان بار در کانتینر (Container Load Optimization) با الگوریتم‌های هوش مصنوعی جهت استفاده حداکثری از فضا و تناژ مجاز.",
            "حذف خطاهای تایپی در ورود داده‌های پکینگ‌لیست و تبدیل خودکار اسناد اکسل/PDF غیرساختاریافته به دیتای استاندارد پایگاه‌داده.",
          ],
        },
        training: {
          title: "آموزش‌های تخصصی برای کارشناسان لجستیک و ترخیص‌کاران",
          desc: "توانمندسازی سرمایه انسانی در مواجهه با سیستم‌های مدرن ترخیص:",
          items: [
            "کارگاه استفاده از هوش مصنوعی برای کدگذاری اقلام پیچیده شیمیایی، پتروشیمی، ماشین‌آلات و تجهیزات الکترونیکی.",
            "آموزش پایش و استفاده از ابزارهای بینایی ماشین در کنترل کیفی کالا در انبارها و مبادی ورودی.",
            "روش‌های اتوماسیون جریان کاری اسناد در شرکت‌های حمل‌ونقل بین‌المللی و شرکت‌های بازرگانی.",
          ],
        },
        dashboards: {
          title: "برج مراقبت لجستیک و ترخیص (Logistics Control Tower)",
          desc: "مشاهده بلادرنگ وضعیت کلیه محموله‌های در حال حرکت:",
          items: [
            "رهگیری زنده کانتینرها روی نقشه ماهواره‌ای همراه با محاسبه زمان تخمینی رسیدن کالا (ETA) و ریسک‌های مسیر.",
            "داشبورد پایش وضعیت ترخیص در گمرکات: تفکیک مراحل کوتاژ، آزمایشگاه، درب خروج، و پیش‌بینی زمان خروج قطعی.",
            "تحلیل روند هزینه‌های حمل به تفکیک مسیرها، وزن بار، خطوط کشتیرانی و سنجش کارایی فورواردرها.",
          ],
        },
        keyDeliverables: [
          "موتور هوش مصنوعی تعیین کد تعرفه (HS Code Engine) با پشتیبانی از کاتالوگ محصولات پیچیده صنعتی",
          "سامانه OCR پیشرفته و تطبیق‌دهنده خودکار اسناد حمل، بازرسی و ترخیص",
          "داشبورد جامع کنترل تاور لجستیک و مدیریت هزینه‌های دموراژ",
          "مجموعه وبینارها و کارگاه‌های آموزشی تخصصی برای دپارتمان‌های لجستیک و ترخیص",
        ],
        businessImpact: "کاهش ۷۰٪ زمان ترخیص اسنادی، به صفر رساندن جریمه‌های دموراژ ناشی از تاخیر مدارک، و دقت ۹۹.۴ درصدی در طبقه‌بندی کدهای تعرفه.",
      },
      {
        id: "settlement",
        number: "۰۴",
        title: "مالی و تسویه بین‌الملل (ستلمنت) با هوش مصنوعی",
        englishTitle: "Trade Finance, FX Hedging & Smart Settlement AI",
        badge: "مدیریت ارزی و تسویه امن",
        accentColor: "amber",
        tagline: "هوشمندسازی اعتبارات اسنادی (LC)، پیش‌بینی نوسانات ارزی، تسویه امن و حذف مغایرت‌های بانکی",
        summary: "بزرگ‌ترین گلوگاه بازرگانان در تجارت خارجی، فرآیند تسویه مالی (ستلمنت)، پوشش نوسانات جفت‌ارزها و قوانین سخت‌گیرانه بانکی است. دیجی نورون با طراحی ایجنت‌های تخصصی مالی و اعتبارات اسنادی (مطابق مقررات UCP 600 اتاق بازرگانی)، مسیر تسویه حساب‌ها را سریع، شفاف و کم‌ریسک می‌کند.",
        agents: {
          title: "ایجنت‌های تخصصی امور ارزی و تسویه مالی",
          desc: "ایجنت‌هایی با درک عمیق از استانداردهای سوئیفت، بانکداری بین‌الملل و بازارهای ارزی:",
          items: [
            "ایجنت بررسی انطباق اعتبارات اسنادی (LC Discrepancy Checker Agent): اعتبارسنجی کلمه به کلمه پیش‌نویس گشایش اعتبار اسنادی با فاکتور پروفرما و بررسی اسناد ارائه شده به بانک جهت کشف هرگونه مغایرت با مقررات UCP 600 قبل از تحویل به باجه بانکی.",
            "ایجنت پیش‌بینی و پوشش ریسک نوسانات ارزی (FX Risk & Hedging Copilot): رصد روندهای اقتصاد کلان و جفت‌ارزها (USD/EUR, AED, CNY, RUB و ...) و ارائه سناریوهای پوشش ریسک جهت جلوگیری از آب رفتن سود صادراتی.",
            "ایجنت تطبیق و تسویه حساب‌ها (Automated Reconciliation Agent): انطباق خودکار صورت‌حساب‌های ارزی، رسیدهای حواله صرافی‌ها، فاکتورهای فروش و اسناد حمل جهت بستن حساب مشتری در لحظه.",
          ],
        },
        multiAgents: {
          title: "سیستم چندعامله تسویه امن و مدیریت نقدینگی چندارزی",
          desc: "همکاری ایجنت‌های مالی برای انتخاب امن‌ترین و ارزان‌ترین روش تسویه:",
          items: [
            "شبکه بهینه‌سازی مسیرهای ارزی: ایجنت پایش هزینه‌های کارمزد بانک‌ها و صرافی‌های مجاز + ایجنت رصد زمان تسویه + ایجنت ارزیابی ریسک کشور مقصد برای پیشنهاد بهترین شیوه پرداخت (حواله، ضمانت‌نامه، LC، ارز دیجیتال سازمانی).",
            "سیستم دوگانه تایید مالی و حقوقی: ایجنت مالی اسناد را با مقادیر پرداختی مقایسه کرده و ایجنت حقوقی تاییدیه تحویل مدارک مالکیتی کالا را به طور همزمان صادر می‌کند.",
          ],
        },
        processOptimization: {
          title: "بهینه‌سازی و اتوماسیون عملیات مالی بازرگانی",
          desc: "حذف اتلاف وقت و ضررهای مالی ناشی از اشتباهات انسانی در امور ارزی:",
          items: [
            "صفر کردن نرخ رد شدن اسناد اعتبارات اسنادی در بانک‌های کارگزار به دلیل مغایرت‌های تایپی یا عدم هماهنگی تاریخ‌ها.",
            "خودکارسازی محاسبات کارمزدها، سود بازرگانی، تفاوت نرخ ارز نیمایی/آزاد و تعیین بهای تمام‌شده دقیق کالای وارداتی.",
            "تسریع در آزادسازی سپرده‌های ارزی و وثایق بانکی از طریق گزارش‌دهی خودکار وضعیت ایفای تعهدات ارزی به مراجع ذی‌ربط.",
          ],
        },
        training: {
          title: "آموزش هوش مصنوعی برای مدیران مالی و خزانه‌داری ارزی",
          desc: "ارتقای سطح دانش تحلیلگران مالی سازمان:",
          items: [
            "کارگاه جامع هوش مصنوعی در پایش اعتبارات اسنادی و بررسی قوانین UCP 600 و ISBP 745.",
            "آموزش مدل‌های آماری و هوش مصنوعی در پیش‌بینی نوسانات نرخ ارز و طراحی استراتژی‌های بهینه هجینگ ارزی.",
            "مدیریت ریسک در مبادلات چندارزی و نحوه کار با سامانه‌های نوین تطبیق اتوماتیک حساب‌ها.",
          ],
        },
        dashboards: {
          title: "داشبورد نقدینگی ارزی و مانیتورینگ تسویه (Settlement Control)",
          desc: "مدیریت متمرکز وجوه نقدی و تعهدات ارزی سازمان:",
          items: [
            "نمایش لحظه‌ای وضعیت تسویه قراردادها: پیش‌پرداخت‌های ارسالی، اسناد در نوبت تایید بانک، و مطالبات معوق صادراتی.",
            "داشبورد موقعیت ارزی باز (FX Net Open Position) و شبیه‌سازی سود/زیان شرکت در سناریوهای مختلف نوسان ارز.",
            "پایش تعهدات ارزی ناشی از صادرات و پیگیری مهلت بازگشت ارز حاصل از صادرات به چرخه اقتصادی.",
          ],
        },
        keyDeliverables: [
          "موتور هوشمند کنترل مغایرت اسناد اعتبارات اسنادی (UCP 600 Compliance Checker)",
          "مدل پیش‌بینی و دستیار هجینگ نوسانات جفت‌ارزهای پرکاربرد تجاری",
          "سامانه تطبیق اتوماتیک پرداخت‌های ارزی متصل به نرم‌افزارهای حسابداری و انبار",
          "سند استراتژی تسویه امن ارزی و دوره آموزشی کاربردی برای تیم‌های مالی",
        ],
        businessImpact: "صفر شدن ریسک مغایرت در اعتبارات اسنادی (LC Discrepancy)، کاهش ۸۰٪ زمان تطبیق مالی حساب‌ها، و محافظت کامل از حاشیه سود در برابر نوسانات ارزی.",
      },
    ],
    multiAgentOrchestration: {
      badge: "معماری یکپارچه دیجی نورون",
      title: "اکوسیستم چندعامله چگونه",
      titleHighlight: "یک معامله تجاری را به طور خودکار به سرانجام می‌رساند؟",
      description: "قدرت واقعی هوش مصنوعی دیجی نورون زمانی نمایان می‌شود که این ۴ رکن از طریق یک شبکه چندعامله (Multi-Agent Swarm) با یکدیگر هماهنگ عمل کنند. بدون نیاز به پیگیری‌های طولانی دستی، ایجنت‌ها فرآیند تجارت را از جذب مشتری تا تسویه مالی جلو می‌برند:",
      steps: [
        {
          step: "گام ۱",
          agentName: "ایجنت بازاریابی بین‌الملل",
          role: "Market Intelligence & Lead Agent",
          action: "یک خریدار معتبر برای محموله پتروشیمی در کشور هدف کشف کرده، توان مالی آن را تایید نموده و استعلام قیمت (RFQ) را دریافت می‌کند.",
        },
        {
          step: "گام ۲",
          agentName: "ایجنت حقوقی و تحریم‌ها",
          role: "Trade Law & Sanctions Agent",
          action: "هویت شرکت خریدار و مدیران آن را در برابر لیست‌های تحریمی بررسی کرده، پیش‌نویس قرارداد فروش را بر پایه اینکوترمز CIF تدوین و تایید می‌کند.",
        },
        {
          step: "گام ۳",
          agentName: "ایجنت لجستیک و گمرک",
          role: "Logistics & Customs Agent",
          action: "کد تعرفه (HS Code) را تطبیق داده، سریع‌ترین و ارزان‌ترین خط کشتیرانی را رزرو کرده و پیش‌نویس اسناد ترخیص و بارنامه را صادر می‌کند.",
        },
        {
          step: "گام ۴",
          agentName: "ایجنت مالی و تسویه (ستلمنت)",
          role: "Trade Finance & Settlement Agent",
          action: "متن گشایش اعتبار اسنادی (LC) را بدون مغایرت تایید کرده، ریسک جفت‌ارز را هج نموده و تسویه قطعی حساب پس از تحویل بار را ثبت می‌نماید.",
        },
      ],
    },
    comparison: {
      badge: "مقایسه عملکرد",
      title: "تجارت سنتی در برابر",
      titleHighlight: "تجارت هوشمند با دیجی نورون",
      subtitle: "تفاوت چشمگیر سرعت، دقت و حاشیه سود با به‌کارگیری هوش مصنوعی در عملیات بازرگانی",
      headers: {
        feature: "شاخص عملکردی",
        traditional: "رویکرد سنتی بازرگانی",
        diginoron: "رویکرد هوشمند با ایجنت‌های دیجی نورون",
      },
      rows: [
        {
          metric: "زمان بازبینی قرارداد و تحلیل شروط",
          traditional: "۷ الی ۱۴ روز کاری توسط تیم‌های مختلف با خطای انسانی",
          diginoron: "کمتر از ۵ دقیقه با دقت ۹۹٪ و استخراج خودکار بندهای پرریسک",
        },
        {
          metric: "پایش ریسک تحریم‌ها و سهامداران",
          traditional: "بررسی موردی و ناقص با ریسک بالای انسداد حساب و توقیف بار",
          diginoron: "استعلام بلادرنگ چندپایگاهی و رصد خودکار زنجیره مالکیت ذی‌نفع",
        },
        {
          metric: "یافتن خریداران واقعی خارجی",
          traditional: "اتکا به بازاریابی سنتی، نمایشگاه‌های پرهزینه و ویزیتورها",
          diginoron: "کاوش هوشمند و مستمر دیتابیس‌های گمرکی و تماس هدفمند چندزبانه",
        },
        {
          metric: "کدگذاری تعرفه گمرکی (HS Code)",
          traditional: "خطای ۱۵ الی ۲۵ درصدی، مغایرت در ترخیص و تاخیرهای هفتگی",
          diginoron: "دقت ۹۹.۴ درصدی با الگوریتم‌های اختصاصی نمانکلاتور WCO",
        },
        {
          metric: "بررسی اسناد اعتبارات اسنادی (LC)",
          traditional: "رد شدن مکرر اسناد در بانک‌ها و پرداخت کارمزدهای اصلاح (Discrepancy)",
          diginoron: "اعتبارسنجی خودکار انطباق با UCP 600 قبل از ارائه به بانک و خطای نزدیک به صفر",
        },
        {
          metric: "مدیریت ریسک نوسان نرخ ارز",
          traditional: "تصمیم‌گیری شهودی و تحمیل ضررهای سنگین در تسویه‌های آتی",
          diginoron: "پیش‌بینی الگوریتمی نوسانات و اجرای استراتژی‌های بهینه هجینگ ارزی",
        },
      ],
    },
    techSecurity: {
      badge: "حاکمیت داده و امنیت سازمانی",
      title: "امنیت اسرار تجاری و استقرار",
      titleHighlight: "کاملاً امن و On-Premise",
      description: "داده‌های مشتریان، قیمت‌های تامین، شروط قراردادها و استراتژی‌های ارزی، حیاتی‌ترین دارایی‌های یک شرکت بازرگانی هستند. دیجی نورون با ارائه زیرساخت‌های کاملاً بومی و ایزوله، تضمین می‌کند که هیچ دیتایی از حریم سازمان شما خارج نخواهد شد.",
      features: [
        {
          title: "استقرار On-Premise و Air-Gapped",
          desc: "امکان اجرای کامل مدل‌های زبانی بزرگ (LLM) بر روی سرورهای داخلی شرکت شما با قطع کامل دسترسی به اینترنت بیرونی جهت عدم نشت اسرار تجاری.",
        },
        {
          title: "یکپارچگی با ERP و نرم‌افزارهای سازمانی",
          desc: "اتصال امن به نرم‌افزارهای بازرگانی و مالی از جمله SAP، همکاران سیستم، رایورز، راهکاران و پورتال‌های گمرکی از طریق APIهای رمزنگاری‌شده.",
        },
        {
          title: "انتقال ۱۰۰٪ سورس‌کد و مالکیت معنوی",
          desc: "پس از استقرار و آموزش تیم IT سازمان، کلیه سورس‌کدها، پرامپت‌ها و مدل‌های شخصی‌سازی شده به سازمان شما واگذار شده و هیچ وابستگی دائمی به وجود نخواهد آمد.",
        },
        {
          title: "انطباق با استانداردهای جهانی ICC و WCO",
          desc: "تمامی ایجنت‌ها و منطق‌های تصمیم‌گیری بر اساس قواعد اتاق بازرگانی بین‌المللی (Incoterms 2020، UCP 600) و سازمان جهانی گمرک آموزش داده شده‌اند.",
        },
      ],
    },
    faq: {
      badge: "پرسش‌های متداول",
      title: "پاسخ به سوالات کلیدی شما درباره هوشمندسازی بازرگانی خارجی",
      items: [
        {
          q: "هوشمندسازی تجارت بین‌الملل دیجی نورون مناسب چه شرکت‌هایی است؟",
          a: "این خدمات برای شرکت‌های صادراتی، واردکنندگان کالا و مواد اولیه، هلدینگ‌های پتروشیمی و معدنی، شرکت‌های مدیریت صادرات (EMC)، کارگزاران گمرکی و شرکت‌های لجستیک بین‌المللی که به دنبال کاهش هزینه‌ها و افزایش سرعت و امنیت معاملات فرامرزی هستند، طراحی شده است.",
        },
        {
          q: "آیا برای شروع به تغییر کامل نرم‌افزارهای حسابداری و بازرگانی فعلی خود نیاز داریم؟",
          a: "خیر. ایجنت‌ها و سیستم‌های دیجی نورون به عنوان لایه هوشمند روی نرم‌افزارهای موجود سازمان شما (مانند همکاران سیستم، سپیدار، رایورز یا اکسل‌های مدیریت بازرگانی) متصل می‌شوند و نیازی به تغییر سامانه‌های اصلی ندارید.",
        },
        {
          q: "آیا اطلاعات محرمانه مشتریان و قراردادهای شرکت ما در اینترنت منتشر نمی‌شود؟",
          a: "به هیچ عنوان. ما به دو شیوه عمل می‌کنیم: یا مدل‌ها را به صورت کاملاً On-Premise روی سرورهای داخلی شرکت شما مستقر می‌کنیم، یا از نسخه‌های سازمانی با رمزنگاری سرتاسری و تعهدنامه حفظ محرمانگی (NDA) معتبر بین‌المللی استفاده می‌کنیم.",
        },
        {
          q: "ایجنت‌های هوش مصنوعی چطور به تسویه مالی (ستلمنت) کمک می‌کنند؟",
          a: "با بررسی موشکافانه اسناد اعتبارات اسنادی (LC) جهت جلوگیری از رد شدن در بانک‌ها، پیش‌بینی نوسانات ارز برای خرید/فروش به موقع حواله‌ها، و تطبیق لحظه‌ای رسیدهای پرداخت با فاکتورها جهت آزادسازی سریع کالا.",
        },
        {
          q: "دوره پیاده‌سازی و آموزش تیم‌های سازمانی چقدر زمان می‌برد؟",
          a: "بسته به ماژول‌های انتخابی، فاز استقرار اولیه و پایلوت معمولاً بین ۲ تا ۴ هفته و استقرار جامع همراه با آموزش تیم‌های بازرگانی و انتقال دانش، بین ۱ الی ۳ ماه زمان می‌برد.",
        },
        {
          q: "چگونه می‌توانیم برای ارزیابی نیاز سازمان و دریافت پیش‌نویس راهکار اقدام کنیم؟",
          a: "کافی است فرم مشاوره انتهای همین صفحه را تکمیل نمایید یا با شماره مستقیم دپارتمان بازرگانی دیجی نورون (۰۲۱۸۸۲۵۲۴۹۷) تماس حاصل فرمایید تا کارشناسان ارشد ما جلسه دمو و عارضه‌یابی اولیه را هماهنگ کنند.",
        },
      ],
    },
  },

  en: {
    metaTitle: "International Trade AI Solutions | DigiNeuron Enterprise AI",
    metaDesc: "Comprehensive AI solutions for global trade: International Trade Law & Compliance, Smart B2B Export Marketing, Smart Logistics & Customs (HS Codes), and Trade Finance & Settlement AI with autonomous agents, multi-agent swarms, corporate training, and executive dashboards.",
    hero: {
      badge: "DigiNeuron International Trade AI Division",
      titleStart: "Transforming Cross-Border Commerce with",
      titleHighlight: "International Trade AI",
      titleEnd: "& Multi-Agent Swarms",
      description: "DigiNeuron empowers multinational traders, exporters, and industrial conglomerates with autonomous decision intelligence across four foundational axes: Trade Law & Sanctions Screening, Global B2B Marketing, Smart Logistics & Customs Clearance, and International Trade Finance & Settlement.",
      ctaConsultation: "Request Commercial Demo & Roadmap",
      ctaDirectLine: "Direct Trade Inquiries",
      phone: "+61 451 410 352",
      stats: [
        { value: "99.4%", label: "HS Code Precision", desc: "Eliminating customs penalties and border clearance delays" },
        { value: "85%", label: "Faster Document Turnaround", desc: "Instant legal contract auditing and Letter of Credit verification" },
        { value: "3.5x", label: "Qualified Export Leads", desc: "Data-driven prospecting of vetted global B2B buyers" },
        { value: "Zero", label: "Sanction Compliance Blindspots", desc: "Real-time screening of UBOs, vessels, and prohibited entities" },
      ],
    },
    settlementExplainer: {
      badge: "Core Trade Intelligence Concepts",
      title: "What Does 'Settlement' Mean in International Trade?",
      subtitle: "Final financial clearing, multi-currency risk hedging, and secure cross-border fund transfers",
      definition: "In international trade and finance, 'Settlement' refers to the definitive fulfillment of obligations through the transfer of funds, currencies, or negotiable instruments between the buyer, seller, advising banks, and financial intermediaries. It encompasses Letter of Credit (LC) compliance, foreign exchange risk hedging (FX Hedging), automated invoice reconciliation, and sovereign payment gateway routing. DigiNeuron's AI agents automate this high-stakes process to guarantee zero discrepancies and optimized liquidity.",
      traditionalVsAI: {
        traditionalTitle: "Traditional Trade Settlement (High Friction & Delay)",
        traditionalDesc: "Weeks of bank back-and-forth, expensive document discrepancy penalties under UCP 600, unprotected FX margin slippage, and opaque intermediary routing.",
        aiTitle: "DigiNeuron Smart Settlement (Autonomous & Secure)",
        aiDesc: "Pre-submission LC discrepancy audit, algorithmic currency forecasting for timely hedging, and instant multi-currency ledger reconciliation.",
      },
    },
    pillarsSection: {
      badge: "Four Strategic Pillars",
      title: "Specialized DigiNeuron Solutions across",
      titleHighlight: "The Four Axes of Global Trade",
      subtitle: "Across every pillar, we deliver a 5-dimensional framework: Autonomous AI Agents, Collaborative Multi-Agent Swarms, Business Process Automation, Specialized Corporate Training, and Executive Decision Dashboards.",
      tabLabels: {
        all: "All Trade Pillars",
        law: "1. Trade Law & Compliance",
        marketing: "2. Smart B2B Trade Marketing",
        logistics: "3. Smart Logistics & Customs",
        settlement: "4. Trade Finance & Settlement",
      },
      axesLabels: {
        agents: "Autonomous AI Agents",
        multiAgents: "Collaborative Multi-Agent Swarms",
        processOptimization: "Process Optimization & Automation (BPA)",
        training: "Corporate Capacity Building & Training",
        dashboards: "Executive BI & Decision Dashboards",
        deliverables: "Tangible Deliverables",
        impact: "Measurable Business Impact",
      },
    },
    pillars: [
      {
        id: "law",
        number: "01",
        title: "AI in International Trade Law & Compliance",
        englishTitle: "Trade Law, Contracts & Sanctions Screening",
        badge: "Legal Certainty & Compliance",
        accentColor: "indigo",
        tagline: "Autonomous contract review, Incoterms 2020 verification, and 24/7 global sanctions monitoring",
        summary: "Cross-border commercial agreements entail substantial legal liabilities, complex jurisdiction clauses, and rapidly shifting global sanction regimes. DigiNeuron deploys specialized legal LLMs and agents grounded in ICC rules (Incoterms 2020, CISG) to protect enterprise interests.",
        agents: {
          title: "Autonomous Legal & Compliance Agents",
          desc: "Domain-adapted agents engineered for contract deep parsing and regulatory vetting:",
          items: [
            "Contract Review & Redlining Agent: Rapid clause-by-clause analysis of liabilities, penalty caps, force majeure, and dispute resolution mechanisms in under 3 minutes.",
            "Sanctions & KYC Screening Agent: Continuous verification of ultimate beneficial owners (UBO), corporate hierarchies, and maritime assets against OFAC, EU, UN, and regional watchlists.",
            "Incoterms 2020 Compliance Copilot: Verifies that shipping terms (FOB, CIF, CFR, DDP) match insurance coverages, risk transfer milestones, and transport documents.",
          ],
        },
        multiAgents: {
          title: "Multi-Agent Contract Negotiation & Arbitration Swarm",
          desc: "Multi-perspective agent swarms simulating legal vulnerabilities before contract sign-off:",
          items: [
            "Tripartite legal swarm: Local Jurisdiction Agent + International Convention (CISG) Agent + Financial Counterparty Risk Agent co-evaluating agreement drafts.",
            "Arbitration Simulation Swarm: Simulates default scenarios and counterparty breaches to stress-test indemnity provisions and dispute triggers.",
          ],
        },
        processOptimization: {
          title: "Contract Workflow & Legal Process Automation",
          desc: "Compressing legal turnaround times by 90% while enforcing corporate standard operating procedures:",
          items: [
            "Dynamic clause library curation with automatic insertion of proprietary risk mitigation terms for exporters.",
            "Automated integration with enterprise CRM and ERP backbones to generate tailored trade agreements upon quote approval.",
            "Real-time monitoring of regulatory tariff changes and foreign trade decree updates in primary destination countries.",
          ],
        },
        training: {
          title: "Executive & In-House Legal AI Masterclasses",
          desc: "Upskilling corporate attorneys, trade specialists, and procurement executives:",
          items: [
            "Advanced prompt engineering for legal document extraction, case law research, and cross-border arbitration prep.",
            "Verification protocols and hallucination-prevention methodologies for critical legal text evaluation.",
            "Air-gapped and On-Premise LLM deployment practices ensuring zero proprietary legal data exposure.",
          ],
        },
        dashboards: {
          title: "Executive Legal Risk & Sanctions Control Center",
          desc: "Holistic oversight across all active, pending, and expiring international agreements:",
          items: [
            "Birds-eye view of all active international sales, distribution, and agency contracts with renewal alerts.",
            "Counterparty Sanction Risk Heatmap providing instant risk scoring before executing advances or shipments.",
            "Statutory deadline tracking: inspection certificates, warranty milestones, and performance bond expirations.",
          ],
        },
        keyDeliverables: [
          "Enterprise Contract Lifecycle Intelligence Engine integrated with existing CLM",
          "Confidential On-Premise Legal Knowledge Base powered by secure RAG",
          "Sanctions & Trade Compliance SOP Atlas with automated emergency kill-switches",
          "Certified AI competence training for legal counsel and commercial directors",
        ],
        businessImpact: "90% reduction in contract review latency, 100% elimination of accidental sanction exposure, and absolute fidelity to Incoterms 2020.",
      },
      {
        id: "marketing",
        number: "02",
        title: "Smart B2B Marketing & Global Market Intelligence",
        englishTitle: "Export Growth & Cross-Border Prospecting",
        badge: "Global Market Expansion",
        accentColor: "emerald",
        tagline: "Autonomous international buyer discovery, customs big data mining, and automated multilingual B2B outreach",
        summary: "Penetrating international markets no longer relies on third-party brokers or costly overseas trade exhibitions. DigiNeuron utilizes autonomous agent networks to uncover active global buyers, predict market demand trends, and orchestrate localized outreach.",
        agents: {
          title: "Autonomous Lead Hunting & Market Intelligence Agents",
          desc: "Agents that continuously scan global trade registries and commercial databases:",
          items: [
            "Global B2B Lead Hunter Agent: Ingests global customs bills of lading, procurement portals, and industry directories to identify vetted importers actively purchasing your commodity.",
            "Buyer Profiling & Intent Scoring Agent: Evaluates historical import volume, credit metrics, and incumbent supplier relationships to score lead conversion propensity.",
            "Competitor Intelligence & Price Tracking Agent: Monitors port-level transaction rates, competing regional origins, and shifting tariff differentials.",
          ],
        },
        multiAgents: {
          title: "Multilingual Trade Outreach & Negotiation Swarm",
          desc: "Cooperative agents adapting commercial value propositions to target market business cultures:",
          items: [
            "Collaborative pipeline: Regional Business Culture Agent (GCC, CIS, APAC, EU) + Commercial Proposal Drafting Agent + Follow-up Orchestrator driving RFQ conversions.",
            "24/7 Multilingual Technical Copilot: Answers inquiries regarding product specifications, certifications, and packaging in English, Arabic, Russian, and Chinese.",
          ],
        },
        processOptimization: {
          title: "Export Funnel Acceleration & BPA Automation",
          desc: "Eliminating sales response latency and automating quotation pipelines:",
          items: [
            "Automated generation of dynamic, personalized export catalogs tailored to the specific HS codes requested by overseas prospects.",
            "Zero-latency response to Requests for Quotation (RFQ) via auto-drafted proforma invoices linked to inventory and pricing engines.",
            "Intelligent lead triage ensuring senior commercial executives only invest time on highest-margin qualified transactions.",
          ],
        },
        training: {
          title: "AI Training for Export & Overseas Commercial Squads",
          desc: "Empowering international sales forces with cutting-edge AI capabilities:",
          items: [
            "Generative AI strategies for high-converting LinkedIn executive outreach and B2B commercial communications.",
            "Utilizing trade telemetry and predictive models to forecast seasonal demand surges across international corridors.",
            "Data-backed negotiation methodologies utilizing real-time decision-support copilots.",
          ],
        },
        dashboards: {
          title: "Global Market Expansion Radar & Export Dashboard",
          desc: "Strategic visual intelligence guiding executive market entry decisions:",
          items: [
            "Interactive Market Attractiveness Index comparing landed costs, tariffs, freight rates, and import volumes across 50+ countries.",
            "Global commodity price trend monitor mapping real-time export margin differentials.",
            "Full-funnel export pipeline telemetry: discovered leads, active proformas, and landed contract volume.",
          ],
        },
        keyDeliverables: [
          "Proprietary B2B Buyer Scraping & Enrichment Engine with verified corporate registries",
          "Automated dynamic multilingual proforma and catalog generation system",
          "Live Global Market Radar Dashboard tracking competitors and buyer import surges",
          "Comprehensive training curriculum for international commercial squads",
        ],
        businessImpact: "3.5x increase in qualified export leads, compression of sales negotiation cycles from months to weeks, and direct engagement with overseas importers without middlemen.",
      },
      {
        id: "logistics",
        number: "03",
        title: "Smart Logistics, Customs & Supply Chain AI",
        englishTitle: "Customs Clearance & Multimodal Freight Intelligence",
        badge: "Logistics Optimization",
        accentColor: "cyan",
        tagline: "Automated HS Code classification, ultra-fast customs clearance, and real-time multimodal container tracking",
        summary: "Customs classification errors create crippling demurrage charges and supply chain delays. DigiNeuron combines multimodal computer vision and specialized customs NLP to classify goods with 99.4% precision and automate cross-border shipping workflows.",
        agents: {
          title: "Automated Customs & Tariff Classification Agents",
          desc: "Specialized models trained on the WCO Harmonized System nomenclature and national customs tariffs:",
          items: [
            "Automated HS Code Classifier Agent: Evaluates chemical compositions, engineering schematics, and commercial descriptions to output validated 6 to 10-digit HS codes with statutory explanatory references.",
            "Customs Document Parsing & Cross-Validation Agent: Performs multilingual OCR and LLM schema extraction across Bills of Lading, Packing Lists, Certificates of Origin, and Inspection Reports, identifying cross-document discrepancies before declaration submission.",
            "Port Congestion & Predictive ETA Agent: Predicts vessel dwell times and maritime delays using AIS telemetry, weather forecasts, and historical terminal productivity.",
          ],
        },
        multiAgents: {
          title: "Freight Optimization & Demurrage Prevention Swarm",
          desc: "Autonomous coordination across shippers, freight forwarders, and customs brokers:",
          items: [
            "Automated Freight Quoting Swarm: Distributes RFQs to ocean carriers and road transporters, benchmarking transit times against spot rates to recommend the optimal multimodal corridor.",
            "Demurrage & Detention Alarm Swarm: Tracks free-time countdowns across port terminals and prioritizes customs inspection interventions before punitive charges kick in.",
          ],
        },
        processOptimization: {
          title: "Customs Filing & Warehouse Process Automation",
          desc: "Eliminating manual data re-entry and streamlining electronic customs declarations:",
          items: [
            "Automated draft declaration generation compatible with national Single Window and customs electronic data interchange (EDI) systems.",
            "Container Load Optimization (3D Bin Packing) using spatial AI to maximize cubic space utilization while respecting axle weight limits.",
            "Zero-error extraction of unstructured supplier packing lists directly into enterprise warehouse and logistics databases.",
          ],
        },
        training: {
          title: "Specialized Training for Logistics & Customs Brokers",
          desc: "Building internal AI proficiency for supply chain and shipping personnel:",
          items: [
            "AI-assisted classification methodologies for complex industrial goods, specialty chemicals, and dual-use components.",
            "Deploying computer vision tools for automated quality inspection and seal verification at warehouse receipt.",
            "Modern workflow orchestration techniques for international freight forwarding operations.",
          ],
        },
        dashboards: {
          title: "Logistics Control Tower & Customs Telemetry Console",
          desc: "End-to-end visibility across global in-transit freight and port operations:",
          items: [
            "Real-time satellite container tracking with dynamic ETA calculations and route disruption warnings.",
            "Customs Clearance Bottleneck Dashboard: breakdown by customs status, inspection holds, and green-channel clearance speeds.",
            "Freight cost analytics benchmarked per ton-kilometer, route corridor, carrier reliability, and port terminal performance.",
          ],
        },
        keyDeliverables: [
          "Enterprise HS Code Classification Engine supporting complex industrial product catalogs",
          "Multilingual customs document OCR and discrepancy validation platform",
          "Central Logistics Control Tower Dashboard with proactive demurrage alerting",
          "Masterclass workshops for corporate supply chain and customs teams",
        ],
        businessImpact: "70% reduction in customs document turnaround, complete eradication of document-related demurrage charges, and 99.4% tariff classification precision.",
      },
      {
        id: "settlement",
        number: "04",
        title: "Trade Finance, FX Hedging & Smart Settlement AI",
        englishTitle: "Trade Settlement, FX Hedging & LC Compliance",
        badge: "Financial Security & Liquidity",
        accentColor: "amber",
        tagline: "Letter of Credit (LC) discrepancy elimination, algorithmic FX risk hedging, and automated cross-border settlement",
        summary: "Financial clearing (Settlement), foreign exchange exposure, and banking document discrepancies represent the most precarious bottleneck in cross-border trade. DigiNeuron's trade finance agents audit LCs under UCP 600 rules and execute timely currency risk hedging.",
        agents: {
          title: "Trade Finance & Settlement Intelligence Agents",
          desc: "Autonomous agents mastering SWIFT messaging, international banking customs, and FX markets:",
          items: [
            "LC & Document Discrepancy Checker Agent: Audits letter of credit conditions against invoices, transport bills, and certificates under UCP 600 and ISBP 745 to eliminate rejection before bank presentation.",
            "FX Risk & Currency Hedging Copilot: Analyzes macroeconomic signals and foreign exchange currency pairs (USD/EUR, AED, CNY, etc.) to recommend forward/options hedging windows.",
            "Automated Ledger Reconciliation Agent: Cross-matches incoming payment advices, SWIFT MT103 confirmations, commercial invoices, and bill of lading releases instantly.",
          ],
        },
        multiAgents: {
          title: "Multi-Currency Liquidity & Multi-Rail Settlement Swarm",
          desc: "Autonomous financial agents selecting the safest, fastest, and most cost-effective settlement rail:",
          items: [
            "Payment Corridor Optimizer Swarm: Evaluates correspondent banking fees, transfer processing times, and sovereign sanctions to suggest optimal routing (SWIFT, digital escrow, local currency clearing).",
            "Dual Financial-Commercial Sign-Off Swarm: Correlates physical delivery telemetry with escrow release conditions, automating secure payment triggers upon customs clearance.",
          ],
        },
        processOptimization: {
          title: "Treasury & Cross-Border Financial Process Automation",
          desc: "Eradicating human error and capital lockups in international trade settlements:",
          items: [
            "Zero banking discrepancy rejection rates, preventing costly amendment fees and delayed supplier payouts.",
            "Automated landed cost calculation incorporating customs duties, exchange rate spreads, transport tariffs, and financing interest.",
            "Accelerated release of collateral and bank performance guarantees via automated completion reporting.",
          ],
        },
        training: {
          title: "Financial AI Masterclasses for Treasury & Trade Finance Teams",
          desc: "Modernizing financial operations with advanced algorithmic tools:",
          items: [
            "Practical training on AI-assisted LC verification under UCP 600 and digital trade rules (eUCP).",
            "Implementing algorithmic forecasting models for currency fluctuations and cash flow exposure.",
            "Automating corporate cross-border reconciliation pipelines and multi-currency accounting.",
          ],
        },
        dashboards: {
          title: "Trade Treasury & Settlement Monitoring Console",
          desc: "Unified executive visibility into global cash flows and outstanding trade receivables:",
          items: [
            "Real-time settlement status across all trade contracts: advances paid, documentary credits in review, and outstanding export balances.",
            "FX Net Open Position (NOP) heatmap and live scenario simulations measuring margin sensitivity to currency shocks.",
            "Export repatriation tracker monitoring compliance with statutory central bank repatriation deadlines.",
          ],
        },
        keyDeliverables: [
          "Automated Letter of Credit (LC) Discrepancy Prevention Engine compliant with UCP 600",
          "Currency Volatility Predictor and FX Hedging Decision Copilot",
          "Cross-border multi-currency reconciliation system integrated with enterprise ERP",
          "Corporate training and technical deployment guide for treasury executives",
        ],
        businessImpact: "Zero LC document discrepancies, 80% faster payment reconciliation, and ironclad margin defense against currency market volatility.",
      },
    ],
    multiAgentOrchestration: {
      badge: "Integrated DigiNeuron Architecture",
      title: "How the Multi-Agent Swarm",
      titleHighlight: "Executes an End-to-End Trade Transaction Autonomously",
      description: "The transformative power of DigiNeuron emerges when all four pillars synchronize via an orchestrated Multi-Agent Swarm. Rather than fragmented manual operations, intelligent agents drive the trade from prospect acquisition to final fund settlement:",
      steps: [
        {
          step: "Step 1",
          agentName: "Global Trade Marketing Agent",
          role: "Market Intelligence & Lead Prospector",
          action: "Discovers and vets a qualified buyer in target territory, audits creditworthiness, and captures commercial RFQ details.",
        },
        {
          step: "Step 2",
          agentName: "Trade Law & Sanctions Agent",
          role: "Contract & Compliance Guard",
          action: "Performs real-time sanctions and UBO checks, drafts an Incoterms CIF agreement, and embeds enforceable dispute resolution terms.",
        },
        {
          step: "Step 3",
          agentName: "Smart Logistics & Customs Agent",
          role: "Freight & HS Tariff Specialist",
          action: "Classifies the exact 10-digit HS code, books optimal multimodal container transit, and auto-generates customs declaration documentation.",
        },
        {
          step: "Step 4",
          agentName: "Trade Finance & Settlement Agent",
          role: "Treasury & Clearing Orchestrator",
          action: "Audits LC terms against shipping manifests with zero UCP 600 discrepancies, executes FX hedging, and triggers final fund settlement.",
        },
      ],
    },
    comparison: {
      badge: "Performance Benchmark",
      title: "Conventional Global Trade vs.",
      titleHighlight: "AI-Augmented Trade with DigiNeuron",
      subtitle: "Quantifiable differences in cycle velocity, regulatory precision, and bottom-line margin retention",
      headers: {
        feature: "Performance Metric",
        traditional: "Conventional Trading Practice",
        diginoron: "DigiNeuron AI-Augmented Operations",
      },
      rows: [
        {
          metric: "Contract Review & Legal Auditing",
          traditional: "7-14 business days across disjointed legal teams with human oversight gaps",
          diginoron: "Under 5 minutes with 99% precision and automated risk clause redlining",
        },
        {
          metric: "Sanctions & Beneficial Ownership (UBO) Screening",
          traditional: "Fragmented, manual database searches carrying severe regulatory liability",
          diginoron: "Instant automated screening against global registries and corporate hierarchies",
        },
        {
          metric: "International Buyer Acquisition",
          traditional: "Cold calls, expensive international trade fairs, and heavy broker commissions",
          diginoron: "Autonomous customs big data scraping, lead scoring, and targeted multilingual outreach",
        },
        {
          metric: "Customs Tariff (HS Code) Classification",
          traditional: "15-25% human error rate resulting in customs holds and demurrage fines",
          diginoron: "99.4% precision using WCO-trained multimodal neural networks",
        },
        {
          metric: "Letter of Credit (LC) Discrepancy Prevention",
          traditional: "Frequent bank document rejections incurring hefty amendment and delay fees",
          diginoron: "Pre-submission UCP 600 cross-validation with virtually zero discrepancy rejections",
        },
        {
          metric: "FX Exposure & Currency Hedging",
          traditional: "Ad-hoc decisions often eroding 3-8% of operating profit margins",
          diginoron: "Algorithmic forecasting and systematic hedging recommendations",
        },
      ],
    },
    techSecurity: {
      badge: "Sovereign Architecture & Security",
      title: "Ironclad Trade Secret Protection &",
      titleHighlight: "Air-Gapped On-Premise Deployment",
      description: "Buyer registries, negotiated supplier terms, shipping rates, and treasury margins represent the crown jewels of international trade enterprises. DigiNeuron provides air-gapped on-premise infrastructure guaranteeing zero confidential data leaves your corporate perimeter.",
      features: [
        {
          title: "Air-Gapped On-Premise Deployment",
          desc: "Run large language models and analytical pipelines on internal enterprise hardware with complete network isolation, eliminating trade secret leakage.",
        },
        {
          title: "Seamless ERP & Core Logistics Integration",
          desc: "Secure bi-directional API connectors for SAP, Microsoft Dynamics, Oracle, and national customs single windows with end-to-end encryption.",
        },
        {
          title: "100% IP & Source Code Transfer",
          desc: "Upon delivery and engineering handoff, all custom model weights, agents, and source repositories belong exclusively to your organization with zero vendor lock-in.",
        },
        {
          title: "Global ICC & WCO Standards Compliance",
          desc: "All reasoning engines are pre-aligned with International Chamber of Commerce rules (Incoterms 2020, UCP 600, CISG) and WCO customs conventions.",
        },
      ],
    },
    faq: {
      badge: "Frequently Asked Questions",
      title: "Key Answers Concerning International Trade AI Transformation",
      items: [
        {
          q: "What types of enterprises benefit most from DigiNeuron's Trade AI solutions?",
          a: "Our solutions are engineered for large-scale export-import enterprises, petrochemical and commodity conglomerates, export management companies (EMCs), customs brokers, and multinational 3PL/4PL logistics providers seeking accelerated operational velocity and reduced compliance risk.",
        },
        {
          q: "Does implementing DigiNeuron require replacing our current ERP or accounting software?",
          a: "No. Our autonomous agents operate as an intelligence layer connecting directly to your existing systems (SAP, Microsoft Dynamics, Oracle, or local trade backbones) via secure APIs or database connectors.",
        },
        {
          q: "How does DigiNeuron protect confidential commercial data and trade secrets?",
          a: "We offer 100% air-gapped On-Premise installations where LLMs run locally on your internal GPU servers with no data egress to external cloud providers, backed by rigorous NDAs.",
        },
        {
          q: "How does the AI assist in international settlement and Letter of Credit (LC) operations?",
          a: "The system performs pre-submission audits across invoices, bills of lading, and certificates under UCP 600 standards to ensure zero discrepancies, while predicting currency volatility to execute optimal FX hedging.",
        },
        {
          q: "What is the typical timeline for deployment and corporate team training?",
          a: "A targeted pilot module typically deploys within 2 to 4 weeks. A comprehensive 4-pillar enterprise transformation, including corporate team enablement and system integration, spans 1 to 3 months.",
        },
        {
          q: "How can our executive team schedule an initial diagnostic and demonstration?",
          a: "Simply submit the consultation request form at the bottom of this page or call our direct enterprise line (+61 451 410 352 / 02188252497) to arrange a dedicated technical briefing with our trade architects.",
        },
      ],
    },
  },

  ar: {
    metaTitle: "التحول الذكي للتجارة الدولية بالذكاء الاصطناعي | ديجي نورون",
    metaDesc: "حلول ديجي نورون الشاملة للتحول الذكي في التجارة الدولية: القانون التجاري والعقود، التسويق الذكي للصادرات، اللوجستيات والتخليص الجمركي (HS Code)، والتمويل والتسوية المالية الدولية (Settlement) عبر وكلاء أذكياء وتدريب مؤسسي ولوحات معلومات متقدمة.",
    hero: {
      badge: "قطاع الذكاء الاصطناعي للتجارة الدولية - ديجي نورون",
      titleStart: "طفرة نوعية في التجارة العالمية عبر",
      titleHighlight: "التحول الذكي للتجارة الدولية",
      titleEnd: "وأنظمة الوكلاء المتعددين",
      description: "تُمكّن ديجي نورون كبرى الشركات التجارية والمُصدّرين من تحقيق الريادة عبر دمج نماذج الذكاء الاصطناعي المتقدمة ووكلاء اتخاذ القرار في أربعة محاور جوهرية: القانون التجاري والعقوبات، التسويق واستكشاف الأسواق العالمية، اللوجستيات والتخليص الجمركي، والتمويل والتسوية المالية الدولية (ستلمنت).",
      ctaConsultation: "طلب جلسة استشارية وعرض توضيحي",
      ctaDirectLine: "التواصل المباشر مع قطاع التجارة",
      phone: "+61 451 410 352",
      stats: [
        { value: "٩٩.٤٪", label: "دقة تصنيف رمز النظام المنسق (HS)", desc: "القضاء التام على الغرامات الجمركية وتأخير الموانئ" },
        { value: "٨٥٪", label: "تسريع مراجعة وتدقيق المستندات", desc: "تدقيق فوري للعقود والاعتمادات المستندية (LC)" },
        { value: "٣.٥x", label: "مضاعفة المشترين والفرص التصديرية", desc: "استكشاف المشترين الحقيقيين في الأسواق العالمية" },
        { value: "صفر", label: "مخاطر انتهاك العقوبات الدولية", desc: "فحص لحظي للشركات والمسارات والكيانات المحظورة" },
      ],
    },
    settlementExplainer: {
      badge: "المفاهيم الجوهرية للتجارة الذكية",
      title: "ماذا يعني مصطلح «التسوية» (Settlement) في التجارة الدولية؟",
      subtitle: "المقاصة المالية النهائية، إدارة مخاطر تقلبات العملات، والتحويلات النقدية الآمنة عبر الحدود",
      definition: "يُقصد بمصطلح «التسوية» (Settlement) في الأدبيات المالية والتجارة الدولية الإيفاء النهائي والقطعي بالالتزامات المالية عبر تبادل الأموال أو العملات بين المشتري والبائع والبنوك المراسلة والمنصات الوسيطة بعد تنفيذ بنود العقد. يشمل ذلك مطابقة مستندات الاعتمادات المستندية (LC)، التحوط ضد تقلبات أسعار الصرف (FX Hedging)، والمطابقة الآلية للفواتير لضمان السيولة وتفادي تجميد الأموال، وهو ما يحوله وكلاء ديجي نورون إلى عملية مؤتمتة فائقة الأمان والسرعة.",
      traditionalVsAI: {
        traditionalTitle: "التسوية التقليدية (عالية المخاطر وبطيئة)",
        traditionalDesc: "أسابيع من التأخير المصرفي، غرامات باهظة لعدم تطابق المستندات مع UCP 600، خسائر كبيرة نتيجة تقلبات أسعار الصرف، وغياب الشفافية في رسوم الوسطاء.",
        aiTitle: "التسوية الذكية مع ديجي نورون (مؤتمتة وآمنة)",
        aiDesc: "تدقيق استباقي للاعتمادات المستندية قبل تقديمها للبنوك، تنبؤ دقيق بتقلبات العملات للتحوط في أفضل توقيت، ومطابقة محاسبية آلية فورية.",
      },
    },
    pillarsSection: {
      badge: "الركائز الاستراتيجية الأربع",
      title: "حلول ديجي نورون المتخصصة في",
      titleHighlight: "المحاور الأربعة الكبرى للتجارة الدولية",
      subtitle: "في كل ركيزة نقدم إطاراً تكاملياً عبر ٥ أبعاد: وكلاء ذكاء اصطناعي مستقلون، شبكات وكلاء متعددين، أتمتة العمليات (BPA)، التأهيل المؤسسي المتخصص، ولوحات القيادة الذكية لاتخاذ القرار.",
      tabLabels: {
        all: "كافة الركائز",
        law: "١. القانون التجاري والامتثال",
        marketing: "٢. التسويق الذكي واستكشاف الأسواق",
        logistics: "٣. اللوجستيات والجمارك الذكية",
        settlement: "٤. التمويل والتسوية المالية الذكية",
      },
      axesLabels: {
        agents: "تطوير وكلاء الذكاء الاصطناعي المستقلين (Autonomous Agents)",
        multiAgents: "شبكات الوكلاء المتعددين المتناسقة (Multi-Agent Swarms)",
        processOptimization: "أتمتة وإعادة هندسة العمليات التجارية (BPA)",
        training: "التدريب والتأهيل المؤسسي للفرق (Corporate Training)",
        dashboards: "تصميم لوحات التحكم والذكاء التجاري (BI Dashboards)",
        deliverables: "المخرجات والحلول المسلّمة للمؤسسة",
        impact: "الأثر الملموس على الأعمال (Business Impact)",
      },
    },
    pillars: [
      {
        id: "law",
        number: "٠١",
        title: "القانون التجاري بالذكاء الاصطناعي",
        englishTitle: "AI in International Trade Law & Compliance",
        badge: "الأمان القانوني والامتثال",
        accentColor: "indigo",
        tagline: "مراجعة ذكية للعقود الدولية، التحقق من شروط Incoterms 2020، ومراقبة العقوبات الدولية ٢٤/٧",
        summary: "تنطوي صفقات التجارة الدولية على مخاطر قانونية فادحة تتراوح بين الثغرات التعاقدية وعقوبات التجميد والنزاعات القضائية المعقدة. تُطور ديجي نورون وكلاء متخصصين في القانون الدولي التجاري وقواعد غرفة التجارة الدولية (ICC) لتأمين الصفقات بالكامل.",
        agents: {
          title: "وكلاء مستقلون للمراجعة القانونية والامتثال",
          desc: "وكلاء مدربون على القوانين المقارنة والتحليل الدلالي الدقيق للنصوص التعاقدية:",
          items: [
            "وكيل المراجعة وتعديل العقود الآلي (Contract Review Agent): فحص دقيق للبنود الجزائية، القوة القاهرة، والاختصاص القضائي في أقل من ٣ دقائق.",
            "وكيل فحص العقوبات والامتثال (Sanctions & KYC Agent): فحص لحظي للمستفيدين الحقيقيين (UBO) وسلاسل الشركات والسفن في قوائم OFAC والأمم المتحدة والاتحاد الأوروبي.",
            "وكيل الامتثال لشروط الإنكوتيرمز (Incoterms 2020 Copilot): مطابقة شروط التسليم (CIF, FOB, DDP...) مع التزامات التأمين والمخاطر وبوالص الشحن.",
          ],
        },
        multiAgents: {
          title: "شبكة متعددة الوكلاء للتفاوض ومحاكاة التحكيم",
          desc: "فريق من الوكلاء الرقميين لتقييم العقد من كافة الزوايا قبل التوقيع:",
          items: [
            "تنسيق ثلاثي: وكيل القوانين المحلية + وكيل اتفاقية البيع الدولي للبضائع (CISG) + وكيل تقييم مخاطر الطرف المقابل لصياغة عقد متوازن يحمي مصالح الشركة.",
            "محاكاة سيناريوهات النزاع والتحكيم: اختبار مدى قوة بنود التعويض وإجراءات حل النزاعات قبل إتمام الصفقة.",
          ],
        },
        processOptimization: {
          title: "أتمتة العمليات القانونية وتقليص الدورة الزمنية",
          desc: "اختصار زمن توقيع العقود بنسبة ٩٠٪ مع معايير حوكمة صارمة:",
          items: [
            "إنشاء مكتبة بنود ذكية وموحدة (Clause Library) تتضمن الشروط الوقائية المحمية لمصالح المصدرين والمستوردين.",
            "ربط أنظمة CRM وإدارة المبيعات بالمسار القانوني لإصدار عقود متطابقة مع العروض التجارية فوراً.",
            "المراقبة اللحظية لتحديثات القوانين الجمركية والتعريفات في أسواق التصدير المستهدفة.",
          ],
        },
        training: {
          title: "تأهيل وتدريب الفرق القانونية والتجارية",
          desc: "بناء كفاءات التعامل مع الذكاء الاصطناعي التوليدي في المجال القانوني:",
          items: [
            "ورش عمل متقدمة في هندسة الأوامر (Prompting) لتحليل السوابق القضائية وأوراق التحكيم الدولي.",
            "بروتوكولات التحقق ومكافحة الأخطاء في المستندات القانونية الحساسة.",
            "معايير الحفاظ على سرية البيانات ونشر النماذج محلياً (On-Premise) دون أي تسريب خارجي.",
          ],
        },
        dashboards: {
          title: "لوحة التحكم بالمخاطر القانونية وحالة العقود",
          desc: "رؤية مركزية شاملة لكافة الالتزامات والاتفاقيات الدولية:",
          items: [
            "مؤشرات حالة العقود الجارية والمنتهية وتنبيهات التجديد وشروط الاستحقاق.",
            "خريطة حرارية لمخاطر العقوبات وتقييم الأمان القانوني للشركاء التجاريين قبل سداد الدفعات.",
            "تقويم المواعيد القانونية الحاكمة: فترات الفحص والضمان وخطابات الائتمان.",
          ],
        },
        keyDeliverables: [
          "محرك ذكي لتدقيق العقود والامتثال مرتبط بأنظمة إدارة العقود المؤسسية (CLM)",
          "قاعدة معرفية قانونية محلية فائقة الأمان مجهزة بتقنية RAG المتطورة",
          "أطلس الامتثال للعقوبات والإجراءات الاحترازية المؤسسية",
          "شهادات تأهيل احترافية للكوادر القانونية والتجارية بالمؤسسة",
        ],
        businessImpact: "تقليص ٩٠٪ من زمن مراجعة العقود، انعدام مخاطر العقوبات غير المقصودة، والامتثال التام لقواعد Incoterms 2020.",
      },
      {
        id: "marketing",
        number: "٠٢",
        title: "التسويق الذكي واستكشاف الأسواق الدولية",
        englishTitle: "Smart B2B Marketing & Global Market Intelligence",
        badge: "نمو الصادرات واستكشاف المشترين",
        accentColor: "emerald",
        tagline: "استكشاف المشترين الدوليين، تحليل البيانات الجمركية الكبرى، والتسويق الدولي المؤتمت",
        summary: "لم يعد اختراق الأسواق الدولية يتطلب الاعتماد الحصري على الوسطاء أو المشاركة المكلفة في المعارض. عبر وكلاء ديجي نورون الأذكياء، يمكن للمؤسسات التنقيب في مليارات البيانات الجمركية الدولية للوصول المباشر للمستوردين الحقيقيين وتخصيص العروض بلغات متعددة.",
        agents: {
          title: "وكلاء التنقيب وتقييم المشترين الدوليين",
          desc: "وكلاء يمسحون الأسواق الدولية بشكل متواصل على مدار الساعة:",
          items: [
            "وكيل صيد المشترين الدوليين (Global B2B Lead Hunter): التنقيب في بوالص الشحن الجمركية وسجلات الاستيراد والمناقصات للوصول للمشترين الفعليين لمنتجاتك.",
            "وكيل تصنيف وتقييم المشترين (Buyer Profiling & Scoring): تحليل القدرة المالية وحجم الاستيراد التاريخي والموردين الحاليين لتحديد مدى جدوى العميل.",
            "وكيل تتبع المنافسين والأسعار (Competitor Intelligence): رصد أسعار البيع اللحظية في موانئ الوصول وفروق التعريفات الجمركية وتغيرات الطلب.",
          ],
        },
        multiAgents: {
          title: "شبكة متعددة الوكلاء للتفاوض والمحتوى التجاري متعدد اللغات",
          desc: "تنسيق متناغم بين وكلاء متخصصين يخاطبون كل سوق وفق ثقافته التجارية:",
          items: [
            "تعاون متسلسل: وكيل فهم الثقافة التجارية الإقليمية (الخليج، أوروبا، آسيا، أوراسيا) + وكيل صياغة العروض الفنية والمالية + وكيل المتابعة البريدية الذكية.",
            "مساعد فني تجاري متعدد اللغات ٢٤/٧: إجابة فورية على استفسارات المشترين ومواصفات البضائع باللغات العربية والإنجليزية والروسية والصينية.",
          ],
        },
        processOptimization: {
          title: "أتمتة مسار مبيعات التصدير والتواصل B2B",
          desc: "تسريع تحويل طلبات الأسعار إلى عقود توريد نهائية:",
          items: [
            "إنشاء كتالوجات تفاعلية ديناميكية متوافقة تماماً مع رموز النظام المنسق (HS) التي يطلبها المستورد.",
            "الرد الآلي الفوري على طلبات عروض الأسعار (RFQ) بمسودات فواتير شكلية (Proforma Invoice) مرتبطة بأسعار المواد الخام والمخزون.",
            "فرز العملاء المحتملين ذكياً لتركيز جهود مديري التصدير على الصفقات الأعلى ربحية وأماناً.",
          ],
        },
        training: {
          title: "تدريب فرق التصدير والمبيعات الدولية على تقنيات الذكاء الاصطناعي",
          desc: "تمكين الكوادر البشرية من أدوات المبيعات المستقبلية:",
          items: [
            "استخدام الذكاء الاصطناعي في إعداد رسائل استقطاب مؤثرة عبر لينكد إن والمراسلات التجارية الرسمية.",
            "تحليل البيانات التجارية الكبرى للتنبؤ بمواسم ذروة الطلب على السلع في الأسواق الخارجية.",
            "مهارات التفاوض المدعومة بأنظمة الذكاء الاصطناعي المساندة للقرار.",
          ],
        },
        dashboards: {
          title: "لوحة رادار الأسواق وتطوير الصادرات (Market Radar)",
          desc: "اتخاذ قرارات استراتيجية مبنية على تدفقات البيانات الحية:",
          items: [
            "مؤشر جاذبية الأسواق التفاعلي بمقارنة التعريفات وتكاليف الشحن وحجم الاستيراد الإجمالي.",
            "مراقبة أسعار السلع العالمية (Commodities) وفروق هوامش الربح التصديري عبر الوجهات المختلفة.",
            "متابعة مسار الصفقات التصديرية: العملاء المكتشفون، العروض الجارية، والصفقات المبرمة.",
          ],
        },
        keyDeliverables: [
          "محرك مخصص لاستكشاف بيانات المشترين الدوليين والتحقق من سجلاتهم التجارية",
          "نظام أتمتة إصدار الفواتير الأولية والكتالوجات متعددة اللغات متصل بـ ERP",
          "لوحة رادار استخبارات الأسواق لرصد المنافسين وحركة الاستيراد العالمية",
          "برامج تدريبية تخصصية لتطوير مهارات فرق التصدير والتسويق الدولي",
        ],
        businessImpact: "زيادة ٣.٥ ضعف في فرص التصدير المؤهلة، تقليص دورة التفاوض من أشهر إلى أسابيع، والوصول المباشر لكبار المستوردين دون وسطاء.",
      },
      {
        id: "logistics",
        number: "٠٣",
        title: "اللوجستيات والجمارك الذكية",
        englishTitle: "Smart Logistics, Customs & Supply Chain AI",
        badge: "خفض تكاليف الشحن والتخليص",
        accentColor: "cyan",
        tagline: "تصنيف آلي لرموز النظام المنسق (HS Code)، تخليص جمركي فائق السرعة وتتبع بحري وبري ذكي",
        summary: "تؤدي أخطاء تصنيف البضائع في الجمارك إلى غرامات باهظة وتأخيرات مكلفة في الموانئ. تجمع ديجي نورون بين الرؤية الحاسوبية ومعالجة اللغات الطبيعية المتخصصة في القوانين الجمركية لضمان تخليص فائق السرعة وإدارة ذكية لسلاسل التوريد.",
        agents: {
          title: "وكلاء متخصصون في التصنيف الجمركي وتدقيق المستندات",
          desc: "نماذج مدربة على نصوص منظمة الجمارك العالمية (WCO) والتعريفات الوطنية:",
          items: [
            "وكيل تصنيف رمز النظام المنسق (Automated HS Code Classifier): قراءة المواصفات الفنية للبضائع وتحديد الرمز المكون من ٦ إلى ١٠ أرقام بدقة تتجاوز ٩٩.٤٪ مع الإسناد القانوني ونسب الرسوم.",
            "وكيل استخراج ومطابقة مستندات التخليص (Customs Document Parser): فحص بوالص الشحن وقوائم التعبئة وشهادات المنشأ والتفتيش عبر OCR متعدد اللغات ومطابقتها لمنع أي تناقض قبل التقديم الجمركي.",
            "وكيل التنبؤ بتأخيرات الموانئ ومواعيد الوصول (Predictive ETA Agent): حساب المواعيد الدقيقة لتفريغ الحاويات استناداً لبيانات التتبع البحري (AIS) والازدحام وظروف الملاحة.",
          ],
        },
        multiAgents: {
          title: "شبكة متعددة الوكلاء لخيارات الشحن والوقاية من غرامات الأرضيات",
          desc: "تنسيق متكامل بين الشاحنين ووكلاء الشحن والمخلصين الجمركيين:",
          items: [
            "شبكة طلب عروض أسعار الشحن الآلية: مقارنة فورية بين خطوط الملاحة وشركات النقل البري لاختيار المسار متعدد الوسائط الأسرع والأقل كلفة.",
            "نظام الحماية من غرامات التأخير (Demurrage Prevention Swarm): تتبع فترات السماح في الموانئ وترتيب أولوية التخليص لتجنب رسوم الأرضيات الباهظة.",
          ],
        },
        processOptimization: {
          title: "أتمتة إجراءات التخليص والبيان الجمركي",
          desc: "القضاء على الإدخال اليدوي المكرر للبيانات:",
          items: [
            "التوليد التلقائي لمسودة البيان الجمركي المتوافق مع منصات النافذة الواحدة والأنظمة الإلكترونية الوطنية.",
            "تحسين تعبئة الحاويات (Container Load Optimization) بخوارزميات الذكاء الاصطناعي لاستغلال أقصى مساحة وحمولة متاحة قانوناً.",
            "التحويل الفوري لقوائم التعبئة غير المهيكلة (PDF/Excel) إلى بيانات منظمة داخل أنظمة المستودعات.",
          ],
        },
        training: {
          title: "برامج تدريبية متقدمة لخبراء اللوجستيات والمخلصين",
          desc: "بناء قدرات الكوادر اللوجستية للتعامل مع الأنظمة المؤتمتة:",
          items: [
            "ورش عمل لتصنيف البضائع المعقدة في الصناعات الكيميائية والنفطية والآلات الكهربائية.",
            "تطبيقات الرؤية الحاسوبية في الفحص ومراقبة الجودة في المستودعات والمنافذ الحدودية.",
            "استراتيجيات إدارة سلاسل الإمداد الدولية المدعومة بالذكاء الاصطناعي.",
          ],
        },
        dashboards: {
          title: "برج المراقبة اللوجستية والتخليص الجمركي (Logistics Control Tower)",
          desc: "متابعة لحظية شاملة لجميع الشحنات عبر العالم:",
          items: [
            "تتبع حي للحاويات عبر الأقمار الاصطناعية مع حساب لحظي لموعد الوصول (ETA) ومخاطر المسارات.",
            "لوحة متابعة مسار التخليص الجمركي: تصنيف الشحنات حسب مراحل التفتيش والمسار الأخضر وزمن الفسح.",
            "تحليلات تكاليف الشحن لكل طن/كيلومتر ومقارنة أداء خطوط الملاحة وشركات النقل.",
          ],
        },
        keyDeliverables: [
          "محرك الذكاء الاصطناعي لتصنيف بنود التعريفة الجمركية (HS Code) للمنتجات الصناعية المعقدة",
          "منصة تدقيق المستندات الجمركية واستخراج البيانات عبر OCR متعدد اللغات",
          "لوحة برج المراقبة اللوجستية الموحدة مع نظام الإنذار المبكر لغرامات التأخير",
          "حقيبة تدريبية وورش عمل متخصصة لفرق اللوجستيات وسلاسل الإمداد",
        ],
        businessImpact: "تقليص ٧٠٪ من زمن تجهيز المستندات الجمركية، إلغاء غرامات الأرضيات الناتجة عن تأخر الأوراق، ودقة ٩٩.٤٪ في تصنيف كود التعريفة.",
      },
      {
        id: "settlement",
        number: "٠٤",
        title: "التمويل والتسوية المالية الدولية (ستلمنت)",
        englishTitle: "Trade Finance, FX Hedging & Smart Settlement AI",
        badge: "الأمان المالي وإدارة العملات",
        accentColor: "amber",
        tagline: "أتمتة الاعتمادات المستندية (LC)، التحوط ضد تقلبات العملات، والتسوية المالية الآمنة",
        summary: "تُعد التسوية المالية (Settlement) وتقلبات أسعار الصرف والمطابقة المصرفية الصارمة أكثر مراحل التجارة حساسية ومخاطرة. يُطور ديجي نورون وكلاء ماليين لفحص الاعتمادات وفقاً لقواعد UCP 600 وإدارة مخاطر العملات بدقة متناهية.",
        agents: {
          title: "وكلاء الذكاء الاصطناعي للتمويل والتسوية المصرفية",
          desc: "وكلاء مدربون على معايير سويفت (SWIFT) والأعراف المصرفية وأسواق الصرف:",
          items: [
            "وكيل فحص مطابقة الاعتمادات المستندية (LC Discrepancy Checker): فحص مسودة الاعتماد بدقة مقارنة بالفاتورة وقواعد UCP 600 وISBP 745 لمنع أي رفض مصرفي.",
            "مساعد التحوط وإدارة مخاطر العملات (FX Hedging Copilot): تحليل مؤشرات الاقتصاد الكلي وأزواج العملات (الدولار، اليورو، الدرهم، الروبل، اليوان) واقتراح توقيت وأدوات التحوط الأنسب.",
            "وكيل التسوية والمطابقة الآلية (Automated Reconciliation Agent): المطابقة الفورية بين إشعارات التحويل المصرفية والفواتير التجارية وسندات الإفراج.",
          ],
        },
        multiAgents: {
          title: "شبكة متعددة الوكلاء للتسوية الآمنة وإدارة السيولة متعددة العملات",
          desc: "تنسيق متناغم بين وكلاء متخصصين لاختيار أفضل وأأمن مسار مالي:",
          items: [
            "شبكة تحسين مسارات التحويل: وكيل فحص رسوم البنوك والوسطاء + وكيل سرعة التنفيذ + وكيل الامتثال للعقوبات لاقتراح أفضل قناة سداد (سويفت، حسابات الضمان، العملات المحلية).",
            "نظام الاعتماد المزدوج المالي والقانوني: فحص متزامن للتسليم الفعلي للبضائع مع شروط تحرير الدفعات النقدية تلقائياً.",
          ],
        },
        processOptimization: {
          title: "أتمتة العمليات المالية والخزينة في التجارة الدولية",
          desc: "القضاء على الأخطاء البشرية وهدر السيولة:",
          items: [
            "تصفير نسبة رفض مستندات الاعتمادات المستندية في البنوك وتوفير رسوم التعديل والتأخير.",
            "الحساب التلقائي للتكلفة الإجمالية الواصلة (Landed Cost) متضمنة الرسوم الجمركية وفروق الصرف وفائدة التمويل.",
            "تسريع تحرير الضمانات والودائع البنكية عبر الأرشفة والتقارير الآلية للجهات الرقابية.",
          ],
        },
        training: {
          title: "تأهيل مديري المالية والخزينة الدولية على أدوات الذكاء الاصطناعي",
          desc: "تطوير مهارات الإدارات المالية لمواكبة التمويل التجاري الحديث:",
          items: [
            "تدريب تطبيقي على تدقيق الاعتمادات المستندية وفق UCP 600 والقواعد الرقمية eUCP.",
            "استخدام النماذج التنبؤية في إدارة تقلبات العملات وبناء استراتيجيات تحوط فعالة.",
            "أتمتة عمليات المطابقة المحاسبية للعملات المتعددة في المنشآت التجارية.",
          ],
        },
        dashboards: {
          title: "لوحة تحكم الخزينة والتسوية المالية (Settlement Control)",
          desc: "إشراف تنفيذي مركزي على السيولة والالتزامات العابرة للحدود:",
          items: [
            "عرض لحظي لحالة تسوية الصفقات: الدفعات المقدمة، المستندات قيد الفحص المصرفي، والمستحقات التصديرية المعلقة.",
            "خريطة مراكز العملات المفتوحة (FX Net Open Position) ومحاكاة حساسية هوامش الربح لتغيرات الصرف.",
            "متابعة التزامات توريد حصيلة الصادرات للبنك المركزي والامتثال للأطر الزمنية القانونية.",
          ],
        },
        keyDeliverables: [
          "محرك الذكاء الاصطناعي لتدقيق الاعتمادات المستندية ومنع حالات عدم التطابق (UCP 600)",
          "مساعد التنبؤ بتقلبات العملات واستراتيجيات التحوط المالي المتقدمة",
          "نظام المطابقة المحاسبية الآلية للتحويلات الدولية متكامل مع ERP المؤسسي",
          "دليل استراتيجية التسوية المالية الآمنة وبرنامج تدريبي للمديرين الماليين",
        ],
        businessImpact: "انعدام حالات الرفض المصرفي للاعتمادات، تسريع ٨٠٪ في مطابقة الحسابات المالية، وحماية كاملة لهوامش الربح من تقلبات العملات.",
      },
    ],
    multiAgentOrchestration: {
      badge: "معمارية ديجي نورون المتكاملة",
      title: "كيف تنفذ شبكة الوكلاء المتعددين",
      titleHighlight: "صفقة تجارية دولية كاملة بشكل مؤتمت؟",
      description: "تتجلى القوة الاستثنائية لحلول ديجي نورون عندما تتناغم هذه الركائز الأربع عبر شبكة وكلاء متعددين (Multi-Agent Swarm). فبدلاً من الإجراءات اليدوية المعقدة والمشتتة، يقود الوكلاء الأذكياء الصفقة بسلاسة من استكشاف العميل وحتى التسوية المالية النهائية:",
      steps: [
        {
          step: "الخطوة ١",
          agentName: "وكيل التسويق واستكشاف الأسواق",
          role: "Market Intelligence & Lead Agent",
          action: "يستكشف مشترياً معتمداً في السوق المستهدف، يتحقق من ملاءته المالية وسجلاته الجمركية، ويتلقى طلب عرض السعر (RFQ).",
        },
        {
          step: "الخطوة ٢",
          agentName: "وكيل القانون التجاري والعقوبات",
          role: "Trade Law & Sanctions Agent",
          action: "يفحص هوية المشتري في قوائم العقوبات، يصيغ عقد البيع وفق شروط Incoterms CIF، ويضمن بنود التحكيم الواقية.",
        },
        {
          step: "الخطوة ٣",
          agentName: "وكيل اللوجستيات والجمارك",
          role: "Logistics & Customs Agent",
          action: "يصنف رمز النظام المنسق (HS Code)، يحجز مسار الشحن متعدد الوسائط الأسرع والأوفر، ويجهز مسودة البيان الجمركي وبوالص الشحن.",
        },
        {
          step: "الخطوة ٤",
          agentName: "وكيل التمويل والتسوية المالية (ستلمنت)",
          role: "Trade Finance & Settlement Agent",
          action: "يدقق مسودة الاعتماد المستندي (LC) لمنع أي مخالفة لقواعد UCP 600، ينفذ التحوط من تقلبات العملة، ويقيد التسوية المالية فور الإفراج.",
        },
      ],
    },
    comparison: {
      badge: "مقارنة الأداء",
      title: "التجارة الدولية التقليدية في مواجهة",
      titleHighlight: "التجارة الذكية بالذكاء الاصطناعي مع ديجي نورون",
      subtitle: "فوارق جوهرية في سرعة التنفيذ، الأمان القانوني، وحماية هوامش الأرباح التصديرية",
      headers: {
        feature: "مؤشر الأداء",
        traditional: "الممارسة التقليدية الشائعة",
        diginoron: "الممارسة الذكية مع وكلاء ديجي نورون",
      },
      rows: [
        {
          metric: "زمن مراجعة وتدقيق العقود الدولية",
          traditional: "٧ إلى ١٤ يوم عمل مع مخاطر السهو البشري في البنود الدقيقة",
          diginoron: "أقل من ٥ دقائق بدقة ٩٩٪ مع تحديد البنود عالية الخطورة آلياً",
        },
        {
          metric: "فحص العقوبات والكيانات المحظورة",
          traditional: "بحث يدوي متقطع يحمل مخاطر جسيمة لتجميد الحسابات ومصادرة البضائع",
          diginoron: "فحص فوري شامل للكيانات وسلاسل الملكية عبر القواعد الدولية الحية",
        },
        {
          metric: "العثور على مشترين أجانب فعليين",
          traditional: "الاعتماد على المعارض المكلفة والوسطاء ذوي العمولات المرتفعة",
          diginoron: "تنقيب آلي مستمر في البيانات الجمركية الدولية وتواصل ذكي متعدد اللغات",
        },
        {
          metric: "تصنيف رمز التعريفة الجمركية (HS Code)",
          traditional: "نسبة خطأ ١٥-٢٥٪ تؤدي لغرامات وتأخير في الإفراج الجمركي",
          diginoron: "دقة ٩٩.٤٪ بنماذج عصبية متخصصة ومستندة لقواعد WCO",
        },
        {
          metric: "تدقيق مستندات الاعتمادات المستندية (LC)",
          traditional: "تكرار حالات الرفض المصرفي وسداد غرامات التعديل والتأخير",
          diginoron: "تدقيق استباقي وفق UCP 600 قبل التقديم للبنك بدون أي حالات رفض تذكر",
        },
        {
          metric: "إدارة مخاطر تقلبات العملات",
          traditional: "قرارات ارتجالية تؤدي لخسارة ٣ إلى ٨٪ من هامش الربح الإجمالي",
          diginoron: "تنبؤ خوارزمي باتجاهات العملات وتوصيات تحوط مالية دقيقة وممنهجة",
        },
      ],
    },
    techSecurity: {
      badge: "سيادة البيانات والأمان المؤسسي",
      title: "حماية فائقة للأسرار التجارية وتثبيت",
      titleHighlight: "محلي آمن بالكامل (On-Premise)",
      description: "تُعد قوائم العملاء وأسعار التوريد وبيانات الحسابات البنكية أثمن أصول الشركات التجارية. تضمن ديجي نورون عدم خروج أي بيانات خارج جدران مؤسستك عبر نشر محلي مستقل ومعزول تماماً.",
      features: [
        {
          title: "تثبيت محلي معزول بالكامل (Air-Gapped On-Premise)",
          desc: "تشغيل النماذج اللغوية الكبرى على خوادمك الداخلية دون أي حاجة للاتصال بالإنترنت الخارجي لضمان الخصوصية المطلقة.",
        },
        {
          title: "تكامل سلس مع أنظمة ERP واللوجستيات",
          desc: "ربط آمن عبر واجهات برمجة مشفرة مع أنظمة SAP وMicrosoft Dynamics وOracle والبوابات الجمركية الوطنية.",
        },
        {
          title: "نقل كامل للشيفرة المصدرية والملكية الفكرية",
          desc: "تسليم كامل الشيفرة والنماذج المخصصة لفريق تكنولوجيا المعلومات الداخلي دون أي فرض للاعتمادية طويلة الأجل.",
        },
        {
          title: "امتثال كامل لمعايير ICC وWCO الدولية",
          desc: "تمت برمجة قواعد اتخاذ القرار وفق أحدث إصدارات غرفة التجارة الدولية (Incoterms 2020، UCP 600) والجمارك العالمية.",
        },
      ],
    },
    faq: {
      badge: "الأسئلة الشائعة",
      title: "إجابات الخبراء حول التحول الذكي للتجارة الدولية",
      items: [
        {
          q: "ما هي الشركات الأكثر استفادة من حلول ديجي نورون للتجارة الدولية؟",
          a: "صُممت هذه الحلول لكبرى شركات التصدير والاستيراد، مجمعات البتروكيماويات والتعدين، شركات إدارة التصدير (EMC)، شركات الشحن واللوجستيات، والمخلصين الجمركيين الساعين لخفض التكاليف وتأمين عملياتهم.",
        },
        {
          q: "هل نحتاج لتغيير برامجنا المحاسبية والتجارية الحالية لتطبيق النظام؟",
          a: "كلا، إطلاقاً. يعمل وكلاء ديجي نورون كطبقة ذكاء اصطناعي عليا تتصل بأنظمتكم الحالية (مثل SAP أو Oracle أو أي برنامج محلي) عبر واجهات الربط الآمنة.",
        },
        {
          q: "كيف تضمن ديجي نورون عدم تسريب أسرارنا التجارية وهوامش الربح؟",
          a: "نوفر إمكانية التثبيت المحلي التام (On-Premise) على خوادم شركتكم الداخلية دون اتصال سحابي، مع التزام قانوني صارم باتفاقيات عدم الإفصاح المتبادلة (NDA).",
        },
        {
          q: "كيف يساعد الذكاء الاصطناعي في التسوية المالية والاعتمادات المستندية؟",
          a: "يقوم بفحص وتدقيق كل كلمة في بوالص الشحن والفواتير مقارنة بشروط الاعتماد وقواعد UCP 600 لمنع الرفض المصرفي، مع التنبؤ بتقلبات أسعار الصرف لتنفيذ التحوط في اللحظة المثالية.",
        },
        {
          q: "ما هي المدة الزمنية المعتادة للتشغيل وتأهيل الكوادر البشرية؟",
          a: "يستغرق إطلاق الوحدة التجريبية من أسبوعين إلى ٤ أسابيع، بينما يكتمل التحول الشامل للمحاور الأربعة مع تأهيل الفرق ونقل المعرفة خلال شهر إلى ٣ أشهر.",
        },
        {
          q: "كيف يمكن لفريقنا حجز جلسة استشارية وعرض حي مخصص؟",
          a: "يمكنكم ملء نموذج التواصل أسفل هذه الصفحة أو الاتصال المباشر بقطاع التجارة عبر الهاتف (+61 451 410 352) لترتيب جلسة فنية متخصصة.",
        },
      ],
    },
  },
};
