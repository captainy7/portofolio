import type { Metadata } from "next";
import Link from "next/link";
import { PageTransition } from "@/components/shared/page-transition";
import { notebooks } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Notebooks",
  description: "Catatan pribadi tentang development, teknologi, dan engineering oleh Satria Yoga Pratama.",
  openGraph: {
    title: "Notebooks | Satria Yoga Pratama",
    description: "Catatan pribadi tentang development dan teknologi.",
  },
};

function groupByMonth(posts: typeof notebooks) {
  const groups: Record<string, typeof notebooks> = {};
  for (const post of posts) {
    const d = new Date(post.date);
    const key = `${d.getFullYear()} ${d.toLocaleString("id-ID", { month: "long" })}`;
    if (!groups[key]) groups[key] = [];
    groups[key].push(post);
  }
  return groups;
}

export default function NotebooksPage() {
  const grouped = groupByMonth(notebooks);

  return (
    <PageTransition>
      <div className="py-16 lg:py-24" style={{ "--main": "var(--main-orange)" } as React.CSSProperties}>
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-3xl font-heading tracking-tight sm:text-4xl">
            Notebooks
          </h1>
          <p className="mt-2 font-base text-muted-foreground">
            Secuil catatan yang perlu disimpan dan dibagikan.
          </p>

          <div className="mt-12 space-y-12">
            {Object.entries(grouped).map(([month, posts]) => (
              <section key={month}>
                <h2 className="mb-4 text-sm font-heading uppercase tracking-wider text-muted-foreground">
                  {month}
                </h2>
                <div className="space-y-3">
                  {posts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/notebooks/${post.slug}`}
                      className="group flex items-start justify-between gap-4 rounded-base border-2 border-border bg-secondary-background p-5 shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
                    >
                      <div className="min-w-0">
                        <h3 className="font-heading group-hover:text-main transition-colors">
                          {post.title}
                        </h3>
                        <p className="mt-1 text-sm font-base text-muted-foreground line-clamp-1">
                          {post.excerpt}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {post.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-[10px]">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <span className="shrink-0 text-xs font-base text-muted-foreground">
                        {new Date(post.date).getDate()}
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
