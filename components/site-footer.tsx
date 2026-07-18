import Link from "next/link";
import { LogoMark } from "./logo";
import { FooterBackgroundGradient, TextHoverEffect } from "./ui/hover-footer";
import { BRAND, FOOTER_COLUMNS } from "@/lib/content";
import { PUBLIC_CONTACT_EMAIL } from "@/lib/contact-details";
import { getCtaCategory } from "@/lib/cta-audit";

function FooterLink({ href, label }: { href: string; label: string }) {
  const internal = href.startsWith("/");
  const cls =
    "text-[14px] text-muted transition-colors hover:text-accent";
  return internal ? (
    <Link
      href={href}
      data-simple-contact={getCtaCategory(label) === "quick-form" ? label : undefined}
      className={cls}
    >
      {label}
    </Link>
  ) : (
    <a href={href} className={cls}>
      {label}
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer className="px-[var(--gutter)] pb-8">
      <div className="glass relative mx-auto max-w-[var(--maxw)] overflow-hidden rounded-3xl">
        <FooterBackgroundGradient />

        <div className="relative z-10 p-6 sm:p-10 lg:p-14">
          <div className="flex items-center gap-2 font-mono text-[12px] tracking-[0.2em] text-muted uppercase">
            <span className="status-dot h-1.5 w-1.5 rounded-full bg-accent" />
            {"// all signals decoded"}
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1.3fr_2fr]">
            <div>
              <div className="flex items-center gap-3">
                <LogoMark className="h-8 w-8" />
                <span className="font-display text-3xl font-semibold tracking-[-0.02em] text-text">
                  decrypt
                </span>
              </div>
              <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-muted">
                {BRAND.footer}
              </p>
              <div className="mt-5 flex flex-col items-start gap-3">
                <a
                  href={`mailto:${PUBLIC_CONTACT_EMAIL}`}
                  className="inline-flex px-5 font-mono text-[13px] text-text underline decoration-accent/45 underline-offset-4 transition-colors hover:text-accent"
                >
                  {PUBLIC_CONTACT_EMAIL}
                </a>
                <a
                  href="/about-contact#start"
                  data-simple-contact="Get a Free Workflow Review"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-accent bg-accent px-5 py-2.5 font-mono text-[13px] font-semibold text-bg shadow-[0_10px_30px_-14px_var(--accent)] transition-[filter,box-shadow] hover:brightness-110 hover:shadow-[0_12px_34px_-12px_var(--accent)]"
                >
                  Get a Free Workflow Review
                  <span className="text-bg transition-transform duration-300 group-hover:translate-x-0.5">
                    {"->"}
                  </span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {FOOTER_COLUMNS.map((col) => (
                <nav key={col.title} aria-label={col.title}>
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                    <span className="text-accent">{"//"}</span> {col.title}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <FooterLink href={link.href} label={link.label} />
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>
          </div>

          <div className="mt-14 flex flex-col items-start gap-3 border-t border-line pt-6 font-mono text-[11px] text-muted sm:flex-row sm:items-center sm:justify-between sm:text-[12px]">
            <span>Copyright 2026 Decrypt AI Technologies</span>
            <Link href="/" className="transition-colors hover:text-text">
              back home
            </Link>
          </div>
        </div>

        {/* big hover wordmark */}
        <div className="relative z-10 -mt-6 hidden h-44 w-full opacity-95 sm:flex md:h-56">
          <TextHoverEffect text="DECRYPT" className="drop-shadow-[0_0_18px_rgba(22,217,140,0.12)]" />
        </div>
      </div>
    </footer>
  );
}
