import { blogPosts } from "@/data/portfolio";
import { BlogCard } from "@/components/shared/blog-card";

export const metadata = {
  title: "Blog | Satria",
  description:
    "Thoughts on web development, programming, and technology.",
};

export default function BlogPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Blog
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
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
  );
}
