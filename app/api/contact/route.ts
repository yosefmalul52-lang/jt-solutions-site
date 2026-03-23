import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { ZodError } from "zod";
import { contactSchema } from "@/lib/validation/contact";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(req: Request) {
  try {
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpUser || !smtpPass) {
      return NextResponse.json(
        { success: false, error: "הגדרות SMTP חסרות בשרת" },
        { status: 500 },
      );
    }

    const raw = await req.json();
    const parsed = contactSchema.safeParse(raw);

    if (!parsed.success) {
      const details = parsed.error.issues.map((issue) => ({
        path: issue.path.join("."),
        message: issue.message,
      }));

      return NextResponse.json(
        { success: false, error: "נתוני הטופס אינם תקינים", details },
        { status: 400 },
      );
    }

    const { name, phone, email, service, message } = parsed.data;
    const safeName = escapeHtml(name);
    const safePhone = escapeHtml(phone);
    const safeEmail = escapeHtml(email);
    const safeService = escapeHtml(service);
    const safeMessage = escapeHtml(message?.trim() || "ללא הודעה נוספת.");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `"JT Solutions Contact" <${smtpUser}>`,
      to: "jtsolutions.officee@gmail.com",
      replyTo: email,
      subject: `ליד חדש מהאתר — ${service}`,
      html: `
        <div dir="rtl" style="margin:0;padding:24px;background:#f3f6fb;font-family:Arial,Helvetica,sans-serif;">
          <div style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:18px;overflow:hidden;border:1px solid #e5e7eb;">
            <div style="padding:20px 24px;background:linear-gradient(120deg,#10b3e7,#7c3aed);">
              <h2 style="margin:0;color:#ffffff;font-size:22px;line-height:1.4;">פנייה חדשה מהאתר</h2>
              <p style="margin:8px 0 0;color:rgba(255,255,255,0.9);font-size:13px;">JT Solutions — ליד נכנס מטופס יצירת קשר</p>
            </div>

            <div style="padding:22px 24px;">
              <table style="width:100%;border-collapse:collapse;border-spacing:0;">
                <tr>
                  <td style="padding:10px 12px;background:#f8fafc;border:1px solid #e2e8f0;font-weight:700;width:34%;">שם מלא</td>
                  <td style="padding:10px 12px;border:1px solid #e2e8f0;color:#0f172a;">${safeName}</td>
                </tr>
                <tr>
                  <td style="padding:10px 12px;background:#f8fafc;border:1px solid #e2e8f0;font-weight:700;">טלפון</td>
                  <td style="padding:10px 12px;border:1px solid #e2e8f0;color:#0f172a;">${safePhone}</td>
                </tr>
                <tr>
                  <td style="padding:10px 12px;background:#f8fafc;border:1px solid #e2e8f0;font-weight:700;">אימייל</td>
                  <td style="padding:10px 12px;border:1px solid #e2e8f0;color:#0f172a;">${safeEmail}</td>
                </tr>
                <tr>
                  <td style="padding:10px 12px;background:#f8fafc;border:1px solid #e2e8f0;font-weight:700;">שירות מבוקש</td>
                  <td style="padding:10px 12px;border:1px solid #e2e8f0;color:#0f172a;">${safeService}</td>
                </tr>
                <tr>
                  <td style="padding:10px 12px;background:#f8fafc;border:1px solid #e2e8f0;font-weight:700;vertical-align:top;">הודעה</td>
                  <td style="padding:10px 12px;border:1px solid #e2e8f0;color:#0f172a;white-space:pre-wrap;">${safeMessage}</td>
                </tr>
              </table>
            </div>

            <div style="padding:12px 24px 20px;color:#64748b;font-size:12px;">
              נשלח אוטומטית מטופס יצירת קשר באתר JT Solutions
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: "נתוני הטופס אינם תקינים",
          details: error.issues.map((issue) => ({
            path: issue.path.join("."),
            message: issue.message,
          })),
        },
        { status: 400 },
      );
    }

    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { success: false, error: "פורמט JSON לא תקין" },
        { status: 400 },
      );
    }

    console.error("Contact form API error:", error);
    return NextResponse.json(
      { success: false, error: "שגיאה פנימית בשליחת הפנייה" },
      { status: 500 },
    );
  }
}
