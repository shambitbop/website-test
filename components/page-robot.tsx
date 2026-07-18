"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";

const INACTIVITY_DELAY = 5_000;

/**
 * Small sticky robot fixed at bottom-right.
 * Eyes track cursor. Hover shows a clickable speech bubble linking to the contact form.
 * Dismissible. Reduced motion: no hover scale, eyes stay centred.
 */
export function PageRobot() {
  const reduce = useReducedMotion();
  const pathname = usePathname();
  const [dismissed, setDismissed] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(true);
  const [aboveFold, setAboveFold] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let inactivityTimer: ReturnType<typeof setTimeout>;

    const restartInactivityTimer = () => {
      setActive(true);
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => setActive(false), INACTIVITY_DELAY);
    };

    const updateFoldPosition = () => {
      setAboveFold(window.scrollY < window.innerHeight);
    };

    restartInactivityTimer();
    updateFoldPosition();

    const activityEvents: (keyof WindowEventMap)[] = [
      "keydown",
      "mousedown",
      "mousemove",
      "pointerdown",
      "wheel",
    ];

    activityEvents.forEach((eventName) =>
      window.addEventListener(eventName, restartInactivityTimer, { passive: true }),
    );
    window.addEventListener("scroll", updateFoldPosition, { passive: true });
    window.addEventListener("resize", updateFoldPosition, { passive: true });

    return () => {
      clearTimeout(inactivityTimer);
      activityEvents.forEach((eventName) =>
        window.removeEventListener(eventName, restartInactivityTimer),
      );
      window.removeEventListener("scroll", updateFoldPosition);
      window.removeEventListener("resize", updateFoldPosition);
    };
  }, []);

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: MouseEvent) => {
      const el = containerRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      const maxShift = 3.5;
      const x = (dx / dist) * Math.min(dist / 55, 1) * maxShift;
      const y = (dy / dist) * Math.min(dist / 55, 1) * maxShift;
      el.style.setProperty("--eye-x", `${x.toFixed(2)}px`);
      el.style.setProperty("--eye-y", `${y.toFixed(2)}px`);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduce]);

  if (dismissed) return null;

  const visible = active && !(pathname === "/" && aboveFold);

  return (
    <motion.div
      ref={containerRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={false}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 12 }}
      transition={{ duration: reduce ? 0 : 0.2 }}
      aria-hidden={!visible}
      inert={!visible}
      className="fixed bottom-6 right-6 z-40 select-none"
      style={{ pointerEvents: visible ? "auto" : "none" }}
    >
      {/* Speech bubble - full anchor, clickable, shares the parent's hover zone
          so moving the cursor from the robot up into the bubble never drops
          the hover state (the old per-element onHoverStart/End caused that). */}
      <motion.a
        href="/about-contact#start"
        aria-label="Get a free quote"
        initial={false}
        animate={{
          opacity: hovered ? 1 : 0,
          y: hovered ? 0 : 8,
          scale: hovered ? 1 : 0.9,
          pointerEvents: hovered ? "auto" : "none",
        }}
        transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-full right-0 mb-3 block w-52 rounded-xl border border-accent/40 bg-surface px-4 py-3 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.5)] transition-colors hover:border-accent/70"
      >
        <p className="font-mono text-[12px] leading-snug text-text">
          Click me to get a{" "}
          <span className="inline-block whitespace-nowrap text-accent">
            custom quote {"->"}
          </span>
        </p>
        {/* Bubble tail */}
        <span
          aria-hidden
          className="absolute -bottom-[5px] right-5 h-2.5 w-2.5 rotate-45 border-b border-r border-accent/40 bg-surface"
        />
      </motion.a>

      {/* Robot - also a real link to the contact form, so clicking the robot itself
          (not just the bubble) takes the user to the contact form. */}
      <motion.a
        href="/about-contact#start"
        aria-label="Get a free quote"
        animate={reduce ? {} : { scale: hovered ? 1.07 : 1 }}
        transition={{ type: "spring", stiffness: 280, damping: 18 }}
        className="relative block cursor-pointer"
      >
        {/* Dismiss */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setDismissed(true);
          }}
          aria-label="Dismiss assistant"
          className={`absolute -right-2 -top-2 z-10 inline-flex h-6 w-6 items-center justify-center rounded-full border border-line bg-surface text-muted shadow transition-all hover:border-accent/50 hover:text-text ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <X size={11} strokeWidth={2.5} aria-hidden />
        </button>

        {/* SVG robot - h-24 w-20 (~96x80px) */}
        <svg
          viewBox="0 0 64 80"
          className="h-24 w-20 drop-shadow-[0_10px_24px_rgba(0,0,0,0.55)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Antenna */}
          <line x1="32" y1="4" x2="32" y2="12" stroke="var(--line)" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="32" cy="3" r="2.5" fill="var(--accent)" />

          {/* Head */}
          <rect x="12" y="12" width="40" height="28" rx="7"
            fill="var(--surface-2)" stroke="var(--accent)" strokeWidth="1.2" />

          {/* Inner head highlight */}
          <rect x="14" y="14" width="36" height="24" rx="5.5"
            fill="none" stroke="var(--line)" strokeWidth="0.6" opacity="0.5" />

          {/* Eye sockets */}
          <rect x="16" y="18" width="12" height="10" rx="3"
            fill="var(--bg)" stroke="var(--line)" strokeWidth="1" />
          <rect x="36" y="18" width="12" height="10" rx="3"
            fill="var(--bg)" stroke="var(--line)" strokeWidth="1" />

          {/* Pupils - mouse-tracking */}
          <circle cx="22" cy="23" r="3.2" fill="var(--accent)" style={{ transform: "translate(var(--eye-x, 0px), var(--eye-y, 0px))" }} />
          <circle cx="42" cy="23" r="3.2" fill="var(--accent)" style={{ transform: "translate(var(--eye-x, 0px), var(--eye-y, 0px))" }} />
          {/* Pupil glint */}
          <circle cx="23.5" cy="21.5" r="1" fill="white" opacity="0.55" style={{ transform: "translate(var(--eye-x, 0px), var(--eye-y, 0px))" }} />
          <circle cx="43.5" cy="21.5" r="1" fill="white" opacity="0.55" style={{ transform: "translate(var(--eye-x, 0px), var(--eye-y, 0px))" }} />

          {/* Mouth */}
          <path
            d={hovered ? "M22 34 Q32 40 42 34" : "M22 35 Q32 32 42 35"}
            stroke="var(--accent)"
            strokeWidth="1.6"
            strokeLinecap="round"
            fill="none"
          />

          {/* Neck */}
          <rect x="27" y="40" width="10" height="6" rx="2.5"
            fill="var(--surface-2)" stroke="var(--line)" strokeWidth="1" />

          {/* Body */}
          <rect x="12" y="46" width="40" height="28" rx="7"
            fill="var(--surface-2)" stroke="var(--accent)" strokeWidth="1.2" />

          {/* Body inner highlight */}
          <rect x="14" y="48" width="36" height="24" rx="5.5"
            fill="none" stroke="var(--line)" strokeWidth="0.6" opacity="0.5" />

          {/* Chest core */}
          <circle cx="32" cy="58" r="4.5" fill="var(--accent)" opacity="0.85" />
          <circle cx="32" cy="58" r="7" fill="none" stroke="var(--accent)"
            strokeWidth="0.8" opacity="0.3" />
          <circle cx="32" cy="58" r="10" fill="none" stroke="var(--accent)"
            strokeWidth="0.5" opacity="0.15" />

          {/* Vent lines */}
          <line x1="18" y1="67" x2="27" y2="67" stroke="var(--line)" strokeWidth="1" strokeLinecap="round" />
          <line x1="37" y1="67" x2="46" y2="67" stroke="var(--line)" strokeWidth="1" strokeLinecap="round" />
        </svg>
      </motion.a>
    </motion.div>
  );
}
