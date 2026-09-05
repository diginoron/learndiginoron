import Link from "next/link";
import Image from "next/image";
import { Sparkles, GraduationCap, Building2, ShieldCheck, Award, Phone, Users, CheckCircle2, Bot, Cpu } from "lucide-react";
import ContactTeaser from "@/components/ContactTeaser";

export const metadata = {
  title: "درباره ما | دیجی نورون (ai.diginoron.com)",
  description: "آشنایی با تاریخچه، ماموریت و اهداف دیجی نورون در حوزه هوشمندسازی سازمانی و آموزش کاربردی هوش مصنوعی.",
};

export default function AboutPage() {
  return (
    <div className="py-8 sm:py-12 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-800 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>درباره دیجی نورون (ai.diginoron.com)</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
          پیشگام در <span className="text-gradient-cyan">هوشمندسازی سازمانی</span> و آموزش هوش مصنوعی
        </h1>

        <p className="text-sm text-slate-600 leading-relaxed">
          ما با هدف آماده‌سازی افراد و سازمان‌ها برای زیست و رقابت در عصر هوش مصنوعی، دو محور اصلی «خدمات هوشمندسازی سازمانی» و «خدمات آموزشی» را در دستور کار قرار داده‌ایم.
        </p>
      </div>

      {/* Main Narrative */}
      <div className="glass-panel bg-white p-6 sm:p-12 rounded-3xl border border-slate-200 space-y-8 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">ماموریت و چشم‌انداز دیجی نورون</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              دیجی نورون (DigiNoron) به عنوان یکی از پیشگامان تحول دیجیتال در کشور، بستر تخصصی خود را با دامنه اختصاصی <span className="text-cyan-700 font-mono font-bold">ai.diginoron.com</span> جهت ارائه خدمات مهندسی هوش مصنوعی، استقرار ایجنت‌های سازمانی و ارتقای سطح سواد و مهارت‌های هوش مصنوعی ایجاد نموده است.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              با توجه به اهمیت فزاینده تکنولوژی‌های هوشمند، ما باور داریم که بهره‌گیری از هوش مصنوعی نباید تنها به پروژه‌های تئوریک محدود شود؛ بلکه شرکت‌ها برای بقا و سودآوری باید فرآیندهای خود را هوشمند کنند و کودکان و نوجوانان از سنین پایه باید تفکر الگوریتمی و سواد هوش مصنوعی را فراگیرند.
            </p>
          </div>

          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <Image
              src="/images/courses/enterprise-automation.jpg"
              alt="تیم دیجی نورون"
              fill
              className="object-cover"
            />
          </div>

        </div>

        {/* 2 Core Tracks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
          <div className="p-6 bg-slate-50 rounded-2xl border border-cyan-200 space-y-3">
            <div className="flex items-center gap-2 text-cyan-700 font-bold text-sm">
              <Bot className="w-5 h-5" />
              <span>محور اول: هوشمندسازی سازمانی</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              طراحی ایجنت‌های چندعامله، اتوماسیون هوشمند فرآیندهای مالی، فروش و اداری، پیاده‌سازی On-Premise و انتقال کامل تکنولوژی.
            </p>
          </div>

          <div className="p-6 bg-slate-50 rounded-2xl border border-purple-200 space-y-3">
            <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
              <GraduationCap className="w-5 h-5" />
              <span>محور دوم: خدمات آموزشی (سازمانی و کودکان)</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              برگزاری مسترکلاس‌های مدیران ارشد، پرامپت‌نویسی پرسنل و آموزش پایتون و هوش مصنوعی بازی‌محور کودکان و نوجوانان.
            </p>
          </div>
        </div>
      </div>

      <ContactTeaser />

    </div>
  );
}
