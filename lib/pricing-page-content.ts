import { PRICING_GROUPS, type PricingGroup } from "@/lib/content";

const BUSINESS_WEBSITES_GROUP: PricingGroup = {
  slug: "business-websites-ecommerce",
  title: "Business Websites & Ecommerce",
  rangeSummary: "$400 to $4,000+",
  blurb:
    "Larger business websites, WordPress builds, ecommerce storefronts, content systems and conversion-focused redesigns.",
  items: [
    {
      name: "Business / WordPress Website",
      range: "$500 to $2,500+",
      body: "Multi-page business or WordPress website with responsive design, CMS setup, service pages, contact forms, analytics, SEO-ready structure, security basics and deployment support.",
    },
    {
      name: "Ecommerce Website",
      range: "$800 to $4,000+",
      body: "Ecommerce storefront with product and category structure, payments, customer journeys, responsive design, essential integrations, analytics, testing and launch support.",
    },
    {
      name: "Website Redesign & Conversion Improvement",
      range: "$400 to $2,000+",
      body: "Focused redesign covering information architecture, key service or landing pages, mobile usability, calls to action, forms, performance improvements and conversion pathways.",
    },
  ],
};

export const PRICING_PAGE_GROUPS: PricingGroup[] = [
  ...PRICING_GROUPS,
  BUSINESS_WEBSITES_GROUP,
];
