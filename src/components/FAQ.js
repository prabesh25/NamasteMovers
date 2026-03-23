
'use client';

import React, { useMemo, useState } from 'react';

export default function FAQ() {
  const imageSrc = '/faq.png';

  const faqs = useMemo(
    () => [
      {
        q: 'How much does room shifting cost in Kathmandu?',
        a: 'Room shifting costs in Kathmandu vary based on the volume of items, distance, and floor level. Namaste Packers and Movers offers affordable room shifting starting from Rs 2,000. Call +977-9851226669 for a free estimate tailored to your move.',
      },
      {
        q: 'Do you provide office shifting services in Pokhara and Butwal?',
        a: 'Yes! Namaste Packers and Movers provides professional office shifting services in Pokhara, Butwal, and all major cities across Nepal. We handle IT equipment, furniture, and documents with care to ensure minimal downtime for your business.',
      },
      {
        q: 'Do you handle packing materials for room and office shifting?',
        a: 'Yes, we bring premium packing materials including corrugated boxes, bubble wrap, foam sheets, tape, and fragile labels. Our packing and boxing services ensure your items are safely protected during room shifting, office shifting, and intercity moves.',
      },
      {
        q: 'Can you transport vehicles and bikes across Nepal?',
        a: 'Absolutely. Namaste Packers and Movers offers secure vehicle and bike transport across Nepal with GPS tracking, safe carrier loading, and door-to-door delivery. We transport cars, motorcycles, and scooters between Kathmandu, Pokhara, Butwal, Biratnagar, and all cities.',
      },
      {
        q: 'Can you move on weekends or at night in Kathmandu?',
        a: 'Yes, we offer flexible scheduling including weekends and night moves to minimize traffic delays and suit your schedule. This is especially popular for room shifting and office shifting in busy areas of Kathmandu Valley.',
      },
      {
        q: 'Is my shipment insured during the move?',
        a: 'We offer damage protection options and comprehensive inventory tracking for all our moving services. Whether it\'s room shifting, office shifting, or vehicle transport, your belongings are protected throughout the move.',
      },
      {
        q: 'How Namaste can I book a move with Namaste Packers and Movers?',
        a: 'You can call and confirm your booking in minutes. Same-day room shifting and office shifting slots are often available in Kathmandu Valley. For intercity moves, we recommend booking 1-2 days in advance. Call 24/7: +977-9851226669.',
      },
      {
        q: 'Which cities in Nepal do you serve?',
        a: 'Namaste Packers and Movers serves all major cities in Nepal including Kathmandu, Lalitpur, Bhaktapur, Pokhara, Butwal, Biratnagar, Dharan, Chitwan, Hetauda, Janakpur, Narayanghat, Bhairahawa, Nepalgunj, and Dhangadhi.',
      },
    ],
    []
  );

  const [open, setOpen] = useState(0);

  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <section className="py-12 md:py-16 bg-[#fff7ed] relative overflow-hidden" aria-label="Frequently Asked Questions about Moving Services in Nepal">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[700px] h-[400px] bg-gradient-to-r from-red-200/40 via-orange-200/30 to-purple-100/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="rounded-[28px] bg-white/80 backdrop-blur-xl border border-gray-100 shadow-[0_30px_80px_-45px_rgba(0,0,0,0.08)] p-5 md:p-8">
          <div className="grid gap-8 md:grid-cols-12 md:items-center">
            {/* Left image (tilted card) */}
            <div className="md:col-span-5">
              <div className="relative mx-auto w-full max-w-sm md:max-w-none">
                <div className="absolute -inset-6 rounded-[26px] bg-gradient-to-br from-red-400/15 via-orange-300/10 to-purple-400/10 blur-2xl" />
                <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white/5 shadow-[0_25px_60px_-40px_rgba(0,0,0,0.08)] transform md:-rotate-2">
                  <div className="aspect-[4/5] w-full bg-black/10">
                    <img
                      src={imageSrc}
                      alt="Frequently Asked Questions about Room Shifting, Office Shifting and Moving Services in Nepal - Namaste Packers and Movers"
                      className="h-full w-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right content */}
            <div className="md:col-span-7">
              <h2 
              // className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
              className="text-xl md:text-2xl font-semibold mb-4 
bg-clip-text text-transparent 
bg-gradient-to-r from-red-400 via-red-400 to-orange-300">

                
                Frequently Asked Questions – Room Shifting, Office Shifting &amp; Moving in Nepal
              </h2>

              <div className="space-y-3">
                {faqs.map((f, idx) => {
                  const isOpen = open === idx;

                  return (
                    <div
                      key={f.q}
                      className={`rounded-xl border border-gray-200 bg-white/50 hover:bg-white/60 transition ${
                        isOpen ? 'scale-105 shadow-[0_30px_80px_rgba(255,80,120,0.15)]' : 'opacity-80'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setOpen((cur) => (cur === idx ? -1 : idx))}
                        className="w-full flex items-center justify-between gap-4 px-4 py-3 text-left"
                        aria-expanded={isOpen}
                      >
                        <span className="text-sm md:text-[15px] font-medium text-gray-900">
                          {f.q}
                        </span>

                        <span
                          className={`flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 bg-gradient-to-r from-red-400 to-orange-400 text-white transition ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                          aria-hidden="true"
                        >
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 9l6 6 6-6" />
                          </svg>
                        </span>
                      </button>

                      <div
                        className={`grid transition-[grid-template-rows,opacity] duration-250 ease-out ${
                          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="px-4 pb-4 text-sm leading-6 text-gray-700">{f.a}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-orange-400 via-red-400/90 to-orange-400 px-4 py-2 text-white text-sm font-semibold hover:opacity-90 transition"
                >
                  Contact support
                </a>
                <span className="text-xs text-gray-500">
                  Still have questions? We’ll reply quickly.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



