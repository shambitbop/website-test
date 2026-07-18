import { Reveal } from "../reveal";
import { cn } from "@/lib/utils";

export type FaqEntry = {
  question: string;
  answer: string;
};

export function FaqAccordion({
  items,
  className,
  showVisual = true,
  visualClassName,
}: {
  items: FaqEntry[];
  className?: string;
  showVisual?: boolean;
  visualClassName?: string;
}) {
  return (
    <div
      className={cn(
        showVisual
          ? "grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px] xl:grid-cols-[minmax(0,1fr)_320px]"
          : "max-w-4xl",
        className
      )}
    >
      <div className="space-y-3">
        {items.map((item, i) => (
          <Reveal key={item.question} delay={(i % 4) * 0.04}>
            <details className="group overflow-hidden rounded-xl border border-line bg-surface/40 transition-colors open:border-accent/30 open:bg-surface/70">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-4 marker:content-none sm:px-6 [&::-webkit-details-marker]:hidden">
                <h3 className="font-mono text-[13px] leading-relaxed text-text">
                  {item.question}
                </h3>
                <span
                  aria-hidden
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line bg-surface-2 font-mono text-[16px] text-accent transition-all duration-300 group-open:rotate-45 group-open:border-accent/50 group-open:bg-accent/[0.08]"
                >
                  +
                </span>
              </summary>
              <div className="border-t border-line px-5 py-4 sm:px-6">
                <p className="max-w-3xl text-[14px] leading-relaxed text-muted">{item.answer}</p>
              </div>
            </details>
          </Reveal>
        ))}
      </div>

      {showVisual && (
        <Reveal delay={0.12} className="hidden lg:block">
          <div
            aria-hidden
            className={cn(
              "faq-question-field sticky top-28 h-[520px] overflow-hidden rounded-3xl border border-line bg-surface/25",
              visualClassName
            )}
          >
            <span className="faq-question faq-question-main">?</span>
            <span className="faq-question faq-question-one">?</span>
            <span className="faq-question faq-question-two">?</span>
            <span className="faq-question faq-question-three">?</span>
            <span className="faq-question faq-question-four">?</span>
            <span className="faq-question-ring" />
            <span className="faq-question-ring faq-question-ring-small" />
          </div>
        </Reveal>
      )}
    </div>
  );
}
