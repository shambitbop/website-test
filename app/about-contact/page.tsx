import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { PageHero } from "@/components/page-hero";
import { About } from "@/components/sections/about";
import { InlineContactForm } from "@/components/sections/inline-contact-form";
import { SiteFooter } from "@/components/site-footer";
import { PageFaq } from "@/components/sections/page-faq";
import { ABOUT_CONTACT_FAQ } from "@/lib/page-faqs";
import { AboutPageDetails } from "@/components/sections/about-page-details";
import { PageStructuredData } from "@/components/page-structured-data";
import { PUBLIC_CONTACT_EMAIL } from "@/lib/contact-details";

export const metadata: Metadata = {
  metadataBase: new URL("https://decrypt-ai.tech"),
  title: "About Decrypt AI Technologies | Software, AI & Automation Team",
  description:
    "Learn how Decrypt AI Technologies plans, builds and supports custom software, AI workflows, automation, dashboards, websites, web and mobile apps, Microsoft 365 systems, QA and CI/CD.",
  keywords: [
    "Decrypt AI Technologies",
    "custom software development team",
    "AI workflow automation company",
    "web and mobile app development",
    "Microsoft 365 automation services",
    "AI dashboard development",
    "software QA and CI/CD support",
    "managed software support",
  ],
  alternates: { canonical: "/about-contact" },
  openGraph: {
    title: "About Decrypt AI Technologies",
    description:
      "A workflow-first software, AI and automation team building connected systems around real business operations.",
    url: "/about-contact",
    type: "website",
    siteName: "Decrypt AI Technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Decrypt AI Technologies",
    description:
      "Custom software, AI workflows, automation, apps, dashboards and managed support built around real business operations.",
  },
};

const aboutStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://decrypt-ai.tech/about-contact#webpage",
      url: "https://decrypt-ai.tech/about-contact",
      name: "About Decrypt AI Technologies",
      description:
        "About Decrypt AI Technologies, a workflow-first custom software, AI automation, web and mobile application development and managed support company.",
      mainEntity: { "@id": "https://decrypt-ai.tech/#organization" },
    },
    {
      "@type": "Organization",
      "@id": "https://decrypt-ai.tech/#organization",
      name: "Decrypt AI Technologies",
      alternateName: "Decrypt",
      url: "https://decrypt-ai.tech",
      email: PUBLIC_CONTACT_EMAIL,
      slogan: "We decrypt what others cannot.",
      description:
        "Decrypt AI Technologies builds custom software, AI workflows, automation, dashboards, websites, web and mobile apps, chatbots, voice agents, QA, CI/CD and managed digital systems.",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales and project inquiries",
        email: PUBLIC_CONTACT_EMAIL,
        availableLanguage: "English",
      },
      knowsAbout: [
        "Custom software development",
        "AI workflow automation",
        "Microsoft 365 and SharePoint automation",
        "Web and mobile application development",
        "AI assistants and RAG systems",
        "Business dashboards",
        "Software QA and CI/CD",
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://decrypt-ai.tech" },
        {
          "@type": "ListItem",
          position: 2,
          name: "About & Contact",
          item: "https://decrypt-ai.tech/about-contact",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: ABOUT_CONTACT_FAQ.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};

export default function AboutContactPage() {
  return (
    <>
      <PageStructuredData data={aboutStructuredData} />
      <SiteNav />
      <main>
        <PageHero
          kicker="ABOUT & CONTACT"
          title="We decrypt what others cannot."
          body="We turn manual and disconnected work into clear software, AI workflows, automation, dashboards, websites and apps. Decrypt begins by understanding the real process, then reveals the system hidden inside the complexity. Strategy, design, engineering, AI, QA and support stay connected from the first map to the working product."
          ctas={[
            { label: "Send My Project Brief", href: "#start" },
            { label: "Book a Discovery Call", href: "#start" },
            { label: "Tell Us About Your Project", href: "#start" },
          ]}
          visual="about"
        />
        <About />
        <AboutPageDetails />
        <InlineContactForm showAboutSummary />
        <PageFaq
          kicker="CONTACT FAQ"
          title="Questions before sending your project brief."
          items={ABOUT_CONTACT_FAQ}
        />
      </main>
      <SiteFooter />
    </>
  );
}
