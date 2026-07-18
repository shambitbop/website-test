import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, Check, Cpu, Layers3, Radar, Sparkles } from "lucide-react";
import { Container, Kicker, Section } from "./primitives";
import { DecryptText } from "./decrypt-text";
import { Reveal } from "./reveal";
import { TiltCard } from "./tilt-card";
import { SiteNav } from "./site-nav";
import { SiteFooter } from "./site-footer";
import { FaqAccordion } from "./ui/faq-accordion";
import { IndustryCardGrid } from "./ui/industry-card-grid";
import { Hero3DScene, type HeroSceneVariant } from "./ui/hero-3d-scene";
import { StudioServiceGrid } from "./ui/studio-service-grid";
import { ProcessRoadmap } from "./ui/process-roadmap";
import { PageStructuredData } from "./page-structured-data";
import type { InnerItem, InnerPage, InnerSection } from "@/lib/inner-content";
import { getCtaCategory, getCtaHref } from "@/lib/cta-audit";

const icons = [Layers3, Cpu, Radar, Sparkles] as const;

function CtaButton({ label, index }: { label: string; index: number }) {
  const primary = index === 0;
  return (
    <Link
      href={getCtaHref(label)}
      data-simple-contact={getCtaCategory(label) === "quick-form" ? label : undefined}
      className={
        primary
          ? "group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 text-center font-mono text-[12px] font-medium leading-snug text-bg transition-[filter] hover:brightness-110 sm:px-5 sm:text-[13px] xl:px-6 xl:text-[14px]"
          : "group inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-line bg-surface/80 px-4 py-3 text-center font-mono text-[12px] leading-snug text-text transition-colors hover:border-accent/50 sm:px-5 sm:text-[13px] xl:px-6 xl:text-[14px]"
      }
    >
      {label}
      <ArrowRight
        size={16}
        strokeWidth={2}
        className="transition-transform group-hover:translate-x-1"
        aria-hidden
      />
    </Link>
  );
}

function SectionCard({ item, index }: { item: InnerItem; index: number }) {
  const Icon = icons[index % icons.length];
  return (
    <TiltCard className="h-full">
      <div className="card group h-full overflow-hidden rounded-xl p-6">
        <span className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />
        <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface-2 text-accent">
          <Icon size={18} strokeWidth={1.8} aria-hidden />
        </div>
        <h3 className="font-display text-xl text-text">{item.label}</h3>
        <p className="mt-3 text-[14.5px] leading-relaxed text-muted">{item.body}</p>
      </div>
    </TiltCard>
  );
}

function BulletList({ items }: { items: InnerItem[] }) {
  return (
    <div className="grid auto-rows-fr items-stretch gap-3 md:grid-cols-2">
      {items.map((item, i) => (
        <Reveal key={item.label} delay={i * 0.035} className="h-full">
          <div className="flex h-full min-h-[132px] items-start gap-3 rounded-xl border border-line bg-surface/40 p-5">
            <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-bg">
              <Check size={13} strokeWidth={3} aria-hidden />
            </span>
            <div>
              <h3 className="font-mono text-[13px] text-text">{item.label}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">{item.body}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

function PackList({ items }: { items: InnerItem[] }) {
  return (
    <ProcessRoadmap
      items={items.map((item, index) => ({
        number: String(index + 1).padStart(2, "0"),
        label: item.label,
        body: item.body,
      }))}
    />
  );
}

function FaqGrid({ items }: { items: InnerItem[] }) {
  return (
    <FaqAccordion
      items={items.map((item) => ({ question: item.label, answer: item.body }))}
      visualClassName="lg:-translate-x-4 lg:-translate-y-8"
    />
  );
}

const conversionCopy: Record<string, { kicker: string; title: string; body: string }> = {
  studio: {
    kicker: "BUILD YOUR SOFTWARE",
    title: "Have a software idea or workflow that generic tools cannot handle?",
    body: "Show us how the work happens today. We will turn it into a clear plan for custom software, a web or mobile app, an AI-powered dashboard, or a connected internal system.",
  },
  automations: {
    kicker: "AUTOMATE THE REPETITION",
    title: "Which repeated task is costing your team the most time?",
    body: "Send us the approvals, documents, follow-ups, Microsoft 365 tasks, chatbot flows, or reporting steps you want to simplify. We will identify the best place to begin.",
  },
  verticalos: {
    kicker: "SHAPE THE OPERATIONS SYSTEM",
    title: "Ready to replace spreadsheet-driven operations with clearer software?",
    body: "Bring us your quoting, job tracking, inventory, field update, approval, or reporting workflow. We will map a focused operations pilot around the way your business runs.",
  },
  "industries-technology": {
    kicker: "FIND THE RIGHT BUILD PATH",
    title: "Need the right software and technology approach for your industry?",
    body: "Tell us where work gets delayed, disconnected, or difficult to see. We will recommend a practical path across custom software, apps, AI, automation, integrations, QA, and managed support.",
  },
};

function Spotlight({ section }: { section: InnerSection }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
      <Reveal>
        <div className="rounded-2xl border border-accent/25 bg-accent/[0.055] p-6 sm:p-8">
          <p className="text-[15px] leading-relaxed text-text">{section.body}</p>
        </div>
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
        {section.items.map((item, i) => (
          <Reveal key={item.label} delay={i * 0.06}>
            <div className="rounded-xl border border-line bg-surface/50 p-5">
              <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-accent">
                {item.label}
              </p>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">{item.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function RichSection({ section }: { section: InnerSection }) {
  const sectionId = section.eyebrow.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  return (
    <Section id={sectionId} className="scroll-mt-24 border-t border-line">
      <Container>
        <Reveal>
          <Kicker>{section.eyebrow}</Kicker>
        </Reveal>
        <DecryptText
          as="h2"
          text={section.title}
          accent={section.title.split(" ")[0] ?? "Decrypt"}
          className="font-display mt-5 max-w-4xl text-[clamp(1.9rem,4.4vw,3rem)]"
        />
        {section.body && section.layout !== "spotlight" && (
          <Reveal delay={0.05}>
            <p className="mt-6 max-w-3xl text-[clamp(1rem,1.4vw,1.12rem)] leading-relaxed text-muted">
              {section.body}
            </p>
          </Reveal>
        )}

        <div className="mt-12">
          {section.layout === "cards" && (
            section.eyebrow === "STUDIO SERVICES" ? (
              <StudioServiceGrid items={section.items} />
            ) : section.eyebrow === "TARGET INDUSTRIES" ? (
              <IndustryCardGrid items={section.items} />
            ) : (
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {section.items.map((item, i) => (
                  <Reveal key={item.label} delay={i * 0.035}>
                    <SectionCard item={item} index={i} />
                  </Reveal>
                ))}
              </div>
            )
          )}
          {section.layout === "bullets" && <BulletList items={section.items} />}
          {section.layout === "packs" && <PackList items={section.items} />}
          {section.layout === "faq" && <FaqGrid items={section.items} />}
          {section.layout === "spotlight" && <Spotlight section={section} />}
        </div>
      </Container>
    </Section>
  );
}

export function InnerPageView({
  page,
  afterHero,
  structuredData,
}: {
  page: InnerPage;
  afterHero?: ReactNode;
  structuredData?: Record<string, unknown>;
}) {
  const visibleKeywords = page.keywords.split(",").slice(0, 4).map((keyword) => keyword.trim());
  const conversion = conversionCopy[page.slug] ?? conversionCopy.studio;

  return (
    <>
      {structuredData && <PageStructuredData data={structuredData} />}
      <SiteNav />
      <main>
        <section className="relative overflow-hidden pt-24 pb-12 md:pt-28 md:pb-16">
          <Container>
            <div className="grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="relative z-10">
                <Reveal>
                  <Kicker>{page.kicker}</Kicker>
                </Reveal>
                <DecryptText
                  as="h1"
                  text={page.title}
                  accent={page.title.split(" ")[0] ?? "Decrypt"}
                  trigger="load"
                  className="font-display mt-4 max-w-4xl text-[clamp(2rem,4.4vw,3.65rem)]"
                  options={{ speed: 18, stepPerChar: 0.8 }}
                />
                <Reveal delay={0.08}>
                  <p className="mt-4 max-w-2xl text-[clamp(0.88rem,1.05vw,0.98rem)] leading-[1.65] text-muted">
                    {page.description}
                  </p>
                </Reveal>
                <Reveal delay={0.12}>
                  <div className="relative mt-4 overflow-hidden rounded-2xl border border-accent/35 bg-accent/[0.07] p-4 shadow-[inset_0_0_36px_color-mix(in_oklab,var(--accent)_4%,transparent)]">
                    <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-accent/70" />
                    <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                      <Sparkles size={13} strokeWidth={1.8} aria-hidden />
                      {page.slug === "studio" ? "The Studio promise" : "The opportunity"}
                    </div>
                    <p className="mt-2.5 text-[13.5px] font-medium leading-[1.6] text-text">
                      {page.directAnswer}
                    </p>
                    <div className="mt-3 hidden flex-wrap gap-1.5 sm:flex">
                      {visibleKeywords.map((keyword) => (
                        <span
                          key={keyword}
                          className="rounded-full border border-line/90 bg-bg/65 px-2.5 py-1 font-mono text-[9.5px] leading-none text-muted"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={0.16}>
                  <div className="mt-5 grid max-w-2xl grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {page.ctas.slice(0, 2).map((cta, i) => (
                      <CtaButton key={cta} label={cta} index={i} />
                    ))}
                  </div>
                </Reveal>
              </div>
              <Reveal delay={0.12}>
                <div>
                  <Hero3DScene
                    variant={page.slug as HeroSceneVariant}
                    caption={page.directAnswer}
                  />
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        {afterHero}

        {page.sections.map((section) => (
          <RichSection key={section.eyebrow} section={section} />
        ))}

        <Section className="border-t border-line">
          <Container>
            <div className="relative overflow-hidden rounded-3xl border border-accent/30 bg-accent/[0.055] p-6 sm:p-10">
              <span className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="relative">
                  <Kicker>{conversion.kicker}</Kicker>
                  <h2 className="font-display mt-5 max-w-3xl text-[clamp(1.9rem,4.2vw,3rem)]">
                    {conversion.title}
                  </h2>
                  <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted">
                    {conversion.body}
                  </p>
                </div>
                <Link
                  href={getCtaHref(page.ctas[0])}
                  data-simple-contact={getCtaCategory(page.ctas[0]) === "quick-form" ? page.ctas[0] : undefined}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-[14px] font-medium text-bg transition-[filter] hover:brightness-110"
                >
                  {page.ctas[0]}
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </Link>
              </div>
            </div>
          </Container>
        </Section>

      </main>
      <SiteFooter />
    </>
  );
}
