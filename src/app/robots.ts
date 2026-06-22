import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://satriayogapratama.dev";
  return {
    rules: { userAgent: "*", allow: "/", disallow: [] },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
