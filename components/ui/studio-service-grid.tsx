"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, Cpu, Layers3, Maximize2, Radar, Sparkles } from "lucide-react";
import { Reveal } from "../reveal";
import { TiltCard } from "../tilt-card";
import { Modal } from "./modal";
import type { InnerItem } from "@/lib/inner-content";
import { STUDIO_SERVICE_DETAILS } from "@/lib/studio-service-details";

const icons = [Layers3, Cpu, Radar, Sparkles] as const;

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function StudioServiceDetails({ item }: { item: InnerItem }) {
  const detail = STUDIO_SERVICE_DETAILS[item.label];
  const titleId = `studio-service-${slugify(item.label)}`;

  if (!detail) return null;

  return (
    <div className="p-5 sm:p-8">
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
        Decrypt Studio service
      </p>
      <h2 id={titleId} className="font-display mt-3 text-[clamp(1.65rem,4vw,2.35rem)] text-text">
        {item.label}
      </h2>
      <p className="mt-4 text-[14.5px] leading-relaxed text-muted">{item.body}</p>

      <div className="mt-6 rounded-xl border border-accent/25 bg-accent/[0.055] p-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
          Direct answer
        </p>
        <p className="mt-3 text-[15px] font-medium leading-relaxed text-text">
          {detail.directAnswer}
        </p>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-line bg-bg/55 p-5">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
            What we can deliver
          </h3>
          <ul className="mt-4 space-y-3">
            {detail.capabilities.map((capability) => (
              <li key={capability} className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-muted">
                <Check className="mt-0.5 shrink-0 text-accent" size={15} strokeWidth={2.4} aria-hidden />
                {capability}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-line bg-bg/55 p-5">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
            Business outcomes
          </h3>
          <ul className="mt-4 space-y-3">
            {detail.outcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-muted">
                <span className="mt-0.5 text-accent" aria-hidden>{"->"}</span>
                {outcome}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {detail.useCases.map((useCase) => (
          <span key={useCase} className="rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-[11px] text-muted">
            {useCase}
          </span>
        ))}
      </div>

      <Link
        href="/about-contact#start"
        data-simple-contact="Discuss This Service"
        className="group mt-7 inline-flex items-center justify-center gap-2 rounded-full border border-accent bg-accent px-6 py-3 font-mono text-[13px] font-semibold text-bg transition-[filter] hover:brightness-110"
      >
        Discuss This Service
        <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden />
      </Link>
    </div>
  );
}

export function StudioServiceGrid({ items }: { items: InnerItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeItem = activeIndex === null ? null : items[activeIndex];

  return (
    <>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item, index) => {
          const Icon = icons[index % icons.length];
          return (
            <Reveal key={item.label} delay={index * 0.035} className="h-full">
              <TiltCard className="h-full">
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-haspopup="dialog"
                  aria-label={`View details about ${item.label}`}
                  className="card group flex h-full w-full flex-col overflow-hidden rounded-xl text-left focus-visible:rounded-xl"
                >
                  <span className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100 group-focus-visible:scale-x-100" />
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface-2 text-accent transition-colors group-hover:border-accent/40 group-hover:bg-accent/[0.08]">
                        <Icon size={18} strokeWidth={1.8} aria-hidden />
                      </span>
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-accent/30 bg-accent/[0.06] text-accent transition-all group-hover:scale-105 group-hover:border-accent/55 group-hover:bg-accent/[0.12]">
                        <Maximize2 size={14} strokeWidth={1.9} aria-hidden />
                      </span>
                    </div>
                    <h3 className="font-display text-xl text-text">{item.label}</h3>
                    <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-muted">{item.body}</p>
                  </div>
                  <span className="flex w-full items-center justify-between border-t border-accent/25 bg-accent/[0.05] px-6 py-3.5 transition-colors group-hover:bg-accent/[0.1]">
                    <span className="font-mono text-[12px] font-medium text-accent">View service details</span>
                    <ArrowRight size={15} className="text-accent transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </button>
              </TiltCard>
            </Reveal>
          );
        })}
      </div>

      <Modal
        open={activeIndex !== null}
        onClose={() => setActiveIndex(null)}
        labelledBy={activeItem ? `studio-service-${slugify(activeItem.label)}` : "studio-service-details"}
        headerLabel="decrypt - studio service brief"
      >
        {activeItem && activeIndex !== null && (
          <StudioServiceDetails item={activeItem} />
        )}
      </Modal>
    </>
  );
}
