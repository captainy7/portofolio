"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  index: number;
}

export function BlogCard({
  slug,
  title,
  excerpt,
  date,
  readTime,
  tags,
  index,
}: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1 }}
    >
      <Link href={`/blog/${slug}`} className="group block">
        <div className="rounded-xl border bg-card p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:border-primary/20 group-hover:border-primary/20">
          <div className="mb-3 flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {readTime}
            </span>
          </div>

          <h2 className="mb-2 text-lg font-semibold transition-colors group-hover:text-primary">
            {title}
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground line-clamp-2">
            {excerpt}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-[10px]">
                  {tag}
                </Badge>
              ))}
            </div>
            <span className="flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-all duration-200 group-hover:opacity-100">
              Read more
              <ArrowRight className="h-3 w-3" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
