import type { Metadata, Viewport } from "next";
import { clashDisplay, geistMono, geistSans } from "./fonts";
import { AmbientBackground } from "@/components/ambient-background";
import { StructuredData } from "@/components/structured-data";
import { PageRobot } from "@/components/page-robot";
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
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESC,
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
      className={`dark ${geistSans.variable} ${geistMono.variable} ${clashDisplay.variable}`}
      suppressHydrationWarning
    >
      <body>
        <SimpleContactFormProvider>
          <AmbientBackground />
          <StructuredData />
          {children}
          <BackToTop />
          <PageRobot />
        </SimpleContactFormProvider>
      </body>
    </html>
  );
}
