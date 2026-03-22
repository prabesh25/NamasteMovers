"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { FaCamera, FaVideo, FaBoxOpen, FaTruck, FaShieldAlt, FaClock, FaSmile, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

/* ─── Media Data ─── */
const galleryImages = [
  // { src: "/img1.jpg", alt: "Professional packing team preparing household items in Kathmandu", category: "Packing" },
  { src: "/img2.jpg", alt: "Office shifting and corporate relocation at Dharan", category: "Dharan Transport" },
  { src: "/img3.jpg", alt: "Safe vehicle transport across Nepal", category: "Kathmandu Transport" },
  // { src: "/Hero.jpg", alt: "Namaste Packers and Movers fleet ready for moving services", category: "Fleet" },
  { src: "/img5.jpg", alt: "Customer relations team coordinating room shifting in Janakpur", category: "Janakpur Transport" },
  { src: "/img6.jpg", alt: "Room shifting service — careful loading of furniture at Hetauda", category: "Hetauda Transport" },
  { src: "/corporateMoving.jpg", alt: "Corporate moving and large-scale office relocation", category: "Office Shifting" },
  { src: "/ResidentialShifting.jpg", alt: "Residential shifting — home moving in Kathmandu Valley", category: "Room Shifting" },
  { src: "/vehicleAndBikeTransport.jpg", alt: "Bike and vehicle transport service with GPS tracking", category: "Vehicle Transport" },
  { src: "/PackingAndBoxing.jpg", alt: "Premium packing materials and boxing services", category: "Packing" },
  { src: "/hero1.jpg", alt: "Namaste Packers moving truck on the highway", category: "Fleet" },
  // { src: "/InternationalMoving.jpg", alt: "International moving and relocation services from Nepal", category: "Fleet" },
];

const galleryVideos = [
  { src: "/videos/video1.mp4", title: "Professional Packing Process", category: "Packing" },
  { src: "/videos/video2.mp4", title: "Room Shifting in Action", category: "Room Shifting" },
  { src: "/videos/video3.mp4", title: "Office Shifting & IT Equipment Handling", category: "Office Shifting" },
  { src: "/videos/video4.mp4", title: "Vehicle & Bike Transport", category: "Vehicle Transport" },
  { src: "/videos/video1.mp4", title: "Loading & Unloading Expertise", category: "Fleet" },
  { src: "/videos/video2.mp4", title: "Team Coordination & Delivery", category: "Team" },
];

const categories = ["All", "Room Shifting", "Office Shifting", "Packing", "Vehicle Transport", "Fleet", "Team"];

export default function GalleryContent() {
  /* ─── State ─── */
  const [activeTab, setActiveTab] = useState("photos"); // "photos" | "videos"
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxType, setLightboxType] = useState("photo"); // "photo" | "video"
  const [playingVideo, setPlayingVideo] = useState(null);
  const videoRefs = useRef({});

  /* ─── Filtered Items ─── */
  const filteredImages = activeCategory === "All" ? galleryImages : galleryImages.filter((i) => i.category === activeCategory);
  const filteredVideos = activeCategory === "All" ? galleryVideos : galleryVideos.filter((v) => v.category === activeCategory);

  /* ─── Lightbox Navigation ─── */
  const currentItems = lightboxType === "photo" ? filteredImages : filteredVideos;

  const openLightbox = useCallback((index, type) => {
    setLightboxIndex(index);
    setLightboxType(type);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    setPlayingVideo(null);
    document.body.style.overflow = "";
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % currentItems.length);
  }, [currentItems.length]);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : currentItems.length - 1));
  }, [currentItems.length]);

  /* Keyboard Navigation */
  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen, closeLightbox, goNext, goPrev]);

  /* Toggle video play */
  const toggleVideo = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;
    if (playingVideo === index) {
      video.pause();
      setPlayingVideo(null);
    } else {
      Object.values(videoRefs.current).forEach((v) => v?.pause());
      video.currentTime = 0;
      video.play().catch(() => {});
      setPlayingVideo(index);
    }
  };

  return (
    <div className="bg-white">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative overflow-hidden" style={{ height: "70dvh" }}>
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
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
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li className="text-white/40">/</li>
              <li className="text-white font-semibold">Gallery</li>
            </ol>
          </nav>

          <span className="inline-block mb-4 px-5 py-2 rounded-full text-sm font-semibold backdrop-blur border border-white/10 bg-red-600/90 text-white">
            <FaCamera className="inline-block mr-2" /> Photos &amp; Videos
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-4xl">
            Our Work
            <span className="block bg-gradient-to-r from-orange-400 via-red-400 to-orange-300 bg-clip-text text-transparent mt-2">
              In Every Frame
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-8">
            See how we handle <strong className="text-white">room shifting</strong>,{" "}
            <strong className="text-white">office moving</strong>, and{" "}
            <strong className="text-white">vehicle transport</strong> across Nepal — captured in photos &amp; videos.
          </p>

          <div className="absolute bottom-8">
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-red-500 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TABS & FILTERS ==================== */}
      <section className="relative -mt-10 z-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl border border-gray-100 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.1)] p-6 md:p-8">
            {/* Photo / Video Toggle */}
            <div className="flex items-center justify-center gap-2 mb-6">
              {([
                { key: "photos", label: "Photos", icon: <FaCamera />, count: filteredImages.length },
                { key: "videos", label: "Videos", icon: <FaVideo />, count: filteredVideos.length },
              ]).map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeTab === tab.key
                      ? "bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg shadow-red-500/25 scale-105"
                      : "text-gray-500 hover:text-red-500 hover:bg-red-50"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                  <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                    activeTab === tab.key ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"
                  }`}>
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Category Filters */}
            <div className="flex items-center justify-center gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 border ${
                    activeCategory === cat
                      ? "bg-gradient-to-r from-orange-500 to-red-500 text-white border-transparent shadow-md"
                      : "text-gray-600 border-gray-200 hover:border-red-300 hover:text-red-600 bg-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PHOTO GALLERY ==================== */}
      {activeTab === "photos" && (
        <section className="py-16 md:py-24 px-6 bg-gradient-to-b from-white via-orange-50/30 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold tracking-wide text-orange-700">
                Photo Gallery
              </span>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-orange-300 bg-clip-text text-transparent">
                Moments From Our Moves
              </h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Every photo tells a story of trust, care, and professionalism. Browse through our work across Nepal.
              </p>
            </div>

            {/* Zigzag Grid Layout */}
            {filteredImages.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredImages.map((img, idx) => {
                  const row = Math.floor(idx / 3);
                  const isMiddleColumn = idx % 3 === 1;
                  
                  // Determine the middle row index
                  const totalRows = Math.ceil(filteredImages.length / 3);
                  const middleRow = Math.floor(totalRows / 2);
                  const isLastRow = row === totalRows - 1;

                  let alignmentClass = "";
                  // Apply zigzag to middle column images
                  if (isMiddleColumn) {
                    if (row === middleRow) {
                      // Keep the absolute middle image centered
                      alignmentClass = "";
                    } else if (isLastRow) {
                      // Always push the last row's middle image down
                      alignmentClass = "translate-y-8";
                    }
                    else {
                      // Alternate for other rows
                      alignmentClass = row % 2 === 0 ? "-translate-y-8" : "translate-y-8";
                    }
                  }

                  return (
                    <div key={idx} className={`transition-transform duration-500 ${alignmentClass}`}>
                      <button
                        onClick={() => openLightbox(idx, "photo")}
                        className="group relative w-full break-inside-avoid rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-[0_30px_80px_-20px_rgba(255,80,80,0.2)] transition-all duration-500 focus:outline-none block"
                      >
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                          <div className="absolute bottom-0 left-0 right-0 p-5">
                            <span className="inline-block mb-2 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-red-500 to-orange-500 text-white">
                              {img.category}
                            </span>
                            <p className="text-white text-sm font-medium leading-relaxed">{img.alt}</p>
                          </div>
                          {/* Zoom icon */}
                          <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                          </div>
                        </div>
                      </button>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-20 text-gray-400">
                <p className="text-lg">No photos found in this category.</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ==================== VIDEO GALLERY ==================== */}
      {activeTab === "videos" && (
        <section className="py-16 md:py-24 px-6 bg-gradient-to-b from-white via-orange-50/30 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold tracking-wide text-orange-700">
                Video Gallery
              </span>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-orange-300 bg-clip-text text-transparent">
                Watch Us In Action
              </h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Real videos of our team handling packing, loading, shifting, and delivering across Nepal.
              </p>
            </div>

            {filteredVideos.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredVideos.map((vid, idx) => (
                  <div
                    key={idx}
                    className="group relative rounded-3xl overflow-hidden border border-gray-100 shadow-xl hover:shadow-[0_30px_80px_-20px_rgba(255,80,80,0.2)] transition-all duration-500 bg-black"
                  >
                    <div className="aspect-video relative">
                      <video
                        ref={(el) => { if (el) videoRefs.current[idx] = el; }}
                        muted
                        playsInline
                        loop
                        className="w-full h-full object-cover"
                      >
                        <source src={vid.src} type="video/mp4" />
                      </video>

                      {/* Play/Pause Overlay */}
                      <button
                        onClick={() => toggleVideo(idx)}
                        className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all duration-300 focus:outline-none"
                      >
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
                          playingVideo === idx
                            ? "bg-white/20 backdrop-blur-sm border border-white/30 scale-90"
                            : "bg-gradient-to-br from-red-500 to-orange-500 shadow-xl shadow-red-500/30 group-hover:scale-110"
                        }`}>
                          {playingVideo === idx ? (
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                            </svg>
                          ) : (
                            <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          )}
                        </div>
                      </button>
                    </div>

                    {/* Video Info */}
                    <div className="p-5 bg-white">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-orange-50 to-red-50 text-red-600 border border-orange-100">
                          {vid.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                        {vid.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 text-gray-400">
                <p className="text-lg">No videos found in this category.</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ==================== FEATURED VIDEO — FULL WIDTH ==================== */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
        {/* Decorative glows */}
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-red-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto relative z-10 px-6">
          <div className="text-center mb-12">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wide text-orange-400 backdrop-blur">
              <FaVideo className="inline-block mr-2" /> Featured
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-orange-300 bg-clip-text text-transparent">
              Behind the Scenes
            </h2>
            <p className="mt-4 text-white/50 max-w-2xl mx-auto">
              See what goes on behind every successful move — from careful packing to safe delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Big Video */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-red-500/20 via-orange-500/10 to-transparent rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-red-500/10">
                <div className="aspect-video bg-black">
                  <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                    <source
                      src="/videos/videoblocks-6499e432f8b2823bb04edc31_hs79zx5_h__df8f2717a60da2beb2b1c553b6a22ab1__P360.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>

            {/* Info Cards */}
            <div className="space-y-5">
              {([
                { icon: <FaBoxOpen />, title: "Premium Packing", desc: "Every item wrapped with bubble wrap, foam, and corrugated boxes." },
                { icon: <FaTruck />, title: "GPS-Tracked Fleet", desc: "Track your belongings in real-time across Nepal." },
                { icon: <FaShieldAlt />, title: "Zero-Damage Guarantee", desc: "Professional handling ensures your items arrive safe." },
                { icon: <FaClock />, title: "On-Time Delivery", desc: "We arrive on time, load Namaste, and deliver on schedule." },
              ]).map((item) => (
                <div key={item.title} className="flex items-start gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                  <span className="text-3xl flex-shrink-0 text-orange-400">{item.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">{item.title}</h3>
                    <p className="text-white/50 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PHOTO SHOWCASE — HORIZONTAL SCROLLING ==================== */}
      <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-orange-50 via-red-50/50 to-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-red-200/40 via-orange-200/30 to-purple-100/40 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold tracking-wide text-slate-700">
              Photo Showcase
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-orange-300 bg-clip-text text-transparent">
              Every Move Tells a Story
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Scroll through our proudest moments — real moves, real customers, real satisfaction.
            </p>
          </div>

          {/* Scrolling Strip */}
          <div className="overflow-x-auto pb-6 scrollbar-hide -mx-6 px-6">
            <div className="flex gap-5" style={{ width: "max-content" }}>
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveCategory("All");
                    openLightbox(idx, "photo");
                  }}
                  className="group relative flex-shrink-0 w-72 h-96 rounded-3xl overflow-hidden border border-gray-100 shadow-xl hover:shadow-[0_30px_80px_-20px_rgba(255,80,80,0.2)] transition-all duration-500 focus:outline-none"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <span className="inline-block mb-2 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-red-500 to-orange-500 text-white">
                        {img.category}
                      </span>
                      <p className="text-white text-sm font-medium">{img.alt}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== STATS BAR ==================== */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {([
              { value: "500+", label: "Photos Captured", icon: <FaCamera /> },
              { value: "100+", label: "Videos Recorded", icon: <FaVideo /> },
              { value: "15K+", label: "Happy Customers", icon: <FaSmile /> },
              { value: "20+", label: "Cities Covered", icon: <FaMapMarkerAlt /> },
            ]).map((stat) => (
              <div
                key={stat.label}
                className="bg-gradient-to-br from-orange-50 to-red-50 backdrop-blur-xl rounded-2xl border border-orange-100 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.06)] p-6 text-center hover:shadow-[0_30px_80px_-20px_rgba(255,80,80,0.12)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-3xl mb-2 text-orange-500">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-orange-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source
              src="/videos/videoblocks-6499e432f8b2823bb04edc31_hs79zx5_h__df8f2717a60da2beb2b1c553b6a22ab1__P360.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/70" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Like What You See?
            <span className="block bg-gradient-to-r from-orange-400 via-red-400 to-orange-300 bg-clip-text text-transparent mt-2">
              Let Us Handle Your Move.
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Get a free estimate for room shifting, office shifting, vehicle transport, or any moving service across Nepal.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="rounded-full bg-gradient-to-r from-red-500 via-red-600 to-orange-500 px-10 py-5 text-white font-bold text-lg shadow-xl hover:opacity-90 transition">
              Get Free Estimate →
            </Link>
            <a href="tel:+9779851226669" className="rounded-full border-2 border-white/30 bg-white/10 backdrop-blur px-10 py-5 text-white font-bold text-lg hover:bg-white/20 transition">
              <FaPhoneAlt className="inline-block mr-2" /> Call: +977-9851226669
            </a>
          </div>
        </div>
      </section>

      {/* ==================== LIGHTBOX MODAL ==================== */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl" onClick={closeLightbox}>
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-50 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/70 transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/70 transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Content */}
          <div className="max-w-5xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
            {lightboxType === "photo" ? (
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={currentItems[lightboxIndex]?.src}
                  alt={currentItems[lightboxIndex]?.alt}
                  className="w-full max-h-[80vh] object-contain bg-black"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <span className="inline-block mb-2 px-3 py-1 rounded-full text-xs font-semibold bg-red-500/90 text-white">
                    {currentItems[lightboxIndex]?.category}
                  </span>
                  <p className="text-white text-sm">{currentItems[lightboxIndex]?.alt}</p>
                </div>
              </div>
            ) : (
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-video bg-black">
                  <video autoPlay muted loop playsInline controls className="w-full h-full object-contain">
                    <source src={currentItems[lightboxIndex]?.src} type="video/mp4" />
                  </video>
                </div>
                <div className="bg-gray-900 p-5">
                  <span className="inline-block mb-2 px-3 py-1 rounded-full text-xs font-semibold bg-red-500/90 text-white">
                    {currentItems[lightboxIndex]?.category}
                  </span>
                  <h3 className="text-white font-bold text-lg">{currentItems[lightboxIndex]?.title}</h3>
                </div>
              </div>
            )}

            {/* Counter */}
            <div className="text-center mt-4">
              <span className="text-white/40 text-sm font-mono tracking-widest">
                {String(lightboxIndex + 1).padStart(2, "0")} / {String(currentItems.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
