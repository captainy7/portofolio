import { PageTransition } from "@/components/shared/page-transition";
import { Hero } from "@/components/sections/hero";
import { TechStackGrid } from "@/components/sections/tech-stack";
import { Stats } from "@/components/sections/stats";
import { Certificates } from "@/components/sections/certificates";
import { ProjectsSlim } from "@/components/sections/projects-slim";
import { SectionDivider } from "@/components/shared/section-divider";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <SectionDivider />
      <Stats />
      <SectionDivider />
      <TechStackGrid />
      <SectionDivider />
      <ProjectsSlim />
      <SectionDivider />
      <Certificates />
    </PageTransition>
  );
}
