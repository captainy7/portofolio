import type { Metadata } from "next";
import { PageTransition } from "@/components/shared/page-transition";
import { Skills } from "@/components/sections/skills";
import { Stats } from "@/components/sections/stats";
import { Timeline } from "@/components/sections/timeline";
import { personalInfo } from "@/data/portfolio";
import { Download } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Satria Yoga Pratama — software engineer passionate about building modern web applications, from frontend to backend.",
  openGraph: {
    title: "About | Satria Yoga Pratama",
    description: "Software engineer passionate about building modern web applications.",
  },
};

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="py-16 lg:py-24">
        <section className="mx-auto max-w-4xl px-6">
          <div className="mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              About Me
            </h1>
            <div className="mt-6 grid gap-8 md:grid-cols-3">
              <div className="md:col-span-2">
                <p className="text-lg font-medium leading-relaxed text-muted-foreground">
                  {personalInfo.heroBio}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="rounded-base border-2 border-border bg-secondary-background p-5 shadow-shadow">
                  <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-muted-foreground">
                    Quick Facts
                  </h2>
                  <dl className="space-y-2 text-sm font-medium">
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Location</dt>
                      <dd className="font-semibold">{personalInfo.location}</dd>
                    </div>
                    <div className="flex flex-col gap-1">
                      <dt className="text-xs text-muted-foreground">Email</dt>
                      <dd className="text-sm font-semibold break-all">{personalInfo.email}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Projects</dt>
                      <dd className="font-semibold">5 Shipped</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6">
          <div className="mb-16 rounded-base border-2 border-border bg-secondary-background p-8 text-center shadow-shadow">
            <h2 className="mb-2 text-2xl font-bold">Want to know more?</h2>
            <p className="mb-6 font-medium text-muted-foreground">
              Download my resume for the full story.
            </p>
            <a
              href={personalInfo.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-base bg-main text-main-foreground border-2 border-border px-6 py-3 text-sm font-medium font-semibold shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
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
