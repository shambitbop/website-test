import { ArrowDown, ArrowRight } from "lucide-react";
import { Container } from "./primitives";
import { DecryptText } from "./decrypt-text";
import { Hero3DScene } from "./ui/hero-3d-scene";

const MICRO = [
  "AI software",
  "workflow automation",
  "dashboards",
  "Microsoft 365 systems",
  "web and mobile apps",
  "chatbots and voice agents",
  "QA and CI/CD",
  "managed support",
];

export function Hero() {
  return (
    <section
      id="top"
      className="mobile-static-hero relative overflow-hidden pt-28 pb-[clamp(5rem,12vw,9rem)] md:pt-32"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          {/* left column */}
          <div className="relative z-10">
            <div
              className="hero-entry mb-7 inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3.5 py-1.5"
            >
              <span className="kicker !tracking-[0.18em]">
                <span className="text-accent">{"//"}</span> Decrypt AI Technologies
              </span>
            </div>

            <h1 className="font-display text-[clamp(2.6rem,7vw,5.4rem)]">
              <DecryptText
                text="We decrypt what"
                as="span"
                trigger="load"
                accent="decrypt"
                className="block"
                options={{ speed: 24, stepPerChar: 1.4 }}
              />
              <DecryptText
                text="others cannot."
                as="span"
                trigger="load"
                className="block text-muted"
                options={{ speed: 24, delay: 8, stepPerChar: 1.2 }}
              />
            </h1>

            <p
              className="hero-entry mt-7 max-w-xl text-[clamp(1rem,1.5vw,1.18rem)] leading-relaxed text-muted"
            >
              Your business should not be forced to work around disconnected tools, scattered
              spreadsheets, and manual processes. Decrypt AI Technologies turns messy workflows
              into governed AI systems, custom software, dashboards, automation, websites, apps,
              chatbots, voice agents, and business systems your team can actually use.
            </p>

            <div
              className="hero-entry mt-9 grid grid-cols-1 gap-3 sm:flex sm:flex-wrap sm:items-center"
            >
              <a
                href="/about-contact#start"
                data-simple-contact="Tell Us About Your Project"
                data-cursor="lock"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-center font-mono text-[13px] font-medium text-bg shadow-[0_8px_24px_-10px_color-mix(in_oklab,var(--accent)_70%,transparent)] transition-[filter,box-shadow] duration-300 hover:brightness-110 sm:px-6 sm:text-[14px]"
              >
                Tell Us About Your Project
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </a>
              <a
                href="#what"
                data-cursor="lock"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line px-5 py-3 text-center font-mono text-[13px] text-text transition-colors hover:border-accent/50 hover:bg-surface sm:px-6 sm:text-[14px]"
              >
                See What We Can Build
                <ArrowDown
                  size={16}
                  className="text-accent transition-transform duration-300 group-hover:translate-y-0.5"
                  aria-hidden
                />
              </a>
            </div>

            <ul
              className="hero-entry mt-8 grid gap-2 sm:flex sm:flex-wrap sm:gap-x-7 sm:gap-y-2"
            >
              {MICRO.slice(0, 3).map((m) => (
                <li key={m} className="kicker">
                  <span className="text-accent">{"//"}</span> {m}
                </li>
              ))}
            </ul>
          </div>

          {/* right column: 3d scene panel */}
          <div
            className="hero-entry hero-robot-panel relative mx-auto w-full max-w-xl lg:max-w-none flex items-center justify-center"
          >
            <Hero3DScene variant="home" caption="Custom software, AI automation, and business systems." />
          </div>
        </div>
      </Container>

      {/* Bottom tag strip - scrolling marquee of all capability tags */}
      <div
        className="hero-entry relative mt-14 border-y border-line overflow-hidden"
      >
        <div
          className="marquee-track py-3 gap-0"
          style={{ ["--marquee-duration" as string]: "28s" }}
        >
          {[...MICRO, ...MICRO].map((m, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 px-8 font-mono text-[11px] uppercase tracking-[0.28em] text-muted"
            >
              <span className="text-accent">{"//"}</span>
              {m}
              <span className="ml-6 h-px w-8 bg-line" aria-hidden />
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}
