"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Headphones, Sparkles, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "kids",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone) return;
    setSubmitted(true);
  };

  return (
    <div className="py-12 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Page Title Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
          <Headphones className="w-3.5 h-3.5" />
          <span>ارتباط مستقیم با آکادمی دیجی نورون</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white">
          تماس با <span className="text-gradient-cyan">دیجی نورون</span>
        </h1>

        <p className="text-sm text-gray-300">
          مشاورین ما پاسخگوی تمامی سوالات شما در زمینه دوره‌های آموزشی کودکان، نوجوانان و برنامه‌های سازمانی هستند.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Contact Info Cards */}
        <div className="space-y-6">
          
          {/* Prominent Direct Phone Card */}
          <div className="glass-panel p-6 rounded-3xl border border-cyan-500/40 bg-gradient-to-br from-slate-900 to-cyan-950/50 space-y-4 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-cyan-500/20 text-cyan-400">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">شماره تماس اصلی و پشتیبانی</h3>
                <span className="text-xs text-cyan-400">پاسخگویی سریع</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="tel:02188252497"
                className="text-2xl sm:text-3xl font-extrabold text-white tracking-widest text-cyan-300 font-mono block hover:text-cyan-400 transition-colors"
              >
                02188252497
              </a>
              <p className="text-xs text-gray-400 mt-1">
                (۰۲۱-۸۸۲۵۲۴۹۷) - جهت مشاوره تلفنی فوری کلیک کنید
              </p>
            </div>
          </div>

          {/* Working Hours */}
          <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-purple-500/20 text-purple-400">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">ساعات کاری آکادمی</h3>
                <span className="text-xs text-gray-400">شنبه تا چهارشنبه: ۸:۰۰ الی ۱۷:۰۰</span>
              </div>
            </div>
            <p className="text-xs text-gray-400 pt-1">
              پنجشنبه‌ها: ۸:۰۰ الی ۱۳:۰۰ (تعطیلات رسمی: پاسخگویی از طریق پیام‌رسان)
            </p>
          </div>

          {/* Location */}
          <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-400">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">نشانی آکادمی</h3>
                <span className="text-xs text-gray-400">مرکز نوآوری دیجی نورون</span>
              </div>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">
              تهران، خیابان آزادی، مجتمع فناوری و هوش مصنوعی دیجی نورون
            </p>
            <p className="text-xs text-gray-400 pt-1">
              ایمیل: info@diginoron.com
            </p>
          </div>

        </div>

        {/* Form Column */}
        <div className="lg:col-span-2">
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-800 space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                <span>فرم پیام مستقیم و درخواست مشاوره</span>
              </h2>
              <p className="text-xs text-gray-400 mt-1">
                اطلاعات خود را وارد کنید تا کارشناسان آکادمی دیجی نورون در اسرع وقت با شما تماس بگیرند.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-cyan-950/60 border border-cyan-500/40 rounded-2xl text-center space-y-4 py-16">
                <CheckCircle2 className="w-16 h-16 text-cyan-400 mx-auto animate-bounce" />
                <h3 className="text-xl font-bold text-white">پیام شما با موفقیت دریافت شد</h3>
                <p className="text-xs text-gray-300 max-w-md mx-auto leading-relaxed">
                  از تماس شما متشکریم. کارشناسان ما جهت ارائه مشاوره آموزشی به زودی با شما ارتباط برقرار خواهند کرد.
                </p>
                <div className="pt-2 text-cyan-300 font-mono font-bold text-sm">
                  شماره پشتیبانی فوری: 02188252497
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-2">
                      نام و نام خانوادگی <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="مثلا: مریم احمدی"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-2">
                      شماره تلفن همراه <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="۰۹۱۲..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors text-right dir-ltr"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-2">
                      پست الکترونیکی (اختیاری)
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors text-right dir-ltr"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-2">
                      موضوع مشاوره
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    >
                      <option value="kids">آموزش کودکان و نوجوانان (۸ تا ۱۸ سال)</option>
                      <option value="corporate">آموزش‌های سازمانی و ارگان‌ها</option>
                      <option value="courses">سوال در مورد دوره‌ها و هزینه‌ها</option>
                      <option value="other">سایر موارد</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-2">
                    متن پیام یا توضیحات درخواست
                  </label>
                  <textarea
                    rows={4}
                    placeholder="پیام یا شرح نیاز آموزشی خود را وارد فرمایید..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-extrabold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 transition-all text-base"
                >
                  <Send className="w-5 h-5" />
                  <span>ارسال پیام و درخواست مشاوره</span>
                </button>
              </form>
            )}

          </div>
        </div>

      </div>

    </div>
  );
}
