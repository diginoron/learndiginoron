"use client";

import Link from "next/link";
import { GraduationCap, Building2, Check, ArrowLeft, Brain, Cpu, Bot, Rocket, Shield, Users } from "lucide-react";

export default function ServicesOverview() {
  return (
    <section className="py-20 relative bg-slate-950/60 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
            <Brain className="w-3.5 h-3.5" />
            <span>خدمات تخصصی آکادمی دیجی نورون</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            دو مسیر تخصصی برای ارائه <span className="text-gradient-cyan">خدمات آموزشی هوش مصنوعی</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            ما در آکادمی دیجی نورون دوره‌ها و برنامه‌های آموزشی را متناسب با نیاز گروه هدف در دو حوزه اصلی زیر طراحی و ارائه می‌کنیم:
          </p>
        </div>

        {/* 2 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Track 1: Kids & Teens */}
          <div className="glass-panel p-8 rounded-3xl border border-cyan-500/30 relative overflow-hidden group hover:border-cyan-400 transition-all duration-300 shadow-xl flex flex-col justify-between">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/40 text-cyan-400">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <span className="px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/30 text-xs font-bold">
                  سطح کودکان و نوجوانان (۸ تا ۱۸ سال)
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                آموزش هوش مصنوعی کودکان و نوجوانان
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                پرورش استعداد، الگوریتم‌خوانی و کدنویسی کاربردی برای نسل آینده با متدولوژی بازی‌محور و پروژه‌های ملموس.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-cyan-500/20 text-cyan-400 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-100">تفکر الگوریتمی و سواد هوش مصنوعی</h4>
                    <p className="text-xs text-gray-400">شناخت چگونگی یادگیری ماشین و تفکیک شایعات از واقعیت علمی AI.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-cyan-500/20 text-cyan-400 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-100">پایتون هوشمند و ساخت بازی</h4>
                    <p className="text-xs text-gray-400">برنامه‌نویسی مقدماتی تا پیشرفته با تمرکز بر پردازش تصویر و الگوریتم‌ها.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-cyan-500/20 text-cyan-400 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-100">ساخت دستیارهای هوشمند خانگی</h4>
                    <p className="text-xs text-gray-400">آموزش مدل‌های تشخیص چهره، صدا و ساخت چت‌بات‌های اختصاصی دانش‌آموز.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800">
              <Link
                href="/services/kids-and-teens"
                className="w-full py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-extrabold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/20"
              >
                <span>مشاهده کامل خدمات کودکان و نوجوانان</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>

          </div>

          {/* Track 2: Corporate */}
          <div className="glass-panel p-8 rounded-3xl border border-purple-500/30 relative overflow-hidden group hover:border-purple-400 transition-all duration-300 shadow-xl flex flex-col justify-between">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/40 text-purple-400">
                  <Building2 className="w-8 h-8" />
                </div>
                <span className="px-3 py-1 rounded-full bg-purple-950 text-purple-300 border border-purple-500/30 text-xs font-bold">
                  سطح سازمانی و ارگان‌ها
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                آموزش‌های سازمانی هوش مصنوعی
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                توانمندسازی تیم‌ها و مدیران ارشد جهت اتوماسیون هوشمند فرایندها، تحلیل داده‌ها و افزایش ۵ برابری بهره‌وری.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-purple-500/20 text-purple-400 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-100">استراتژی AI برای مدیران ارشد</h4>
                    <p className="text-xs text-gray-400">تدوین نقشه راه تحول هوشمند کسب‌وکار و بازتعریف مدل‌های درآمدی.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-purple-500/20 text-purple-400 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-100">کارگاه‌های عملی پرامپت‌نویسی تیم‌ها</h4>
                    <p className="text-xs text-gray-400">آموزش کار با LLMها، دستیارهای اداری و خلاصه‌سازی گزارشات سازمانی.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-purple-500/20 text-purple-400 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-100">امنیت داده و رعایت مقررات حریم خصوصی</h4>
                    <p className="text-xs text-gray-400">شیوه‌نامه استفاده امن از ابزارهای هوش مصنوعی در محیط‌های اداری حساس.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800">
              <Link
                href="/services/corporate"
                className="w-full py-3.5 bg-purple-900/80 hover:bg-purple-800 text-white font-extrabold rounded-xl flex items-center justify-center gap-2 transition-all border border-purple-500/40 shadow-lg shadow-purple-950/50"
              >
                <span>مشاهده کامل خدمات سازمانی و مشاوره</span>
                <ArrowLeft className="w-4 h-4 text-purple-300" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
