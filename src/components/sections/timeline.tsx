"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";

export function Timeline() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-1 text-2xl font-heading font-bold tracking-tight sm:text-2xl">
          Experience
        </h2>
        <p className="mb-6 font-base text-muted-foreground">
          My professional journey so far.
        </p>

        <div className="space-y-4">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-base border-2 border-border bg-secondary-background p-6 shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
            >
              <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-heading font-bold">{exp.role}</h3>
                <span className="text-xs font-base text-muted-foreground">
                  {exp.period}
                </span>
              </div>
              <p className="mb-2 text-sm font-base font-semibold text-main">
                {exp.company}
              </p>
              <p className="mb-3 text-sm font-base text-muted-foreground">
                {exp.description}
              </p>
              <ul className="space-y-1">
                {exp.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm font-base text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-base bg-main" />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
