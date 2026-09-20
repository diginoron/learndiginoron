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
  Home, 
  Bot, 
  Cpu, 
  Zap, 
  Compass, 
  Award,
  ArrowRight,
  ArrowLeft
} from "lucide-react";
import { Locale, getDirection, getLocalizedPath } from "@/lib/i18n";
import { COMMON_TRANSLATIONS } from "@/data/translations/common";
import LanguageSwitcher from "@/components/LanguageSwitcher";

interface NavbarProps {
  locale?: Locale;
}

export default function Navbar({ locale = "en" }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [enterpriseDropdownOpen, setEnterpriseDropdownOpen] = useState(false);
  const [educationDropdownOpen, setEducationDropdownOpen] = useState(false);

  const t = COMMON_TRANSLATIONS[locale] || COMMON_TRANSLATIONS.en;
  const isLtr = getDirection(locale) === "ltr";

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
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs py-1.5"
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
            <span className="text-cyan-300 font-bold">{t.brand.name}:</span>
            <span className="text-slate-300">{t.brand.topBannerTagline}</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${t.brand.phoneNumber.replace(/[^0-9+]/g, "")}`}
              className="flex items-center gap-1.5 text-cyan-300 hover:text-white transition-colors font-bold text-xs"
            >
              <Phone className="w-3 h-3 text-cyan-400" />
              <span>{t.brand.phoneLabel}</span>
              <span className="tracking-widest font-mono text-white font-bold" dir="ltr">{t.brand.phoneNumber}</span>
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400 text-[10px]">{t.brand.workingHours}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-11 sm:h-12">
          
          {/* Logo Section */}
          <Link href={getLocalizedPath("/", locale)} className="flex items-center gap-2.5 group shrink-0">
            <div className="relative flex items-center justify-center p-1.5 rounded-xl bg-slate-50 border border-slate-200 group-hover:border-cyan-400 transition-all shadow-xs">
              <Image
                src="/logo.png"
                alt={t.brand.name}
                width={28}
                height={28}
                className="object-contain"
                priority
              />
            </div>
            <span className="font-black text-base sm:text-lg tracking-tight text-slate-900 group-hover:text-cyan-700 transition-colors">
              {t.brand.name}
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 text-[13px]">
            <Link
              href={getLocalizedPath("/", locale)}
              className="px-2.5 py-1.5 font-medium text-slate-700 hover:text-cyan-700 hover:bg-slate-50 rounded-lg transition-colors flex items-center gap-1"
            >
              <Home className="w-3.5 h-3.5 text-slate-400" />
              <span>{t.nav.home}</span>
            </Link>

            {/* 1. Enterprise AI Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setEnterpriseDropdownOpen(true)}
              onMouseLeave={() => setEnterpriseDropdownOpen(false)}
            >
              <Link
                href={getLocalizedPath("/services/enterprise-ai", locale)}
                className="px-2.5 py-1.5 font-bold text-cyan-900 bg-cyan-50/80 border border-cyan-200/80 hover:bg-cyan-100/80 rounded-lg transition-all flex items-center gap-1 group"
              >
                <Zap className="w-3.5 h-3.5 text-cyan-600" />
                <span>{t.nav.enterpriseAI}</span>
                <ChevronDown className={`w-3 h-3 text-cyan-600 transition-transform duration-200 ${enterpriseDropdownOpen ? "rotate-180" : ""}`} />
              </Link>

              {/* Enterprise Dropdown Menu */}
              {enterpriseDropdownOpen && (
                <div className={`absolute top-full ${isLtr ? "left-0" : "right-0"} pt-1.5 w-84 sm:w-96 z-50 animate-in fade-in slide-in-from-top-1 duration-150`}>
                  <div className="p-2 bg-white border border-slate-200 rounded-xl shadow-xl backdrop-blur-xl">
                    <div className="px-2.5 py-1.5 bg-slate-900 text-white rounded-lg mb-1.5 flex items-center justify-between text-[11px]">
                      <span className="font-bold text-cyan-300">{t.nav.servicesDropdown}</span>
                      <span className="text-[9px] text-slate-400 font-mono">B2B Solutions</span>
                    </div>

                    <div className="space-y-0.5 text-xs">
                      <Link
                        href={getLocalizedPath("/services/enterprise-ai", locale)}
                        className="flex items-center gap-2 p-2 hover:bg-amber-50 rounded-lg transition-colors group"
                      >
                        <Compass className="w-4 h-4 text-amber-600 shrink-0" />
                        <div>
                          <div className="font-bold text-slate-900 group-hover:text-amber-800 text-[12px] flex items-center gap-1.5">
                            <span>{locale === "en" ? "Strategic AI Roadmap" : locale === "fa" ? "طراحی سند راهبردی هوشمندسازی" : "خريطة طريق التحول الذكي"}</span>
                            <span className="text-[9px] px-1 rounded bg-amber-100 text-amber-800 font-mono">APQC</span>
                          </div>
                          <div className="text-[10px] text-slate-500">
                            {locale === "en" ? "Organizational audit, gap analysis & ROI roadmap" : locale === "fa" ? "تحلیل ساختار، سنجش آمادگی و اطلس بهبود هوش مصنوعی" : "تشخيص هيكلي وتحليل فجوات العمليات"}
                          </div>
                        </div>
                      </Link>

                      <Link
                        href={getLocalizedPath("/services/enterprise-ai", locale)}
                        className="flex items-center gap-2 p-2 hover:bg-cyan-50 rounded-lg transition-colors group"
                      >
                        <Bot className="w-4 h-4 text-cyan-600 shrink-0" />
                        <div>
                          <div className="font-bold text-slate-800 group-hover:text-cyan-800 text-[12px]">
                            {locale === "en" ? "Autonomous AI Agents" : locale === "fa" ? "طراحی هوش مصنوعی و ایجنت‌ها" : "وكلاء الذكاء الاصطناعي"}
                          </div>
                          <div className="text-[10px] text-slate-500">
                            {locale === "en" ? "Multi-agent networks & confidential enterprise RAG" : locale === "fa" ? "ایجنت‌های چندعامله و دستیارهای سازمانی RAG" : "أنظمة وكلاء متعددة ومساعدين إداريين"}
                          </div>
                        </div>
                      </Link>

                      <Link
                        href={getLocalizedPath("/services/enterprise-ai", locale)}
                        className="flex items-center gap-2 p-2 hover:bg-blue-50 rounded-lg transition-colors group"
                      >
                        <Cpu className="w-4 h-4 text-blue-600 shrink-0" />
                        <div>
                          <div className="font-bold text-slate-800 group-hover:text-blue-800 text-[12px]">
                            {locale === "en" ? "Business Process Automation (BPA)" : locale === "fa" ? "هوشمندسازی فرآیندها (BPA)" : "أتمتة العمليات التجارية (BPA)"}
                          </div>
                          <div className="text-[10px] text-slate-500">
                            {locale === "en" ? "Finance, procurement, sales & HR automation" : locale === "fa" ? "اتوماسیون مالی، اداری، فروش و منابع انسانی" : "أتمتة العمليات الإدارية والمالية"}
                          </div>
                        </div>
                      </Link>
                    </div>

                    <div className="mt-1.5 pt-1.5 border-t border-slate-100 flex items-center justify-between px-1">
                      <Link 
                        href={getLocalizedPath("/services", locale)} 
                        className="text-[11px] font-bold text-cyan-700 hover:text-cyan-800 flex items-center gap-1"
                      >
                        <span>{locale === "en" ? "View All Services Overview" : locale === "fa" ? "مشاهده نمای کلی خدمات" : "عرض نظرة عامة على الخدمات"}</span>
                        {isLtr ? <ArrowRight className="w-3 h-3" /> : <ArrowLeft className="w-3 h-3" />}
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 2. Education Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setEducationDropdownOpen(true)}
              onMouseLeave={() => setEducationDropdownOpen(false)}
            >
              <button
                className="px-2.5 py-1.5 font-medium text-slate-700 hover:text-cyan-700 hover:bg-slate-50 rounded-lg transition-colors flex items-center gap-1 group"
              >
                <GraduationCap className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-600" />
                <span>{t.nav.academyDropdown}</span>
                <ChevronDown className={`w-3 h-3 text-slate-400 group-hover:text-cyan-600 transition-transform duration-200 ${educationDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {educationDropdownOpen && (
                <div className={`absolute top-full ${isLtr ? "left-0" : "right-0"} pt-1.5 w-80 z-50 animate-in fade-in slide-in-from-top-1 duration-150`}>
                  <div className="p-2 bg-white border border-slate-200 rounded-xl shadow-xl backdrop-blur-xl">
                    <div className="space-y-0.5 text-xs">
                      <Link
                        href={getLocalizedPath("/services/corporate", locale)}
                        className="flex items-center gap-2.5 p-2 hover:bg-purple-50 rounded-lg transition-colors group"
                      >
                        <Building2 className="w-4 h-4 text-purple-600 shrink-0" />
                        <div>
                          <div className="font-bold text-[12px] text-slate-800 group-hover:text-purple-700">
                            {t.nav.corporateTraining}
                          </div>
                          <div className="text-[10px] text-slate-500">
                            {t.nav.corporateTrainingDesc}
                          </div>
                        </div>
                      </Link>

                      <Link
                        href={getLocalizedPath("/services/kids-and-teens", locale)}
                        className="flex items-center gap-2.5 p-2 hover:bg-cyan-50 rounded-lg transition-colors group"
                      >
                        <GraduationCap className="w-4 h-4 text-cyan-600 shrink-0" />
                        <div>
                          <div className="font-bold text-[12px] text-slate-800 group-hover:text-cyan-700">
                            {t.nav.kidsAndTeens}
                          </div>
                          <div className="text-[10px] text-slate-500">
                            {t.nav.kidsAndTeensDesc}
                          </div>
                        </div>
                      </Link>

                      <Link
                        href={getLocalizedPath("/services/held-courses", locale)}
                        className="flex items-center gap-2.5 p-2 hover:bg-amber-50 rounded-lg transition-colors group"
                      >
                        <Award className="w-4 h-4 text-amber-600 shrink-0" />
                        <div>
                          <div className="font-bold text-[12px] text-slate-800 group-hover:text-amber-700 flex items-center gap-1.5">
                            <span>{t.nav.heldCourses}</span>
                          </div>
                          <div className="text-[10px] text-slate-500">
                            {t.nav.heldCoursesDesc}
                          </div>
                        </div>
                      </Link>
                    </div>

                    <div className="mt-1 pt-1.5 border-t border-slate-100 px-1">
                      <Link 
                        href={getLocalizedPath("/courses", locale)} 
                        className="flex items-center justify-between p-1.5 text-[11px] font-bold text-slate-700 hover:text-cyan-700 rounded-md"
                      >
                        <span className="flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5 text-cyan-600" />
                          <span>{t.nav.courses}</span>
                        </span>
                        {isLtr ? <ArrowRight className="w-3 h-3" /> : <ArrowLeft className="w-3 h-3" />}
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href={getLocalizedPath("/blog", locale)}
              className="px-2.5 py-1.5 font-medium text-slate-700 hover:text-cyan-700 hover:bg-slate-50 rounded-lg transition-colors"
            >
              <span>{t.nav.blog}</span>
            </Link>

            <Link
              href={getLocalizedPath("/about", locale)}
              className="px-2.5 py-1.5 font-medium text-slate-700 hover:text-cyan-700 hover:bg-slate-50 rounded-lg transition-colors"
            >
              <span>{t.nav.about}</span>
            </Link>

            <Link
              href={getLocalizedPath("/contact", locale)}
              className="px-2.5 py-1.5 font-medium text-slate-700 hover:text-cyan-700 hover:bg-slate-50 rounded-lg transition-colors"
            >
              <span>{t.nav.contact}</span>
            </Link>
          </nav>

          {/* Desktop Right Actions: Language Switcher & Quick CTA */}
          <div className="hidden md:flex items-center gap-2">
            <LanguageSwitcher currentLocale={locale} variant="header" />

            <Link
              href={getLocalizedPath("/services/enterprise-ai", locale)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-slate-900 hover:bg-cyan-900 rounded-xl shadow-xs transition-all border border-slate-700"
            >
              <Bot className="w-3.5 h-3.5 text-cyan-300" />
              <span>{t.nav.freeConsultationBtn}</span>
            </Link>
          </div>

          {/* Mobile Right Actions: Language Switcher & Menu Toggle */}
          <div className="flex md:hidden items-center gap-1.5">
            <LanguageSwitcher currentLocale={locale} variant="header" />
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-4 pt-2 pb-5 space-y-2 animate-in slide-in-from-top-2 duration-200 shadow-xl max-h-[82vh] overflow-y-auto">
          <Link
            href={getLocalizedPath("/", locale)}
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-2 text-slate-800 hover:bg-slate-50 rounded-lg text-xs font-bold"
          >
            <Home className="w-4 h-4 text-cyan-600" />
            <span>{t.nav.home}</span>
          </Link>

          {/* Enterprise AI Section */}
          <div className="border-t border-slate-100 pt-1.5 space-y-0.5">
            <div className="px-3 py-1 text-[11px] font-bold text-cyan-900 bg-cyan-50 rounded-md flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-cyan-600" />
              <span>{t.nav.enterpriseAI}</span>
            </div>
            
            <Link
              href={getLocalizedPath("/services/enterprise-ai", locale)}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-5 py-1.5 text-xs font-bold text-cyan-700"
            >
              <span>{locale === "en" ? "Overview & Solutions" : locale === "fa" ? "نمای کلی و استعلام هوشمندسازی" : "نظرة عامة على الحلول"}</span>
            </Link>
          </div>

          {/* Academy Section */}
          <div className="border-t border-slate-100 pt-1.5 space-y-0.5">
            <div className="px-3 py-1 text-[11px] font-bold text-purple-900 bg-purple-50 rounded-md flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-purple-600" />
              <span>{t.nav.academyDropdown}</span>
            </div>
            
            <Link
              href={getLocalizedPath("/services/corporate", locale)}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-5 py-1.5 text-xs font-medium text-slate-700 hover:text-purple-700"
            >
              <span>{t.nav.corporateTraining}</span>
            </Link>

            <Link
              href={getLocalizedPath("/services/kids-and-teens", locale)}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-5 py-1.5 text-xs font-medium text-slate-700 hover:text-cyan-700"
            >
              <span>{t.nav.kidsAndTeens}</span>
            </Link>

            <Link
              href={getLocalizedPath("/services/held-courses", locale)}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-5 py-1.5 text-xs font-medium text-slate-700 hover:text-amber-700"
            >
              <span>{t.nav.heldCourses}</span>
            </Link>

            <Link
              href={getLocalizedPath("/courses", locale)}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-5 py-1.5 text-xs font-bold text-cyan-700"
            >
              <span>{t.nav.courses}</span>
            </Link>
          </div>

          <div className="border-t border-slate-100 pt-1.5 space-y-1">
            <Link
              href={getLocalizedPath("/blog", locale)}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-cyan-700"
            >
              {t.nav.blog}
            </Link>
            <Link
              href={getLocalizedPath("/about", locale)}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-cyan-700"
            >
              {t.nav.about}
            </Link>
            <Link
              href={getLocalizedPath("/contact", locale)}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-cyan-700"
            >
              {t.nav.contact}
            </Link>
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`tel:${t.brand.phoneNumber.replace(/[^0-9+]/g, "")}`}
              className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all"
            >
              <Phone className="w-4 h-4 text-cyan-600" />
              <span>{t.brand.phoneLabel} {t.brand.phoneNumber}</span>
            </a>

            <Link
              href={getLocalizedPath("/services/enterprise-ai", locale)}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 bg-gradient-to-r from-slate-900 to-cyan-900 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-sm"
            >
              <Zap className="w-4 h-4 text-cyan-300" />
              <span>{t.nav.freeConsultationBtn}</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
