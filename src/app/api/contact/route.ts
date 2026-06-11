import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  details: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  // ── Parse body ──────────────────────────────────────────────────────────────
  let body: ContactPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name    = body.name?.trim()    ?? "";
  const email   = body.email?.trim()   ?? "";
  const company = body.company?.trim() ?? "";
  const details = body.details?.trim() ?? "";

  // ── Validate ─────────────────────────────────────────────────────────────────
  if (!name || !email || !details) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 422 }
    );
  }
  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 422 }
    );
  }

  // ── SMTP config ───────────────────────────────────────────────────────────────
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_RECEIVER_EMAIL } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_RECEIVER_EMAIL) {
    console.error("[contact] Missing SMTP environment variables.");
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }

  // ── Send email ────────────────────────────────────────────────────────────────
  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465, // true for port 465 (SSL), false for 587 (STARTTLS)
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Elevora Website" <${SMTP_USER}>`,
      to: CONTACT_RECEIVER_EMAIL,
      replyTo: `"${name}" <${email}>`,
      subject: "New Contact Request from Elevora Website",
      text: [
        "Name:",
        name,
        "",
        "Email:",
        email,
        "",
        "Company:",
        company || "—",
        "",
        "Project Details:",
        details,
      ].join("\n"),
      html: `
        <table cellpadding="0" cellspacing="0" style="font-family:Arial,sans-serif;font-size:15px;color:#222;max-width:600px;width:100%">
          <tr><td style="padding:32px 24px 0">
            <h2 style="margin:0 0 24px;font-size:20px;font-weight:700;color:#000">
              New Contact Request from Elevora Website
            </h2>
          </td></tr>
          <tr><td style="padding:0 24px">
            <table cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse">
              ${row("Name", name)}
              ${row("Email", `<a href="mailto:${email}" style="color:#000">${email}</a>`)}
              ${row("Company", company || "—")}
              ${row("Project Details", details.replace(/\n/g, "<br>"), true)}
            </table>
          </td></tr>
          <tr><td style="padding:24px;color:#999;font-size:12px">
            Sent via the contact form at elevora.dev
          </td></tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[contact] Nodemailer error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}

// ── HTML helper ───────────────────────────────────────────────────────────────
function row(label: string, value: string, last = false) {
  return `
    <tr>
      <td style="padding:12px 0;border-top:1px solid #e5e5e5;vertical-align:top;width:140px;
                 font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;
                 color:#737373${last ? ";padding-bottom:0" : ""}">
        ${label}
      </td>
      <td style="padding:12px 0;border-top:1px solid #e5e5e5;vertical-align:top;
                 ${last ? "padding-bottom:0" : ""}">
        ${value}
      </td>
    </tr>
  `;
}
