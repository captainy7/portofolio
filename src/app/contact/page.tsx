import type { Metadata } from "next";
import { Mail, MapPin, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";
import Link from "next/link";
import { PageTransition } from "@/components/shared/page-transition";
import { ContactForm } from "@/components/sections/contact-form";
import { personalInfo } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Satria Yoga Pratama for collaboration, projects, or just to say hi.",
  openGraph: {
    title: "Contact | Satria Yoga Pratama",
    description: "Get in touch with Satria Yoga Pratama.",
  },
};

const contactLinks = [
  { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: MapPin, label: "Location", value: personalInfo.location },
  { icon: GithubIcon, label: "GitHub", value: "@satria", href: personalInfo.social.github },
  { icon: LinkedinIcon, label: "LinkedIn", value: "Connect with me", href: personalInfo.social.linkedin },

  { icon: Download, label: "Resume", value: "Download PDF", href: personalInfo.resumeUrl },
];

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-12">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-3 font-medium text-muted-foreground">
              Have a project, question, or just want to say hi? Drop a message.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {contactLinks.map((link) => {
                  const Icon = link.icon;
                  const content = (
                    <div className="flex items-center gap-4 rounded-base border-2 border-border bg-secondary-background p-4 shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-base border-2 border-border bg-main text-main-foreground shadow-shadow">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-medium text-muted-foreground">{link.label}</p>
                        <p className="truncate text-sm font-medium font-semibold">{link.value}</p>
                      </div>
                    </div>
                  );

                  return link.href ? (
                    <Link key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                      {content}
                    </Link>
                  ) : (
                    <div key={link.label}>{content}</div>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
