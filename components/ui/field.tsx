import { cn } from "@/lib/utils";
import {
  forwardRef,
  type InputHTMLAttributes,
  type LabelHTMLAttributes,
  type TextareaHTMLAttributes,
} from "react";

export function FieldLabel({
  className,
  children,
  required = false,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement> & { required?: boolean }) {
  return (
    <label
      className={cn(
        "mb-2 block font-mono text-[12px] uppercase tracking-[0.16em] text-muted",
        className
      )}
      {...props}
    >
      {children}
      {required && <RequiredMark />}
    </label>
  );
}

export function RequiredMark() {
  return (
    <>
      <span aria-hidden="true" className="ml-1 text-accent">
        *
      </span>
      <span className="sr-only"> (required)</span>
    </>
  );
}

const base =
  "w-full rounded-md border bg-surface px-4 py-3 text-[16px] text-text placeholder:text-muted/60 transition-colors outline-none focus:border-accent/60 focus:bg-surface-2 sm:text-[15px]";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement> & { invalid?: boolean }>(
  ({ className, invalid, ...props }, ref) => (
    <input
      ref={ref}
      data-cursor="text"
      className={cn(base, invalid ? "border-[#ff6b6b]/60" : "border-line", className)}
      {...props}
    />
  )
);
Input.displayName = "Input";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement> & { invalid?: boolean }
>(({ className, invalid, ...props }, ref) => (
  <textarea
    ref={ref}
    data-cursor="text"
    className={cn(
      base,
      "min-h-[120px] resize-none leading-relaxed [field-sizing:content]",
      invalid ? "border-[#ff6b6b]/60" : "border-line",
      className
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";

export function FieldError({ children }: { children?: string }) {
  if (!children) return null;
  return (
    <p className="mt-2 font-mono text-[12px] text-[#ff8585]" role="alert">
      {children}
    </p>
  );
}

export function Chip({
  active,
  children,
  ...props
}: InputHTMLAttributes<HTMLButtonElement> & { active?: boolean }) {
  return (
    <button
      type="button"
      data-cursor="lock"
      aria-pressed={active}
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-full border px-3.5 py-2 text-center font-mono text-[13px] leading-snug transition-all duration-200",
        active
          ? "border-accent bg-accent/10 text-accent"
          : "border-line bg-surface text-muted hover:border-muted/50 hover:text-text"
      )}
      {...(props as object)}
    >
      {children}
    </button>
  );
}
