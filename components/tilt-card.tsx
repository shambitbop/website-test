import { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Lightweight card wrapper. CSS handles hover affordances without a
 * per-card animation runtime or pointer tracking.
 */
export function TiltCard({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  max?: number;
}) {
  return (
    <div id={id} className={cn("tilt-card", className)}>
      <div className="tilt-inner h-full">{children}</div>
    </div>
  );
}
