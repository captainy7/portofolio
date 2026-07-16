"use client";

import { useState, use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageTransition } from "@/components/shared/page-transition";
import { notebooks } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NotebookPostPageProps {
  params: Promise<{ slug: string }>;
}

export default function NotebookPostPage({ params }: NotebookPostPageProps) {
  const resolved = use(params);
  const [lang, setLang] = useState<"en" | "id">("en");
  const post = notebooks.find((n) => n.slug === resolved.slug);
  if (!post) notFound();

  const content = lang === "en" ? post.contentEn : post.contentId;
  const hasBoth = post.contentEn && post.contentId;

  return (
    <PageTransition>
      <article className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-8 flex items-center justify-between">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/notebooks" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back
              </Link>
            </Button>

            {hasBoth && (
              <div className="flex gap-1 rounded-base border-2 border-border p-0.5">
                <button
                  onClick={() => setLang("en")}
                  className={cn(
                    "rounded-base px-2.5 py-1 text-xs font-semibold transition-all",
                    lang === "en"
                      ? "bg-main text-main-foreground shadow-shadow"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  EN
                </button>
                <button
                  onClick={() => setLang("id")}
                  className={cn(
                    "rounded-base px-2.5 py-1 text-xs font-semibold transition-all",
                    lang === "id"
                      ? "bg-main text-main-foreground shadow-shadow"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  ID
                </button>
              </div>
            )}
          </div>

          <header className="mb-10">
            <div className="mb-3 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
            <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-3 font-medium text-muted-foreground">{post.excerpt}</p>
          </header>

          <div className="font-medium leading-relaxed space-y-5">
            {content
              ? content.map((paragraph, i) => <p key={i}>{paragraph}</p>)
              : <p>{post.excerpt}</p>}
          </div>
        </div>
      </article>
    </PageTransition>
  );
}
