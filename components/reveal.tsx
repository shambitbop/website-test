import { createElement, ReactNode } from "react";

/**
 * Static wrapper. Keeping content server-rendered avoids shipping an animation
 * runtime for every below-the-fold section.
 */
export function Reveal({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section" | "header" | "span";
}) {
  return createElement(as, { className }, children);
}
