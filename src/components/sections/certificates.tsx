"use client";

import { motion } from "framer-motion";
import { certificates } from "@/data/portfolio";
import { Award } from "lucide-react";

export function Certificates() {
  return (
    <section className="py-12" style={{ "--main": "var(--main-purple)" } as React.CSSProperties}>
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-1 text-2xl font-heading font-bold tracking-tight">Certificates</h2>
        <p className="mb-6 text-sm font-base text-muted-foreground">
          Professional certifications I&apos;ve earned.
        </p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="rounded-base border-2 border-border bg-secondary-background p-5 text-center shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
            >
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-base bg-main text-main-foreground border-2 border-border">
                <Award className="h-6 w-6" />
              </div>
              <p className="text-sm font-base font-semibold leading-tight">{cert.name}</p>
              <p className="mt-1 text-xs font-base text-muted-foreground">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
