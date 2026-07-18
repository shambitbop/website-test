"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Cpu, Layers3, Radar, Sparkles } from "lucide-react";
import { Reveal } from "../reveal";
import { TiltCard } from "../tilt-card";
import { Modal } from "./modal";
import type { InnerItem } from "@/lib/inner-content";
import { finishHomepagePopupFlow, getHomepagePopupTarget } from "@/lib/homepage-popup-flow";

const icons = [Layers3, Cpu, Radar, Sparkles] as const;

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function capabilities(body: string) {
  return body
    .replace(/\.$/, "")
    .split(/,\s+|\s+and\s+/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function IndustryDetails({ item }: { item: InnerItem }) {
  const titleId = `industry-${slugify(item.label)}`;
  const items = capabilities(item.body);

  return (
    <div className="p-5 sm:p-8">
      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
        Industry workflow opportunity
      </p>
      <h2 id={titleId} className="font-display mt-3 text-[clamp(1.65rem,4vw,2.35rem)] text-text">
        {item.label}
      </h2>
      <p className="mt-4 text-[14.5px] leading-relaxed text-muted">{item.body}</p>

      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-line bg-bg/55 p-5">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
            What we can connect
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {items.map((capability) => (
              <span
                key={capability}
                className="rounded-full border border-line bg-surface px-3 py-1.5 text-[12px] leading-snug text-muted"
              >
                {capability}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-accent/25 bg-accent/[0.05] p-5">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
            What better looks like
          </h3>
          <ul className="mt-4 space-y-3 text-[13.5px] leading-relaxed text-muted">
            {["Fewer manual handoffs and repeated updates", "Clearer status, ownership and operational visibility", "A connected system that can improve as the business grows"].map((outcome) => (
              <li key={outcome} className="flex items-start gap-2.5">
                <span className="mt-1 text-accent" aria-hidden>{"->"}</span>
                {outcome}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-line bg-surface/45 p-5">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
          A practical first step
        </p>
        <p className="mt-3 text-[14px] leading-relaxed text-muted">
          We start by mapping one high-friction workflow in your {item.label.toLowerCase()} operation,
          then identify the smallest useful software, automation or AI system that can create a
          measurable improvement.
        </p>
      </div>

      <Link
        href="/about-contact#start"
        data-simple-contact="Discuss My Industry Workflow"
        className="group mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-[13px] font-medium text-bg transition-[filter] hover:brightness-110"
      >
        Discuss My Industry Workflow
        <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden />
      </Link>
    </div>
  );
}

export function IndustryCardGrid({ items }: { items: InnerItem[] }) {
  const [active, setActive] = useState<InnerItem | null>(null);
  const openedFromHomepageRef = useRef(false);

  useEffect(() => {
    const requestedSlug = getHomepagePopupTarget("industry");
    const requestedItem = items.find((item) => slugify(item.label) === requestedSlug);
    if (!requestedItem) return;

    openedFromHomepageRef.current = true;
    const timer = window.setTimeout(() => setActive(requestedItem), 0);
    return () => window.clearTimeout(timer);
  }, [items]);

  function closeActiveIndustry() {
    const shouldReturnToTop = openedFromHomepageRef.current;
    openedFromHomepageRef.current = false;
    setActive(null);
    if (shouldReturnToTop) finishHomepagePopupFlow("industry");
  }

  return (
    <>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item, index) => {
          const Icon = icons[index % icons.length];
          return (
            <Reveal key={item.label} delay={index * 0.035}>
              <TiltCard className="h-full">
                <button
                  type="button"
                  onClick={() => {
                    openedFromHomepageRef.current = false;
                    setActive(item);
                  }}
                  aria-label={`Explore ${item.label}`}
                  className="card group flex h-full w-full flex-col overflow-hidden rounded-xl p-6 text-left"
                >
                  <span className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />
                  <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface-2 text-accent">
                    <Icon size={18} strokeWidth={1.8} aria-hidden />
                  </div>
                  <h3 className="font-display text-xl text-text">{item.label}</h3>
                  <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-muted">{item.body}</p>
                  <span className="mt-5 inline-flex items-center gap-2 font-mono text-[12px] text-accent">
                    Explore industry system
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                      aria-hidden
                    />
                  </span>
                </button>
              </TiltCard>
            </Reveal>
          );
        })}
      </div>

      <Modal
        open={!!active}
        onClose={closeActiveIndustry}
        labelledBy={active ? `industry-${slugify(active.label)}` : "industry-details"}
        headerLabel="decrypt - industry system map"
      >
        {active && <IndustryDetails item={active} />}
      </Modal>
    </>
  );
}
