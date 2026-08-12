"use client";

import { useState } from "react";
import { Phone, Send, CheckCircle2, Headphones, Sparkles, Calendar } from "lucide-react";

export default function ContactTeaser() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    audienceType: "kids",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="consultation" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel bg-white p-8 sm:p-12 rounded-3xl border border-cyan-300 relative shadow-xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Info & Phone */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-800 text-xs font-semibold">
                <Headphones className="w-3.5 h-3.5" />
                <span>مشاوره تخصصی آموزشی</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
                نیاز به مشاوره جهت انتخاب دوره‌های <span className="text-gradient-cyan">کودکان، نوجوانان</span> یا <span className="text-purple-700">سازمانی</span> دارید؟
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                کارشناسان آکادمی دیجی نورون آماده پاسخگویی به تمامی سوالات شما درباره برنامه‌های آموزشی، سرفصل‌ها و شرایط برگزاری کلاس‌ها هستند.
              </p>

              {/* Prominent Phone Highlight */}
              <a
                href="tel:02188252497"
                className="p-6 bg-slate-50 rounded-2xl border border-cyan-300 flex items-center gap-5 hover:border-cyan-400 transition-all group shadow-sm"
              >
                <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-600 to-blue-600 text-white group-hover:scale-110 transition-transform">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block font-medium">شماره تماس مستقیم مشاوره و ثبت‌نام:</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-cyan-800 tracking-widest font-mono">
                    02188252497
                  </span>
                </div>
              </a>

              <div className="grid grid-cols-2 gap-4 text-xs text-slate-600 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>پاسخگویی شنبه تا چهارشنبه</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>ارزیابی رایگان سطح دانش‌آموز</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>پیشنهاد راهکار سازمانی</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>برگزاری کاتالوگ اختصاصی</span>
                </div>
              </div>
            </div>

            {/* Right Column: Fast Form */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-600" />
                <span>درخواست تماس مشاوره رایگان</span>
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                شماره خود را وارد کنید تا کارشناسان ما کمتر از ۲ ساعت کاری با شما تماس بگیرند.
              </p>

              {submitted ? (
                <div className="p-6 bg-cyan-50 border border-cyan-300 rounded-xl text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-cyan-600 mx-auto animate-bounce" />
                  <h4 className="font-bold text-slate-900 text-base">درخواست شما با موفقیت ثبت شد</h4>
                  <p className="text-xs text-slate-600">
                    همکاران ما در آکادمی دیجی نورون به زودی با شماره اعلام شده تماس خواهند گرفت.
                  </p>
                  <p className="text-xs text-cyan-700 font-mono pt-2">
                    یا می‌توانید مستقیما با 02188252497 تماس بگیرید.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      نام و نام خانوادگی
                    </label>
                    <input
                      type="text"
                      placeholder="مثلا: علی محمدی"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      شماره همراه جهت تماس <span className="text-cyan-600">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="۰۹۱۲..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-cyan-500 transition-colors text-right dir-ltr placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      نوع دوره مدنظر
                    </label>
                    <select
                      value={formData.audienceType}
                      onChange={(e) => setFormData({ ...formData, audienceType: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-cyan-500 transition-colors"
                    >
                      <option value="kids">آموزش کودکان و نوجوانان (۸ تا ۱۸ سال)</option>
                      <option value="corporate">آموزش‌های سازمانی و ارگان‌ها</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      توضیحات کوتاه (اختیاری)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="سوال یا نیاز خاص خود را بنویسید..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-extrabold text-sm rounded-xl shadow-md flex items-center justify-center gap-2 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>ارسال درخواست مشاوره</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
