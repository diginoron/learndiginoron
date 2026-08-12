import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Sparkles, GraduationCap, Building2, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-100 border-t border-slate-200 text-slate-600 text-sm relative overflow-hidden">
      {/* Background Neon Orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-200">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-white border border-cyan-500/30 shadow-sm">
                <Image
                  src="/logo.png"
                  alt="دیجی نورون"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900">دیجی نورون</h3>
                <p className="text-xs text-cyan-700 font-mono">learn.diginoron.com</p>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-slate-600">
              دیجی نورون مرکز تخصصی ارائه خدمات آموزشی هوش مصنوعی در ایران است. ما برنامه‌های جامع یادگیری کاربردی AI را در دو محور اصلی «کودکان و نوجوانان» و «آموزش‌های سازمانی» ارائه می‌دهیم.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <a 
                href="https://diginoron.com" 
                target="_blank" 
                rel="noreferrer"
                className="text-xs text-cyan-700 hover:underline flex items-center gap-1 bg-white px-3 py-1.5 rounded-lg border border-cyan-300 shadow-sm"
              >
                <span>مشاهده وب‌سایت اصلی (diginoron.com)</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 text-base border-r-2 border-cyan-500 pr-3">
              خدمات آموزشی هوش مصنوعی
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link 
                  href="/services/kids-and-teens" 
                  className="hover:text-cyan-700 transition-colors flex items-center gap-2"
                >
                  <GraduationCap className="w-3.5 h-3.5 text-cyan-600" />
                  <span>آموزش کودکان و نوجوانان (۸ تا ۱۸ سال)</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/corporate" 
                  className="hover:text-purple-700 transition-colors flex items-center gap-2"
                >
                  <Building2 className="w-3.5 h-3.5 text-purple-600" />
                  <span>آموزش‌های سازمانی و ارگان‌ها</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/courses" 
                  className="hover:text-cyan-700 transition-colors flex items-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>لیست کامل دوره‌ها و کارگاه‌ها</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-700 transition-colors">
                  نقشه راه و متدولوژی آموزشی
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links & Blog */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 text-base border-r-2 border-purple-500 pr-3">
              دسترسی سریع
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/blog" className="hover:text-cyan-700 transition-colors">
                  مجله و مقالات تخصصی AI
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cyan-700 transition-colors">
                  درباره دیجی نورون
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-700 transition-colors">
                  صفحه تماس با ما
                </Link>
              </li>
              <li>
                <Link href="/services/corporate#consultation" className="hover:text-cyan-700 transition-colors">
                  دریافت مشاوره رایگان آموزش سازمانی
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Phone */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 text-base border-r-2 border-emerald-500 pr-3">
              اطلاعات تماس
            </h4>
            <div className="space-y-3 text-xs">
              <a
                href="tel:02188252497"
                className="p-3 bg-white rounded-xl border border-cyan-300 flex items-center gap-3 group hover:border-cyan-500 transition-all shadow-sm"
              >
                <div className="p-2 rounded-lg bg-cyan-100 text-cyan-700 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500">شماره تماس پشتیبانی و مشاوره:</div>
                  <div className="text-base font-extrabold text-cyan-800 tracking-widest font-mono">
                    02188252497
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-2 text-slate-600">
                <MapPin className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                <span>تهران، خیابان آزادی، مرکز فناوری و نوآوری هوش مصنوعی دیجی نورون</span>
              </div>

              <div className="flex items-center gap-2 text-slate-600">
                <Mail className="w-4 h-4 text-cyan-600 shrink-0" />
                <span>info@diginoron.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © ۲۰۲۶ تمامی حقوق مادی و معنوی این وب‌سایت متعلق به آکادمی دیجی نورون (<span className="font-mono text-cyan-700">learn.diginoron.com</span>) است.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-slate-800">حریم خصوصی</Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-slate-800">شرایط و قوانین</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
