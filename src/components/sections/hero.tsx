"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { left, top, width, height } =
        containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      containerRef.current.style.setProperty("--mouse-x", `${x}`);
      containerRef.current.style.setProperty("--mouse-y", `${y}`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[calc(100vh-57px)] flex-col items-center justify-center overflow-hidden px-6 lg:min-h-screen"
    >
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-secondary/5 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-3xl" />
      </div>

      {/* Animated grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {/* Greeting */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-muted/50 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          Available for opportunities
        </div>

        {/* Name & Role */}
        <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
        </h1>

        <p className="mb-2 text-xl font-medium text-foreground/80 sm:text-2xl">
          {personalInfo.role}
        </p>

        <p className="mx-auto mb-8 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
          {personalInfo.tagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/projects">
              View Projects
              <ArrowDown className="ml-1 h-4 w-4 rotate-[-90deg]" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>

        {/* Social Links */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <Link
            href={personalInfo.social.github}
            className="rounded-full border p-2.5 text-muted-foreground transition-all duration-200 hover:border-primary hover:text-primary hover:shadow-sm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </Link>
          <Link
            href={personalInfo.social.linkedin}
            className="rounded-full border p-2.5 text-muted-foreground transition-all duration-200 hover:border-secondary hover:text-secondary hover:shadow-sm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </Link>
          <Link
            href={personalInfo.social.twitter}
            className="rounded-full border p-2.5 text-muted-foreground transition-all duration-200 hover:border-accent hover:text-accent hover:shadow-sm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <Twitter className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-1 text-xs text-muted-foreground">
          <span>Scroll</span>
          <ArrowDown className="h-3.5 w-3.5" />
        </div>
      </div>
    </section>
  );
}
