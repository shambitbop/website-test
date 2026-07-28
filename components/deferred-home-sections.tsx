"use client";

import { lazy, ReactNode, Suspense, useEffect, useRef, useState } from "react";

const DeferredCaseStudies = lazy(() =>
  import("./sections/case-studies").then((module) => ({ default: module.CaseStudies })),
);
const DeferredPricing = lazy(() =>
  import("./sections/pricing").then((module) => ({ default: module.Pricing })),
);
const DeferredContactForm = lazy(() =>
  import("./sections/inline-contact-form").then((module) => ({ default: module.InlineContactForm })),
);

function WhenNear({ children, minHeight }: { children: ReactNode; minHeight: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setReady(true);
        observer.disconnect();
      },
      { rootMargin: "900px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={ready ? undefined : { minHeight }}>
      {ready ? <Suspense fallback={null}>{children}</Suspense> : null}
    </div>
  );
}

export function DeferredHomeCaseStudies() {
  return (
    <WhenNear minHeight={700}>
      <DeferredCaseStudies linkCardsToPage />
    </WhenNear>
  );
}

export function DeferredHomePricing() {
  return (
    <WhenNear minHeight={760}>
      <DeferredPricing linkCardsToPage />
    </WhenNear>
  );
}

export function DeferredHomeContact() {
  return (
    <WhenNear minHeight={900}>
      <DeferredContactForm showAboutSummary />
    </WhenNear>
  );
}
