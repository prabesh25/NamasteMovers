import { generateBreadcrumbSchema } from "@/lib/seo";
import LocationsContent from "@/components/LocationsContent";

export const metadata = {
  title:
    "Service Areas – Room Shifting & Office Shifting Across Nepal | Fast Packers and Movers",
  description:
    "Fast Packers and Movers provides room shifting, office shifting, residential moving, vehicle transport & packing services in Kathmandu, Lalitpur, Bhaktapur, Pokhara, Butwal, Biratnagar, Dharan, Chitwan, Hetauda, Janakpur & more cities in Nepal.",
  keywords: [
    "packers and movers service areas nepal",
    "room shifting kathmandu",
    "room shifting lalitpur",
    "room shifting bhaktapur",
    "room shifting pokhara",
    "office shifting kathmandu",
    "office shifting butwal",
    "office shifting biratnagar",
    "house shifting nepal",
    "moving services chitwan",
    "packers movers dharan",
    "packers movers hetauda",
    "packers movers janakpur",
  ],
  alternates: {
    canonical: "https://www.fastpackersandmovers.com/locations",
  },
  openGraph: {
    title:
      "Service Areas – Room & Office Shifting Across Nepal",
    description:
      "Find Fast Packers and Movers in your city. Room shifting, office shifting & more across Kathmandu, Pokhara, Butwal & all Nepal.",
    url: "https://www.fastpackersandmovers.com/locations",
  },
};

export default function LocationsPage() {
  const breadcrumbJsonLd = generateBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Service Areas", href: "/locations" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <LocationsContent />
    </>
  );
}