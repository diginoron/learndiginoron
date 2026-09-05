"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Phone, 
  ChevronDown, 
  Menu, 
  X, 
  GraduationCap, 
  Building2, 
  BookOpen, 
  MessageSquare,
  Home,
  Info,
  Bot,
  Cpu,
  GitBranch,
  ArrowRightLeft,
  Zap,
  Compass,
  Award
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [enterpriseDropdownOpen, setEnterpriseDropdownOpen] = useState(false);
  const [educationDropdownOpen, setEducationDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm py-1.5"
          : "bg-white/90 backdrop-blur-sm border-b border-slate-100 py-2 sm:py-2.5"
      }`}
    >
      {/* Top Banner Contact Line */}
      <div className="hidden lg:block bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 text-slate-200 text-[11px] py-1 px-4 mb-1.5 rounded-b-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 font-medium">
            <span className="flex h-1.5 w-1.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500"></span>
            </span>
            <span className="text-cyan-300 font-bold">دیجی نورون (ai.diginoron.com):</span>
            <span className="text-slate-300">طراحی سند راهبردی، هوشمندسازی سازمانی و آکادمی هوش مصنوعی</span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="tel:02188252497"
              className="flex items-center gap-1.5 text-cyan-300 hover:text-white transition-colors font-bold text-xs"
            >
              <Phone className="w-3 h-3 text-cyan-400" />
              <span>مشاوره و استعلام:</span>
              <span className="tracking-widest font-mono text-white font-bold">02188252497</span>
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400 text-[10px]">شنبه تا چهارشنبه ۸ الی ۱۷</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-11 sm:h-12">
          
          {/* Logo Section - Clean, just logo & name */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="relative flex items-center justify-center p-1.5 rounded-xl bg-slate-50 border border-slate-200 group-hover:border-cyan-400 transition-all shadow-sm">
              <Image
                src="/logo.png"
                alt="دیجی نورون"
                width={28}
                height={28}
                className="object-contain"
                priority
              />
            </div>
            <span className="font-black text-base sm:text-lg tracking-tight text-slate-900 group-hover:text-cyan-700 transition-colors">
              دیجی نورون
            </span>
          </Link>

          {/* Desktop Navigation Links - Compact & Sleek */}
          <nav className="hidden md:flex items-center gap-1 text-[13px]">
            <Link
              href="/"
              className="px-2.5 py-1.5 font-medium text-slate-700 hover:text-cyan-700 hover:bg-slate-50 rounded-lg transition-colors flex items-center gap-1"
            >
              <Home className="w-3.5 h-3.5 text-slate-400" />
              <span>صفحه اصلی</span>
            </Link>

            {/* 1. Enterprise AI Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setEnterpriseDropdownOpen(true)}
              onMouseLeave={() => setEnterpriseDropdownOpen(false)}
            >
              <Link
                href="/services/enterprise-ai"
                className="px-2.5 py-1.5 font-bold text-cyan-900 bg-cyan-50/80 border border-cyan-200/80 hover:bg-cyan-100/80 rounded-lg transition-all flex items-center gap-1 group"
              >
                <Zap className="w-3.5 h-3.5 text-cyan-600" />
                <span>هوشمندسازی سازمانی</span>
                <ChevronDown className={`w-3 h-3 text-cyan-600 transition-transform duration-200 ${enterpriseDropdownOpen ? "rotate-180" : ""}`} />
              </Link>

              {/* Compact Enterprise Dropdown Menu */}
              {enterpriseDropdownOpen && (
                <div className="absolute top-full right-0 pt-1.5 w-84 sm:w-96 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="p-2 bg-white border border-slate-200 rounded-xl shadow-xl backdrop-blur-xl">
                    <div className="px-2.5 py-1.5 bg-slate-900 text-white rounded-lg mb-1.5 flex items-center justify-between text-[11px]">
                      <span className="font-bold text-cyan-300">خدمات جامع هوشمندسازی سازمانی</span>
                      <span className="text-[9px] text-slate-400 font-mono">B2B Solutions</span>
                    </div>

                    <div className="space-y-0.5 text-xs">
                      {/* Service 1: Strategic Blueprint */}
                      <Link
                        href="/services/enterprise-ai#blueprint"
                        className="flex items-center gap-2 p-2 hover:bg-amber-50 rounded-lg transition-colors group"
                      >
                        <Compass className="w-4 h-4 text-amber-600 shrink-0" />
                        <div>
                          <div className="font-bold text-slate-900 group-hover:text-amber-800 text-[12px] flex items-center gap-1.5">
                            <span>طراحی سند راهبردی هوشمندسازی</span>
                            <span className="text-[9px] px-1 rounded bg-amber-100 text-amber-800">APQC</span>
                          </div>
                          <div className="text-[10px] text-slate-500">تحلیل ساختار، سنجش آمادگی و اطلس بهبود هوش مصنوعی</div>
                        </div>
                      </Link>

                      {/* Service 2: AI Agents */}
                      <Link
                        href="/services/enterprise-ai#ai-agents"
                        className="flex items-center gap-2 p-2 hover:bg-cyan-50 rounded-lg transition-colors group"
                      >
                        <Bot className="w-4 h-4 text-cyan-600 shrink-0" />
                        <div>
                          <div className="font-bold text-slate-800 group-hover:text-cyan-800 text-[12px]">
                            طراحی هوش مصنوعی و ایجنت‌ها
                          </div>
                          <div className="text-[10px] text-slate-500">ایجنت‌های چندعامله و دستیارهای سازمانی RAG</div>
                        </div>
                      </Link>

                      {/* Service 3: Process Automation */}
                      <Link
                        href="/services/enterprise-ai#process-automation"
                        className="flex items-center gap-2 p-2 hover:bg-blue-50 rounded-lg transition-colors group"
                      >
                        <Cpu className="w-4 h-4 text-blue-600 shrink-0" />
                        <div>
                          <div className="font-bold text-slate-800 group-hover:text-blue-800 text-[12px]">
                            هوشمندسازی فرآیندها (BPA)
                          </div>
                          <div className="text-[10px] text-slate-500">اتوماسیون مالی، اداری، فروش و منابع انسانی</div>
                        </div>
                      </Link>

                      {/* Service 4: Implementation */}
                      <Link
                        href="/services/enterprise-ai#implementation"
                        className="flex items-center gap-2 p-2 hover:bg-indigo-50 rounded-lg transition-colors group"
                      >
                        <GitBranch className="w-4 h-4 text-indigo-600 shrink-0" />
                        <div>
                          <div className="font-bold text-slate-800 group-hover:text-indigo-800 text-[12px]">
                            پیاده‌سازی و به‌روزرسانی زیرساخت
                          </div>
                          <div className="text-[10px] text-slate-500">استقرار On-Premise و اتصال به ERPها</div>
                        </div>
                      </Link>

                      {/* Service 5: Tech Transfer */}
                      <Link
                        href="/services/enterprise-ai#tech-transfer"
                        className="flex items-center gap-2 p-2 hover:bg-emerald-50 rounded-lg transition-colors group"
                      >
                        <ArrowRightLeft className="w-4 h-4 text-emerald-600 shrink-0" />
                        <div>
                          <div className="font-bold text-slate-800 group-hover:text-emerald-800 text-[12px]">
                            انتقال تکنولوژی و دانش فنی
                          </div>
                          <div className="text-[10px] text-slate-500">تحویل سورس‌کدها و استقلال تیم داخلی</div>
                        </div>
                      </Link>
                    </div>

                    <div className="mt-1 pt-1.5 border-t border-slate-100 px-1 flex items-center justify-between text-[11px]">
                      <Link 
                        href="/services/enterprise-ai" 
                        className="font-bold text-cyan-700 hover:underline flex items-center gap-0.5"
                      >
                        <span>صفحه کامل هوشمندسازی</span>
                        <ChevronDown className="w-3 h-3 -rotate-90" />
                      </Link>
                      <a href="tel:02188252497" className="text-slate-600 font-mono font-bold">02188252497</a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 2. Educational Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setEducationDropdownOpen(true)}
              onMouseLeave={() => setEducationDropdownOpen(false)}
            >
              <Link
                href="/services"
                className="px-2.5 py-1.5 font-medium text-slate-700 hover:text-cyan-700 hover:bg-slate-50 rounded-lg transition-colors flex items-center gap-1"
              >
                <span>خدمات آموزشی</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${educationDropdownOpen ? "rotate-180 text-cyan-600" : "text-slate-400"}`} />
              </Link>

              {/* Education Dropdown Menu */}
              {educationDropdownOpen && (
                <div className="absolute top-full right-0 pt-1.5 w-72 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="p-2 bg-white border border-slate-200 rounded-xl shadow-xl backdrop-blur-xl">
                    <div className="px-2.5 py-1 text-[11px] font-bold text-cyan-800 bg-cyan-50 rounded-md mb-1.5 flex items-center justify-between">
                      <span>دپارتمان‌های آموزشی</span>
                    </div>

                    <div className="space-y-0.5">
                      <Link
                        href="/services/corporate"
                        className="flex items-center gap-2.5 p-2 hover:bg-purple-50 rounded-lg transition-colors group"
                      >
                        <Building2 className="w-4 h-4 text-purple-600 shrink-0" />
                        <div>
                          <div className="font-bold text-[12px] text-slate-800 group-hover:text-purple-700">
                            آموزش‌های سازمانی
                          </div>
                          <div className="text-[10px] text-slate-500">مسترکلاس مدیران و پرامپت‌نویسی پرسنل</div>
                        </div>
                      </Link>

                      <Link
                        href="/services/kids-and-teens"
                        className="flex items-center gap-2.5 p-2 hover:bg-cyan-50 rounded-lg transition-colors group"
                      >
                        <GraduationCap className="w-4 h-4 text-cyan-600 shrink-0" />
                        <div>
                          <div className="font-bold text-[12px] text-slate-800 group-hover:text-cyan-700">
                            کودکان و نوجوانان
                          </div>
                          <div className="text-[10px] text-slate-500">پایتون، تفکر الگوریتمی و رباتیک (۸-۱۸ سال)</div>
                        </div>
                      </Link>

                      <Link
                        href="/services/held-courses"
                        className="flex items-center gap-2.5 p-2 hover:bg-amber-50 rounded-lg transition-colors group"
                      >
                        <Award className="w-4 h-4 text-amber-600 shrink-0" />
                        <div>
                          <div className="font-bold text-[12px] text-slate-800 group-hover:text-amber-700 flex items-center gap-1.5">
                            <span>دوره‌های برگزار شده</span>
                            <span className="px-1.5 py-0.5 bg-amber-100 text-amber-800 text-[9px] rounded font-bold">جدید</span>
                          </div>
                          <div className="text-[10px] text-slate-500">سوابق کارگاه‌های تخصصی و رویدادها</div>
                        </div>
                      </Link>
                    </div>

                    <div className="mt-1 pt-1.5 border-t border-slate-100 px-1">
                      <Link 
                        href="/courses" 
                        className="flex items-center justify-between p-1.5 text-[11px] font-bold text-slate-700 hover:text-cyan-700 rounded-md"
                      >
                        <span className="flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5 text-cyan-600" />
                          <span>مشاهده تمامی دوره‌ها</span>
                        </span>
                        <ChevronDown className="w-3 h-3 -rotate-90" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>


            <Link
              href="/blog"
              className="px-2.5 py-1.5 font-medium text-slate-700 hover:text-cyan-700 hover:bg-slate-50 rounded-lg transition-colors"
            >
              <span>مقالات</span>
            </Link>

            <Link
              href="/about"
              className="px-2.5 py-1.5 font-medium text-slate-700 hover:text-cyan-700 hover:bg-slate-50 rounded-lg transition-colors"
            >
              <span>درباره ما</span>
            </Link>

            <Link
              href="/contact"
              className="px-2.5 py-1.5 font-medium text-slate-700 hover:text-cyan-700 hover:bg-slate-50 rounded-lg transition-colors"
            >
              <span>تماس</span>
            </Link>
          </nav>

          {/* Action Button */}
          <div className="hidden lg:flex items-center gap-2.5">
            <Link
              href="/services/enterprise-ai"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white bg-slate-900 hover:bg-cyan-900 rounded-lg shadow-sm transition-all border border-slate-700"
            >
              <Bot className="w-3.5 h-3.5 text-cyan-300" />
              <span>هوشمندسازی سازمانی</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="tel:02188252497"
              className="px-2 py-1 rounded-lg bg-cyan-100 text-cyan-800 border border-cyan-300 text-xs font-bold flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-700" />
              <span className="font-mono">02188252497</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
              aria-label="باز کردن منو"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation - Compact & Clean */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-4 pt-2 pb-5 space-y-2 animate-in slide-in-from-top-2 duration-200 shadow-xl max-h-[82vh] overflow-y-auto">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-2 text-slate-800 hover:bg-slate-50 rounded-lg text-xs font-bold"
          >
            <Home className="w-4 h-4 text-cyan-600" />
            <span>صفحه اصلی</span>
          </Link>

          {/* Mobile: Enterprise AI Section */}
          <div className="border-t border-slate-100 pt-1.5 space-y-0.5">
            <div className="px-3 py-1 text-[11px] font-bold text-cyan-900 bg-cyan-50 rounded-md flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-cyan-600" />
              <span>خدمات هوشمندسازی سازمانی</span>
            </div>
            
            <Link
              href="/services/enterprise-ai"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 pr-5 py-1.5 text-xs font-bold text-cyan-700"
            >
              <span>نمای کلی و ارزیابی هوشمندسازی</span>
            </Link>

            <Link
              href="/services/enterprise-ai#blueprint"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 pr-5 py-1 text-[11px] text-slate-700"
            >
              <Compass className="w-3.5 h-3.5 text-amber-600" />
              <span>طراحی سند راهبردی هوشمندسازی (APQC)</span>
            </Link>

            <Link
              href="/services/enterprise-ai#ai-agents"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 pr-5 py-1 text-[11px] text-slate-700"
            >
              <Bot className="w-3.5 h-3.5 text-cyan-600" />
              <span>طراحی هوش مصنوعی و ایجنت‌های سازمانی</span>
            </Link>

            <Link
              href="/services/enterprise-ai#process-automation"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 pr-5 py-1 text-[11px] text-slate-700"
            >
              <Cpu className="w-3.5 h-3.5 text-blue-600" />
              <span>هوشمندسازی و اتوماسیون فرآیندها</span>
            </Link>

            <Link
              href="/services/enterprise-ai#implementation"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 pr-5 py-1 text-[11px] text-slate-700"
            >
              <GitBranch className="w-3.5 h-3.5 text-indigo-600" />
              <span>پیاده‌سازی و به‌روزرسانی زیرساخت</span>
            </Link>

            <Link
              href="/services/enterprise-ai#tech-transfer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 pr-5 py-1 text-[11px] text-slate-700"
            >
              <ArrowRightLeft className="w-3.5 h-3.5 text-emerald-600" />
              <span>انتقال تکنولوژی و سورس‌کد</span>
            </Link>
          </div>

          {/* Mobile: Education Section */}
          <div className="border-t border-slate-100 pt-1.5 space-y-0.5">
            <div className="px-3 py-1 text-[11px] font-bold text-purple-900 bg-purple-50 rounded-md flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-purple-600" />
              <span>خدمات آموزشی</span>
            </div>
            
            <Link
              href="/services/corporate"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 pr-5 py-1.5 text-xs text-slate-700"
            >
              <Building2 className="w-3.5 h-3.5 text-purple-600" />
              <span>آموزش‌های سازمانی هوش مصنوعی</span>
            </Link>

            <Link
              href="/services/kids-and-teens"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 pr-5 py-1.5 text-xs text-slate-700"
            >
              <GraduationCap className="w-3.5 h-3.5 text-cyan-600" />
              <span>آموزش کودکان و نوجوانان (۸ تا ۱۸ سال)</span>
            </Link>

            <Link
              href="/services/held-courses"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 pr-5 py-1.5 text-xs text-amber-800 font-bold"
            >
              <Award className="w-3.5 h-3.5 text-amber-600" />
              <span>دوره‌های برگزار شده</span>
            </Link>
          </div>

          <div className="border-t border-slate-100 pt-1.5 space-y-1 text-xs">


            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-1.5 text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              <MessageSquare className="w-4 h-4 text-cyan-600" />
              <span>مقالات و بلاگ</span>
            </Link>

            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-1.5 text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              <Info className="w-4 h-4 text-cyan-600" />
              <span>درباره ما</span>
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-1.5 text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              <Phone className="w-4 h-4 text-cyan-600" />
              <span>تماس با ما</span>
            </Link>
          </div>

          <div className="pt-2 border-t border-slate-100">
            <Link
              href="/services/enterprise-ai"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-slate-900 text-white font-bold rounded-lg text-center text-xs"
            >
              <Bot className="w-3.5 h-3.5 text-cyan-300" />
              <span>درخواست هوشمندسازی سازمانی</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
