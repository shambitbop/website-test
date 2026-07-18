"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { LogoMark } from "./logo";
import { scrollPageToTop } from "./back-to-top";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/content";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const handleSamePageClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname !== href || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (window.location.hash) window.history.replaceState(null, "", href);
    scrollPageToTop();
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center">
      <div
        className={cn(
          "pointer-events-auto isolate flex items-center border border-line/90 bg-[#090b0d]/[0.97] shadow-[0_16px_48px_-18px_rgba(0,0,0,0.9)] backdrop-blur-xl transition-all duration-500 ease-out",
          scrolled
            ? "mt-3 w-[calc(100%_-_1.5rem)] max-w-[var(--maxw)] justify-between gap-3 rounded-full px-4 py-2 md:px-6"
            : "mt-0 h-16 w-full max-w-[var(--maxw)] justify-between rounded-b-2xl border-t-0 px-[var(--gutter)]"
        )}
      >
        {/* logo */}
        <Link
          href="/"
          onClick={(event) => handleSamePageClick(event, "/")}
          aria-label="Decrypt home"
          className={cn(
            "flex items-center rounded-full transition-colors",
            scrolled ? "px-1.5" : ""
          )}
        >
          <LogoMark className="h-7 w-7" />
          <span
            className={cn(
              "ml-2 font-mono text-[15px] font-medium tracking-tight text-text transition-all",
              scrolled ? "hidden lg:inline" : "inline"
            )}
          >
            decrypt
            <span className="caret" />
          </span>
        </Link>

        {/* links */}
        <nav
          className={cn(
            "hidden items-center rounded-full border border-line/80 bg-bg/95 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.025)] lg:flex",
            scrolled ? "gap-0.5 lg:gap-1" : "gap-1",
          )}
          aria-label="Primary"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={(event) => handleSamePageClick(event, href)}
              className={cn(
                "inline-flex items-center rounded-full border border-transparent px-2.5 py-1.5 font-mono font-medium text-text/90 transition-all duration-300 hover:border-accent/35 hover:bg-accent/[0.1] hover:text-accent",
                scrolled
                  ? "text-[12px]"
                  : "text-[13px]",
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* actions */}
        <div className={cn("flex items-center", scrolled ? "gap-1 pl-1" : "gap-3")}>
          {scrolled && <span className="mx-1 h-5 w-px bg-line" />}
          <Link
            href="/about-contact#start"
            data-simple-contact="Get a Free Workflow Review"
            aria-label="Get a free workflow review"
            className={cn(
              "group inline-flex items-center justify-center gap-1.5 rounded-full bg-accent font-mono font-medium text-bg transition-[filter] duration-300 hover:brightness-110",
              scrolled
                ? "whitespace-nowrap px-3 py-2 text-[12px]"
                : "px-4 py-2 text-[13px]",
            )}
          >
            {scrolled ? (
              <>
                <span className="xl:hidden">Free review</span>
                <span className="hidden xl:inline">Free workflow review</span>
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                  {"->"}
                </span>
              </>
            ) : (
              <>
                <span className="lg:hidden">Free review</span>
                <span className="hidden lg:inline">Free workflow review</span>
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                  {"->"}
                </span>
              </>
            )}
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-bg/90 text-text transition-colors hover:border-accent/50 hover:text-accent lg:hidden"
          >
            {mobileOpen ? <X size={17} aria-hidden /> : <Menu size={17} aria-hidden />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile primary"
          className="pointer-events-auto absolute inset-x-3 top-[4.5rem] max-h-[calc(100svh-5.5rem)] overflow-y-auto overscroll-contain rounded-2xl border border-line bg-[#090b0d]/[0.98] p-3 shadow-[0_24px_60px_-22px_rgba(0,0,0,0.95)] backdrop-blur-xl lg:hidden"
        >
          <div className="grid gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={(event) => {
                  handleSamePageClick(event, href);
                  setMobileOpen(false);
                }}
                aria-current={pathname === href ? "page" : undefined}
                className={cn(
                  "flex min-h-11 items-center justify-between rounded-xl px-4 py-2.5 font-mono text-[13px] transition-colors",
                  pathname === href
                    ? "bg-accent/[0.1] text-accent"
                    : "text-text hover:bg-surface-2 hover:text-accent",
                )}
              >
                {label}
                <span aria-hidden className="text-accent">{"->"}</span>
              </Link>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
}
