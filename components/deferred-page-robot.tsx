"use client";

import { lazy, Suspense, useEffect, useState } from "react";

const PageRobot = lazy(() =>
  import("./page-robot").then((module) => ({ default: module.PageRobot })),
);

/** Keep this decorative widget out of the initial hydration and input window. */
export function DeferredPageRobot() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const reveal = () => setReady(true);
    const timer = window.setTimeout(reveal, 5000);
    window.addEventListener("pointerdown", reveal, { once: true, passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("pointerdown", reveal);
    };
  }, []);

  return ready ? (
    <Suspense fallback={null}>
      <PageRobot />
    </Suspense>
  ) : null;
}
