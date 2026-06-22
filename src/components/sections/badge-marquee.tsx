"use client";

import { skillBadges } from "@/data/portfolio";

export function BadgeMarquee() {
  const items = [...skillBadges, ...skillBadges, ...skillBadges];

  return (
    <div className="relative overflow-hidden py-8">
      <div className="flex gap-3 animate-marquee" style={{ width: "max-content" }}>
        {items.map((badge, i) => (
          <span
            key={`${badge}-${i}`}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-base border-2 border-border bg-secondary-background px-4 py-1.5 text-sm font-base shadow-shadow"
          >
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
}
