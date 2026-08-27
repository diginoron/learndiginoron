import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazirmatn",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://ai.diginoron.com"),
  title: "دیجی نورون | هوشمندسازی سازمانی و آموزش کاربردی هوش مصنوعی",
  description: "مرکز تخصصی هوشمندسازی سازمانی، طراحی ایجنت‌های اختصاصی (AI Agents)، اتوماسیون فرآیندها (BPA)، پیاده‌سازی و انتقال تکنولوژی و خدمات آموزشی کودکان و سازمان‌ها. ai.diginoron.com - تلفن: ۰۲۱۸۸۲۵۲۴۹۷",
  keywords: [
    "هوشمندسازی سازمانی", 
    "ایجنت‌های هوش مصنوعی", 
    "اتوماسیون فرآیندها", 
    "انتقال تکنولوژی هوش مصنوعی", 
    "آموزش هوش مصنوعی", 
    "آموزش سازمانی هوش مصنوعی", 
    "آموزش هوش مصنوعی کودکان", 
    "دیجی نورون", 
    "ai.diginoron.com"
  ],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "دیجی نورون - هوشمندسازی سازمانی و آموزش هوش مصنوعی",
    description: "خدمات تخصصی هوشمندسازی سازمانی، طراحی ایجنت‌های سازمانی، اتوماسیون فرآیندها و خدمات آموزشی. تلفن: ۰۲۱۸۸۲۵۲۴۹۷",
    url: "https://ai.diginoron.com",
    siteName: "DigiNoron AI",
    locale: "fa_IR",
    type: "website",
  },
  verification: {
    google: "luXMvTOvWN9KBZi7aCVTSyxVEPwGFpOFveu1oPLvMFo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body className="antialiased bg-slate-50 text-slate-900 min-h-screen flex flex-col selection:bg-cyan-500 selection:text-white">
        <Navbar />
        <main className="flex-grow pt-24 sm:pt-28">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
