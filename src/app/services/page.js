import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/seo";
import ServicesContent from "@/components/ServicesContent";

export const metadata = {
  title:
    "Our Services – Room Shifting, Office Shifting, Vehicle Transport & Packing | Namaste Packers and Movers Nepal",
  description:
    "Namaste Packers and Movers offers professional room shifting, office shifting, residential shifting, corporate moving, vehicle & bike transport, packing & boxing, international moving, and storage services in Kathmandu, Pokhara, Butwal & across Nepal. Call 24/7: +977-9851226669.",
  keywords: [
    "room shifting service nepal",
    "room shifting service kathmandu",
    "office shifting service nepal",
    "office shifting service kathmandu",
    "residential shifting nepal",
    "corporate moving nepal",
    "vehicle transport nepal",
    "bike transport nepal",
    "car transport service nepal",
    "packing and boxing services nepal",
    "international moving nepal",
    "storage solutions kathmandu",
    "furniture moving kathmandu",
    "house shifting nepal",
    "moving services nepal",
    "packers and movers services nepal",
  ],
  alternates: {
    canonical: "https://www.Namastepackersandmovers.com/services",
  },
  openGraph: {
    title:
      "Our Services – Room Shifting, Office Shifting & More | Namaste Packers and Movers",
    description:
      "Professional room shifting, office shifting, vehicle transport, packing & boxing across Nepal.",
    url: "https://www.Namastepackersandmovers.com/services",
  },
};

const serviceSchemaData = [
  { name: "Room Shifting Service", description: "Professional room shifting services across Nepal with safe packing, loading, and delivery." },
  { name: "Office Shifting Service", description: "Expert office shifting with IT-safe packing, furniture handling, and minimal downtime." },
  { name: "Residential Shifting", description: "Complete house shifting with fragile item protection and heavy furniture handling." },
  { name: "Corporate Moving", description: "Large-scale office and warehouse relocations with project management." },
  { name: "Vehicle & Bike Transport", description: "GPS-tracked vehicle and bike transport with door-to-door delivery." },
  { name: "Packing & Boxing Services", description: "Premium packing materials and professional packing for safe moving." },
  { name: "International Moving", description: "International relocations with customs documentation and freight options." },
  { name: "Storage Solutions", description: "Secure, affordable storage facilities with flexible rental terms." },
];

export default function ServicesPage() {
  const breadcrumbJsonLd = generateBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
  ]);

  const serviceSchemas = serviceSchemaData.map((s) =>
    generateServiceSchema({ name: s.name, description: s.description })
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {serviceSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <ServicesContent />
    </>
  );
}
