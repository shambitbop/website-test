import { Container, Kicker, Section } from "../primitives";
import { DecryptText } from "../decrypt-text";
import { Reveal } from "../reveal";
import { TiltCard } from "../tilt-card";
import { PILLARS } from "@/lib/content";

function GroupHeader({ name }: { name: string }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-muted">
        <span className="text-accent">-</span> {name}
      </span>
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}

export function WhatWeDo() {
  return (
    <Section id="what">
      <Container>
        <Reveal>
          <Kicker>WHAT WE DO</Kicker>
        </Reveal>
        <DecryptText
          as="h2"
          text="What Decrypt can build for you"
          accent="build"
          className="font-display mt-5 max-w-3xl text-[clamp(1.9rem,4.4vw,3rem)]"
        />
        <Reveal delay={0.05}>
          <p className="mt-6 max-w-2xl text-[clamp(1rem,1.4vw,1.12rem)] leading-relaxed text-muted">
            Choose the path that best fits your business. Each page explains the capabilities,
            delivery approach, and next steps in detail.
          </p>
        </Reveal>

        <div className="mt-14">
          <Reveal>
            <GroupHeader name="Three ways to work with Decrypt" />
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal key={p.label} delay={i * 0.06}>
                <TiltCard className="h-full" max={5}>
                  <a href={p.href} className="card group flex h-full flex-col rounded-xl p-6">
                    <h3 className="font-display text-xl text-text">{p.label}</h3>
                    <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-muted">
                      {p.body}
                    </p>
                    <span className="card-cta mt-5 inline-flex w-fit items-center gap-2 rounded-lg border border-accent/35 bg-accent/[0.08] px-3.5 py-2.5 font-mono text-[13px] font-medium text-accent transition-colors duration-300 group-hover:border-accent/65 group-hover:bg-accent/[0.12]">
                      {p.cta}
                      <span
                        aria-hidden
                        className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                      >
                        {"->"}
                      </span>
                    </span>
                  </a>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
