import Link from "next/link";
import Image from "next/image";
import { 
  Phone, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Building2, 
  Bot, 
  Cpu, 
  GitBranch, 
  ArrowRightLeft, 
  Zap, 
  Compass, 
  Award,
  BookOpen
} from "lucide-react";
import { Locale, getDirection, getLocalizedPath } from "@/lib/i18n";
import { COMMON_TRANSLATIONS } from "@/data/translations/common";
import LanguageSwitcher from "@/components/LanguageSwitcher";

interface FooterProps {
  locale?: Locale;
}

export default function Footer({ locale = "en" }: FooterProps) {
  const t = COMMON_TRANSLATIONS[locale] || COMMON_TRANSLATIONS.en;
  const isLtr = getDirection(locale) === "ltr";

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 text-sm relative overflow-hidden">
      {/* Background Neon Orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-slate-800 border border-cyan-500/30 shadow-xs">
                <Image
                  src="/logo.png"
                  alt={t.brand.name}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white">{t.brand.name}</h3>
                <p className="text-xs text-cyan-400 font-mono">diginoron.com</p>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-slate-400">
              {t.footer.aboutDiginoronDesc}
            </p>

            <div className="pt-2">
              <Link 
                href={getLocalizedPath("/services/enterprise-ai", locale)}
                className="text-xs text-cyan-300 hover:text-white inline-flex items-center gap-1.5 bg-slate-800/80 px-3 py-2 rounded-xl border border-cyan-500/30 transition-colors shadow-xs"
              >
                <Zap className="w-3.5 h-3.5 text-cyan-400" />
                <span>{t.nav.freeConsultationBtn}</span>
              </Link>
            </div>
          </div>

          {/* Col 2: Enterprise AI Services */}
          <div className="space-y-3">
            <h4 className={`font-bold text-white text-base ${isLtr ? "border-l-2 pl-3" : "border-r-2 pr-3"} border-cyan-500`}>
              {t.footer.servicesTitle}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link 
                  href={getLocalizedPath("/services/enterprise-ai#blueprint", locale)} 
                  className="hover:text-cyan-300 transition-colors flex items-center gap-2 text-amber-300"
                >
                  <Compass className="w-3.5 h-3.5 text-amber-400" />
                  <span>{locale === "en" ? "Strategic AI Roadmap (APQC)" : locale === "fa" ? "طراحی سند راهبردی هوشمندسازی (APQC)" : "خريطة طريق التحول الذكي (APQC)"}</span>
                </Link>
              </li>
              <li>
                <Link 
                  href={getLocalizedPath("/services/enterprise-ai#ai-agents", locale)} 
                  className="hover:text-cyan-300 transition-colors flex items-center gap-2"
                >
                  <Bot className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{locale === "en" ? "Autonomous AI Agents" : locale === "fa" ? "طراحی هوش مصنوعی و ایجنت‌های سازمانی" : "وكلاء الذكاء الاصطناعي للمؤسسات"}</span>
                </Link>
              </li>
              <li>
                <Link 
                  href={getLocalizedPath("/services/enterprise-ai#process-automation", locale)} 
                  className="hover:text-cyan-300 transition-colors flex items-center gap-2"
                >
                  <Cpu className="w-3.5 h-3.5 text-blue-400" />
                  <span>{locale === "en" ? "Process Automation (BPA)" : locale === "fa" ? "هوشمندسازی و اتوماسیون فرآیندها (BPA)" : "أتمتة العمليات التجارية (BPA)"}</span>
                </Link>
              </li>
              <li>
                <Link 
                  href={getLocalizedPath("/services/enterprise-ai#implementation", locale)} 
                  className="hover:text-cyan-300 transition-colors flex items-center gap-2"
                >
                  <GitBranch className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{locale === "en" ? "Deployment & Modernization" : locale === "fa" ? "پیاده‌سازی، یکپارچه‌سازی و به‌روزرسانی" : "النشر والتكامل وتحديث الأنظمة"}</span>
                </Link>
              </li>
              <li>
                <Link 
                  href={getLocalizedPath("/services/enterprise-ai#tech-transfer", locale)} 
                  className="hover:text-cyan-300 transition-colors flex items-center gap-2"
                >
                  <ArrowRightLeft className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{locale === "en" ? "Technology & IP Transfer" : locale === "fa" ? "انتقال تکنولوژی و سورس‌کد به سازمان" : "نقل التكنولوجيا والشيفرة المصدرية"}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Academy & Programs */}
          <div className="space-y-3">
            <h4 className={`font-bold text-white text-base ${isLtr ? "border-l-2 pl-3" : "border-r-2 pr-3"} border-cyan-500`}>
              {t.nav.academyDropdown}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link 
                  href={getLocalizedPath("/services/corporate", locale)} 
                  className="hover:text-cyan-300 transition-colors flex items-center gap-2"
                >
                  <Building2 className="w-3.5 h-3.5 text-purple-400" />
                  <span>{t.nav.corporateTraining}</span>
                </Link>
              </li>
              <li>
                <Link 
                  href={getLocalizedPath("/services/kids-and-teens", locale)} 
                  className="hover:text-cyan-300 transition-colors flex items-center gap-2"
                >
                  <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{t.nav.kidsAndTeens}</span>
                </Link>
              </li>
              <li>
                <Link 
                  href={getLocalizedPath("/services/held-courses", locale)} 
                  className="hover:text-cyan-300 transition-colors flex items-center gap-2"
                >
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>{t.nav.heldCourses}</span>
                </Link>
              </li>
              <li>
                <Link 
                  href={getLocalizedPath("/courses", locale)} 
                  className="hover:text-cyan-300 transition-colors flex items-center gap-2"
                >
                  <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                  <span>{t.nav.courses}</span>
                </Link>
              </li>
              <li>
                <Link 
                  href={getLocalizedPath("/blog", locale)} 
                  className="hover:text-cyan-300 transition-colors flex items-center gap-2"
                >
                  <span>• {t.nav.blog}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Language */}
          <div className="space-y-3">
            <h4 className={`font-bold text-white text-base ${isLtr ? "border-l-2 pl-3" : "border-r-2 pr-3"} border-cyan-500`}>
              {t.footer.contactTitle}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{t.footer.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a 
                  href={`tel:${t.brand.phoneNumber.replace(/[^0-9+]/g, "")}`} 
                  className="text-white hover:text-cyan-300 font-mono font-bold"
                  dir="ltr"
                >
                  {t.brand.phoneNumber}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`mailto:${t.footer.email}`} className="hover:text-cyan-300 font-mono">
                  {t.footer.email}
                </a>
              </li>
            </ul>

            <div className="pt-3">
              <LanguageSwitcher currentLocale={locale} variant="footer" />
            </div>

            {/* Enamad Trust Badge */}
            <div className="pt-3 border-t border-slate-800/80 flex items-center gap-3">
              <div 
                className="bg-white p-1.5 rounded-xl shadow-md border border-slate-700/60 hover:scale-105 transition-transform shrink-0 flex items-center justify-center min-w-[75px]"
                dangerouslySetInnerHTML={{
                  __html: `<a referrerpolicy="origin" target="_blank" href="https://trustseal.enamad.ir/?id=734879&Code=OfP1ZbpY82ZYoLwbOaTBNfiJBdDY5uRA"><img referrerpolicy="origin" src="https://trustseal.enamad.ir/logo.aspx?id=734879&Code=OfP1ZbpY82ZYoLwbOaTBNfiJBdDY5uRA" alt="${locale === 'en' ? 'Electronic Trust Seal - DigiNoron' : locale === 'fa' ? 'نماد اعتماد الکترونیکی دیجی نورون' : 'رمز الثقة الإلكترونية ديجي نورون'}" style="cursor:pointer;width:75px;height:auto" code="OfP1ZbpY82ZYoLwbOaTBNfiJBdDY5uRA"></a>`
                }}
              />
              <div className="text-xs text-slate-300">
                <span className="font-bold text-white block">
                  {locale === "en" ? "Electronic Trust Seal (Enamad)" : locale === "fa" ? "نماد اعتماد الکترونیکی" : "رمز الثقة الإلكترونية"}
                </span>
                <span className="text-[11px] text-slate-400">
                  {locale === "en" ? "Verified Business Credential" : locale === "fa" ? "تأیید هویت و صلاحیت کسب‌وکار" : "توثيق هوية واعتماد المؤسسة"}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>{t.footer.rightsReserved}</p>
          <div className="flex items-center gap-6">
            <Link href={getLocalizedPath("/about", locale)} className="hover:text-slate-400 transition-colors">
              {t.nav.about}
            </Link>
            <Link href={getLocalizedPath("/contact", locale)} className="hover:text-slate-400 transition-colors">
              {t.nav.contact}
            </Link>
            <Link href={getLocalizedPath("/services", locale)} className="hover:text-slate-400 transition-colors">
              {t.nav.servicesDropdown}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
