import { Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { ContactForm } from "@/components/sections/contact-form";
import { personalInfo } from "@/data/portfolio";

export const metadata = {
  title: "Contact | Satria",
  description: "Get in touch with Satria.",
};

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@satria",
    href: personalInfo.social.github,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect with me",
    href: personalInfo.social.linkedin,
  },
  {
    icon: Twitter,
    label: "Twitter",
    value: "@satria",
    href: personalInfo.social.twitter,
  },
];

export default function ContactPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Have a project, question, or just want to say hi? Drop a message.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact info sidebar */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                const content = (
                  <div className="group flex items-center gap-4 rounded-xl border bg-card p-4 transition-all duration-200 hover:border-primary/20 hover:shadow-sm">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-medium text-muted-foreground">
                        {link.label}
                      </p>
                      <p className="truncate text-sm font-medium">
                        {link.value}
                      </p>
                    </div>
                  </div>
                );

                return link.href ? (
                  <Link
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {content}
                  </Link>
                ) : (
                  <div key={link.label}>{content}</div>
                );
              })}
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
