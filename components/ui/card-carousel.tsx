"use client";

import { Children, type ReactNode, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

function CarouselGroup({ children, copy = false }: { children: ReactNode; copy?: boolean }) {
  return (
    <div
      className={copy ? "card-carousel-group card-carousel-copy" : "card-carousel-group"}
      aria-hidden={copy || undefined}
      inert={copy || undefined}
    >
      {Children.map(children, (child) => (
        <div
          data-carousel-item
          className="w-[calc(100vw-3rem)] max-w-[360px] shrink-0 snap-start sm:w-[340px] lg:w-[360px] [&>*]:h-full"
        >
          {child}
        </div>
      ))}
    </div>
  );
}

export function CardCarousel({
  children,
  label,
  duration = "52s",
}: {
  children: ReactNode;
  label: string;
  duration?: string;
}) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [manuallyPaused, setManuallyPaused] = useState(false);

  function move(direction: -1 | 1) {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const animation = track.getAnimations()[0];
    setManuallyPaused(true);
    const group = track.querySelector<HTMLElement>(".card-carousel-group");
    const item = group?.querySelector<HTMLElement>("[data-carousel-item]");

    if (!animation || !group || !item) {
      viewport.scrollBy({ left: direction * 380, behavior: "smooth" });
      return;
    }

    const durationValue = animation.effect?.getComputedTiming().duration;
    const durationMs = typeof durationValue === "number" ? durationValue : 0;
    const currentTime = typeof animation.currentTime === "number" ? animation.currentTime : 0;
    const styles = window.getComputedStyle(group);
    const gap = Number.parseFloat(styles.columnGap || styles.gap) || 0;
    const groupWidth = group.getBoundingClientRect().width;

    if (!durationMs || !groupWidth) return;

    const stepMs = durationMs * ((item.getBoundingClientRect().width + gap) / groupWidth);
    animation.currentTime = (currentTime + direction * stepMs + durationMs) % durationMs;
    animation.pause();
  }

  return (
    <div className="mt-10">
      <div className="mb-1 flex flex-col items-start gap-3 px-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          {manuallyPaused ? "Auto-scroll paused - use arrows to browse" : "Moving continuously - hover or focus to pause"}
        </p>
        <div className="flex shrink-0 items-center gap-2 self-end sm:self-auto" aria-label={`${label} controls`}>
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label={`Show previous ${label.toLowerCase()}`}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface/70 text-text transition-colors hover:border-accent/55 hover:text-accent"
          >
            <ArrowLeft size={16} aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label={`Show next ${label.toLowerCase()}`}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface/70 text-text transition-colors hover:border-accent/55 hover:text-accent"
          >
            <ArrowRight size={16} aria-hidden />
          </button>
        </div>
      </div>

      <div
        ref={viewportRef}
        role="region"
        aria-label={label}
        tabIndex={0}
        className="card-carousel-viewport -mx-3 overflow-hidden px-3 py-8"
      >
        <div
          ref={trackRef}
          className="card-carousel-track"
          style={{
            ["--card-carousel-duration" as string]: duration,
            animationPlayState: manuallyPaused ? "paused" : undefined,
          }}
        >
          <CarouselGroup>{children}</CarouselGroup>
          <CarouselGroup copy>{children}</CarouselGroup>
        </div>
      </div>
    </div>
  );
}
