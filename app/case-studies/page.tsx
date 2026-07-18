import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { PageHero } from "@/components/page-hero";
import { CaseStudies } from "@/components/sections/case-studies";
import { AiGovernancePanel, TrustSystems } from "@/components/sections/trust-systems";
import { ReviewCollection } from "@/components/sections/review-collection";
import { SiteFooter } from "@/components/site-footer";
import { HomeCta } from "@/components/sections/home-cta";
import { PageFaq } from "@/components/sections/page-faq";
import { CASE_STUDIES_FAQ } from "@/lib/page-faqs";

export const metadata: Metadata = {
  title: "Case Studies | Decrypt AI Technologies",
  description:
    "Project case studies from Decrypt AI Technologies across ERP systems, AI dashboards, web apps, mobile apps, SharePoint, Power Automate, WordPress, LMS, QA, CI/CD and support.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <SiteNav />
      <main>
        <PageHero
          kicker="CASE STUDIES"
          title="Real projects. Practical results."
          body="Explore software, AI dashboards, apps, websites, automation, QA and ongoing support delivered around real business workflows. Each case file shows what was connected, what Decrypt delivered and how the system supports clearer day-to-day work. Use the examples to see what a similar build could look like for your team."
          ctas={[
            { label: "Browse Case Studies", href: "#case-studies" },
            { label: "Build a Similar Project", href: "/about-contact#start" },
          ]}
          visual="case-studies"
        />
        <CaseStudies />
        <AiGovernancePanel />
        <TrustSystems showGovernance={false} />
        <ReviewCollection />
        <PageFaq
          kicker="CASE STUDY FAQ"
          title="Questions before starting a similar project."
          items={CASE_STUDIES_FAQ}
        />
        <HomeCta />
      </main>
      <SiteFooter />
    </>
  );
}
