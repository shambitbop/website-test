"use client";

import { motion } from "motion/react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Container } from "./primitives";
import { DecryptText } from "./decrypt-text";
import { RobotScene } from "./robot-scene";

const fade = {
  hidden: { opacity: 0, y: 14 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay: 0.15 + i * 0.08 },
  }),
};

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
            <motion.div
              custom={0}
              variants={fade}
              initial="hidden"
              animate="show"
              className="hero-entry mb-7 inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3.5 py-1.5"
            >
              <span className="kicker !tracking-[0.18em]">
                <span className="text-accent">{"//"}</span> Decrypt AI Technologies
              </span>
            </motion.div>

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

            <motion.p
              custom={3}
              variants={fade}
              initial="hidden"
              animate="show"
              className="hero-entry mt-7 max-w-xl text-[clamp(1rem,1.5vw,1.18rem)] leading-relaxed text-muted"
            >
              Your business should not be forced to work around disconnected tools, scattered
              spreadsheets, and manual processes. Decrypt AI Technologies turns messy workflows
              into governed AI systems, custom software, dashboards, automation, websites, apps,
              chatbots, voice agents, and business systems your team can actually use.
            </motion.p>

            <motion.div
              custom={4}
              variants={fade}
              initial="hidden"
              animate="show"
              className="hero-entry mt-9 grid grid-cols-1 gap-3 sm:flex sm:flex-wrap sm:items-center"
            >
              <a
                href="/about-contact#start"
                data-simple-contact="Get a Free Workflow Review"
                data-cursor="lock"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-center font-mono text-[13px] font-medium text-bg shadow-[0_8px_24px_-10px_color-mix(in_oklab,var(--accent)_70%,transparent)] transition-[filter,box-shadow] duration-300 hover:brightness-110 sm:px-6 sm:text-[14px]"
              >
                Get a Free Workflow Review
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
            </motion.div>

            <motion.ul
              custom={5}
              variants={fade}
              initial="hidden"
              animate="show"
              className="hero-entry mt-8 grid gap-2 sm:flex sm:flex-wrap sm:gap-x-7 sm:gap-y-2"
            >
              {MICRO.slice(0, 3).map((m) => (
                <li key={m} className="kicker">
                  <span className="text-accent">{"//"}</span> {m}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* right column: robot panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            className="hero-entry hero-robot-panel relative mx-auto w-full max-w-xl lg:max-w-none"
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-line bg-[#070710] [background-image:radial-gradient(120%_90%_at_50%_0%,#171432_0%,#070710_60%)] md:aspect-[4/5] lg:aspect-square">
              {/* status chip */}
              <div className="absolute left-3 top-3 z-20 inline-flex max-w-[calc(100%-1.5rem)] items-center gap-2 rounded-full border border-line bg-bg/70 px-3 py-1.5 backdrop-blur sm:left-4 sm:top-4 sm:max-w-none">
                <span className="status-dot h-2 w-2 rounded-full bg-accent" />
                <span className="truncate font-mono text-[11px] tracking-wide text-text sm:text-[12px]">
                  workflow review online
                </span>
              </div>
              {/* corner ticks */}
              <CornerTicks />
              <RobotScene className="absolute inset-0" />
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Bottom tag strip - scrolling marquee of all capability tags */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
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
      </motion.div>

    </section>
  );
}

function CornerTicks() {
  const corners = [
    "left-3 top-3 border-l border-t",
    "right-3 top-3 border-r border-t",
    "left-3 bottom-3 border-l border-b",
    "right-3 bottom-3 border-r border-b",
  ];
  return (
    <>
      {corners.map((c, i) => (
        <span
          key={i}
          aria-hidden
          className={`pointer-events-none absolute z-10 h-4 w-4 border-accent/40 ${c}`}
        />
      ))}
    </>
  );
}
