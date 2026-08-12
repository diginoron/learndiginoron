export interface Course {
  id: string;
  slug: string;
  title: string;
  category: "kids" | "corporate" | "advanced";
  categoryName: string;
  targetAudience: string;
  shortDesc: string;
  fullDesc: string;
  level: "مقدماتی" | "متوسط" | "پیشرفته";
  duration: string;
  sessionsCount: number;
  price: string;
  badge?: string;
  image: string;
  topics: string[];
  prerequisites: string;
  instructor: {
    name: string;
    role: string;
    avatar: string;
  };
  features: string[];
}

export const COURSES: Course[] = [
  {
    id: "1",
    slug: "ai-for-kids-teens-starter",
    title: "مبانی هوش مصنوعی و تفکر الگوریتمی کودکان (۸ تا ۱۲ سال)",
    category: "kids",
    categoryName: "کودکان و نوجوانان",
    targetAudience: "کودکان ۸ تا ۱۲ سال",
    shortDesc: "یادگیری مفاهیم هوش مصنوعی، ساخت کاراکترهای هوشمند و بازی‌سازی تعاملی با ابزارهای دیداری.",
    fullDesc: "در این دوره هیجان‌انگیز، کودکان با مفاهیم پایه‌ای یادگیری ماشین، تشخیص تصویر و صدای هوشمند آشنا شده و اولین برنامه‌های هوشمند خود را بدون نیاز به کدنویسی پیچیده می‌سازند.",
    level: "مقدماتی",
    duration: "۱۶ ساعت (۸ جلسه)",
    sessionsCount: 8,
    price: "۳,۵۰۰,۰۰۰ تومان",
    badge: "پرطرفدارترین کودکان",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
    topics: [
      "مفاهیم پایه هوش مصنوعی به زبان ساده",
      "آموزش مدل‌های تشخیص چهره و صدا با Scratch & Teachable Machine",
      "تولید نقاشی و کاراکتر با ابزارهای هوش مصنوعی مولد",
      "ساخت اولین ربات سخنگوی خانگی"
    ],
    prerequisites: "آشنایی مقدماتی با کار با کامپیوتر",
    instructor: {
      name: "مهندس سارا رضایی",
      role: "متخصص آموزش فناوری‌های نوین به کودکان",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
    },
    features: [
      "گواهی‌نامه رسمی دیجی نورون",
      "پشتیبانی آنلاین و منتورینگ خصوصی",
      "ارائه گزارش پیشرفت به والدین",
      "پروژه‌های عملی جذاب و ساخت بازی"
    ]
  },
  {
    id: "2",
    slug: "python-ai-teenagers",
    title: "برنامه‌نویسی پایتون و هوش مصنوعی کاربردی نوجوانان (۱۳ تا ۱۸ سال)",
    category: "kids",
    categoryName: "کودکان و نوجوانان",
    targetAudience: "نوجوانان ۱۳ تا ۱۸ سال",
    shortDesc: "آموزش کامل پایتون، شبکه‌های عصبی مقدماتی و ساخت ربات‌های پردازش تصویر و متن.",
    fullDesc: "این دوره ویژه نوجوانان علاقه‌مند به دنیای نرم‌افزار طراحی شده است تا زبان پایتون را کاملا کاربردی فراگرفته و الگوریتم‌های هوش مصنوعی را پیاده‌سازی کنند.",
    level: "متوسط",
    duration: "۲۴ ساعت (۱۲ جلسه)",
    sessionsCount: 12,
    price: "۵,۲۰۰,۰۰۰ تومان",
    badge: "ویژه نوجوانان",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
    topics: [
      "اصول جامع برنامه‌نویسی Python",
      "کار با کتابخانه‌های OpenCV و NumPy",
      "ساخت ربات پردازش تصویر و تشخیص شیء",
      "مقدمه‌ای بر پردازش زبان طبیعی (NLP)"
    ],
    prerequisites: "علاقه به برنامه‌نویسی و کامپیوتر",
    instructor: {
      name: "دکتر علی امیری",
      role: "مدرس دانشگاه و پژوهشگر هوش مصنوعی",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    },
    features: [
      "ساخت سبد پروژه (Portfolio) شخصی",
      "شرکت در مسابقه پایانی هوش مصنوعی",
      "کلاس‌های کم‌جمعیت آنلاین و حضوری",
      "مدرک دو زبانه معتبر"
    ]
  },
  {
    id: "3",
    slug: "generative-ai-for-executives",
    title: "دوره جامع هوش مصنوعی مولد برای مدیران و رهبران سازمان",
    category: "corporate",
    categoryName: "آموزش سازمانی",
    targetAudience: "مدیران ارشد، تصمیم‌گیرندگان و صاحبان کسب‌وکار",
    shortDesc: "ترسیم نقشه راه تحول هوشمند سازمان، اتوماسیون فرایندها و افزایش بهره‌وری تیم‌ها.",
    fullDesc: "ویژه مدیرانی که می‌خواهند از هوش مصنوعی مولد به عنوان اهرم رشد کسب‌وکار، کاهش هزینه‌ها و اتوماسیون فرایندهای سازمانی استفاده کنند.",
    level: "پیشرفته",
    duration: "۱۸ ساعت (۶ جلسه اختصاصی)",
    sessionsCount: 6,
    price: "تماس جهت استعلام سازمانی",
    badge: "ویژه مدیران ارشد",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop",
    topics: [
      "شناخت هوش مصنوعی مولد (Generative AI) و کاربردهای تجاری",
      "تدوین استراتژی AI و ارزیابی آمادگی سازمانی",
      "مهندسی پرامپت پیشرفته جهت مدیریت پروژه و تحلیل داده",
      "امنیت داده، اخلاق هوش مصنوعی و رعایت قوانین سازمانی"
    ],
    prerequisites: "تجربه مدیریت اجرایی یا کسب‌وکار",
    instructor: {
      name: "دکتر محمد کریمی",
      role: "مشاور تحول دیجیتال و هوش مصنوعی سازمان‌ها",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    features: [
      "ارزیابی اختصاصی فرایندهای شرکت شما",
      "ارائه نقشه راه ۳ ساله هوشمندسازی",
      " برگزاری کارگاه‌های عملی حضوری یا آنلاین",
      "پشتیبانی ۶ ماهه مشاوره سازمانی"
    ]
  },
  {
    id: "4",
    slug: "enterprise-automation-ai",
    title: "کارگاه عملی اتوماسیون فرایندهای سازمانی با هوش مصنوعی و LLM",
    category: "corporate",
    categoryName: "آموزش سازمانی",
    targetAudience: "تیم‌های اداری، مالی، منابع انسانی و مارکتینگ",
    shortDesc: "خودکارسازی کارهای تکراری، تحلیل هوشمند اسناد و راه‌اندازی دستیارهای هوشمند سازمانی.",
    fullDesc: "در این کارگاه سازمانی، پرسنل شرکت شما نحوه اتصال ابزارهای هوش مصنوعی به اتوماسیون اداری و تسریع ۵ برابری کارهای روزمره را می‌آموزند.",
    level: "متوسط",
    duration: "۱۲ ساعت (۴ کارگاه)",
    sessionsCount: 4,
    price: "تماس جهت استعلام سازمانی",
    badge: "ارتقای بهره‌وری",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
    topics: [
      "اتوماسیون ایمیل‌ها و مکاتبات اداری با ChatGPT & Claude",
      "تحول مالی و گزارش‌گیری داده محور به کمک AI",
      "طراحی دستیار هوشمند منابع انسانی (HR Bot)",
      "تولید هوشمند محتوا و کمپین‌های بازاریابی"
    ],
    prerequisites: "دانش اولیه کارهای اداری و آفیس",
    instructor: {
      name: "مهندس رضا حسینی",
      role: "متخصص معماری داده و اتوماسیون",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
    },
    features: [
      "سفارشی‌سازی بر اساس چالش‌های واقعی شرکت",
      "اعطای گواهینامه معتبر سازمانی دیجی نورون",
      "فایل‌ها و جزوات استاندارد تمرینی",
      "پشتیبانی فنی پس از دوره"
    ]
  },
  {
    id: "5",
    slug: "prompt-engineering-mastery",
    title: "مسترکلاس مهندسی پرامپت و ابزارهای هوش مصنوعی ۱۴۰۵",
    category: "advanced",
    categoryName: "عمومی و تخصصی",
    targetAudience: "دانشجویان، فریلنسرها و متخصصین",
    shortDesc: "تسلط کامل بر پرامپت‌نویسی پیشرفته، Midjourney، ChatGPT 4o و Claude 3.5.",
    fullDesc: "دوره جامع کاربرد ابزارهای مدرن هوش مصنوعی برای افزایش ده برابری سرعت کار و درآمدزایی تخصصی.",
    level: "متوسط",
    duration: "۲۰ ساعت (۱۰ جلسه)",
    sessionsCount: 10,
    price: "۴,۸۰۰,۰۰۰ تومان",
    badge: "جدید و بروز",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    topics: [
      "تکنیک‌های پرامپت‌نویسی چندمرحله‌ای (Chain of Thought)",
      "ساخت تصاویر فوق‌العاده با Midjourney و Stable Diffusion",
      "تحلیل داده‌های بزرگ با GPT Code Interpreter",
      "ساخت دستیارهای اختصاصی Custom GPTs"
    ],
    prerequisites: "علاقه به یادگیری ابزارهای دیجیتال",
    instructor: {
      name: "مهندس مریم صادقی",
      role: "استراتژیست محتوا و مدرس هوش مصنوعی",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
    },
    features: [
      "دسترسی دائم به ویدیوها",
      "گروه رفع اشکال و تبادل نظر",
      "کدهای اختصاصی و الگوی پرامپت‌ها",
      "مدرک رسمی معتبر"
    ]
  }
];
