// All visible copy for Decrypt. Hard rule: no em dashes, no en dashes.
// Use hyphens, commas, slashes, and "to" for ranges.

export const BRAND = {
  name: "Decrypt AI Technologies",
  shortName: "Decrypt",
  tagline: "We decrypt what others cannot.",
  statement: "We turn messy workflows into governed AI systems and business software.",
  promise: "Clear systems. Practical AI. Measurable business outcomes.",
  footer:
    "Decrypt AI Technologies builds AI workflow systems, custom software, automation, dashboards, websites, apps, chatbots, voice agents, and managed digital operations for teams that need clearer systems and fewer manual steps.",
} as const;

export const NAV_LINKS = [
  { label: "Studio", href: "/studio" },
  { label: "Automations", href: "/automations" },
  { label: "VerticalOS", href: "/verticalos" },
  { label: "Industries", href: "/industries-technology" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about-contact" },
] as const;

export const PREMISE_POINTS = [
  {
    label: "Disconnected tools.",
    body: "Approvals live in email, reports live in spreadsheets, documents sit in folders, and customer data is split across systems.",
  },
  {
    label: "Manual steps.",
    body: "Teams rely on repeated follow-ups, copy-paste reporting, slow handoffs, and workflows that only one person understands.",
  },
  {
    label: "Unclear AI value.",
    body: "AI only helps when it is connected to real documents, permissions, approvals, dashboards, customers, and measurable outcomes.",
  },
] as const;

export const PILLARS = [
  {
    label: "Decrypt Studio",
    body: "Custom software and AI systems designed around the way your business works.",
    cta: "Turn My Workflow Into Software",
    href: "/studio",
  },
  {
    label: "Decrypt Automations",
    body: "Connected automation for documents, approvals, Microsoft 365, and daily operations.",
    cta: "Find Out What We Can Automate",
    href: "/automations",
  },
  {
    label: "VerticalOS",
    body: "A design-partner roadmap for repeatable software in operations-heavy industries.",
    cta: "Join the Design-Partner Program",
    href: "/verticalos",
  },
] as const;

export const PROCESS_STEPS = [
  {
    n: "01",
    label: "Discover",
    body: "We listen to your goals, users, tools, documents, approvals, data, risks, and current bottlenecks.",
  },
  {
    n: "02",
    label: "Decode",
    body: "We turn unclear requirements into workflows, scope, user journeys, system logic, and measurable outcomes.",
  },
  {
    n: "03",
    label: "Build",
    body: "We design and build the software, automation, dashboard, app, website, chatbot, or AI workflow in focused delivery cycles.",
  },
  {
    n: "04",
    label: "Connect",
    body: "We integrate Microsoft 365, SharePoint, CRMs, databases, websites, APIs, and existing business tools.",
  },
  {
    n: "05",
    label: "Test with QA and CI/CD",
    body: "We test user flows, edge cases, data handling, automations, security assumptions, and release readiness.",
  },
  {
    n: "06",
    label: "Improve",
    body: "We support, monitor, fix, and improve the system after launch so it keeps working as your business changes.",
  },
] as const;

export const AI_SIGNALS = [
  {
    label: "Workflow value",
    body: "AI creates value when it is connected to documents, approvals, dashboards, support workflows, websites, CRMs, and internal systems.",
  },
  {
    label: "Governance matters",
    body: "Decrypt scopes AI around approved sources, permission control, human review, logging, fallback rules, monitoring, and measurable results.",
  },
  {
    label: "Business outcomes",
    body: "We measure approval time, document processing time, response time, hours saved, automated tasks, dashboard usage, and support volume.",
  },
] as const;

export const INDUSTRIES = [
  "Manufacturing and fabrication",
  "Construction materials and distribution",
  "SaaS and product teams",
  "Professional services",
  "Language services",
  "Education and LMS",
  "Healthcare clinics",
  "Ecommerce brands",
  "Logistics and real estate",
  "Finance and productivity products",
] as const;

export const TECHNOLOGY_AREAS = [
  "AI assistants, RAG systems, AI dashboards, and document intelligence",
  "Microsoft 365, SharePoint, Power Automate, Teams, Outlook, and Microsoft Graph",
  "Web apps, mobile apps, portals, admin panels, APIs, databases, and backend systems",
  "WordPress, landing pages, content systems, SEO/AEO/GEO structure, and analytics",
  "QA testing, CI/CD, release readiness, monitoring, bug fixes, and managed support",
  "Secure software development, application security, system hardening, security patching, vulnerability remediation, logging, and monitoring",
] as const;

export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  projectType: string;
  servicesDelivered: string;
  tag: string;
  overview: string;
  challenge: string;
  delivered: string[];
  businessValue: string;
  capabilities: string[];
  reflection: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "prime-marble-granite",
    client: "Prime Marble and Granite",
    industry: "Construction materials, stone fabrication, and operational management",
    projectType: "ERP system, mobile app, web app, and AI dashboards",
    servicesDelivered: "ERP system, mobile app, web app, AI-based dashboards, and workflow support",
    tag: "ERP / AI dashboards / mobile and web app",
    overview:
      "ERP system, mobile app, web app, and AI-based dashboards for operations-heavy business workflows.",
    challenge:
      "Operations-heavy businesses need structured systems for work status, users, reporting, and decisions across teams, while staying usable on web and mobile.",
    delivered: [
      "ERP structure for operational management",
      "Mobile and web application experience",
      "AI-based dashboard visibility",
      "Workflow-focused software planning",
      "Business-facing interface support",
    ],
    businessValue:
      "This project demonstrates Decrypt's ability to move beyond websites into full business-system delivery with ERP thinking, mobile access, and AI-ready reporting.",
    capabilities: [
      "ERP software development",
      "AI dashboard development",
      "Web app development",
      "Mobile app development",
      "Operations workflow design",
    ],
    reflection:
      "Decrypt supported a complex operations-focused software engagement involving ERP structure, mobile/web access, and AI-based dashboard visibility.",
  },
  {
    slug: "oono-ai",
    client: "Oono.ai",
    industry: "SaaS, marketing technology, and lead generation",
    projectType: "Website, web app, mobile apps, product management, and growth support",
    servicesDelivered:
      "Website creation, web and mobile apps, UI/UX, lead generation, QA, content, product management, product marketing, and CI/CD support",
    tag: "SaaS / web and mobile app / product growth",
    overview:
      "SaaS website, web/mobile app work, UI/UX, lead generation, QA, product management, product marketing, and CI/CD support.",
    challenge:
      "SaaS products need a clear website, usable product interfaces, content, growth workflows, QA, deployment discipline, and product alignment.",
    delivered: [
      "Website creation for a SaaS product presence",
      "Web app and mobile app support",
      "UI/UX support for product experience",
      "Lead generation and product marketing support",
      "QA, product management, and CI/CD support",
    ],
    businessValue:
      "This engagement shows Decrypt's ability to support a product across brand presence, product interface, mobile experience, growth messaging, testing, and release support.",
    capabilities: [
      "SaaS website creation",
      "Web and mobile app development",
      "Product management",
      "Lead generation",
      "QA and CI/CD support",
    ],
    reflection:
      "Decrypt supported product delivery across website creation, web/mobile app work, UI/UX, QA, lead generation, content, product management, and CI/CD support.",
  },
  {
    slug: "cesco-linguistic-services",
    client: "CESCO Linguistic Services",
    industry: "Language services, localization, interpreting, and translation",
    projectType: "WordPress, custom app work, automation, content operations, and project management",
    servicesDelivered:
      "WordPress development and maintenance, content, custom app work, SharePoint, Power Automate, documents, UI/UX, QA, and CI/CD support",
    tag: "WordPress / SharePoint / Power Automate",
    overview:
      "WordPress development, maintenance, content management, custom app work, SharePoint, Power Automate, documents, UI/UX, QA, and CI/CD support.",
    challenge:
      "Language services organizations manage content, documents, internal collaboration, automation, client-facing updates, and ongoing operational changes at once.",
    delivered: [
      "WordPress development and maintenance",
      "Content and document support",
      "Custom application development support",
      "SharePoint and Power Automate support",
      "UI/UX, QA, project management, and CI/CD support",
    ],
    businessValue:
      "This engagement demonstrates Decrypt's ability to support digital operations as an ongoing partner across content, automation, Microsoft 365, QA, and technical support.",
    capabilities: [
      "WordPress development",
      "SharePoint workflows",
      "Power Automate",
      "Content operations",
      "QA and CI/CD support",
    ],
    reflection:
      "Decrypt provided digital operations support across WordPress, content, documents, SharePoint, Power Automate, custom app work, QA, and project management.",
  },
  {
    slug: "hisab-kitab",
    client: "Hisab Kitab",
    industry: "Finance, expense management, and personal productivity",
    projectType: "Android mobile application",
    servicesDelivered: "Android app for expense sharing and management",
    tag: "Android / fintech utility app",
    overview: "Android expense-sharing and expense-management app.",
    challenge:
      "Expense sharing needs to be simple, fast, and easy to understand for users managing shared costs and personal finance records.",
    delivered: [
      "Android mobile app development",
      "Expense sharing workflow",
      "Expense management structure",
      "User-focused mobile interface",
    ],
    businessValue:
      "This project supports Decrypt's mobile app development credibility for consumer utility apps and finance-related workflows.",
    capabilities: [
      "Android app development",
      "Mobile product planning",
      "Expense workflow design",
      "Focused MVP delivery",
    ],
    reflection: "Decrypt helped shape a focused Android app around expense sharing and management.",
  },
  {
    slug: "t360nbeyond",
    client: "T360nBeyond",
    industry: "Education, interpreter training, continuing education, and LMS",
    projectType: "Website, LMS, and digital content operations",
    servicesDelivered: "Website creation and maintenance, content creation, email marketing, and LMS management",
    tag: "LMS / website / email marketing",
    overview: "Website, LMS management, content creation, and email marketing support.",
    challenge:
      "Education platforms require updated content, course visibility, user-friendly navigation, reliable LMS management, and communication with learners.",
    delivered: [
      "Website creation and maintenance",
      "Content creation and content updates",
      "Email marketing support",
      "LMS management",
    ],
    businessValue:
      "This engagement shows Decrypt's ability to support education and LMS businesses where content, courses, email communication, and maintenance must work together.",
    capabilities: ["Education websites", "LMS management", "Content operations", "Email marketing"],
    reflection: "Decrypt supported website, LMS, content, and email marketing needs for a training platform.",
  },
  {
    slug: "shopnado",
    client: "Shopnado",
    industry: "Ecommerce, Amazon marketplace growth, and brand operations",
    projectType: "Website creation, maintenance, content, and CI/CD support",
    servicesDelivered: "Website creation and maintenance, content creation, and CI/CD support",
    tag: "Ecommerce / website / CI/CD",
    overview: "Ecommerce website creation, maintenance, content, and CI/CD support.",
    challenge:
      "Marketplace and ecommerce service brands need a polished website that explains their value, supports consultations, and stays technically stable.",
    delivered: ["Website creation", "Website maintenance", "Content creation", "CI/CD support"],
    businessValue:
      "This project shows Decrypt's ability to support ecommerce and marketplace-facing brands with content, website delivery, and technical release support.",
    capabilities: ["Ecommerce websites", "Content creation", "Website maintenance", "CI/CD support"],
    reflection: "Decrypt supported website, content, and CI/CD needs for a marketplace-focused brand.",
  },
  {
    slug: "bliss-dental-center",
    client: "Bliss Dental Center",
    industry: "Healthcare, family dentistry, cosmetic dentistry, and emergency dental care",
    projectType: "Website creation, maintenance, content, QA, and CI/CD support",
    servicesDelivered: "Website creation and maintenance, content creation, QA testing, and CI/CD support",
    tag: "Healthcare / website / QA",
    overview: "Healthcare website creation, content, QA, maintenance, and CI/CD support.",
    challenge:
      "Healthcare websites must be clear, trustworthy, easy to navigate, and reliable so patients can find services and contact the clinic with confidence.",
    delivered: ["Website creation", "Website maintenance", "Healthcare content support", "QA testing", "CI/CD support"],
    businessValue:
      "This engagement demonstrates Decrypt's ability to support healthcare websites where clarity, trust, local visibility, QA, and uptime matter.",
    capabilities: ["Healthcare websites", "Website maintenance", "Content creation", "QA testing", "CI/CD support"],
    reflection:
      "Decrypt supported healthcare website creation, content, QA, maintenance, and CI/CD needs.",
  },
];

export type PricingItem = {
  name: string;
  range: string;
  body: string;
};

export type PricingGroup = {
  slug: string;
  title: string;
  rangeSummary: string;
  blurb: string;
  items: PricingItem[];
};

export const PRICING_GROUPS: PricingGroup[] = [
  {
    slug: "starter-websites",
    title: "Starter Websites",
    rangeSummary: "$100 to $500",
    blurb: "Landing pages and small business websites for teams that need a fast, clear digital front door.",
    items: [
      {
        name: "Landing Page / Small Business Website",
        range: "$100 to $500",
        body: "Custom landing page or small business website, 1 to 3 pages, mobile-responsive layout, contact forms, SEO-friendly structure, SSL certificate, and domain deployment support.",
      },
    ],
  },
  {
    slug: "automation-ai",
    title: "Automation and AI",
    rangeSummary: "$200 to $3,000+",
    blurb: "AI workflow systems, automation pilots, RAG systems, and software integrations.",
    items: [
      {
        name: "AI Automation",
        range: "$200 to $1,200+",
        body: "AI workflow automation, document routing, data extraction, and connected business apps to reduce manual entry. Includes workflow audit, setup, testing, and handoff documentation.",
      },
      {
        name: "AI-Powered Software Solutions",
        range: "$250 to $3,000+",
        body: "AI integration into CRM, ERP, and business software, intelligent workflows, document intelligence, AI reporting, automated decision support, feasibility check, pilot implementation, testing, and 1 month refinement.",
      },
      {
        name: "Software Integration Services",
        range: "$300 to $3,000+",
        body: "CRM, ERP, SaaS, API, payment, email, analytics, automation, and AI tool integrations for focused use cases and small-to-mid business workflows.",
      },
    ],
  },
  {
    slug: "software",
    title: "Software and Apps",
    rangeSummary: "$450 to $8,000+",
    blurb: "Custom software, backend systems, MVPs, web apps, and mobile apps.",
    items: [
      {
        name: "Software Strategy and Product Discovery",
        range: "$300 to $1,200",
        body: "AI-assisted product discovery, PRD and SRS creation, technical feasibility analysis, software architecture consulting, user flows, and a fixed-price build quote.",
      },
      {
        name: "Backend Development",
        range: "$450 to $4,000+",
        body: "Starter backend development for APIs, databases, admin logic, authentication, dashboards, app backends, and integration-ready foundations for small systems.",
      },
      {
        name: "Web Application Development",
        range: "$450 to $5,000+",
        body: "Custom web applications, SaaS platforms, enterprise portals, business dashboards, user authentication, database, admin panel, API integrations, PRD/SRS documentation, and 1 month support.",
      },
      {
        name: "MVP Software Development",
        range: "$450 to $5,000+",
        body: "Lean MVP development for simple web apps, dashboards, portals, internal tools, and early SaaS validation. Larger AI-ready MVPs are quoted separately.",
      },
      {
        name: "Mobile App Development",
        range: "$450 to $8,000+",
        body: "iOS, Android, Flutter, and React Native apps with backend API, testing, app-store submission support, and 1 month support.",
      },
      {
        name: "Custom Software Development",
        range: "$450 to $6,000+",
        body: "Internal business systems, CRM development, ERP development, workflow automation, one core workflow, database, basic PRD, and 2 weeks support.",
      },
    ],
  },
  {
    slug: "support",
    title: "Support and QA",
    rangeSummary: "$100/mo to $2,000+",
    blurb: "Maintenance, managed support, software testing, release readiness, and QA.",
    items: [
      {
        name: "Software Maintenance & Support",
        range: "$100/mo to $1,000/mo",
        body: "Website and software maintenance, bug fixes, small updates, speed improvements, security patches, integration checks, and AI workflow refinements for smaller systems.",
      },
      {
        name: "Software QA Services",
        range: "$250 to $2,000+",
        body: "Manual testing, basic regression testing, API validation, mobile/web QA checks, bug documentation, and AI workflow spot checks for small projects.",
      },
    ],
  },
  {
    slug: "enterprise",
    title: "Enterprise Systems",
    rangeSummary: "$2,500 to $15,000+",
    blurb: "ERP, business automation, legacy modernization, and operations-heavy systems.",
    items: [
      {
        name: "Enterprise Systems & Business Automation",
        range: "$2,500 to $15,000+",
        body: "Enterprise software, ERP systems, approval workflows, business process automation, legacy modernization, architecture design, and 3 months support. Complex enterprise projects require custom quotes.",
      },
    ],
  },
];

export const HOMEPAGE_FAQ = [
  {
    q: "What does Decrypt AI Technologies do?",
    a: "Decrypt builds AI workflow systems, custom software, dashboards, automation, websites, apps, chatbots, voice agents, Microsoft 365 workflows, QA, CI/CD, and managed digital support for businesses.",
  },
  {
    q: "Does Decrypt only build AI products?",
    a: "No. Decrypt builds practical business systems first and adds AI where it improves speed, accuracy, search, reporting, customer experience, document handling, or decision support.",
  },
  {
    q: "Can Decrypt improve an existing system?",
    a: "Yes. Decrypt can improve existing websites, WordPress sites, CRMs, SharePoint systems, web apps, mobile apps, dashboards, databases, automations, and internal tools.",
  },
  {
    q: "Can Decrypt help if my idea is unclear?",
    a: "Yes. Decrypt starts with discovery and workflow mapping so unclear ideas become a clear scope, system plan, roadmap, and delivery path.",
  },
  {
    q: "How much does custom software cost?",
    a: "Focused custom software projects currently start within the published pricing ranges. Larger AI features, integrations, and complex systems are quoted after discovery.",
  },
  {
    q: "Can Decrypt start with a small project?",
    a: "Yes. Many engagements begin with a landing page, automation pilot, discovery package, QA support, chatbot setup, website improvement, or focused MVP.",
  },
  {
    q: "Do you offer monthly support?",
    a: "Yes. Decrypt supports websites, software systems, QA, CI/CD, SharePoint, Power Automate, AI workflows, monitoring, fixes, and ongoing improvements.",
  },
  {
    q: "Why are complex systems quoted after discovery?",
    a: "Complex systems depend on workflows, users, data, integrations, permissions, AI requirements, and support needs. Discovery keeps scope accurate and reduces surprises.",
  },
  {
    q: "How long does a typical project take?",
    a: "Timelines depend on scope. Focused landing pages and pilots can move quickly, while custom software and integrated AI systems are planned in milestones after discovery.",
  },
  {
    q: "Can Decrypt connect to our existing tools and data?",
    a: "Yes. Decrypt can integrate with Microsoft 365, SharePoint, CRMs, ERPs, APIs, databases, websites, documents, email, analytics, and other approved business systems.",
  },
  {
    q: "How do you handle security and AI governance?",
    a: "Decrypt plans permissions, approved data sources, human review, auditability, testing, monitoring, and escalation paths around the risk level of each workflow.",
  },
  {
    q: "Can Decrypt support our cybersecurity requirements?",
    a: "Decrypt applies secure-by-design practices such as access control, secrets management, safer data handling, logging, dependency updates, testing, and deployment reviews. For penetration testing, compliance certification, security audits, or incident response, we can work alongside qualified cybersecurity specialists.",
  },
] as const;

export const ABOUT_INTRO =
  "Decrypt AI Technologies helps businesses turn unclear, manual, and disconnected work into structured software, AI workflows, automation, dashboards, websites, apps, chatbots, voice agents, and managed digital systems.";

export const ABOUT_BODY =
  "We combine software strategy, AI integration, workflow automation, UI/UX, web and mobile development, Microsoft 365 automation, WordPress, dashboards, QA, CI/CD, content systems, and long-term support. Our work is practical: reduce manual steps, improve visibility, connect tools, support customers faster, and make business systems easier to manage.";

export const ABOUT_DIFFERENTIATORS = [
  "We decode unclear business problems before writing code.",
  "We build around real workflows, not generic templates.",
  "We use AI where it improves operations, search, reporting, documents, customer experience, or decision support.",
  "We connect software, automation, content, marketing systems, QA, and CI/CD into one delivery path.",
  "We support systems after launch through monitoring, maintenance, and managed improvements.",
] as const;

export const OPERATING_PRINCIPLES = [
  { label: "Workflow first", value: "We start with the real process, not the tool." },
  { label: "Practical AI", value: "AI should make work faster, clearer, safer, or easier. If it does not improve the workflow, we do not force it." },
  { label: "Human review", value: "Important decisions need approval paths, audit trails, and human oversight." },
  { label: "Secure by design", value: "We plan access control, data handling, source grounding, and user permissions early." },
  { label: "Measurable outcomes", value: "We define what should improve before we build." },
  { label: "Support after launch", value: "Good systems need monitoring, fixes, updates, and continuous improvement." },
] as const;

export const ABOUT_STATS = [
  { label: "Commercial front door", value: "Decrypt Studio for custom software, AI systems, dashboards, apps, websites, QA, CI/CD, and support" },
  { label: "Operational offer", value: "Decrypt Automations for Microsoft 365, SharePoint, Power Automate, chatbots, voice agents, and managed workflows" },
  { label: "Roadmap direction", value: "VerticalOS for repeatable industry software built with design partners in operations-heavy businesses" },
] as const;

export const FOOTER_COLUMNS = [
  {
    title: "Services",
    links: [
      { label: "Studio", href: "/studio" },
      { label: "Automations", href: "/automations" },
      { label: "VerticalOS", href: "/verticalos" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Industries", href: "/industries-technology" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "About & Contact", href: "/about-contact" },
    ],
  },
  {
    title: "Start",
    links: [
      { label: "Pricing", href: "/pricing" },
      { label: "Free workflow review", href: "/about-contact#start" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
] as const;

export const NEED_OPTIONS = [
  "AI software or workflow system",
  "Custom software / internal tool",
  "ERP / CRM / dashboard",
  "Microsoft 365 / SharePoint / Power Automate",
  "RAG system / AI assistant / custom copilot",
  "Text chatbot",
  "Voice chatbot / voice agent",
  "Web application",
  "Mobile app",
  "Website / WordPress development",
  "Website maintenance",
  "Basic marketing system / landing page / CRM setup",
  "QA / CI/CD / software support",
  "LMS / education platform support",
  "Not sure yet",
] as const;

export const BUDGET_OPTIONS = [
  "Under $1k",
  "$1k to $5k",
  "$5k to $15k",
  "$15k+",
  "Not sure",
] as const;

export const TIMELINE_OPTIONS = [
  "ASAP",
  "1 to 3 months",
  "3 months or more",
  "Just exploring",
] as const;

export type ServicePage = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  kicker: string;
  primaryCta: string;
  secondaryCta: string;
  sections: {
    title: string;
    body: string;
    items: { label: string; body: string }[];
  }[];
};

export const SERVICE_PAGES: Record<string, ServicePage> = {
  studio: {
    slug: "studio",
    kicker: "DECRYPT STUDIO",
    metaTitle: "Decrypt Studio | AI Software, Custom Apps, Dashboards & Business Systems",
    title: "AI software and business systems for workflows that standard tools cannot handle.",
    description:
      "Decrypt Studio helps businesses plan, design, build, and improve custom software, internal tools, dashboards, websites, apps, AI assistants, text chatbots, voice agents, and ERP-connected operations systems.",
    primaryCta: "Turn My Workflow Into Software",
    secondaryCta: "Get a Custom Software Quote",
    sections: [
      {
        title: "Who this is for",
        body: "Decrypt Studio is for founders, operations leaders, managers, and business owners whose processes are too manual, too scattered, or too specific for generic software.",
        items: [
          { label: "Custom software", body: "Internal tools, portals, admin panels, custom CRMs, ERP-connected tools, and operations software." },
          { label: "AI systems", body: "AI assistants, RAG systems, document intelligence, AI dashboards, and workflow copilots." },
          { label: "Product delivery", body: "Web apps, mobile apps, backend systems, APIs, UI/UX, QA, CI/CD, and maintenance." },
        ],
      },
    ],
  },
  automations: {
    slug: "automations",
    kicker: "DECRYPT AUTOMATIONS",
    metaTitle: "Decrypt Automations | Microsoft 365, SharePoint, Power Automate & AI Workflows",
    title: "Automate the work that keeps getting repeated.",
    description:
      "Decrypt Automations builds Microsoft 365 workflows, SharePoint systems, Power Automate approvals, document routing, AI-assisted document processing, RAG systems, text chatbots, voice agents, and managed automation support.",
    primaryCta: "Request a Free Automation Audit",
    secondaryCta: "Find Out What We Can Automate",
    sections: [
      {
        title: "Automation that keeps working",
        body: "Automation should not be a fragile one-time setup. We design workflows with ownership, testing, documentation, monitoring, and support.",
        items: [
          { label: "Microsoft 365 automation", body: "SharePoint, Teams, Outlook, Forms, Excel, Power Automate, and Microsoft Graph workflows." },
          { label: "AI document workflows", body: "Document processing, internal search, RAG systems, custom copilots, and AI-assisted routing." },
          { label: "Chatbots and voice agents", body: "Lead qualification, customer support, internal helpdesk, booking, and workflow-connected AI agents." },
        ],
      },
    ],
  },
  verticalos: {
    slug: "verticalos",
    kicker: "VERTICALOS",
    metaTitle: "VerticalOS | Design-Partner Roadmap for Operations Software",
    title: "Industry software for operations-heavy businesses, built with real design partners.",
    description:
      "VerticalOS is Decrypt's roadmap for repeatable industry software in operations-heavy businesses. We are building it with real design partners, starting with fabrication, manufacturing, construction materials, distribution, and inventory-heavy workflows.",
    primaryCta: "Join the Design-Partner Program",
    secondaryCta: "Map My Operations Workflow",
    sections: [
      {
        title: "Built around real operations",
        body: "VerticalOS remains a roadmap and design-partner narrative until repeatable industry IP is market-proven. That means the system is being shaped with real workflows before it is positioned as a mature product.",
        items: [
          { label: "Operations modules", body: "Job tracking, quote-to-order workflows, inventory visibility, field updates, approvals, and reporting." },
          { label: "Industry focus", body: "Fabrication, manufacturing, materials, distribution, construction supply, and inventory-heavy teams." },
          { label: "Design partners", body: "Work with Decrypt to shape modules around real bottlenecks, data, users, and operational decisions." },
        ],
      },
    ],
  },
  "industries-technology": {
    slug: "industries-technology",
    kicker: "INDUSTRIES & TECHNOLOGY",
    metaTitle: "Industries & Technology | AI Software by Industry and Stack",
    title: "Focused enough to be useful. Flexible enough to serve real businesses.",
    description:
      "Decrypt serves operations-heavy companies, SaaS teams, professional services, language services, education, healthcare, ecommerce, logistics, real estate, finance products, and SMEs that rely on documents, approvals, reporting, and customer communication.",
    primaryCta: "Find Solutions for My Industry",
    secondaryCta: "Ask About Our Technology Stack",
    sections: [
      {
        title: "Industries and technology areas",
        body: "We use familiar business language first, then connect it to the right technical implementation.",
        items: [
          { label: "Industries served", body: INDUSTRIES.join(", ") + "." },
          { label: "Technology stack", body: TECHNOLOGY_AREAS.join(" ") },
          { label: "Delivery support", body: "Discovery, architecture, UI/UX, development, content, automation, QA, CI/CD, monitoring, and managed support." },
        ],
      },
    ],
  },
};
