"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  index: number;
}

export function ProjectCard({
  title,
  description,
  tags,
  liveUrl,
  githubUrl,
  featured,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className={cn(
        "group relative rounded-xl border bg-card p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:border-primary/20",
        featured && "md:col-span-2"
      )}
    >
      {featured && (
        <div className="absolute right-4 top-4">
          <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
            Featured
          </span>
        </div>
      )}

      {/* Gradient hover effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/0 via-primary/0 to-primary/[0.02] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10">
        {/* Icon placeholder */}
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
          <div className="h-5 w-5 rounded-md bg-primary/20" />
        </div>

        <h3 className="mb-2 text-lg font-semibold group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground line-clamp-2">
          {description}
        </p>

        <div className="mb-4 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <Badge key={tag} variant="default" className="text-[10px]">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Live
            </Link>
          )}
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-3.5 w-3.5" />
              Source
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
