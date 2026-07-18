export type StudioServiceDetail = {
  directAnswer: string;
  capabilities: readonly string[];
  outcomes: readonly string[];
  useCases: readonly string[];
};

export const STUDIO_SERVICE_DETAILS: Record<string, StudioServiceDetail> = {
  "Workflow Discovery & Software Strategy": {
    directAnswer: "Decrypt turns an unclear software idea or manual business process into a practical product scope, workflow map and technical delivery plan.",
    capabilities: ["Current-state workflow and stakeholder mapping", "Product requirements, user journeys and acceptance criteria", "Architecture, integration and data-flow planning", "Prioritized MVP roadmap, risks and delivery estimates"],
    outcomes: ["A shared definition of the problem before development begins", "Less scope drift, rework and avoidable technical risk", "A build plan connected to measurable business outcomes"],
    useCases: ["Replacing spreadsheet operations", "Planning an internal platform", "Validating an AI product idea"],
  },
  "Custom Software Development": {
    directAnswer: "Decrypt designs and develops secure custom business software around the exact users, rules, data and operational workflows that generic products cannot support.",
    capabilities: ["Internal tools, admin panels and workflow platforms", "Custom CRM and ERP-connected business systems", "Customer, supplier and partner portals", "Role-based permissions, databases and audit-ready records"],
    outcomes: ["One dependable system instead of disconnected tools", "Fewer manual handoffs and repeated data entry", "Software that can evolve as the operation grows"],
    useCases: ["Operations management", "Customer self-service", "Custom approval systems"],
  },
  "AI Workflow Systems": {
    directAnswer: "Decrypt connects practical AI capabilities to approved business data and clearly defined workflows, with permissions, monitoring and human review where decisions matter.",
    capabilities: ["AI-assisted document and data processing", "Knowledge search, summarization and decision support", "Human-in-the-loop approvals and escalation paths", "AI evaluation, monitoring and usage reporting"],
    outcomes: ["Faster access to useful business information", "Reduced repetitive analysis and content handling", "Governed AI use with clearer quality controls"],
    useCases: ["Operations copilots", "Document workflows", "Customer and employee support"],
  },
  "RAG Systems & Document Intelligence": {
    directAnswer: "Decrypt builds retrieval-augmented generation systems that answer questions from approved documents, knowledge bases and business records instead of relying on generic model knowledge.",
    capabilities: ["Document ingestion, chunking and source indexing", "Permission-aware semantic search and cited answers", "Knowledge-base administration and content refresh workflows", "Answer evaluation, fallback rules and human escalation"],
    outcomes: ["Faster discovery across policies, files and records", "Answers grounded in traceable business sources", "Less time spent searching folders and repeating questions"],
    useCases: ["Policy assistants", "Technical document search", "Internal knowledge portals"],
  },
  "Dashboards & Reporting": {
    directAnswer: "Decrypt creates operational, KPI and AI dashboards that combine useful data into clear views for managers, teams and decision-makers.",
    capabilities: ["Operational dashboards and executive KPI views", "ERP, CRM, spreadsheet and API data integration", "Automated reporting, alerts and exception tracking", "Role-based access and drill-down analysis"],
    outcomes: ["Clearer visibility without manual report chasing", "Faster identification of delays, risks and exceptions", "One shared view of performance and operational status"],
    useCases: ["Management reporting", "Job and production visibility", "Sales and service analytics"],
  },
  "Custom Copilots, Text Chatbots & Voice Agents": {
    directAnswer: "Decrypt builds AI copilots, chatbots and voice agents connected to your content, CRM and workflows for customer service, lead handling and internal support.",
    capabilities: ["Website chatbots and internal AI copilots", "Lead qualification, booking and support workflows", "Voice agents and AI-assisted phone interactions", "CRM updates, handoffs, transcripts and conversation analytics"],
    outcomes: ["Faster response across text and voice channels", "Consistent answers grounded in approved information", "Clear escalation to people when automation should stop"],
    useCases: ["Customer support", "Lead qualification", "Employee knowledge assistance"],
  },
  "Web Application Development": {
    directAnswer: "Decrypt develops responsive web applications, SaaS products and browser-based business platforms with the frontend, backend and integrations required for production use.",
    capabilities: ["SaaS platforms, portals and admin applications", "Booking, marketplace and learning-management workflows", "Responsive UI systems and accessible user journeys", "Authentication, subscriptions, analytics and third-party APIs"],
    outcomes: ["A scalable product available through any modern browser", "A consistent experience for customers and administrators", "Production-ready foundations for continued feature development"],
    useCases: ["SaaS MVPs", "Customer portals", "Browser-based operations tools"],
  },
  "Mobile App Development": {
    directAnswer: "Decrypt builds iOS, Android and cross-platform mobile applications connected to secure backends, business data and real operational workflows.",
    capabilities: ["Cross-platform and platform-specific mobile experiences", "Field updates, media capture and offline-aware workflows", "Push notifications, authentication and secure APIs", "App analytics, release preparation and ongoing support"],
    outcomes: ["Important workflows available wherever users work", "Faster field updates and customer interactions", "A mobile product connected to the wider business system"],
    useCases: ["Field operations", "Customer mobile products", "Finance and productivity apps"],
  },
  "Backend, APIs & Integrations": {
    directAnswer: "Decrypt builds secure backend services, APIs and integrations that allow websites, apps, databases, CRMs and ERP systems to exchange the right information reliably.",
    capabilities: ["Backend architecture, databases and business logic", "REST APIs, webhooks and third-party integrations", "Authentication, role-based access and audit logging", "CRM, ERP, payment, analytics and Microsoft 365 connections"],
    outcomes: ["Less duplicate data and fewer disconnected systems", "Reliable information flow across business tools", "A maintainable foundation for web, mobile and AI products"],
    useCases: ["ERP-connected applications", "CRM synchronization", "Multi-system data workflows"],
  },
  "Website & WordPress Development": {
    directAnswer: "Decrypt creates fast, conversion-focused business websites and WordPress systems with clear service content, technical SEO and maintainable publishing workflows.",
    capabilities: ["Business websites, landing pages and service architecture", "WordPress development, maintenance and content workflows", "Technical SEO, answer-ready content structure and schema", "Lead forms, CRM connections, analytics and performance work"],
    outcomes: ["A clearer path from search question to useful answer", "More qualified enquiries through focused conversion journeys", "A maintainable site designed for search and AI discovery"],
    useCases: ["B2B service websites", "WordPress modernization", "SEO landing-page systems"],
  },
  "Basic Marketing Systems": {
    directAnswer: "Decrypt connects landing pages, lead capture, analytics, CRM workflows and lightweight automation into a measurable marketing system.",
    capabilities: ["Campaign and conversion landing pages", "Lead forms, newsletter signup and CRM routing", "Analytics events, attribution and reporting foundations", "Email capture and practical follow-up automation"],
    outcomes: ["Fewer leads lost between form submission and follow-up", "Clearer visibility into campaign and content performance", "A repeatable foundation for improving conversion"],
    useCases: ["Lead-generation campaigns", "CRM follow-up", "Newsletter and content capture"],
  },
  "QA, CI/CD & Maintenance": {
    directAnswer: "Decrypt provides software quality assurance, CI/CD support and managed maintenance to make releases safer, issues easier to diagnose and digital systems more dependable after launch.",
    capabilities: ["Functional, regression and workflow testing", "Release readiness, CI/CD pipelines and deployment checks", "Monitoring, issue triage and production bug fixes", "Documentation, maintenance planning and iterative improvement"],
    outcomes: ["Fewer release surprises and repeat defects", "Faster, more consistent deployment workflows", "A clearer path for supporting and improving the system"],
    useCases: ["Pre-release QA", "Deployment modernization", "Ongoing application support"],
  },
  "Secure Software & System Hardening": {
    directAnswer: "Decrypt applies secure software development practices to new builds and strengthens existing websites, apps, APIs and business systems against common security risks.",
    capabilities: ["Role-based access, authentication and secrets review", "Dependency updates, security patching and safer configuration", "Logging, monitoring, backup and recovery checks", "Practical vulnerability remediation and malware risk reduction"],
    outcomes: ["Reduced exposure to common web attacks and unauthorized access", "A clearer security maintenance and patching baseline", "More dependable systems with visible risks and next actions"],
    useCases: ["Website and WordPress hardening", "Existing application security improvements", "Secure software delivery and maintenance"],
  },
};
