



// 'use client';

// import React, { useEffect, useRef } from 'react';

// const images = [
//   // '/img1.jpg',
//   '/img2.jpg',
//   '/img3.jpg',
//   '/img4.webp',
//   '/img5.jpg',
//   '/img6.jpg',
//   '/img7.webp',
// ];

// export default function InfiniteGallerySlider() {
//   const topRef = useRef(null);
//   const bottomRef = useRef(null);
//   const rafRef = useRef(null);

//   useEffect(() => {
//     const top = topRef.current;
//     const bottom = bottomRef.current;
//     if (!top || !bottom) return;

//     let lastTime = performance.now();
//     const speedPxPerSecond = 60; // change speed here

//     function step(now) {
//       const delta = now - lastTime;
//       lastTime = now;

//       const deltaPx = (speedPxPerSecond * delta) / 1000;

//       const halfTop = top.scrollWidth / 2;
//       if (halfTop > 0) {
//         top.scrollLeft = (top.scrollLeft + deltaPx) % halfTop;
//       }

//       const halfBottom = bottom.scrollWidth / 2;
//       if (halfBottom > 0) {
//         let newBottom = bottom.scrollLeft - deltaPx;
//         if (newBottom <= 0) newBottom += halfBottom;
//         bottom.scrollLeft = newBottom % halfBottom;
//       }

//       rafRef.current = requestAnimationFrame(step);
//     }

//     rafRef.current = requestAnimationFrame(step);

//     return () => cancelAnimationFrame(rafRef.current);
//   }, []);

//   const renderTrack = (ref, direction) => (
//     <div
//       ref={ref}
//       className="w-full overflow-hidden -mx-4 px-4"
//       style={{ scrollBehavior: 'auto' }}
//       aria-label={`${direction} slider row`}
//     >
//       <div className="flex items-center gap-6 whitespace-nowrap">
//         {[...images, ...images].map((src, i) => (
//           <div
//             key={`${direction}-${i}`}
//             className="flex-shrink-0 rounded-xl overflow-hidden"
//             style={{
//               width: 'min(47vw, 650px)',
//               height: '65vh',
//             }}
//           >
//             <img
//               src={src}
//               alt={`Gallery image ${i + 1}`}
//               className="w-full h-full object-cover block"
//               decoding="async"
//               draggable="false"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   return (
//     <section className="py-10 md:py-16 bg-[#fff7ed] text-slate-100">
//       <div className="container mx-auto px-4">
//         {/* Heading */}
         
        
//         <h2 className="mt-3 text-3xl text-center mb-8 md:text-5xl font-bold tracking-tight bg-clip-text text-transparent 
//                        bg-gradient-to-r from-orange-400 via-red-400 to-orange-300">
//           OUR SERVICES AT
//         </h2>

//         <div className="relative w-full -mx-4 px-4">
//           {/* Top row */}
//           <div className="mb-9">
//             <div className="overflow-hidden rounded-xl">
//               {renderTrack(topRef, 'top')}
//             </div>
//           </div>

//           {/* Bottom row */}
//           <div>
//             <div className="overflow-hidden rounded-xl">
//               {renderTrack(bottomRef, 'bottom')}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




'use client';

import React, { useEffect, useRef } from 'react';

const images = [
  { src: '/img2.jpg', alt: 'Room shifting service in Kathmandu by Namaste Packers and Movers' },
  { src: '/img3.jpg', alt: 'Office shifting and corporate moving in Nepal' },
  { src: '/img4.webp', alt: 'Professional packing and boxing services in Pokhara' },
  { src: '/img5.jpg', alt: 'Vehicle and bike transport across Nepal' },
  { src: '/img6.jpg', alt: 'Residential shifting service in Butwal and Biratnagar' },
  { src: '/img7.webp', alt: 'Safe furniture moving and house shifting in Kathmandu Valley' },
];

const locations = [
  'Kathmandu',
  'Pokhara',
  'Lalitpur',
  'Bhaktapur',
  'Chitwan',
  'Butwal',
  'Biratnagar',
  'Dharan',
  'Hetauda',
  'Janakpur',
  'Nepalgunj',
  'Dhangadhi',
];

export default function InfiniteGallerySlider() {
  const topRef = useRef(null);
  const bottomRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const top = topRef.current;
    const bottom = bottomRef.current;
    if (!top || !bottom) return;

    let lastTime = performance.now();
    const speedPxPerSecond = 60;

    function step(now) {
      const delta = now - lastTime;
      lastTime = now;

      const deltaPx = (speedPxPerSecond * delta) / 1000;

      const halfTop = top.scrollWidth / 2;
      if (halfTop > 0) {
        top.scrollLeft = (top.scrollLeft + deltaPx) % halfTop;
      }

      const halfBottom = bottom.scrollWidth / 2;
      if (halfBottom > 0) {
        let newBottom = bottom.scrollLeft - deltaPx;
        if (newBottom <= 0) newBottom += halfBottom;
        bottom.scrollLeft = newBottom % halfBottom;
      }

      rafRef.current = requestAnimationFrame(step);
    }

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const renderTrack = (ref, direction) => (
    <div
      ref={ref}
      className="w-full overflow-hidden"
      style={{ scrollBehavior: 'auto' }}
    >
      <div className="flex items-center gap-3 sm:gap-4 md:gap-6 whitespace-nowrap">
        {[...images, ...images].map((img, i) => (
          <div
            key={`${direction}-${i}`}
            className="flex-shrink-0 rounded-xl overflow-hidden w-[75vw] h-[35vh] sm:w-[45vw] sm:h-[40vh] md:w-[min(47vw,650px)] md:h-[65vh]"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover block"
              draggable="false"
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-10 md:py-16 bg-[#fff7ed] text-slate-100 overflow-hidden">
      <div className="px-4 mb-6">
        {/* Heading */}
        <h2 className="mt-3 text-3xl text-center mb-6 md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-400 to-orange-300">
          OUR MOVING SERVICES ACROSS NEPAL
        </h2>

        {/* Scrolling locations */}
        <div className="flex justify-center mb-1">
          <div className="relative w-full md:w-1/2 overflow-hidden backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl py-4">
            <div className="animate-scroll flex gap-10 whitespace-nowrap text-[#f65957] text-lg md:text-2xl font-semibold">
              {[...locations, ...locations].map((loc, i) => (
                <span key={i} className="opacity-90">
                  {loc}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>


        {/* Gallery */}
        <div className="w-full">
          <div className="mb-4 sm:mb-6 md:mb-9">
            {renderTrack(topRef, 'top')}
          </div>

          <div>
            {renderTrack(bottomRef, 'bottom')}
          </div>
        </div>

      {/* CSS animation */}
      <style jsx>{`
        .animate-scroll {
          animation: scrollText 15s linear infinite;
        }

        @keyframes scrollText {
          from {
            transform: translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          to {
            transform: translateX(-50%);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
