import { generateBreadcrumbSchema } from "@/lib/seo";
import GalleryContent from "@/components/GalleryContent";

export const metadata = {
  title: "Gallery – Photos & Videos | Namaste Packers and Movers Nepal",
  description:
    "Browse photos and videos of Namaste Packers and Movers in action. See our professional room shifting, office shifting, vehicle transport, packing services, and more across Kathmandu, Pokhara, Butwal, Biratnagar & all of Nepal.",
  keywords: [
    "Namaste packers and movers gallery",
    "moving company photos nepal",
    "packers movers videos kathmandu",
    "room shifting photos nepal",
    "office shifting videos",
    "vehicle transport gallery",
    "packing service images nepal",
    "moving company nepal images",
  ],
  alternates: {
    canonical: "https://www.Namastepackersandmovers.com/gallery",
  },
  openGraph: {
    title: "Gallery – Photos & Videos | Namaste Packers and Movers Nepal",
    description:
      "See our professional moving services in action. Photos & videos of room shifting, office shifting, vehicle transport and more across Nepal.",
    url: "https://www.Namastepackersandmovers.com/gallery",
  },
};

export default function GalleryPage() {
  const breadcrumbJsonLd = generateBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/gallery" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <GalleryContent />
    </>
  );
}
