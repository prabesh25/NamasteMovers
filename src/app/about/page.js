import { generateBreadcrumbSchema } from "@/lib/seo";

export const metadata = {
  title: "About Fast Packers and Movers – Nepal's Trusted Moving Company",
  description:
    "Learn about Fast Packers and Movers, Nepal's most trusted packers and movers since 2010. We offer professional room shifting, office shifting, residential moving, corporate relocation, vehicle transport, and packing services in Kathmandu, Pokhara, Butwal, Biratnagar & across Nepal.",
  keywords: [
    "about fast packers and movers",
    "best moving company nepal",
    "trusted packers movers kathmandu",
    "professional movers nepal",
    "licensed moving company nepal",
    "experienced packers and movers nepal",
  ],
  alternates: {
    canonical: "https://www.fastpackersandmovers.com.np/about",
  },
  openGraph: {
    title: "About Fast Packers and Movers – Nepal's Trusted Moving Company",
    description:
      "Nepal's most trusted packers and movers since 2010. Professional room shifting, office shifting, and more across Nepal.",
    url: "https://www.fastpackersandmovers.com.np/about",
  },
};

export default function AboutPage() {
  const breadcrumbJsonLd = generateBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
  ]);

  return (
    <div className="section py-20 space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Breadcrumb Navigation for SEO */}
      <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
        <ol className="flex items-center gap-1">
          <li>
            <a href="/" className="hover:text-red-500 transition">Home</a>
          </li>
          <li>/</li>
          <li className="text-slate-900 font-semibold">About Us</li>
        </ol>
      </nav>

      <div className="max-w-3xl space-y-3">
        <h1 className="text-3xl font-bold text-slate-900">
          About Fast Packers and Movers – Nepal's #1 Moving & Shifting Company
        </h1>
        <p className="text-slate-600">
          <strong>Fast Packers and Movers</strong> is a licensed and professional logistics company headquartered in Kalanki, Kathmandu. Since 2010, we have been providing reliable <strong>room shifting</strong>, <strong>office shifting</strong>, <strong>residential moving</strong>, <strong>corporate relocation</strong>, <strong>vehicle &amp; bike transport</strong>, and <strong>packing &amp; boxing services</strong> across Kathmandu Valley, throughout Nepal, and internationally. With branches in Pokhara, Butwal, Biratnagar, Dharan, Chitwan, Hetauda, and Janakpur, we are Nepal's most trusted moving company.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <article className="card p-5 space-y-2">
          <h2 className="font-semibold text-slate-900">Skilled & Experienced Movers</h2>
          <p className="text-slate-600">Our hard-working, friendly teams are trained in safe packing techniques and careful handling for <strong>room shifting in Kathmandu</strong>, <strong>office shifting</strong>, and all types of residential and corporate moves across Nepal.</p>
        </article>
        <article className="card p-5 space-y-2">
          <h2 className="font-semibold text-slate-900">Reliable & Organized Service</h2>
          <p className="text-slate-600">We use systematic labeling, inventory management, and premium packing materials to ensure zero breakage during <strong>house shifting</strong>, <strong>vehicle transport</strong>, and <strong>furniture moving</strong> across Nepal.</p>
        </article>
        <article className="card p-5 space-y-2">
          <h2 className="font-semibold text-slate-900">24/7 Call Support</h2>
          <p className="text-slate-600">Get instant response for <strong>moving and packing</strong> bookings, queries, and live coordination. Whether you need <strong>room shifting in Pokhara</strong> or <strong>office shifting in Butwal</strong>, call us anytime at <a href="tel:+9779851226669" className="text-red-500 font-semibold hover:underline">+977-9851226669</a>.</p>
        </article>
      </div>

      <article className="card p-6 space-y-4">
        <h2 className="text-lg font-semibold text-slate-900">Why Choose Fast Packers and Movers?</h2>
        <ul className="list-disc list-inside text-slate-700 space-y-2">
          <li>Over 15 years of experience in <strong>room shifting</strong>, <strong>office shifting</strong>, and <strong>residential moving</strong> across Kathmandu, Lalitpur, and Bhaktapur.</li>
          <li>Customer-friendly pricing with transparent estimates — no hidden charges.</li>
          <li>Full responsibility from <strong>packing and boxing</strong> to safe delivery at your new location.</li>
          <li>Specialized <strong>vehicle and bike transport</strong> with secure loading and GPS tracking.</li>
          <li>Professional <strong>corporate moving</strong> with IT-safe packing and minimal downtime.</li>
          <li>Branches across Nepal including Pokhara, Butwal, Biratnagar, Dharan, Chitwan, Hetauda, and Janakpur.</li>
        </ul>
      </article>

      {/* Additional SEO-rich content section */}
      <article className="card p-6 space-y-4">
        <h2 className="text-lg font-semibold text-slate-900">Our Service Areas in Nepal</h2>
        <p className="text-slate-600">
          Fast Packers and Movers serves customers in all major cities of Nepal. Whether you need <strong>packers and movers in Kathmandu</strong>, <strong>room shifting in Lalitpur</strong>, <strong>office shifting in Bhaktapur</strong>, <strong>house shifting in Pokhara</strong>, or <strong>moving services in Butwal</strong> — our local teams are always ready to help. We also provide <strong>bike transport</strong> and <strong>car transport</strong> services between cities across Nepal.
        </p>
      </article>
    </div>
  );
}