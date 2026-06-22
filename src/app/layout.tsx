import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/shared/scroll-progress";
import { BackToTop } from "@/components/shared/back-to-top";
import { JsonLd } from "@/components/shared/json-ld";
import { siteUrl, siteName } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Full-Stack Developer`,
    template: `%s | ${siteName}`,
  },
  description:
    "Portfolio of Satria Yoga Pratama — building digital experiences with code & creativity. Explore projects, notebooks, and blog posts.",
  keywords: [
    "Satria Yoga Pratama",
    "Satria",
    "full-stack developer",
    "web developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "portfolio",
    "Indonesia",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  alternates: { canonical: siteUrl },
  openGraph: {
    title: `${siteName} | Full-Stack Developer`,
    description: "Building digital experiences with code & creativity.",
    url: siteUrl,
    siteName,
    type: "website",
    locale: "id_ID",
      images: [
        {
          url: "/placeholder.svg",
          width: 1200,
          height: 630,
          alt: siteName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${siteName} | Full-Stack Developer`,
      description: "Building digital experiences with code & creativity.",
      images: ["/placeholder.svg"],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <JsonLd />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          <Navbar />
          <main className="flex min-h-screen flex-col lg:pl-[240px]">
            {children}
          </main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
