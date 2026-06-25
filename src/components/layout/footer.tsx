import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { personalInfo } from "@/data/portfolio";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t-2">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">
        <p className="text-sm font-medium text-muted-foreground">
          &copy; {year} {personalInfo.name}. Built with Next.js.
        </p>
        <div className="flex items-center gap-3">
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

        </div>
      </div>
    </footer>
  );
}
