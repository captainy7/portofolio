import { personalInfo } from "@/data/portfolio";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://satriayogapratama.dev";
const siteName = "Satria Yoga Pratama";

interface SeoMeta {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  path?: string;
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  tags?: string[];
}

export function generateMetadata({
  title,
  description,
  keywords,
  ogImage = "/placeholder.svg",
  path = "",
  type = "website",
}: SeoMeta) {
  const url = `${siteUrl}${path}`;
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords || `satria yoga pratama, satria, portfolio, full-stack developer, web developer, react, next.js`,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName,
      type,
      locale: "id_ID",
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
    other: {
      "google-site-verification": "", // Ganti nanti kalo punya
    },
  };
}

export { siteUrl, siteName };
