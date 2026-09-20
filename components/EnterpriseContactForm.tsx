"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Send, Sparkles } from "lucide-react";
import { Locale } from "@/lib/i18n";

interface EnterpriseContactFormProps {
  locale?: Locale;
}

export default function EnterpriseContactForm({ locale = "en" }: EnterpriseContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    serviceType: "blueprint",
    message: "",
  });

  const getServiceLabel = (type: string) => {
    if (locale === "en") {
      switch (type) {
        case "blueprint":
          return "1. Strategic AI Transformation Blueprint (APQC)";
        case "agents":
          return "2. Custom AI Agents & Multi-Agent Swarms";
        case "bpa":
          return "3. Business Process Automation (BPA)";
        case "implementation":
          return "4. On-Premise Deployment & Infrastructure";
        case "transfer":
          return "5. Technology & Source Code Transfer";
        case "training":
          return "6. Corporate AI Training & Masterclasses";
        default:
          return type;
      }
    } else if (locale === "ar") {
      switch (type) {
        case "blueprint":
          return "١. إعداد خريطة طريق التحول الذكي (APQC)";
        case "agents":
          return "٢. تصميم وتطوير وكلاء الذكاء الاصطناعي المستقلين";
        case "bpa":
          return "٣. أتمتة العمليات المؤسسية (BPA)";
        case "implementation":
          return "٤. النشر والتثبيت المحلي On-Premise";
        case "transfer":
          return "٥. نقل التكنولوجيا والشيفرة المصدرية";
        case "training":
          return "٦. التدريب والتأهيل المؤسسي للفرق";
        default:
          return type;
      }
    } else {
      switch (type) {
        case "blueprint":
          return "۱. طراحی سند راهبردی هوشمندسازی سازمانی و اطلس بهبود (APQC)";
        case "agents":
          return "۲. طراحی هوش مصنوعی و ایجنت‌های سازمانی (AI Agents)";
        case "bpa":
          return "۳. هوشمندسازی و اتوماسیون فرآیندهای کسب‌وکار (BPA)";
        case "implementation":
          return "۴. پیاده‌سازی و استقرار On-Premise";
        case "transfer":
          return "۵. انتقال تکنولوژی و سورس‌کد به سازمان";
        case "training":
          return "۶. کارگاه‌ها و آموزش‌های تخصصی سازمانی";
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
      // 1. Direct AJAX to FormSubmit
      await fetch("https://formsubmit.co/ajax/diginoron@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          _subject: `[DigiNoron - Enterprise (${locale.toUpperCase()})] Inbound: ${formData.name} (${formData.company || "Org"})`,
          _template: "table",
          _captcha: "false",
          "Submitted At": now,
          "Form Type": `Enterprise AI Inbound Form (${locale})`,
          "Representative": formData.name,
          "Organization / Company": formData.company || "N/A",
          "Direct Phone": formData.phone,
          "Selected Service": getServiceLabel(formData.serviceType),
          "Project Requirements": formData.message || "N/A",
        }),
      });

      // 2. Backup to Next.js API
      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${formData.name} (${formData.company || "No Company"})`,
          company: formData.company,
          phone: formData.phone,
          serviceType: getServiceLabel(formData.serviceType),
          message: formData.message,
          formType: `Enterprise AI Form (${locale})`,
        }),
      }).catch((err) => console.log("Backup API notice:", err));

    } catch (err) {
      console.error("Enterprise Form submit error:", err);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-12 border border-cyan-500/30 shadow-2xl relative overflow-hidden">
      <div className="max-w-2xl mx-auto text-center space-y-3 mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-300 text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>
            {locale === "en" ? "Initial Assessment & Free Enterprise Advisory" : locale === "fa" ? "ارزیابی اولیه و جلسه مشاوره رایگان سازمانی" : "تقييم أولي واستشارة مؤسسية مجانية"}
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black">
          {locale === "en" ? "Ready to Transform Your Organization with AI?" : locale === "fa" ? "آماده هوشمندسازی سازمان خود هستید؟" : "هل أنتم مستعدون لقيادة التحول الذكي في مؤسستكم؟"}
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {locale === "en" ? "Provide your organization details and our senior AI architects will arrange an exploratory discovery session within 48 hours." : locale === "fa" ? "مشخصات سازمان خود را وارد کنید تا کارشناسان ارشد هوش مصنوعی دیجی نورون جهت بررسی فرآیندها و برگزاری جلسه دمو با شما تماس بگیرند." : "أدخل بيانات مؤسستك وسيتواصل معك كبار مهندسي الذكاء الاصطناعي لجدولة جلسة تشخيصية وعرض حي."}
        </p>
      </div>

      <div className="max-w-2xl mx-auto bg-slate-950/80 border border-slate-800 p-6 sm:p-8 rounded-2xl">
        {submitted ? (
          <div className="text-center py-10 space-y-4 animate-in fade-in">
            <CheckCircle2 className="w-14 h-14 text-cyan-400 mx-auto" />
            <h3 className="text-xl font-bold text-white">
              {locale === "en" ? "Inquiry Registered Successfully!" : locale === "fa" ? "درخواست شما با موفقیت ثبت شد!" : "تم تسجيل طلبكم بنجاح!"}
            </h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              {locale === "en" ? "Our enterprise transformation team will contact you directly to schedule an architecture session." : locale === "fa" ? "کارشناسان دپارتمان هوشمندسازی سازمانی دیجی نورون ظرف ۲۴ الی ۴۸ ساعت آینده جهت هماهنگی جلسه با شما تماس خواهند گرفت." : "سيتواصل معكم فريق التحول المؤسسي في ديجي نورون لترتيب موعد الجلسة الفنية."}
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: "", company: "", phone: "", serviceType: "blueprint", message: "" });
              }}
              className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-cyan-300 rounded-xl text-xs font-bold transition-all pt-2"
            >
              {locale === "en" ? "Register Another Inquiry" : locale === "fa" ? "ثبت درخواست دیگر" : "تسجيل طلب آخر"}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  {locale === "en" ? "Representative Name" : locale === "fa" ? "نام و نام خانوادگی نماینده" : "اسم الممثل أو المسؤول"} <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={locale === "en" ? "e.g., Jane Doe" : locale === "fa" ? "مثال: علی احمدی" : "مثال: عبد الله السالم"}
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  {locale === "en" ? "Organization / Company Name" : locale === "fa" ? "نام شرکت / سازمان" : "اسم المؤسسة أو الشركة"} <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder={locale === "en" ? "e.g., Acme Technologies" : locale === "fa" ? "مثال: پتروشیمی / هلدینگ ..." : "مثال: شركة الابتكار المتقدمة"}
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                {locale === "en" ? "Direct Telephone / Mobile" : locale === "fa" ? "شماره تماس مستقیم یا همراه" : "رقم الهاتف المباشر أو المحمول"} <span className="text-rose-400">*</span>
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder={locale === "en" ? "+1 234 567 8900" : "۰۹۱۲۳۴۵۶۷۸۹"}
                className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-400 font-mono text-left"
                dir="ltr"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                {locale === "en" ? "Primary Service of Interest" : locale === "fa" ? "حوزه خدمت مورد نظر" : "الخدمة الأساسية المطلوبة"}
              </label>
              <select
                value={formData.serviceType}
                onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-400"
              >
                <option value="blueprint">
                  {locale === "en" ? "1. Strategic AI Transformation Roadmap (APQC)" : locale === "fa" ? "۱. طراحی سند راهبردی هوشمندسازی سازمانی (APQC)" : "١. إعداد خريطة طريق التحول الذكي (APQC)"}
                </option>
                <option value="agents">
                  {locale === "en" ? "2. Custom AI Agents & Multi-Agent Swarms" : locale === "fa" ? "۲. طراحی هوش مصنوعی و ایجنت‌های سازمانی (AI Agents)" : "٢. تطوير وكلاء الذكاء الاصطناعي المستقلين"}
                </option>
                <option value="bpa">
                  {locale === "en" ? "3. Business Process Automation (BPA)" : locale === "fa" ? "۳. هوشمندسازی و اتوماسیون فرآیندهای کسب‌وکار (BPA)" : "٣. أتمتة العمليات التجارية (BPA)"}
                </option>
                <option value="implementation">
                  {locale === "en" ? "4. On-Premise Deployment & Infrastructure" : locale === "fa" ? "۴. پیاده‌سازی و استقرار On-Premise" : "٤. النشر والتثبيت المحلي On-Premise"}
                </option>
                <option value="transfer">
                  {locale === "en" ? "5. Technology & Source Code Transfer" : locale === "fa" ? "۵. انتقال تکنولوژی و سورس‌کد به سازمان" : "٥. نقل التكنولوجيا والشيفرة المصدرية"}
                </option>
                <option value="training">
                  {locale === "en" ? "6. Corporate AI Training & Masterclasses" : locale === "fa" ? "۶. کارگاه‌ها و آموزش‌های تخصصی سازمانی" : "٦. التدريب والتأهيل المؤسسي للفرق"}
                </option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                {locale === "en" ? "Brief Problem Statement / Objective" : locale === "fa" ? "شرح خلاصه چالش یا فرآیند مدنظر جهت هوشمندسازی" : "نبذة عن التحديات أو العمليات المراد أتمتتها"}
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={locale === "en" ? "Outline your operational goals, bottlenecks, or preferred tech stack..." : locale === "fa" ? "توضیح مختصری از اهداف، تعداد کاربران یا سیستم‌های فعلی سازمان..." : "توضيح موجز للأهداف التشغيلية أو الأنظمة الحالية..."}
                className="w-full px-3.5 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-400 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-black text-xs sm:text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 active:scale-98 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>{locale === "en" ? "Submitting..." : locale === "fa" ? "در حال ثبت درخواست..." : "جارٍ الإرسال..."}</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>{locale === "en" ? "Submit Enterprise Request" : locale === "fa" ? "ثبت درخواست جلسه مشاوره سازمانی" : "إرسال طلب الاستشارة المؤسسية"}</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
