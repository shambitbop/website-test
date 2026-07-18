import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Kicker, Section } from "../primitives";
import { Reveal } from "../reveal";

export function HomeCta() {
  return (
    <Section className="border-t border-line">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-accent/30 bg-accent/[0.055] p-7 sm:p-10 lg:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
            />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <Kicker>BUILD WITH DECRYPT</Kicker>
                <h2 className="font-display mt-5 max-w-4xl text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.03] text-text">
                  Need a website, mobile app, or custom software?
                </h2>
                <p className="mt-5 max-w-2xl text-[clamp(1rem,1.4vw,1.12rem)] leading-relaxed text-muted">
                  Tell us what you want to build and what problem it should solve. We will help
                  you choose the right approach, define the scope, and plan the development.
                </p>
              </div>
              <Link
                href="/about-contact#start"
                data-simple-contact="Discuss My Software Project"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 font-mono text-[14px] font-medium text-bg transition-[filter] hover:brightness-110"
              >
                Discuss My Software Project
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
