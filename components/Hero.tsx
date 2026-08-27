"use client";

import Link from "next/link";
import { Sparkles, GraduationCap, Building2, Phone, ArrowLeft, Bot, Cpu, ShieldCheck, Zap, ArrowRightLeft } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-8 pb-20 overflow-hidden">
      {/* Dynamic Glow Accents */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 left-10 w-[30rem] h-[30rem] bg-indigo-400/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tag Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-cyan-500/30 text-slate-800 text-xs sm:text-sm font-semibold shadow-md backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-cyan-800 font-bold">دیجی نورون:</span>
            <span>مرکز هوشمندسازی سازمانی و آموزش تخصصی هوش مصنوعی</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight">
            هوشمندسازی جامع سازمان‌ها و <br className="hidden sm:inline" />
            <span className="text-gradient-cyan">آموزش کاربردی هوش مصنوعی</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            دیجی نورون ارائه‌دهنده خدمات تخصصی <strong className="text-slate-900 font-bold">طراحی ایجنت‌ها، هوشمندسازی فرآیندها، پیاده‌سازی و انتقال تکنولوژی سازمانی</strong> و همچنین <strong className="text-slate-900 font-bold">خدمات آموزشی نوین</strong> در دو بخش سازمانی و کودکان/نوجوانان است.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/services/enterprise-ai"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-slate-900 via-cyan-900 to-indigo-950 hover:from-slate-800 hover:to-indigo-900 text-white font-black text-base rounded-2xl shadow-xl shadow-cyan-900/20 flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 border border-cyan-400/30"
            >
              <Zap className="w-5 h-5 text-cyan-300 animate-pulse" />
              <span>خدمات هوشمندسازی سازمانی</span>
              <ArrowLeft className="w-4 h-4 text-cyan-300" />
            </Link>

            <Link
              href="/services"
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 font-extrabold text-base rounded-2xl shadow-md flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95"
            >
              <GraduationCap className="w-5 h-5 text-cyan-700" />
              <span>خدمات آموزشی و آکادمی</span>
              <ArrowLeft className="w-4 h-4 text-slate-500" />
            </Link>

            <a
              href="tel:02188252497"
              className="w-full sm:w-auto px-6 py-4 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 font-bold text-sm rounded-2xl flex items-center justify-center gap-2 transition-all"
            >
              <Phone className="w-4 h-4 text-cyan-600" />
              <span>مشاوره: 02188252497</span>
            </a>
          </div>
        </div>

        {/* 3 Core Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto">
          
          {/* Card 1: Enterprise AI (Highest prominence) */}
          <div className="glass-panel p-6 rounded-2xl border-2 border-cyan-500/40 bg-gradient-to-b from-white to-cyan-50/50 flex flex-col justify-between hover:border-cyan-500 transition-all shadow-md relative overflow-hidden group">
            <div className="absolute top-0 left-0 bg-cyan-600 text-white text-[10px] font-black px-3 py-1 rounded-br-xl">
              اولویت سازمانی
            </div>
            <div>
              <div className="p-3 rounded-xl bg-cyan-100 text-cyan-800 w-fit mb-4 mt-2">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-lg mb-2">
                هوشمندسازی و ایجنت‌های سازمانی
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                طراحی ایجنت‌های چندعامله، اتوماسیون فرآیندهای مالی، فروش و منابع انسانی، پیاده‌سازی On-Premise و انتقال کامل تکنولوژی.
              </p>
            </div>
            <Link 
              href="/services/enterprise-ai" 
              className="text-xs font-bold text-cyan-800 hover:text-cyan-900 flex items-center gap-1 pt-2 border-t border-cyan-200/60"
            >
              <span>بررسی خدمات و سناریوها</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 2: Corporate Upskilling */}
          <div className="glass-panel p-6 rounded-2xl border border-purple-200 bg-white flex flex-col justify-between hover:border-purple-400 transition-all shadow-sm group">
            <div>
              <div className="p-3 rounded-xl bg-purple-100 text-purple-700 w-fit mb-4">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-lg mb-2">
                آموزش‌های تخصصی سازمانی
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                مسترکلاس‌های استراتژی هوش مصنوعی مدیران ارشد، کارگاه‌های پرامپت‌نویسی پرسنل و شیوه‌نامه‌های امنیت داده‌های شرکتی.
              </p>
            </div>
            <Link 
              href="/services/corporate" 
              className="text-xs font-bold text-purple-700 hover:text-purple-800 flex items-center gap-1 pt-2 border-t border-slate-100"
            >
              <span>مشاهده دوره‌های سازمانی</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 3: Kids & Teens Academy */}
          <div className="glass-panel p-6 rounded-2xl border border-slate-200 bg-white flex flex-col justify-between hover:border-cyan-400 transition-all shadow-sm group">
            <div>
              <div className="p-3 rounded-xl bg-cyan-100 text-cyan-700 w-fit mb-4">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-lg mb-2">
                آموزش کودکان و نوجوانان
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                آموزش بازی‌محور، ساخت ربات‌های تعاملی، برنامه‌نویسی پایتون کودکان و پرورش تفکر الگوریتمی و سواد هوش مصنوعی.
              </p>
            </div>
            <Link 
              href="/services/kids-and-teens" 
              className="text-xs font-bold text-cyan-700 hover:text-cyan-800 flex items-center gap-1 pt-2 border-t border-slate-100"
            >
              <span>مشاهده آکادمی نوجوانان</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

        {/* Enterprise Stats Counter Strip */}
        <div className="mt-14 bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 text-white border border-slate-800 rounded-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-5xl mx-auto shadow-xl">
          <div>
            <div className="text-2xl sm:text-3xl font-black text-cyan-400 dir-ltr">+۵۰</div>
            <div className="text-xs text-slate-300 mt-1">پروژه و سازمان همکار</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-indigo-300 dir-ltr">+۱۵۰</div>
            <div className="text-xs text-slate-300 mt-1">ایجنت و فرآیند هوشمندسازی شده</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-400 dir-ltr">۱۰۰٪</div>
            <div className="text-xs text-slate-300 mt-1">انتقال دانش و امنیت On-Premise</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-amber-400 dir-ltr">+۱۰,۰۰۰</div>
            <div className="text-xs text-slate-300 mt-1">دانش‌پذیر فعال آکادمی</div>
          </div>
        </div>

      </div>
    </section>
  );
}
