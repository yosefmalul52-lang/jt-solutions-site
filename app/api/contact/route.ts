import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactSchema } from "@/lib/validation/contact";

// השורה הזו פותרת 90% מהבעיות בשרתים של ורסל
export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const smtpUser = process.env.SMTP_USER;
    const smtpPassRaw = process.env.SMTP_PASS;

    if (!smtpUser || !smtpPassRaw) {
      return NextResponse.json(
        { success: false, error: "Missing SMTP configuration" },
        { status: 500 }
      );
    }

    // מנקה רווחים נסתרים מהסיסמה שאולי הועתקו בטעות
    const smtpPass = smtpPassRaw.replace(/\s+/g, "");

    const raw = await req.json();
    const parsed = contactSchema.safeParse(raw);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: "Invalid payload" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user: smtpUser, pass: smtpPass },
    });

    // מוודא שהחיבור תקין
    await transporter.verify(); 

    const { name, phone, email, service, message } = parsed.data;

    await transporter.sendMail({
      from: `"JT Solutions Contact" <${smtpUser}>`,
      to: "jtsolutions.officee@gmail.com",
      replyTo: email,
      subject: `ליד חדש מהאתר — ${service}`,
      html: `<div dir="rtl">
               <h3>פנייה חדשה מאתר JT Solutions:</h3>
               <p><strong>שם:</strong> ${name}</p>
               <p><strong>טלפון:</strong> ${phone}</p>
               <p><strong>אימייל:</strong> ${email}</p>
               <p><strong>שירות מבוקש:</strong> ${service}</p>
               <p><strong>הודעה:</strong> ${message || 'לא צורפה הודעה'}</p>
             </div>`,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    // מדפיס את השגיאה המדויקת ללוגים של ורסל
    console.error("Contact form API error:", error);
    return NextResponse.json(
      { success: false, error: "שגיאה פנימית בשליחת הפנייה" },
      { status: 500 }
    );
  }
}