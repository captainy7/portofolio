import type { Metadata } from "next";
import ProjectsClient from "./client";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore projects built by Satria Yoga Pratama — web apps, APIs, and open-source contributions using React, Next.js, Go, and more.",
  openGraph: {
    title: "Projects | Satria Yoga Pratama",
    description: "Explore projects built by Satria Yoga Pratama.",
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
