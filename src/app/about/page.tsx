import type { Metadata } from "next";
import { PageTransition } from "@/components/shared/page-transition";
import { Skills } from "@/components/sections/skills";
import { Stats } from "@/components/sections/stats";
import { Timeline } from "@/components/sections/timeline";
import { personalInfo } from "@/data/portfolio";
import { Download } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Satria Yoga Pratama — full-stack developer with 5+ years experience in React, Next.js, TypeScript, and Node.js.",
  openGraph: {
    title: "About | Satria Yoga Pratama",
    description: "Full-stack developer with 5+ years experience.",
  },
};

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="py-16 lg:py-24">
        <section className="mx-auto max-w-4xl px-6">
          <div className="mb-16">
            <h1 className="text-4xl font-heading font-bold tracking-tight sm:text-5xl">
              About Me
            </h1>
            <div className="mt-6 grid gap-8 md:grid-cols-3">
              <div className="md:col-span-2">
                <p className="text-lg font-base leading-relaxed text-muted-foreground">
                  {personalInfo.bio}
                </p>
                <p className="mt-4 text-lg font-base leading-relaxed text-muted-foreground">
                  I believe in writing clean, maintainable code and building
                  products that make a real difference. When I&apos;m not
                  coding, you&apos;ll find me exploring new technologies,
                  contributing to open-source, or sharing knowledge through
                  blog posts.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="rounded-base border-2 border-border bg-secondary-background p-5 shadow-shadow">
                  <h2 className="mb-3 text-sm font-heading font-bold uppercase tracking-wider text-muted-foreground">
                    Quick Facts
                  </h2>
                  <dl className="space-y-2 text-sm font-base">
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Location</dt>
                      <dd className="font-semibold">{personalInfo.location}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Email</dt>
                      <dd className="font-semibold">{personalInfo.email}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Experience</dt>
                      <dd className="font-semibold">5+ Years</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6">
          <div className="mb-16 rounded-base border-2 border-border bg-secondary-background p-8 text-center shadow-shadow">
            <h2 className="mb-2 text-2xl font-heading font-bold">Want to know more?</h2>
            <p className="mb-6 font-base text-muted-foreground">
              Download my resume for the full story.
            </p>
            <a
              href={personalInfo.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-base bg-main text-main-foreground border-2 border-border px-6 py-3 text-sm font-base font-semibold shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>
        </section>

        <Stats />
        <Skills />
        <Timeline />
      </div>
    </PageTransition>
  );
}
