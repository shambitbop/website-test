import type { Metadata } from "next";
import { InnerPageView } from "@/components/inner-page";
import { INNER_PAGES } from "@/lib/inner-content";
import { STUDIO_SERVICE_DETAILS } from "@/lib/studio-service-details";

const page = INNER_PAGES.studio;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
};

const studioServices = page.sections.find((section) => section.eyebrow === "STUDIO SERVICES")?.items ?? [];
const studioFaq = page.sections.find((section) => section.layout === "faq")?.items ?? [];

const studioStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://decrypt-ai.tech/studio#webpage",
      url: "https://decrypt-ai.tech/studio",
      name: page.metaTitle,
      description: page.metaDescription,
      isPartOf: { "@id": "https://decrypt-ai.tech/#website" },
      about: { "@id": "https://decrypt-ai.tech/studio#service" },
    },
    {
      "@type": "Service",
      "@id": "https://decrypt-ai.tech/studio#service",
      name: "Decrypt Studio Custom Software and AI Development",
      serviceType: "Custom software, web and mobile application, AI workflow and business systems development",
      provider: {
        "@type": "Organization",
        name: "Decrypt AI Technologies",
        url: "https://decrypt-ai.tech",
      },
      areaServed: "Worldwide",
      description: page.directAnswer,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Decrypt Studio Services",
        itemListElement: studioServices.map((service) => {
          const detail = STUDIO_SERVICE_DETAILS[service.label];
          return {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.label,
              description: detail?.directAnswer ?? service.body,
              serviceOutput: detail?.outcomes.join("; "),
              audience: {
                "@type": "BusinessAudience",
                audienceType: detail?.useCases.join(", ") ?? "Businesses with complex workflows",
              },
            },
          };
        }),
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: studioFaq.map((item) => ({
        "@type": "Question",
        name: item.label,
        acceptedAnswer: { "@type": "Answer", text: item.body },
      })),
    },
  ],
};

export default function StudioPage() {
  return <InnerPageView page={page} structuredData={studioStructuredData} />;
}
