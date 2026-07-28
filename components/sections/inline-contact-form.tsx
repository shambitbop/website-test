"use client";

import { FormEvent, useRef, useState } from "react";
import { ArrowRight, Check, FileUp, LoaderCircle } from "lucide-react";
import { Container, Kicker, Section } from "../primitives";
import { PUBLIC_CONTACT_EMAIL } from "@/lib/contact-details";

const MAX_FILE_SIZE = 10 * 1024 * 1024;
type Status = "idle" | "sending" | "sent" | "error";

export function InlineContactForm({ showAboutSummary = false }: { showAboutSummary?: boolean }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [fileName, setFileName] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const attachment = formData.get("attachment");

    if (attachment instanceof File && attachment.size > MAX_FILE_SIZE) {
      setStatus("error");
      setMessage("Please choose a file smaller than 10 MB.");
      return;
    }

    formData.set("source", "Inline contact form");
    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/contact", { method: "POST", body: formData });
      const result = (await response.json()) as { ok?: boolean; error?: string };
      if (!response.ok || !result.ok) throw new Error(result.error || "Send failed");
      form.reset();
      setFileName("");
      setStatus("sent");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "We could not send your request.");
    }
  }

  return (
    <Section id="start" className="border-t border-line">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className={showAboutSummary ? "lg:sticky lg:top-24 lg:self-start" : undefined}>
            <Kicker>START HERE</Kicker>
            <h2 className="font-display mt-5 text-[clamp(2rem,4.4vw,3.4rem)] leading-tight text-text">
              Tell us what you need. <span className="text-accent">We&apos;ll map the next step.</span>
            </h2>
            <p className="mt-6 max-w-md text-[clamp(1rem,1.4vw,1.12rem)] leading-relaxed text-muted">
              Send the essentials and a real person will review your request. You can also build a
              detailed estimate instantly if you already know which services you need.
            </p>
            <p className="mt-4 font-mono text-[13px] text-muted">
              Prefer email? <a href={`mailto:${PUBLIC_CONTACT_EMAIL}`} className="text-text underline decoration-accent/50 underline-offset-4 hover:text-accent">{PUBLIC_CONTACT_EMAIL}</a>
            </p>
          </div>

          <div className="rounded-2xl border border-line bg-surface/40 p-6 sm:p-8">
            {status === "sent" ? (
              <div className="flex min-h-80 flex-col items-center justify-center text-center">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-bg"><Check size={22} aria-hidden /></span>
                <h3 className="font-display mt-5 text-3xl text-text">Request received.</h3>
                <p className="mt-3 max-w-md text-[14px] leading-relaxed text-muted">We&apos;ll review your note and reply with practical next steps.</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <input name="_hp" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
                <div className="grid gap-4 sm:grid-cols-2">
                  <SimpleField label="Name" name="name" autoComplete="name" required />
                  <SimpleField label="Email" name="email" type="email" autoComplete="email" required />
                  <SimpleField label="Phone number" name="phone" type="tel" autoComplete="tel" />
                  <SimpleField label="Company name" name="company" autoComplete="organization" />
                </div>
                <label className="block">
                  <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.12em] text-muted">How can we help?</span>
                  <textarea name="comments" rows={5} required placeholder="What would you like us to build, automate, review, or improve?" className="w-full resize-y rounded-xl border border-line bg-bg/65 px-4 py-3 text-[14px] text-text outline-none transition-colors placeholder:text-muted/55 focus:border-accent/65" />
                </label>
                <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-line bg-bg/45 px-4 py-3 transition-colors hover:border-accent/55">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-surface text-accent"><FileUp size={17} aria-hidden /></span>
                  <span className="min-w-0 flex-1"><span className="block font-mono text-[11px] uppercase tracking-[0.12em] text-text">Upload a file</span><span className="mt-1 block truncate text-[12px] text-muted">{fileName || "Optional - up to 10 MB"}</span></span>
                  <input name="attachment" type="file" className="sr-only" accept=".pdf,.doc,.docx,.xls,.xlsx,.csv,.txt,.png,.jpg,.jpeg,.webp" onChange={(event) => setFileName(event.target.files?.[0]?.name || "")} />
                </label>

                <button type="submit" disabled={status === "sending"} className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-line px-6 py-3.5 font-mono text-[14px] text-text transition-colors hover:border-accent/60 disabled:opacity-60">
                  {status === "sending" ? <><LoaderCircle size={16} className="animate-spin" aria-hidden /> Sending</> : <>Send Request <ArrowRight size={16} aria-hidden /></>}
                </button>

                <div className="my-2 flex items-center gap-3"><span className="h-px flex-1 bg-line" /><span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">or</span><span className="h-px flex-1 bg-line" /></div>

                <button type="button" data-simple-contact="Get an instant estimate" className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 font-mono text-[14px] font-semibold text-bg shadow-[0_12px_34px_-14px_color-mix(in_oklab,var(--accent)_80%,transparent)] transition-[filter,transform] hover:-translate-y-0.5 hover:brightness-110">
                  Get an instant estimate <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" aria-hidden />
                </button>
                <p className="text-center text-[12px] leading-relaxed text-muted">Select services and calculate a live starting estimate.</p>
                {status === "error" && <p className="font-mono text-[12px] text-[#ff8585]" role="alert">{message}</p>}
              </form>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function SimpleField({ label, name, type = "text", autoComplete, required = false }: { label: string; name: string; type?: string; autoComplete?: string; required?: boolean }) {
  return <label className="block"><span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.12em] text-muted">{label}{required && <span className="text-accent"> *</span>}</span><input name={name} type={type} autoComplete={autoComplete} required={required} className="w-full rounded-xl border border-line bg-bg/65 px-4 py-3 text-[14px] text-text outline-none transition-colors placeholder:text-muted/55 focus:border-accent/65" /></label>;
}
