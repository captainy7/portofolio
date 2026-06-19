import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | Satria`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-6">
        {/* Back button */}
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/blog" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to blog
            </Link>
          </Button>
        </div>

        {/* Header */}
        <header className="mb-12">
          <div className="mb-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="default">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>
        </header>

        {/* Content (simulated for now) */}
        <div className="prose prose-zinc max-w-none dark:prose-invert prose-headings:font-bold prose-a:text-primary prose-code:rounded prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-pre:border">
          <p className="lead text-lg text-muted-foreground">
            {post.excerpt}
          </p>

          <h2>Introduction</h2>
          <p>
            This is a placeholder for the full blog post content. In a
            production version, this would be rendered from MDX or fetched
            from a CMS. The layout, typography, and spacing are designed to
            provide a great reading experience.
          </p>

          <h2>Getting Started</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>

          <pre><code>{`// Example code block
function hello() {
  console.log("Hello, world!");
}`}</code></pre>

          <h2>Key Concepts</h2>
          <ul>
            <li>First important concept with detailed explanation</li>
            <li>Second concept that builds on the first one</li>
            <li>Third concept that ties everything together</li>
          </ul>

          <h2>Conclusion</h2>
          <p>
            This concludes the article placeholder. The actual content would
            be written in MDX format and stored in a <code>content/</code>{" "}
            directory or fetched from a headless CMS.
          </p>
        </div>
      </div>
    </article>
  );
}
