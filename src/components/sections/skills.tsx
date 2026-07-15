"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const categoryColors: Record<string, string> = {
  Frontend: "bg-main text-main-foreground",
  Backend: "bg-main text-main-foreground",
  Language: "bg-main text-main-foreground",
  Database: "bg-main text-main-foreground",
  DevOps: "bg-main text-main-foreground",
};

const categories = [...new Set(skills.map((s) => s.category))];

export function Skills() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-1 text-2xl font-bold tracking-tight sm:text-2xl">
          Skills
        </h2>
        <p className="mb-6 font-medium text-muted-foreground">
          Tools and technologies I work with.
        </p>

        <div className="space-y-6">
          {categories.map((category, catIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1 }}
            >
              <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills
                  .filter((s) => s.category === category)
                  .map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-2 rounded-base border-2 border-border bg-secondary-background px-3 py-1.5 text-sm font-medium shadow-shadow"
                    >
                      {skill.name}
                    </span>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
