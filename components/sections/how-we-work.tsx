import { Container, Kicker, Section } from "../primitives";
import { DecryptText } from "../decrypt-text";
import { Reveal } from "../reveal";
import { WireframeCube } from "../wireframe-cube";
import { ProcessRoadmap } from "../ui/process-roadmap";
import { PROCESS_STEPS } from "@/lib/content";

export function HowWeWork() {
  return (
    <Section id="how">
      <Container>
        <div className="flex items-start justify-between gap-8">
          <div>
            <Reveal>
              <Kicker>HOW WE WORK</Kicker>
            </Reveal>
            <DecryptText
              as="h2"
              text="From messy workflow to governed system."
              accent="governed"
              className="font-display mt-5 max-w-2xl text-[clamp(1.9rem,4.4vw,3rem)]"
            />
            <Reveal delay={0.05}>
              <p className="mt-5 max-w-xl text-[clamp(1rem,1.4vw,1.1rem)] leading-relaxed text-muted">
                We move from discovery to delivery with workflow mapping, system design,
                integrations, QA, CI/CD, and post-launch improvement in one delivery path.
              </p>
            </Reveal>
          </div>
          <Reveal className="hidden shrink-0 lg:block">
            <WireframeCube />
          </Reveal>
        </div>

        <ProcessRoadmap
          className="mt-16"
          items={PROCESS_STEPS.map((step) => ({
            number: step.n,
            label: step.label,
            body: step.body,
          }))}
        />
      </Container>
    </Section>
  );
}
