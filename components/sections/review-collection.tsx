import Link from "next/link";
import { ArrowRight, MessageSquareQuote } from "lucide-react";
import { Container, Kicker, Section } from "../primitives";
import { Reveal } from "../reveal";

export function ReviewCollection() {
  return (
    <Section className="border-t border-line">
      <Container>
        <div className="grid gap-8 overflow-hidden rounded-3xl border border-line bg-surface/50 p-6 sm:p-10 lg:grid-cols-[auto_1fr_auto] lg:items-center">
          <Reveal>
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/35 bg-accent/[0.06] text-accent">
              <MessageSquareQuote size={26} strokeWidth={1.8} aria-hidden />
            </div>
          </Reveal>
          <div>
            <Kicker>REVIEW COLLECTION</Kicker>
            <h2 className="font-display mt-4 max-w-3xl text-[clamp(1.8rem,4vw,2.8rem)]">
              Worked with Decrypt before?
            </h2>
            <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-muted">
              Share your experience and help other teams understand what it feels like to move
              from scattered workflows to structured digital systems.
            </p>
          </div>
          <div className="lg:justify-self-end">
            <Link
              href="/about-contact#start"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-accent bg-accent px-6 py-3.5 font-mono text-[13px] font-semibold text-bg shadow-[0_12px_34px_-14px_var(--accent)] transition-[filter,box-shadow] hover:brightness-110 hover:shadow-[0_14px_38px_-12px_var(--accent)]"
            >
              Share Your Experience
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
