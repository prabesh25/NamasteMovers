import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/seo";

export const metadata = {
  title:
    "Our Services – Room Shifting, Office Shifting, Vehicle Transport & Packing | Fast Packers and Movers Nepal",
  description:
    "Fast Packers and Movers offers professional room shifting, office shifting, residential shifting, corporate moving, vehicle & bike transport, packing & boxing, international moving, and storage services in Kathmandu, Pokhara, Butwal & across Nepal. Call 24/7: +977-9851226669.",
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
    canonical: "https://www.fastpackersandmovers.com.np/services",
  },
  openGraph: {
    title:
      "Our Services – Room Shifting, Office Shifting & More | Fast Packers and Movers",
    description:
      "Professional room shifting, office shifting, vehicle transport, packing & boxing across Nepal.",
    url: "https://www.fastpackersandmovers.com.np/services",
  },
};

const services = [
  {
    name: "Room Shifting Service",
    slug: "room-shifting",
    description:
      "Need to shift your room in Kathmandu, Pokhara, Butwal, or anywhere in Nepal? Fast Packers and Movers provides safe, affordable, and professional room shifting services with careful packing, loading, transport, and unpacking at your new location. Whether it's a single room, hostel, or PG accommodation — our trained crew handles everything with care.",
    features: [
      "Safe packing of all belongings",
      "Careful loading and unloading",
      "Door-to-door room shifting",
      "Available in Kathmandu, Pokhara, Butwal & all Nepal",
      "Same-day room shifting available",
      "Affordable pricing with no hidden charges",
    ],
    img: "/ResidentialShifting.jpg",
  },
  {
    name: "Office Shifting Service",
    slug: "office-shifting",
    description:
      "Planning to shift your office in Kathmandu or other cities in Nepal? Fast Packers and Movers specializes in professional office shifting with IT-safe packing, furniture disassembly/assembly, and minimal business downtime. We handle everything from small offices to large corporate relocations across Nepal.",
    features: [
      "IT equipment safe packing",
      "Furniture disassembly & reassembly",
      "Minimal business downtime",
      "Corporate relocation specialists",
      "Available weekends & nights",
      "Serving Kathmandu, Pokhara, Butwal & all Nepal",
    ],
    img: "/corporateMoving.jpg",
  },
  {
    name: "Residential Shifting",
    slug: "residential-shifting",
    description:
      "Moving to a new home in Nepal? Our residential shifting service covers everything — from careful packing of fragile items to safe transport of heavy furniture. Whether you're moving within Kathmandu Valley or to another city, Fast Packers and Movers ensures a stress-free house shifting experience.",
    features: [
      "Complete house shifting solution",
      "Fragile item protection",
      "Heavy furniture handling",
      "Apartment & villa moves",
      "Within city & intercity moves",
      "Transparent pricing",
    ],
    img: "/ResidentialShifting.jpg",
  },
  {
    name: "Corporate Moving",
    slug: "corporate-moving",
    description:
      "Fast Packers and Movers provides professional corporate moving services in Nepal. We handle large-scale office relocations, warehouse moves, and commercial shifting with project management, IT equipment handling, and employee coordination for seamless transitions.",
    features: [
      "Large-scale office relocations",
      "Warehouse & commercial shifting",
      "Project-managed moves",
      "IT & server room relocation",
      "Employee coordination",
      "Pan-Nepal corporate coverage",
    ],
    img: "/corporateMoving.jpg",
  },
  {
    name: "Vehicle & Bike Transport",
    slug: "vehicle-bike-transport",
    description:
      "Need to transport your car or bike across Nepal? Fast Packers and Movers offers secure vehicle and bike transport services with GPS tracking, safe loading on carriers, and door-to-door delivery. Whether it's a motorcycle, scooter, car, or SUV — we transport vehicles safely across Kathmandu, Pokhara, Butwal, Biratnagar, and all Nepal.",
    features: [
      "Car transport across Nepal",
      "Bike & motorcycle transport",
      "GPS tracking for vehicles",
      "Secure carrier loading",
      "Door-to-door vehicle delivery",
      "Insurance coverage available",
    ],
    img: "/vehicleAndBikeTransport.jpg",
  },
  {
    name: "Packing & Boxing Services",
    slug: "packing-boxing",
    description:
      "Professional packing and boxing services for safe moving in Nepal. We use premium packing materials — bubble wrap, corrugated boxes, foam sheets, and custom crating — to protect your fragile, heavy, and valuable items during room shifting, office shifting, and intercity moves.",
    features: [
      "Premium packing materials",
      "Bubble wrap & foam protection",
      "Custom crating for fragile items",
      "Systematic labeling & inventory",
      "Artwork & antique packing",
      "Available as standalone service",
    ],
    img: "/PackingAndBoxing.jpg",
  },
  {
    name: "International Moving",
    slug: "international-moving",
    description:
      "Planning to move abroad from Nepal? Fast Packers and Movers handles international relocations with customs documentation, safe packing for air/sea freight, and door-to-door delivery to your destination country. We manage moves from Nepal to India, Gulf countries, USA, UK, Australia, and worldwide.",
    features: [
      "Customs documentation support",
      "Air & sea freight options",
      "Door-to-door international delivery",
      "Insurance for international moves",
      "Moves to India, Gulf, USA, UK, Australia & more",
      "Expert packing for long-distance transport",
    ],
    img: "/InternationalMoving.jpg",
  },
  {
    name: "Storage Solutions",
    slug: "storage-solutions",
    description:
      "Need temporary storage during your move? Fast Packers and Movers offers clean, secure, and affordable storage solutions in Kathmandu. Store your furniture, household items, office equipment, or vehicles for days, weeks, or months with flexible rental terms and easy access.",
    features: [
      "Clean & secure storage facilities",
      "Flexible rental terms",
      "Household & office item storage",
      "Vehicle storage available",
      "24/7 security monitoring",
      "Easy access during business hours",
    ],
    img: "/storageSolutions.webp",
  },
];

export default function ServicesPage() {
  const breadcrumbJsonLd = generateBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
  ]);

  // Generate JSON-LD for each service
  const serviceSchemas = services.map((s) =>
    generateServiceSchema({ name: s.name, description: s.description })
  );

  return (
    <div className="section py-20 space-y-12">
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

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
        <ol className="flex items-center gap-1">
          <li>
            <a href="/" className="hover:text-red-500 transition">
              Home
            </a>
          </li>
          <li>/</li>
          <li className="text-slate-900 font-semibold">Services</li>
        </ol>
      </nav>

      <div className="max-w-4xl space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
          Our Moving & Packing Services in Nepal
        </h1>
        <p className="text-slate-600 text-lg">
          <strong>Fast Packers and Movers</strong> offers a complete range of
          professional moving services including{" "}
          <strong>room shifting</strong>, <strong>office shifting</strong>,{" "}
          <strong>residential shifting</strong>,{" "}
          <strong>corporate moving</strong>,{" "}
          <strong>vehicle &amp; bike transport</strong>,{" "}
          <strong>packing &amp; boxing</strong>,{" "}
          <strong>international moving</strong>, and{" "}
          <strong>storage solutions</strong> in Kathmandu, Pokhara, Butwal,
          Biratnagar, and across Nepal. Call us 24/7 at{" "}
          <a
            href="tel:+9779851226669"
            className="text-red-500 font-semibold hover:underline"
          >
            +977-9851226669
          </a>{" "}
          for a free quote.
        </p>
      </div>

      {/* Service Cards */}
      <div className="space-y-12">
        {services.map((service, index) => (
          <article
            key={service.slug}
            id={service.slug}
            className="card p-6 md:p-8 space-y-4"
          >
            <div
              className={`grid gap-6 md:grid-cols-2 items-center ${
                index % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              {/* Image */}
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={service.img}
                  alt={`${service.name} in Nepal - Fast Packers and Movers`}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">
                  {service.name} in Nepal
                </h2>
                <p className="text-slate-600">{service.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-slate-700"
                    >
                      <span className="text-green-500 mt-0.5">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-red-500 px-5 py-3 text-sm font-semibold text-white hover:bg-red-600 transition"
                >
                  Get Free Quote for {service.name} →
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Bottom SEO content */}
      <article className="card p-6 md:p-8 space-y-4">
        <h2 className="text-xl font-bold text-slate-900">
          Why Choose Fast Packers and Movers for Your Moving Needs in Nepal?
        </h2>
        <p className="text-slate-600">
          Fast Packers and Movers is Nepal's most trusted moving company with
          over 15 years of experience. We provide professional{" "}
          <strong>room shifting in Kathmandu</strong>,{" "}
          <strong>office shifting in Pokhara</strong>,{" "}
          <strong>house shifting in Butwal</strong>,{" "}
          <strong>vehicle transport across Nepal</strong>, and expert{" "}
          <strong>packing &amp; boxing services</strong>. Our 500+ trained
          professionals, 12+ branch offices, and 15,000+ satisfied customers
          make us the #1 choice for moving and packing in Nepal. Whether you're
          shifting a single room or an entire corporate office, we guarantee
          safe, affordable, and on-time delivery. Call{" "}
          <a
            href="tel:+9779851226669"
            className="text-red-500 font-semibold hover:underline"
          >
            +977-9851226669
          </a>{" "}
          for a free estimate today.
        </p>
      </article>
    </div>
  );
}
