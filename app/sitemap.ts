import type { MetadataRoute } from "next";

const BASE_URL = "https://www.jt-solutions.org";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();

  const routes: Array<{ path: string; priority: number }> = [
    { path: "/", priority: 1.0 },
    { path: "/services/landing-pages", priority: 0.8 },
    { path: "/services/branding", priority: 0.8 },
    { path: "/services/business-websites", priority: 0.8 },
    { path: "/services/ecommerce", priority: 0.8 },
    { path: "/services/ad-infrastructure", priority: 0.8 },
    { path: "/services/whatsapp-bot", priority: 0.8 },
    { path: "/services/ai-automation", priority: 0.8 },
    { path: "/services/web-development", priority: 0.8 },
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
