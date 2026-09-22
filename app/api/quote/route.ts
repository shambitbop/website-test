import { Resend } from "resend";
import { FORM_RECIPIENT_EMAIL } from "@/lib/contact-details";

export const runtime = "nodejs";

type QuoteItem = { name: string; range: string; category: string };

export async function POST(req: Request) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return Response.json({ ok: false, error: "Bad request" }, { status: 400 });
  }

  const { name, email, company, items, oneTimeTotal, monthlyTotal, _hp } = data ?? {};

  if (_hp) return Response.json({ ok: true });
  if (!name || !email || !Array.isArray(items) || items.length === 0) {
    return Response.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  const lineItems = (items as QuoteItem[])
    .map((i) => `  - ${i.name} (${i.category}): ${i.range}`)
    .join("\n");

  const oneTime = Number(oneTimeTotal) || 0;
  const monthly = Number(monthlyTotal) || 0;

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : null,
    "",
    "Selected items:",
    lineItems,
    "",
    oneTime > 0 ? `Estimated quote: $${oneTime.toLocaleString("en-US")}+ one-time` : null,
    monthly > 0 ? `Plus: $${monthly.toLocaleString("en-US")}/mo ongoing` : null,
    "",
    "Note: estimated quote, final scope confirmed after discovery.",
  ]
    .filter((l) => l !== null)
    .join("\n");

  if (!process.env.RESEND_API_KEY) {
    console.warn("[quote] No RESEND_API_KEY - set it in .env.local.\n" + lines);
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
      subject: `Quote request - ${name} - ${(items as QuoteItem[]).length} items`,
      text: lines,
    });
    if (error) {
      console.error("[quote] resend error", JSON.stringify(error));
      return Response.json({ ok: false, error: "Send failed" }, { status: 500 });
    }
    return Response.json({ ok: true });
  } catch (err) {
    console.error("[quote] threw", err);
    return Response.json({ ok: false, error: "Send failed" }, { status: 500 });
  }
}
