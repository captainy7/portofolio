import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageTransition } from "@/components/shared/page-transition";
import { notebooks } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface NotebookPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return notebooks.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: NotebookPageProps) {
  const { slug } = await params;
  const post = notebooks.find((n) => n.slug === slug);
  if (!post) return { title: "Not Found" };
  return { title: `${post.title} | Satria`, description: post.excerpt };
}

export default async function NotebookPostPage({ params }: NotebookPageProps) {
  const { slug } = await params;
  const post = notebooks.find((n) => n.slug === slug);

  if (!post) notFound();

  return (
    <PageTransition>
      <article className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-8">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/notebooks" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to notebooks
              </Link>
            </Button>
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
            {post.content ? (
              post.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))
            ) : (
              <p>{post.excerpt}</p>
            )}
          </div>
        </div>
      </article>
    </PageTransition>
  );
}
