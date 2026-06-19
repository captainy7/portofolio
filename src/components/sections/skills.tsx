"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const categoryColors: Record<string, string> = {
  Frontend: "border-primary/30 bg-primary/5 text-primary",
  Backend: "border-secondary/30 bg-secondary/5 text-secondary",
  Language: "border-accent/30 bg-accent/5 text-accent",
  Database: "border-amber-500/30 bg-amber-500/5 text-amber-500",
  DevOps: "border-emerald-500/30 bg-emerald-500/5 text-emerald-500",
};

const categories = [...new Set(skills.map((s) => s.category))];

export function Skills() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Skills & Technologies
          </h2>
          <p className="mt-3 text-muted-foreground">
            Tools and technologies I work with on a daily basis.
          </p>
        </div>

        <div className="space-y-8">
          {categories.map((category, catIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: catIdx * 0.1 }}
            >
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills
                  .filter((s) => s.category === category)
                  .map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 + catIdx * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className={cn(
                        "rounded-xl border px-4 py-2 text-sm font-medium transition-all duration-200",
                        categoryColors[category] ||
                          "border-border bg-muted text-foreground"
                      )}
                    >
                      {skill.name}
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
