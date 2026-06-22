"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/portfolio";

export function ProjectsSlim() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="py-12" style={{ "--main": "var(--main-pink)" } as React.CSSProperties}>
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-heading font-bold tracking-tight">Projects</h2>
            <p className="mt-1 text-sm font-base text-muted-foreground">
              Some things I&apos;ve built.
            </p>
          </div>
          <Link
            href="/projects"
            className="flex items-center gap-1 text-sm font-base font-semibold text-main transition-colors hover:underline"
          >
            View all
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="space-y-4">
          {featured.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
            >
              <Link
                href={project.liveUrl || project.githubUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between gap-4 rounded-base border-2 border-border bg-secondary-background p-5 shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
              >
                <div className="min-w-0">
                  <h3 className="font-heading font-bold group-hover:text-main transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm font-base text-muted-foreground line-clamp-1">
                    {project.description}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-[10px]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-muted-foreground" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
