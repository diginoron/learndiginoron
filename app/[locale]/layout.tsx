import type { Metadata } from "next";
import { Vazirmatn, Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Locale, LOCALES, isValidLocale, getDirection, getAlternateUrls, SITE_URL } from "@/lib/i18n";
import { COMMON_TRANSLATIONS } from "@/data/translations/common";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazirmatn",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const t = COMMON_TRANSLATIONS[locale] || COMMON_TRANSLATIONS.en;

  const titles: Record<Locale, string> = {
    en: "DigiNoron | Enterprise AI Transformation & Applied AI Academy",
    fa: "دیجی نورون | هوشمندسازی سازمانی و آموزش کاربردی هوش مصنوعی",
    ar: "ديجي نورون | التحول الذكي للمؤسسات وأكاديمية الذكاء الاصطناعي",
  };

  const descriptions: Record<Locale, string> = {
    en: "DigiNoron is an enterprise AI innovation center specializing in autonomous AI agents, business process automation (BPA), on-premise technology transfer, and applied corporate training. diginoron.com - Phone: +98 21 8825 2497",
    fa: "مرکز تخصصی هوشمندسازی سازمانی، طراحی ایجنت‌های اختصاصی (AI Agents)، اتوماسیون فرآیندها (BPA)، پیاده‌سازی و انتقال تکنولوژی و خدمات آموزشی کودکان و سازمان‌ها. diginoron.com - تلفن: ۰۲۱۸۸۲۵۲۴۹۷",
    ar: "مركز رائد في حلول الذكاء الاصطناعي المؤسسي، تطوير وكلاء الذكاء الاصطناعي (AI Agents)، أتمتة العمليات التجارية (BPA)، النشر المحلي والتدريب الاحترافي للشركات. diginoron.com - هاتف: +982188252497",
  };

  const ogLocales: Record<Locale, string> = {
    en: "en_US",
    fa: "fa_IR",
    ar: "ar_AR",
  };

  const alternates = getAlternateUrls("/");

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: titles[locale],
      template: `%s | ${t.brand.name}`,
    },
    description: descriptions[locale],
    alternates: {
      canonical: alternates.canonical,
      languages: alternates.languages,
    },
    icons: {
      icon: "/logo.png",
      shortcut: "/logo.png",
      apple: "/logo.png",
    },
    openGraph: {
      title: titles[locale],
      description: descriptions[locale],
      url: SITE_URL,
      siteName: t.brand.name,
      locale: ogLocales[locale],
      type: "website",
    },
    verification: {
      google: "luXMvTOvWN9KBZi7aCVTSyxVEPwGFpOFveu1oPLvMFo",
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const dir = getDirection(locale);

  return (
    <html lang={locale} dir={dir} className={`${vazirmatn.variable} ${inter.variable}`}>
      <body className="antialiased bg-slate-50 text-slate-900 min-h-screen flex flex-col selection:bg-cyan-500 selection:text-white">
        <Navbar locale={locale} />
        <main className="flex-grow pt-24 sm:pt-28">
          {children}
        </main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
