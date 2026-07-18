import type { MetadataRoute } from "next";

const baseUrl = "https://decrypt-ai.tech";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/studio",
    "/automations",
    "/verticalos",
    "/industries-technology",
    "/case-studies",
    "/pricing",
    "/about-contact",
    "/privacy",
    "/terms",
    "/careers",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
