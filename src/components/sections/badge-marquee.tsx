"use client";

import { skillBadges } from "@/data/portfolio";

const colors = [
  "var(--main)",
  "var(--main-purple)",
  "var(--main-green)",
  "var(--main-pink)",
  "var(--main-orange)",
];

const badgeIcons: Record<string, string> = {
  "Next.js": "▲",
  React: "⚛️",
  TypeScript: "TS",
  NestJS: "🐱",
  "Node.js": "💚",
  PostgreSQL: "🐘",
  Prisma: "▲",
  "Tailwind CSS": "🌊",
  Docker: "🐳",
  Python: "🐍",
  "AI Integration": "🤖",
  "REST API": "🔗",
  Linux: "🐧",
};

export function BadgeMarquee() {
  const items = [...skillBadges, ...skillBadges, ...skillBadges];

  return (
    <div className="relative overflow-hidden py-8">
      <div className="flex gap-3 animate-marquee" style={{ width: "max-content" }}>
        {items.map((badge, i) => {
          const color = colors[i % colors.length];
          const icon = badgeIcons[badge] || "▸";
          return (
            <span
              key={`${badge}-${i}`}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-base border-2 border-border px-4 py-1.5 text-sm font-semibold"
              style={{
                backgroundColor: color,
                color: "#fff",
                borderColor: "color-mix(in srgb, " + color + " 80%, black)",
              }}
            >
              <span className="text-[15px] leading-none">{icon}</span>
              {badge}
            </span>
          );
        })}
      </div>
    </div>
  );
}
