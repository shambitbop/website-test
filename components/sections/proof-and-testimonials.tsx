import { MessageSquareQuote } from "lucide-react";
import { CASE_STUDIES, INDUSTRIES, PROCESS_STEPS, TECHNOLOGY_AREAS } from "@/lib/content";
import { Container, Kicker, Section } from "../primitives";

const FACTS = [
  {
    value: `${CASE_STUDIES.length}`,
    label: "documented case studies",
    detail: "Across business systems, apps, automation, websites, and digital operations.",
  },
  {
    value: `${INDUSTRIES.length}`,
    label: "industry contexts",
    detail: "From manufacturing and SaaS to healthcare, education, and professional services.",
  },
  {
    value: `${PROCESS_STEPS.length}`,
    label: "delivery stages",
    detail: "A clear path from discovery and scope through build, testing, and improvement.",
  },
  {
    value: `${TECHNOLOGY_AREAS.length}`,
    label: "capability areas",
    detail: "Software, AI, automation, Microsoft 365, QA, security, and managed support.",
  },
] as const;

const PROJECT_REFLECTIONS = CASE_STUDIES.slice(0, 3);

export function ProofAndTestimonials() {
  return (
    <Section className="border-y border-line">
      <Container>
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Kicker>PROOF IN NUMBERS</Kicker>
            <h2 className="font-display mt-5 max-w-3xl text-[clamp(2rem,4.5vw,3.4rem)] leading-tight">
              Practical experience, made <span className="text-accent">visible.</span>
            </h2>
          </div>
          <p className="max-w-xl text-[15px] leading-relaxed text-muted">
            These figures are calculated from the projects, industries, delivery process, and
            capabilities documented on this website.
          </p>
        </div>

        <dl className="mt-10 grid overflow-hidden rounded-2xl border border-line bg-surface/35 sm:grid-cols-2 lg:grid-cols-4">
          {FACTS.map((fact) => (
            <div
              key={fact.label}
              className="border-b border-line p-6 last:border-b-0 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0"
            >
              <dd className="font-display text-[clamp(2.8rem,6vw,4.5rem)] leading-none text-accent">
                {fact.value}
              </dd>
              <dt className="mt-3 font-mono text-[12px] uppercase tracking-[0.14em] text-text">
                {fact.label}
              </dt>
              <p className="mt-3 text-[13px] leading-relaxed text-muted">{fact.detail}</p>
            </div>
          ))}
        </dl>

        <div className="mt-20">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Kicker>TESTIMONIALS</Kicker>
              <h2 className="font-display mt-5 text-[clamp(1.9rem,4vw,3rem)]">
                Reflections from delivered work.
              </h2>
            </div>
            <p className="max-w-xl text-[13px] leading-relaxed text-muted">
              These project reflections are draft summaries, not verified client quotations.
              Client-approved testimonials will replace them after written approval.
            </p>
          </div>

          <div className="mt-9 grid gap-5 lg:grid-cols-3">
            {PROJECT_REFLECTIONS.map((study) => (
              <article
                key={study.slug}
                className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/45 p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <MessageSquareQuote size={25} strokeWidth={1.6} className="text-accent" aria-hidden />
                  <span className="rounded-full border border-[#f0b35a]/30 bg-[#f0b35a]/[0.07] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-[#f0b35a]">
                    Approval pending
                  </span>
                </div>
                <blockquote className="mt-6 flex-1 text-[15px] leading-relaxed text-text">
                  &ldquo;{study.reflection}&rdquo;
                </blockquote>
                <footer className="mt-7 border-t border-line pt-4">
                  <p className="font-display text-lg text-text">{study.client}</p>
                  <p className="mt-1 text-[12.5px] leading-relaxed text-muted">{study.industry}</p>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
