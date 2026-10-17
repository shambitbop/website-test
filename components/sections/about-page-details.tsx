import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Container, Kicker, Section } from "../primitives";
import { DecryptText } from "../decrypt-text";
import { Reveal } from "../reveal";
import { TiltCard } from "../tilt-card";

const offers = [
  { title: "Decrypt Studio", body: "Custom software, web and mobile apps, AI systems, dashboards, internal tools, websites, QA, CI/CD and long-term product support.", href: "/studio", cta: "Explore Custom Software" },
  { title: "Decrypt Automations", body: "Microsoft 365, SharePoint, Power Automate, document workflows, RAG systems, chatbots, voice agents and managed automation support.", href: "/automations", cta: "Explore Automation" },
  { title: "VerticalOS", body: "A design-partner roadmap for quote-to-order, job tracking, inventory, mobile field updates and AI visibility in operations-heavy industries.", href: "/verticalos", cta: "Explore VerticalOS" },
] as const;

const capabilities = [
  "Workflow discovery and product strategy",
  "Custom software and internal tools",
  "Web and mobile application development",
  "AI assistants, RAG and document intelligence",
  "Microsoft 365 and SharePoint automation",
  "Dashboards, ERP and CRM integrations",
  "Websites, WordPress and content systems",
  "QA, CI/CD, monitoring and managed support",
] as const;

const expectations = [
  { label: "Business context before code", body: "We learn the users, workflow, data, constraints and outcome before recommending a platform or architecture." },
  { label: "Clear scope and decisions", body: "Requirements, assumptions, responsibilities, integrations and success measures are made visible before delivery expands." },
  { label: "Human review where it matters", body: "Important AI outputs, approvals and exceptions keep appropriate permission checks, escalation paths and human control." },
  { label: "A system that can keep improving", body: "Documentation, QA, release practices, monitoring and support are planned as part of the working system." },
] as const;

export function AboutPageDetails() {
  return (
    <>
      <Section className="border-t border-line">
        <Container>
          <Reveal><Kicker>HOW WE CAN HELP</Kicker></Reveal>
          <DecryptText
            as="h2"
            text="Three focused paths into one connected delivery team."
            accent="Three"
            className="font-display mt-5 max-w-4xl text-[clamp(1.9rem,4.4vw,3rem)]"
          />
          <Reveal delay={0.05}>
            <p className="mt-6 max-w-3xl text-[clamp(1rem,1.4vw,1.12rem)] leading-relaxed text-muted">
              Start with a software build, an automation opportunity or an industry workflow.
              Decrypt connects strategy, design, engineering, AI, integrations, QA and support
              around the outcome the business needs.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {offers.map((offer, index) => (
              <Reveal key={offer.title} delay={index * 0.07} className="h-full">
                <TiltCard className="h-full">
                  <Link href={offer.href} className="card group flex h-full flex-col overflow-hidden rounded-xl p-6">
                    <span className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />
                    <span className="font-mono text-[11px] text-accent">0{index + 1}</span>
                    <h3 className="font-display mt-4 text-xl text-text">{offer.title}</h3>
                    <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-muted">{offer.body}</p>
                    <span className="mt-6 inline-flex items-center gap-2 font-mono text-[12px] text-accent">
                      {offer.cta}
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden />
                    </span>
                  </Link>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-t border-line">
        <Container>
          <Reveal><Kicker>CONNECTED CAPABILITIES</Kicker></Reveal>
          <DecryptText
            as="h2"
            text="The disciplines needed to move from unclear idea to supported system."
            accent="supported"
            className="font-display mt-5 max-w-4xl text-[clamp(1.9rem,4.4vw,3rem)]"
          />
          <div className="marquee-viewport mt-12">
            <div className="marquee-track gap-4" style={{ ["--marquee-duration" as string]: "42s" }}>
              {[...capabilities, ...capabilities].map((capability, index) => (
                <div key={`${capability}-${index}`} className="flex w-[calc(100vw-3rem)] max-w-[285px] shrink-0 items-center gap-3 rounded-xl border border-line bg-surface/55 p-5">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-bg">
                    <Check size={14} strokeWidth={3} aria-hidden />
                  </span>
                  <p className="text-[13.5px] leading-relaxed text-text">{capability}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-line">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <Reveal><Kicker>WHAT WORKING TOGETHER MEANS</Kicker></Reveal>
              <DecryptText
                as="h2"
                text="Clear thinking, accountable delivery and support after launch."
                accent="accountable"
                className="font-display mt-5 text-[clamp(1.9rem,4.4vw,3rem)]"
              />
              <Reveal delay={0.06}>
                <p className="mt-6 text-[15px] leading-relaxed text-muted">
                  We work best with teams that value honest scoping, practical decisions,
                  visible progress and systems designed for real users rather than presentation alone.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <Link
                  href="/about-contact#start"
                  data-simple-contact="Start a Conversation"
                  className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-accent bg-accent px-6 py-3 font-mono text-[13px] font-semibold text-bg shadow-[0_12px_34px_-14px_var(--accent)] transition-[filter,box-shadow] hover:brightness-110 hover:shadow-[0_14px_38px_-12px_var(--accent)]"
                >
                  Start a Conversation
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </Link>
              </Reveal>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {expectations.map((item, index) => (
                <Reveal key={item.label} delay={index * 0.05}>
                  <div className="card h-full rounded-xl p-5">
                    <span className="font-mono text-[10px] text-accent">0{index + 1}</span>
                    <h3 className="font-display mt-3 text-lg text-text">{item.label}</h3>
                    <p className="mt-3 text-[13.5px] leading-relaxed text-muted">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
