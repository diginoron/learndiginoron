import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Sparkles, GraduationCap, Building2, ExternalLink, Bot, Cpu, GitBranch, ArrowRightLeft, Zap, Compass, Award } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 text-sm relative overflow-hidden">
      {/* Background Neon Orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-slate-800 border border-cyan-500/30 shadow-sm">
                <Image
                  src="/logo.png"
                  alt="دیجی نورون"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white">دیجی نورون</h3>
                <p className="text-xs text-cyan-400 font-mono">ai.diginoron.com</p>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-slate-400">
              دیجی نورون مرکز تخصصی <strong className="text-slate-200">طراحی سند راهبردی، هوشمندسازی سازمانی</strong> (تحلیل فرآیندها با APQC، ایجنت‌های سازمانی، اتوماسیون، پیاده‌سازی و انتقال تکنولوژی) و ارائه <strong className="text-slate-200">خدمات آموزشی</strong> در دو سطح سازمانی و کودکان/نوجوانان است.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <Link 
                href="/services/enterprise-ai"
                className="text-xs text-cyan-300 hover:text-white flex items-center gap-1.5 bg-slate-800/80 px-3 py-2 rounded-xl border border-cyan-500/30 transition-colors shadow-sm"
              >
                <Zap className="w-3.5 h-3.5 text-cyan-400" />
                <span>درخواست مشاوره هوشمندسازی سازمانی</span>
              </Link>
            </div>
          </div>

          {/* Col 2: Enterprise AI Services (Pillar 1) */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-base border-r-2 border-cyan-500 pr-3">
              هوشمندسازی سازمانی
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link 
                  href="/services/enterprise-ai#blueprint" 
                  className="hover:text-cyan-300 transition-colors flex items-center gap-2 text-amber-300"
                >
                  <Compass className="w-3.5 h-3.5 text-amber-400" />
                  <span>طراحی سند راهبردی هوشمندسازی (APQC)</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/enterprise-ai#ai-agents" 
                  className="hover:text-cyan-300 transition-colors flex items-center gap-2"
                >
                  <Bot className="w-3.5 h-3.5 text-cyan-400" />
                  <span>طراحی هوش مصنوعی و ایجنت‌های سازمانی</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/enterprise-ai#process-automation" 
                  className="hover:text-cyan-300 transition-colors flex items-center gap-2"
                >
                  <Cpu className="w-3.5 h-3.5 text-blue-400" />
                  <span>هوشمندسازی و اتوماسیون فرآیندها (BPA)</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/enterprise-ai#implementation" 
                  className="hover:text-cyan-300 transition-colors flex items-center gap-2"
                >
                  <GitBranch className="w-3.5 h-3.5 text-indigo-400" />
                  <span>پیاده‌سازی، یکپارچه‌سازی و به‌روزرسانی</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/enterprise-ai#tech-transfer" 
                  className="hover:text-cyan-300 transition-colors flex items-center gap-2"
                >
                  <ArrowRightLeft className="w-3.5 h-3.5 text-emerald-400" />
                  <span>انتقال تکنولوژی و سورس‌کد به سازمان</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/enterprise-ai" 
                  className="hover:text-cyan-300 transition-colors font-bold text-cyan-400"
                >
                  مشاهده راهنمای کامل هوشمندسازی
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Education & Quick Links (Pillar 2) */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-base border-r-2 border-purple-500 pr-3">
              خدمات آموزشی و آکادمی
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link 
                  href="/services/corporate" 
                  className="hover:text-purple-300 transition-colors flex items-center gap-2"
                >
                  <Building2 className="w-3.5 h-3.5 text-purple-400" />
                  <span>آموزش‌های سازمانی و مسترکلاس مدیران</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/kids-and-teens" 
                  className="hover:text-cyan-300 transition-colors flex items-center gap-2"
                >
                  <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                  <span>آموزش کودکان و نوجوانان (۸ تا ۱۸ سال)</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/held-courses" 
                  className="hover:text-amber-300 transition-colors flex items-center gap-2"
                >
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>دوره‌های برگزار شده و سوابق کارگاه‌ها</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/courses" 
                  className="hover:text-cyan-300 transition-colors flex items-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>کاتالوگ کامل دوره‌های آموزشی</span>
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-cyan-300 transition-colors">
                  مجله و مقالات تخصصی هوش مصنوعی
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cyan-300 transition-colors">
                  درباره دیجی نورون
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Phone */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-base border-r-2 border-emerald-500 pr-3">
              ارتباط و مشاوره سازمانی
            </h4>
            <div className="space-y-3 text-xs">
              <a
                href="tel:02188252497"
                className="p-3 bg-slate-800/90 rounded-xl border border-cyan-500/30 flex items-center gap-3 group hover:border-cyan-400 transition-all shadow-sm"
              >
                <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-300 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400">شماره تماس مستقیم و مشاوره:</div>
                  <div className="text-base font-extrabold text-cyan-300 tracking-widest font-mono">
                    02188252497
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>تهران، خیابان آزادی، مرکز نوآوری و هوشمندسازی هوش مصنوعی دیجی نورون</span>
              </div>

              <div className="flex items-center gap-2 text-slate-400">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="font-mono">diginoron@gmail.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © ۲۰۲۶ تمامی حقوق مادی و معنوی این وب‌سایت متعلق به شرکت دیجی نورون (<span className="font-mono text-cyan-400">ai.diginoron.com</span>) است.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-slate-300">حریم خصوصی</Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-slate-300">شرایط و قوانین</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
