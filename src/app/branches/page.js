import { generateBreadcrumbSchema } from "@/lib/seo";

export const metadata = {
  title:
    "Our Branches – Packers and Movers in Kathmandu, Pokhara, Butwal & All Nepal",
  description:
    "Sajilo Packers and Movers has branches in Kathmandu, Lalitpur, Bhaktapur, Pokhara, Butwal, Biratnagar, Dharan, Chitwan, Hetauda, and Janakpur. Find your nearest branch for room shifting, office shifting, and all moving services.",
  keywords: [
    "packers and movers branches nepal",
    "packers and movers kathmandu branch",
    "packers and movers pokhara",
    "packers and movers butwal",
    "packers and movers biratnagar",
    "packers and movers dharan",
    "packers and movers chitwan",
    "packers and movers hetauda",
    "packers and movers janakpur",
    "packers and movers lalitpur",
    "packers and movers bhaktapur",
    "room shifting kathmandu",
    "office shifting pokhara",
    "moving company branches nepal",
  ],
  alternates: {
    canonical: "https://www.Sajilopackersandmovers.com/branches",
  },
  openGraph: {
    title: "Our Branches – Sajilo Packers and Movers Across Nepal",
    description:
      "Find your nearest Sajilo Packers and Movers branch for room shifting, office shifting & more in Kathmandu, Pokhara, Butwal & across Nepal.",
    url: "https://www.Sajilopackersandmovers.com/branches",
  },
};

export default function BranchesPage() {
  const breadcrumbJsonLd = generateBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Branches", href: "/branches" },
  ]);

  const branches = [
    {
      name: "New Baneshwor, Kathmandu",
      services: "Room shifting, office shifting, packing services",
    },
    {
      name: "Balaju, Kathmandu",
      services: "Residential shifting, vehicle transport, storage",
    },
    {
      name: "Biratnagar, Morang",
      services: "Room shifting, corporate moving, bike transport",
    },
    {
      name: "Butwal",
      services: "Office shifting, house shifting, packing & boxing",
    },
    {
      name: "Chabahil, Kathmandu",
      services: "Room shifting, fragile item packing, same-day moves",
    },
    {
      name: "Chitwan",
      services: "Residential shifting, vehicle transport, intercity moves",
    },
    {
      name: "Dharan",
      services: "Room shifting, office shifting, furniture moving",
    },
    {
      name: "Hallanchowk, Pokhara",
      services: "House shifting, corporate moving, packing services",
    },
    {
      name: "Hetauda",
      services: "Office shifting, room shifting, vehicle transport",
    },
    {
      name: "Sallaghari, Bhaktapur",
      services: "Residential shifting, apartment moves, packing",
    },
    {
      name: "Satdobato, Lalitpur",
      services: "Room shifting, office shifting, weekend/night moves",
    },
    {
      name: "Janakpur",
      services: "Intercity moving, room shifting, packing & boxing",
    },
  ];

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
          <li className="text-slate-900 font-semibold">Branches</li>
        </ol>
      </nav>

      <div className="max-w-3xl space-y-3">
        <h1 className="text-3xl font-bold text-slate-900">
          Sajilo Packers and Movers Branches Across Nepal
        </h1>
        <p className="text-slate-600">
          Find your nearest <strong>Sajilo Packers and Movers</strong> branch for <strong>room shifting</strong>, <strong>office shifting</strong>, <strong>vehicle transport</strong>, and <strong>packing services</strong>. Call 24/7 for any branch: <a href="tel:+9779851071848" className="text-red-500 font-semibold hover:underline">+977 9851071848</a>
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {branches.map((b) => (
          <article key={b.name} className="card p-4">
            <h2 className="font-semibold text-slate-900">{b.name}</h2>
            <p className="text-sm text-slate-600 mt-1">{b.services}</p>
            <p className="text-xs text-slate-400 mt-1">
              On-call scheduling · Local expert crews · 24/7 support
            </p>
          </article>
        ))}
      </div>

      {/* SEO content block */}
      <article className="card p-6 space-y-3">
        <h2 className="text-lg font-semibold text-slate-900">
          Packers and Movers in Every Major City of Nepal
        </h2>
        <p className="text-slate-600">
          Whether you need <strong>packers and movers in Kathmandu</strong>, <strong>room shifting in Pokhara</strong>, <strong>office shifting in Butwal</strong>, or <strong>house shifting in Biratnagar</strong> — Sajilo Packers and Movers has local branches with experienced crews ready to help. Our network covers all major cities including Dharan, Chitwan, Hetauda, Bhaktapur, Lalitpur, and Janakpur. Each branch offers the full range of services: residential shifting, corporate moving, vehicle &amp; bike transport, and professional packing &amp; boxing.
        </p>
      </article>
    </div>
  );
}