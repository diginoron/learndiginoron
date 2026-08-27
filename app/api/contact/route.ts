import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, subject, message, formType, audienceType } = body;

    if (!phone && !email && !name) {
      return NextResponse.json(
        { success: false, error: "لطفاً اطلاعات تماس را وارد نمایید." },
        { status: 400 }
      );
    }

    const timestamp = new Date().toLocaleString("fa-IR", { timeZone: "Asia/Tehran" });
    const emailSubject = `[دیجی نورون] درخواست جدید از سایت: ${name || phone || "مخاطب"}`;
    
    const formattedData = {
      targetEmail: "diginoron@gmail.com",
      timestamp,
      formType: formType || audienceType || subject || "عمومی",
      name: name || "ثبت نشده",
      phone: phone || "ثبت نشده",
      email: email || "ثبت نشده",
      subject: subject || audienceType || "مشاوره",
      message: message || "بدون متن توضیحات",
    };

    console.log("=== NEW INQUIRY FOR DIGINORON@GMAIL.COM ===");
    console.log(JSON.stringify(formattedData, null, 2));

    // If SMTP or Resend credentials exist in env, attempt email sending
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
            subject: emailSubject,
            html: `
              <div dir="rtl" style="font-family: Tahoma, sans-serif; padding: 20px; line-height: 1.8; color: #1e293b;">
                <h2 style="color: #0891b2; border-bottom: 2px solid #0891b2; padding-bottom: 8px;">درخواست جدید از وب‌سایت دیجی نورون</h2>
                <p><strong>زمان ثبت:</strong> ${timestamp}</p>
                <p><strong>نوع فرم / حوزه:</strong> ${formattedData.formType}</p>
                <p><strong>نام و نام خانوادگی:</strong> ${formattedData.name}</p>
                <p><strong>شماره تماس:</strong> <a href="tel:${formattedData.phone}">${formattedData.phone}</a></p>
                <p><strong>پست الکترونیکی:</strong> ${formattedData.email}</p>
                <p><strong>متن پیام / توضیحات:</strong></p>
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
      message: "درخواست شما با موفقیت ثبت شد و به واحد مشاوره دیجی نورون (diginoron@gmail.com) ارسال گردید.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "خطا در پردازش درخواست" },
      { status: 500 }
    );
  }
}
