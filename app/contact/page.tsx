"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Headphones, MessageSquare, Loader2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "enterprise",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone) return;
    setLoading(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          formType: "فرم صفحه تماس با ما",
        }),
      });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="py-12 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Page Title Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-800 text-xs font-semibold">
          <Headphones className="w-3.5 h-3.5" />
          <span>ارتباط مستقیم با دیجی نورون (ai.diginoron.com)</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-900">
          تماس با <span className="text-gradient-cyan">دیجی نورون</span>
        </h1>

        <p className="text-sm text-slate-600">
          مشاورین ما پاسخگوی تمامی سوالات شما در زمینه هوشمندسازی سازمانی، ایجنت‌ها، دوره‌های آموزشی کودکان، نوجوانان و ارگان‌ها هستند.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Contact Info Cards */}
        <div className="space-y-6">
          
          {/* Prominent Direct Phone Card */}
          <div className="glass-panel bg-white p-6 rounded-3xl border border-cyan-300 space-y-4 shadow-md">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-cyan-100 text-cyan-700">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">شماره تماس اصلی و پشتیبانی</h3>
                <span className="text-xs text-cyan-700 font-bold">پاسخگویی سریع</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="tel:02188252497"
                className="text-2xl sm:text-3xl font-extrabold text-cyan-800 tracking-widest font-mono block hover:text-cyan-600 transition-colors"
              >
                02188252497
              </a>
              <p className="text-xs text-slate-500 mt-1">
                (۰۲۱-۸۸۲۵۲۴۹۷) - جهت مشاوره تلفنی فوری کلیک کنید
              </p>
            </div>
          </div>

          {/* Working Hours */}
          <div className="glass-panel bg-white p-6 rounded-3xl border border-slate-200 space-y-3 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-purple-100 text-purple-700">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">ساعات کاری</h3>
                <span className="text-xs text-slate-500">شنبه تا چهارشنبه: ۸:۰۰ الی ۱۷:۰۰</span>
              </div>
            </div>
            <p className="text-xs text-slate-500 pt-1">
              پنجشنبه‌ها: ۸:۰۰ الی ۱۳:۰۰ (پشتیبانی ۲۴ ساعته از طریق ایمیل)
            </p>
          </div>

          {/* Location */}
          <div className="glass-panel bg-white p-6 rounded-3xl border border-slate-200 space-y-3 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-emerald-100 text-emerald-700">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">نشانی و ایمیل</h3>
                <span className="text-xs text-slate-500">مرکز نوآوری و هوش مصنوعی</span>
              </div>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              تهران، خیابان آزادی، مجتمع فناوری و هوش مصنوعی دیجی نورون
            </p>
            <p className="text-xs text-cyan-700 font-mono pt-1">
              ایمیل سازمانی: diginoron@gmail.com
            </p>
          </div>

        </div>

        {/* Form Column */}
        <div className="lg:col-span-2">
          <div className="glass-panel bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 space-y-6 shadow-md">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-600" />
                <span>فرم پیام مستقیم و درخواست مشاوره</span>
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                اطلاعات خود را وارد کنید تا کارشناسان دیجی نورون در اسرع وقت با شما تماس بگیرند.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-cyan-50 border border-cyan-300 rounded-2xl text-center space-y-4 py-16">
                <CheckCircle2 className="w-16 h-16 text-cyan-600 mx-auto animate-bounce" />
                <h3 className="text-xl font-bold text-slate-900">پیام شما با موفقیت دریافت شد</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                  اطلاعات با موفقیت به واحد مشاوره دیجی نورون (<span className="font-mono text-cyan-700">diginoron@gmail.com</span>) ارسال شد. کارشناسان ما به زودی با شما تماس خواهند گرفت.
                </p>
                <div className="pt-2 text-cyan-800 font-mono font-bold text-sm">
                  شماره پشتیبانی فوری: 02188252497
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      نام و نام خانوادگی <span className="text-cyan-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="مثلا: مریم احمدی"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      شماره تلفن همراه <span className="text-cyan-600">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="۰۹۱۲..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-cyan-500 transition-colors text-right dir-ltr placeholder:text-slate-400 font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      پست الکترونیکی (اختیاری)
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-cyan-500 transition-colors text-right dir-ltr placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      موضوع مشاوره
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-cyan-500 transition-colors"
                    >
                      <option value="enterprise">هوشمندسازی سازمانی، ایجنت‌ها و اتوماسیون</option>
                      <option value="corporate">آموزش‌های سازمانی و مسترکلاس مدیران</option>
                      <option value="kids">آموزش کودکان و نوجوانان (۸ تا ۱۸ سال)</option>
                      <option value="other">سایر موارد</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    متن پیام یا توضیحات درخواست
                  </label>
                  <textarea
                    rows={4}
                    placeholder="پیام یا شرح نیاز سازمانی/آموزشی خود را وارد فرمایید..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-extrabold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 transition-all text-sm disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>در حال ارسال پیام...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>ارسال پیام و درخواست مشاوره</span>
                    </>
                  )}
                </button>
              </form>
            )}

          </div>
        </div>

      </div>

    </div>
  );
}
