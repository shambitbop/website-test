"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Container, Kicker, Section } from "../primitives";
import { DecryptText } from "../decrypt-text";
import { Reveal } from "../reveal";
import { TiltCard } from "../tilt-card";
import { Modal } from "../ui/modal";
import { CardCarousel } from "../ui/card-carousel";
import { CASE_STUDIES, type CaseStudy } from "@/lib/content";
import { finishHomepagePopupFlow, getHomepagePopupTarget } from "@/lib/homepage-popup-flow";

function CaseStudyCard({
  study,
  onOpen,
  href,
}: {
  study: CaseStudy;
  onOpen?: () => void;
  href?: string;
}) {
  const content = (
    <>
      {/* Top accent line on hover */}
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />

      <div className="flex flex-1 flex-col p-6">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
          {study.tag}
        </span>
        <h3 className="font-display mt-3 text-xl text-text">{study.client}</h3>
        <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{study.industry}</p>
        <p className="mt-4 flex-1 text-[14.5px] leading-relaxed text-muted">
          {study.overview}
        </p>
      </div>

      <div className="flex items-center justify-between border-t border-accent/25 bg-accent/[0.05] px-6 py-3.5 transition-colors group-hover:bg-accent/[0.1]">
        <span className="card-cta font-mono text-[13px] font-medium text-accent">
          View case study
        </span>
        <span
          aria-hidden
          className="flex h-7 w-7 items-center justify-center rounded-full border border-accent/35 bg-surface text-accent transition-all duration-300 group-hover:translate-x-0.5 group-hover:border-accent/60 group-hover:bg-accent/10"
        >
          {"->"}
        </span>
      </div>
    </>
  );

  return (
    <TiltCard id={href ? undefined : `study-${study.slug}`} className="h-full scroll-mt-24">
      {href ? (
        <Link
          href={href}
          className="card group flex h-full w-full flex-col overflow-hidden rounded-xl text-left"
        >
          {content}
        </Link>
      ) : (
        <button
          onClick={onOpen}
          data-cursor="lock"
          className="card group flex h-full w-full flex-col overflow-hidden rounded-xl text-left"
        >
          {content}
        </button>
      )}
    </TiltCard>
  );
}

function CaseStudyModal({ study }: { study: CaseStudy }) {
  const titleId = `case-study-${study.slug}`;
  return (
    <div className="p-6 sm:p-9">
      <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
        {study.tag}
      </span>
      <h2 id={titleId} className="font-display mt-3 text-[clamp(1.6rem,4vw,2.2rem)] text-text">
        {study.client}
      </h2>
      <p className="mt-1.5 text-[14px] text-muted">{study.industry}</p>

      <dl className="mt-6 grid gap-4 rounded-xl border border-line bg-surface-2/50 p-5 sm:grid-cols-2">
        <div>
          <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
            Project type
          </dt>
          <dd className="mt-1 text-[14px] text-text">{study.projectType}</dd>
        </div>
        <div>
          <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
            Services delivered
          </dt>
          <dd className="mt-1 text-[14px] text-text">{study.servicesDelivered}</dd>
        </div>
      </dl>

      <Block heading="Overview" body={study.overview} />
      <Block heading="The challenge" body={study.challenge} />

      <h3 className="font-display mt-7 text-lg text-text">What Decrypt delivered</h3>
      <ul className="mt-3 space-y-2">
        {study.delivered.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-[14.5px] leading-relaxed text-muted">
            <span className="mt-1 text-accent">{"->"}</span>
            {item}
          </li>
        ))}
      </ul>

      <Block heading="Business value" body={study.businessValue} />

      <h3 className="font-display mt-7 text-lg text-text">Capabilities demonstrated</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {study.capabilities.map((c) => (
          <span
            key={c}
            className="rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-[12px] text-muted"
          >
            {c}
          </span>
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-accent/25 bg-accent/[0.05] p-5">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
          Project reflection - draft, pending client approval
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-text">&ldquo;{study.reflection}&rdquo;</p>
      </div>

      <div className="mt-8">
        <a
          href="/about-contact#start"
          data-simple-contact="Start a similar project"
          data-cursor="lock"
          className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-[14px] font-medium text-bg transition-[filter] duration-300 hover:brightness-110"
        >
          Start a similar project
          <span className="transition-transform duration-300 group-hover:translate-x-1">{"->"}</span>
        </a>
      </div>
    </div>
  );
}

function Block({ heading, body }: { heading: string; body: string }) {
  return (
    <div className="mt-7">
      <h3 className="font-display text-lg text-text">{heading}</h3>
      <p className="mt-2.5 text-[14.5px] leading-relaxed text-muted">{body}</p>
    </div>
  );
}

export function CaseStudies({ linkCardsToPage = false }: { linkCardsToPage?: boolean }) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const openedFromHomepageRef = useRef(false);
  const active = CASE_STUDIES.find((s) => s.slug === activeSlug) ?? null;

  useEffect(() => {
    if (linkCardsToPage) return;
    const requestedSlug = getHomepagePopupTarget("case");
    if (!requestedSlug || !CASE_STUDIES.some((study) => study.slug === requestedSlug)) return;

    openedFromHomepageRef.current = true;
    const timer = window.setTimeout(() => setActiveSlug(requestedSlug), 0);
    return () => window.clearTimeout(timer);
  }, [linkCardsToPage]);

  function closeActiveCaseStudy() {
    const shouldReturnToTop = openedFromHomepageRef.current;
    openedFromHomepageRef.current = false;
    setActiveSlug(null);
    if (shouldReturnToTop) finishHomepagePopupFlow("case");
  }

  const cards = CASE_STUDIES.map((study, i) => (
    <Reveal key={study.slug} delay={i * 0.05} className="h-full">
      <CaseStudyCard
        study={study}
        href={linkCardsToPage ? `/case-studies?case=${study.slug}&source=home` : undefined}
        onOpen={linkCardsToPage ? undefined : () => {
          openedFromHomepageRef.current = false;
          setActiveSlug(study.slug);
        }}
      />
    </Reveal>
  ));

  return (
    <Section id="case-studies">
      <Container>
        <Reveal>
          <Kicker>CASE STUDIES</Kicker>
        </Reveal>
        <DecryptText
          as="h2"
          text="Project proof across software, automation, and digital operations."
          accent="proof"
          className="font-display mt-5 max-w-3xl text-[clamp(1.9rem,4.4vw,3rem)]"
        />
        <Reveal delay={0.05}>
          <p className="mt-6 max-w-2xl text-[clamp(1rem,1.4vw,1.12rem)] leading-relaxed text-muted">
            Client proof across ERP systems, AI dashboards, web and mobile applications,
            SharePoint workflows, Power Automate automations, WordPress websites, LMS
            operations, QA, CI/CD, content systems, and ongoing digital support.
          </p>
        </Reveal>

        {linkCardsToPage ? (
          <CardCarousel label="Case studies">{cards}</CardCarousel>
        ) : (
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{cards}</div>
        )}
      </Container>

      {!linkCardsToPage && (
        <Modal open={!!active} onClose={closeActiveCaseStudy} labelledBy={`case-study-${active?.slug ?? ""}`} headerLabel="decrypt - case file">
          {active && <CaseStudyModal study={active} />}
        </Modal>
      )}
    </Section>
  );
}
