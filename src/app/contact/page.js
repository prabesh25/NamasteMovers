import { generateBreadcrumbSchema } from "@/lib/seo";

export const metadata = {
  title:
    "Contact Fast Packers and Movers | Get Free Quote for Room & Office Shifting",
  description:
    "Contact Fast Packers and Movers for a free quote on room shifting, office shifting, vehicle transport, packing services & more in Kathmandu, Pokhara, Butwal & across Nepal. Call 24/7: +977-9851226669 or email Fastpackersnepal@gmail.com.",
  keywords: [
    "contact packers and movers nepal",
    "free moving quote kathmandu",
    "room shifting quote nepal",
    "office shifting quote kathmandu",
    "packers movers phone number nepal",
    "moving company contact nepal",
    "fast packers and movers contact",
  ],
  alternates: {
    canonical: "https://www.fastpackersandmovers.com.np/contact",
  },
  openGraph: {
    title: "Contact Fast Packers and Movers | Free Moving Quote Nepal",
    description:
      "Get a free quote for room shifting, office shifting, and all moving services in Nepal. Call 24/7.",
    url: "https://www.fastpackersandmovers.com.np/contact",
  },
};

export default function ContactPage() {
  const breadcrumbJsonLd = generateBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
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
          <li className="text-slate-900 font-semibold">Contact</li>
        </ol>
      </nav>

      <div className="max-w-3xl space-y-3">
        <h1 className="text-3xl font-bold text-slate-900">
          Contact Fast Packers and Movers – Get a Free Moving Quote
        </h1>
        <p className="text-slate-600">
          Need <strong>room shifting</strong>, <strong>office shifting</strong>, <strong>vehicle transport</strong>, or <strong>packing services</strong> in Nepal? Call us 24/7 for the fastest response, or fill out the form below for a free estimate.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="card p-6 space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">Call or Email Us</h2>
          <p className="text-slate-600">Available 24/7 for <strong>room shifting in Kathmandu</strong>, <strong>office shifting in Pokhara</strong>, <strong>house shifting in Butwal</strong>, and all moving services across Nepal.</p>
          <a href="tel:+9779851226669" className="btn-primary w-full text-center" aria-label="Call Fast Packers and Movers">📞 Call +977 9851226669</a>
          <a href="mailto:Fastpackersnepal@gmail.com" className="btn-secondary w-full text-center" aria-label="Email Fast Packers and Movers">✉️ Fastpackersnepal@gmail.com</a>
          <address className="text-sm text-slate-600 not-italic">
            <strong>Fast Packers and Movers</strong><br />
            Kalanki, Kathmandu-32, Nepal
          </address>

          {/* Service areas for SEO */}
          <div className="mt-4 pt-4 border-t border-slate-100">
            <h3 className="text-sm font-semibold text-slate-900 mb-2">We Serve All Major Cities</h3>
            <p className="text-xs text-slate-500">
              Kathmandu • Lalitpur • Bhaktapur • Pokhara • Butwal • Biratnagar • Dharan • Chitwan • Hetauda • Janakpur • Narayanghat • Bhairahawa • Nepalgunj • Dhangadhi
            </p>
          </div>
        </div>
        <form className="card p-6 space-y-4" aria-label="Request a free moving quote">
          <h2 className="text-lg font-semibold text-slate-900">Request a Free Quote</h2>
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-slate-900">Your Name</label>
            <input id="name" name="name" className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-slate-900">Email</label>
            <input id="email" name="email" type="email" className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500" required />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-slate-900">Phone</label>
            <input id="phone" name="phone" type="tel" className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500" required />
          </div>
          <div>
            <label htmlFor="service" className="block text-sm font-semibold text-slate-900">Service Needed</label>
            <select id="service" name="service" className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500">
              <option value="">Select a service</option>
              <option value="room-shifting">Room Shifting</option>
              <option value="office-shifting">Office Shifting</option>
              <option value="residential-shifting">Residential Shifting</option>
              <option value="corporate-moving">Corporate Moving</option>
              <option value="vehicle-transport">Vehicle & Bike Transport</option>
              <option value="packing-boxing">Packing & Boxing</option>
              <option value="international-moving">International Moving</option>
              <option value="storage">Storage Solutions</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="moveFrom" className="block text-sm font-semibold text-slate-900">Move From</label>
              <input id="moveFrom" name="moveFrom" className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="e.g. Kathmandu" />
            </div>
            <div>
              <label htmlFor="moveTo" className="block text-sm font-semibold text-slate-900">Move To</label>
              <input id="moveTo" name="moveTo" className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="e.g. Pokhara" />
            </div>
          </div>
          <div>
            <label htmlFor="moveDate" className="block text-sm font-semibold text-slate-900">Move Date</label>
            <input id="moveDate" name="moveDate" type="date" className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-slate-900">Questions / Message</label>
            <textarea id="message" name="message" rows="3" className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="Tell us about your move – items, floors, special requirements..." />
          </div>
          <button type="submit" className="btn-primary w-full">Get Free Moving Quote →</button>
        </form>
      </div>
    </div>
  );
}