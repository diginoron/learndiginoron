import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazirmatn",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "دیجی نورون | مرکز تخصصی آموزش هوش مصنوعی (کودکان، نوجوانان و سازمانی)",
  description: "ارائه دهنده جامع‌ترین دوره‌های آموزش هوش مصنوعی برای کودکان و نوجوانان و راهکارهای آموزش سازمانی هوش مصنوعی. learn.diginoron.com - مشاوره: ۰۲۱۸۸۲۵۲۴۹۷",
  keywords: ["هوش مصنوعی", "آموزش هوش مصنوعی کودکان", "هوش مصنوعی سازمانی", "دیجی نورون", "learn.diginoron.com", "برنامه‌نویسی نوجوانان"],
  openGraph: {
    title: "دیجی نورون - مرکز آکادمیک هوش مصنوعی",
    description: "خدمات تخصصی آموزش هوش مصنوعی در سطح کودکان، نوجوانان و سازمان‌ها. شماره تماس: ۰۲۱۸۸۲۵۲۴۹۷",
    url: "https://learn.diginoron.com",
    siteName: "DigiNoron Academy",
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
      <body className="antialiased bg-[#0b0f19] text-gray-100 min-h-screen flex flex-col selection:bg-cyan-500 selection:text-white">
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
