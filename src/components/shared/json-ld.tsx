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
      personalInfo.social.twitter,
    ],
    jobTitle: personalInfo.role,
    description: personalInfo.bio,
    email: personalInfo.email,
    address: {
      "@type": "PostalAddress",
      addressCountry: "Indonesia",
    },
    knowsAbout: ["React", "Next.js", "TypeScript", "Node.js", "Go", "Web Development"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
