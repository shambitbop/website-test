"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

export type ProcessRoadmapItem = {
  number: string;
  label: string;
  body: string;
};

export function ProcessRoadmap({
  items,
  className,
}: {
  items: readonly ProcessRoadmapItem[];
  className?: string;
}) {
  const railRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start 65%", "end 60%"],
  });
  const fillHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={railRef} className={cn("relative pl-10 sm:pl-14", className)}>
      <span className="absolute left-[14px] top-2 h-[calc(100%-1rem)] w-px bg-line" />
      <motion.span
        style={{ height: reduceMotion ? "100%" : fillHeight }}
        className="absolute left-[14px] top-2 w-px origin-top bg-accent shadow-[0_0_12px_-4px_var(--accent)]"
      />

      <ol className="space-y-12">
        {items.map((item) => (
          <motion.li
            key={`${item.number}-${item.label}`}
            initial={reduceMotion ? false : { opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.55, margin: "0px 0px -10% 0px" }}
            transition={{ duration: reduceMotion ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="group relative"
          >
            <span className="absolute -left-10 top-1 flex h-7 w-7 items-center justify-center rounded-full border border-line bg-bg transition-colors group-hover:border-accent/50 sm:-left-14">
              <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_var(--accent)]" />
            </span>
            <div className="rounded-xl border border-line bg-surface/50 p-6 transition-[border-color,background,transform] duration-300 group-hover:translate-x-1 group-hover:border-accent/35 group-hover:bg-surface/70">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-sm text-accent">{item.number}</span>
                <h3 className="font-display text-xl text-text">{item.label}</h3>
              </div>
              <p className="mt-3 max-w-4xl text-[15px] leading-relaxed text-muted">
                {item.body}
              </p>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
