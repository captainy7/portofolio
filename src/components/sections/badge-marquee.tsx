"use client";

import { skillBadges } from "@/data/portfolio";
import {
  NextjsIcon,
  ReactIcon,
  TypescriptIcon,
  NestjsIcon,
  NodejsIcon,
  PostgresqlIcon,
  PrismaIcon,
  TailwindIcon,
  DockerIcon,
  PythonIcon,
  AIIcon,
  ApiIcon,
  LinuxIcon,
} from "@/components/ui/tech-icons";

const badgeColors: Record<string, string> = {
  "Next.js": "var(--main)",
  React: "var(--main)",
  TypeScript: "var(--main-purple)",
  NestJS: "var(--main-orange)",
  "Node.js": "var(--main-orange)",
  PostgreSQL: "var(--main)",
  Prisma: "var(--main-purple)",
  "Tailwind CSS": "var(--main-pink)",
  Docker: "var(--main-orange)",
  Python: "var(--main-green)",
  "AI Integration": "var(--main-green)",
  "REST API": "var(--main-orange)",
  Linux: "var(--main-green)",
};

const badgeIcons: Record<string, React.ReactNode> = {
  "Next.js": <NextjsIcon size={14} />,
  React: <ReactIcon size={15} />,
  TypeScript: <TypescriptIcon size={14} />,
  NestJS: <NestjsIcon size={14} />,
  "Node.js": <NodejsIcon size={14} />,
  PostgreSQL: <PostgresqlIcon size={14} />,
  Prisma: <PrismaIcon size={14} />,
  "Tailwind CSS": <TailwindIcon size={14} />,
  Docker: <DockerIcon size={15} />,
  Python: <PythonIcon size={14} />,
  "AI Integration": <AIIcon size={14} />,
  "REST API": <ApiIcon size={14} />,
  Linux: <LinuxIcon size={14} />,
};

export function BadgeMarquee() {
  const items = [...skillBadges, ...skillBadges, ...skillBadges];

  return (
    <div className="relative overflow-hidden py-8">
      <div className="flex gap-3 animate-marquee" style={{ width: "max-content" }}>
        {items.map((badge, i) => {
          const color = badgeColors[badge] || "var(--main)";
          const icon = badgeIcons[badge] || <NextjsIcon size={14} />;
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
              {icon}
              {badge}
            </span>
          );
        })}
      </div>
    </div>
  );
}
