import { generateBreadcrumbSchema } from "@/lib/seo";

const locations = [
  {
    city: "New Baneshwor, Kathmandu",
    desc: "Same-day room shifting, office shifting, and residential moving with local experts for high-rise apartment moves.",
  },
  {
    city: "Balaju, Kathmandu",
    desc: "End-to-end packing and boxing services with careful handling for house shifting and furniture moving.",
  },
  {
    city: "Biratnagar, Morang",
    desc: "Reliable packers and movers in Biratnagar for intercity moves, vehicle transport, and corporate relocation.",
  },
  {
    city: "Butwal",
    desc: "Professional office shifting and room shifting in Butwal with flexible scheduling and affordable pricing.",
  },
  {
    city: "Chabahil, Kathmandu",
    desc: "Fragile-safe packing, room shifting, and quick response for residential and office moves in Chabahil.",
  },
  {
    city: "Chitwan",
    desc: "Trusted packers and movers in Chitwan for local and intercity house shifting, vehicle transport, and corporate moving.",
  },
  {
    city: "Dharan",
    desc: "Efficient room shifting, office shifting, and furniture moving services in Dharan with careful loading and unloading.",
  },
  {
    city: "Hallanchowk, Pokhara",
    desc: "Professional packers and movers in Pokhara for house shifting, office shifting, and packing services with tourist-area aware crews.",
  },
  {
    city: "Hetauda",
    desc: "Affordable room shifting and office shifting in Hetauda with expert planning and safe packing.",
  },
  {
    city: "Sallaghari, Bhaktapur",
    desc: "Packers and movers in Bhaktapur specializing in apartment moves, villa relocations, and residential shifting.",
  },
  {
    city: "Satdobato, Lalitpur",
    desc: "Room shifting and office shifting in Lalitpur with weekend and night slots to reduce traffic delays.",
  },
  {
    city: "Janakpur",
    desc: "Trusted intercity moving, room shifting, and packing & boxing services connecting Janakpur to Kathmandu and beyond.",
  },
];

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
    canonical: "https://www.fastpackersandmovers.com.np/locations",
  },
  openGraph: {
    title:
      "Service Areas – Room & Office Shifting Across Nepal",
    description:
      "Find Fast Packers and Movers in your city. Room shifting, office shifting & more across Kathmandu, Pokhara, Butwal & all Nepal.",
    url: "https://www.fastpackersandmovers.com.np/locations",
  },
};

export default function LocationsPage() {
  const breadcrumbJsonLd = generateBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Service Areas", href: "/locations" },
  ]);

  return (
    <div className="section py-20 space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
        <ol className="flex items-center gap-1">
          <li>
            <a href="/" className="hover:text-red-500 transition">Home</a>
          </li>
          <li>/</li>
          <li className="text-slate-900 font-semibold">Service Areas</li>
        </ol>
      </nav>

      <div className="max-w-3xl space-y-3">
        <h1 className="text-3xl font-bold text-slate-900">
          Packers and Movers Service Areas Across Nepal
        </h1>
        <p className="text-slate-600">
          <strong>Fast Packers and Movers</strong> serves all major cities in Nepal with local expert teams for <strong>room shifting</strong>, <strong>office shifting</strong>, <strong>residential moving</strong>, <strong>vehicle &amp; bike transport</strong>, and <strong>packing &amp; boxing services</strong>. Contact us for a free quote: <a href="tel:+9779851226669" className="text-red-500 font-semibold hover:underline">+977 9851226669</a>
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {locations.map((l) => (
          <article key={l.city} className="card p-5 space-y-2">
            <h2 className="text-lg font-semibold text-slate-900">
              Packers and Movers in {l.city}
            </h2>
            <p className="text-slate-600">{l.desc}</p>
          </article>
        ))}
      </div>

      {/* SEO content block */}
      <article className="card p-6 space-y-3">
        <h2 className="text-lg font-semibold text-slate-900">
          Nepal's Most Trusted Moving Company – Available in Your City
        </h2>
        <p className="text-slate-600">
          Looking for <strong>packers and movers near you in Nepal</strong>? Fast Packers and Movers operates in Kathmandu, Lalitpur, Bhaktapur, Pokhara, Butwal, Biratnagar, Dharan, Chitwan, Hetauda, Janakpur, Narayanghat, Bhairahawa, Nepalgunj, and Dhangadhi. Whether you need <strong>room shifting</strong>, <strong>office shifting</strong>, <strong>corporate relocation</strong>, <strong>bike transport</strong>, or <strong>packing services</strong>, our local teams deliver fast, safe, and affordable moving solutions. Call <a href="tel:+9779851226669" className="text-red-500 font-semibold hover:underline">+977-9851226669</a> for a free estimate.
        </p>
      </article>
    </div>
  );
}