"use client";

import { motion } from "framer-motion";
import { techStack } from "@/data/portfolio";

export function TechStackGrid() {
  return (
    <section className="py-12" style={{ "--main": "var(--main-orange)" } as React.CSSProperties}>
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-1 text-2xl font-heading font-bold tracking-tight">Tech Stack</h2>
        <p className="mb-6 text-sm font-base text-muted-foreground">
          Technologies I work with on a daily basis.
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {techStack.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.03 }}
              className="flex items-center gap-3 rounded-base border-2 border-border bg-secondary-background p-3.5 shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-base bg-main text-main-foreground border-2 border-border text-sm font-heading font-bold">
                {tech.icon}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-base font-semibold">{tech.name}</p>
                <p className="text-[11px] font-base text-muted-foreground">{tech.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
