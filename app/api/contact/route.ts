import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, subject, message, formType, audienceType, company, serviceType } = body;

    if (!phone && !email && !name) {
      return NextResponse.json(
        { success: false, error: "لطفاً اطلاعات تماس را وارد نمایید." },
        { status: 400 }
      );
    }

    const timestamp = new Date().toLocaleString("fa-IR", { timeZone: "Asia/Tehran" });
    const selectedField = serviceType || audienceType || subject || formType || "هوشمندسازی سازمانی";
    
    const formattedData = {
      targetEmail: "diginoron@gmail.com",
      timestamp,
      formType: formType || "فرم وب‌سایت ai.diginoron.com",
      name: name || "ثبت نشده",
      company: company || "ثبت نشده",
      phone: phone || "ثبت نشده",
      email: email || "ثبت نشده",
      serviceField: selectedField,
      message: message || "بدون توضیحات تکمیلی",
    };

    console.log("=== NEW INQUIRY FOR DIGINORON@GMAIL.COM ===");
    console.log(JSON.stringify(formattedData, null, 2));

    // 1. Send via FormSubmit service directly to diginoron@gmail.com
    try {
      await fetch("https://formsubmit.co/ajax/diginoron@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: `[دیجی نورون] درخواست جدید: ${formattedData.name} - ${formattedData.phone}`,
          _template: "table",
          "زمان ثبت": timestamp,
          "نوع فرم": formattedData.formType,
          "نام و نام خانوادگی": formattedData.name,
          "نام شرکت / سازمان": formattedData.company,
          "شماره تماس": formattedData.phone,
          "پست الکترونیکی": formattedData.email,
          "حوزه خدمت انتخابی": formattedData.serviceField,
          "متن توضیحات / پیام": formattedData.message,
        })
      });
    } catch (formSubmitErr) {
      console.error("FormSubmit delivery warning:", formSubmitErr);
    }

    // 2. If RESEND_API_KEY is configured in env, also send via Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "DigiNoron AI <onboarding@resend.dev>",
            to: ["diginoron@gmail.com"],
            subject: `[دیجی نورون] درخواست جدید: ${formattedData.name} - ${formattedData.phone}`,
            html: `
              <div dir="rtl" style="font-family: Tahoma, sans-serif; padding: 20px; line-height: 1.8; color: #1e293b;">
                <h2 style="color: #0891b2; border-bottom: 2px solid #0891b2; padding-bottom: 8px;">درخواست جدید از وب‌سایت دیجی نورون (ai.diginoron.com)</h2>
                <p><strong>زمان ثبت:</strong> ${timestamp}</p>
                <p><strong>نوع فرم:</strong> ${formattedData.formType}</p>
                <p><strong>نام و مسئول:</strong> ${formattedData.name}</p>
                <p><strong>شرکت / ارگان:</strong> ${formattedData.company}</p>
                <p><strong>شماره تماس:</strong> <a href="tel:${formattedData.phone}">${formattedData.phone}</a></p>
                <p><strong>ایمیل:</strong> ${formattedData.email}</p>
                <p><strong>حوزه انتخابی:</strong> ${formattedData.serviceField}</p>
                <p><strong>متن پیام:</strong></p>
                <div style="background: #f1f5f9; padding: 15px; border-radius: 8px; margin-top: 10px;">
                  ${formattedData.message.replace(/\n/g, "<br/>")}
                </div>
              </div>
            `,
          }),
        });
      } catch (err) {
        console.error("Resend delivery notice:", err);
      }
    }

    return NextResponse.json({
      success: true,
      message: "درخواست شما با موفقیت ثبت و به ایمیل واحد پشتیبانی دیجی نورون (diginoron@gmail.com) ارسال شد.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "خطا در پردازش درخواست" },
      { status: 500 }
    );
  }
}
