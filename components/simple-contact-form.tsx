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
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const normalizeRepeatedFragment = () => {
      const hash = window.location.hash;
      if (!hash.includes("#", 1)) return;

      const fragments = hash.slice(1).split("#").filter(Boolean);
      if (fragments.length < 2 || !fragments.every((fragment) => fragment === fragments[0])) {
        return;
      }

      window.history.replaceState(
        window.history.state,
        "",
        `${window.location.pathname}${window.location.search}#${fragments[0]}`,
      );
    };

    const handleClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target as HTMLElement | null;
      const trigger = target?.closest<HTMLElement>("[data-simple-contact]");
      if (!trigger) return;

      // Run in the capture phase so Next.js Link cannot begin a route change
      // before this modal-only interaction cancels the navigation.
      event.preventDefault();
      setSubmitted(false);
      setOpen(true);
    };

    normalizeRepeatedFragment();
    document.addEventListener("click", handleClick, true);
    window.addEventListener("hashchange", normalizeRepeatedFragment);
    window.addEventListener("popstate", normalizeRepeatedFragment);

    return () => {
      document.removeEventListener("click", handleClick, true);
      window.removeEventListener("hashchange", normalizeRepeatedFragment);
      window.removeEventListener("popstate", normalizeRepeatedFragment);
    };
  }, []);

  return (
    <>
      {children}
      <Modal open={open} onClose={() => setOpen(false)} labelledBy={titleId} headerLabel="decrypt - instant project estimate">
        {!submitted && (
          <div className="border-b border-line px-5 py-5 sm:px-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">Instant estimate</p>
            <h2 id={titleId} className="font-display mt-2 text-2xl text-text sm:text-3xl">Build your project quote.</h2>
            <p className="mt-2 text-[13px] leading-relaxed text-muted">Select what you need to see a live starting estimate, then send the details for review.</p>
          </div>
        )}
        {submitted && <h2 id={titleId} className="sr-only">Project quote confirmation</h2>}
        <Suspense fallback={<div className="p-8 font-mono text-[12px] text-muted">Loading estimator...</div>}>
          <DetailedQuoteForm modal onSubmitted={() => setSubmitted(true)} />
        </Suspense>
      </Modal>
    </>
  );
}
