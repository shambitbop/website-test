import Link from "next/link";
import { Container, Kicker, Section } from "./primitives";
import { DecryptText } from "./decrypt-text";
import { Reveal } from "./reveal";
import { TiltCard } from "./tilt-card";
import { SiteNav } from "./site-nav";
import { SiteFooter } from "./site-footer";
import type { ServicePage } from "@/lib/content";
import { getCtaCategory } from "@/lib/cta-audit";

export function ContentPage({ page }: { page: ServicePage }) {
  return (
    <>
      <SiteNav />
      <main>
        <section className="relative overflow-hidden pt-28 pb-[clamp(4rem,10vw,7rem)] md:pt-32">
          <Container>
            <Reveal>
              <Kicker>{page.kicker}</Kicker>
            </Reveal>
            <DecryptText
              as="h1"
              text={page.title}
              accent={page.title.split(" ")[0] ?? "Decrypt"}
              trigger="load"
              className="font-display mt-6 max-w-5xl text-[clamp(2.4rem,6vw,5rem)]"
              options={{ speed: 18, stepPerChar: 0.8 }}
            />
            <Reveal delay={0.08}>
              <p className="mt-7 max-w-3xl text-[clamp(1rem,1.5vw,1.18rem)] leading-relaxed text-muted">
                {page.description}
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/about-contact#start"
                  data-simple-contact={getCtaCategory(page.primaryCta) === "quick-form" ? page.primaryCta : undefined}
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-[14px] font-medium text-bg transition-[filter] duration-300 hover:brightness-110"
                >
                  {page.primaryCta}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {"->"}
                  </span>
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-mono text-[14px] text-text transition-colors hover:border-accent/50 hover:bg-surface"
                >
                  {page.secondaryCta}
                </Link>
              </div>
            </Reveal>
          </Container>
        </section>

        {page.sections.map((section) => (
          <Section key={section.title} className="border-t border-line">
            <Container>
              <Reveal>
                <Kicker>DETAILS</Kicker>
              </Reveal>
              <DecryptText
                as="h2"
                text={section.title}
                accent={section.title.split(" ")[0] ?? "Details"}
                className="font-display mt-5 max-w-3xl text-[clamp(1.9rem,4.4vw,3rem)]"
              />
              <Reveal delay={0.05}>
                <p className="mt-6 max-w-3xl text-[clamp(1rem,1.4vw,1.12rem)] leading-relaxed text-muted">
                  {section.body}
                </p>
              </Reveal>
              <div className="mt-12 grid gap-5 md:grid-cols-3">
                {section.items.map((item, i) => (
                  <Reveal key={item.label} delay={i * 0.06}>
                    <TiltCard className="h-full">
                      <div className="card h-full rounded-xl p-6">
                        <h3 className="font-display text-xl text-text">{item.label}</h3>
                        <p className="mt-3 text-[14.5px] leading-relaxed text-muted">
                          {item.body}
                        </p>
                      </div>
                    </TiltCard>
                  </Reveal>
                ))}
              </div>
            </Container>
          </Section>
        ))}
      </main>
      <SiteFooter />
    </>
  );
}
