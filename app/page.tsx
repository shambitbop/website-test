import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { WhatWeDo } from "@/components/sections/what-we-do";
import { WorkflowIntelligence } from "@/components/sections/workflow-intelligence";
import { CompactProjectCta } from "@/components/sections/compact-project-cta";
import { HowWeWork } from "@/components/sections/how-we-work";
import { TrustSystems } from "@/components/sections/trust-systems";
import {
  DeferredHomeCaseStudies,
  DeferredHomeContact,
  DeferredHomePricing,
} from "@/components/deferred-home-sections";
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
        <DeferredHomeCaseStudies />
        <DeferredHomePricing />
        <DeferredHomeContact />
        <Faq />
        <HomeCta />
      </main>
      <SiteFooter />
    </>
  );
}
