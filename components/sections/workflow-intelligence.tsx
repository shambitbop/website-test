import { Container, Kicker, Section } from "../primitives";
import { DecryptText } from "../decrypt-text";
import { Reveal } from "../reveal";
import { TiltCard } from "../tilt-card";

const WORKFLOW_TRANSFORMATIONS = [
  {
    problem: {
      label: "Disconnected systems.",
      body: "Approvals live in email. Reports live in spreadsheets. Documents sit in folders. Customer and operational data is scattered across tools that do not communicate.",
    },
    response: {
      label: "One connected workflow.",
      body: "We connect your tools, organize the right information, and create a clear flow from request to action—so your team spends less time searching, copying, and following up.",
    },
  },
  {
    problem: {
      label: "Too much manual work.",
      body: "Repeated data entry, approval chasing, copy-and-paste reporting, and slow handovers consume time and make important processes dependent on individual employees.",
    },
    response: {
      label: "Practical automation.",
      body: "We automate approvals, notifications, document routing, reporting, task creation, and other repeatable steps while keeping people in control of important decisions.",
    },
  },
  {
    problem: {
      label: "AI without a clear purpose.",
      body: "AI creates little value when it is disconnected from real data, users, permissions, and business processes—or when success cannot be measured.",
    },
    response: {
      label: "AI connected to real work.",
      body: "We apply AI to approved information and clearly defined workflows, with appropriate permissions, human review, monitoring, and measurable business outcomes.",
    },
  },
] as const;

export function WorkflowIntelligence() {
  return (
    <Section id="workflow-intelligence" className="border-t border-line">
      <Container>
        <Reveal>
          <Kicker>FROM FRICTION TO FLOW</Kicker>
        </Reveal>
        <DecryptText
          as="h2"
          text="Turn disconnected work into one clear, connected system."
          accent="connected"
          className="font-display mt-5 max-w-4xl text-[clamp(1.9rem,4.4vw,3rem)]"
        />
        <Reveal delay={0.05}>
          <p className="mt-7 max-w-3xl text-[clamp(1rem,1.4vw,1.12rem)] leading-relaxed text-muted">
            Most teams do not need more tools. They need a clearer way for work to move. We
            understand the workflow, connect the systems, automate repetitive steps, and use AI
            only where it improves speed, visibility, accuracy, or decision-making.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {WORKFLOW_TRANSFORMATIONS.map(({ problem, response }, i) => (
            <Reveal key={problem.label} delay={i * 0.08} className="h-full">
              <TiltCard className="h-full">
                <div className="card group h-full overflow-hidden rounded-xl p-7">
                  <span className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />

                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-xs text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="rounded-full border border-line bg-surface-2 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                      The problem
                    </span>
                  </div>
                  <h3 className="font-display mt-4 text-lg text-text">{problem.label}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-muted">{problem.body}</p>

                  <div className="mt-6 border-t border-accent/20 pt-5">
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                      How we solve it
                    </span>
                    <h4 className="font-display mt-3 text-lg text-text">{response.label}</h4>
                    <p className="mt-3 text-[14px] leading-relaxed text-muted">
                      {response.body}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12}>
          <p className="mx-auto mt-10 max-w-4xl text-center font-display text-[clamp(1.05rem,1.8vw,1.35rem)] leading-relaxed text-text">
            <span className="text-accent">The result:</span> fewer manual steps, clearer
            visibility, faster decisions, and systems your team can actually control.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
