"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";

export function Timeline() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Experience
          </h2>
          <p className="mt-3 text-muted-foreground">
            My professional journey so far.
          </p>
        </div>

        <div className="relative space-y-8 pl-8 before:absolute before:left-[11px] before:top-2 before:h-[calc(100%-2rem)] before:w-[2px] before:bg-border">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-8 top-1.5 flex h-6 w-6 items-center justify-center">
                <div className="h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />
              </div>

              <div className="rounded-xl border bg-card p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:border-primary/20">
                <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                  <span className="text-xs font-medium text-muted-foreground">
                    {exp.period}
                  </span>
                </div>
                <p className="mb-2 text-sm font-medium text-primary">
                  {exp.company}
                </p>
                <p className="mb-3 text-sm text-muted-foreground">
                  {exp.description}
                </p>
                <ul className="space-y-1">
                  {exp.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
