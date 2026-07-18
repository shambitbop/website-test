const serviceNames = [
  "AI Software Development",
  "Custom Software Development",
  "AI Workflow Automation",
  "Microsoft 365 Automation",
  "SharePoint and Power Automate Services",
  "RAG Systems and AI Assistants",
  "Text Chatbot Integration",
  "Voice Chatbot and Voice Agent Integration",
  "Web Application Development",
  "Mobile App Development",
  "Website and WordPress Development",
  "Business Dashboard Development",
  "Software QA and CI/CD Support",
  "Managed Software Maintenance",
];

export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://decrypt-ai.tech/#organization",
        name: "Decrypt AI Technologies",
        url: "https://decrypt-ai.tech",
        description:
          "Decrypt AI Technologies is an AI software and automation company that builds custom software, AI workflow systems, dashboards, Microsoft 365 automation, websites, apps, chatbots, voice agents, QA, CI/CD and managed digital support.",
        slogan: "We decrypt what others cannot.",
      },
      ...serviceNames.map((name) => ({
        "@type": "Service",
        name,
        provider: { "@id": "https://decrypt-ai.tech/#organization" },
        areaServed: "Global",
        serviceType: name,
      })),
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is an AI workflow system?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "An AI workflow system connects artificial intelligence to a real business process such as document handling, approvals, support, reporting, customer communication or internal search.",
            },
          },
          {
            "@type": "Question",
            name: "Can Decrypt build chatbots and voice agents?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Decrypt builds text chatbots, website chatbots, support bots, internal helpdesk bots, lead qualification bots, voice chatbots and voice agents connected to websites, CRMs, documents and workflows.",
            },
          },
          {
            "@type": "Question",
            name: "How does Decrypt start a project?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Decrypt starts by understanding the workflow, users, tools, data, risks and desired outcome. Then the team creates a scope, roadmap, technical plan and delivery path.",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
