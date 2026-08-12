# راهنمای دیپلوی وب‌سایت learn.diginoron.com روی ورسل (Vercel)

وب‌سایت آکادمی هوش مصنوعی دیجی نورون با فریم‌ورک Next.js (App Router) و ساختار کاملاً استاندارد پیاده‌سازی شده و آماده انتشار روی Vercel است.

## مراحل دیپلوی روی Vercel:

### روش ۱: دیپلوی سریع از طریق GitHub / GitLab
۱. پروژه را روی مخزن گیت‌هاب (GitHub) آپلود نمایید.
۲. وارد حساب کاربری خود در [Vercel](https://vercel.com) شوید.
۳. روی **Add New Project** کلیک کرده و ریپازیتوری پروژه `diginoron` را انتخاب کنید.
۴. تنظیمات زیر را تایید نمایید:
   - **Framework Preset:** Next.js
   - **Build Command:** `next build`
   - **Output Directory:** `.next`
۵. روی **Deploy** کلیک کنید.

---

## اتصال دامنه اختصاصی learn.diginoron.com

پس از اتمام دیپلوی روی Vercel:
۱. وارد بخش **Settings > Domains** پروژه در Vercel شوید.
۲. عبارت `learn.diginoron.com` را وارد نموده و ثبت کنید.
۳. در پنل مدیریت دامنه خود (DNS Provider / Cloudflare):
   - یک رکورد **CNAME** با نام `learn` به مقصد `cname.vercel-dns.com` ایجاد کنید.
۴. گواهی SSL و اتصال دامنه ظرف چند دقیقه به‌صورت خودکار توسط ورسل فعال خواهد شد.

---

## مشخصات و بخش‌های پیاده‌سازی شده:
- 🌐 **برندینگ و دامنه:** `learn.diginoron.com`
- 📞 **شماره تماس پشتیبانی و مشاوره:** `02188252497`
- 👦👧 **خدمات آموزشی کودکان و نوجوانان:** `/services/kids-and-teens`
- 🏢 **خدمات آموزشی سازمانی:** `/services/corporate`
- 📚 **کاتالوگ دوره‌ها:** `/courses` و `/courses/[slug]`
- 📝 **بلاگ چندصفحه‌ای (Pagination):** `/blog` و `/blog/[slug]`
- 📞 **تماس با ما:** `/contact`
