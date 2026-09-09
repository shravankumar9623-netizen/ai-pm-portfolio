import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://ai-pm-portfolio-coral-rho.vercel.app/sitemap.xml",
  };
}
