import { Resend } from "resend";
import { FORM_RECIPIENT_EMAIL } from "@/lib/contact-details";

export const runtime = "nodejs";

const jsonError = (code: string, error: string, status: number) =>
  Response.json({ ok: false, code, error }, { status });

export async function POST(req: Request) {
  let data: Record<string, unknown>;
  let attachment: File | null = null;
  try {
    if (req.headers.get("content-type")?.includes("multipart/form-data")) {
      const formData = await req.formData();
      data = Object.fromEntries(formData.entries());
      for (const key of ["needs", "quoteItems"] as const) {
        const value = data[key];
        if (typeof value === "string") {
          try {
            data[key] = JSON.parse(value);
          } catch {
            data[key] = [];
          }
        }
      }
      const uploaded = formData.get("attachment");
      attachment = uploaded instanceof File && uploaded.size > 0 ? uploaded : null;
    } else {
      data = await req.json();
    }
  } catch {
    return jsonError("BAD_REQUEST", "We could not read this submission.", 400);
  }

  const {
    name,
    email,
    company,
    needs,
    details,
    currentTools,
    budget,
    timeline,
    filesOrLinks,
    quoteItems,
    quoteEstimate,
    phone,
    comments,
    source,
    _hp,
  } = data ?? {};

  if (_hp) return Response.json({ ok: true });

  const isQuickRequest = typeof comments === "string";
  if (!name || !email || (isQuickRequest ? !comments : (!details || !Array.isArray(needs) || needs.length === 0))) {
    return jsonError("MISSING_FIELDS", "Please complete the required fields.", 400);
  }

  if (attachment && attachment.size > 10 * 1024 * 1024) {
    return jsonError("FILE_TOO_LARGE", "Please choose a file smaller than 10 MB.", 413);
  }

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : null,
    phone ? `Phone: ${phone}` : null,
    source ? `CTA: ${source}` : null,
    Array.isArray(needs) ? `Services requested: ${(needs as string[]).join(", ")}` : null,
    currentTools ? `Current tools: ${currentTools}` : null,
    budget ? `Budget: ${budget}` : null,
    timeline ? `Timeline: ${timeline}` : null,
    filesOrLinks ? `Files or links: ${filesOrLinks}` : null,
    quoteEstimate ? `Estimated quote: ${quoteEstimate}` : null,
    Array.isArray(quoteItems) && (quoteItems as string[]).length > 0
      ? `\nSelected services:\n${(quoteItems as string[]).map((i: string) => `  - ${i}`).join("\n")}`
      : null,
    "",
    "Message:",
    String(comments || details),
  ]
    .filter(Boolean)
    .join("\n");

  if (!process.env.RESEND_API_KEY) {
    console.warn("[contact] No RESEND_API_KEY - set it in .env.local or Vercel env vars.\n" + lines);
    if (process.env.NODE_ENV === "production") {
      return jsonError(
        "EMAIL_NOT_CONFIGURED",
        "Email delivery is not configured on this deployment.",
        503,
      );
    }
    return Response.json({ ok: true, note: "logged" });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  // FROM must be a verified sender/domain in your Resend account.
  // If you have no custom domain yet, use the Resend test sender:
  //   onboarding@resend.dev
  // BUT - Resend's test sender can ONLY deliver to the email address
  // you signed up to Resend with. It cannot deliver to external addresses.
  // To send to the fixed submission inbox you need one of:
  //   a) A verified sending domain in Resend (Settings -> Domains)
  //   b) Set RESEND_FROM to an email on that verified domain
  //
  const from = process.env.RESEND_FROM?.trim() || "Decrypt AI Technologies <onboarding@resend.dev>";

  try {
    const attachments = attachment
      ? [{ filename: attachment.name, content: Buffer.from(await attachment.arrayBuffer()) }]
      : undefined;
    const { error } = await resend.emails.send({
      from,
      to: FORM_RECIPIENT_EMAIL,
      replyTo: String(email),
      subject: `${isQuickRequest ? "Quick project request" : "Decrypt inquiry"} - ${name}`,
      text: lines,
      attachments,
    });
    if (error) {
      console.error("[contact] resend error", JSON.stringify(error));
      return jsonError(
        "EMAIL_DELIVERY_FAILED",
        "The email provider rejected this submission. Check the deployment email settings.",
        502,
      );
    }
    return Response.json({ ok: true });
  } catch (err) {
    console.error("[contact] threw", err);
    return jsonError("EMAIL_DELIVERY_FAILED", "Email delivery is temporarily unavailable.", 502);
  }
}
