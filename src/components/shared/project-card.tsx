"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/social-icons";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  images?: string[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  spanFull?: boolean;
  details?: {
    highlights?: string[];
  };
  index: number;
}

export function ProjectCard({
  title,
  description,
  images,
  tags,
  liveUrl,
  githubUrl,
  spanFull,
  details,
  index,
}: ProjectCardProps) {
  const [imgIdx, setImgIdx] = useState(0);
  const [showDetail, setShowDetail] = useState(false);

  const hasImages = images && images.length > 0;

  const prevImg = () =>
    setImgIdx((i) => (i === 0 ? images!.length - 1 : i - 1));
  const nextImg = () =>
    setImgIdx((i) => (i === images!.length - 1 ? 0 : i + 1));

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05 }}
        className="h-full rounded-base border-2 border-border bg-secondary-background shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
      >
        {/* Image carousel — stacked on top */}
        {hasImages && (
          <div
            className={cn(
              "relative group w-full overflow-hidden rounded-t-base border-b-2 border-border",
              spanFull ? "aspect-[2/1]" : "aspect-[16/9]"
            )}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={imgIdx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative h-full w-full"
              >
                <img
                  src={images[imgIdx]}
                  alt={`${title} - ${imgIdx + 1}`}
                  loading="eager"
                  className="h-full w-full object-contain bg-muted p-2"
                />
              </motion.div>
            </AnimatePresence>

            {/* Nav arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImg}
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-1.5 opacity-0 shadow transition-opacity hover:bg-background group-hover:opacity-100"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={nextImg}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-1.5 opacity-0 shadow transition-opacity hover:bg-background group-hover:opacity-100"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>

                {/* Dots */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setImgIdx(i)}
                      className={cn(
                        "h-1.5 rounded-full transition-all",
                        i === imgIdx
                          ? "w-4 bg-main"
                          : "w-1.5 bg-background/60 hover:bg-background/90"
                      )}
                      aria-label={`Go to image ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* Content — below image */}
        <div className="p-6">
          <h3 className="mb-2 font-heading hover:text-main transition-colors">
            {title}
          </h3>
          <p className="mb-4 text-sm font-base leading-relaxed text-muted-foreground line-clamp-3">
            {description}
          </p>

          {/* Highlights */}
          {details?.highlights && details.highlights.length > 0 && (
            <ul className="mb-4 space-y-1">
              {details.highlights.slice(0, 4).map((h, i) => (
                <li
                  key={i}
                  className="flex items-start gap-1.5 text-xs font-base text-muted-foreground"
                >
                  <CheckCircle2 className="mt-0.5 h-3 w-3 shrink-0 text-main" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="mb-4 flex flex-wrap gap-1.5">
            {tags.slice(0, 8).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-[10px]">
                {tag}
              </Badge>
            ))}
            {tags.length > 8 && (
              <span className="text-[10px] font-base text-muted-foreground flex items-center">
                +{tags.length - 8}
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            {liveUrl && (
              <Link
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs font-base font-semibold text-muted-foreground transition-colors hover:text-main"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Live
              </Link>
            )}
            {githubUrl && (
              <Link
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs font-base font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                Source
              </Link>
            )}
            {details?.highlights && details.highlights.length > 0 && (
              <button
                onClick={() => setShowDetail(true)}
                className="ml-auto flex items-center gap-1 text-xs font-base font-semibold text-main transition-colors hover:underline"
              >
                Detail Project
              </button>
            )}
          </div>
        </div>
      </motion.div>

      {/* Detail modal */}
      <AnimatePresence>
        {showDetail && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
            onClick={() => setShowDetail(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[80vh] w-full max-w-lg overflow-y-auto rounded-base border-2 border-border bg-background p-6 shadow-shadow"
            >
              <button
                onClick={() => setShowDetail(false)}
                className="absolute right-3 top-3 rounded-base border-2 border-border p-1 hover:bg-muted transition-colors"
                aria-label="Close detail"
              >
                <X className="h-4 w-4" />
              </button>

              <h3 className="mb-4 font-heading text-xl">{title}</h3>
              <p className="mb-4 text-sm font-base leading-relaxed text-muted-foreground">
                {description}
              </p>

              <div className="mb-4 flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <h4 className="mb-2 font-heading text-sm">Highlights</h4>
              <ul className="space-y-2">
                {details?.highlights?.map((h, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm font-base text-muted-foreground"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-main" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
