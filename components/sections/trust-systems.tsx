import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Container, Kicker, Section } from "../primitives";
import { DecryptText } from "../decrypt-text";
import { Reveal } from "../reveal";
import { TiltCard } from "../tilt-card";

const industries = [
  {
    slug: "manufacturing-fabrication-materials",
    label: "Manufacturing & fabrication",
    body: "Connect quoting, jobs, production status, inventory, approvals, mobile updates and operational dashboards around the way work moves on the floor.",
  },
  {
    slug: "construction-materials-stone-distribution",
    label: "Construction materials & distribution",
    body: "Structure quote-to-order workflows, stock visibility, delivery coordination, customer records and field reporting in one dependable system.",
  },
  {
    slug: "saas-technology-companies",
    label: "SaaS & product teams",
    body: "Build web and mobile products, admin tools, AI features, QA workflows, release systems and measurable growth operations without fragmented delivery.",
  },
  {
    slug: "language-services-professional-services",
    label: "Professional & language services",
    body: "Connect client intake, documents, project delivery, approvals, portals, automation and knowledge workflows from first request to final handoff.",
  },
  {
    slug: "education-training-lms-businesses",
    label: "Education & LMS businesses",
    body: "Improve learning platforms, content operations, learner communication, reporting, email workflows and support systems for a smoother experience.",
  },
  {
    slug: "healthcare-clinics-dental-practices",
    label: "Healthcare clinics",
    body: "Create clearer patient journeys, booking pathways, reliable websites, communication workflows and secure operational foundations.",
  },
  {
    slug: "ecommerce-marketplace-brands",
    label: "Ecommerce & marketplace brands",
    body: "Connect storefront content, lead capture, analytics, CRM workflows, campaign operations and ongoing maintenance around commercial goals.",
  },
  {
    slug: "logistics-real-estate-field-operations",
    label: "Logistics & field operations",
    body: "Coordinate scheduling, mobile updates, documents, customer records, approvals, dashboards and real-time status visibility across teams.",
  },
  {
    slug: "finance-productivity-utility-apps",
    label: "Finance & productivity products",
    body: "Design secure data flows, account systems, dashboards, APIs, mobile workflows and focused tools that make complex work easier to manage.",
  },
];

const outcomes = [
  { label: "Workflow speed", body: "Approval time, document processing time, support response time, handoff time and task completion time." },
  { label: "Productivity", body: "Hours saved per week, manual steps removed, automated tasks completed and issues resolved per hour." },
  { label: "Accuracy and quality", body: "Error rate, rework rate, AI answer acceptance rate, escalation rate and human correction rate." },
  { label: "Customer experience", body: "Chatbot resolution rate, voicebot completion rate, form completion rate, response time, lead qualification rate and booking rate." },
  { label: "Operations visibility", body: "Dashboard usage, report refresh time, KPI visibility, manager review time and data completeness." },
  { label: "AI governance", body: "Human review rate, audit log completeness, permission accuracy, source coverage and flagged-risk outputs." },
];

export function AiGovernancePanel({ showCta = true }: { showCta?: boolean }) {
  return (
    <Section className="border-t border-line">
      <Container>
        <div className="overflow-hidden rounded-3xl border border-accent/25 bg-accent/[0.055] p-6 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[auto_1fr_auto] lg:items-center">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/35 bg-bg/60 text-accent">
              <ShieldCheck size={26} strokeWidth={1.8} aria-hidden />
            </div>
            <div>
              <Kicker>AI GOVERNANCE</Kicker>
              <h2 className="font-display mt-4 max-w-3xl text-[clamp(1.8rem,4vw,2.8rem)]">
                AI gets stronger when it is governed.
              </h2>
              <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-muted">
                Decrypt designs AI systems with approved sources, role-based access, human
                approval, confidence thresholds, escalation rules, audit logs, test cases,
                monitoring and documentation.
              </p>
            </div>
            {showCta && (
              <Link
                href="/about-contact#start"
                data-simple-contact="Review My AI Workflow"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-accent bg-accent px-6 py-3.5 font-mono text-[14px] font-semibold text-bg shadow-[0_12px_34px_-14px_var(--accent)] transition-[filter,box-shadow] hover:brightness-110 hover:shadow-[0_14px_38px_-12px_var(--accent)]"
              >
                Review My AI Workflow
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function TrustSystems({ showGovernance = true }: { showGovernance?: boolean }) {
  return (
    <>
      <Section id="industries" className="border-t border-line">
        <Container>
          <Reveal>
            <Kicker>INDUSTRIES</Kicker>
          </Reveal>
          <DecryptText
            as="h2"
            text="Built for industries where workflows, data and decisions must stay connected."
            accent="connected"
            className="font-display mt-5 max-w-3xl text-[clamp(1.9rem,4.4vw,3rem)]"
          />
          <Reveal delay={0.05}>
            <p className="mt-6 max-w-3xl text-[clamp(1rem,1.4vw,1.12rem)] leading-relaxed text-muted">
              Decrypt works with operations-heavy and service businesses that have outgrown
              scattered tools. We shape software, automation, AI and digital operations around
              how each industry actually works.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 max-w-3xl text-[14.5px] leading-relaxed text-muted">
              Security is built into new systems and can be strengthened in existing websites,
              apps, APIs and business platforms through access control, system hardening,
              security patching, safer configuration, logging and monitoring. This work helps
              reduce exposure to malware, unauthorized access and common web attacks.
            </p>
          </Reveal>
          <div className="marquee-viewport mt-12">
            <div className="marquee-track gap-5" style={{ ["--marquee-duration" as string]: "58s" }}>
              {[...industries, ...industries].map((item, i) => (
                <Link
                  key={`${item.label}-${i}`}
                  href={`/industries-technology?industry=${item.slug}&source=home`}
                  className="group flex w-[calc(100vw-3rem)] max-w-[320px] shrink-0 flex-col rounded-xl border border-line bg-surface/50 p-5 transition-colors hover:border-accent/45 sm:p-6"
                >
                  <h3 className="font-mono text-[13px] text-text">{item.label}</h3>
                  <p className="mt-3 flex-1 text-[14px] leading-relaxed text-muted">{item.body}</p>
                  <span className="mt-5 inline-flex items-center gap-2 font-mono text-[12px] text-accent">
                    Explore industry system
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                      aria-hidden
                    />
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <Reveal delay={0.1}>
            <Link
              href="/industries-technology"
              className="group mt-8 inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-5 py-2.5 font-mono text-[13px] text-text transition-colors hover:border-accent/50"
            >
              Explore Industries & Technology
              <span className="text-accent transition-transform duration-300 group-hover:translate-x-0.5">
                {"->"}
              </span>
            </Link>
          </Reveal>
        </Container>
      </Section>

      <Section className="border-t border-line">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <Reveal>
                <Kicker>MEASURED OUTCOMES</Kicker>
              </Reveal>
              <DecryptText
                as="h2"
                text="We measure AI by business outcomes, not hype."
                accent="outcomes"
                className="font-display mt-5 text-[clamp(1.9rem,4.4vw,3rem)]"
              />
              <Reveal delay={0.05}>
                <p className="mt-6 text-[clamp(1rem,1.4vw,1.12rem)] leading-relaxed text-muted">
                  Every AI system should answer a practical question: what gets faster, clearer,
                  safer, cheaper or easier after implementation?
                </p>
              </Reveal>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {outcomes.map((item, i) => (
                <Reveal key={item.label} delay={i * 0.04}>
                  <TiltCard className="h-full" max={5}>
                    <div className="card h-full rounded-xl p-5">
                      <h3 className="font-display text-lg text-text">{item.label}</h3>
                      <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{item.body}</p>
                    </div>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {showGovernance && <AiGovernancePanel />}
    </>
  );
}
