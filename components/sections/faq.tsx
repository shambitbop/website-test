import { HOMEPAGE_FAQ } from "@/lib/content";
import { Container, Kicker, Section } from "../primitives";
import { DecryptText } from "../decrypt-text";
import { Reveal } from "../reveal";
import { FaqAccordion } from "../ui/faq-accordion";

export function Faq() {
  return (
    <Section id="faq" className="border-t border-line">
      <Container>
        <Reveal>
          <Kicker>FAQ</Kicker>
        </Reveal>
        <DecryptText
          as="h2"
          text="Common questions before we decode the workflow."
          accent="questions"
          className="font-display mt-5 max-w-3xl text-[clamp(1.9rem,4.4vw,3rem)]"
        />
        <FaqAccordion
          className="mt-12"
          items={HOMEPAGE_FAQ.map((item) => ({ question: item.q, answer: item.a }))}
        />
      </Container>
    </Section>
  );
}
