"use client";
import Image from "next/image";


import { useState } from "react";
import Link from "next/link";

const services = [
  {
    name: "Room Shifting",
    slug: "room-shifting",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
        />
      </svg>
    ),
    color: "from-red-500 to-orange-500",
    description:
      "Need to shift your room in Kathmandu, Pokhara, Butwal, or anywhere in Nepal? Sajilo Packers and Movers provides safe, affordable, and professional room shifting services with careful packing, loading, transport, and unpacking at your new location.",
    features: [
      "Safe packing of all belongings",
      "Careful loading & unloading",
      "Door-to-door room shifting",
      "Same-day shifting available",
      "No hidden charges",
      "Available across all Nepal",
    ],
    img: "/ResidentialShifting.jpg",
  },
  {
    name: "Office Shifting",
    slug: "office-shifting",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
        />
      </svg>
    ),
    color: "from-blue-500 to-indigo-500",
    description:
      "Planning to shift your office? We specialize in professional office shifting with IT-safe packing, furniture disassembly/assembly, and minimal business downtime. From small offices to large corporate relocations across Nepal.",
    features: [
      "IT equipment safe packing",
      "Furniture disassembly & reassembly",
      "Minimal business downtime",
      "Corporate relocation specialists",
      "Available weekends & nights",
      "Serving all major cities",
    ],
    img: "/corporateMoving.jpg",
  },
  {
    name: "Residential Shifting",
    slug: "residential-shifting",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
    color: "from-emerald-500 to-teal-500",
    description:
      "Moving to a new home? Our residential shifting service covers everything — careful packing of fragile items to safe transport of heavy furniture. Within Kathmandu Valley or intercity, we ensure a stress-free experience.",
    features: [
      "Complete house shifting solution",
      "Fragile item protection",
      "Heavy furniture handling",
      "Apartment & villa moves",
      "Within city & intercity",
      "Transparent pricing",
    ],
    img: "/ResidentialShifting.jpg",
  },
  {
    name: "Corporate Moving",
    slug: "corporate-moving",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
        />
      </svg>
    ),
    color: "from-violet-500 to-purple-500",
    description:
      "We handle large-scale office relocations, warehouse moves, and commercial shifting with project management, IT equipment handling, and employee coordination for seamless transitions.",
    features: [
      "Large-scale office relocations",
      "Warehouse & commercial shifting",
      "Project-managed moves",
      "IT & server room relocation",
      "Employee coordination",
      "Pan-Nepal coverage",
    ],
    img: "/corporateMoving.jpg",
  },
  {
    name: "Vehicle & Bike Transport",
    slug: "vehicle-bike-transport",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
        />
      </svg>
    ),
    color: "from-amber-500 to-orange-500",
    description:
      "Secure vehicle and bike transport services with GPS tracking, safe loading on carriers, and door-to-door delivery. Motorcycles, scooters, cars, or SUVs — we transport vehicles safely across Nepal.",
    features: [
      "Car transport across Nepal",
      "Bike & motorcycle transport",
      "GPS tracking for vehicles",
      "Secure carrier loading",
      "Door-to-door delivery",
      "Insurance coverage available",
    ],
    img: "/vehicleAndBikeTransport.jpg",
  },
  {
    name: "Packing & Boxing",
    slug: "packing-boxing",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
        />
      </svg>
    ),
    color: "from-rose-500 to-pink-500",
    description:
      "Professional packing using premium materials — bubble wrap, corrugated boxes, foam sheets, and custom crating — to protect fragile, heavy, and valuable items during any move.",
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
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
        />
      </svg>
    ),
    color: "from-sky-500 to-blue-500",
    description:
      "Moving abroad from Nepal? We handle international relocations with customs documentation, safe packing for air/sea freight, and door-to-door delivery to India, Gulf, USA, UK, Australia & worldwide.",
    features: [
      "Customs documentation support",
      "Air & sea freight options",
      "Door-to-door international delivery",
      "Insurance for international moves",
      "Worldwide coverage",
      "Expert long-distance packing",
    ],
    img: "/InternationalMoving.jpg",
  },
  {
    name: "Storage Solutions",
    slug: "storage-solutions",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
        />
      </svg>
    ),
    color: "from-gray-600 to-gray-800",
    description:
      "Clean, secure, and affordable storage in Kathmandu. Store furniture, household items, office equipment, or vehicles for days, weeks, or months with flexible terms and easy access.",
    features: [
      "Clean & secure facilities",
      "Flexible rental terms",
      "Household & office storage",
      "Vehicle storage available",
      "24/7 security monitoring",
      "Easy access during business hours",
    ],
    img: "/storageSolutions.webp",
  },
];

const process_steps = [
  {
    step: "01",
    title: "Get a Free Quote",
    desc: "Call us or fill out the form. We'll understand your needs and provide an instant, transparent quote.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
  {
    step: "02",
    title: "We Pack Everything",
    desc: "Our trained crew arrives on time with premium packing materials. Every item is packed, labeled, and inventoried.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Safe Transport",
    desc: "GPS-tracked vehicles transport your belongings safely. Real-time updates keep you informed every step of the way.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
        />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Unpack & Setup",
    desc: "We unpack, arrange furniture, and set up everything at your new location. You're home without lifting a finger.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
];

export default function ServicesContent() {
  const [activeService, setActiveService] = useState(0);

  return (
    <div className="bg-white">
      {/* ==================== HERO ==================== */}
      <section className="relative overflow-hidden pt-28 pb-6 md:pt-32 md:pb-8 px-6">
        {/* Warm gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-red-50/60 to-amber-50" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-200/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-200/30 rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-red-500 transition">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-800 font-semibold">Services</li>
            </ol>
          </nav>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left text */}
            <div className="space-y-5">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.15]">
                Moving &amp; Packing
                <span className="block bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                  Services in Nepal
                </span>
              </h1>

              <p className="text-gray-500 text-lg leading-relaxed max-w-md">
                8 specialized services — from room shifting to international
                moving. Safe, Sajilo, and affordable.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 px-6 py-3 text-white font-semibold shadow-lg shadow-red-500/20 hover:shadow-red-500/30 hover:scale-[1.02] transition-all text-sm"
                >
                  Get Free Quote →
                </Link>
                <a
                  href="tel:+9779851071848"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-3 text-gray-700 font-semibold hover:shadow-md transition-all text-sm"
                >
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Call 24/7
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-5 pt-2 text-xs text-gray-400">
                <span className="flex items-center gap-1.5">
                  <svg
                    className="w-4 h-4 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <strong className="text-gray-600">15K+</strong> Moves
                </span>
                <span className="flex items-center gap-1.5">
                  <svg
                    className="w-4 h-4 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  <strong className="text-gray-600">12+</strong> Cities
                </span>
                <span className="flex items-center gap-1.5">
                  <svg
                    className="w-4 h-4 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                  <strong className="text-gray-600">4.9</strong> Rating
                </span>
                <span className="flex items-center gap-1.5">
                  <svg
                    className="w-4 h-4 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <strong className="text-gray-600">24/7</strong> Open
                </span>
              </div>
            </div>

            {/* Right — image collage */}
            <div className="hidden md:block relative">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-3">
                  <Image width={800} height={600} 
                    src="/img3.jpg"
                    alt="Room shifting service"
                    className="w-full h-40 object-cover rounded-2xl shadow-lg"
                    loading="lazy"
                  />
                  <Image width={800} height={600} 
                    src="/corporateMoving.jpg"
                    alt="Corporate moving"
                    className="w-full h-52 object-cover rounded-2xl shadow-lg"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-3 pt-6">
                  <Image width={800} height={600} 
                    src="/ResidentialShifting.jpg"
                    alt="Residential shifting"
                    className="w-full h-52 object-cover rounded-2xl shadow-lg"
                    loading="lazy"
                  />
                  <Image width={800} height={600} 
                    src="/PackingAndBoxing.jpg"
                    alt="Packing services"
                    className="w-full h-40 object-cover rounded-2xl shadow-lg"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SERVICE NAV GRID ==================== */}
      <section className="relative z-20 px-6 py-8 md:py-10 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-4 md:grid-cols-8 gap-2 md:gap-3">
            {services.map((s, idx) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                onClick={() => setActiveService(idx)}
                className="group flex flex-col items-center gap-2 rounded-2xl bg-gray-50 border border-gray-100 p-4 md:p-5 hover:bg-white hover:border-red-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                <span className="text-orange-500 group-hover:text-red-500 transition">
                  {s.icon}
                </span>
                <span className="text-[10px] md:text-xs font-semibold text-gray-500 group-hover:text-red-600 text-center leading-tight transition">
                  {s.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SERVICE CARDS ==================== */}
      <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-white via-orange-50/30 to-white">
        <div className="max-w-7xl mx-auto space-y-24">
          {services.map((service, index) => (
            <article
              key={service.slug}
              id={service.slug}
              className="scroll-mt-24"
            >
              <div
                className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${index % 2 === 1 ? "md:[direction:rtl]" : ""}`}
              >
                {/* Image */}
                <div
                  className={`relative ${index % 2 === 1 ? "md:[direction:ltr]" : ""}`}
                >
                  <div
                    className={`absolute -inset-6 bg-gradient-to-br ${service.color} opacity-10 rounded-3xl blur-2xl`}
                  />
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
                    <Image width={800} height={600} 
                      src={service.img}
                      alt={`${service.name} service in Nepal - Sajilo Packers and Movers`}
                      className="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute top-5 left-5">
                      <span
                        className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${service.color} px-4 py-2 text-sm font-bold text-white shadow-lg`}
                      >
                        <span className="text-white">{service.icon}</span>
                        {service.name}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`space-y-6 ${index % 2 === 1 ? "md:[direction:ltr]" : ""}`}
                >
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight">
                    {service.name} in Nepal
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {service.description}
                  </p>

                  {/* Features grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl px-4 py-3 border border-green-100"
                      >
                        <svg
                          className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-sm font-medium text-gray-700">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${service.color} px-8 py-4 text-white font-semibold shadow-lg hover:opacity-90 transition`}
                  >
                    Get Free Quote for {service.name}
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ==================== HOW IT WORKS ==================== */}
      <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-red-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-[120px]" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wide text-orange-400 backdrop-blur">
              Simple Process
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-orange-300 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              From booking to unpacking — we make your move effortless in just 4
              simple steps.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process_steps.map((item, idx) => (
              <div key={item.step} className="relative group">
                {/* Connector line */}
                {idx < process_steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[calc(100%-20%)] h-0.5 bg-gradient-to-r from-red-500/40 to-orange-500/20" />
                )}

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 transition-all duration-300 group-hover:shadow-[0_20px_60px_-15px_rgba(239,68,68,0.2)]">
                  {/* Step number */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 text-white mb-6 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="text-xs font-bold text-orange-400/60 tracking-widest mb-2">
                    STEP {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHY CHOOSE US ==================== */}
      {/* <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-orange-50 via-red-50 to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-red-200/40 via-orange-200/30 to-purple-100/40 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold tracking-wide text-orange-700">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight">
                Nepal&apos;s Most Trusted Moving Company
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                With <strong className="text-gray-900">15+ years</strong>, <strong className="text-gray-900">15,000+ successful moves</strong>, and <strong className="text-gray-900">500+ trained professionals</strong>, Sajilo Packers and Movers delivers safe, affordable, and on-time moving services across Nepal.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: "15,000+", label: "Moves Completed" },
                  { val: "50+", label: "Team Members" },
                  { val: "99%", label: "Customer Satisfaction" },
                  { val: "8+", label: "City Branches" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white rounded-2xl border border-gray-100 shadow-lg p-5 text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">{stat.val}</div>
                    <div className="text-xs text-gray-500 mt-1 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 via-red-600 to-orange-500 px-8 py-4 text-white font-semibold shadow-lg hover:opacity-90 transition">
                Get Free Estimate →
              </Link>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-red-200/30 via-orange-200/20 to-transparent rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <video autoPlay muted loop playsInline className="w-full aspect-[4/5] object-cover">
                  <source src="/videos/videoblocks-6499e432f8b2823bb04edc31_hs79zx5_h__df8f2717a60da2beb2b1c553b6a22ab1__P360.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-red-500 to-orange-500 text-white rounded-2xl px-6 py-4 shadow-xl">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm opacity-90">Always Available</div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* ==================== CTA SECTION ==================== */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="/videos/videoblocks-6499e432f8b2823bb04edc31_hs79zx5_h__df8f2717a60da2beb2b1c553b6a22ab1__P360.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/70" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Need a Move?
            <span className="block bg-gradient-to-r from-orange-400 via-red-400 to-orange-300 bg-clip-text text-transparent mt-2">
              Get Your Free Quote Now.
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Whether it&apos;s room shifting, office shifting, vehicle transport,
            or international moving — we&apos;ve got you covered.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-red-500 via-red-600 to-orange-500 px-10 py-5 text-white font-bold text-lg shadow-xl hover:opacity-90 transition"
            >
              Get Free Estimate →
            </Link>
            <a
              href="tel:+9779851071848"
              className="rounded-full border-2 border-white/30 bg-white/10 backdrop-blur px-10 py-5 text-white font-bold text-lg hover:bg-white/20 transition"
            >
              📞 Call: +977-9851071848
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
