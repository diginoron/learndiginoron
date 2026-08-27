"use client";

import { useState } from "react";
import { Phone, CheckCircle2, Loader2, Send, Sparkles } from "lucide-react";

export default function EnterpriseContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    serviceType: "all",
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
          name: `${formData.name} (${formData.company || "شرکت ثبت نشده"})`,
          phone: formData.phone,
          subject: formData.serviceType,
          message: formData.message,
          formType: "فرم اختصاصی هوشمندسازی سازمانی (Enterprise AI)",
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
    <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-12 border border-cyan-500/30 shadow-2xl relative overflow-hidden">
      <div className="max-w-2xl mx-auto text-center space-y-3 mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-300 text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ارزیابی اولیه و جلسه مشاوره رایگان سازمانی</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black">
          آماده هوشمندسازی سازمان خود هستید؟
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          مشخصات سازمان خود را وارد کنید تا کارشناسان ارشد هوش مصنوعی دیجی نورون جهت بررسی فرآیندها و برگزاری جلسه دمو با شما تماس بگیرند.
        </p>
      </div>

      {submitted ? (
        <div className="p-8 bg-cyan-950/60 border border-cyan-500/40 rounded-2xl text-center space-y-4 max-w-lg mx-auto">
          <CheckCircle2 className="w-16 h-16 text-cyan-400 mx-auto animate-bounce" />
          <h3 className="text-xl font-bold text-white">درخواست ارزیابی با موفقیت ثبت شد</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            اطلاعات سازمان شما به واحد فنی دیجی نورون (<span className="font-mono text-cyan-300">diginoron@gmail.com</span>) ارسال گردید و در اسرع وقت جهت هماهنگی جلسه دمو با شما تماس خواهیم گرفت.
          </p>
          <div className="pt-2 text-cyan-300 font-mono font-bold text-sm">
            خط تماس مستقیم دپارتمان سازمانی: 02188252497
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-300 font-bold mb-1.5">نام و نام خانوادگی مسئول</label>
              <input 
                type="text" 
                required
                placeholder="مثال: دکتر احمدی" 
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-400 text-xs placeholder:text-slate-500"
              />
            </div>
            <div>
              <label className="block text-slate-300 font-bold mb-1.5">نام شرکت / سازمان</label>
              <input 
                type="text" 
                placeholder="مثال: شرکت پتروشیمی / هلدینگ..." 
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-400 text-xs placeholder:text-slate-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-300 font-bold mb-1.5">شماره تماس مستقیم یا همراه <span className="text-cyan-400">*</span></label>
              <input 
                type="tel" 
                required
                placeholder="0912... یا 021..." 
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-400 text-xs font-mono text-right dir-ltr placeholder:text-slate-500"
              />
            </div>
            <div>
              <label className="block text-slate-300 font-bold mb-1.5">حوزه خدمت مورد نظر</label>
              <select 
                value={formData.serviceType}
                onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-400 text-xs"
              >
                <option value="all">هوشمندسازی جامع فرآیندها و ایجنت‌ها</option>
                <option value="agents">طراحی ایجنت‌های سازمانی (AI Agents)</option>
                <option value="bpa">اتوماسیون فرآیندهای کسب‌وکار (BPA)</option>
                <option value="implementation">پیاده‌سازی و استقرار On-Premise</option>
                <option value="transfer">انتقال تکنولوژی و سورس‌کد</option>
                <option value="training">کارگاه‌ها و آموزش سازمانی</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-slate-300 font-bold mb-1.5">توضیحات یا نیازهای خاص سازمان</label>
            <textarea 
              rows={3} 
              placeholder="توضیح مختصری درباره سیستم‌ها، فرآیندها یا دغدغه‌های سازمانی شما..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-400 text-xs placeholder:text-slate-500"
            />
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-black rounded-xl text-xs sm:text-sm transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>در حال ثبت و ارسال به واحد سازمانی...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>ثبت درخواست جلسه مشاوره و ارزیابی هوشمندسازی</span>
              </>
            )}
          </button>

          <div className="text-center pt-2 text-[11px] text-slate-400 flex items-center justify-center gap-2">
            <Phone className="w-3.5 h-3.5 text-cyan-400" />
            <span>یا تماس مستقیم با دپارتمان سازمانی:</span>
            <a href="tel:02188252497" className="text-cyan-300 font-bold font-mono tracking-wider hover:underline">02188252497</a>
          </div>
        </form>
      )}
    </div>
  );
}
