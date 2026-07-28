"use client";

import { lazy, Suspense, useEffect, useId, useState } from "react";
import { Modal } from "./ui/modal";

const DetailedQuoteForm = lazy(() =>
  import("./sections/contact-form").then((module) => ({ default: module.ContactForm })),
);

/** Global trigger provider: contact CTAs now open the detailed quote estimator. */
export function SimpleContactFormProvider({ children }: { children: React.ReactNode }) {
  const titleId = useId();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const trigger = target?.closest<HTMLElement>("[data-simple-contact]");
      if (!trigger) return;
      event.preventDefault();
      setOpen(true);
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      {children}
      <Modal open={open} onClose={() => setOpen(false)} labelledBy={titleId} headerLabel="decrypt - instant project estimate">
        <div className="border-b border-line px-5 py-5 sm:px-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">Instant estimate</p>
          <h2 id={titleId} className="font-display mt-2 text-2xl text-text sm:text-3xl">Build your project quote.</h2>
          <p className="mt-2 text-[13px] leading-relaxed text-muted">Select what you need to see a live starting estimate, then send the details for review.</p>
        </div>
        <Suspense fallback={<div className="p-8 font-mono text-[12px] text-muted">Loading estimator...</div>}>
          <DetailedQuoteForm modal />
        </Suspense>
      </Modal>
    </>
  );
}
