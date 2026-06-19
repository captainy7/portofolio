"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import { ProjectCard } from "@/components/shared/project-card";

const allTags = [...new Set(projects.flatMap((p) => p.tags))].sort();

export default function ProjectsPage() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = activeTag
    ? projects.filter((p) => p.tags.includes(activeTag))
    : projects;

  return (
    <div className="py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Projects
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Things I&apos;ve built and contributed to.
          </p>
        </div>

        {/* Filter tags */}
        <div className="mb-10 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTag(null)}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
              !activeTag
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
                activeTag === tag
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <motion.div
          layout
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((project, idx) => (
            <ProjectCard
              key={project.id}
              {...project}
              index={idx}
            />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="py-20 text-center text-muted-foreground">
            No projects found with tag &quot;{activeTag}&quot;.
          </div>
        )}
      </div>
    </div>
  );
}
