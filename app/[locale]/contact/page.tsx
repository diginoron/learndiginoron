"use client";

import { useState, use } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Headphones, Loader2 } from "lucide-react";
import { Locale, isValidLocale } from "@/lib/i18n";
import { CONTACT_TRANSLATIONS } from "@/data/translations/contact";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function ContactPage({ params }: PageProps) {
  const { locale: rawLocale } = use(params);
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const t = CONTACT_TRANSLATIONS[locale] || CONTACT_TRANSLATIONS.en;

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "enterprise",
    message: "",
  });

  const getSubjectLabel = (key: string) => {
    return t.form.subjectOptions[key as keyof typeof t.form.subjectOptions] || key;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone) return;
    setLoading(true);

    const now = new Date().toISOString();

    try {
      // 1. Direct AJAX to FormSubmit
      await fetch("https://formsubmit.co/ajax/diginoron@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          _subject: `[DigiNoron - Contact (${locale.toUpperCase()})] Message from ${formData.name || "Visitor"} - ${formData.phone}`,
          _template: "table",
          _captcha: "false",
          "Time": now,
          "Form": `Contact Page (${locale})`,
          "Full Name": formData.name,
          "Phone": formData.phone,
          "Email": formData.email || "N/A",
          "Subject": getSubjectLabel(formData.subject),
          "Message": formData.message || "N/A",
        }),
      });

      // 2. Backup to Next.js API
      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          serviceType: getSubjectLabel(formData.subject),
          formType: `Contact Page (${locale})`,
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
    <div className="py-12 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Page Title Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-800 text-xs font-semibold">
          <Headphones className="w-3.5 h-3.5" />
          <span>{t.badge}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-900">
          {t.title} <span className="text-gradient-cyan">{t.titleHighlight}</span>
        </h1>

        <p className="text-sm text-slate-600">
          {t.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Contact Info Cards */}
        <div className="space-y-6">
          <div className="glass-panel bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-6">
            <h3 className="font-bold text-lg text-slate-900 border-b border-slate-100 pb-3">
              {t.infoTitle}
            </h3>

            {/* Direct Phone */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-cyan-100 text-cyan-800 rounded-xl">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium mb-1">
                  {t.phoneLabel}
                </div>
                <a
                  href={`tel:${t.phoneValue.replace(/[^0-9+]/g, "")}`}
                  className="text-lg font-bold font-mono text-slate-900 hover:text-cyan-700 transition-colors block"
                  dir="ltr"
                >
                  {t.phoneValue}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-100 text-purple-800 rounded-xl">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium mb-1">
                  {t.emailLabel}
                </div>
                <a
                  href={`mailto:${t.emailValue}`}
                  className="text-sm font-semibold font-mono text-slate-900 hover:text-cyan-700 transition-colors"
                >
                  {t.emailValue}
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-100 text-emerald-800 rounded-xl">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium mb-1">
                  {t.addressLabel}
                </div>
                <div className="text-xs font-semibold text-slate-700 leading-relaxed">
                  {t.addressValue}
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-amber-100 text-amber-800 rounded-xl">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium mb-1">
                  {t.hoursLabel}
                </div>
                <div className="text-xs font-semibold text-slate-700">
                  {t.hoursValue}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="glass-panel bg-white p-8 rounded-3xl border border-slate-200 shadow-md">
            {submitted ? (
              <div className="py-16 text-center space-y-4 animate-in fade-in duration-300">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
                <h3 className="text-2xl font-bold text-slate-900">
                  {t.form.successTitle}
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  {t.form.successDesc}
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", phone: "", email: "", subject: "enterprise", message: "" });
                  }}
                  className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition-all pt-2"
                >
                  {t.form.anotherMsgBtn}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    {t.form.title}
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    {t.form.subtitle}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      {t.form.nameLabel} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.form.namePlaceholder}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      {t.form.phoneLabel} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={t.form.phonePlaceholder}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-none focus:border-cyan-500 transition-colors font-mono text-left"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      {t.form.emailLabel}
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t.form.emailPlaceholder}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-none focus:border-cyan-500 transition-colors font-mono"
                      dir="ltr"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      {t.form.subjectLabel}
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-none focus:border-cyan-500 transition-colors"
                    >
                      <option value="enterprise">{t.form.subjectOptions.enterprise}</option>
                      <option value="corporate">{t.form.subjectOptions.corporate}</option>
                      <option value="kids">{t.form.subjectOptions.kids}</option>
                      <option value="other">{t.form.subjectOptions.other}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {t.form.messageLabel}
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.form.messagePlaceholder}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-extrabold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 active:scale-98 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>{t.form.submittingBtn}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{t.form.submitBtn}</span>
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
