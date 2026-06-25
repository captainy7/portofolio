import type { Metadata } from "next";
import { PageTransition } from "@/components/shared/page-transition";
import { blogPosts } from "@/data/portfolio";
import { BlogCard } from "@/components/shared/blog-card";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on web development, programming, and technology by Satria Yoga Pratama.",
  openGraph: {
    title: "Blog | Satria Yoga Pratama",
    description: "Thoughts on web development, programming, and technology.",
  },
};

export default function BlogPage() {
  return (
    <PageTransition>
      <div className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-12">
            <h1 className="text-4xl font-heading tracking-tight sm:text-5xl">
              Blog
            </h1>
            <p className="mt-3 font-base text-muted-foreground">
              Thoughts, tutorials, and insights on development.
            </p>
          </div>

          <div className="space-y-6">
            {blogPosts.map((post, idx) => (
              <BlogCard key={post.slug} {...post} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
