"use client";

import { useRef, type PointerEvent } from "react";
import { cn } from "@/lib/utils";

export type HeroSceneVariant =
  | "studio"
  | "automations"
  | "verticalos"
  | "industries-technology"
  | "case-studies"
  | "pricing"
  | "about"
  | "signal"
  | "home";

const scenes: Record<
  HeroSceneVariant,
  { core: string; label: string; status: string; nodes: readonly string[] }
> = {
  studio: {
    core: "BUILD",
    label: "SOFTWARE SYSTEM",
    status: "FROM WORKFLOW TO PRODUCT",
    nodes: ["DISCOVER", "DESIGN", "SHIP", "SUPPORT"],
  },
  automations: {
    core: "FLOW",
    label: "AUTOMATION ENGINE",
    status: "LESS REPETITION. MORE CONTROL.",
    nodes: ["TRIGGER", "APPROVE", "ROUTE", "REPORT"],
  },
  verticalos: {
    core: "OS",
    label: "OPERATIONS CORE",
    status: "ONE VIEW OF THE WORK",
    nodes: ["QUOTE", "JOBS", "STOCK", "FIELD"],
  },
  "industries-technology": {
    core: "MAP",
    label: "INDUSTRY STACK",
    status: "RIGHT TECHNOLOGY. REAL WORKFLOW.",
    nodes: ["WORKFLOW", "AI", "API", "QA"],
  },
  "case-studies": {
    core: "PROOF",
    label: "DELIVERY SIGNAL",
    status: "REAL BUILDS. PRACTICAL RESULTS.",
    nodes: ["BUILD", "RELEASE", "IMPACT", "SCALE"],
  },
  pricing: {
    core: "PLAN",
    label: "SCOPE ENGINE",
    status: "CLEAR RANGE. FOCUSED NEXT STEP.",
    nodes: ["DISCOVER", "ESTIMATE", "BUILD", "SUPPORT"],
  },
  about: {
    core: "Decrypt AI",
    label: "DELIVERY SYSTEM",
    status: "CLARITY FROM COMPLEXITY",
    nodes: ["LISTEN", "MAP", "BUILD", "IMPROVE"],
  },
  signal: {
    core: "SYNC",
    label: "WORKFLOW SIGNAL",
    status: "CLEAR SYSTEMS. MEASURABLE VALUE.",
    nodes: ["INPUT", "LOGIC", "ACTION", "RESULT"],
  },
  home: {
    core: "DECRYPT",
    label: "DECRYPT AI",
    status: "COMPLEXITY RESOLVED INTO CLARITY",
    nodes: ["ENCRYPT", "ANALYZE", "DECODE", "RESOLVE"],
  },
};

function StudioArtwork() {
  return (
    <div className="hero-artwork hero-artwork-studio">
      <div className="studio-product-deck">
        <div className="studio-deck-layer studio-deck-layer-back"><span>DATA + API</span></div>
        <div className="studio-deck-layer studio-deck-layer-mid"><span>WORKFLOW LOGIC</span></div>
        <div className="studio-deck-layer studio-deck-layer-front">
          <div className="studio-deck-bar"><i /><i /><i /><span>decrypt.product</span></div>
          <div className="studio-deck-body">
            <span className="studio-deck-nav"><i /><i /><i /><i /></span>
            <span className="studio-deck-content">
              <b>ONE CONNECTED SYSTEM</b>
              <em><i /><i /><i /></em>
              <strong><i /><i /><i /><i /><i /></strong>
            </span>
          </div>
        </div>
        <span className="studio-deck-ribbon studio-deck-ribbon-one" />
        <span className="studio-deck-ribbon studio-deck-ribbon-two" />
        <i className="studio-deck-pulse studio-deck-pulse-one" />
        <i className="studio-deck-pulse studio-deck-pulse-two" />
      </div>
      <div className="studio-deck-caption"><span>STRATEGY</span><i /><span>DESIGN</span><i /><span>ENGINEERING</span></div>
    </div>
  );
}

function AutomationsArtwork() {
  return (
    <div className="hero-artwork hero-artwork-automations">
      <div className="automation-inputs"><span>DOC</span><span>EMAIL</span><span>CRM</span></div>
      <div className="automation-track">
        {[
          ["01", "TRIGGER"], ["02", "AI"], ["03", "APPROVE"], ["04", "ROUTE"],
        ].map(([number, label]) => (
          <div key={number} className="automation-gate"><i>{number}</i><span>{label}</span></div>
        ))}
        <i className="automation-packet automation-packet-1" />
        <i className="automation-packet automation-packet-2" />
      </div>
      <div className="automation-outputs"><span>DONE</span><span>REPORT</span><span>NOTIFY</span></div>
    </div>
  );
}

function VerticalOsArtwork() {
  return (
    <div className="hero-artwork hero-artwork-verticalos">
      <div className="vertical-command-center">
        <span className="vertical-command-ring vertical-command-ring-outer"><i /></span>
        <span className="vertical-command-ring vertical-command-ring-mid"><i /></span>
        <span className="vertical-command-ring vertical-command-ring-inner" />
        <div className="vertical-command-core"><span>VerticalOS</span><i>OPERATIONS LIVE</i><b /></div>
        {[
          ["QUOTE", "12"], ["JOBS", "28"], ["STOCK", "94%"], ["FIELD", "06"],
        ].map(([label, value], index) => (
          <div key={label} className={`vertical-command-module vertical-command-module-${index + 1}`}>
            <span>{label}</span><b>{value}</b><i />
          </div>
        ))}
        <span className="vertical-command-beam vertical-command-beam-one" />
        <span className="vertical-command-beam vertical-command-beam-two" />
        <span className="vertical-command-sweep" />
      </div>
      <div className="vertical-command-status"><span>03 alerts</span><i>87% jobs on track</i><b><i /></b></div>
    </div>
  );
}

function IndustriesArtwork() {
  const industries = ["MFG", "HEALTH", "SAAS", "EDU", "LOGISTICS", "ECOM"];
  return (
    <div className="hero-artwork hero-artwork-industries">
      <div className="industries-globe"><span /><i /><b /></div>
      <div className="industries-orbit">
        {industries.map((industry, index) => (
          <span key={industry} className={`industry-world industry-world-${index + 1}`}>
            <i />{industry}
          </span>
        ))}
      </div>
      <span className="industries-network-line industries-network-line-1" />
      <span className="industries-network-line industries-network-line-2" />
    </div>
  );
}

function CaseStudiesArtwork() {
  const projects = ["ERP", "MOBILE", "WEB", "AI", "M365"];
  return (
    <div className="hero-artwork hero-artwork-cases">
      <div className="case-gallery">
        {projects.map((project, index) => (
          <div key={project} className={`case-project case-project-${index + 1}`}>
            <span>{project}</span>
            <i /><i /><i />
            <b>{index % 2 === 0 ? "+42%" : "LIVE"}</b>
          </div>
        ))}
      </div>
      <span className="case-gallery-rail" />
    </div>
  );
}

function PricingArtwork() {
  const blocks = ["WEB", "AUTO", "DATA", "AI", "APP", "API", "CARE"];
  return (
    <div className="hero-artwork hero-artwork-pricing">
      <div className="pricing-builder">
        {blocks.map((block, index) => (
          <div key={block} className={`pricing-block pricing-block-${index + 1}`}>
            <span>{block}</span><i />
          </div>
        ))}
      </div>
      <div className="pricing-scale"><span>STARTER</span><i /><b>ENTERPRISE</b></div>
      <div className="pricing-total"><span>MODULAR SCOPE</span><i>build what creates value</i></div>
    </div>
  );
}

function AboutArtwork() {
  const brandLetters = ["D", "E", "C", "R", "Y", "P", "T", "A", "I"];

  return (
    <div className="hero-artwork hero-artwork-about">
      <div className="about-fragments">
        {brandLetters.map((letter, index) => (
          <span key={`${letter}-${index}`} className={`about-fragment about-fragment-${index + 1}`}>{letter}</span>
        ))}
      </div>
      <div className="about-cube-wrap">
        <div className="about-cube">
          <span className="about-cube-face about-cube-front">Decrypt AI</span>
          <span className="about-cube-face about-cube-back">Decrypt AI</span>
          <span className="about-cube-face about-cube-right" />
          <span className="about-cube-face about-cube-left" />
          <span className="about-cube-face about-cube-top" />
          <span className="about-cube-face about-cube-bottom" />
        </div>
      </div>
      <span className="about-network about-network-1" />
      <span className="about-network about-network-2" />
      <span className="about-network about-network-3" />
    </div>
  );
}

function SignalArtwork({ scene }: { scene: (typeof scenes)["signal"] }) {
  return (
    <>
      <div className="hero-3d-grid" />
      <div className="hero-3d-orbit hero-3d-orbit-outer"><span /></div>
      <div className="hero-3d-orbit hero-3d-orbit-inner"><span /></div>
      <div className="hero-3d-core-wrap">
        <div className="hero-3d-core">
          <span className="hero-3d-face hero-3d-face-front">{scene.core}</span>
          <span className="hero-3d-face hero-3d-face-back">{scene.core}</span>
          <span className="hero-3d-face hero-3d-face-right" />
          <span className="hero-3d-face hero-3d-face-left" />
          <span className="hero-3d-face hero-3d-face-top" />
          <span className="hero-3d-face hero-3d-face-bottom" />
        </div>
      </div>
    </>
  );
}

function DecryptAIArtwork() {
  const cipherRows = [
    ["01001", "DECRYPT", "10110", "AI"],
    ["█▓░▒", "NEURAL", "▒░▓█", "NET"],
    ["XK9#7", "RESOLVE", "!@3%", "CLR"],
    ["110010", "SYSTEM", "001101", "ON"],
  ];
  const lockFaces = ["DECRYPT", "AI", "DECODE", "SOLVE", "CLEAR", "SYNC"];

  return (
    <div className="hero-artwork hero-artwork-decrypt">
      {/* Cipher stream rows — encrypted text resolving to readable */}
      <div className="decrypt-cipher-field">
        {cipherRows.map((row, ri) => (
          <div key={ri} className={`decrypt-cipher-row decrypt-cipher-row-${ri + 1}`}>
            {row.map((cell, ci) => (
              <span key={ci} className={`decrypt-cipher-cell ${ci % 2 === 1 ? "decrypt-cipher-resolved" : "decrypt-cipher-raw"}`}>
                {cell}
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* Central rotating lock / cube */}
      <div className="decrypt-lock-wrap">
        <div className="decrypt-lock-ring decrypt-lock-ring-outer"><span /></div>
        <div className="decrypt-lock-ring decrypt-lock-ring-mid"><span /></div>
        <div className="decrypt-lock-core-wrap">
          <div className="decrypt-lock-core">
            {lockFaces.map((face, i) => (
              <span key={i} className={`decrypt-lock-face decrypt-lock-face-${i + 1}`}>{face}</span>
            ))}
          </div>
        </div>
        {/* Orbiting data nodes */}
        {["AI", "ML", "NLP", "LLM"].map((label, i) => (
          <div key={label} className={`decrypt-data-node decrypt-data-node-${i + 1}`}>
            <i /><span>{label}</span>
          </div>
        ))}
      </div>

      {/* Resolve indicator — bottom bar */}
      <div className="decrypt-resolve-bar">
        <span className="decrypt-resolve-label">DECODING</span>
        <span className="decrypt-resolve-track"><span className="decrypt-resolve-fill" /></span>
        <span className="decrypt-resolve-pct">█ CLEAR</span>
      </div>
    </div>
  );
}

function SceneArtwork({ variant }: { variant: HeroSceneVariant }) {
  if (variant === "studio") return <StudioArtwork />;
  if (variant === "automations") return <AutomationsArtwork />;
  if (variant === "verticalos") return <VerticalOsArtwork />;
  if (variant === "industries-technology") return <IndustriesArtwork />;
  if (variant === "case-studies") return <CaseStudiesArtwork />;
  if (variant === "pricing") return <PricingArtwork />;
  if (variant === "about") return <AboutArtwork />;
  if (variant === "home") return <DecryptAIArtwork />;
  return <SignalArtwork scene={scenes.signal} />;
}

export function Hero3DScene({
  variant = "signal",
  caption,
  className,
}: {
  variant?: HeroSceneVariant;
  caption: string;
  className?: string;
}) {
  const shellRef = useRef<HTMLDivElement>(null);
  const scene = scenes[variant];

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const shell = shellRef.current;
    if (!shell || event.pointerType === "touch") return;

    const bounds = shell.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    shell.style.setProperty("--hero-rx", `${(-y * 7).toFixed(2)}deg`);
    shell.style.setProperty("--hero-ry", `${(x * 9).toFixed(2)}deg`);
    shell.style.setProperty("--hero-mx", `${(x * 14).toFixed(2)}px`);
    shell.style.setProperty("--hero-my", `${(y * 10).toFixed(2)}px`);
    shell.style.setProperty("--hero-readout-x", `${(-x * 3).toFixed(2)}px`);
    shell.style.setProperty("--hero-readout-y", `${(-y * 2).toFixed(2)}px`);
  }

  function resetPointer() {
    const shell = shellRef.current;
    if (!shell) return;
    shell.style.setProperty("--hero-rx", "0deg");
    shell.style.setProperty("--hero-ry", "0deg");
    shell.style.setProperty("--hero-mx", "0px");
    shell.style.setProperty("--hero-my", "0px");
    shell.style.setProperty("--hero-readout-x", "0px");
    shell.style.setProperty("--hero-readout-y", "0px");
  }

  return (
    <div
      ref={shellRef}
      className={cn("hero-3d-shell", className)}
      data-variant={variant}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      role="img"
      aria-label={`${scene.label}: ${scene.status}`}
    >
      <div className="hero-3d-halo" aria-hidden />
      <div className="hero-3d-stage" aria-hidden>
        <SceneArtwork variant={variant} />
        <div className="hero-3d-scan" />
      </div>

      <div className="hero-3d-readout">
        <div className="flex items-center justify-between gap-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
            {scene.label}
          </span>
          <span className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
            <i className="status-dot h-1.5 w-1.5 rounded-full bg-accent" /> live
          </span>
        </div>
        <p className="mt-2 font-mono text-[11px] tracking-[0.08em] text-text">{scene.status}</p>
        <p className="mt-2 line-clamp-2 text-[12px] leading-relaxed text-muted">{caption}</p>
      </div>
    </div>
  );
}
