import { generateBreadcrumbSchema } from "@/lib/seo";
import AboutContent from "@/components/AboutContent";

export const metadata = {
  title: "About Fast Packers and Movers – Nepal's Trusted Moving Company Since 2010",
  description:
    "Learn about Fast Packers and Movers, Nepal's most trusted packers and movers since 2010. 15,000+ successful moves, 500+ team members, 8+ branches. Professional room shifting, office shifting, residential moving, corporate relocation, vehicle transport, and packing services in Kathmandu, Pokhara, Butwal, Biratnagar & across Nepal.",
  keywords: [
    "about fast packers and movers",
    "best moving company nepal",
    "trusted packers movers kathmandu",
    "professional movers nepal",
    "licensed moving company nepal",
    "experienced packers and movers nepal",
    "moving company history nepal",
    "fast packers team",
  ],
  alternates: {
    canonical: "https://www.fastpackersandmovers.com/about",
  },
  openGraph: {
    title: "About Fast Packers and Movers – Nepal's #1 Moving Company Since 2010",
    description:
      "Nepal's most trusted packers and movers since 2010. 15,000+ moves, 500+ team members, 8+ branches. Professional room shifting, office shifting, and more across Nepal.",
    url: "https://www.fastpackersandmovers.com/about",
  },
};

export default function AboutPage() {
  const breadcrumbJsonLd = generateBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <AboutContent />
    </>
  );
}