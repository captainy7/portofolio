"use client";

import { motion } from "framer-motion";
import { techStack } from "@/data/portfolio";

const categoryColors: Record<string, string> = {
  Frontend: "var(--main)",
  Language: "var(--main-purple)",
  Backend: "var(--main-orange)",
  AI: "var(--main-green)",
  Database: "var(--main-orange)",
  ORM: "var(--main-purple)",
  Styling: "var(--main)",
  DevOps: "var(--main-green)",
  Validation: "var(--main-purple)",
  Charts: "var(--main-orange)",
  "State Mgmt": "var(--main)",
};

const colorList = [
  "var(--main)",
  "var(--main-purple)",
  "var(--main-green)",
  "var(--main-orange)",
];

export function TechStackGrid() {
  return (
    <section className="py-12" style={{ "--main": "var(--main-orange)" } as React.CSSProperties}>
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-1 text-2xl font-heading font-bold tracking-tight">Tech Stack</h2>
        <p className="mb-6 text-sm font-base text-muted-foreground">
          Technologies I work with on a daily basis.
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {techStack.map((tech, idx) => {
            const color = categoryColors[tech.category] || colorList[idx % colorList.length];
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.03 }}
                className="flex items-center gap-3 rounded-base border-2 p-3.5 shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
                style={{
                  backgroundColor: "color-mix(in srgb, " + color + " 15%, var(--secondary-background))",
                  borderColor: "color-mix(in srgb, " + color + " 40%, var(--border))",
                }}
              >
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-base border-2 text-sm font-heading font-bold shadow-shadow"
                  style={{
                    backgroundColor: color,
                    color: "#fff",
                    borderColor: "color-mix(in srgb, " + color + " 80%, black)",
                  }}
                >
                  {tech.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-base font-semibold">{tech.name}</p>
                  <p className="text-[11px] font-base text-muted-foreground">{tech.category}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
