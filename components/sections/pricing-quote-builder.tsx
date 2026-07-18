"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Lock, Check } from "lucide-react";
import { Chip, FieldError, FieldLabel, Input } from "../ui/field";
import { PRICING_GROUPS, type PricingItem } from "@/lib/content";

type SelectedItem = PricingItem & { groupTitle: string; isMonthly: boolean };

function parseRange(range: string): { low: number; isMonthly: boolean } {
  const isMonthly = range.includes("/mo");
  const nums = range
    .replace(/\/mo/g, "")
    .match(/\$[\d,]+/g)
    ?.map((s) => Number(s.replace(/[$,]/g, ""))) ?? [0];
  return { low: nums[0] ?? 0, isMonthly };
}

function formatUSD(n: number) {
  return `$${n.toLocaleString("en-US")}`;
}

const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export function PricingQuoteBuilder() {
  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set());
  const [stage, setStage] = useState<"build" | "gated" | "sent">("build");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [hp, setHp] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const allItems: SelectedItem[] = useMemo(
    () =>
      PRICING_GROUPS.flatMap((g) =>
        g.items.map((item) => ({
          ...item,
          groupTitle: g.title,
          isMonthly: item.range.includes("/mo"),
        }))
      ),
    []
  );

  const toggle = (key: string) => {
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

  const selected = allItems.filter((item) => selectedKeys.has(item.name));

  // Estimated quote = SUM of each selected item's low-end price (one-time and
  // monthly tracked separately), not the cheapest single item. Math.min was
  // the bug: selecting Enterprise ($2,500+) plus a $100 landing page used to
  // show "from $100" instead of a combined total.
  const oneTimeTotal = useMemo(
    () =>
      selected
        .filter((item) => !item.isMonthly)
        .reduce((sum, item) => sum + parseRange(item.range).low, 0),
    [selected]
  );

  const monthlyTotal = useMemo(
    () =>
      selected
        .filter((item) => item.isMonthly)
        .reduce((sum, item) => sum + parseRange(item.range).low, 0),
    [selected]
  );

  const hasSelection = selected.length > 0;

  const validate = () => {
    const e: { name?: string; email?: string } = {};
    if (!name.trim()) e.name = "Add your name.";
    if (!email.trim()) e.email = "Add an email so we can send your quote.";
    else if (!emailOk(email)) e.email = "That email does not look right.";
    return e;
  };

  const onReveal = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    // Fire-and-forget - send quote to biz email, don't block the reveal on it
    fetch("/api/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        company,
        items: selected.map((s) => ({ name: s.name, range: s.range, category: s.groupTitle })),
        oneTimeTotal,
        monthlyTotal,
        _hp: hp,
      }),
    }).catch(() => {/* silent - user already gets the reveal */});

    setStage("sent");
  };

  return (
    <div className="rounded-2xl border border-line bg-surface/40 p-6 sm:p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <div>
          <h3 className="font-display text-xl text-text sm:text-2xl">Build your own quote</h3>
          <p className="mt-2 max-w-lg text-[14px] leading-relaxed text-muted">
            Select what you need. We will show you a starting price as you go.
          </p>
        </div>
        {hasSelection && (
          <span className="rounded-full border border-accent/30 bg-accent/[0.06] px-3 py-1.5 font-mono text-[12px] text-accent">
            {selected.length} selected
          </span>
        )}
      </div>

      <AnimatePresence mode="wait">
        {stage === "build" && (
          <motion.div
            key="build"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="mt-7 space-y-7">
              {PRICING_GROUPS.map((group) => (
                <div key={group.slug}>
                  <h4 className="font-mono text-[12px] uppercase tracking-[0.16em] text-muted">
                    {group.title}
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-2.5">
                    {group.items.map((item) => (
                      <Chip
                        key={item.name}
                        active={selectedKeys.has(item.name)}
                        onClick={() => toggle(item.name)}
                      >
                        {selectedKeys.has(item.name) && (
                          <Check size={12} strokeWidth={2.5} className="mr-1 -ml-0.5 inline" aria-hidden />
                        )}
                        {item.name}
                      </Chip>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Live estimated quote display */}
            <div className="mt-8 rounded-xl border border-line bg-surface-2/50 p-5">
              {hasSelection ? (
                <>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                    Estimated quote
                  </p>
                  <p className="font-display mt-2 text-[clamp(1.6rem,4vw,2.2rem)] text-accent">
                    {oneTimeTotal > 0 ? `${formatUSD(oneTimeTotal)}+` : formatUSD(0)}
                  </p>
                  {monthlyTotal > 0 && (
                    <p className="mt-1.5 font-mono text-[13px] text-accent">
                      plus {formatUSD(monthlyTotal)}/mo ongoing
                    </p>
                  )}
                  <p className="mt-2 text-[13px] leading-relaxed text-muted">
                    {selected.length} service{selected.length === 1 ? "" : "s"} selected.
                    Real-time estimate. Final scope confirmed after discovery.
                  </p>
                </>
              ) : (
                <p className="text-[14px] text-muted">
                  Select one or more services above to see your estimated quote.
                </p>
              )}
            </div>

            <button
              type="button"
              disabled={!hasSelection}
              onClick={() => setStage("gated")}
              data-cursor="lock"
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 font-mono text-[14px] font-medium text-bg transition-[filter] duration-300 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Lock size={14} strokeWidth={2.2} aria-hidden />
              Get a free quote
              <span className="transition-transform duration-300 group-hover:translate-x-1">{"->"}</span>
            </button>
          </motion.div>
        )}

        {stage === "gated" && (
          <motion.form
            key="gated"
            onSubmit={onReveal}
            noValidate
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 space-y-5"
          >
            <div className="rounded-xl border border-line bg-surface-2/50 p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                {selected.length} service{selected.length === 1 ? "" : "s"} selected
              </p>
              <p className="mt-2 select-none text-[14px] leading-relaxed text-text blur-sm">
                Estimated quote {oneTimeTotal > 0 ? `${formatUSD(oneTimeTotal)}+` : ""}
              </p>
              <p className="mt-2.5 text-[12.5px] text-muted">
                Enter your details to reveal your estimated quote and receive a full breakdown.
              </p>
            </div>

            <div>
              <FieldLabel htmlFor="q-name">Your name</FieldLabel>
              <Input
                id="q-name"
                value={name}
                invalid={!!errors.name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jordan Reyes"
                autoComplete="name"
              />
              <FieldError>{errors.name}</FieldError>
            </div>
            <div>
              <FieldLabel htmlFor="q-email">Work email</FieldLabel>
              <Input
                id="q-email"
                type="email"
                value={email}
                invalid={!!errors.email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                autoComplete="email"
              />
              <FieldError>{errors.email}</FieldError>
            </div>
            <div>
              <FieldLabel htmlFor="q-company">Company</FieldLabel>
              <Input
                id="q-company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="optional"
              />
            </div>
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

            <div className="flex flex-col gap-3 pt-1 sm:flex-row">
              <button
                type="button"
                onClick={() => setStage("build")}
                data-cursor="lock"
                className="inline-flex items-center justify-center rounded-full border border-line px-5 py-3 font-mono text-[13px] text-muted transition-colors hover:border-accent/50 hover:text-text"
              >
                ← Back
              </button>
              <button
                type="submit"
                data-cursor="lock"
                className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-[14px] font-medium text-bg transition-[filter] duration-300 hover:brightness-110"
              >
                Get a free quote
                <span className="transition-transform duration-300 group-hover:translate-x-1">{"->"}</span>
              </button>
            </div>
          </motion.form>
        )}

        {stage === "sent" && (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7"
          >
            <div className="rounded-xl border border-accent/30 bg-accent/[0.06] p-6">
              <span className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.16em] text-accent">
                <span className="status-dot h-1.5 w-1.5 rounded-full bg-accent" />
                quote unlocked
              </span>
              <p className="font-mono mt-2 text-[11px] uppercase tracking-[0.16em] text-muted">
                Estimated quote
              </p>
              <p className="font-display mt-1 text-[clamp(1.8rem,4vw,2.4rem)] text-accent">
                {oneTimeTotal > 0 ? `${formatUSD(oneTimeTotal)}+` : formatUSD(0)}
              </p>
              {monthlyTotal > 0 && (
                <p className="mt-1 font-mono text-[14px] text-accent">
                  plus {formatUSD(monthlyTotal)}/mo ongoing
                </p>
              )}
              <p className="mt-3 text-[13.5px] leading-relaxed text-muted">
                Thanks, {name.split(" ")[0] || "there"}. This is an estimated quote based on what
                you selected. Final scope, timeline, and pricing are confirmed after a short
                discovery call. We will be in touch.
              </p>
            </div>

            <ul className="mt-5 space-y-1.5">
              {selected.map((item) => (
                <li
                  key={item.name}
                  className="flex items-center justify-between gap-3 border-b border-line py-2.5 text-[13.5px]"
                >
                  <span className="text-text">{item.name}</span>
                  <span className="shrink-0 font-mono text-[12px] text-muted">{item.range}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <a
                href="/about-contact#start"
                data-simple-contact="Review My Workflow"
                data-cursor="lock"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 font-mono text-[14px] font-medium text-bg transition-[filter] duration-300 hover:brightness-110"
              >
                Review My Workflow
                <span className="transition-transform duration-300 group-hover:translate-x-1">{"->"}</span>
              </a>
            </div>
            <p className="mt-3 text-center text-[12.5px] text-muted">
              No spam. A real person on our team reads this.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
