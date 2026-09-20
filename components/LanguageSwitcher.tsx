"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Globe, ChevronDown, Check } from "lucide-react";
import { Locale, LOCALES, LOCALE_CONFIG, getLocalizedPath } from "@/lib/i18n";

interface LanguageSwitcherProps {
  currentLocale: Locale;
  variant?: "header" | "footer";
}

export default function LanguageSwitcher({
  currentLocale,
  variant = "header",
}: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname() || "/";
  const router = useRouter();

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectLanguage = (targetLocale: Locale) => {
    setIsOpen(false);
    if (targetLocale === currentLocale) return;

    const newPath = getLocalizedPath(pathname, targetLocale);
    router.push(newPath);
  };

  const currentInfo = LOCALE_CONFIG[currentLocale] || LOCALE_CONFIG.en;

  if (variant === "footer") {
    return (
      <div className="flex items-center gap-2 text-xs">
        <Globe className="w-4 h-4 text-cyan-400 shrink-0" />
        <span className="text-slate-400 font-medium">Language:</span>
        <div className="flex items-center gap-1.5 bg-slate-800/80 p-1 rounded-lg border border-slate-700/80">
          {LOCALES.map((locale) => {
            const info = LOCALE_CONFIG[locale];
            const isActive = locale === currentLocale;
            return (
              <button
                key={locale}
                type="button"
                onClick={() => handleSelectLanguage(locale)}
                className={`px-2 py-1 rounded-md text-[11px] font-bold transition-all flex items-center gap-1 ${
                  isActive
                    ? "bg-cyan-500 text-slate-950 shadow-sm"
                    : "text-slate-300 hover:text-white hover:bg-slate-700/60"
                }`}
                aria-label={`Switch to ${info.name}`}
              >
                <span>{info.flag}</span>
                <span>{info.nativeName}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-slate-200 hover:border-cyan-400 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all shadow-xs"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="text-sm leading-none">{currentInfo.flag}</span>
        <span className="hidden sm:inline font-sans">{currentInfo.nativeName}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div
          className={`absolute mt-2 w-40 rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-900/10 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150 ${
            currentLocale === "en" ? "right-0" : "left-0"
          }`}
        >
          <div className="px-3 py-1 text-[10px] font-black text-slate-400 uppercase tracking-wider border-b border-slate-100 mb-1">
            {currentLocale === "en" ? "Select Language" : currentLocale === "fa" ? "انتخاب زبان" : "اختر اللغة"}
          </div>

          {LOCALES.map((locale) => {
            const info = LOCALE_CONFIG[locale];
            const isActive = locale === currentLocale;

            return (
              <button
                key={locale}
                type="button"
                onClick={() => handleSelectLanguage(locale)}
                className={`w-full flex items-center justify-between px-3 py-2 text-xs font-semibold transition-colors ${
                  isActive
                    ? "bg-cyan-50 text-cyan-800 font-bold"
                    : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-base">{info.flag}</span>
                  <span className="font-sans">{info.nativeName}</span>
                </div>
                {isActive && <Check className="w-3.5 h-3.5 text-cyan-600" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
