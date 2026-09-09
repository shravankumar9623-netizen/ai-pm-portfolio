import type { MetadataRoute } from "next";

const baseUrl = "https://ai-pm-portfolio-coral-rho.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/case-studies", "/resume", "/contact"].map((path) => ({
    url: baseUrl + path,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : path === "/case-studies" ? 0.9 : 0.7,
  }));
}
