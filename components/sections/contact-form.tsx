"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Container, Kicker, Section } from "../primitives";
import { DecryptText } from "../decrypt-text";
import { Reveal } from "../reveal";
import { Check, FileUp, X } from "lucide-react";
import { Chip, FieldError, FieldLabel, Input, Textarea } from "../ui/field";
import {
  ABOUT_DIFFERENTIATORS,
  BUDGET_OPTIONS,
  OPERATING_PRINCIPLES,
  PRICING_GROUPS,
  TIMELINE_OPTIONS,
  type PricingItem,
} from "@/lib/content";
import { PUBLIC_CONTACT_EMAIL } from "@/lib/contact-details";

type Errors = Partial<Record<"name" | "email" | "services" | "details", string>>;
type SelectedPricingItem = PricingItem & { groupTitle: string };

const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

/**
 * Pulls the low end of a price range string, e.g. "$450 to $6,000+" -> 450.
 * Strips "/mo" first so monthly ranges parse the same way as one-time ones.
 */
function parseLow(range: string): number {
  const match = range.replace(/\/mo/g, "").match(/\$[\d,]+/g);
  if (!match || match.length === 0) return 0;
  return Number(match[0].replace(/[$,]/g, ""));
}

function formatUSD(n: number) {
  return `$${n.toLocaleString("en-US")}`;
}

const CONTACT_DIFFERENTIATORS = ABOUT_DIFFERENTIATORS.slice(0, 3);
const CONTACT_PRINCIPLES = OPERATING_PRINCIPLES.filter(({ label }) =>
  ["Human review", "Secure by design", "Support after launch"].includes(label),
);
const CONTACT_STEPS = [
  { number: "01", label: "We review the workflow", value: "Your goals, users, tools, friction and constraints are examined together." },
  { number: "02", label: "We find the right starting point", value: "We identify what should become software, automation or a focused AI capability." },
  { number: "03", label: "You receive a practical direction", value: "We respond with useful questions, likely scope and the clearest next step." },
  { number: "04", label: "We shape the build", value: "If there is a fit, the workflow becomes a plan your team can review and control." },
] as const;

export function ContactForm({
  showAboutSummary = false,
  modal = false,
}: {
  showAboutSummary?: boolean;
  modal?: boolean;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set());
  const [details, setDetails] = useState("");
  const [currentTools, setCurrentTools] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [filesOrLinks, setFilesOrLinks] = useState("");
  const [attachment, setAttachment] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");
  const [hp, setHp] = useState("");

  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [sendError, setSendError] = useState("");

  const allPricingItems: SelectedPricingItem[] = useMemo(
    () => PRICING_GROUPS.flatMap((g) => g.items.map((item) => ({ ...item, groupTitle: g.title }))),
    []
  );

  const selectedItems = useMemo(
    () => allPricingItems.filter((i) => selectedKeys.has(i.name)),
    [allPricingItems, selectedKeys]
  );

  // Estimated quote = SUM of each selected item's low-end price, not just the
  // cheapest one. Summing is what makes "estimated quote" meaningful once
  // more than one service is picked (the previous Math.min bug always showed
  // the cheapest single item's price, e.g. selecting Enterprise + a $100
  // landing page incorrectly showed "from $100").
  const oneTimeTotal = useMemo(
    () =>
      selectedItems
        .filter((i) => !i.range.includes("/mo"))
        .reduce((sum, i) => sum + parseLow(i.range), 0),
    [selectedItems]
  );

  const monthlyTotal = useMemo(
    () =>
      selectedItems
        .filter((i) => i.range.includes("/mo"))
        .reduce((sum, i) => sum + parseLow(i.range), 0),
    [selectedItems]
  );

  const hasEstimate = selectedItems.length > 0;

  const toggleService = (key: string) => {
    setSelectedKeys((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  const validate = (): Errors => {
    const e: Errors = {};
    if (!name.trim()) e.name = "Add your name so we know who we are talking to.";
    if (!email.trim()) e.email = "Add an email so we can reply.";
    else if (!emailOk(email)) e.email = "That email does not look right. Check it once.";
    if (selectedKeys.size === 0) e.services = "Pick at least one thing you need.";
    if (!details.trim()) e.details = "Tell us a little about the project.";
    return e;
  };

  const blur = (field: keyof Errors) => {
    const e = validate();
    setErrors((prev) => ({ ...prev, [field]: e[field] }));
  };

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) {
      const first = document.querySelector<HTMLElement>("[data-invalid='true']");
      first?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setStatus("sending");
    setSendError("");
    try {
      const formData = new FormData();
      formData.set("name", name);
      formData.set("email", email);
      formData.set("phone", phone);
      formData.set("company", company);
      formData.set("website", company);
      formData.set("needs", JSON.stringify(selectedItems.map((i) => i.name)));
      formData.set("details", details);
      formData.set("currentTools", currentTools);
      formData.set("budget", budget);
      formData.set("timeline", timeline);
      formData.set("filesOrLinks", filesOrLinks);
      formData.set("quoteItems", JSON.stringify(selectedItems.map((i) => `${i.name} (${i.range})`)));
      formData.set(
        "quoteEstimate",
        oneTimeTotal > 0 || monthlyTotal > 0
          ? [
              oneTimeTotal > 0 ? `${formatUSD(oneTimeTotal)} one-time` : null,
              monthlyTotal > 0 ? `${formatUSD(monthlyTotal)}/mo ongoing` : null,
            ].filter(Boolean).join(" + ")
          : "",
      );
      formData.set("_hp", hp);
      if (attachment) formData.set("attachment", attachment);

      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setSendError(data.error || "We could not send your request. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("sent");
    } catch {
      setSendError("We could not reach the email service. Please try again.");
      setStatus("error");
    }
  };

  return (
    <Section id={modal ? undefined : "start"} className={modal ? "!py-0" : "border-t border-line"}>
      <Container className={modal ? "!max-w-none !px-0" : undefined}>
        <div className={modal ? "block" : "grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16"}>
          {/* left: pitch */}
          <div className={modal ? "hidden" : showAboutSummary ? "lg:sticky lg:top-24 lg:self-start" : undefined}>
            <Reveal>
              <Kicker>START HERE</Kicker>
            </Reveal>
            <DecryptText
              as="h2"
              text="Send us the workflow that slows your team down."
              accent="workflow"
              className="font-display mt-5 text-[clamp(1.9rem,4.4vw,3rem)]"
            />
            <Reveal delay={0.05}>
              <p className="mt-6 max-w-md text-[clamp(1rem,1.4vw,1.12rem)] leading-relaxed text-muted">
                Tell Decrypt what you are trying to build, automate, fix, or improve. We will
                help identify what should become software, what should become automation, what AI
                can safely support, and what should stay human.
              </p>
            </Reveal>
            <Reveal delay={0.07}>
              <p className="mt-4 font-mono text-[13px] text-muted">
                Prefer email?{" "}
                <a
                  href={`mailto:${PUBLIC_CONTACT_EMAIL}`}
                  className="text-text underline decoration-accent/50 underline-offset-4 transition-colors hover:text-accent"
                >
                  {PUBLIC_CONTACT_EMAIL}
                </a>
              </p>
            </Reveal>

            {showAboutSummary && (
              <div className="mt-10 space-y-5">
                <Reveal delay={0.09}>
                  <div className="rounded-2xl border border-accent/25 bg-accent/[0.045] p-6">
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                      Why Decrypt
                    </p>
                    <h3 className="font-display mt-3 text-xl text-text">
                      Clear thinking before complex delivery.
                    </h3>
                    <ul className="mt-5 space-y-3">
                      {CONTACT_DIFFERENTIATORS.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2.5 text-[14px] leading-relaxed text-muted"
                        >
                          <span className="mt-1 shrink-0 text-accent" aria-hidden>
                            {"->"}
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>

                <Reveal delay={0.11}>
                  <div className="contact-system-map relative min-h-56 overflow-hidden rounded-2xl border border-line bg-bg/70 p-5">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                          From friction to flow
                        </p>
                        <p className="mt-2 text-[13px] leading-relaxed text-muted">
                          We connect the request, business rules, systems and measurable result.
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-muted">
                        <i className="status-dot h-1.5 w-1.5 rounded-full bg-accent" /> mapping
                      </span>
                    </div>
                    <div className="contact-flow-track" aria-hidden>
                      {["REQUEST", "LOGIC", "BUILD", "RESULT"].map((label, index) => (
                        <span key={label} className={`contact-flow-node contact-flow-node-${index + 1}`}>
                          <i />{label}
                        </span>
                      ))}
                      <b className="contact-flow-packet contact-flow-packet-one" />
                      <b className="contact-flow-packet contact-flow-packet-two" />
                    </div>
                  </div>
                </Reveal>

                <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  {CONTACT_PRINCIPLES.map((principle, i) => (
                    <Reveal key={principle.label} delay={0.12 + i * 0.04}>
                      <div className="card h-full rounded-xl p-4">
                        <p className="font-mono text-[11px] leading-snug text-accent">
                          {principle.label}
                        </p>
                        <p className="mt-2 text-[12.5px] leading-relaxed text-muted">
                          {principle.value}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>

                <Reveal delay={0.2}>
                  <div className="rounded-2xl border border-line bg-surface/45 p-5 sm:p-6">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                      What happens next
                    </p>
                    <div className="mt-5 space-y-4">
                      {CONTACT_STEPS.map((step) => (
                        <div key={step.number} className="grid grid-cols-[34px_1fr] gap-3">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-accent/30 bg-accent/[0.06] font-mono text-[10px] text-accent">
                            {step.number}
                          </span>
                          <div>
                            <p className="font-mono text-[12px] text-text">{step.label}</p>
                            <p className="mt-1 text-[12.5px] leading-relaxed text-muted">{step.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.22}>
                  <Link
                    href="/case-studies"
                    className="group inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-5 py-2.5 font-mono text-[13px] text-text transition-colors hover:border-accent/50"
                  >
                    Explore Decrypt case studies
                    <span
                      aria-hidden
                      className="text-accent transition-transform duration-300 group-hover:translate-x-1"
                    >
                      {"->"}
                    </span>
                  </Link>
                </Reveal>
              </div>
            )}
          </div>

          {/* right: form / confirmation */}
          <div>
            <div className={modal ? "bg-surface/40 p-5 sm:p-8" : "rounded-2xl border border-line bg-surface/40 p-6 sm:p-8"}>
              {status === "sent" ? (
                <Confirmation />
              ) : (
                <form onSubmit={onSubmit} noValidate className="space-y-7">
                  {/* honeypot */}
                  <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
                    <label>
                      Do not fill this
                      <input
                        tabIndex={-1}
                        autoComplete="off"
                        value={hp}
                        onChange={(e) => setHp(e.target.value)}
                      />
                    </label>
                  </div>

                  {/* services -> replaces the old "what do you need" chips, now priced */}
                  <fieldset data-invalid={!!errors.services}>
                    <legend className="mb-2 block font-mono text-[12px] uppercase tracking-[0.16em] text-muted">
                      Project type
                    </legend>
                    <div className="space-y-4">
                      {PRICING_GROUPS.map((group) => (
                        <div key={group.slug}>
                          <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted/70">
                            {group.title}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {group.items.map((item) => (
                              <Chip
                                key={item.name}
                                active={selectedKeys.has(item.name)}
                                onClick={() => toggleService(item.name)}
                              >
                                {selectedKeys.has(item.name) && (
                                  <Check
                                    size={11}
                                    strokeWidth={2.5}
                                    className="-ml-0.5 mr-1 inline"
                                    aria-hidden
                                  />
                                )}
                                {item.name}
                              </Chip>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <FieldError>{errors.services}</FieldError>
                  </fieldset>

                  {/* live estimated quote -> replaces the old "Budget" chip picker */}
                  <div
                    className={`rounded-xl border px-5 py-4 transition-colors ${
                      hasEstimate ? "border-accent/30 bg-accent/[0.06]" : "border-line bg-surface-2/40"
                    }`}
                  >
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                      Estimated quote
                    </p>
                    {hasEstimate ? (
                      <>
                        <p className="font-display mt-1.5 text-[clamp(1.5rem,3.5vw,2rem)] text-accent">
                          {oneTimeTotal > 0 ? `${formatUSD(oneTimeTotal)}+` : formatUSD(0)}
                        </p>
                        {monthlyTotal > 0 && (
                          <p className="mt-1 font-mono text-[13px] text-accent">
                            plus {formatUSD(monthlyTotal)}/mo ongoing
                          </p>
                        )}
                        <p className="mt-2 text-[12.5px] leading-relaxed text-muted">
                          {selectedItems.length} service{selectedItems.length === 1 ? "" : "s"}{" "}
                          selected. Starting estimate, real-time. Final scope confirmed after
                          discovery.
                        </p>
                      </>
                    ) : (
                      <p className="mt-1.5 text-[13.5px] text-muted">
                        Select services above to see your estimated quote update live.
                      </p>
                    )}
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div data-invalid={!!errors.name}>
                      <FieldLabel htmlFor="name">Your name</FieldLabel>
                      <Input
                        id="name"
                        value={name}
                        invalid={!!errors.name}
                        onChange={(e) => setName(e.target.value)}
                        onBlur={() => blur("name")}
                        placeholder="Jordan Reyes"
                        autoComplete="name"
                      />
                      <FieldError>{errors.name}</FieldError>
                    </div>
                    <div data-invalid={!!errors.email}>
                      <FieldLabel htmlFor="email">Work email</FieldLabel>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        invalid={!!errors.email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={() => blur("email")}
                        placeholder="you@company.com"
                        autoComplete="email"
                      />
                      <FieldError>{errors.email}</FieldError>
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <FieldLabel htmlFor="phone">Phone number</FieldLabel>
                      <Input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+1 555 123 4567 - optional"
                        autoComplete="tel"
                        inputMode="tel"
                      />
                    </div>
                    <div>
                      <FieldLabel htmlFor="company">Company or website</FieldLabel>
                      <Input
                        id="company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="company.com - optional"
                        autoComplete="organization"
                      />
                    </div>
                  </div>

                  <div data-invalid={!!errors.details}>
                    <FieldLabel htmlFor="details">Project description</FieldLabel>
                    <Textarea
                      id="details"
                      value={details}
                      invalid={!!errors.details}
                      onChange={(e) => setDetails(e.target.value)}
                      onBlur={() => blur("details")}
                      placeholder="Tell us what is broken, manual, slow, unclear, or ready to build. Paste links, docs, workflows, or examples if helpful."
                      rows={4}
                    />
                    <FieldError>{errors.details}</FieldError>
                  </div>

                  <div>
                    <FieldLabel htmlFor="current-tools">Current tools</FieldLabel>
                    <Textarea
                      id="current-tools"
                      value={currentTools}
                      onChange={(e) => setCurrentTools(e.target.value)}
                      placeholder="Examples: spreadsheets, Microsoft 365, SharePoint, WordPress, CRM, ERP, app, website, email, documents."
                      rows={3}
                    />
                  </div>

                  <div>
                    <FieldLabel>What&apos;s your estimated budget range</FieldLabel>
                    <div className="flex flex-wrap gap-2">
                      {BUDGET_OPTIONS.map((b) => (
                        <Chip
                          key={b}
                          active={budget === b}
                          onClick={() => setBudget(budget === b ? "" : b)}
                        >
                          {b}
                        </Chip>
                      ))}
                    </div>
                  </div>

                  <div>
                    <FieldLabel>What&apos;s your estimated timeline</FieldLabel>
                    <div className="flex flex-wrap gap-2">
                      {TIMELINE_OPTIONS.map((t) => (
                        <Chip
                          key={t}
                          active={timeline === t}
                          onClick={() => setTimeline(timeline === t ? "" : t)}
                        >
                          {t}
                        </Chip>
                      ))}
                    </div>
                  </div>

                  <div>
                    <FieldLabel htmlFor="files-links">Files or links</FieldLabel>
                    <Input
                      id="files-links"
                      value={filesOrLinks}
                      onChange={(e) => setFilesOrLinks(e.target.value)}
                      placeholder="Paste docs, screenshots, Looms, workflow links, examples, or a folder URL."
                    />
                  </div>

                  <div>
                    <FieldLabel htmlFor="contact-attachment">Upload file</FieldLabel>
                    <input
                      ref={fileInputRef}
                      id="contact-attachment"
                      type="file"
                      className="sr-only"
                      accept=".pdf,.doc,.docx,.xls,.xlsx,.csv,.txt,.png,.jpg,.jpeg,.webp"
                      onChange={(event) => {
                        const file = event.target.files?.[0] ?? null;
                        if (file && file.size > 10 * 1024 * 1024) {
                          setAttachment(null);
                          setFileError("Please choose a file smaller than 10 MB.");
                          event.target.value = "";
                          return;
                        }
                        setAttachment(file);
                        setFileError("");
                      }}
                    />
                    <div className="flex flex-col gap-3 rounded-xl border border-dashed border-line bg-bg/45 p-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="min-w-0">
                        <p className="truncate text-[13px] text-text">
                          {attachment?.name || "Attach a document, spreadsheet, or image"}
                        </p>
                        <p className="mt-1 text-[12px] text-muted">
                          {fileError || "Accepted files up to 10 MB"}
                        </p>
                      </div>
                      <div className="flex shrink-0 items-center gap-2">
                        {attachment && (
                          <button
                            type="button"
                            onClick={() => {
                              setAttachment(null);
                              setFileError("");
                              if (fileInputRef.current) fileInputRef.current.value = "";
                            }}
                            aria-label="Remove uploaded file"
                            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent/50 hover:text-text"
                          >
                            <X size={15} aria-hidden />
                          </button>
                        )}
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="inline-flex items-center justify-center gap-2 rounded-full border border-accent/45 bg-accent/[0.07] px-4 py-2.5 font-mono text-[12px] text-accent transition-colors hover:border-accent hover:bg-accent/[0.12]"
                        >
                          <FileUp size={15} aria-hidden />
                          Browse files
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 pt-1">
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      data-cursor="lock"
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 font-mono text-[14px] font-medium text-bg transition-[filter] duration-300 hover:brightness-110 disabled:opacity-60"
                    >
                      {status === "sending" ? (
                        <span className="font-mono">encrypting - sending...</span>
                      ) : (
                        <>
                          Send My Request
                          <span className="transition-transform duration-300 group-hover:translate-x-1">
                            {"->"}
                          </span>
                        </>
                      )}
                    </button>

                    {status === "error" && (
                      <p className="font-mono text-[13px] text-[#ff8585]" role="alert">
                        {`// ${sendError || "Something broke on send."} Email us at `}
                        <a className="underline underline-offset-4" href={`mailto:${PUBLIC_CONTACT_EMAIL}`}>
                          {PUBLIC_CONTACT_EMAIL}
                        </a>
                        {" and we will sort it."}
                      </p>
                    )}

                    <p className="text-center text-[13px] leading-relaxed text-muted">
                      No spam. No generic sales script. A real person reviews your brief and replies with practical next steps.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function Confirmation() {
  return (
    <div className="flex min-h-[420px] flex-col items-center justify-center py-10 text-center">
      <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/40 px-3 py-1.5 font-mono text-[12px] text-accent">
        <span className="status-dot h-1.5 w-1.5 rounded-full bg-accent" />
        decoded
      </span>
      <DecryptText
        as="p"
        text="Thank you for sending your brief. The Decrypt team will review it and reply with practical next steps."
        trigger="load"
        accent="received"
        className="font-display max-w-md text-[clamp(1.3rem,3vw,1.9rem)] leading-snug text-text"
        options={{ speed: 20, stepPerChar: 0.7 }}
      />
      <p className="mt-6 font-mono text-[12px] tracking-[0.16em] text-muted uppercase">
        {"// channel secure"}
      </p>
    </div>
  );
}
