export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: "kids-ai" | "corporate-ai" | "trends" | "tutorials";
  categoryName: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  tags: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "why-kids-should-learn-ai-early",
    title: "چرا آموزش هوش مصنوعی به کودکان و نوجوانان یک ضرورت تحصیلی است؟",
    excerpt: "در عصر جدید، سواد هوش مصنوعی مانند سواد خواندن و نوشتن اهمیت پیدا کرده است. بررسی ۵ دلیل کلیدی که چرا فرزندتان باید از سنین پایین با AI آشنا شود.",
    content: `
      <h2>ضرورت یادگیری هوش مصنوعی از سنین کودکی</h2>
      <p>جهانی که کودکان امروز در آن رشد می‌کنند، به شدت توسط تکنولوژی‌های هوش مصنوعی، یادگیری ماشین و الگوریتم‌های هوشمند احاطه شده است. برخلاف تصور عمومی، آموزش هوش مصنوعی به کودکان به معنای حفظ کردن فرمول‌های پیچیده ریاضی نیست؛ بلکه تقویت **تفکر تفکیکی (Computational Thinking)**، حل مسئله و خلاقیت دیجیتال است.</p>
      
      <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop" alt="آموزش هوش مصنوعی به کودکان" class="rounded-xl my-6 w-full object-cover max-h-96" />

      <h3>۵ مزیت اصلی آموزش AI به کودکان و نوجوانان</h3>
      <ol class="list-decimal pr-6 space-y-2 my-4">
        <li><strong>تقویت تفکر منطقی و حل مسئله:</strong> کودکان یاد می‌گیرند که چطور مسائل بزرگ را به اجزای کوچک‌تر تقسیم کنند.</li>
        <li><strong>تغییر نقش از مصرف‌کننده به تولیدکننده:</strong> فرزند شما به جای اینکه فقط بازی کند، فرا می‌گیرد چطور بازی و ابزار هوشمند بسازد.</li>
        <li><strong>افزایش خلاقیت تصویری و داستانی:</strong> با ابزارهای تولید تصویر و متن هوش مصنوعی، ایده‌های ذهنی کودکان سریع‌تر شکل می‌گیرند.</li>
        <li><strong>آمادگی برای مشاغل آینده:</strong> طبق گزارش مجمع جهانی اقتصاد، تا سال ۲۰۳۰ بیش از ۸۵ درصد مشاغل به مهارت‌های هوش مصنوعی وابسته خواهند بود.</li>
        <li><strong>درک اخلاق دیجیتال و ایمنی در اینترنت:</strong> آشنایی با نحوه کارکرد الگوریتم‌ها باعث می‌شود فرزندان در فضای آنلاین آگاهانه‌تر عمل کنند.</li>
      </ol>

      <blockquote class="border-r-4 border-cyan-500 pr-4 my-6 italic bg-slate-800/50 p-4 rounded-l-lg">
        «هدف ما در آکادمی دیجی نورون، پرورش نسل آینده‌ای است که نه‌تنها از تکنولوژی هراسی ندارد، بلکه آن را رهبری می‌کند.»
      </blockquote>

      <h3>رویکرد دیجی نورون در آموزش کودکان</h3>
      <p>در دوره‌های تخصصی دیجی نورون (learn.diginoron.com)، ما از ابزارهای بصری مانند Scratch، Teachable Machine و پروژه‌های بازی‌سازی استفاده می‌کنیم تا فرایند یادگیری کاملاً بازی‌محور و لذت‌بخش باشد.</p>
    `,
    category: "kids-ai",
    categoryName: "هوش مصنوعی کودکان",
    author: {
      name: "سارا رضایی",
      role: "مدیر بخش آموزش کودکان دیجی نورون",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
    },
    date: "۲۲ مرداد ۱۴۰۵",
    readTime: "۶ دقیقه",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
    featured: true,
    tags: ["کودکان", "آموزش هوش مصنوعی", "تفکر الگوریتمی", "دیجی نورون"]
  },
  {
    id: "2",
    slug: "corporate-ai-transformation-guide",
    title: "نقشه راه تحول هوشمند سازمان‌ها با هوش مصنوعی در سال ۱۴۰۵",
    excerpt: "راهنمای عملی برای مدیران ارشد جهت پیاده‌سازی هوش مصنوعی مولد، کاهش ۵۰ درصدی هزینه‌های عملیاتی و اتوماسیون فرایندهای تکراری.",
    content: `
      <h2>چرا سازمان‌ها امروز به آموزش هوش مصنوعی نیاز مبرم دارند؟</h2>
      <p>در دنیای رقابتی امروز، سازمان‌هایی که نتوانند ابزارهای هوش مصنوعی را در فرایندهای اداری، مالی، منابع انسانی و بازاریابی خود ادغام کنند، سهم بازار خود را به رقبای چابک‌تر واگذار خواهند کرد.</p>

      <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop" alt="هوش مصنوعی سازمانی" class="rounded-xl my-6 w-full object-cover max-h-96" />

      <h3>مراحل ۴ گانه تحول هوشمند سازمانی</h3>
      <div class="space-y-4 my-6">
        <div class="p-4 bg-slate-800/80 rounded-lg border border-slate-700">
          <h4 class="font-bold text-cyan-400">۱. عارضه‌یابی و ارزیابی آمادگی (AI Assessment)</h4>
          <p>شناسایی گلوگاه‌های کاری سازمان که بیشترین زمان پرسنل را تلف می‌کنند.</p>
        </div>
        <div class="p-4 bg-slate-800/80 rounded-lg border border-slate-700">
          <h4 class="font-bold text-cyan-400">۲. آموزش اختصاصی پرسنل و مدیران</h4>
          <p>برگزاری کارگاه‌های کاربردی متناسب با فرهنگ و داده‌های شرکت شما.</p>
        </div>
        <div class="p-4 bg-slate-800/80 rounded-lg border border-slate-700">
          <h4 class="font-bold text-cyan-400">۳. اتوماسیون فرایندها با LLMها</h4>
          <p>راه‌اندازی دستیارهای هوشمند داخلی برای پاسخگویی به مشتریان و تحلیل گزارشات.</p>
        </div>
        <div class="p-4 bg-slate-800/80 rounded-lg border border-slate-700">
          <h4 class="font-bold text-cyan-400">۴. پایش و بهبود مستمر نرخ بازگشت سرمایه (ROI)</h4>
          <p>ارزیابی افزایش سرعت و کیفیت خدمات سازمان پس از اجرای هوش مصنوعی.</p>
        </div>
      </div>

      <p>جهت دریافت دریافت مشاوره تخصصی آموزش سازمانی دیجی نورون می‌توانید با شماره <strong>۰۲۱۸۸۲۵۲۴۹۷</strong> تماس حاصل فرمایید.</p>
    `,
    category: "corporate-ai",
    categoryName: "هوش مصنوعی سازمانی",
    author: {
      name: "دکتر محمد کریمی",
      role: "مشاور ارشد تحول دیجیتال",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    date: "۱۹ مرداد ۱۴۰۵",
    readTime: "۸ دقیقه",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop",
    featured: true,
    tags: ["آموزش سازمانی", "تحول دیجیتال", "مدیریت", "اتوماسیون"]
  },
  {
    id: "3",
    slug: "top-10-ai-tools-for-productivity",
    title: "۱۰ ابزار کاربردی هوش مصنوعی که سرعت کار شما را ۵ برابر می‌کند",
    excerpt: "معرفی بهترین ابزارهای تولید متن، تصویر، تحلیل داده و خلاصه‌سازی جلسات برای افزایش بهره‌وری شغلی.",
    content: `
      <h2>معرفی برترین ابزارهای کاربردی AI</h2>
      <p>استفاده از هوش مصنوعی دیگر یک گزینه نیست، بلکه یک ضرورت برای افزایش کارایی است. در این مقاله ۱۰ ابزار قدرتمند را معرفی می‌کنیم که می‌توانید همین امروز از آن‌ها استفاده کنید.</p>
      
      <ul class="list-disc pr-6 space-y-3 my-4">
        <li><strong>ChatGPT 4o & Claude 3.5 Sonnet:</strong> برای تحلیل متون، کدنویسی و خلاصه‌سازی.</li>
        <li><strong>Midjourney v6:</strong> تولید تصاویر شگفت‌انگیز برای گرافیک و تبلیغات.</li>
        <li><strong>Notion AI:</strong> مدیریت پروژه‌ها و مستندسازی هوشمند.</li>
        <li><strong>Otter.ai:</strong> پیاده‌سازی و خلاصه‌سازی خودکار جلسات آنلاین.</li>
        <li><strong>Gamma App:</strong> ساخت پرزنتیشن و اسلاید‌های زیبا در چند ثانیه.</li>
      </ul>
    `,
    category: "tutorials",
    categoryName: "آموزش و ابزارها",
    author: {
      name: "مریم صادقی",
      role: "نویسنده فناوری دیجی نورون",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
    },
    date: "۱۵ مرداد ۱۴۰۵",
    readTime: "۵ دقیقه",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    featured: false,
    tags: ["ابزار هوش مصنوعی", "بهره وری", "پرامپت", "آموزش"]
  },
  {
    id: "4",
    slug: "python-programming-for-teenagers",
    title: "نقشه راه شروع برنامه‌نویسی پایتون برای نوجوانان علاقمند به AI",
    excerpt: "چگونه نوجوانان می‌توانند از صفر پایتون را یاد گرفته و اولین پروژه تشخیص هوشمند تصویر خود را پیاده کنند؟",
    content: `
      <h2>چرا پایتون بهترین زبان برای شروع هوش مصنوعی است؟</h2>
      <p>زبان پایتون به دلیل دستور زبان (Syntax) بسیار ساده و نزدیک به زبان انگلیسی، عالی‌ترین گزینه برای شروع کدنویسی نوجوانان است.</p>
      
      <h3>مراحل یادگیری پایتون:</h3>
      <ol class="list-decimal pr-6 space-y-2 my-4">
        <li>متغیرها، حلقه‌ها و شرط‌ها به زبان ساده</li>
        <li>کار با کتابخانه‌های متنی و کلمات</li>
        <li>آشنایی با کتابخانه OpenCV برای پردازش تصویر</li>
        <li>ساخت پروژه تشخیص لبخند و چهره</li>
      </ol>
    `,
    category: "kids-ai",
    categoryName: "هوش مصنوعی کودکان",
    author: {
      name: "دکتر علی امیری",
      role: "استاد دوره‌های نوجوانان",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    },
    date: "۱۰ مرداد ۱۴۰۵",
    readTime: "۷ دقیقه",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
    featured: false,
    tags: ["پایتون", "نوجوانان", "برنامه نویسی", "پروژه"]
  },
  {
    id: "5",
    slug: "prompt-engineering-best-practices",
    title: "اصول طلایی پرامپت نویسی حرفه‌ای برای مدل‌های بزرگ زبانی",
    excerpt: "چطور با دادن دستورات دقیق و ساختاریافته به هوش مصنوعی، دقیق‌ترین پاسخ‌های ممکن را دریافت کنیم؟",
    content: `
      <h2>فرمول طلایی پرامپت‌نویسی حرفه‌ای</h2>
      <p>نتیجه‌ای که از مدل‌های هوش مصنوعی می‌گیرید، دقیقاً تابعی از کیفیتی است که در ورودی (پرامپت) ارائه می‌دهید.</p>
      
      <div class="p-4 bg-slate-900 border border-cyan-500/40 rounded-lg my-4">
        <h4 class="text-cyan-400 font-bold mb-2">ساختار یک پرامپت کامل:</h4>
        <p class="font-mono text-sm text-gray-300">
          [نقش (Role)] + [تکلیف (Task)] + [بستر (Context)] + [محدودیت (Constraints)] + [قالب خروجی (Output Format)]
        </p>
      </div>
    `,
    category: "tutorials",
    categoryName: "آموزش و ابزارها",
    author: {
      name: "رضا حسینی",
      role: "معمار داده و مهندس پرامپت",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
    },
    date: "۵ مرداد ۱۴۰۵",
    readTime: "۴ دقیقه",
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=800&auto=format&fit=crop",
    featured: false,
    tags: ["پرامپت نویسی", "ChatGPT", "Claude", "تکنیک"]
  },
  {
    id: "6",
    slug: "future-of-ai-in-education-2026",
    title: "آینده آموزش و یادگیری در عصر هوش مصنوعی عامل‌محور (Agentic AI)",
    excerpt: "معلم‌های اختصاصی هوش مصنوعی چطور یادگیری را برای هر دانش‌آموز بر اساس استعداد و سرعت شخصی‌سازی می‌کنند؟",
    content: `
      <h2>عصر ایجنت‌های هوشمند در آموزش</h2>
      <p>ایده آموزش یکسان برای همه رو به پایان است. سیستم‌های نوین هوش مصنوعی آموزشی مانند دیجی نورون با سنجش لحظه‌ای شیوه یادگیری، مسیر آموزشی کاملاً اختصاصی برای هر فرد خلق می‌کنند.</p>
    `,
    category: "trends",
    categoryName: "روندها و اخبار AI",
    author: {
      name: "دکتر محمد کریمی",
      role: "مدیر آکادمی دیجی نورون",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    date: "۱ مرداد ۱۴۰۵",
    readTime: "۶ دقیقه",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop",
    featured: false,
    tags: ["آینده آموزش", "ایجنت هوشمند", "یادگیری شخصی سازی شده"]
  }
];
