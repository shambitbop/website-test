import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Container, Kicker } from "@/components/primitives";

export default function NotFound() {
  return (
    <>
      <SiteNav />
      <main className="min-h-[70vh] pt-32">
        <Container>
          <div className="max-w-3xl">
            <Kicker>404</Kicker>
            <h1 className="font-display mt-6 text-[clamp(2.5rem,7vw,5rem)]">
              This page has not been decrypted yet.
            </h1>
            <p className="mt-6 max-w-2xl text-[clamp(1rem,1.5vw,1.18rem)] leading-relaxed text-muted">
              The link may be broken or the page may have moved. You can return home, explore
              Decrypt Studio or send us the workflow you are trying to solve.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              {[
                ["Return Home", "/"],
                ["See What We Can Build", "/studio"],
                ["Send My Workflow", "/about-contact#start"],
              ].map(([label, href], i) => (
                <Link
                  key={label}
                  href={href}
                  data-simple-contact={label === "Send My Workflow" ? label : undefined}
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
