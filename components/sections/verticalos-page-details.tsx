import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Kicker, Section } from "../primitives";
import { DecryptText } from "../decrypt-text";
import { Reveal } from "../reveal";
import { TiltCard } from "../tilt-card";

const workflowStages = [
  { label: "Inquiry & customer context", body: "Capture the request, customer, project type, drawings, measurements, materials and required dates in one starting record." },
  { label: "Estimate & quote", body: "Build estimates from products, materials, labor, services and margin rules, then track revisions and customer decisions." },
  { label: "Approval & order", body: "Record approvals, deposits, documents, responsibilities and the exact scope moving into production or fulfillment." },
  { label: "Job & production tracking", body: "Give office, workshop and field teams a shared view of status, blockers, assigned work, notes, photos and next actions." },
  { label: "Inventory & materials", body: "Connect required materials, available stock, reservations, usage, purchasing and movement to the jobs that depend on them." },
  { label: "Delivery & field updates", body: "Coordinate scheduling, dispatch, installation, completion evidence, customer communication and issues from mobile devices." },
  { label: "Management visibility", body: "Turn operational records into dashboards, exceptions, workload views, delayed-job signals and AI-assisted summaries." },
] as const;

const intelligenceCards = [
  {
    problem: "Status is scattered.",
    body: "Quotes, job notes, stock updates, photos and customer messages live in different files, chats and systems.",
    solution: "One operational timeline.",
    response: "VerticalOS connects each customer, quote, order, job, material update and action around a shared record and clear status model.",
  },
  {
    problem: "Teams discover delays too late.",
    body: "Missing approvals, materials, measurements or field updates become visible only after schedules and customers are affected.",
    solution: "Exceptions surfaced earlier.",
    response: "Rules, alerts and dashboards highlight blocked work, overdue actions, inventory gaps and jobs that need human attention.",
  },
  {
    problem: "Reporting consumes the team.",
    body: "Managers rebuild the same spreadsheet reports and still cannot trust that the operational picture is current.",
    solution: "Live, source-grounded insight.",
    response: "Operational dashboards and governed AI summaries use connected records to explain workload, progress, delays and next actions.",
  },
] as const;

export function VerticalOsPageDetails() {
  return (
    <>
      <Section className="border-t border-line">
        <Container>
          <Reveal><Kicker>QUOTE TO DELIVERY</Kicker></Reveal>
          <DecryptText
            as="h2"
            text="One operating thread from customer request to completed job."
            accent="One"
            className="font-display mt-5 max-w-4xl text-[clamp(1.9rem,4.4vw,3rem)]"
          />
          <Reveal delay={0.05}>
            <p className="mt-6 max-w-3xl text-[clamp(1rem,1.4vw,1.12rem)] leading-relaxed text-muted">
              VerticalOS is being shaped around the real sequence of manufacturing, fabrication,
              materials and distribution work. Each module should strengthen the same connected
              workflow instead of becoming another isolated tool.
            </p>
          </Reveal>

          <div className="marquee-viewport mt-12">
            <div className="marquee-track gap-5" style={{ ["--marquee-duration" as string]: "54s" }}>
              {[...workflowStages, ...workflowStages].map((stage, index) => (
                <div key={`${stage.label}-${index}`} className="w-[calc(100vw-3rem)] max-w-[320px] shrink-0 rounded-xl border border-line bg-surface/60 p-5 sm:p-6">
                  <span className="font-mono text-[11px] text-accent">
                    {String((index % workflowStages.length) + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display mt-3 text-lg text-text">{stage.label}</h3>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-muted">{stage.body}</p>
                </div>
              ))}
            </div>
          </div>

          <Reveal delay={0.1}>
            <Link href="/about-contact#start" data-simple-contact="Map My Quote-to-Delivery Workflow" className="group mt-8 inline-flex items-center gap-2 rounded-full border border-accent/35 bg-accent/[0.07] px-5 py-2.5 font-mono text-[13px] text-text transition-colors hover:border-accent/65">
              Map My Quote-to-Delivery Workflow
              <ArrowRight size={15} className="text-accent transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
          </Reveal>
        </Container>
      </Section>

      <Section className="border-t border-line">
        <Container>
          <Reveal><Kicker>OPERATING INTELLIGENCE</Kicker></Reveal>
          <DecryptText
            as="h2"
            text="Visibility that helps the operation move, not just report."
            accent="Visibility"
            className="font-display mt-5 max-w-4xl text-[clamp(1.9rem,4.4vw,3rem)]"
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {intelligenceCards.map((item, index) => (
              <Reveal key={item.problem} delay={index * 0.07} className="h-full">
                <TiltCard className="h-full">
                  <div className="card group h-full overflow-hidden rounded-xl p-6">
                    <span className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />
                    <span className="font-mono text-[11px] text-accent">{String(index + 1).padStart(2, "0")}</span>
                    <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">Operational friction</p>
                    <h3 className="font-display mt-2 text-xl text-text">{item.problem}</h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-muted">{item.body}</p>
                    <div className="mt-6 border-t border-accent/20 pt-5">
                      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">Connected response</p>
                      <h4 className="font-display mt-2 text-lg text-text">{item.solution}</h4>
                      <p className="mt-3 text-[14px] leading-relaxed text-muted">{item.response}</p>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
