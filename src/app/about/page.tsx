import { Skills } from "@/components/sections/skills";
import { Timeline } from "@/components/sections/timeline";
import { personalInfo } from "@/data/portfolio";

export const metadata = {
  title: "About | Satria",
  description: "Learn more about Satria — skills, experience, and background.",
};

export default function AboutPage() {
  return (
    <div className="py-16 lg:py-24">
      {/* Bio section */}
      <section className="mx-auto max-w-4xl px-6">
        <div className="mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            About Me
          </h1>
          <div className="mt-6 grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {personalInfo.bio}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                I believe in writing clean, maintainable code and building
                products that make a real difference. When I&apos;m not
                coding, you&apos;ll find me exploring new technologies,
                contributing to open-source, or sharing knowledge through
                blog posts.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="rounded-xl border bg-card p-5">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Quick Facts
                </h3>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Location</dt>
                    <dd className="font-medium">{personalInfo.location}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Email</dt>
                    <dd className="font-medium">{personalInfo.email}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Experience</dt>
                    <dd className="font-medium">5+ Years</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Status</dt>
                    <dd className="flex items-center gap-1.5 font-medium text-green-600 dark:text-green-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                      Available
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Skills />
      <Timeline />
    </div>
  );
}
