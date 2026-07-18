"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function scrollPageToTop() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
}

export function BackToTop() {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 520);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollPageToTop}
          aria-label="Back to top"
          title="Back to top"
          initial={{ opacity: 0, y: 8, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.9 }}
          whileHover={reduceMotion ? undefined : { y: -2 }}
          transition={{ duration: reduceMotion ? 0 : 0.2 }}
          className="group fixed bottom-5 left-5 z-40 inline-flex h-9 w-9 items-center justify-center rounded-full border border-accent/40 bg-surface/90 text-accent shadow-[0_10px_30px_-12px_rgba(0,0,0,0.8)] backdrop-blur-md transition-colors hover:border-accent hover:bg-accent hover:text-bg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:bottom-6 sm:left-6"
        >
          <ArrowUp
            size={15}
            strokeWidth={2.2}
            className={reduceMotion ? undefined : "transition-transform duration-200 group-hover:-translate-y-0.5"}
            aria-hidden
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
