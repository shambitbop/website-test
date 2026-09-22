import { Resend } from "resend";
import { FORM_RECIPIENT_EMAIL } from "@/lib/contact-details";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return Response.json({ ok: false, error: "Bad request" }, { status: 400 });
  }

  const { mode, name, email, links, about, cvName, cvContent, _hp } = data ?? {};

  if (_hp) return Response.json({ ok: true });

  if (!mode || !name || !email || !about) {
    return Response.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  const lines = [
    `Type: ${mode}`,
    `Name: ${name}`,
    `Email: ${email}`,
    links ? `Links: ${links}` : null,
    cvName ? `CV attached: ${cvName}` : "No CV attached",
    "",
    "About:",
    String(about),
  ]
    .filter(Boolean)
    .join("\n");

  const attachments =
    cvName && cvContent
      ? [{ filename: String(cvName), content: String(cvContent) }]
      : undefined;

  if (!process.env.RESEND_API_KEY) {
    console.warn("[careers] No RESEND_API_KEY - set it in .env.local.\n" + lines);
    if (process.env.NODE_ENV === "production") {
      return Response.json({ ok: false, error: "Email service unavailable" }, { status: 503 });
    }
    return Response.json({ ok: true, note: "logged" });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const from = process.env.RESEND_FROM?.trim() || "form@decrypt-ai.tech";

  try {
    const { error } = await resend.emails.send({
      from,
      to: FORM_RECIPIENT_EMAIL,
      replyTo: String(email),
      subject: `Careers - ${mode} - ${name}`,
      text: lines,
      attachments,
    });
    if (error) {
      console.error("[careers] resend error", JSON.stringify(error));
      return Response.json({ ok: false, error: "Send failed" }, { status: 500 });
    }
    return Response.json({ ok: true });
  } catch (err) {
    console.error("[careers] threw", err);
    return Response.json({ ok: false, error: "Send failed" }, { status: 500 });
  }
}
