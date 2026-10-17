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
      </Container>
    </Section>
  );
}
