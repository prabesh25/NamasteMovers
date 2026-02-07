



import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center overflow-hidden"
      style={{ height: "100dvh" }}
      aria-label="Fast Packers and Movers - Room Shifting and Office Shifting in Nepal"
    >
      {/* Image Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Hero.png"
          alt="Fast Packers and Movers - Professional room shifting and office shifting services in Kathmandu, Nepal"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />

        {/* Dark red overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-24 max-w-6xl mx-auto px-4 text-center pb-20">
        {/* Badge */}
        <span className="inline-block mt-5 mb-3 px-5 py-2 rounded-full text-sm font-semibold backdrop-blur border border-white/10 bg-red-600/90 text-white">
          Nepal's Trusted Moving Company Since 2010
        </span>

        {/* Heading - Primary H1 with keywords */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6">
          Fast
          <span className="block text-red-500 mt-2">
            Packers &amp; Movers
          </span>
        </h1>

        {/* Description - keyword-rich */}
        {/* <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-10">
          Nepal's #1 <strong>room shifting</strong>, <strong>office shifting</strong>,
          <strong> residential moving</strong>, <strong>vehicle transport</strong> &amp;
          <strong> packing services</strong> in Kathmandu, Pokhara, Butwal &amp; across Nepal.
          Fast, safe, and affordable.
        </p> */}

        <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-10">
          Nepal's most trusted <strong>room shifting</strong>, <strong>office shifting</strong>,
          <strong> residential moving</strong>, <strong>vehicle transport</strong> &amp;
          <strong> packing services</strong> across Nepal.
          Fast, safe, and affordable.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="rounded-full bg-red-600 px-8 py-4 text-white font-semibold shadow-lg hover:bg-red-500 transition"
            aria-label="Get a free moving estimate from Fast Packers and Movers"
          >
            Get Free Estimate →
          </a>

          <a
            href="tel:+9779851226669"
            className="rounded-full border border-white/50 bg-black/30 px-8 py-4 text-white backdrop-blur hover:border-white transition"
            aria-label="Call Fast Packers and Movers 24/7"
          >
            📞 Call 24/7: +977-9851226669
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { value: "15K+", label: "Happy Customers" },
            { value: "10+", label: "Years Experience" },
            { value: "500+", label: "Expert Team Members" },
            { value: "99%", label: "Customer Satisfaction" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-500">
                {stat.value}
              </div>
              <div className="text-white/75 text-sm mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-red-500 rounded-full animate-pulse" />
        </div>
      </div>

      {/* Gradient merge transition to next section */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-[#1a1a1a]/30 to-[#fff7ed] z-10"></div> */}
    </section>
  );
};

export default Hero;

