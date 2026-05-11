"use client";
import Image from "next/image";


import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import {
  FaShieldAlt,
  FaClock,
  FaUsers,
  FaDollarSign,
  FaGlobe,
  FaPhoneAlt,
  FaVideo,
  FaBoxOpen,
  FaTruck,
  FaClipboardList,
  FaMapMarkerAlt,
} from "react-icons/fa";

const milestones = [
  {
    year: "2010",
    title: "Founded in Kathmandu",
    desc: "Started with 3 team members and a single truck in Baluwatar, Kathmandu.",
  },
  {
    year: "2014",
    title: "Expanded to Pokhara & Butwal",
    desc: "Opened branches in Pokhara and Butwal to serve Western Nepal.",
  },
  {
    year: "2017",
    title: "500+ Team Members",
    desc: "Grew our skilled workforce and added vehicle & bike transport services.",
  },
  {
    year: "2020",
    title: "10,000 Moves Completed",
    desc: "Reached a milestone of 10,000 successful moves across Nepal.",
  },
  {
    year: "2023",
    title: "Pan-Nepal Coverage",
    desc: "Branches in 8+ cities — Biratnagar, Dharan, Chitwan, Hetauda, Janakpur.",
  },
  {
    year: "2026",
    title: "15,000+ Happy Customers",
    desc: "Nepal's most trusted moving company with 99% customer satisfaction.",
  },
];

const values = [
  {
    icon: <FaShieldAlt className="w-7 h-7" />,
    title: "Safety First",
    desc: "Every item is treated like our own. Premium packing materials, careful handling, and systematic labeling ensure zero-damage moves.",
  },
  {
    icon: <FaClock className="w-7 h-7" />,
    title: "Always On Time",
    desc: "We respect your schedule. Our teams arrive on time, work efficiently, and deliver on the promised date — every single time.",
  },
  {
    icon: <FaUsers className="w-7 h-7" />,
    title: "Expert Team",
    desc: "50+ trained professionals who know how to pack, load, transport, and set up everything — from delicate glassware to heavy furniture.",
  },
  {
    icon: <FaDollarSign className="w-7 h-7" />,
    title: "Transparent Pricing",
    desc: "No hidden charges, no surprises. Get a free estimate upfront and pay exactly what's quoted. Fair pricing for every budget.",
  },
  {
    icon: <FaGlobe className="w-7 h-7" />,
    title: "Pan-Nepal Coverage",
    desc: "From Kathmandu to Biratnagar, Pokhara to Dhangadhi — our branches across 8+ cities ensure we're always close to you.",
  },
  {
    icon: <FaPhoneAlt className="w-7 h-7" />,
    title: "24/7 Support",
    desc: "Call us anytime — day or night. Our team is always available for bookings, queries, and live move coordination.",
  },
];

const teamMembers = [
  { name: "Ram Shrestha", role: "Founder & CEO", img: "/images/img1.jpg" },
  { name: "Sita Tamang", role: "Operations Head", img: "/images/img2.jpg" },
  { name: "Bikash Gurung", role: "Logistics Manager", img: "/images/img3.jpg" },
  { name: "Anita Karki", role: "Customer Relations", img: "/images/img5.jpg" },
];

const statsData = [
  { value: "15,000+", label: "Successful Moves" },
  { value: "100+", label: "Team Members" },
  { value: "8+", label: "City Branches" },
  { value: "99%", label: "Satisfaction" },
  { value: "15+", label: "Years Experience" },
  { value: "24/7", label: "Call Support" },
];

export default function AboutContent() {
  // ====== SLIDER STATE ======
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoplaying, setIsAutoplaying] = useState(true);
  const [slideProgress, setSlideProgress] = useState(0);
  const videoRefs = useRef([]);
  const SLIDE_DURATION = 5000; // 5 seconds per slide

  // Play/pause videos when slide changes
  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (!video) return;
      if (idx === activeSlide) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [activeSlide]);

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoplaying) return;
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      setSlideProgress(progress);
    }, 50);

    const timeout = setTimeout(() => {
      setActiveSlide((prev) => (prev + 1) % localVideos.length);
      setSlideProgress(0);
    }, SLIDE_DURATION);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [activeSlide, isAutoplaying]);

  const goToNext = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % localVideos.length);
    setSlideProgress(0);
    setIsAutoplaying(true);
  }, []);

  const goToPrev = useCallback(() => {
    setActiveSlide((prev) => (prev > 0 ? prev - 1 : localVideos.length - 1));
    setSlideProgress(0);
    setIsAutoplaying(true);
  }, []);

  // ====== LOCAL VIDEOS — Add your real moving videos here ======
  // Just drop .mp4 files in public/videos/ and add the paths below
  const localVideos = [
    "/videos/video1.mp4",
    "/videos/video2.mp4",
    "/videos/video3.mp4",
    "/videos/video4.mp4",
    "/videos/video1.mp4",
    "/videos/video2.mp4",
    "/videos/video3.mp4",
    "/videos/video4.mp4",
  ];

  return (
    <div className="bg-white">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative overflow-hidden" style={{ height: "70dvh" }}>
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-16">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-white/60">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li className="text-white/40">/</li>
              <li className="text-white font-semibold">About Us</li>
            </ol>
          </nav>

          <span className="inline-block mb-4 px-5 py-2 rounded-full text-sm font-semibold backdrop-blur border border-white/10 bg-red-600/90 text-white">
            Established 2010 • Kathmandu, Nepal
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-4xl">
            Nepal&apos;s Most Trusted
            <span className="block bg-gradient-to-r from-orange-400 via-red-400 to-orange-300 bg-clip-text text-transparent mt-2">
              Packers &amp; Movers
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-8">
            15+ years of safe, reliable{" "}
            <strong className="text-white">room shifting</strong>,{" "}
            <strong className="text-white">office shifting</strong>, and{" "}
            <strong className="text-white">moving services</strong> across
            Nepal.
          </p>

          <div className="absolute bottom-8">
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-red-500 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== STATS BAR ==================== */}
      <section className="relative -mt-12 z-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {statsData.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/90 backdrop-blur-xl rounded-2xl border border-gray-100 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.1)] p-5 text-center"
              >
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-orange-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== OUR STORY ==================== */}
      <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-white via-orange-50/30 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Image Stack */}
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-red-200/30 via-orange-200/20 to-transparent rounded-3xl blur-2xl" />
              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                    <Image width={800} height={600} 
                      src="/images/img1.jpg"
                      alt="Sajilo Packers team packing household items in Kathmandu"
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                    <Image width={800} height={600} 
                      src="/images/img6.jpg"
                      alt="Room shifting by Sajilo Packers in Nepal"
                      className="w-full h-64 object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                    <Image width={800} height={600} 
                      src="/images/img2.jpg"
                      alt="Office shifting and corporate moving in Kathmandu"
                      className="w-full h-64 object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                    <Image width={800} height={600} 
                      src="/images/img3.jpg"
                      alt="Vehicle transport across Nepal"
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-red-500 to-orange-500 text-white rounded-2xl px-6 py-4 shadow-xl">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm opacity-90">Years of Trust</div>
              </div>
            </div>

            {/* Text */}
            <div className="space-y-6">
              <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold tracking-wide text-orange-700">
                Our Story
              </span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight">
                From a Single Truck to Nepal&apos;s #1 Moving Company
              </h2>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-gray-900">
                    Sajilo Packers and Movers
                  </strong>{" "}
                  was founded in 2010 with a simple vision: make moving
                  stress-free for every Nepali family and business. What started
                  with 3 dedicated team members and a single truck in Baluwatar,
                  Kathmandu has grown into Nepal&apos;s most trusted moving
                  company.
                </p>
                <p>
                  Today, we have{" "}
                  <strong className="text-gray-900">
                    500+ expert team members
                  </strong>
                  , branches in{" "}
                  <strong className="text-gray-900">8+ major cities</strong>,
                  and over{" "}
                  <strong className="text-gray-900">
                    15,000 successful moves
                  </strong>{" "}
                  completed. From{" "}
                  <strong className="text-gray-900">
                    room shifting in Kathmandu
                  </strong>{" "}
                  to{" "}
                  <strong className="text-gray-900">
                    office shifting in Pokhara
                  </strong>
                  , from{" "}
                  <strong className="text-gray-900">vehicle transport</strong>{" "}
                  to{" "}
                  <strong className="text-gray-900">
                    international relocations
                  </strong>{" "}
                  — we handle it all with care, speed, and professionalism.
                </p>
                <p>
                  Our secret? Treating every customer&apos;s belongings as if
                  they were our own. That&apos;s why 99% of our customers
                  recommend us to their friends and family.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/contact"
                  className="rounded-full bg-gradient-to-r from-red-500 via-red-600 to-orange-500 px-8 py-4 text-white font-semibold shadow-lg hover:opacity-90 transition text-center"
                >
                  Get Free Estimate →
                </Link>
                <Link
                  href="/services"
                  className="rounded-full border border-gray-300 bg-white px-8 py-4 text-gray-800 font-semibold hover:border-red-300 hover:text-red-600 transition text-center"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== OUR WORK IN ACTION — COVERFLOW VIDEO CAROUSEL ==================== */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
        {/* Decorative glows */}
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-red-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto relative z-10 px-6">
          <div className="text-center mb-6">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wide text-orange-400 backdrop-blur">
              <FaVideo className="inline-block mr-2" /> Real Moving Videos
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-orange-300 bg-clip-text text-transparent">
              Our Work in Action
            </h2>
          </div>

          {/* Scrollable tab bar */}
          <div className="flex items-center justify-center gap-1 md:gap-2 mb-10 overflow-x-auto pb-2 scrollbar-hide">
            {localVideos.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveSlide(idx);
                  setIsAutoplaying(true);
                  setSlideProgress(0);
                }}
                className={`whitespace-nowrap px-4 md:px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  idx === activeSlide
                    ? "bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg shadow-red-500/25 scale-105"
                    : "text-red-400/60 hover:text-red-400 hover:bg-white/5"
                }`}
              >
                Video {idx + 1}
              </button>
            ))}
          </div>

          {/* Coverflow-style video carousel */}
          <div
            className="relative flex items-center justify-center"
            style={{ height: "clamp(280px, 50vw, 440px)" }}
          >
            {localVideos.map((src, idx) => {
              const total = localVideos.length;
              let offset = idx - activeSlide;
              if (offset > total / 2) offset -= total;
              if (offset < -total / 2) offset += total;

              const isActive = offset === 0;
              const isAdjacent = Math.abs(offset) === 1;
              const isVisible = Math.abs(offset) <= 2;

              if (!isVisible) return null;

              return (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveSlide(idx);
                    setIsAutoplaying(true);
                    setSlideProgress(0);
                  }}
                  className="absolute transition-all duration-700 ease-out focus:outline-none"
                  style={{
                    width: isActive
                      ? "min(640px, 75vw)"
                      : isAdjacent
                        ? "min(340px, 35vw)"
                        : "min(200px, 22vw)",
                    height: isActive ? "100%" : isAdjacent ? "75%" : "55%",
                    transform: `translateX(${offset * (isAdjacent ? 300 : 400)}px)`,
                    zIndex: isActive ? 30 : isAdjacent ? 20 : 10,
                    opacity: isActive ? 1 : isAdjacent ? 0.7 : 0.35,
                    filter: isActive ? "none" : "brightness(0.6)",
                  }}
                >
                  <div
                    className={`relative w-full h-full rounded-3xl overflow-hidden transition-shadow duration-500 ${
                      isActive
                        ? "shadow-[0_30px_80px_-20px_rgba(239,68,68,0.35)]"
                        : "shadow-2xl"
                    }`}
                  >
                    <video
                      ref={(el) => {
                        if (el) videoRefs.current[idx] = el;
                      }}
                      muted
                      playsInline
                      loop
                      className="w-full h-full object-cover"
                    >
                      <source src={src} type="video/mp4" />
                    </video>

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

                    {/* Play icon for inactive slides */}
                    {!isActive && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-white ml-0.5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                </button>
              );
            })}

            {/* Nav arrows */}
            <button
              onClick={goToPrev}
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/70 hover:border-white/30 transition-all"
            >
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/70 hover:border-white/30 transition-all"
            >
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Progress bar */}
          <div className="mt-8 max-w-xs mx-auto">
            <div className="h-0.5 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full"
                style={{
                  width: `${slideProgress}%`,
                  transition:
                    slideProgress === 0 ? "none" : "width 100ms linear",
                }}
              />
            </div>
            <div className="text-center mt-3">
              <span className="text-white/30 text-xs font-mono tracking-widest">
                {String(activeSlide + 1).padStart(2, "0")} /{" "}
                {String(localVideos.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CORE VALUES ==================== */}
      <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-orange-50 via-red-50 to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-red-200/40 via-orange-200/30 to-purple-100/40 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold tracking-wide text-slate-700">
              Why Choose Us
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-orange-300 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              What makes Sajilo Packers and Movers the #1 choice for room
              shifting, office shifting, and moving services in Nepal.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <article
                key={v.title}
                className="group rounded-3xl bg-white/80 backdrop-blur-xl border border-gray-100 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.08)] p-8 hover:shadow-[0_30px_80px_-20px_rgba(255,80,80,0.15)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {v.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{v.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TIMELINE ==================== */}
      <section className="py-20 md:py-28 px-6 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold tracking-wide text-orange-700">
              Our Journey
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-orange-300 bg-clip-text text-transparent">
              Growing With Nepal Since 2010
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 via-orange-400 to-red-500 md:-translate-x-px" />

            <div className="space-y-12">
              {milestones.map((m, idx) => (
                <div
                  key={m.year}
                  className={`relative flex items-center gap-8 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-red-500 to-orange-500 border-4 border-white shadow-lg -translate-x-1/2 z-10" />

                  <div
                    className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${idx % 2 === 0 ? "md:pr-4" : "md:pl-4"}`}
                  >
                    <div className="rounded-2xl bg-white border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] p-6 hover:shadow-[0_20px_60px_-15px_rgba(255,80,80,0.15)] transition-all duration-300">
                      <div className="inline-flex items-center rounded-full bg-gradient-to-r from-red-500 to-orange-500 px-3 py-1 text-xs font-bold text-white mb-3">
                        {m.year}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {m.title}
                      </h3>
                      <p className="text-gray-600">{m.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TEAM ==================== */}
      <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-orange-50 via-red-50/50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-200/30 rounded-full blur-[100px]" />

        {/* <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold tracking-wide text-slate-700">
              Our Leadership
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-orange-300 bg-clip-text text-transparent">
              Meet the Team Behind Every Move
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals committed to making your moving experience seamless and stress-free.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div key={member.name} className="group text-center">
                <div className="relative rounded-3xl overflow-hidden border border-gray-100 shadow-xl mb-4 aspect-[3/4]">
                  <Image width={800} height={600} 
                    src={member.img}
                    alt={`${member.name} - ${member.role} at Sajilo Packers and Movers Nepal`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div> */}
      </section>

      {/* ==================== BEHIND THE SCENES VIDEO ==================== */}
      <section className="py-20 md:py-28 px-6 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-red-200/30 via-orange-200/20 to-transparent rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden border border-gray-100 shadow-2xl">
                <div className="aspect-video bg-black">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source
                      // src="/videos/videoblocks-6499e432f8b2823bb04edc31_hs79zx5_h__df8f2717a60da2beb2b1c553b6a22ab1__P360.mp4"
                      src="/videos/heroVideo.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold tracking-wide text-orange-700">
                Behind the Scenes
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 leading-tight">
                How We Ensure a Safe &amp; Smooth Move Every Time
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Every move starts with a detailed assessment. Our team
                  evaluates item volume, fragile items, distance, and access
                  points to create a customized moving plan.
                </p>
                <p>
                  We use{" "}
                  <strong className="text-gray-900">
                    premium packing materials
                  </strong>{" "}
                  — corrugated boxes, bubble wrap, foam sheets, and specialized
                  containers for electronics, glassware, and artwork.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { icon: <FaBoxOpen />, text: "Premium Packing" },
                  { icon: <FaTruck />, text: "GPS-Tracked Fleet" },
                  { icon: <FaShieldAlt />, text: "Damage Protection" },
                  { icon: <FaClipboardList />, text: "Full Inventory" },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-3 bg-orange-50 rounded-xl px-4 py-3 border border-orange-100"
                  >
                    <span className="text-2xl text-orange-500">
                      {item.icon}
                    </span>
                    <span className="font-semibold text-gray-800 text-sm">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SERVICE AREAS ==================== */}
      <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-orange-50 via-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/80 backdrop-blur-xl border border-gray-100 shadow-[0_30px_80px_-45px_rgba(0,0,0,0.08)] p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-orange-300 bg-clip-text text-transparent">
                We Serve All Major Cities in Nepal
              </h2>
              <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                From Kathmandu to Biratnagar, our branches and teams are ready
                to help you move safely and affordably.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                "Kathmandu",
                "Lalitpur",
                "Bhaktapur",
                "Pokhara",
                "Butwal",
                "Biratnagar",
                "Dharan",
                "Chitwan",
                "Hetauda",
                "Janakpur",
                "Nepalgunj",
                "Dhangadhi",
              ].map((city) => (
                <div
                  key={city}
                  className="rounded-xl bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100 p-4 text-center hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  <FaMapMarkerAlt className="text-2xl mb-1 mx-auto text-orange-500" />
                  <div className="font-semibold text-gray-800 text-sm">
                    {city}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                href="/locations"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 px-8 py-4 text-white font-semibold shadow-lg hover:opacity-90 transition"
              >
                View All Locations
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
        </div>
      </section>

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
            Ready to Move?
            <span className="block bg-gradient-to-r from-orange-400 via-red-400 to-orange-300 bg-clip-text text-transparent mt-2">
              Let&apos;s Make It Easy.
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Get a free estimate for room shifting, office shifting, vehicle
            transport, or any moving service across Nepal.
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
              <FaPhoneAlt className="inline-block mr-2" /> Call: +977-9851071848
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
