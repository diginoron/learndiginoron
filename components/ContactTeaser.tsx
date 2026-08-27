"use client";

import { useState } from "react";
import { Phone, Send, CheckCircle2, Headphones, Sparkles, Loader2 } from "lucide-react";

export default function ContactTeaser() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    audienceType: "enterprise",
    message: "",
  });

  const getServiceLabel = (type: string) => {
    switch (type) {
      case "enterprise":
        return "۱. خدمات هوشمندسازی سازمانی (سند راهبردی، ایجنت‌ها، فرآیندها)";
      case "corporate":
        return "۲. آموزش‌های سازمانی و شرکتی";
      case "kids":
        return "۳. آموزش کودکان و نوجوانان (۸ تا ۱۸ سال)";
      default:
        return type;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone) return;
    setLoading(true);

    const now = new Date().toLocaleString("fa-IR", { timeZone: "Asia/Tehran" });

    try {
      // 1. Direct Client-side AJAX submission to FormSubmit
      await fetch("https://formsubmit.co/ajax/diginoron@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          _subject: `[دیجی نورون] درخواست مشاوره: ${formData.name || "کاربر"} - ${formData.phone}`,
          _template: "table",
          _captcha: "false",
          "زمان ثبت": now,
          "نوع فرم": "فرم مشاوره سریع (انتهای صفحه)",
          "نام و نام خانوادگی": formData.name || "ثبت نشده",
          "شماره تماس": formData.phone,
          "حوزه خدمت": getServiceLabel(formData.audienceType),
          "متن توضیحات": formData.message || "بدون توضیحات",
        }),
      });

      // 2. Internal server-side API call as backup
      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          serviceType: getServiceLabel(formData.audienceType),
          formType: "فرم مشاوره سریع صفحه اصلی / انتهای صفحه",
        }),
      }).catch((err) => console.log("Backup API notice:", err));

    } catch (err) {
      console.error("Form submit error:", err);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <section id="consultation" className="py-16 sm:py-20 relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel bg-white p-6 sm:p-12 rounded-3xl border border-cyan-300 relative shadow-xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            {/* Left Column: Info & Phone */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-800 text-xs font-semibold">
                <Headphones className="w-3.5 h-3.5" />
                <span>مشاوره تخصصی هوشمندسازی و آموزش</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
                نیاز به مشاوره جهت <span className="text-cyan-700">هوشمندسازی سازمانی</span> یا <span className="text-purple-700">خدمات آموزشی</span> دارید؟
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                کارشناسان دیجی نورون آماده پاسخگویی به تمامی سوالات شما درباره سند راهبردی هوشمندسازی، طراحی ایجنت‌ها، اتوماسیون فرآیندها و دوره‌های آموزشی هستند.
              </p>

              {/* Prominent Phone Highlight */}
              <a
                href="tel:02188252497"
                className="p-5 sm:p-6 bg-slate-50 rounded-2xl border border-cyan-300 flex items-center gap-4 sm:gap-5 hover:border-cyan-400 transition-all group shadow-sm"
              >
                <div className="p-3.5 sm:p-4 rounded-xl bg-gradient-to-br from-cyan-600 to-blue-600 text-white group-hover:scale-110 transition-transform shrink-0">
                  <Phone className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block font-medium">شماره تماس مستقیم مشاوره و استعلام:</span>
                  <span className="text-xl sm:text-3xl font-extrabold text-cyan-800 tracking-widest font-mono">
                    02188252497
                  </span>
                </div>
              </a>

              <div className="grid grid-cols-2 gap-3 text-xs text-slate-600 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>طراحی سند راهبردی و اطلس بهبود</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>استقرار ایجنت و اتوماسیون فرآیند</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>آموزش‌های تخصصی سازمانی</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>آموزش کودکان و نوجوانان</span>
                </div>
              </div>
            </div>

            {/* Right Column: Fast Form */}
            <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 backdrop-blur-xl">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-600" />
                <span>درخواست تماس مشاوره رایگان</span>
              </h3>
              <p className="text-xs text-slate-500 mb-5">
                اطلاعات خود را وارد کنید تا کارشناسان ما کمتر از ۲ ساعت کاری با شما تماس بگیرند.
              </p>

              {submitted ? (
                <div className="p-6 bg-cyan-50 border border-cyan-300 rounded-xl text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-cyan-600 mx-auto animate-bounce" />
                  <h4 className="font-bold text-slate-900 text-base">درخواست شما با موفقیت ثبت شد</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    اطلاعات شما دریافت و به واحد پشتیبانی (<span className="font-mono text-cyan-700">diginoron@gmail.com</span>) ارسال گردید. به زودی با شما تماس خواهیم گرفت.
                  </p>
                  <p className="text-xs text-cyan-700 font-mono pt-2">
                    یا می‌توانید مستقیما با 02188252497 تماس بگیرید.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      نام و نام خانوادگی
                    </label>
                    <input
                      type="text"
                      placeholder="مثلا: علی محمدی"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      شماره همراه جهت تماس <span className="text-cyan-600">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="۰۹۱۲..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-cyan-500 transition-colors text-right dir-ltr placeholder:text-slate-400 font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      حوزه خدمت مدنظر
                    </label>
                    <select
                      value={formData.audienceType}
                      onChange={(e) => setFormData({ ...formData, audienceType: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-cyan-500 transition-colors"
                    >
                      <option value="enterprise">۱. خدمات هوشمندسازی سازمانی</option>
                      <option value="corporate">۲. آموزش‌های سازمانی و شرکتی</option>
                      <option value="kids">۳. آموزش کودکان و نوجوانان (۸ تا ۱۸ سال)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      توضیحات کوتاه (اختیاری)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="سوال یا نیاز خاص خود را بنویسید..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-400"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-md flex items-center justify-center gap-2 transition-all disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>در حال ارسال...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>ارسال درخواست مشاوره</span>
                      </>
                    )}
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
