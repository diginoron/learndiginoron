"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Phone, 
  ChevronDown, 
  Sparkles, 
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
  Briefcase,
  Layers,
  ShieldCheck,
  Zap
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [enterpriseDropdownOpen, setEnterpriseDropdownOpen] = useState(false);
  const [educationDropdownOpen, setEducationDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-md py-2.5"
          : "bg-white/80 backdrop-blur-sm border-b border-slate-100 py-3.5"
      }`}
    >
      {/* Top Banner Contact Line */}
      <div className="hidden lg:block bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 text-slate-100 text-xs py-1.5 px-4 mb-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 font-medium">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-cyan-300 font-bold">دیجی نورون:</span>
            <span className="text-slate-300">مرکز تخصصی هوشمندسازی سازمانی و آموزش کاربردی هوش مصنوعی</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="tel:02188252497"
              className="flex items-center gap-1.5 text-cyan-300 hover:text-white transition-colors font-bold text-sm"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>مشاوره و استعلام سازمانی:</span>
              <span className="tracking-widest font-mono text-white">02188252497</span>
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300 text-[11px]">پاسخگویی مستقیم: شنبه تا چهارشنبه ۸ الی ۱۷</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center p-2 rounded-xl bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 border border-cyan-500/30 group-hover:border-cyan-400 transition-all shadow-sm">
              <div className="relative w-9 h-9 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="لوگوی دیجی نورون"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-black text-lg sm:text-xl tracking-tight text-slate-900 flex items-center gap-1.5">
                دیجی نورون 
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-50 text-cyan-700 border border-cyan-200 font-bold">
                  Enterprise & Academy
                </span>
              </span>
              <span className="text-[11px] text-slate-500 font-medium">
                هوشمندسازی سازمانی و آکادمی هوش مصنوعی
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
            <Link
              href="/"
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-cyan-700 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Home className="w-4 h-4 text-slate-500" />
              <span>صفحه اصلی</span>
            </Link>

            {/* 1. Enterprise AI Dropdown (Main Pillar with Higher Weight) */}
            <div 
              className="relative"
              onMouseEnter={() => setEnterpriseDropdownOpen(true)}
              onMouseLeave={() => setEnterpriseDropdownOpen(false)}
            >
              <Link
                href="/services/enterprise-ai"
                className="px-3.5 py-2 text-sm font-bold text-slate-900 bg-cyan-50/70 border border-cyan-200/80 hover:bg-cyan-100/70 rounded-xl transition-all flex items-center gap-1.5 text-cyan-900 group"
              >
                <Zap className="w-4 h-4 text-cyan-600 group-hover:scale-110 transition-transform" />
                <span>هوشمندسازی سازمانی</span>
                <ChevronDown className={`w-4 h-4 text-cyan-600 transition-transform duration-200 ${enterpriseDropdownOpen ? "rotate-180" : ""}`} />
              </Link>

              {/* Enterprise Dropdown Menu */}
              {enterpriseDropdownOpen && (
                <div className="absolute top-full right-0 pt-2 w-[420px] z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="p-3 bg-white border border-slate-200 rounded-2xl shadow-2xl backdrop-blur-xl">
                    <div className="px-3 py-2 bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-xl mb-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Bot className="w-4 h-4 text-cyan-400" />
                        <span className="text-xs font-bold">خدمات هوشمندسازی جامع سازمان‌ها</span>
                      </div>
                      <span className="text-[10px] text-cyan-300 bg-white/10 px-2 py-0.5 rounded-full font-mono">B2B Solutions</span>
                    </div>

                    <div className="space-y-1 text-xs">
                      {/* 1. AI Agents & Custom Tools */}
                      <Link
                        href="/services/enterprise-ai#ai-agents"
                        className="flex items-start gap-3 p-2.5 hover:bg-cyan-50 transition-colors rounded-xl group"
                      >
                        <div className="p-2 rounded-lg bg-cyan-100 text-cyan-700 group-hover:bg-cyan-600 group-hover:text-white transition-colors shrink-0">
                          <Bot className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 group-hover:text-cyan-800 flex items-center gap-1.5">
                            <span>طراحی هوش مصنوعی و ایجنت‌های سازمانی</span>
                            <span className="text-[9px] px-1.5 py-0.2 rounded bg-cyan-100 text-cyan-800">اختصاصی</span>
                          </div>
                          <div className="text-slate-500 text-[11px] mt-0.5 leading-relaxed">
                            طراحی دستیارها و ایجنت‌های خودمختار چندعامله (Multi-Agent) و چت‌بات‌های شرکتی
                          </div>
                        </div>
                      </Link>

                      {/* 2. Process Intelligence */}
                      <Link
                        href="/services/enterprise-ai#process-automation"
                        className="flex items-start gap-3 p-2.5 hover:bg-blue-50 transition-colors rounded-xl group"
                      >
                        <div className="p-2 rounded-lg bg-blue-100 text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                          <Cpu className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 group-hover:text-blue-800">
                            هوشمندسازی فرآیندها (BPA)
                          </div>
                          <div className="text-slate-500 text-[11px] mt-0.5 leading-relaxed">
                            اتوماسیون فرآیندهای مالی، منابع انسانی، فروش، تولید و تحلیل خودکار داده‌ها
                          </div>
                        </div>
                      </Link>

                      {/* 3. Implementation & Upgrades */}
                      <Link
                        href="/services/enterprise-ai#implementation"
                        className="flex items-start gap-3 p-2.5 hover:bg-indigo-50 transition-colors rounded-xl group"
                      >
                        <div className="p-2 rounded-lg bg-indigo-100 text-indigo-700 group-hover:bg-indigo-600 group-hover:text-white transition-colors shrink-0">
                          <GitBranch className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 group-hover:text-indigo-800">
                            پیاده‌سازی، یکپارچه‌سازی و به‌روزرسانی
                          </div>
                          <div className="text-slate-500 text-[11px] mt-0.5 leading-relaxed">
                            استقرار مدل‌های اختصاصی محلی/ابری و ارتقای سیستم‌های نرم‌افزاری و ERPها
                          </div>
                        </div>
                      </Link>

                      {/* 4. Tech Transfer */}
                      <Link
                        href="/services/enterprise-ai#tech-transfer"
                        className="flex items-start gap-3 p-2.5 hover:bg-emerald-50 transition-colors rounded-xl group"
                      >
                        <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors shrink-0">
                          <ArrowRightLeft className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 group-hover:text-emerald-800">
                            انتقال تکنولوژی و زیرساخت
                          </div>
                          <div className="text-slate-500 text-[11px] mt-0.5 leading-relaxed">
                            انتقال دانش فنی، کدبیس‌ها و پروتکل‌های امنیتی هوش مصنوعی به تیم داخلی شما
                          </div>
                        </div>
                      </Link>

                      {/* 5. Enterprise Training */}
                      <Link
                        href="/services/corporate"
                        className="flex items-start gap-3 p-2.5 hover:bg-purple-50 transition-colors rounded-xl group"
                      >
                        <div className="p-2 rounded-lg bg-purple-100 text-purple-700 group-hover:bg-purple-600 group-hover:text-white transition-colors shrink-0">
                          <Building2 className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 group-hover:text-purple-800">
                            آموزش‌های تخصصی سازمانی
                          </div>
                          <div className="text-slate-500 text-[11px] mt-0.5 leading-relaxed">
                            مسترکلاس‌های استراتژی هوش مصنوعی مدیران و کارگاه‌های مهندسی پرامپت پرسنل
                          </div>
                        </div>
                      </Link>
                    </div>

                    <div className="mt-2 pt-2 border-t border-slate-100 px-2 flex items-center justify-between">
                      <Link 
                        href="/services/enterprise-ai" 
                        className="text-xs font-bold text-cyan-700 hover:text-cyan-800 flex items-center gap-1"
                      >
                        <span>مشاهده صفحه کامل هوشمندسازی سازمانی</span>
                        <ChevronDown className="w-3.5 h-3.5 -rotate-90" />
                      </Link>
                      <a 
                        href="tel:02188252497" 
                        className="text-[11px] font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 px-2.5 py-1 rounded-lg transition-colors"
                      >
                        مشاوره فنی: 02188252497
                      </a>
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
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-cyan-600 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-1"
              >
                <span>خدمات آموزشی</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${educationDropdownOpen ? "rotate-180 text-cyan-600" : ""}`} />
              </Link>

              {/* Education Dropdown Menu */}
              {educationDropdownOpen && (
                <div className="absolute top-full right-0 pt-2 w-80 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="p-3 bg-white border border-slate-200 rounded-2xl shadow-2xl backdrop-blur-xl">
                    <div className="px-3 py-1.5 text-xs font-semibold text-cyan-800 bg-cyan-50 rounded-lg mb-2">
                      دو دپارتمان تخصصی آموزش هوش مصنوعی
                    </div>

                    <div className="space-y-1">
                      <Link
                        href="/services/corporate"
                        className="flex items-start gap-3 p-3 hover:bg-purple-50 transition-colors rounded-xl group"
                      >
                        <div className="p-2 rounded-lg bg-purple-100 text-purple-700 group-hover:bg-purple-600 group-hover:text-white transition-colors shrink-0">
                          <Building2 className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-bold text-sm text-slate-900 group-hover:text-purple-700">
                            آموزش‌های سازمانی
                          </div>
                          <div className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                            کارگاه‌های پرامپت‌نویسی، اتوماسیون اداری و مسترکلاس مدیران
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/services/kids-and-teens"
                        className="flex items-start gap-3 p-3 hover:bg-cyan-50 transition-colors rounded-xl group"
                      >
                        <div className="p-2 rounded-lg bg-cyan-100 text-cyan-700 group-hover:bg-cyan-600 group-hover:text-white transition-colors shrink-0">
                          <GraduationCap className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-bold text-sm text-slate-900 group-hover:text-cyan-700">
                            کودکان و نوجوانان
                          </div>
                          <div className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                            پایتون، تفکر الگوریتمی، رباتیک و ابزارهای هوش مصنوعی (۸ تا ۱۸ سال)
                          </div>
                        </div>
                      </Link>
                    </div>

                    <div className="mt-2 pt-2 border-t border-slate-100">
                      <Link 
                        href="/courses" 
                        className="flex items-center justify-between p-2 text-xs font-bold text-slate-700 hover:text-cyan-700 hover:bg-slate-50 rounded-lg"
                      >
                        <span className="flex items-center gap-1.5">
                          <BookOpen className="w-4 h-4 text-cyan-600" />
                          <span>مشاهده تمامی دوره‌ها و سرفصل‌ها</span>
                        </span>
                        <ChevronDown className="w-3.5 h-3.5 -rotate-90" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/courses"
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-cyan-600 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <BookOpen className="w-4 h-4 text-slate-500" />
              <span>دوره‌ها</span>
            </Link>

            <Link
              href="/blog"
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-cyan-600 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <MessageSquare className="w-4 h-4 text-slate-500" />
              <span>مقالات و بلاگ</span>
            </Link>

            <Link
              href="/about"
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-cyan-600 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Info className="w-4 h-4 text-slate-500" />
              <span>درباره ما</span>
            </Link>

            <Link
              href="/contact"
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-cyan-600 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-4 h-4 text-slate-500" />
              <span>تماس با ما</span>
            </Link>
          </nav>

          {/* Action Button & Contact */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/services/enterprise-ai"
              className="relative inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-slate-900 via-cyan-900 to-indigo-900 hover:from-cyan-800 hover:to-indigo-800 rounded-xl shadow-md transition-all hover:scale-105 active:scale-95 border border-cyan-400/30"
            >
              <Bot className="w-3.5 h-3.5 text-cyan-300" />
              <span>درخواست هوشمندسازی سازمانی</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="tel:02188252497"
              className="p-2 rounded-lg bg-cyan-100 text-cyan-800 border border-cyan-300 text-xs font-bold flex items-center gap-1"
            >
              <Phone className="w-4 h-4" />
              <span>02188252497</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200 transition-colors"
              aria-label="باز کردن منو"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-300 shadow-xl max-h-[85vh] overflow-y-auto">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-2.5 text-slate-800 hover:bg-slate-100 rounded-xl font-medium"
          >
            <Home className="w-5 h-5 text-cyan-600" />
            <span>صفحه اصلی</span>
          </Link>

          {/* Mobile: Enterprise AI Section */}
          <div className="border-t border-slate-100 pt-2 space-y-1">
            <div className="px-3 py-1.5 text-xs font-black text-cyan-900 bg-cyan-50 rounded-lg flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-600" />
              <span>خدمات هوشمندسازی سازمانی</span>
            </div>
            
            <Link
              href="/services/enterprise-ai"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 pr-6 py-2 text-sm font-bold text-cyan-700 hover:text-cyan-800"
            >
              <span>نمای کلی و ارزیابی هوشمندسازی</span>
            </Link>

            <Link
              href="/services/enterprise-ai#ai-agents"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 pr-6 py-1.5 text-xs text-slate-700 hover:text-cyan-600"
            >
              <Bot className="w-4 h-4 text-cyan-600" />
              <span>طراحی هوش مصنوعی و ایجنت‌های سازمانی</span>
            </Link>

            <Link
              href="/services/enterprise-ai#process-automation"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 pr-6 py-1.5 text-xs text-slate-700 hover:text-cyan-600"
            >
              <Cpu className="w-4 h-4 text-blue-600" />
              <span>هوشمندسازی و اتوماسیون فرآیندها</span>
            </Link>

            <Link
              href="/services/enterprise-ai#implementation"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 pr-6 py-1.5 text-xs text-slate-700 hover:text-cyan-600"
            >
              <GitBranch className="w-4 h-4 text-indigo-600" />
              <span>پیاده‌سازی، یکپارچه‌سازی و به‌روزرسانی</span>
            </Link>

            <Link
              href="/services/enterprise-ai#tech-transfer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 pr-6 py-1.5 text-xs text-slate-700 hover:text-cyan-600"
            >
              <ArrowRightLeft className="w-4 h-4 text-emerald-600" />
              <span>انتقال تکنولوژی هوش مصنوعی</span>
            </Link>
          </div>

          {/* Mobile: Education Section */}
          <div className="border-t border-slate-100 pt-2 space-y-1">
            <div className="px-3 py-1.5 text-xs font-black text-purple-900 bg-purple-50 rounded-lg flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-purple-600" />
              <span>خدمات آموزشی دیجی نورون</span>
            </div>
            
            <Link
              href="/services/corporate"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 pr-6 py-2 text-sm text-slate-700 hover:text-purple-600"
            >
              <Building2 className="w-4 h-4 text-purple-600" />
              <span>آموزش‌های سازمانی هوش مصنوعی</span>
            </Link>

            <Link
              href="/services/kids-and-teens"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 pr-6 py-2 text-sm text-slate-700 hover:text-cyan-600"
            >
              <GraduationCap className="w-4 h-4 text-cyan-600" />
              <span>آموزش هوش مصنوعی کودکان و نوجوانان</span>
            </Link>
          </div>

          <Link
            href="/courses"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-2.5 text-slate-800 hover:bg-slate-100 rounded-xl font-medium"
          >
            <BookOpen className="w-5 h-5 text-cyan-600" />
            <span>دوره‌های آموزشی</span>
          </Link>

          <Link
            href="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-2.5 text-slate-800 hover:bg-slate-100 rounded-xl font-medium"
          >
            <MessageSquare className="w-5 h-5 text-cyan-600" />
            <span>بلاگ و مقالات</span>
          </Link>

          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-2.5 text-slate-800 hover:bg-slate-100 rounded-xl font-medium"
          >
            <Info className="w-5 h-5 text-cyan-600" />
            <span>درباره ما</span>
          </Link>

          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-2.5 text-slate-800 hover:bg-slate-100 rounded-xl font-medium"
          >
            <Phone className="w-5 h-5 text-cyan-600" />
            <span>تماس با ما</span>
          </Link>

          <div className="pt-4 border-t border-slate-100 space-y-2">
            <Link
              href="/services/enterprise-ai"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-slate-900 to-cyan-900 text-white font-bold rounded-xl text-center shadow-md text-sm"
            >
              <Bot className="w-4 h-4 text-cyan-300" />
              <span>درخواست هوشمندسازی سازمانی</span>
            </Link>
            
            <a
              href="tel:02188252497"
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-slate-100 text-slate-800 font-bold rounded-xl text-center border border-slate-200 text-xs"
            >
              <Phone className="w-4 h-4 text-cyan-600" />
              <span>تماس مستقیم: 02188252497</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
