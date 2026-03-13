// "use client";
// import { useState } from "react";
// import Image from "next/image";

// const deliveries = [
//   {
//     id: 1,
//     item: "Plasma TV",
//     image: "/deliveries/tv.jpg",
//     from: "London, Greater London, N2",
//     to: "London, Greater London, N16",
//     price: "£40"
//   },
//   {
//     id: 2,
//     item: "Sofa Set",
//     image: "/deliveries/sofa.jpg",
//     from: "Manchester, M1",
//     to: "Birmingham, B2",
//     price: "£65"
//   },
//   {
//     id: 3,
//     item: "Washing Machine",
//     image: "/deliveries/washer.jpg",
//     from: "Bristol, BS1",
//     to: "Cardiff, CF10",
//     price: "£35"
//   }
// ];

// export default function RecentDeliveries() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const currentDelivery = deliveries[currentIndex];

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % deliveries.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + deliveries.length) % deliveries.length);
//   };

//   return (
//   <section className="py-20 bg-gradient-to-br from-blue-100/40 via-blue-100/40 to-blue-100/40 mx-2 rounded-tr-[100px] relative overflow-hidden">
//       {/* central subtle blue glow behind the content */}
//       <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-400/20 blur-[120px] rounded-full"></div>
//       <div className="max-w-7xl mx-auto px-20 lg:px-[120px]">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Left: Delivery Card with Carousel */}
//           <div className="relative">
//             {/* Light curved border background */}
//             <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white rounded-[4rem] -m-8 blur-xl opacity-80 scale-95"></div>
//             <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden max-w-md mx-auto">
//               {/* Image */}
//               <div className="relative h-64 bg-gray-200">
//                 <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
//                   <div className="text-8xl">📺</div>
//                 </div>
//               </div>
              
//               {/* Content */}
//               <div className="p-6">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">{currentDelivery.item}</h3>
                
//                 {/* Route */}
//                 <div className="space-y-3 mb-6">
//                   <div className="flex items-start gap-3">
//                     <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
//                       <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
//                         <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
//                       </svg>
//                     </div>
//                     <div>
//                       <p className="text-gray-700 font-medium">{currentDelivery.from}</p>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-center gap-3 pl-3">
//                     <div className="w-0.5 h-8 bg-gray-300"></div>
//                   </div>
                  
//                   <div className="flex items-start gap-3">
//                     <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-1">
//                       <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
//                         <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
//                       </svg>
//                     </div>
//                     <div>
//                       <p className="text-gray-700 font-medium">{currentDelivery.to}</p>
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* Price */}
//                 <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white text-center py-4 rounded-xl">
//                   <p className="text-3xl font-bold">{currentDelivery.price}</p>
//                 </div>
//               </div>
//             </div>

//             {/* Navigation Arrows */}
//             <button
//               onClick={prevSlide}
//               className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors"
//               aria-label="Previous delivery"
//             >
//               <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//               </svg>
//             </button>
            
//             <button
//               onClick={nextSlide}
//               className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors"
//               aria-label="Next delivery"
//             >
//               <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//               </svg>
//             </button>

//             {/* Dots */}
//             <div className="flex justify-center gap-2 mt-6">
//               {deliveries.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentIndex(index)}
//                   className={`w-3 h-3 rounded-full transition-all ${
//                     index === currentIndex ? 'bg-orange-500 w-8' : 'bg-gray-300'
//                   }`}
//                   aria-label={`Go to delivery ${index + 1}`}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Right: Info Section */}
//           <div>
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Recent Deliveries</h2>
//             <p className="text-gray-600 text-lg mb-8 leading-relaxed">
//               Millions of people use Shiply to move goods around the globe at a much more affordable price - by making use of spare capacity along pre-existing routes.
//             </p>

//             <ul className="space-y-4">
//               {[
//                 "Move Anything Large or Bulky",
//                 "Low Prices Guaranteed",
//                 "Customer Reviewed Transport Providers",
//                 "Dedicated Trust & Safety Team",
//                 "Friendly Customer Support Team"
//               ].map((feature, index) => (
//                 <li key={index} className="flex items-start gap-3">
//                   <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
//                     <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//                     </svg>
//                   </div>
//                   <span className="text-gray-700 text-lg">{feature}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';

/**
 * Courier-style "Recent Deliveries" section
 * - Modern logistics/courier look: clean whites, bold navy, orange accents, pill badges,
 *   timeline route, trust chips, and strong CTA buttons.
 * - Keeps your carousel logic (prev/next + dots) but improves visual structure.
 * - TailwindCSS-only.
 */

const deliveries = [
  {
    id: 1,
    item: 'Room Shifting – Furniture & Appliances',
    image: '/darazImg.png',
    from: 'Kathmandu, Basantapur',
    to: 'Lalitpur, Durbar Square',
    price: 'Rs 5,000',
    eta: 'Same day',
  },
  {
    id: 2,
    item: 'Office Shifting – IT Equipment & Furniture',
    image: '/officeShifting.jpg',
    from: 'Kathmandu, New Baneshwor',
    to: 'Pokhara, Lakeside',
    price: 'Rs 15,000',
    eta: 'Next day',
  },
  {
    id: 3,
    item: 'Vehicle Transport – Motorcycle',
    image: '/motorbikeMoving.jpg',
    from: 'Butwal',
    to: 'Kathmandu, Kalanki',
    price: 'Rs 8,000',
    eta: 'Same day',
  },
];

export default function RecentDeliveries() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = deliveries[currentIndex];

  const nextSlide = () => setCurrentIndex((p) => (p + 1) % deliveries.length);
  const prevSlide = () => setCurrentIndex((p) => (p - 1 + deliveries.length) % deliveries.length);

  const trustChips = useMemo(
    () => [
      { label: 'Insured transport', icon: ShieldIcon },
      { label: 'Live tracking', icon: PinIcon },
      { label: 'Vetted couriers', icon: StarIcon },
    ],
    []
  );

  const bullets = useMemo(
    () => [
      'Door-to-door room & office shifting',
      'Transparent pricing — no hidden fees',
      'Trained & experienced movers across Nepal',
      '24/7 support available all 7 days',
    ],
    []
  );

  return (
    <section className="relative overflow-hidden bg-[#fff7ed] py-14 md:py-20">
      {/* Background: courier-style accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          {/* Left: Delivery card + carousel */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="rounded-3xl border border-slate-200 bg-white shadow-[0_20px_60px_-40px_rgba(2,6,23,0.5)]">
                {/* Image header */}
                <div className="relative overflow-hidden rounded-t-3xl">
                  <div className="relative aspect-[16/10] w-full bg-slate-100">
                    <Image
                      src={current.image}
                      alt={current.item}
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 1024px) 100vw, 520px"
                    />
                  </div>

                  {/* dark overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent" />

                  {/* Top badges */}
                  <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900 backdrop-blur">
                      Recent job
                    </span>
                    <span className="inline-flex items-center rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
                      {current.price}
                    </span>
                  </div>

                  {/* Bottom strip */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-base font-semibold text-white drop-shadow">
                      {current.item}
                    </p>
                    <p className="mt-1 text-xs text-white/80">
                      ETA: <span className="font-semibold text-white">{current.eta}</span> • ID #{current.id}
                    </p>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 md:p-7">
                  {/* Route timeline */}
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="flex gap-3">
                      <div className="flex flex-col items-center pt-1">
                        <span className="h-3 w-3 rounded-full bg-sky-600" />
                        <span className="my-2 h-10 w-px bg-slate-300" />
                        <span className="h-3 w-3 rounded-full bg-orange-500" />
                      </div>

                      <div className="min-w-0 flex-1 space-y-4">
                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-wide text-slate-500">
                            Pickup
                          </p>
                          <p className="mt-1 truncate text-sm font-semibold text-slate-900">
                            {current.from}
                          </p>
                        </div>

                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-wide text-slate-500">
                            Drop-off
                          </p>
                          <p className="mt-1 truncate text-sm font-semibold text-slate-900">
                            {current.to}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* divider + small meta */}
                    <div className="mt-4 flex items-center justify-between gap-3 border-t border-slate-200 pt-4">
                      <span className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <TruckIcon className="h-4 w-4 text-slate-700" />
                        Courier assigned
                      </span>
                      <span className="text-xs text-slate-500">Updated just now</span>
                    </div>
                  </div>

                  {/* Dots */}
                  <div className="mt-6 flex items-center justify-center gap-2">
                    {deliveries.map((d, index) => (
                      <button
                        key={d.id}
                        onClick={() => setCurrentIndex(index)}
                        type="button"
                        className={`h-2.5 rounded-full transition-all ${
                          index === currentIndex
                            ? 'w-8 bg-orange-500'
                            : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                        }`}
                        aria-label={`Go to delivery ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Mini CTA row */}
                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition"
                    >
                      Get a Free Quote
                    </a>
                    <a
                      href="tel:+9779851226669"
                      className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
                    >
                      📞 Call Now
                    </a>
                  </div>
                </div>
              </div>

              {/* Carousel arrows (outside card) */}
              <button
                onClick={prevSlide}
                type="button"
                aria-label="Previous delivery"
                className="absolute -left-3 top-1/2 -translate-y-1/2 rounded-full border border-slate-200 bg-white p-3 shadow-sm hover:bg-slate-50 hover:shadow transition"
              >
                <ChevronLeft className="h-5 w-5 text-slate-800" />
              </button>

              <button
                onClick={nextSlide}
                type="button"
                aria-label="Next delivery"
                className="absolute -right-3 top-1/2 -translate-y-1/2 rounded-full border border-slate-200 bg-white p-3 shadow-sm hover:bg-slate-50 hover:shadow transition"
              >
                <ChevronRight className="h-5 w-5 text-slate-800" />
              </button>
            </div>
          </div>

          {/* Right: Courier-style copy */}
          <div className="lg:col-span-7 lg:pl-12">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold tracking-wide text-slate-700">
                <span className="inline-block h-2 w-2 rounded-full bg-orange-500" />
                RECENT DELIVERIES
              </span>

              <span className="text-xs text-slate-400">
                Courier network • 24/7 support
              </span>
            </div>

            <h2
            //  className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900"
            className="mt-3 text-3xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent 
                       bg-gradient-to-r from-orange-400 via-red-400 to-orange-300"
       
             >
              Recent Room Shifting, Office Shifting &amp; Moving Jobs Across Nepal
            </h2>

            <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-600">
              See how Fast Packers and Movers delivers safe, affordable, and on-time room shifting, office shifting, vehicle transport, and packing services across Nepal. Get a free quote for your move today.
            </p>

            {/* Trust chips */}
            <div className="mt-7 flex flex-wrap gap-3">
              {trustChips.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 shadow-[0_12px_30px_-28px_rgba(2,6,23,0.45)]"
                >
                  <Icon className="h-4 w-4 text-orange-500" />
                  <span className="text-sm font-semibold text-slate-800">{label}</span>
                </div>
              ))}
            </div>

            {/* Bullets */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {bullets.map((text) => (
                <div key={text} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-sky-50">
                    <CheckIcon className="h-4 w-4 text-sky-700" />
                  </div>
                  <p className="text-sm font-semibold text-slate-800">{text}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-orange-600 transition"
              >
                Get a Free Quote →
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-900 hover:bg-slate-50 transition"
              >
                View All Services
              </a>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Serving 15,000+ happy customers across Kathmandu, Pokhara, Butwal, Biratnagar &amp; all Nepal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Small inline icons (no extra deps) ---------- */

function ChevronLeft(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
    </svg>
  );
}

function ChevronRight(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
    </svg>
  );
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function TruckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 7h11v10H3V7Zm11 3h4l3 3v4h-7v-7Zm2 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM7 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      />
    </svg>
  );
}

function ShieldIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4Z"
      />
    </svg>
  );
}

function PinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 22s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    </svg>
  );
}

function StarIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 2l3 7 7 .5-5.5 4.5 2 7-6.5-4-6.5 4 2-7L2 9.5 9 9l3-7Z"
      />
    </svg>
  );
}