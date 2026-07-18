import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Container, Kicker } from "@/components/primitives";

export const metadata: Metadata = {
  title: "Thank You | Decrypt AI Technologies",
  description: "Your brief is in. Decrypt will review your workflow and reply with practical next steps.",
};

export default function ThankYouPage() {
  return (
    <>
      <SiteNav />
      <main className="min-h-[70vh] pt-32">
        <Container>
          <div className="max-w-3xl">
            <Kicker>BRIEF RECEIVED</Kicker>
            <h1 className="font-display mt-6 text-[clamp(2.5rem,7vw,5rem)]">
              Your brief is in. Now we decode it.
            </h1>
            <p className="mt-6 max-w-2xl text-[clamp(1rem,1.5vw,1.18rem)] leading-relaxed text-muted">
              Thanks for contacting Decrypt AI Technologies. We will review your project
              details and respond with practical next steps. In the meantime, you can explore
              our Studio, Automations and Case Studies pages to see how we turn messy workflows into
              governed AI systems and business software.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              {[
                ["See What We Can Build", "/studio"],
                ["Review Similar Case Studies", "/case-studies"],
                ["Find Out What We Can Automate", "/automations"],
              ].map(([label, href], i) => (
                <Link
                  key={label}
                  href={href}
                  className={
                    i === 0
                      ? "group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-[14px] font-medium text-bg transition-[filter] hover:brightness-110"
                      : "group inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-6 py-3 font-mono text-[14px] text-text transition-colors hover:border-accent/50"
                  }
                >
                  {label}
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
