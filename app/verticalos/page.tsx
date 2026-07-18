import type { Metadata } from "next";
import { InnerPageView } from "@/components/inner-page";
import { INNER_PAGES } from "@/lib/inner-content";
import { VerticalOsPageDetails } from "@/components/sections/verticalos-page-details";

const page = INNER_PAGES.verticalos;

export const metadata: Metadata = {
  metadataBase: new URL("https://decrypt-ai.tech"),
  title: "VerticalOS Manufacturing & Fabrication Operations Software | Decrypt",
  description:
    "Explore VerticalOS design-partner software for manufacturing, fabrication, stone, construction materials and distribution workflows, including quote-to-order, job tracking, inventory, mobile updates, approvals, ERP integrations and AI operations dashboards.",
  keywords: [
    "manufacturing operations software",
    "fabrication workflow software",
    "stone fabrication software",
    "construction materials software",
    "quote to order software",
    "job tracking software",
    "inventory visibility software",
    "mobile field operations app",
    "ERP integration for manufacturers",
    "AI operations dashboard",
  ],
  alternates: { canonical: "/verticalos" },
  openGraph: {
    title: "VerticalOS Operations Software for Manufacturing and Fabrication",
    description:
      "A design-partner roadmap for connected quote-to-order, job tracking, inventory, field updates, approvals and AI operations visibility.",
    url: "/verticalos",
    type: "website",
    siteName: "Decrypt AI Technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "VerticalOS Operations Software | Decrypt",
    description:
      "Design-partner operations software for manufacturing, fabrication, materials and distribution workflows.",
  },
};

const faqItems = page.sections.find((section) => section.layout === "faq")?.items ?? [];

const verticalOsStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://decrypt-ai.tech/verticalos#webpage",
      url: "https://decrypt-ai.tech/verticalos",
      name: "VerticalOS Manufacturing and Fabrication Operations Software",
      description:
        "VerticalOS is Decrypt's design-partner roadmap for connected operations software in manufacturing, fabrication, materials, distribution and inventory-heavy businesses.",
      isPartOf: { "@id": "https://decrypt-ai.tech/#website" },
      about: { "@id": "https://decrypt-ai.tech/verticalos#service" },
    },
    {
      "@type": "Service",
      "@id": "https://decrypt-ai.tech/verticalos#service",
      name: "VerticalOS Operations Software Design-Partner Service",
      serviceType:
        "Manufacturing, fabrication, materials and distribution operations software discovery and development",
      provider: {
        "@type": "Organization",
        name: "Decrypt AI Technologies",
        url: "https://decrypt-ai.tech",
      },
      areaServed: "Global",
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "Manufacturing, fabrication, construction materials, distribution and operations-heavy businesses",
      },
      description:
        "Design-partner services for quote-to-order workflows, job tracking, inventory visibility, mobile field updates, approvals, ERP-connected operations tools and AI dashboards.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://decrypt-ai.tech",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "VerticalOS",
          item: "https://decrypt-ai.tech/verticalos",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.label,
        acceptedAnswer: { "@type": "Answer", text: item.body },
      })),
    },
  ],
};

export default function VerticalOSPage() {
  return (
    <InnerPageView
      page={page}
      afterHero={<VerticalOsPageDetails />}
      structuredData={verticalOsStructuredData}
    />
  );
}
