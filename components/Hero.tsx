"use client";

import Link from "next/link";
import { Sparkles, GraduationCap, Building2, Phone, ArrowLeft, ShieldCheck, Award, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-12 pb-24 overflow-hidden">
      {/* Dynamic Glow Accents */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 left-10 w-[30rem] h-[30rem] bg-purple-400/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tag */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-cyan-500/30 text-cyan-800 text-xs sm:text-sm font-semibold shadow-md backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-cyan-600 animate-spin" style={{ animationDuration: '6s' }} />
            <span>پلتفرم تخصصی ارائه خدمات آموزشی هوش مصنوعی | learn.diginoron.com</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight">
            یادگیری کاربردی <span className="text-gradient-cyan">هوش مصنوعی</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            آکادمی دیجی نورون با طراحی مسیرهای آموزشی استاندارد، مهارت‌های کاربردی هوش مصنوعی را برای نسل آینده (کودکان و نوجوانان) و ارتقای بهره‌وری سازمان‌ها و شرکت‌ها ارائه می‌دهد.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/services/kids-and-teens"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-extrabold text-base rounded-2xl shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95"
            >
              <GraduationCap className="w-5 h-5 text-white" />
              <span>آموزش کودکان و نوجوانان</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>

            <Link
              href="/services/corporate"
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 border border-purple-300 font-extrabold text-base rounded-2xl shadow-md flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95"
            >
              <Building2 className="w-5 h-5 text-purple-600" />
              <span>خدمات آموزش سازمانی</span>
              <ArrowLeft className="w-4 h-4 text-purple-600" />
            </Link>

            <a
              href="tel:02188252497"
              className="w-full sm:w-auto px-6 py-4 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 font-bold text-sm rounded-2xl flex items-center justify-center gap-2 transition-all"
            >
              <Phone className="w-4 h-4 text-cyan-600" />
              <span>مشاوره تلفنی: 02188252497</span>
            </a>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">
          
          <div className="glass-panel p-6 rounded-2xl border border-cyan-500/20 flex items-start gap-4 hover:border-cyan-400/50 transition-all">
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-white text-lg mb-1">ویژه کودکان و نوجوانان</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                آموزش بازی‌محور، ساخت ربات‌های تعاملی، پایتون کودکان و تفکر الگوریتمی از پایه.
              </p>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-purple-500/20 flex items-start gap-4 hover:border-purple-400/50 transition-all">
            <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-white text-lg mb-1">آموزش‌های اختصاصی سازمانی</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                اتوماسیون اداری، پرامپت‌نویسی پیشرفته مدیران، هوش مصنوعی مولد و مشاوره تخصصی.
              </p>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-emerald-500/20 flex items-start gap-4 hover:border-emerald-400/50 transition-all">
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-white text-lg mb-1">مدرک معتبر و پروژه عملی</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                گواهینامه رسمی دیجی نورون به همراه پشتیبانی تخصصی و ساخت سبد پروژه‌های واقعی.
              </p>
            </div>
          </div>

        </div>

        {/* Stats counter strip */}
        <div className="mt-16 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-4xl mx-auto backdrop-blur-md">
          <div>
            <div className="text-2xl sm:text-3xl font-black text-cyan-400 dir-ltr">+۱۰,۰۰۰</div>
            <div className="text-xs text-gray-400 mt-1">دانش‌پذیر فعال</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-purple-400 dir-ltr">+۵۰</div>
            <div className="text-xs text-gray-400 mt-1">سازمان و ارگان همکار</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-400 dir-ltr">۱۰۰٪</div>
            <div className="text-xs text-gray-400 mt-1">پروژه‌محور و کاربردی</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-amber-400 dir-ltr">۲۴/۷</div>
            <div className="text-xs text-gray-400 mt-1">پشتیبانی و منتورینگ</div>
          </div>
        </div>

      </div>
    </section>
  );
}
