import type { Metadata } from "next";
import { InnerPageView } from "@/components/inner-page";
import { INNER_PAGES } from "@/lib/inner-content";

const page = INNER_PAGES.automations;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
};

export default function AutomationsPage() {
  return <InnerPageView page={page} />;
}
