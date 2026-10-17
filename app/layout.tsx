import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { clashDisplay } from "./fonts";
import { AmbientBackground } from "@/components/ambient-background";
import { StructuredData } from "@/components/structured-data";
import { DeferredPageRobot } from "@/components/deferred-page-robot";
import { SimpleContactFormProvider } from "@/components/simple-contact-form";
import { BackToTop } from "@/components/back-to-top";
import "./globals.css";

const SITE_TITLE = "Decrypt AI Technologies | AI Software, Automation, Dashboards & Business Systems";
const SITE_DESC =
  "Decrypt AI Technologies turns messy workflows into governed AI systems, custom software, dashboards, automation, websites, apps, chatbots, voice agents and business systems.";

export const metadata: Metadata = {
  metadataBase: new URL("https://decrypt-ai.tech"),
  title: SITE_TITLE,
  description: SITE_DESC,
  applicationName: "Decrypt",
  keywords: [
    "AI software studio",
    "custom software development",
    "AI workflow automation",
    "AI assistants",
    "RAG systems",
    "chatbot integration",
    "voice agent integration",
    "web app development",
    "mobile app development",
    "ERP development",
    "secure software development",
    "application security and system hardening",
    "website malware risk reduction",
    "security patching and vulnerability remediation",
    "SharePoint Power Automate services",
    "WordPress development and maintenance",
  ],
  authors: [{ name: "Decrypt" }],
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESC,
    type: "website",
    siteName: "Decrypt",
    locale: "en_US",
    images: [
      {
        url: "/decrypt-ai-logo.png",
        width: 1254,
        height: 1254,
        alt: "Decrypt AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESC,
    images: ["/decrypt-ai-logo.png"],
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#070809",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${clashDisplay.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Script id="reset-scroll-on-reload" strategy="beforeInteractive">
          {`
            (function () {
              var entries = performance.getEntriesByType
                ? performance.getEntriesByType("navigation")
                : [];
              var isReload = entries.length
                ? entries[0].type === "reload"
                : performance.navigation && performance.navigation.type === 1;

              // Preserve intentional section links, but never restore an old
              // scroll offset when a plain page URL is refreshed.
              if (!isReload || window.location.hash) return;

              var controlsRestoration = "scrollRestoration" in window.history;
              if (controlsRestoration) window.history.scrollRestoration = "manual";

              function resetScroll() {
                var root = document.documentElement;
                var previousBehavior = root.style.scrollBehavior;
                root.style.scrollBehavior = "auto";
                window.scrollTo(0, 0);
                root.style.scrollBehavior = previousBehavior;
              }

              resetScroll();
              document.addEventListener("DOMContentLoaded", resetScroll, { once: true });
              window.addEventListener("load", resetScroll, { once: true });
              window.addEventListener("pageshow", function () {
                resetScroll();
                window.requestAnimationFrame(function () {
                  resetScroll();
                  if (controlsRestoration) window.history.scrollRestoration = "auto";
                });
              }, { once: true });
            })();
          `}
        </Script>
        <SimpleContactFormProvider>
          <AmbientBackground />
          <StructuredData />
          {children}
          <BackToTop />
          <DeferredPageRobot />
        </SimpleContactFormProvider>
      </body>
    </html>
  );
}
