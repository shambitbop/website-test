export type CtaCategory = "section" | "existing-form" | "quick-form";

const QUICK_FORM_LABELS = new Set([
  "Build My Software",
  "Build a Similar Project",
  "Discuss My Software Project",
  "Discuss Your Project",
  "Discuss My Industry Workflow",
  "Discuss This Service",
  "Discuss My Workflow",
  "Join the Design-Partner Program",
  "Map My Operations",
  "Map My Quote-to-Delivery Workflow",
  "Find Solutions for My Industry",
  "Send My Workflow",
  "Start a Conversation",
  "Start a similar project",
  "Start a Project",
  "Tell Us About Your Project",
  "Discuss Your AI Project",
]);

const SECTION_TARGETS: Record<string, string> = {
  "See What We Can Build": "#what",
  "Browse Case Studies": "#case-studies",
  "Explore Automation Options": "#automation-services",
  "Explore Industry Solutions": "#target-industries",
};

export function getCtaCategory(label: string): CtaCategory {
  if (/\b(audit|review)\b/i.test(label) || QUICK_FORM_LABELS.has(label)) return "quick-form";
  if (SECTION_TARGETS[label]) return "section";
  return "existing-form";
}

export function getCtaHref(label: string, fallback = "/about-contact#start") {
  return SECTION_TARGETS[label] ?? fallback;
}
