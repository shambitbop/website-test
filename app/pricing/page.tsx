import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { PageHero } from "@/components/page-hero";
import { Pricing } from "@/components/sections/pricing";
import { SiteFooter } from "@/components/site-footer";
import { HomeCta } from "@/components/sections/home-cta";
import { PageFaq } from "@/components/sections/page-faq";
import { PRICING_PAGE_FAQ } from "@/lib/page-faqs";
import { PRICING_PAGE_GROUPS } from "@/lib/pricing-page-content";

export const metadata: Metadata = {
  title: "Pricing | Decrypt AI Technologies",
  description:
    "Current Decrypt pricing for landing pages, AI automation, AI-powered software, discovery, integrations, web apps, MVPs, mobile apps, QA, software support and enterprise systems.",
};

export default function PricingPage() {
  return (
    <>
      <SiteNav />
      <main>
        <PageHero
          kicker="PRICING"
          title="Clear pricing. Flexible scope."
          body="Compare starter ranges for websites, software, apps, automation, AI, QA, maintenance and larger custom systems. Begin with one focused module or combine services into a connected delivery plan. Final pricing is shaped around scope, integrations, risk, users and the level of support your system needs."
          ctas={[
            { label: "Get a Software Quote", href: "/about-contact#start" },
            { label: "Price an Automation", href: "/about-contact#start" },
            { label: "Send My Project Brief", href: "/about-contact#start" },
          ]}
          visual="pricing"
        />
        <Pricing groups={PRICING_PAGE_GROUPS} />
        <PageFaq
          kicker="PRICING FAQ"
          title="Questions about scope, estimates and project cost."
          items={PRICING_PAGE_FAQ}
        />
        <HomeCta />
      </main>
      <SiteFooter />
    </>
  );
}
