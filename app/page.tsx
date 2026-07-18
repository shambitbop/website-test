import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { WhatWeDo } from "@/components/sections/what-we-do";
import { WorkflowIntelligence } from "@/components/sections/workflow-intelligence";
import { CompactProjectCta } from "@/components/sections/compact-project-cta";
import { HowWeWork } from "@/components/sections/how-we-work";
import { CaseStudies } from "@/components/sections/case-studies";
import { TrustSystems } from "@/components/sections/trust-systems";
import { Pricing } from "@/components/sections/pricing";
import { ContactForm } from "@/components/sections/contact-form";
import { Faq } from "@/components/sections/faq";
import { HomeCta } from "@/components/sections/home-cta";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <WhatWeDo />
        <WorkflowIntelligence />
        <CompactProjectCta />
        <HowWeWork />
        <TrustSystems />
        <CaseStudies linkCardsToPage />
        <Pricing linkCardsToPage />
        <ContactForm showAboutSummary />
        <Faq />
        <HomeCta />
      </main>
      <SiteFooter />
    </>
  );
}
