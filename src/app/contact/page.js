import { generateBreadcrumbSchema } from "@/lib/seo";
import ContactContent from "@/components/ContactContent";

export const metadata = {
  title:
    "Contact Namaste Packers and Movers | Get Free Quote for Room & Office Shifting",
  description:
    "Contact Namaste Packers and Movers for a free quote on room shifting, office shifting, vehicle transport, packing services & more in Kathmandu, Pokhara, Butwal & across Nepal. Call 24/7: +977-9851226669 or email Namastepackersnepal@gmail.com.",
  keywords: [
    "contact packers and movers nepal",
    "free moving quote kathmandu",
    "room shifting quote nepal",
    "office shifting quote kathmandu",
    "packers movers phone number nepal",
    "moving company contact nepal",
    "Namaste packers and movers contact",
  ],
  alternates: {
    canonical: "https://www.Namastepackersandmovers.com/contact",
  },
  openGraph: {
    title: "Contact Namaste Packers and Movers | Free Moving Quote Nepal",
    description:
      "Get a free quote for room shifting, office shifting, and all moving services in Nepal. Call 24/7.",
    url: "https://www.Namastepackersandmovers.com/contact",
  },
};

export default function ContactPage() {
  const breadcrumbJsonLd = generateBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ContactContent />
    </>
  );
}