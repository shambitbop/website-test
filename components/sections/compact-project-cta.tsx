import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "../primitives";
import { Reveal } from "../reveal";

export function CompactProjectCta() {
  return (
    <section className="border-y border-line py-6 sm:py-7">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-5 rounded-2xl border border-accent/25 bg-accent/[0.045] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                Have a project in mind?
              </p>
              <h2 className="font-display mt-2 text-[clamp(1.15rem,2.2vw,1.55rem)] text-text">
                Planning a website, app, or custom software project?
              </h2>
            </div>
            <Link
              href="/about-contact#start"
              data-simple-contact="Discuss Your Project"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-accent/40 bg-surface/70 px-5 py-2.5 font-mono text-[13px] text-text transition-colors hover:border-accent/70 hover:text-accent"
            >
              Discuss Your Project
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
