"use client";

import { FormEvent, useEffect, useId, useRef, useState } from "react";
import { ArrowRight, Check, FileUp, LoaderCircle } from "lucide-react";
import { Modal } from "./ui/modal";

const MAX_FILE_SIZE = 10 * 1024 * 1024;

type Status = "idle" | "sending" | "sent" | "error";

export function SimpleContactFormProvider({ children }: { children: React.ReactNode }) {
  const titleId = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [open, setOpen] = useState(false);
  const [source, setSource] = useState("Website CTA");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const trigger = target?.closest<HTMLElement>("[data-simple-contact]");
      if (!trigger) return;
      event.preventDefault();
      setSource(trigger.dataset.simpleContact || trigger.textContent?.trim() || "Website CTA");
      setStatus("idle");
      setMessage("");
      setFileName("");
      setOpen(true);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

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

    formData.set("source", source);
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
      setMessage(
        error instanceof Error
          ? error.message
          : "We could not send your request. Please try again or use the full contact form.",
      );
    }
  }

  function close() {
    setOpen(false);
    window.setTimeout(() => {
      formRef.current?.reset();
      setStatus("idle");
      setMessage("");
      setFileName("");
    }, 250);
  }

  return (
    <>
      {children}
      <Modal
        open={open}
        onClose={close}
        labelledBy={titleId}
        headerLabel="decrypt - quick project request"
      >
        <div className="p-5 sm:p-8">
          {status === "sent" ? (
            <div className="py-8 text-center sm:py-12">
              <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-bg">
                <Check size={22} strokeWidth={2.5} aria-hidden />
              </span>
              <h2 id={titleId} className="font-display mt-5 text-3xl text-text">
                Request received.
              </h2>
              <p className="mx-auto mt-3 max-w-md text-[14px] leading-relaxed text-muted">
                A real person will review your note and reply with practical next steps.
              </p>
              <button
                type="button"
                onClick={close}
                className="mt-7 rounded-full border border-line px-5 py-2.5 font-mono text-[13px] text-text transition-colors hover:border-accent/60"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                Quick contact
              </p>
              <h2 id={titleId} className="font-display mt-3 text-[clamp(1.8rem,5vw,2.5rem)] text-text">
                Tell us what you need.
              </h2>
              <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-muted">
                Share the essentials. We will review your request and follow up by email.
              </p>

              <form ref={formRef} onSubmit={handleSubmit} className="mt-7 space-y-4">
                <input name="_hp" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Name" name="name" autoComplete="name" required />
                  <Field label="Email" name="email" type="email" autoComplete="email" required />
                  <Field label="Phone number" name="phone" type="tel" autoComplete="tel" />
                  <Field label="Company name" name="company" autoComplete="organization" />
                </div>

                <label className="block">
                  <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                    Comments
                  </span>
                  <textarea
                    name="comments"
                    rows={4}
                    required
                    placeholder="What would you like us to build, review, or improve?"
                    className="w-full resize-y rounded-xl border border-line bg-bg/65 px-4 py-3 text-[14px] text-text outline-none transition-colors placeholder:text-muted/55 focus:border-accent/65"
                  />
                </label>

                <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-line bg-bg/45 px-4 py-3 transition-colors hover:border-accent/55">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-surface text-accent">
                    <FileUp size={17} aria-hidden />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-mono text-[11px] uppercase tracking-[0.12em] text-text">
                      Upload a file
                    </span>
                    <span className="mt-1 block truncate text-[12px] text-muted">
                      {fileName || "PDF, document, spreadsheet, or image — up to 10 MB"}
                    </span>
                  </span>
                  <input
                    name="attachment"
                    type="file"
                    className="sr-only"
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.csv,.txt,.png,.jpg,.jpeg,.webp"
                    onChange={(event) => setFileName(event.target.files?.[0]?.name || "")}
                  />
                </label>

                <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-[12px] text-muted" aria-live="polite">
                    {status === "error" ? message : "No spam. Your details are only used to respond."}
                  </p>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group inline-flex min-w-40 items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-[13px] font-medium text-bg transition-[filter,opacity] hover:brightness-110 disabled:cursor-wait disabled:opacity-65"
                  >
                    {status === "sending" ? (
                      <><LoaderCircle size={16} className="animate-spin" aria-hidden /> Sending</>
                    ) : (
                      <>Send Request <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden /></>
                    )}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </Modal>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
        {label}{required && <span className="text-accent"> *</span>}
      </span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="w-full rounded-xl border border-line bg-bg/65 px-4 py-3 text-[14px] text-text outline-none transition-colors placeholder:text-muted/55 focus:border-accent/65"
      />
    </label>
  );
}
