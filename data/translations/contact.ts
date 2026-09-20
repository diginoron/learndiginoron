import { Locale } from "@/lib/i18n";

export interface ContactTranslations {
  metaTitle: string;
  metaDesc: string;
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  infoTitle: string;
  phoneLabel: string;
  phoneValue: string;
  emailLabel: string;
  emailValue: string;
  addressLabel: string;
  addressValue: string;
  hoursLabel: string;
  hoursValue: string;
  form: {
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectOptions: {
      enterprise: string;
      corporate: string;
      kids: string;
      other: string;
    };
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    submittingBtn: string;
    successTitle: string;
    successDesc: string;
    anotherMsgBtn: string;
  };
}

export const CONTACT_TRANSLATIONS: Record<Locale, ContactTranslations> = {
  en: {
    metaTitle: "Contact Us & Consultation | DigiNoron (diginoron.com)",
    metaDesc: "Get in touch with DigiNoron technical advisors for enterprise AI solutions, multi-agent development, corporate workshops, and kids AI academy programs.",
    badge: "Direct Contact with DigiNoron (diginoron.com)",
    title: "Connect with",
    titleHighlight: "DigiNoron",
    subtitle: "Our solution architects and academic advisors are ready to address your inquiries regarding enterprise automation, AI agents, and specialized academy tracks.",
    infoTitle: "Contact Information",
    phoneLabel: "Telephone & Consultations",
    phoneValue: "+98 21 8825 2497",
    emailLabel: "Official Email",
    emailValue: "diginoron@gmail.com",
    addressLabel: "Headquarters & Lab",
    addressValue: "Technology & AI Innovation Center (Remote & On-Premise Delivery)",
    hoursLabel: "Working Hours",
    hoursValue: "Saturday to Wednesday, 8:00 AM to 5:00 PM",
    form: {
      title: "Send an Inquiry or Schedule a Session",
      subtitle: "Complete the form below and our technical advisors will respond within 24 hours.",
      nameLabel: "Full Name / Representative",
      namePlaceholder: "e.g., Alexander Smith",
      phoneLabel: "Phone Number (Required)",
      phonePlaceholder: "+1 234 567 8900",
      emailLabel: "Work Email (Optional)",
      emailPlaceholder: "alex@company.com",
      subjectLabel: "Subject of Interest",
      subjectOptions: {
        enterprise: "1. Enterprise AI Solutions (Roadmap, AI Agents, BPA)",
        corporate: "2. Corporate AI Training & Executive Masterclasses",
        kids: "3. Kids & Teens AI Academy (Ages 8-18)",
        other: "4. General Inquiries & Partnerships",
      },
      messageLabel: "Message & Project Details",
      messagePlaceholder: "Please describe your business requirements or learning objectives...",
      submitBtn: "Send Message",
      submittingBtn: "Sending Message...",
      successTitle: "Message Received Successfully!",
      successDesc: "Thank you for reaching out. Our solution team will contact you shortly.",
      anotherMsgBtn: "Send Another Message",
    },
  },
  fa: {
    metaTitle: "تماس با ما و مشاوره | دیجی نورون (diginoron.com)",
    metaDesc: "ارتباط با مشاورین دیجی نورون جهت استعلام خدمات هوشمندسازی سازمانی، ایجنت‌های هوش مصنوعی و ثبت‌نام دوره‌های آموزشی.",
    badge: "ارتباط مستقیم با دیجی نورون (diginoron.com)",
    title: "تماس با",
    titleHighlight: "دیجی نورون",
    subtitle: "مشاورین ما پاسخگوی تمامی سوالات شما در زمینه هوشمندسازی سازمانی، ایجنت‌ها، دوره‌های آموزشی کودکان، نوجوانان و ارگان‌ها هستند.",
    infoTitle: "اطلاعات تماس مستقیم",
    phoneLabel: "تلفن تماس و مشاوره",
    phoneValue: "۰۲۱۸۸۲۵۲۴۹۷",
    emailLabel: "پست الکترونیکی",
    emailValue: "diginoron@gmail.com",
    addressLabel: "دفتر مرکزی",
    addressValue: "مرکز نوآوری و پارک علم و فناوری (ارائه خدمات حضوری، آنلاین و On-Premise)",
    hoursLabel: "ساعات پاسخگویی",
    hoursValue: "شنبه تا چهارشنبه ۸:۰۰ الی ۱۷:۰۰",
    form: {
      title: "فرم ارسال پیام و درخواست مشاوره",
      subtitle: "اطلاعات خود را وارد کنید تا کارشناسان مربوطه در سریع‌ترین زمان با شما تماس بگیرند.",
      nameLabel: "نام و نام خانوادگی",
      namePlaceholder: "مثال: علی محمدی",
      phoneLabel: "شماره تلفن همراه (ضروری)",
      phonePlaceholder: "۰۹۱۲۳۴۵۶۷۸۹",
      emailLabel: "پست الکترونیکی (اختیاری)",
      emailPlaceholder: "name@example.com",
      subjectLabel: "موضوع مشاوره یا استعلام",
      subjectOptions: {
        enterprise: "۱. خدمات هوشمندسازی سازمانی (سند راهبردی، ایجنت‌ها، فرآیندها)",
        corporate: "۲. آموزش‌های سازمانی و مسترکلاس مدیران",
        kids: "۳. آموزش کودکان و نوجوانان (۸ تا ۱۸ سال)",
        other: "۴. سایر موارد",
      },
      messageLabel: "متن پیام یا توضیحات درخواست",
      messagePlaceholder: "توضیحات تکمیلی یا سوالات خود را بنویسید...",
      submitBtn: "ارسال پیام و استعلام",
      submittingBtn: "در حال ارسال پیام...",
      successTitle: "پیام شما با موفقیت ثبت شد!",
      successDesc: "کارشناسان دیجی نورون در اسرع وقت با شما تماس خواهند گرفت.",
      anotherMsgBtn: "ارسال پیام جدید",
    },
  },
  ar: {
    metaTitle: "التواصل والاستشارات | ديجي نورون (diginoron.com)",
    metaDesc: "تواصل مع مستشاري ديجي نورون التقنيين للاستفسار عن حلول التحول المؤسسي، وكلاء الذكاء الاصطناعي، والبرامج الأكاديمية المتخصصة.",
    badge: "التواصل المباشر مع ديجي نورون (diginoron.com)",
    title: "تواصل مع",
    titleHighlight: "ديجي نورون",
    subtitle: "فريقنا التقني والاستشاري جاهز للإجابة عن كافة استفساراتكم بشأن أتمتة المؤسسات، وكلاء الذكاء الاصطناعي ومسارات التدريب التخصصي.",
    infoTitle: "معلومات الاتصال المباشر",
    phoneLabel: "الهاتف والاستشارات",
    phoneValue: "+98 21 8825 2497",
    emailLabel: "البريد الإلكتروني الرسمي",
    emailValue: "diginoron@gmail.com",
    addressLabel: "المقر الرئيسي والمختبر",
    addressValue: "واحة العلوم والتكنولوجيا والابتكار الرقمي (خدمات حضورية وافتراضية)",
    hoursLabel: "أوقات العمل",
    hoursValue: "السبت إلى الأربعاء: ٨:٠٠ صباحاً حتى ٥:٠٠ مساءً",
    form: {
      title: "إرسال استفسار أو طلب استشارة",
      subtitle: "أدخل بياناتك وسيتواصل معك مهندسو الحلول خلال ٢٤ ساعة.",
      nameLabel: "الاسم الكامل / الممثل",
      namePlaceholder: "مثال: أحمد المنصوري",
      phoneLabel: "رقم الهاتف المحمول (إلزامي)",
      phonePlaceholder: "00989123456789",
      emailLabel: "البريد الإلكتروني (اختياري)",
      emailPlaceholder: "name@company.com",
      subjectLabel: "موضوع الاستفسار",
      subjectOptions: {
        enterprise: "١. حلول الذكاء الاصطناعي للمؤسسات (خريطة الطريق، الوكلاء، BPA)",
        corporate: "٢. التدريب المؤسسي وبرامج الإدارات العليا",
        kids: "٣. أكاديمية الأطفال واليافعين (٨ إلى ١٨ سنة)",
        other: "٤. استفسارات عامة وشراكات",
      },
      messageLabel: "تفاصيل الطلب أو المشروع",
      messagePlaceholder: "اكتب متطلبات مؤسستك أو أسئلتك التقنية هنا...",
      submitBtn: "إرسال الرسالة والاستفسار",
      submittingBtn: "جارٍ إرسال الرسالة...",
      successTitle: "تم استلام رسالتكم بنجاح!",
      successDesc: "سيتواصل معكم فريق ديجي نورون المتخصص في أقرب وقت.",
      anotherMsgBtn: "إرسال رسالة أخرى",
    },
  },
};
