import { personalInfo } from "@/data/portfolio";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    givenName: "Satria Yoga",
    familyName: "Pratama",
    alternateName: "Satria",
    url: "https://satriayogapratama.dev",
    sameAs: [
      personalInfo.social.github,
      personalInfo.social.linkedin,
    ],
    jobTitle: personalInfo.role,
    description: personalInfo.heroBio,
    email: personalInfo.email,
    address: {
      "@type": "PostalAddress",
      addressCountry: "Indonesia",
    },
    knowsAbout: ["React", "Next.js", "TypeScript", "Node.js", "NestJS", "Web Development"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
