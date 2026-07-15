"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Download, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { Button } from "@/components/ui/button";
import { BadgeMarquee } from "@/components/sections/badge-marquee";
import { Typewriter } from "@/components/shared/typewriter";
import { personalInfo } from "@/data/portfolio";

export function Hero() {
  return (
    <section className="flex flex-col">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center px-6 pt-20 text-center sm:pt-28">
        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-5"
        >
          <div className="mx-auto h-40 w-40 overflow-hidden rounded-base border-2 border-border shadow-shadow md:h-48 md:w-48">
            {personalInfo.avatar ? (
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                width={96}
                height={96}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-main text-main-foreground text-3xl font-bold">
                {personalInfo.name.charAt(0)}
              </div>
            )}
          </div>
        </motion.div>

        {/* Handle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-1 text-sm text-main font-mono font-medium"
        >
          @{personalInfo.handle}
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl min-h-[2.5rem]"
        >
          <Typewriter text={personalInfo.name} />
        </motion.h1>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 max-w-xl text-sm font-medium leading-relaxed text-muted-foreground text-balance"
        >
          {personalInfo.heroBio}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-3"
        >
          <Button size="sm" asChild>
            <Link href="/projects">
              View Projects
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href={personalInfo.resumeUrl} download>
              <Download className="h-3.5 w-3.5" />
              Resume
            </a>
          </Button>
        </motion.div>

        {/* Social */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mt-5 flex items-center gap-3"
        >
          <Link
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-base border-2 border-border p-2 text-foreground shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
            aria-label="GitHub"
          >
            <GithubIcon className="h-4 w-4" />
          </Link>
          <Link
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-base border-2 border-border p-2 text-foreground shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>

      <BadgeMarquee />
    </section>
  );
}
