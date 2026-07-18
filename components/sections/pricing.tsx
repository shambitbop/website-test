"use client";

import { useState } from "react";
import Link from "next/link";
import { Container, Kicker, Section } from "../primitives";
import { DecryptText } from "../decrypt-text";
import { Reveal } from "../reveal";
import { TiltCard } from "../tilt-card";
import { Modal } from "../ui/modal";
import { CardCarousel } from "../ui/card-carousel";
import { PRICING_GROUPS, type PricingGroup } from "@/lib/content";

function PricingCard({
  group,
  onOpen,
  href,
}: {
  group: PricingGroup;
  onOpen?: () => void;
  href?: string;
}) {
  const content = (
    <>
      <h3 className="font-display text-xl text-text">{group.title}</h3>
      <p className="font-mono mt-2 text-[15px] text-accent">{group.rangeSummary}</p>
      <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-muted">{group.blurb}</p>
      <span className="card-cta mt-6 inline-flex w-fit items-center gap-2 rounded-lg border border-accent/35 bg-accent/[0.08] px-3.5 py-2.5 font-mono text-[13px] font-medium text-accent transition-colors duration-300 group-hover:border-accent/65 group-hover:bg-accent/[0.12]">
        See what is included
        <span
          aria-hidden
          className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
        >
          {"->"}
        </span>
      </span>
    </>
  );

  return (
    <TiltCard
      id={href ? undefined : `pricing-group-${group.slug}`}
      className="h-full scroll-mt-24"
    >
      {href ? (
        <Link
          href={href}
          className="card group flex h-full w-full flex-col rounded-xl p-6 text-left"
        >
          {content}
        </Link>
      ) : (
        <button
          onClick={onOpen}
          data-cursor="lock"
          className="card group flex h-full w-full flex-col rounded-xl p-6 text-left"
        >
          {content}
        </button>
      )}
    </TiltCard>
  );
}

function PricingModal({ group }: { group: PricingGroup }) {
  const titleId = `pricing-${group.slug}`;
  return (
    <div className="p-6 sm:p-9">
      <h2 id={titleId} className="font-display text-[clamp(1.6rem,4vw,2.2rem)] text-text">
        {group.title}
      </h2>
      <p className="font-mono mt-2 text-[16px] text-accent">{group.rangeSummary}</p>
      <p className="mt-3 text-[14.5px] leading-relaxed text-muted">{group.blurb}</p>

      <div className="mt-7 space-y-5">
        {group.items.map((item) => (
          <div key={item.name} className="rounded-xl border border-line bg-surface-2/50 p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-base text-text">{item.name}</h3>
              <span className="font-mono text-[13px] text-accent">{item.range}</span>
            </div>
            <p className="mt-2.5 text-[14px] leading-relaxed text-muted">{item.body}</p>
          </div>
        ))}
      </div>

      <p className="mt-6 text-[13px] leading-relaxed text-muted">
        Larger scopes, advanced AI features, integrations, compliance needs, and enterprise
        support are quoted after discovery.
      </p>

      <div className="mt-7">
        <a
          href="/about-contact#start"
          data-cursor="lock"
          className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-[14px] font-medium text-bg transition-[filter] duration-300 hover:brightness-110"
        >
          Get a quote
          <span className="transition-transform duration-300 group-hover:translate-x-1">{"->"}</span>
        </a>
      </div>
    </div>
  );
}

export function Pricing({
  linkCardsToPage = false,
  groups = PRICING_GROUPS,
}: {
  linkCardsToPage?: boolean;
  groups?: PricingGroup[];
}) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const active = groups.find((g) => g.slug === activeSlug) ?? null;
  const cards = groups.map((group, i) => (
    <Reveal key={group.slug} delay={i * 0.06} className="h-full">
      <PricingCard
        group={group}
        href={linkCardsToPage ? `/pricing#pricing-group-${group.slug}` : undefined}
        onOpen={linkCardsToPage ? undefined : () => setActiveSlug(group.slug)}
      />
    </Reveal>
  ));

  return (
    <Section id="pricing" className="border-t border-line">
      <Container>
        <Reveal>
          <Kicker>PRICING</Kicker>
        </Reveal>
        <DecryptText
          as="h2"
          text="Start small, scale into the system your business actually needs."
          accent="scale"
          className="font-display mt-5 max-w-3xl text-[clamp(1.9rem,4.4vw,3rem)]"
        />
        <Reveal delay={0.05}>
          <p className="mt-6 max-w-2xl text-[clamp(1rem,1.4vw,1.12rem)] leading-relaxed text-muted">
            Current starter ranges for landing pages, website maintenance, AI automation,
            AI-powered software, discovery, backend, integrations, web apps, MVPs, mobile apps,
            QA, custom software, support, and enterprise systems. Complex workflow systems are
            quoted after discovery.
          </p>
        </Reveal>

        {linkCardsToPage ? (
          <CardCarousel label="Pricing options">{cards}</CardCarousel>
        ) : (
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{cards}</div>
        )}

      </Container>

      {!linkCardsToPage && (
        <Modal open={!!active} onClose={() => setActiveSlug(null)} labelledBy={`pricing-${active?.slug ?? ""}`} headerLabel="decrypt - pricing">
          {active && <PricingModal group={active} />}
        </Modal>
      )}
    </Section>
  );
}
