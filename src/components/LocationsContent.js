"use client";

import { useState } from "react";
import Link from "next/link";
import { FaMapMarkerAlt, FaCheckCircle, FaPhoneAlt, FaTruck, FaRoute, FaBuilding, FaBolt, FaUsers } from "react-icons/fa";

const locations = [
  {
    city: "Kathmandu",
    area: "New Baneshwor",
    img: "/img3.jpg",
    desc: "Our headquarters — same-day room shifting, office shifting, and residential moving with local experts for high-rise apartment moves.",
    services: ["Room Shifting", "Office Shifting", "Vehicle Transport", "Storage"],
    phone: "+977-9851071848",
  },
  {
    city: "Lalitpur",
    area: "Satdobato",
    img: "/img4.webp",
    desc: "Room shifting and office shifting in Lalitpur with weekend and night slots to reduce traffic delays. Expert teams for Patan and surrounding areas.",
    services: ["Room Shifting", "Office Shifting", "Packing", "Residential Shifting"],
    phone: "+977-9851071848",
  },
  {
    city: "Bhaktapur",
    area: "Sallaghari",
    img: "/img7.webp",
    desc: "Packers and movers in Bhaktapur specializing in apartment moves, villa relocations, and residential shifting in heritage areas.",
    services: ["Room Shifting", "Residential Shifting", "Packing", "Furniture Moving"],
    phone: "+977-9851071848",
  },
  {
    city: "Pokhara",
    area: "Hallanchowk",
    img: "/img11.jpg",
    desc: "Professional packers and movers in Pokhara for house shifting, office shifting, and packing services. Tourist-area aware crews available.",
    services: ["Room Shifting", "Office Shifting", "Vehicle Transport", "International Moving"],
    phone: "+977-9851071848",
  },
  {
    city: "Butwal",
    area: "Traffic Chowk",
    img: "/img1.jpg",
    desc: "Professional office shifting and room shifting in Butwal with flexible scheduling and affordable pricing. Serving Lumbini province.",
    services: ["Room Shifting", "Office Shifting", "Packing", "Vehicle Transport"],
    phone: "+977-9851071848",
  },
  {
    city: "Biratnagar",
    area: "Main Road",
    img: "/img13.png",
    desc: "Reliable packers and movers in Biratnagar for intercity moves, vehicle transport, and corporate relocation across eastern Nepal.",
    services: ["Room Shifting", "Corporate Moving", "Vehicle Transport", "Packing"],
    phone: "+977-9851071848",
  },
  {
    city: "Dharan",
    area: "Putali Line",
    img: "/img2.jpg",
    desc: "Efficient room shifting, office shifting, and furniture moving services in Dharan with careful loading and unloading by trained teams.",
    services: ["Room Shifting", "Office Shifting", "Furniture Moving", "Packing"],
    phone: "+977-9851071848",
  },
  {
    city: "Chitwan",
    area: "Narayanghat",
    img: "/img12.jpg",
    desc: "Trusted packers and movers in Chitwan for local and intercity house shifting, vehicle transport, and corporate moving solutions.",
    services: ["Room Shifting", "Residential Shifting", "Vehicle Transport", "Corporate Moving"],
    phone: "+977-9851071848",
  },
  {
    city: "Hetauda",
    area: "Bus Park Area",
    img: "/img6.jpg",
    desc: "Affordable room shifting and office shifting in Hetauda with expert planning, safe packing, and on-time delivery.",
    services: ["Room Shifting", "Office Shifting", "Packing", "Residential Shifting"],
    phone: "+977-9851071848",
  },
  {
    city: "Janakpur",
    area: "Station Road",
    img: "/img5.jpg",
    desc: "Trusted intercity moving, room shifting, and packing services connecting Janakpur to Kathmandu and all major cities in Nepal.",
    services: ["Room Shifting", "Intercity Moving", "Packing", "Vehicle Transport"],
    phone: "+977-9851071848",
  },
  {
    city: "Nepalgunj",
    area: "Surkhet Road",
    img: "/img14.webp",
    desc: "Mid-western Nepal's go-to moving company. Room shifting, office shifting, and vehicle transport with local expertise.",
    services: ["Room Shifting", "Office Shifting", "Vehicle Transport", "Packing"],
    phone: "+977-9851071848",
  },
  {
    city: "Dhangadhi",
    area: "Main Bazaar",
    img: "/img16.jpg",
    desc: "Far-western Nepal covered. Professional room shifting, packing, and intercity moving services from Dhangadhi.",
    services: ["Room Shifting", "Intercity Moving", "Packing", "Office Shifting"],
    phone: "+977-9851071848",
  },
];

const stats = [
  { value: "12+", label: "Branch Offices" },
  { value: "75+", label: "Districts Covered" },
  { value: "15,000+", label: "Moves Completed" },
  { value: "24/7", label: "Available" },
];

export default function LocationsContent() {
  const [activeCity, setActiveCity] = useState(null);

  return (
    <div className="bg-white">
      {/* ==================== HERO ==================== */}
      {/* <section className="relative overflow-hidden" style={{ height: "60dvh" }}>
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="/videos/videoblocks-6499e432f8b2823bb04edc31_hs79zx5_h__df8f2717a60da2beb2b1c553b6a22ab1__P360.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-16">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-white/60">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li className="text-white/40">/</li>
              <li className="text-white font-semibold">Service Areas</li>
            </ol>
          </nav>

          <span className="inline-block mb-4 px-5 py-2 rounded-full text-sm font-semibold backdrop-blur border border-white/10 bg-red-600/90 text-white">
            <FaMapMarkerAlt className="inline-block mr-2" /> 12+ Branches • 75+ Districts
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-5xl">
            We&apos;re Everywhere
            <span className="block bg-gradient-to-r from-orange-400 via-red-400 to-orange-300 bg-clip-text text-transparent mt-2">
              Across Nepal
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-8">
            From <strong className="text-white">Kathmandu</strong> to <strong className="text-white">Dhangadhi</strong>, our local teams are ready to help you move safely and affordably.
          </p>

          <div className="absolute bottom-8">
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-red-500 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </section> */}

      {/* ==================== STATS BAR ==================== */}
      {/* <section className="relative -mt-10 z-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white/90 backdrop-blur-xl rounded-2xl border border-gray-100 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.1)] p-5 text-center">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-orange-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ==================== NEPAL MAP / CITY GRID ==================== */}
      <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-white via-orange-50/30 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            {/* <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold tracking-wide text-orange-700">
              Our Branches
            </span> */}
            <h2 className="mt-4 text-3xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-orange-300 bg-clip-text text-transparent ">
              Find Us in Your City
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Click on any city to see the services available at that branch and get connected with our local team.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {locations.map((loc, idx) => (
              <button
                key={loc.city}
                onClick={() => setActiveCity(activeCity === idx ? null : idx)}
                className={`group relative rounded-3xl overflow-hidden border text-left transition-all duration-300 hover:-translate-y-1 ${
                  activeCity === idx
                    ? "border-red-500/50 shadow-[0_20px_60px_-15px_rgba(239,68,68,0.25)] ring-2 ring-red-500/20"
                    : "border-gray-100 shadow-lg hover:shadow-xl hover:border-red-200"
                }`}
              >
                {/* City Image */}
                <div className="aspect-[4/3] relative">
                  <img
                    src={loc.img}
                    alt={`Sajilo Packers and Movers in ${loc.city}, Nepal`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-xl drop-shadow">{loc.city}</h3>
                    <p className="text-white/70 text-sm">{loc.area}</p>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center rounded-full bg-red-500/90 backdrop-blur px-2.5 py-1 text-[10px] font-bold text-white">
                      <FaCheckCircle className="inline-block mr-1" /> Active
                    </span>
                  </div>
                </div>

                {/* Expanded content */}
                <div className={`transition-all duration-300 overflow-hidden ${activeCity === idx ? "max-h-96 p-5" : "max-h-0 p-0"}`}>
                  <p className="text-gray-600 text-sm mb-3">{loc.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {loc.services.map((s) => (
                      <span key={s} className="inline-block rounded-full bg-orange-50 border border-orange-100 px-2.5 py-1 text-[11px] font-semibold text-orange-700">
                        {s}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`tel:${loc.phone}`}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 px-5 py-2.5 text-sm text-white font-semibold hover:opacity-90 transition"
                  >
                    <FaPhoneAlt /> Call Branch
                  </a>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== INTERCITY ROUTES ==================== */}
      <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-red-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-[120px]" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wide text-orange-400 backdrop-blur">
              <FaTruck className="inline-block mr-2" /> Popular Routes
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-orange-300 bg-clip-text text-transparent">
              Popular Moving Routes
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Our most requested intercity moving routes across Nepal. Safe, tracked, and on-time — every single move.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { from: "Kathmandu", to: "Pokhara", time: "6-8 hrs" },
              { from: "Kathmandu", to: "Biratnagar", time: "8-10 hrs" },
              { from: "Kathmandu", to: "Butwal", time: "7-9 hrs" },
              { from: "Kathmandu", to: "Chitwan", time: "4-5 hrs" },
              { from: "Kathmandu", to: "Dharan", time: "9-11 hrs" },
              { from: "Pokhara", to: "Butwal", time: "3-4 hrs" },
              { from: "Kathmandu", to: "Janakpur", time: "7-9 hrs" },
              { from: "Kathmandu", to: "Hetauda", time: "3-4 hrs" },
              { from: "Biratnagar", to: "Dharan", time: "1-2 hrs" },
            ].map((route) => (
              <div
                key={`${route.from}-${route.to}`}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-white font-bold">{route.from}</span>
                  <div className="flex-1 flex items-center gap-1">
                    <div className="flex-1 h-px bg-gradient-to-r from-red-500/60 to-orange-500/60" />
                    <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                  <span className="text-white font-bold">{route.to}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Est. {route.time}</span>
                  <Link href="/contact" className="text-orange-400 text-sm font-semibold hover:text-orange-300 transition">
                    Get Quote →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHY LOCAL TEAMS MATTER ==================== */}
      <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-orange-50 via-red-50 to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-red-200/40 via-orange-200/30 to-purple-100/40 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold tracking-wide text-orange-700">
                Local Expertise
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight">
                Why Local Teams Make Your Move Better
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Every city has different roads, building types, and challenges. That&apos;s why <strong className="text-gray-900">Sajilo Packers and Movers</strong> maintains trained local teams in every branch office.
                </p>
                <p>
                  Our <strong className="text-gray-900">Kathmandu team</strong> knows every narrow galli and high-rise layout. Our <strong className="text-gray-900">Pokhara crew</strong> navigates lakeside streets expertly. Local knowledge means Sajiloer, safer, and smoother moves.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                { [
                  { icon: <FaRoute />, text: "Local Route Knowledge" },
                  { icon: <FaBuilding />, text: "Building-Specific Plans" },
                  { icon: <FaBolt />, text: "Faster Response Times" },
                  { icon: <FaUsers />, text: "Trusted Local Crews" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-orange-100 shadow-sm">
                    <span className="text-2xl text-orange-500">{item.icon}</span>
                    <span className="font-semibold text-gray-800 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 via-red-600 to-orange-500 px-8 py-4 text-white font-semibold shadow-lg hover:opacity-90 transition">
                Find Your Nearest Branch →
              </Link>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-red-200/30 via-orange-200/20 to-transparent rounded-3xl blur-2xl" />
              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                    <img src="/img1.jpg" alt="Sajilo Packers local team in Kathmandu" className="w-full h-48 object-cover" loading="lazy" />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                    <img src="/img6.jpg" alt="Moving truck in Nepal" className="w-full h-64 object-cover" loading="lazy" />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                    <img src="/img2.jpg" alt="Office shifting in Pokhara" className="w-full h-64 object-cover" loading="lazy" />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                    <img src="/img3.jpg" alt="Room shifting in Biratnagar" className="w-full h-48 object-cover" loading="lazy" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="/videos/videoblocks-6499e432f8b2823bb04edc31_hs79zx5_h__df8f2717a60da2beb2b1c553b6a22ab1__P360.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/70" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Move?
            <span className="block bg-gradient-to-r from-orange-400 via-red-400 to-orange-300 bg-clip-text text-transparent mt-2">
              We&apos;re in Your City.
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Get a free estimate for room shifting, office shifting, vehicle transport, or any moving service — no matter where you are in Nepal.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="rounded-full bg-gradient-to-r from-red-500 via-red-600 to-orange-500 px-10 py-5 text-white font-bold text-lg shadow-xl hover:opacity-90 transition">
              Get Free Estimate →
            </Link>
            <a href="tel:+9779851071848" className="rounded-full border-2 border-white/30 bg-white/10 backdrop-blur px-10 py-5 text-white font-bold text-lg hover:bg-white/20 transition">
              <FaPhoneAlt className="inline-block mr-2" /> Call: +977-9851071848
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
