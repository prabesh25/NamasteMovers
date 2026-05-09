import { generateBreadcrumbSchema } from "@/lib/seo";

export const metadata = {
  title:
    "Moving Tips & Blog – Room Shifting, Office Shifting & Packing Guides | Sajilo Packers and Movers",
  description:
    "Read expert tips on room shifting, office shifting, residential moving, packing, vehicle transport & more in Nepal. Moving guides from Sajilo Packers and Movers to make your relocation stress-free.",
  keywords: [
    "moving tips nepal",
    "room shifting tips kathmandu",
    "office shifting guide nepal",
    "packing tips for moving",
    "how to plan office move nepal",
    "best packers movers kathmandu blog",
    "residential shifting guide",
    "vehicle transport tips",
  ],
  alternates: {
    canonical: "https://www.Sajilopackersandmovers.com/blog",
  },
  openGraph: {
    title: "Moving Tips & Blog – Sajilo Packers and Movers Nepal",
    description:
      "Expert guides on room shifting, office shifting, packing & more in Nepal.",
    url: "https://www.Sajilopackersandmovers.com/blog",
  },
};

const posts = [
  {
    title: "What Should Reliable Packers and Movers Have?",
    date: "September 24, 2023",
    excerpt:
      "Discover the key qualities to look for when hiring packers and movers in Nepal — from licensed operations to safe packing materials and transparent pricing.",
    slug: "what-reliable-packers-movers-should-have",
  },
  {
    title: "Top Packers and Movers in Kathmandu – Complete Guide",
    date: "May 10, 2022",
    excerpt:
      "A comprehensive guide to choosing the best packers and movers in Kathmandu for room shifting, office shifting, and residential moving. Compare services, pricing, and reviews.",
    slug: "top-packers-movers-kathmandu",
  },
  {
    title: "How to Plan a Hassle-Free Office Shifting in Nepal",
    date: "May 02, 2022",
    excerpt:
      "Step-by-step guide to planning a smooth office shifting experience in Kathmandu and across Nepal. Tips on IT equipment packing, furniture moving, and minimizing downtime.",
    slug: "hassle-free-office-shifting-nepal",
  },
  {
    title: "Room Shifting Tips – How to Move Safely in Kathmandu",
    date: "March 15, 2022",
    excerpt:
      "Expert tips for safe and affordable room shifting in Kathmandu Valley. Learn about packing fragile items, choosing the right moving company, and avoiding common mistakes.",
    slug: "room-shifting-tips-kathmandu",
  },
  {
    title: "Vehicle & Bike Transport in Nepal – What You Need to Know",
    date: "January 20, 2022",
    excerpt:
      "Everything you need to know about vehicle and bike transport services across Nepal. Safe loading techniques, GPS tracking, and choosing the right transport company.",
    slug: "vehicle-bike-transport-nepal",
  },
  {
    title: "Packing and Boxing Tips for a Safe Move in Nepal",
    date: "November 08, 2021",
    excerpt:
      "Professional packing and boxing tips from Sajilo Packers and Movers. Learn how to protect fragile items, organize boxes, and ensure a damage-free move.",
    slug: "packing-boxing-tips-safe-move",
  },
];

export default function BlogPage() {
  const breadcrumbJsonLd = generateBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
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
          <li className="text-slate-900 font-semibold">Blog</li>
        </ol>
      </nav>

      <div className="max-w-3xl space-y-3">
        <h1 className="text-3xl font-bold text-slate-900">
          Moving Tips & Guides – Room Shifting, Office Shifting & More
        </h1>
        <p className="text-slate-600">
          Expert guides and tips from <strong>Sajilo Packers and Movers</strong> to make your <strong>room shifting</strong>, <strong>office shifting</strong>, <strong>residential moving</strong>, and <strong>packing</strong> experience in Nepal stress-free and safe.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((p) => (
          <article key={p.slug} className="card p-5 space-y-2">
            <h2 className="text-lg font-semibold text-slate-900">{p.title}</h2>
            <time dateTime={p.date} className="text-sm text-slate-500">
              {p.date}
            </time>
            <p className="text-slate-600 text-sm">{p.excerpt}</p>
            <a
              href={`/blog/${p.slug}`}
              className="text-red-500 font-semibold text-sm hover:underline"
            >
              Read more →
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}