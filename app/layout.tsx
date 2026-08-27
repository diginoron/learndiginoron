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
  title: "دیجی نورون | مرکز تخصصی هوشمندسازی سازمانی و آموزش هوش مصنوعی",
  description: "ارائه‌دهنده خدمات هوشمندسازی سازمانی (طراحی هوش مصنوعی، ایجنت‌های سازمانی، اتوماسیون فرآیندها، پیاده‌سازی و انتقال تکنولوژی) و خدمات آموزشی در دو بخش سازمانی و کودکان/نوجوانان. مشاوره: ۰۲۱۸۸۲۵۲۴۹۷",
  keywords: [
    "هوشمندسازی سازمانی", 
    "ایجنت‌های هوش مصنوعی", 
    "اتوماسیون فرآیندها", 
    "انتقال تکنولوژی هوش مصنوعی", 
    "آموزش هوش مصنوعی", 
    "آموزش سازمانی هوش مصنوعی", 
    "آموزش هوش مصنوعی کودکان", 
    "دیجی نورون", 
    "diginoron.com"
  ],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "دیجی نورون - هوشمندسازی سازمانی و آکادمی هوش مصنوعی",
    description: "خدمات تخصصی هوشمندسازی سازمانی، طراحی ایجنت‌های سازمانی، اتوماسیون فرآیندها و آموزش در دو سطح کودکان/نوجوانان و سازمان‌ها. تلفن: ۰۲۱۸۸۲۵۲۴۹۷",
    url: "https://diginoron.com",
    siteName: "DigiNoron Enterprise & Academy",
    locale: "fa_IR",
    type: "website",
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
        <main className="flex-grow pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
