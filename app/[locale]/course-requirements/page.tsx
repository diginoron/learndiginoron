import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Code2,
  Terminal,
  ShieldCheck,
  Hexagon,
  Download,
  CheckCircle2,
  Globe,
  PhoneCall,
  ListChecks,
  AlertCircle,
  MousePointerClick,
  RefreshCw,
  Flag,
} from "lucide-react";
import { Locale, isValidLocale } from "@/lib/i18n";

interface PageProps {
  params: Promise<{ locale: string }>;
}

const VPN_DOWNLOAD_URL = "https://www.softether-download.com/en.aspx?product=softether";
const VPN_TEST_URLS = ["https://aistudio.google.com/", "https://antigravity.google/"];

/**
 * Persian-only, non-indexable (noindex) helper page:
 * "Course Requirements" — installation & testing guide for VS Code, Python,
 * SoftEther VPN and (optional) Node.js.
 * Only rendered for /fa/course-requirements; other locales return 404.
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  // Locale is only validated for the 404 guard in generateStaticParams/notFound
  // below; metadata itself is always the Persian page's.
  if (!isValidLocale(rawLocale)) {
    return {};
  }

  return {
    title: "نیازمندی‌های دوره",
    description:
      "راهنمای گام‌به‌گام نصب و تست ویژوال استودیو کد، پایتون، وی‌پی‌ان (SoftEther) و نود جی‌اس برای شرکت‌کنندگان دوره‌های دیجی نورون.",
    robots: {
      index: false,
      follow: false,
    },
    alternates: {
      canonical: "https://www.diginoron.com/fa/course-requirements",
    },
  };
}

export default async function CourseRequirementsPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";

  // Persian-only page: any other locale gets a 404.
  if (locale !== "fa") {
    notFound();
  }

  return (
    <div className="py-8 sm:py-12 space-y-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* ── Header ── */}
      <header className="text-center max-w-3xl mx-auto space-y-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-800 text-xs font-semibold">
          <ListChecks className="w-3.5 h-3.5" />
          <span>پیش‌نیازهای شروع دوره</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
          نیازمندی‌های <span className="text-gradient-cyan">دوره</span>
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          پیش از شروع دوره، لازم است چند نرم‌افزار را روی سیستم خود نصب و مطابق راهنمای زیر تست
          کنید. مراحل هر بخش را به‌ترتیب انجام دهید؛ در صورت بروز هر مشکل، با پشتیبانی ما در
          ارتباط باشید.
        </p>
      </header>

      {/* ── Section 1: VS Code ── */}
      <section className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden">
        <div className="p-6 sm:p-10 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-100 border border-cyan-300 flex items-center justify-center shrink-0">
              <Code2 className="w-6 h-6 text-cyan-700" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-700">مرحله ۱ — الزامی</span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                نصب ویژوال استودیو کد (VS Code)
              </h2>
            </div>
          </div>

          <ol className="space-y-3 text-sm text-slate-700 leading-relaxed list-none">
            {[
              "به صفحه دانلود رسمی ویژوال استودیو کد بروید و نسخه مناسب سیستم‌عامل خود (Windows) را دانلود کنید.",
              "فایل نصبی را اجرا کنید و گزینه‌های پیش‌فرض را تا پایان نصب، Next بزنید. حتماً گزینه «Add to PATH» (به‌صورت پیش‌فرض فعال است) فعال بماند.",
              "پس از اتمام نصب، VS Code را باز کنید؛ اگر پنجره برنامه بدون خطا باز شد، نصب موفق بوده است.",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 w-6 h-6 rounded-full bg-slate-100 border border-slate-300 text-slate-700 text-xs font-bold flex items-center justify-center shrink-0">
                  {["۱", "۲", "۳"][i]}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>

          <a
            href="https://code.visualstudio.com/download"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-cyan-700 hover:bg-cyan-800 text-white text-sm font-bold rounded-xl transition-colors"
          >
            <Download className="w-4 h-4" />
            دانلود VS Code
          </a>
        </div>
      </section>

      {/* ── Section 2: Python ── */}
      <section className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden">
        <div className="p-6 sm:p-10 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 border border-amber-300 flex items-center justify-center shrink-0">
              <Terminal className="w-6 h-6 text-amber-700" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-700">مرحله ۲ — الزامی</span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">نصب پایتون (Python)</h2>
            </div>
          </div>

          <ol className="space-y-3 text-sm text-slate-700 leading-relaxed list-none">
            {[
              "به صفحه دانلود رسمی پایتون بروید و آخرین نسخه پایدار (Python 3) برای Windows را دانلود کنید.",
              "فایل نصبی را اجرا کنید. قبل از کلیک روی Install Now، حتماً تیک گزینه «Add python.exe to PATH» را در پایین پنجره نصب فعال کنید — این مهم‌ترین مرحله است.",
              "پس از اتمام نصب، یک‌بار سیستم را ری‌استارت کنید تا PATH به‌روز شود.",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 w-6 h-6 rounded-full bg-slate-100 border border-slate-300 text-slate-700 text-xs font-bold flex items-center justify-center shrink-0">
                  {["۱", "۲", "۳"][i]}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>

          {/* Test box */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-3">
            <p className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              تست نصب:
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              منوی Start را باز کنید، عبارت <span className="font-mono" dir="ltr">cmd</span> را
              تایپ و Command Prompt را اجرا کنید، سپس دستور زیر را وارد کنید:
            </p>
            <div className="rounded-xl bg-slate-900 p-4 font-mono text-xs sm:text-sm text-cyan-300 text-left" dir="ltr">
              python --version
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              اگر شماره نسخه (مثلاً <span className="font-mono" dir="ltr">Python 3.12.x</span>)
              نمایش داده شد، پایتون به‌درستی نصب شده است. اگر خطای{" "}
              <span className="font-mono" dir="ltr">&apos;python&apos; is not recognized</span>{" "}
              گرفتید، یعنی گزینه PATH فعال نشده؛ نصب را از اول با تیک همان گزینه تکرار کنید.
            </p>
          </div>

          <a
            href="https://www.python.org/downloads/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-amber-600 hover:bg-amber-700 text-white text-sm font-bold rounded-xl transition-colors"
          >
            <Download className="w-4 h-4" />
            دانلود Python
          </a>
        </div>
      </section>

      {/* ── Section 3: SoftEther VPN ── */}
      <section className="bg-white rounded-3xl border-2 border-cyan-200 shadow-lg overflow-hidden">
        <div className="p-6 sm:p-10 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 border border-emerald-300 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-emerald-700" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-700">مرحله ۳ — الزامی</span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                نصب و تست وی‌پی‌ان (SoftEther VPN Client)
              </h2>
            </div>
          </div>

          <div className="rounded-2xl bg-cyan-50 border-r-4 border-cyan-600 p-5">
            <p className="text-sm text-cyan-900 leading-relaxed">
              این وی‌پی‌ان <strong>پیشنهادی ماست</strong>؛ اما اگر وی‌پی‌ان مطمئن دیگری در اختیار
              دارید، می‌توانید از همان استفاده کنید و صرفاً اتصال را با سایت‌های تست پایین همین
              بخش بررسی کنید. نکته مهم این است که در طول دوره، دسترسی پایدار به سرویس‌های گوگل
              (Google AI Studio) داشته باشید.
            </p>
          </div>

          <h3 className="text-base font-bold text-slate-900">الف) دانلود نسخه مناسب</h3>
          <ol className="space-y-3 text-sm text-slate-700 leading-relaxed list-none">
            {[
              "به صفحه دانلود رسمی SoftEther بروید (لینک پایین همین بخش).",
              "در صفحه دانلود، مقادیر انتخابی را دقیقاً به این شکل تنظیم کنید:",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 w-6 h-6 rounded-full bg-slate-100 border border-slate-300 text-slate-700 text-xs font-bold flex items-center justify-center shrink-0">
                  {["۱", "۲"][i]}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>

          {/* Selection table */}
          <div className="rounded-2xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["Select Software", "SoftEther VPN (Freeware)"],
                  ["Select Component", "SoftEther VPN Client"],
                  ["Select Platform", "Windows"],
                  ["Select CPU", "Intel (x86 and x64)"],
                ].map(([label, value], i) => (
                  <tr key={label} className={i % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                    <td className="px-4 py-3 font-bold text-slate-800" dir="ltr">
                      {label}
                    </td>
                    <td className="px-4 py-3 text-slate-600" dir="ltr">
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed flex items-center gap-2">
            <MousePointerClick className="w-4 h-4 text-cyan-700 shrink-0" />
            سپس از لیست پایین صفحه، فایل <span className="font-mono" dir="ltr">.exe</span> مربوط به
            SoftEther VPN Client را دانلود و نصب کنید (گزینه‌های پیش‌فرض نصب کافی است).
          </p>

          <h3 className="text-base font-bold text-slate-900">ب) اتصال به سرور</h3>
          <ol className="space-y-3 text-sm text-slate-700 leading-relaxed list-none">
            {[
              "پس از نصب، نرم‌افزار SoftEther VPN Client را اجرا کنید.",
              "اول از همه روی دکمه رفرش (Refresh) بزنید تا لیست سرورها به‌روز شود.",
              "از لیست سرورها، کشور مورد نظر را انتخاب کرده و به آن متصل شوید.",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 w-6 h-6 rounded-full bg-slate-100 border border-slate-300 text-slate-700 text-xs font-bold flex items-center justify-center shrink-0">
                  {["۱", "۲", "۳"][i]}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>

          <h3 className="text-base font-bold text-slate-900">ج) تست اتصال وی‌پی‌ان</h3>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-3">
            <p className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              برای اطمینان از وصل بودن و سالم بودن وی‌پی‌ان، لینک‌های زیر را در مرورگر باز کنید:
            </p>
            <ul className="space-y-2">
              {VPN_TEST_URLS.map((url) => (
                <li key={url}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-mono text-cyan-700 hover:text-cyan-900 hover:underline break-all"
                    dir="ltr"
                  >
                    <Globe className="w-4 h-4 shrink-0" />
                    {url}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-sm text-slate-600 leading-relaxed flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              اگر هر دو سایت <strong>بدون خطا</strong> باز شدند، یعنی وی‌پی‌ان شما اک است و
              آماده دوره هستید. اگر خطا دیدید (مثلاً صفحه لود نشد)، اتصال را قطع و دوباره به
              سرور دیگری وصل شوید و تست را تکرار کنید.
            </p>
          </div>

          <a
            href={VPN_DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-bold rounded-xl transition-colors"
          >
            <Download className="w-4 h-4" />
            دانلود SoftEther VPN Client
          </a>
        </div>
      </section>

      {/* ── Section 4: Node.js (optional) ── */}
      <section className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden">
        <div className="p-6 sm:p-10 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-violet-100 border border-violet-300 flex items-center justify-center shrink-0">
              <Hexagon className="w-6 h-6 text-violet-700" />
            </div>
            <div>
              <span className="text-xs font-bold text-violet-700">مرحله ۴ — اختیاری</span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                نصب نود جی‌اس (Node.js)
              </h2>
            </div>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed">
            نصب Node.js برای برخی ماژول‌های دوره لازم است؛ اگر مایل بودید، می‌توانید همین حالا
            آن را نصب کنید (اختیاری است ولی توصیه می‌شود).
          </p>

          <ol className="space-y-3 text-sm text-slate-700 leading-relaxed list-none">
            {[
              "به صفحه دانلود رسمی Node.js بروید و نسخه LTS (پیشنهادی) را برای Windows دانلود کنید.",
              "فایل نصبی را اجرا کنید و با گزینه‌های پیش‌فرض نصب را به پایان برسانید.",
              "یک‌بار سیستم را ری‌استارت کنید.",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 w-6 h-6 rounded-full bg-slate-100 border border-slate-300 text-slate-700 text-xs font-bold flex items-center justify-center shrink-0">
                  {["۱", "۲", "۳"][i]}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-3">
            <p className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              تست نصب:
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              در Command Prompt دو دستور زیر را وارد کنید:
            </p>
            <div className="rounded-xl bg-slate-900 p-4 font-mono text-xs sm:text-sm text-cyan-300 text-left space-y-1" dir="ltr">
              <p>node -v</p>
              <p>npm -v</p>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              اگر دو خط شماره نسخه (مثلاً <span className="font-mono" dir="ltr">v20.x.x</span>)
              نمایش داده شد، Node.js و npm به‌درستی نصب شده‌اند.
            </p>
          </div>

          <a
            href="https://nodejs.org/en/download"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-violet-700 hover:bg-violet-800 text-white text-sm font-bold rounded-xl transition-colors"
          >
            <Download className="w-4 h-4" />
            دانلود Node.js (نسخه LTS)
          </a>
        </div>
      </section>

      {/* ── Support ── */}
      <section className="rounded-3xl bg-gradient-to-l from-slate-900 via-slate-800 to-cyan-900 p-8 sm:p-12 text-center space-y-5 shadow-lg">
        <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mx-auto">
          <PhoneCall className="w-7 h-7 text-cyan-300" />
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-white">به کمک نیاز دارید؟</h2>
        <p className="text-sm text-slate-300 leading-relaxed max-w-xl mx-auto">
          اگر در هر یک از مراحل نصب یا تست با مشکل مواجه شدید، کافی است با پشتیبانی دیجی نورون
          تماس بگیرید تا قدم‌به‌قدم راهنمایی‌تان کنیم.
        </p>
        <a
          href="tel:02188252497"
          className="inline-flex items-center gap-3 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-white text-lg font-black rounded-2xl transition-colors shadow-lg shadow-cyan-500/25"
        >
          <PhoneCall className="w-5 h-5" />
          <span className="font-mono">۰۲۱ - ۸۸۲۵۲۴۹۷</span>
        </a>
        <p className="text-xs text-slate-400">
          پشتیبانی دیجی نورون — پاسخگویی در ساعات اداری
        </p>
      </section>

      {/* ── Checklist summary ── */}
      <section className="bg-white rounded-3xl border border-slate-200 shadow-md p-6 sm:p-10 space-y-4">
        <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
          <Flag className="w-5 h-5 text-cyan-700" />
          چک‌لیست نهایی قبل از شروع دوره
        </h2>
        <ul className="space-y-2.5 text-sm text-slate-700">
          {[
            "VS Code بدون خطا باز می‌شود.",
            "دستور python --version شماره نسخه را نشان می‌دهد.",
            "وی‌پی‌ان وصل است و هر دو سایت تست (AI Studio و Antigravity) بدون خطا باز می‌شوند.",
            "Node.js نصب شده و دستور node -v نسخه را نشان می‌دهد (اختیاری).",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-slate-400 flex items-center gap-2 pt-2">
          <RefreshCw className="w-3.5 h-3.5" />
          در صورت تغییر نسخه‌های نرم‌افزاری، همین صفحه به‌روزرسانی می‌شود.
        </p>
      </section>

    </div>
  );
}
