"use client";

import { useState } from "react";
import { Phone, Send, CheckCircle2, Headphones, Loader2 } from "lucide-react";
import { Locale } from "@/lib/i18n";
import { HOME_TRANSLATIONS } from "@/data/translations/home";

interface ContactTeaserProps {
  locale?: Locale;
}

export default function ContactTeaser({ locale = "en" }: ContactTeaserProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    audienceType: "enterprise",
    message: "",
  });

  const t = HOME_TRANSLATIONS[locale]?.contactTeaser || HOME_TRANSLATIONS.en.contactTeaser;

  const getServiceLabel = (type: string) => {
    if (locale === "en") {
      switch (type) {
        case "enterprise":
          return "1. Enterprise AI Solutions (Roadmap, AI Agents, BPA)";
        case "corporate":
          return "2. Corporate AI Training & Executive Masterclasses";
        case "kids":
          return "3. Kids & Teens AI Academy (Ages 8-18)";
        default:
          return type;
      }
    } else if (locale === "ar") {
      switch (type) {
        case "enterprise":
          return "١. حلول الذكاء الاصطناعي للمؤسسات (خريطة الطريق، الوكلاء، BPA)";
        case "corporate":
          return "٢. التدريب والتأهيل المؤسسي";
        case "kids":
          return "٣. أكاديمية الأطفال واليافعين";
        default:
          return type;
      }
    } else {
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
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone) return;
    setLoading(true);

    const now = new Date().toISOString();

    try {
      // 1. Direct Client-side AJAX submission to FormSubmit
      await fetch("https://formsubmit.co/ajax/diginoron@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          _subject: `[DigiNoron - ${locale.toUpperCase()}] Consultation Request: ${formData.name || "User"} - ${formData.phone}`,
          _template: "table",
          _captcha: "false",
          "Submitted At": now,
          "Form Source": `Quick Consultation Form (${locale})`,
          "Name": formData.name || "N/A",
          "Phone": formData.phone,
          "Service Track": getServiceLabel(formData.audienceType),
          "Message": formData.message || "N/A",
        }),
      });

      // 2. Internal server-side API call as backup
      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          serviceType: getServiceLabel(formData.audienceType),
          formType: `Quick Consultation (${locale})`,
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
    <section id="consultation" className="pt-4 sm:pt-6 pb-16 sm:pb-20 relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel bg-white p-6 sm:p-12 rounded-3xl border border-cyan-300 relative shadow-xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            {/* Left Column: Info & Phone */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-800 text-xs font-semibold">
                <Headphones className="w-3.5 h-3.5" />
                <span>{t.badge}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
                {t.title}
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                {t.description}
              </p>

              {/* Prominent Phone Highlight */}
              <a
                href="tel:02188252497"
                className="inline-flex items-center gap-3 p-4 bg-gradient-to-r from-cyan-900 to-slate-900 text-white rounded-2xl shadow-lg hover:shadow-cyan-500/20 transition-all group"
              >
                <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-300 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-cyan-300 font-medium">{t.callNowBtn}</div>
                  <div className="text-xl font-bold font-mono tracking-wider dir-ltr">
                    02188252497
                  </div>
                </div>
              </a>
            </div>

            {/* Right Column: Quick Callback Form */}
            <div className="bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-2xl relative">
              {submitted ? (
                <div className="text-center py-8 space-y-3 animate-in fade-in">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                  <h3 className="text-lg font-bold text-slate-900">
                    {t.successMessage}
                  </h3>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", phone: "", audienceType: "enterprise", message: "" });
                    }}
                    className="text-xs text-cyan-700 font-bold hover:underline pt-2"
                  >
                    {locale === "en" ? "Send Another Inquiry" : locale === "fa" ? "ارسال پیام جدید" : "إرسال رسالة أخرى"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-200 pb-3 mb-4">
                    <h3 className="font-bold text-base text-slate-900">
                      {t.formTitle}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {t.formSubtitle}
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.nameLabel}
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={locale === "en" ? "e.g., Alexander Smith" : locale === "fa" ? "مثال: علی محمدی" : "مثال: أحمد المنصوري"}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.phoneLabel} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={locale === "en" ? "+1 234 567 8900" : "۰۹۱۲۳۴۵۶۷۸۹"}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs focus:outline-none focus:border-cyan-500 text-left font-mono"
                      dir="ltr"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.serviceTypeLabel}
                    </label>
                    <select
                      value={formData.audienceType}
                      onChange={(e) => setFormData({ ...formData, audienceType: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs focus:outline-none focus:border-cyan-500"
                    >
                      <option value="enterprise">
                        {locale === "en" ? "1. Enterprise AI Solutions (Roadmap, Multi-Agents, BPA)" : locale === "fa" ? "۱. خدمات هوشمندسازی سازمانی (سند راهبردی، ایجنت‌ها، فرآیندها)" : "١. حلول الذكاء الاصطناعي للمؤسسات (خريطة الطريق، الوكلاء)"}
                      </option>
                      <option value="corporate">
                        {locale === "en" ? "2. Corporate AI Training & Executive Masterclasses" : locale === "fa" ? "۲. آموزش‌های سازمانی و شرکتی" : "٢. التدريب والتأهيل المؤسسي"}
                      </option>
                      <option value="kids">
                        {locale === "en" ? "3. Kids & Teens AI Academy (Ages 8-18)" : locale === "fa" ? "۳. آموزش کودکان و نوجوانان (۸ تا ۱۸ سال)" : "٣. أكاديمية الأطفال واليافعين"}
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.notesLabel}
                    </label>
                    <textarea
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={locale === "en" ? "Describe your organization's objective or question..." : locale === "fa" ? "توضیح کوتاه درباره سازمان یا هدف مدنظر..." : "نبذة عن أهداف المؤسسة أو استفساركم..."}
                      className="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs focus:outline-none focus:border-cyan-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-extrabold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 active:scale-98 disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>{locale === "en" ? "Submitting..." : locale === "fa" ? "در حال ثبت..." : "جارٍ الإرسال..."}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{t.submitBtn}</span>
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
