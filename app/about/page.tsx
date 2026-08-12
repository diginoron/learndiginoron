import Link from "next/link";
import Image from "next/image";
import { Sparkles, GraduationCap, Building2, ShieldCheck, Award, Phone, Users, CheckCircle2 } from "lucide-react";
import ContactTeaser from "@/components/ContactTeaser";

export default function AboutPage() {
  return (
    <div className="py-12 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-800 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>درباره آکادمی دیجی نورون (learn.diginoron.com)</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-900">
          پیشگام در ارائه <span className="text-gradient-cyan">خدمات آموزشی هوش مصنوعی</span>
        </h1>

        <p className="text-sm text-slate-600 leading-relaxed">
          ما با هدف آماده‌سازی افراد و سازمان‌ها برای زیست در دنیای هوش مصنوعی، دو محور اصلی «کودکان و نوجوانان» و «ارتقای هوشمند سازمانی» را در دستور کار قرار داده‌ایم.
        </p>
      </div>

      {/* Main Narrative */}
      <div className="glass-panel bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 space-y-8 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">ماموریت دیجی نورون</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              دیجی نورون (DigiNoron) به عنوان یکی از پیشگامان تحول دیجیتال در کشور، سامانه آکادمیک خود را با دامنه اختصاصی <span className="text-cyan-700 font-mono">learn.diginoron.com</span> جهت ارتقای سطح سواد و مهارت‌های هوش مصنوعی ایجاد نموده است.
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              با توجه به اهمیت فزاینده تکنولوژی‌های هوشمند، ما باور داریم که آموزش هوش مصنوعی نباید تنها به دانشجویان یا متخصصین دانشگاهی محدود شود؛ بلکه کودکان و نوجوانان از سنین پایه باید مفهوم الگوریتم را درک کنند و سازمان‌ها برای پایداری در بازار به اتوماسیون هوشمند مجهز شوند.
            </p>
          </div>

          <div className="relative h-64 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop"
              alt="تیم دیجی نورون"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

        </div>

        {/* 2 Core Tracks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
          <div className="p-6 bg-slate-50 rounded-2xl border border-cyan-200 space-y-3">
            <div className="flex items-center gap-2 text-cyan-700 font-bold text-sm">
              <GraduationCap className="w-5 h-5" />
              <span>محور اول: کودکان و نوجوانان</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              آموزش بازی‌محور، ساخت ربات‌های پردازش تصویر، پایتون کودکان و پرورش تفکر منطقی برای سنین ۸ تا ۱۸ سال.
            </p>
          </div>

          <div className="p-6 bg-slate-50 rounded-2xl border border-purple-200 space-y-3">
            <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
              <Building2 className="w-5 h-5" />
              <span>محور دوم: آموزش‌های سازمانی</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              برگزاری مسترکلاس‌های مدیران، پرامپت‌نویسی پیشرفته، اتوماسیون فرایندها و دستیارهای هوشمند اختصاصی شرکت‌ها.
            </p>
          </div>
        </div>
      </div>

      <ContactTeaser />

    </div>
  );
}
