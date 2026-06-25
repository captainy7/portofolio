"use client";

import { motion } from "framer-motion";
import { certificates } from "@/data/portfolio";
import { Award } from "lucide-react";

export function Certificates() {
  return (
    <section className="py-12" style={{ "--main": "var(--main-purple)" } as React.CSSProperties}>
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-1 text-2xl font-bold tracking-tight">Certificates</h2>
        <p className="mb-6 text-sm font-medium text-muted-foreground">
          Professional certifications I&apos;ve earned.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {certificates.map((cert, idx) => (
            <motion.a
              key={cert.name}
              href={cert.image}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group rounded-base border-2 border-border bg-secondary-background p-4 shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
            >
              <div className="relative mb-3 aspect-[1.4/1] w-full overflow-hidden rounded-base border-2 border-border bg-muted">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="h-full w-full object-contain p-2"
                />
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-base bg-main text-main-foreground border-2 border-border">
                  <Award className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium font-semibold leading-tight">{cert.name}</p>
                  <p className="mt-0.5 text-xs font-medium text-muted-foreground">{cert.issuer}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
