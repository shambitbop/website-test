"use client";

import { ReactNode, useCallback, useLayoutEffect, useRef } from "react";
import { X } from "lucide-react";

export function Modal({
  open,
  onClose,
  children,
  labelledBy,
  headerLabel = "decrypt - file",
}: {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  labelledBy: string;
  headerLabel?: string;
}) {
  const scrollYRef = useRef(0);
  const scrollXRef = useRef(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const onCloseRef = useRef(onClose);

  useLayoutEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useLayoutEffect(() => {
    if (!open) return;
    scrollYRef.current = window.scrollY;
    scrollXRef.current = window.scrollX;
    const body = document.body;
    const root = document.documentElement;
    const previousBodyStyles = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
    };
    const previousRootStyles = {
      overflow: root.style.overflow,
      scrollBehavior: root.style.scrollBehavior,
    };

    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = "0";
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    root.style.overflow = "hidden";
    root.style.scrollBehavior = "auto";
    panelRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onCloseRef.current();
        return;
      }

      const scrollArea = scrollRef.current;
      if (!scrollArea) return;
      const target = e.target as HTMLElement | null;
      const isEditable = target?.matches("input, textarea, select, [contenteditable='true']");
      if (isEditable) return;

      const page = Math.max(180, scrollArea.clientHeight * 0.82);
      const distances: Partial<Record<string, number>> = {
        ArrowDown: 48,
        ArrowUp: -48,
        PageDown: page,
        PageUp: -page,
        " ": e.shiftKey ? -page : page,
      };

      if (e.key === "Home") {
        e.preventDefault();
        scrollArea.scrollTo({ top: 0, behavior: "smooth" });
      } else if (e.key === "End") {
        e.preventDefault();
        scrollArea.scrollTo({ top: scrollArea.scrollHeight, behavior: "smooth" });
      } else if (distances[e.key] !== undefined) {
        e.preventDefault();
        scrollArea.scrollBy({ top: distances[e.key], behavior: "smooth" });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      // Unlock the page and restore the previous viewport position without
      // introducing a stale offset. This keeps the background stationary while
      // the modal is open and avoids re-centering the dialog at the wrong part of
      // the page when it closes.
      root.style.overflow = previousRootStyles.overflow;
      root.style.scrollBehavior = previousRootStyles.scrollBehavior;
      body.style.overflow = previousBodyStyles.overflow;
      body.style.position = previousBodyStyles.position;
      body.style.top = previousBodyStyles.top;
      body.style.left = previousBodyStyles.left;
      body.style.right = previousBodyStyles.right;
      body.style.width = previousBodyStyles.width;
      window.scrollTo({ top: scrollYRef.current, left: scrollXRef.current, behavior: "auto" });
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const handleAnchorClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const anchor = (e.target as HTMLElement).closest<HTMLAnchorElement>(
        "a[href^='#']"
      );
      if (!anchor) return;
      e.preventDefault();
      const id = anchor.getAttribute("href");
      onClose();
      window.setTimeout(() => {
        const el = id ? document.querySelector(id) : null;
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 320);
    },
    [onClose]
  );

  if (!open) return null;

  return (
        <>
          {/* Backdrop - separate element, always behind the panel */}
          <div
            className="fixed inset-0 z-[100] bg-bg/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* The panel remains centred inside the viewport. Its body scrolls
              independently, keeping the header and both viewport insets visible. */}
          <div className="pointer-events-none fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-6">
              <div
                ref={panelRef}
                data-lenis-prevent
                role="dialog"
                aria-modal="true"
                aria-labelledby={labelledBy}
                tabIndex={-1}
                onClick={(e) => e.stopPropagation()}
                onWheel={(e) => e.stopPropagation()}
                onClickCapture={handleAnchorClick}
                className="pointer-events-auto flex max-h-[calc(100svh-2rem)] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] sm:max-h-[calc(100svh-3rem)]"
              >
                {/* Header */}
                <div className="z-20 flex shrink-0 items-center justify-between border-b border-line bg-surface/95 px-5 py-3 backdrop-blur-xl sm:px-7">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                    {headerLabel}
                  </span>
                  <button
                    onClick={onClose}
                    aria-label="Close"
                    data-cursor="lock"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-line bg-surface-2 text-muted transition-colors hover:border-accent/50 hover:text-text"
                  >
                    <X size={15} strokeWidth={2} aria-hidden />
                  </button>
                </div>

                <div
                  ref={scrollRef}
                  data-lenis-prevent
                  className="min-h-0 flex-1 touch-pan-y overflow-y-auto overscroll-contain"
                >
                  {children}
                </div>
              </div>
          </div>
        </>
  );
}
