"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/shared/page-transition";
import { projects } from "@/data/portfolio";
import { ProjectCard } from "@/components/shared/project-card";
import { cn } from "@/lib/utils";

const allTags = [...new Set(projects.flatMap((p) => p.tags))].sort();

export default function ProjectsClient() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = activeTag
    ? projects.filter((p) => p.tags.includes(activeTag))
    : projects;

  return (
    <PageTransition>
      <div className="py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-12">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Projects
            </h1>
            <p className="mt-3 font-medium text-muted-foreground">
              Things I&apos;ve built and contributed to.
            </p>
          </div>

          <div className="mb-10 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTag(null)}
              className={`rounded-base border-2 px-3 py-1.5 text-xs font-medium font-semibold transition-all ${
                !activeTag
                  ? "bg-main text-main-foreground border-border shadow-shadow"
                  : "bg-secondary-background text-foreground border-border hover:bg-muted"
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`rounded-base border-2 px-3 py-1.5 text-xs font-medium font-semibold transition-all ${
                  activeTag === tag
                    ? "bg-main text-main-foreground border-border shadow-shadow"
                    : "bg-secondary-background text-foreground border-border hover:bg-muted"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <motion.div layout className="grid gap-6 sm:grid-cols-2">
            {filtered.map((project, idx) => (
              <div
                key={project.id}
                className={cn(project.spanFull && "sm:col-span-2")}
              >
                <ProjectCard {...project} index={idx} />
              </div>
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <div className="py-20 text-center font-medium text-muted-foreground">
              No projects found with tag &quot;{activeTag}&quot;.
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
}
