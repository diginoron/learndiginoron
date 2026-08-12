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
  Info
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

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
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      {/* Top Banner Contact Line */}
      <div className="hidden lg:block bg-gradient-to-r from-slate-100 via-cyan-50 to-slate-100 border-b border-slate-200 text-xs py-1.5 px-4 mb-2 text-slate-700">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-cyan-700 font-medium">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-cyan-600" />
            <span>سامانه تخصصی خدمات آموزشی هوش مصنوعی دیجی نورون (learn.diginoron.com)</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="tel:02188252497"
              className="flex items-center gap-1.5 text-slate-800 hover:text-cyan-600 transition-colors font-bold text-smDir text-sm"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-600" />
              <span>مشاوره و ثبت‌نام:</span>
              <span className="tracking-widest text-cyan-700 font-mono">02188252497</span>
            </a>
            <span className="text-slate-300">|</span>
            <span className="text-slate-500">ساعات پاسخگویی: شنبه تا چهارشنبه ۸ الی ۱۷</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center p-2 rounded-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 group-hover:border-cyan-400 transition-all shadow-sm">
              {/* DigiNoron original site logo image with fallbacks */}
              <div className="relative w-9 h-9 flex items-center justify-center">
                <Image
                  src="https://diginoron.com/wp-content/uploads/2024/09/diginoron1.png"
                  alt="لوگوی دیجی نورون"
                  width={36}
                  height={36}
                  className="object-contain"
                  unoptimized
                  onError={(e) => {
                    // Fallback to stylized SVG icon if network blocks image loading
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 flex items-center gap-1">
                دیجی نورون <span className="text-cyan-800 text-xs px-2 py-0.5 rounded-full bg-cyan-100 border border-cyan-300 font-mono">learn</span>
              </span>
              <span className="text-[10px] text-slate-500 tracking-wider">
                مرکز آکادمیک هوش مصنوعی
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <Link
              href="/"
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-cyan-600 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Home className="w-4 h-4 text-slate-500" />
              <span>صفحه اصلی</span>
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link
                href="/services"
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-cyan-600 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-1"
              >
                <span>خدمات آموزشی</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180 text-cyan-600" : ""}`} />
              </Link>

              {/* Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute top-full right-0 w-72 mt-1 py-2 bg-white border border-slate-200 rounded-2xl shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                  <div className="px-3 py-1.5 text-xs font-semibold text-cyan-700 uppercase tracking-wider border-b border-slate-100 mb-1">
                    دسته بندی سطوح آموزشی
                  </div>
                  
                  <Link
                    href="/services/kids-and-teens"
                    className="flex items-start gap-3 p-3 hover:bg-cyan-50 transition-colors rounded-xl mx-1 group"
                  >
                    <div className="p-2 rounded-lg bg-cyan-100 text-cyan-700 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-slate-900 group-hover:text-cyan-700">
                        کودکان و نوجوانان
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        آموزش هوش مصنوعی، پایتون، تفکر الگوریتمی و رباتیک
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/services/corporate"
                    className="flex items-start gap-3 p-3 hover:bg-purple-50 transition-colors rounded-xl mx-1 group"
                  >
                    <div className="p-2 rounded-lg bg-purple-100 text-purple-700 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-slate-900 group-hover:text-purple-700">
                        آموزش‌های سازمانی
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        هوش مصنوعی مولد، اتوماسیون فرایندها و مشاوره مدیران
                      </div>
                    </div>
                  </Link>
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
              <span>بلاگ و مقالات</span>
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
            <a
              href="tel:02188252497"
              className="relative inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 rounded-xl shadow-md transition-all hover:scale-105 active:scale-95"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>تماس مستقیم: 02188252497</span>
            </a>
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
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-300 shadow-xl">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-2.5 text-slate-800 hover:bg-slate-100 rounded-xl font-medium"
          >
            <Home className="w-5 h-5 text-cyan-600" />
            <span>صفحه اصلی</span>
          </Link>

          <div className="border-t border-slate-100 pt-2 space-y-1">
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2 text-cyan-700 font-bold"
            >
              <span>خدمات آموزشی</span>
            </Link>
            
            <Link
              href="/services/kids-and-teens"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 pr-6 py-2 text-sm text-slate-700 hover:text-cyan-600"
            >
              <GraduationCap className="w-4 h-4 text-cyan-600" />
              <span>آموزش هوش مصنوعی کودکان و نوجوانان</span>
            </Link>

            <Link
              href="/services/corporate"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 pr-6 py-2 text-sm text-slate-700 hover:text-purple-600"
            >
              <Building2 className="w-4 h-4 text-purple-600" />
              <span>آموزش‌های سازمانی هوش مصنوعی</span>
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

          <div className="pt-4 border-t border-slate-100">
            <a
              href="tel:02188252497"
              className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-bold rounded-xl text-center shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>تماس مستقیم: 02188252497</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
