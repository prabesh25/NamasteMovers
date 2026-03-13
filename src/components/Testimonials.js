

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Ramesh Karki",
    location: "Kathmandu",
    service: "Room Shifting",
    text: "Fast Packers and Movers handled our room shifting in Kathmandu with great care. The team arrived on time, packed everything safely, and delivered without any damage. Highly recommended for room shifting services in Nepal.",
    rating: 5,
    image: "/01Review.jpg",
  },
  {
    name: "Sita Dhakal",
    location: "Butwal",
    service: "Office Shifting",
    text: "We used Fast Packers and Movers for office shifting from Butwal to Kathmandu. Good communication from booking to delivery. The price was fair with no hidden charges. Our IT equipment was handled very professionally.",
    rating: 4,
    image: "/02Review.jpg",
  },
  {
    name: "Abisek Poudel",
    location: "Pokhara",
    service: "Vehicle Transport",
    text: "I needed urgent bike transport from Pokhara to Kathmandu and Fast Packers managed it within a day. Very professional staff, secure loading, and GPS tracking throughout. Thank you for the quick and safe vehicle transport service.",
    rating: 5,
    image: "/03Review.webp",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(1);

  // auto slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-[#fff7ed] relative overflow-hidden">
      {/* soft background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 w-[700px] h-[400px]
          -translate-x-1/2 -translate-y-1/2
          bg-gradient-to-r from-red-200/10 via-orange-200/10 to-purple-200/10
          blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* title */}
        <h2
          // className="text-4xl md:text-5xl font-bold mb-20 text-center
          // bg-gradient-to-r from-red-500 via-orange-400 to-purple-500
          // bg-clip-text text-transparent
          // drop-shadow-[0_0_12px_rgba(255,100,100,0.25)]"
        className="text-4xl md:text-5xl font-bold mb-20 text-center
bg-clip-text text-transparent
bg-gradient-to-r from-orange-400 via-red-400 to-orange-300
drop-shadow-[0_0_12px_rgba(255,100,100,0.25)]"

          
        
        >
          What Our Customers Say About Our Moving Services
        </h2>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`rounded-3xl p-8 transition-all duration-500
                bg-white/80 backdrop-blur-xl border border-gray-100
                shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                ${
                  index === currentIndex
                    ? "scale-105 shadow-[0_30px_80px_rgba(255,80,80,0.18)]"
                    : "opacity-80"
                }`}
            >
              {/* header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <div className="flex gap-1 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* text */}
              <p className="text-gray-700 leading-relaxed">
                “{testimonial.text}”
              </p>
            </div>
          ))}
        </div>

        {/* dots */}
        <div className="flex justify-center gap-3 mt-14">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all
                ${
                  index === currentIndex
                    ? "w-8 bg-gradient-to-r from-red-400 to-purple-500"
                    : "w-2 bg-gray-300"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
