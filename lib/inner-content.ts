export type InnerItem = {
  label: string;
  body: string;
};

export type InnerSection = {
  eyebrow: string;
  title: string;
  body?: string;
  layout: "cards" | "bullets" | "packs" | "faq" | "spotlight";
  items: InnerItem[];
};

export type InnerPage = {
  slug: string;
  kicker: string;
  metaTitle: string;
  metaDescription: string;
  title: string;
  description: string;
  directAnswer: string;
  keywords: string;
  ctas: string[];
  sections: InnerSection[];
};

export const INNER_PAGES: Record<string, InnerPage> = {
  studio: {
    slug: "studio",
    kicker: "DECRYPT STUDIO",
    metaTitle: "Decrypt Studio | AI Software, Custom Apps, Dashboards & Business Systems",
    metaDescription:
      "Decrypt Studio builds AI workflow systems, custom software, internal tools, dashboards, web apps, mobile apps, AI assistants, chatbots, voice agents, websites, QA and CI/CD support.",
    title: "Custom software for real workflows.",
    description:
      "We design and build custom software, internal tools, dashboards, websites, apps and AI systems around the way your business actually works. We connect the screens, data, permissions and integrations into one dependable product. The result is software your team can adopt, control and improve as the operation grows.",
    directAnswer:
      "Turn the workflow that makes your business different into connected software your team can use every day.",
    keywords:
      "AI software development, custom software development, AI dashboards, custom web apps, internal tools, ERP software development, chatbot integration, voice agent integration, QA CI/CD" +
      ", secure software development, application security, system hardening, malware risk reduction, security patching, vulnerability remediation",
    ctas: ["Build My Software", "Get a Software Quote", "Map My AI Opportunity"],
    sections: [
      {
        eyebrow: "WHO THIS IS FOR",
        title: "Built for teams whose workflow is too specific for generic software.",
        body:
          "Decrypt Studio is for founders, operations leaders, managers and business owners who know the current process is too manual, too scattered or too specific for a generic tool.",
        layout: "bullets",
        items: [
          { label: "Spreadsheet systems", body: "Your team uses spreadsheets as a business system." },
          { label: "Disconnected follow-up", body: "Your website collects leads but does not connect to sales follow-up." },
          { label: "Manual reporting", body: "Your reports are slow, manual or unreliable." },
          { label: "Broken tool chain", body: "Your CRM, website, app, documents and dashboards do not talk to each other." },
          { label: "Business AI", body: "Your team needs an AI assistant, chatbot or voice agent connected to real business knowledge." },
          { label: "Custom operations", body: "Your operation needs a workflow, portal, admin panel, dashboard, mobile app or ERP-connected tool." },
        ],
      },
      {
        eyebrow: "STUDIO SERVICES",
        title: "What Decrypt Studio can design, build and improve.",
        layout: "cards",
        items: [
          { label: "Workflow Discovery & Software Strategy", body: "We map your current process, users, tools, documents, approvals, data and risks. Then we turn the messy idea into scope, user flows, technical requirements, architecture and a practical build plan." },
          { label: "Custom Software Development", body: "We build internal tools, admin panels, customer portals, workflow platforms, custom CRMs, ERP-connected systems, databases and business software tailored to your operations." },
          { label: "AI Workflow Systems", body: "We add AI where it creates real value: document search, data extraction, summaries, approvals, support responses, reporting, internal knowledge, customer help and decision support." },
          { label: "RAG Systems & Document Intelligence", body: "We build AI systems that answer from approved documents, knowledge bases and business data, so teams can search policies, files, FAQs, records and internal content more easily." },
          { label: "Dashboards & Reporting", body: "We create KPI dashboards, AI dashboards, operational dashboards, reporting tools and data views that help managers see what is happening without manually chasing updates." },
          { label: "Custom Copilots, Text Chatbots & Voice Agents", body: "We build internal AI assistants, customer chatbots, lead qualification bots, support bots, voice chatbots and AI phone agents connected to your content, CRM or workflow." },
          { label: "Web Application Development", body: "We build SaaS platforms, booking systems, marketplaces, dashboards, portals, admin panels, LMS platforms and browser-based business applications." },
          { label: "Mobile App Development", body: "We build Android apps, iOS apps and cross-platform mobile apps for customers, field teams, finance/productivity use cases, SaaS products and operations workflows." },
          { label: "Backend, APIs & Integrations", body: "We build backend systems, APIs, authentication, databases, role-based access, payment integrations, CRM integrations, ERP connections, analytics integrations and data flows." },
          { label: "Website & WordPress Development", body: "We build and maintain business websites, WordPress websites, landing pages, service pages, content systems, SEO/AEO/GEO structures and conversion-focused forms." },
          { label: "Basic Marketing Systems", body: "We set up landing pages, lead capture forms, email capture, CRM workflows, analytics tracking, campaign pages, newsletter signup and simple marketing automation." },
          { label: "QA, CI/CD & Maintenance", body: "We test websites, apps, automations and AI workflows. We support CI/CD, release readiness, issue tracking, bug fixes, monitoring, documentation and long-term maintenance." },
          { label: "Secure Software & System Hardening", body: "We build security into new software and strengthen existing websites, apps, APIs and business systems with role-based access, safer configuration, dependency and security patching, logging, monitoring, backup checks and practical vulnerability remediation to reduce exposure to malware, unauthorized access and common web attacks." },
        ],
      },
      {
        eyebrow: "DELIVERABLES",
        title: "A build path with strategy, product thinking and handover.",
        layout: "packs",
        items: [
          { label: "Workflow map and business requirements", body: "The real process is documented before the software is shaped." },
          { label: "Product scope, PRD/SRS and user flows", body: "Unclear ideas become concrete screens, journeys, rules and technical decisions." },
          { label: "UI/UX screens and system architecture", body: "The experience and structure are planned together so the system is usable and buildable." },
          { label: "Custom software, app, website, dashboard or AI workflow", body: "The build matches the workflow instead of forcing the workflow into a template." },
          { label: "Backend, API and integration setup", body: "Systems connect to CRMs, ERP data, websites, Microsoft 365, analytics and other business tools." },
          { label: "QA checklist, CI/CD, documentation and maintenance plan", body: "Launch is treated as the start of a working system, not the end of a one-time build." },
        ],
      },
      {
        eyebrow: "STUDIO FAQ",
        title: "Questions buyers ask before turning a workflow into software.",
        layout: "faq",
        items: [
          { label: "What is Decrypt Studio?", body: "Decrypt Studio is the main service arm of Decrypt AI Technologies. It builds custom software, AI workflows, dashboards, apps, websites, chatbots, voice agents, QA, CI/CD and business systems." },
          { label: "Can Decrypt build software around our exact workflow?", body: "Yes. Decrypt specializes in workflows that are too specific, messy or operationally complex for off-the-shelf tools." },
          { label: "Can you add AI to our current website, app or CRM?", body: "Yes. Decrypt can integrate AI assistants, RAG systems, text chatbots, voice agents, document processing, dashboards and automation into existing systems." },
          { label: "Do you provide QA and CI/CD support?", body: "Yes. Decrypt supports software testing, release readiness, CI/CD workflows, issue tracking, monitoring, bug fixes and maintenance." },
          { label: "How does a custom software project begin?", body: "We begin with the workflow, users, goals, current tools and constraints. That becomes a clear scope, user journey, system plan and recommended first release." },
          { label: "Can Decrypt improve an existing system instead of rebuilding it?", body: "Yes. We can assess the current website, app, backend, dashboard or internal tool and improve the parts that create the most risk, friction or maintenance cost." },
          { label: "Do you build both web and mobile apps?", body: "Yes. Decrypt builds responsive web applications, SaaS products, portals, Android and iOS experiences, cross-platform apps and backend-connected mobile workflows." },
          { label: "What happens after the software launches?", body: "Decrypt can support monitoring, fixes, releases, QA, documentation, user feedback, feature improvements and ongoing technical maintenance after launch." },
          { label: "Can Decrypt help secure an existing website, app or business system?", body: "Yes. Within an agreed scope, Decrypt can review access controls, dependencies, configuration, logging, backups and exposed application risks, then apply system hardening, security patches and practical vulnerability remediation. Specialist penetration testing, certification and incident response can be coordinated separately when required." },
        ],
      },
    ],
  },
  automations: {
    slug: "automations",
    kicker: "DECRYPT AUTOMATIONS",
    metaTitle: "Decrypt Automations | Microsoft 365, SharePoint, Power Automate & AI Workflow Automation",
    metaDescription:
      "Decrypt Automations builds Microsoft 365 workflows, SharePoint systems, Power Automate approvals, RAG systems, document automation, chatbots, voice agents and managed support.",
    title: "Automate repeated work.",
    description:
      "We connect Microsoft 365, SharePoint, Power Automate, AI and customer systems to reduce manual follow-up and move work faster. Documents, approvals, notifications and reporting follow a clear path instead of relying on inbox chasing. People stay in control while routine steps happen consistently in the background.",
    directAnswer:
      "Replace approval chasing, document routing and routine updates with connected workflows that keep people in control.",
    keywords:
      "Microsoft 365 automation, SharePoint workflow, Power Automate services, AI document processing, RAG systems, Microsoft Graph integration, Copilot-ready workflows, chatbot integration, voice chatbot",
    ctas: ["Audit My Workflow", "Explore Automation Options", "Automate Microsoft 365"],
    sections: [
      {
        eyebrow: "AUTOMATION SERVICES",
        title: "Managed workflow automation across Microsoft 365, AI and customer touchpoints.",
        layout: "cards",
        items: [
          { label: "Microsoft 365 Workflow Automation", body: "We automate workflows across Microsoft 365, Teams, Outlook, SharePoint, forms, files, email, approvals and tasks so work moves without constant manual follow-up." },
          { label: "SharePoint Systems", body: "We organize SharePoint into usable document libraries, internal knowledge spaces, permission structures, content systems and document workflows." },
          { label: "Power Automate Workflows", body: "We build approval flows, reminders, routing workflows, task creation, form-to-email automations, SharePoint updates, Excel workflows and multi-step business processes." },
          { label: "AI-Assisted Document Processing", body: "We help teams classify, summarize, extract, route and review documents with AI-assisted workflows and human approval where needed." },
          { label: "RAG Systems", body: "We build AI search over approved business knowledge, so users can ask questions and receive answers grounded in documents, policies, FAQs, project files and internal content." },
          { label: "Copilot-Ready Workflows", body: "We help prepare data, permissions, documents and processes so Microsoft Copilot and internal AI assistants can work more safely and usefully." },
          { label: "Microsoft Graph Integrations", body: "We connect Microsoft 365 data and workflows through Microsoft Graph where appropriate, including users, files, calendars, messages, tasks and organizational context." },
          { label: "Teams, Outlook & Task Automation", body: "We create notifications, task reminders, routing logic, meeting follow-ups, email workflows and team-based process automation." },
          { label: "CRM & Marketing Automation", body: "We connect lead forms, CRMs, email capture, campaign workflows, pipeline updates, lead routing and reporting so marketing activity turns into trackable follow-up." },
          { label: "Text Chatbot Integrations", body: "We build website chatbots, internal support bots, FAQ bots, lead qualification bots, CRM-connected bots and knowledge-base chatbots." },
          { label: "Voice Chatbots / Voice Agents", body: "We build voice agents for call flows, appointment booking, FAQs, support triage, lead qualification and CRM-connected customer workflows." },
          { label: "Managed Automation Support", body: "We monitor workflows, fix issues, improve automations, document processes, support users and review performance through monthly managed support." },
        ],
      },
      {
        eyebrow: "AUTOMATION PACKS",
        title: "Focused packages for repeated work that should stop draining the team.",
        layout: "packs",
        items: [
          { label: "Approval Automation Pack", body: "Request form, approval routing, reminder rules, status tracking, SharePoint update, email notification and reporting view." },
          { label: "Document Processing Pack", body: "Document intake, classification, AI summary, extraction fields, human review queue, storage workflow and audit trail." },
          { label: "Lead Routing Pack", body: "Landing page form, CRM update, email confirmation, sales notification, qualification tag, follow-up task and dashboard." },
          { label: "Support Chatbot Pack", body: "Website or internal chatbot, approved FAQ source, escalation workflow, contact capture, CRM note and reporting." },
          { label: "Voice Agent Pack", body: "Voice intake, FAQ handling, booking or callback flow, lead capture, CRM note and human handoff." },
        ],
      },
      {
        eyebrow: "MANAGED SUPPORT",
        title: "Automation should keep working after it goes live.",
        body:
          "Decrypt Automations provides monthly monitoring, workflow fixes, small improvements, documentation, user support and optimization reviews. We do not just build automations and disappear. We help your workflows stay accurate as your team, documents and processes change.",
        layout: "spotlight",
        items: [
          { label: "Monitor", body: "Watch workflows for failures, bottlenecks, data problems and stale assumptions." },
          { label: "Improve", body: "Tune routing logic, prompts, fields, user steps and reporting as the process changes." },
          { label: "Document", body: "Leave teams with clear workflow notes, handoff guidance and support paths." },
        ],
      },
      {
        eyebrow: "AUTOMATION FAQ",
        title: "Common questions about automating Microsoft 365 and AI workflows.",
        layout: "faq",
        items: [
          { label: "What can Decrypt automate?", body: "Decrypt can automate approvals, document routing, reminders, notifications, task creation, lead routing, CRM updates, SharePoint workflows, email workflows, chatbot handoffs, voice agent flows and reporting." },
          { label: "Can you work with Microsoft 365?", body: "Yes. Decrypt Automations focuses strongly on Microsoft 365, SharePoint, Power Automate, Teams, Outlook, Microsoft Graph and Copilot-ready workflows." },
          { label: "Can AI process our documents?", body: "Yes. Decrypt can build AI-assisted document processing for classification, extraction, summaries, routing and human review." },
          { label: "Do you offer monthly support?", body: "Yes. Decrypt provides managed automation support for monitoring, fixes, documentation, improvements and optimization reviews." },
          { label: "Will automation replace our existing tools?", body: "Not necessarily. We often connect and improve the tools you already use, then introduce new software only where the current stack cannot support the workflow." },
          { label: "Can important approvals still require a person?", body: "Yes. Human review, approval thresholds, exception handling and escalation paths can remain part of the automation wherever judgment or accountability matters." },
          { label: "How do you handle permissions and business data?", body: "Automation is planned around approved sources, role-based access, existing permissions, audit needs and the minimum data required for each workflow." },
          { label: "Can we automate one workflow before expanding?", body: "Yes. Starting with one repeated, measurable process is often the best way to prove value, reduce risk and create a pattern for later automation." },
        ],
      },
    ],
  },
  verticalos: {
    slug: "verticalos",
    kicker: "VERTICALOS",
    metaTitle: "VerticalOS by Decrypt | Roadmap for Industry Software in Fabrication, Manufacturing & Operations",
    metaDescription:
      "VerticalOS is Decrypt's roadmap and design-partner program for repeatable industry software in fabrication, manufacturing, materials, distribution and operations-heavy workflows.",
    title: "Software for complex operations.",
    description:
      "VerticalOS is our design-partner path for clearer quoting, job tracking, inventory, field updates, approvals and operational visibility. It connects office, workshop, warehouse and field activity around one shared operational record. Teams see what is moving, what is blocked and what needs attention without rebuilding the report by hand.",
    directAnswer:
      "Bring job tracking, inventory, field updates, approvals and dashboards into one operations system your team can control.",
    keywords:
      "vertical software, manufacturing software, fabrication software, materials ERP, operations software, inventory workflow, job tracking software, AI operations dashboard",
    ctas: ["Join the Design-Partner Program", "Map My Operations", "Start an Operations Pilot"],
    sections: [
      {
        eyebrow: "POSITIONING",
        title: "A serious roadmap, not a generic ERP claim.",
        body:
          "VerticalOS is based on the same operational problems Decrypt already solves through Studio projects: scattered data, manual reporting, unclear job status, inventory gaps, approval delays and limited management visibility.",
        layout: "spotlight",
        items: [
          { label: "Roadmap first", body: "VerticalOS remains a roadmap and design-partner narrative until repeatable industry IP is market-proven." },
          { label: "Built from real operations", body: "The goal is to turn repeatable industry workflows into reusable software modules over time." },
          { label: "Commercially grounded", body: "Decrypt leads today with Studio and Automations while VerticalOS develops through focused pilots." },
        ],
      },
      {
        eyebrow: "VERTICALOS MODULES",
        title: "Modules being shaped around operations-heavy work.",
        body:
          "VerticalOS modules are intended to share customers, jobs, materials, statuses, permissions and reporting logic. A business can begin with one workflow and expand without recreating the operating model each time.",
        layout: "cards",
        items: [
          { label: "Quote-to-Order", body: "Track requests, estimates, approvals, customer information and order movement from first inquiry to confirmed job." },
          { label: "Job Tracking", body: "Give teams clearer visibility into job status, responsibilities, pending actions, delays and next steps." },
          { label: "Inventory Visibility", body: "Track materials, stock movement, usage, availability and operational updates in a more structured way." },
          { label: "Mobile Field Updates", body: "Allow teams to update job status, notes, photos, tasks, approvals and operational details from mobile devices." },
          { label: "ERP-Style Operations Tools", body: "Create custom modules for customers, orders, tasks, approvals, inventory, reporting and role-based business workflows." },
          { label: "AI Operations Dashboards", body: "Summarize job status, flag anomalies, surface delayed work, support forecasting and give managers clearer operational visibility." },
        ],
      },
      {
        eyebrow: "SYSTEM INTEGRATIONS",
        title: "Connect operations software to the systems the business already trusts.",
        body:
          "VerticalOS does not need to replace every existing tool. The design-partner approach identifies the system of record for each data type, then connects the workflow through appropriate APIs, imports, events and permission-aware interfaces.",
        layout: "cards",
        items: [
          { label: "ERP and accounting systems", body: "Connect customers, products, orders, invoices, payments, purchasing or inventory data while keeping financial records in the appropriate system of record." },
          { label: "CRM and customer records", body: "Link inquiries, contacts, opportunities, quote history, communication and account context to the operational work that follows a sale." },
          { label: "Microsoft 365 and documents", body: "Use SharePoint, Teams, Outlook, files, forms and Power Automate where they support approvals, document control, notifications and collaboration." },
          { label: "Inventory, barcode and material data", body: "Connect stock references, material identifiers, reservations, usage, purchasing updates and scanning workflows to jobs and locations." },
          { label: "Mobile and field workflows", body: "Give field, workshop and delivery teams focused interfaces for status updates, notes, photos, measurements, signatures, issues and completion records." },
          { label: "APIs, dashboards and data exports", body: "Integrate specialist tools, expose approved operational data, support management reporting and preserve practical export paths where required." },
        ],
      },
      {
        eyebrow: "SECURITY & GOVERNANCE",
        title: "Operational visibility without losing control of data and decisions.",
        body:
          "Security and governance are scoped around the risk of the workflow, the sensitivity of the data and the responsibilities of each user. AI supports operations only where approved data, review and accountability can be defined.",
        layout: "bullets",
        items: [
          { label: "Role-based access", body: "Office, workshop, field, management, partner and administrator roles see and change only the records and actions appropriate to their work." },
          { label: "Approval and exception paths", body: "High-value quotes, unusual discounts, inventory exceptions, job changes and AI-assisted actions can require explicit human approval." },
          { label: "Audit-friendly history", body: "Important status changes, approvals, assignments, notes and exceptions can retain timestamps, ownership and a reviewable operational trail." },
          { label: "Source-grounded AI", body: "AI summaries and operational answers are connected to approved records and documents, with clear limits, monitoring and human review where needed." },
          { label: "Secure integration design", body: "Credentials, secrets, APIs, data transfers and external services are planned around least-privilege access and documented ownership." },
          { label: "Testing and release control", body: "User flows, permissions, calculations, integrations, mobile behavior and edge cases are tested before production releases and later changes." },
        ],
      },
      {
        eyebrow: "MEASURABLE OPERATIONS",
        title: "Measure whether the system makes work faster, clearer and more reliable.",
        body:
          "The design-partner pilot defines a baseline and a small set of operational measures before development expands. The goal is not more software usage. The goal is better control of work and better business outcomes.",
        layout: "cards",
        items: [
          { label: "Quote turnaround", body: "Measure the time from qualified request to approved estimate, including revisions, missing information and approval delays." },
          { label: "Job status accuracy", body: "Compare how quickly and reliably office, workshop, field and management teams can identify the current state and next action." },
          { label: "Inventory confidence", body: "Track stock accuracy, material reservations, shortages, emergency purchases, unused material and the time spent reconciling records." },
          { label: "Handoff and approval time", body: "Measure delays between sales, planning, production, purchasing, delivery and management decisions." },
          { label: "On-time completion", body: "Monitor jobs completed against promised or planned dates and identify the recurring reasons work becomes delayed." },
          { label: "Reporting effort", body: "Measure hours spent collecting status, rebuilding spreadsheets, chasing updates and preparing operational reviews before and after the pilot." },
        ],
      },
      {
        eyebrow: "DESIGN-PARTNER DELIVERY",
        title: "A focused path from operational discovery to a working pilot.",
        body:
          "A design partnership is structured to learn from real work without attempting a risky full-system replacement on day one. Each stage produces a clear decision, artifact or working capability.",
        layout: "packs",
        items: [
          { label: "Operational discovery", body: "Interview the people doing and managing the work, review spreadsheets and documents, map systems, identify bottlenecks and define the business outcome." },
          { label: "Workflow and data model", body: "Define the quote, order, job, material, status, user, approval and reporting concepts that need to stay consistent across the pilot." },
          { label: "Pilot scope and success measures", body: "Choose one valuable workflow, agree what is included, document assumptions and set the measures that will indicate whether the pilot works." },
          { label: "Prototype and user validation", body: "Test screens, mobile steps, status logic and responsibilities with real users before committing the full pilot build." },
          { label: "Build, integration and QA", body: "Develop the pilot, connect approved systems, migrate or import required data, test permissions and edge cases, and prepare users for launch." },
          { label: "Measure, improve and expand", body: "Review adoption and operational outcomes, fix friction, document learning and decide whether to extend the module or connect the next workflow." },
        ],
      },
      {
        eyebrow: "BEST-FIT INDUSTRIES",
        title: "Where the design-partner work is most useful first.",
        layout: "bullets",
        items: [
          { label: "Stone, marble, granite and surfaces businesses", body: "Operations with quotes, materials, production, delivery and job status complexity." },
          { label: "Fabrication and production teams", body: "Teams that need clearer workflow state, responsibility and shop-floor visibility." },
          { label: "Construction materials and supply businesses", body: "Inventory-heavy operations with quoting, ordering, fulfillment and customer updates." },
          { label: "Distribution and inventory-heavy companies", body: "Businesses where stock, movement, approvals and reports need structure." },
          { label: "Workshops and operations-heavy SMEs", body: "Teams that have outgrown spreadsheets but are not served well by generic tools." },
          { label: "Field teams needing mobile job visibility", body: "People who need to update status, notes, photos and approvals away from a desk." },
        ],
      },
      {
        eyebrow: "DESIGN-PARTNER OFFER",
        title: "Help shape the system around real operations.",
        body:
          "Decrypt is looking for design partners with real operational workflows, spreadsheet-heavy processes and a need for clearer business visibility. Design partners receive focused discovery, workflow mapping, pilot planning and early module development shaped around their operating reality.",
        layout: "faq",
        items: [
          { label: "Is VerticalOS a finished product?", body: "VerticalOS is Decrypt's roadmap and design-partner program for repeatable industry software. Decrypt currently builds these systems through custom projects and is turning repeatable workflows into reusable modules over time." },
          { label: "Who is VerticalOS for?", body: "VerticalOS is for fabrication, manufacturing, materials, distribution and operations-heavy businesses that need job tracking, inventory visibility, mobile updates, approvals and AI dashboards." },
          { label: "Can Decrypt build a custom version before VerticalOS is fully productized?", body: "Yes. Decrypt Studio can build custom ERP-connected operations tools, dashboards and workflow systems today while VerticalOS evolves into repeatable industry IP." },
          { label: "What does a design partner receive?", body: "Design partners receive focused discovery, workflow mapping, pilot planning and early module development shaped around real operational needs and feedback." },
          { label: "Does VerticalOS replace our ERP?", body: "It can connect to, extend or fill gaps around an existing ERP. The right approach depends on which data and workflows should remain in the current system." },
          { label: "Can we begin with one operations module?", body: "Yes. Quote-to-order, job tracking, inventory visibility, mobile updates or an operations dashboard can be piloted before a broader rollout." },
          { label: "How are roles, permissions and operational data handled?", body: "The system can use role-based access, approval rules, audit history, documented data flows and integrations appropriate to the operational risk." },
        ],
      },
    ],
  },
  "industries-technology": {
    slug: "industries-technology",
    kicker: "INDUSTRIES & TECHNOLOGY",
    metaTitle: "Industries & Technology | AI Software, Automation, Microsoft 365, Web, Mobile & CI/CD",
    metaDescription:
      "Explore the industries Decrypt serves and the technology used for AI systems, automation, Microsoft 365, web apps, mobile apps, dashboards, CMS, QA, CI/CD and integrations.",
    title: "Software and AI for your industry.",
    description:
      "We combine software, automation, data, content and customer communication around the workflows that matter in your industry. Instead of forcing every business into the same template, we shape the system around its users, rules and operating environment. The technology stays practical, connected and focused on measurable work.",
    directAnswer:
      "Choose the right mix of custom software, AI, automation, apps and integrations for the way your business operates.",
    keywords:
      "AI software by industry, workflow automation for SMEs, manufacturing software, SaaS development, healthcare website development, LMS support, ecommerce automation, Microsoft 365 integration",
    ctas: ["Explore Industry Solutions", "Discuss My Workflow", "Ask About Our Technology Stack"],
    sections: [
      {
        eyebrow: "TARGET INDUSTRIES",
        title: "Industries where workflows, content, data and communication need to work together.",
        layout: "cards",
        items: [
          { label: "Manufacturing, Fabrication & Materials", body: "ERP-connected systems, job tracking, inventory workflows, production visibility, mobile updates, approval flows, AI dashboards and operations automation." },
          { label: "Construction Materials, Stone & Distribution", body: "Quote-to-order workflows, customer records, material inventory, delivery coordination, job status tracking, mobile reporting and dashboard visibility." },
          { label: "SaaS & Technology Companies", body: "Web apps, mobile apps, SaaS dashboards, product workflows, backend systems, UI/UX, QA, CI/CD, product marketing support and lead-generation systems." },
          { label: "Language Services & Professional Services", body: "WordPress maintenance, SharePoint systems, Power Automate workflows, document routing, custom portals, content operations, project management and AI-assisted document tools." },
          { label: "Education, Training & LMS Businesses", body: "Learning websites, LMS management, course content workflows, email marketing, learner communication, training portals, automation and reporting systems." },
          { label: "Healthcare, Clinics & Dental Practices", body: "Healthcare websites, local-service pages, booking pathways, patient communication workflows, QA, CI/CD, content updates, chatbots and secure workflow planning." },
          { label: "Ecommerce & Marketplace Brands", body: "Ecommerce websites, marketplace service pages, product/category content, landing pages, analytics, CRM setup, automation, content workflows and maintenance." },
          { label: "Logistics, Real Estate & Field Operations", body: "Scheduling workflows, internal tools, customer records, document management, approvals, dashboards, mobile updates, lead routing and automation systems." },
          { label: "Finance, Productivity & Utility Apps", body: "Expense management apps, mobile workflows, dashboards, user-account systems, backend APIs, secure data flows and productivity tools." },
          { label: "SMEs with Manual Operations", body: "Custom software, websites, dashboards, automation, CRM setup, chatbots, voice agents, AI assistants, QA, CI/CD and managed support for teams ready to replace manual work." },
        ],
      },
      {
        eyebrow: "TECHNOLOGY STACK",
        title: "Familiar business needs mapped to practical implementation.",
        layout: "packs",
        items: [
          { label: "AI assistants and smart search", body: "LLMs, RAG systems, embeddings, vector search, approved knowledge bases, source-grounded answers and human review flows." },
          { label: "Microsoft workflow automation", body: "Microsoft 365, SharePoint, Power Automate, Teams, Outlook, Microsoft Graph and Copilot-ready workflow planning." },
          { label: "Web apps and dashboards", body: "React, Next.js, TypeScript, dashboards, portals, admin panels, responsive web interfaces and modern frontend workflows." },
          { label: "Websites and content systems", body: "WordPress, CMS workflows, landing pages, SEO/AEO/GEO content structure, forms, tracking and maintenance." },
          { label: "Mobile apps", body: "Android, iOS, cross-platform app development, mobile UI/UX, backend-connected apps and field workflows." },
          { label: "Backend and integrations", body: "APIs, databases, authentication, role-based access, payments, CRM/ERP integrations, analytics and cloud-ready architecture." },
          { label: "QA and CI/CD", body: "Manual QA, regression checks, issue logs, release readiness, CI/CD pipelines, monitoring, bug fixes and technical support." },
          { label: "Chatbots and voice agents", body: "Website chatbots, support bots, internal bots, lead qualification bots, voice chatbots, AI phone agents and CRM-connected workflows." },
        ],
      },
      {
        eyebrow: "FIT CHECK",
        title: "Not sure if your industry fits?",
        body:
          "If your business depends on documents, approvals, customer communication, reporting, operations, websites, apps, Microsoft 365 or manual workflows, Decrypt can likely help. Send us your current process and we will tell you what can be improved first.",
        layout: "faq",
        items: [
          { label: "Which industries does Decrypt serve?", body: "Decrypt serves manufacturing, fabrication, materials, SaaS, professional services, language services, education, healthcare, ecommerce, logistics, real estate, finance/productivity and SMEs with manual workflows." },
          { label: "Does Decrypt only serve technical companies?", body: "No. Decrypt is built for businesses that need clearer systems, even if they are not technical companies." },
          { label: "Can Decrypt work with existing tools?", body: "Yes. Decrypt can connect existing websites, CRMs, Microsoft 365, SharePoint, databases, apps, dashboards and business tools." },
          { label: "What if our industry is not listed?", body: "The list shows strong-fit examples, not a hard boundary. If your business relies on workflows, documents, data, customers, approvals or reporting, Decrypt can assess the fit." },
          { label: "Can you recommend the right technology stack?", body: "Yes. We select technology around users, workflow complexity, integrations, security, maintainability, budget and the expected life of the system." },
          { label: "Can you modernize legacy or spreadsheet-based processes?", body: "Yes. We can map the existing process, protect useful business logic and move the right parts into clearer software, automation, dashboards or connected data flows." },
          { label: "Do you provide ongoing support for different technology stacks?", body: "Yes. Support can include websites, apps, automation, integrations, QA, CI/CD, monitoring, bug fixes, documentation and iterative improvements." },
        ],
      },
    ],
  },
};
