import { Container, Kicker, Section } from "../primitives";
import { DecryptText } from "../decrypt-text";
import { Reveal } from "../reveal";
import { FaqAccordion, type FaqEntry } from "../ui/faq-accordion";

export function PageFaq({
  kicker,
  title,
  items,
}: {
  kicker: string;
  title: string;
  items: FaqEntry[];
}) {
  return (
    <Section className="border-t border-line">
      <Container>
        <Reveal>
          <Kicker>{kicker}</Kicker>
        </Reveal>
        <DecryptText
          as="h2"
          text={title}
          accent="questions"
          className="font-display mt-5 max-w-4xl text-[clamp(1.9rem,4.4vw,3rem)]"
        />
        <FaqAccordion
          className="mt-12"
          items={items}
          visualClassName="lg:-translate-x-4 lg:-translate-y-8"
        />
      </Container>
    </Section>
  );
}
