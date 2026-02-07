
'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

const services = [
  { title: 'Residential Shifting', desc: 'Professional residential shifting service in Kathmandu, Pokhara, Butwal and across Nepal. Careful packing, loading, transporting, and setup for houses and apartments.', img: '/ResidentialShifting.jpg' },
  { title: 'Corporate Moving', desc: 'Expert corporate moving and office shifting in Nepal with minimal downtime. IT-safe packing, furniture handling, and professional coordination for businesses.', img: '/corporateMoving.jpg' },
  { title: 'International Moving', desc: 'Smooth international moving from Nepal with customs documentation, permits, and safe packing for overseas relocations to India, Gulf, USA, UK & more.', img: '/InternationalMoving.jpg' },
  { title: 'Packing & Boxing', desc: 'Premium packing and boxing services for safe room shifting and office shifting in Nepal. Fragile handling, systematic labeling, and inventory management.', img: '/PackingAndBoxing.jpg' },
  { title: 'Vehicle & Bike Transport', desc: 'Secure vehicle and bike transport service across Nepal. Car and motorcycle transport with GPS tracking, safe carrier loading, and door-to-door delivery.', img: '/vehicleAndBikeTransport.jpg' },
  { title: 'Storage Solutions', desc: 'Clean, secure storage solutions in Kathmandu for furniture, household items, and office equipment. Flexible rental terms and easy access during your move.', img: '/storageSolutions.webp' },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-14 md:py-20 px-6 md:px-16 bg-gradient-to-b from-orange-50 via-red-50 to-orange-50"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 md:mb-14 flex flex-col gap-4 md:gap-6 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold tracking-wide text-slate-700">
              Our Services
            </span>
            <span className="text-xs text-slate-400">Reliable. Safe. On-time.</span>
          </div>

          <h2
            className="mt-3 text-3xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent 
                       bg-gradient-to-r from-orange-400 via-red-400 to-orange-300"
          >
            Room Shifting, Office Shifting &amp; Moving Services in Nepal
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Professional moving services for homes, offices, vehicles, and international relocations. Fast Packers and Movers guarantees safe handling, on-time delivery, and customer satisfaction across Kathmandu, Pokhara, Butwal &amp; all Nepal.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group rounded-3xl border border-slate-200 bg-white shadow-[0_10px_30px_-20px_rgba(2,6,23,0.35)] hover:shadow-[0_18px_55px_-28px_rgba(2,6,23,0.55)] transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-t-3xl">
                <div className="aspect-[16/10] w-full bg-slate-100">
                  <img
                    src={s.img}
                    alt={`${s.title} Service in Nepal - Fast Packers and Movers`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Subtle gradient overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0 opacity-90" />

                {/* Tiny badge */}
                <div className="absolute left-5 top-5">
                  <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900 backdrop-blur">
                    Popular
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="text-lg font-bold tracking-tight bg-clip-text  
                              text-gray-800/80"
                >
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-700">{s.desc}</p>

                <div className="mt-5 flex items-center justify-between">
                  <a
                    href="/services"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-red-500 hover:text-red-600 transition"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </a>
                  <a href="/contact" className="text-xs font-medium text-gray-700 hover:text-red-500 transition">Get quote</a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom helper line */}
        <div className="mt-10 md:mt-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5">
          <p className="text-sm text-slate-600">
            Need a custom quote for your move? We’ll recommend the best plan based on distance, volume, and timeline.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition"
          >
            Get a free estimate
          </a>
        </div>
      </div>
    </section>
  );
}
