import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Kicker } from "./primitives";
import { DecryptText } from "./decrypt-text";
import { Reveal } from "./reveal";
import { Hero3DScene } from "./ui/hero-3d-scene";
import { getCtaCategory, getCtaHref } from "@/lib/cta-audit";

export function PageHero({
  kicker,
  title,
  body,
  ctas,
  visual = "signal",
}: {
  kicker: string;
  title: string;
  body: string;
  ctas: { label: string; href: string }[];
  visual?: "case-studies" | "pricing" | "about" | "signal";
}) {
  return (
    <section className="relative overflow-hidden pt-24 pb-12 md:pt-28 md:pb-16">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.72fr]">
          <div>
            <Reveal>
              <Kicker>{kicker}</Kicker>
            </Reveal>
            <DecryptText
              as="h1"
              text={title}
              accent={title.split(" ")[0] ?? "Decrypt"}
              trigger="load"
              className="font-display mt-4 max-w-4xl text-[clamp(2rem,4.4vw,3.65rem)]"
            />
            <Reveal delay={0.08}>
              <p className="mt-4 max-w-2xl text-[clamp(0.88rem,1.05vw,0.98rem)] leading-[1.65] text-muted">
                {body}
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="mt-5 grid max-w-2xl grid-cols-1 gap-2.5 sm:grid-cols-2">
                {ctas.slice(0, 2).map((cta, i) => (
                  <Link
                    key={cta.label}
                    href={getCtaHref(cta.label, cta.href)}
                    data-simple-contact={getCtaCategory(cta.label) === "quick-form" ? cta.label : undefined}
                    className={
                      i === 0
                        ? "group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 text-center font-mono text-[12px] font-medium leading-snug text-bg transition-[filter] hover:brightness-110 sm:px-5 sm:text-[13px] xl:px-6 xl:text-[14px]"
                        : "group inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-line bg-surface/80 px-4 py-3 text-center font-mono text-[12px] leading-snug text-text transition-colors hover:border-accent/50 sm:px-5 sm:text-[13px] xl:px-6 xl:text-[14px]"
                    }
                  >
                    {cta.label}
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                      aria-hidden
                    />
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div>
              <Hero3DScene variant={visual} caption={body} />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
