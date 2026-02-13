"use client";

import { useState } from "react";
import Link from "next/link";

const contactMethods = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "Call Us 24/7",
    value: "+977-9851226669",
    href: "tel:+9779851226669",
    desc: "Instant response, day or night. Our team is always ready.",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Email Us",
    value: "Fastpackersnepal@gmail.com",
    href: "mailto:Fastpackersnepal@gmail.com",
    desc: "Send us your requirements. We'll respond within 1 hour.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Visit Our Office",
    value: "Kalanki, Kathmandu-32, Nepal",
    href: "https://maps.google.com/?q=Kalanki+Kathmandu+Nepal",
    desc: "Walk in for a free consultation and moving plan.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "WhatsApp",
    value: "+977-9851226669",
    href: "https://wa.me/9779851226669",
    desc: "Send photos and details for an instant quote via WhatsApp.",
    color: "from-green-500 to-emerald-500",
  },
];

const faqs = [
  {
    q: "How do I get a free moving quote?",
    a: "Call us at +977-9851226669, fill out the form on this page, or WhatsApp us with details of your move. We'll provide an instant, transparent quote with no hidden charges.",
  },
  {
    q: "How quickly can you start my move?",
    a: "We offer same-day shifting for urgent moves in Kathmandu Valley. For intercity moves, we typically need 24-48 hours notice for planning and scheduling.",
  },
  {
    q: "What areas do you cover?",
    a: "We serve all major cities in Nepal — Kathmandu, Lalitpur, Bhaktapur, Pokhara, Butwal, Biratnagar, Dharan, Chitwan, Hetauda, Janakpur, Nepalgunj, Dhangadhi, and more.",
  },
  {
    q: "Are my belongings insured during the move?",
    a: "Yes! We offer transit insurance for all moves. Our premium packing materials and trained crew also ensure minimal risk of any damage during transport.",
  },
  {
    q: "Do you provide packing materials?",
    a: "Absolutely. We provide premium packing materials — corrugated boxes, bubble wrap, foam sheets, stretch wrap, and custom crating for fragile or valuable items.",
  },
];

export default function ContactContent() {
  const [openFaq, setOpenFaq] = useState(null);
  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, integrate with email service or backend
    setFormStatus("success");
    setTimeout(() => setFormStatus(null), 5000);
  };

  return (
    <div className="bg-white">
      {/* ==================== HERO — SPLIT LAYOUT ==================== */}
      <section className="relative overflow-hidden bg-gray-950">
        {/* Video background */}
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-30">
            <source src="/videos/videoblocks-6499e432f8b2823bb04edc31_hs79zx5_h__df8f2717a60da2beb2b1c553b6a22ab1__P360.mp4" type="video/mp4" />
          </video>
          {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-950/90 via-gray-900/80 to-red-950/70" /> */}
        </div>

        {/* Decorative glows */}
        {/* <div className="absolute top-20 -left-32 w-96 h-96 bg-red-500/20 rounded-full blur-[140px]" /> */}
        <div className="absolute bottom-10 right-0 w-80 h-80 bg-orange-500/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[200px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 md:pt-36 pb-20 md:pb-28">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left — Text content */}
            <div className="space-y-8">
              <nav aria-label="Breadcrumb">
                <ol className="flex items-center gap-2 text-sm text-white/50">
                  <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                  <li className="text-white/30">/</li>
                  <li className="text-white/80 font-medium">Contact</li>
                </ol>
              </nav>

              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                  </span>
                  <span className="text-sm font-medium text-green-400">Available Now — 24/7 Support</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                  Let&apos;s Get Your
                  <span className="block mt-2 bg-gradient-to-r from-orange-400 via-red-400 to-orange-300 bg-clip-text text-transparent">
                    Move Started
                  </span>
                </h1>

                <p className="text-lg text-white/60 max-w-lg leading-relaxed">
                  Reach out for a <strong className="text-white/90">free, no-obligation estimate</strong>. Our expert team responds within minutes — call, message, or fill out the form.
                </p>
              </div>

              {/* Quick contact actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+9779851226669"
                  className="group flex items-center gap-3 rounded-2xl bg-gradient-to-r from-red-500 to-orange-500 px-6 py-4 text-white font-semibold shadow-lg shadow-red-500/25 hover:shadow-red-500/40 hover:scale-[1.02] transition-all duration-300"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/20 group-hover:bg-white/30 transition">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <div className="text-left">
                    <span className="block text-xs text-white/70 font-normal">Call Now</span>
                    <span className="block">+977-9851226669</span>
                  </div>
                </a>
                <a
                  href="https://wa.me/9779851226669"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm px-6 py-4 text-white font-semibold hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] transition-all duration-300"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-green-500/20 group-hover:bg-green-500/30 transition">
                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.11.546 4.095 1.504 5.82L0 24l6.335-1.464A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.82c-1.87 0-3.623-.5-5.13-1.378l-.368-.218-3.813.882.956-3.5-.24-.38A9.78 9.78 0 012.18 12c0-5.422 4.398-9.82 9.82-9.82 5.422 0 9.82 4.398 9.82 9.82 0 5.422-4.398 9.82-9.82 9.82z" />
                    </svg>
                  </span>
                  <div className="text-left">
                    <span className="block text-xs text-white/50 font-normal">WhatsApp</span>
                    <span className="block">Message Us</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Right — Contact method cards grid */}
            <div className="space-y-4">
              {contactMethods.map((method, idx) => (
                <a
                  key={method.title}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-5 rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl p-5 hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-300"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${method.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                    {method.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-white text-sm group-hover:text-orange-300 transition">{method.title}</h3>
                    <p className="text-white/80 text-sm font-medium truncate">{method.value}</p>
                    <p className="text-white/40 text-xs mt-0.5">{method.desc}</p>
                  </div>
                  <svg className="w-5 h-5 text-white/20 group-hover:text-orange-400 group-hover:translate-x-1 transition-all flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FORM + INFO SECTION ==================== */}
      <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-white via-orange-50/30 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 md:gap-16">
            {/* Left side — Contact Info */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold tracking-wide text-orange-700">
                  Contact Information
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight">
                  Let&apos;s Plan Your Move
                </h2>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Whether it&apos;s <strong className="text-gray-900">room shifting</strong>, <strong className="text-gray-900">office shifting</strong>, <strong className="text-gray-900">vehicle transport</strong>, or any other moving service — our team is ready to help 24/7.
                </p>
              </div>

              {/* Contact details */}
              <div className="space-y-5">
                {contactMethods.map((method) => (
                  <a
                    key={method.title}
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 group"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 group-hover:text-red-600 transition">{method.title}</h3>
                      <p className="text-gray-600 text-sm">{method.value}</p>
                      <p className="text-gray-400 text-xs mt-0.5">{method.desc}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Service areas */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-100 p-6">
                <h3 className="font-bold text-gray-900 mb-3">We Serve All Major Cities</h3>
                <div className="flex flex-wrap gap-2">
                  {["Kathmandu", "Lalitpur", "Bhaktapur", "Pokhara", "Butwal", "Biratnagar", "Dharan", "Chitwan", "Hetauda", "Janakpur", "Nepalgunj", "Dhangadhi"].map((city) => (
                    <span key={city} className="inline-block rounded-full bg-white border border-orange-200 px-3 py-1 text-xs font-semibold text-gray-700">
                      📍 {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side — Quote Form */}
            <div className="md:col-span-3">
              <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.08)] p-8 md:p-10">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                    Request a Free Quote
                  </h2>
                  <p className="text-gray-500 mt-2">Fill in the details below and we&apos;ll get back to you within minutes.</p>
                </div>

                {formStatus === "success" && (
                  <div className="mb-6 bg-green-50 border border-green-200 rounded-2xl p-4 flex items-center gap-3">
                    <span className="text-2xl">✅</span>
                    <div>
                      <p className="font-bold text-green-800">Quote Request Sent!</p>
                      <p className="text-green-600 text-sm">Our team will contact you within 30 minutes.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5" aria-label="Request a free moving quote">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-1.5">Your Name *</label>
                      <input
                        id="name" name="name" required
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/40 focus:border-red-500 transition"
                        placeholder="Full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-1.5">Phone Number *</label>
                      <input
                        id="phone" name="phone" type="tel" required
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/40 focus:border-red-500 transition"
                        placeholder="+977-98XXXXXXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-1.5">Email</label>
                    <input
                      id="email" name="email" type="email"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/40 focus:border-red-500 transition"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-900 mb-1.5">Service Needed *</label>
                    <select
                      id="service" name="service" required
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500/40 focus:border-red-500 transition"
                    >
                      <option value="">Select a service</option>
                      <option value="room-shifting">Room Shifting</option>
                      <option value="office-shifting">Office Shifting</option>
                      <option value="residential-shifting">Residential Shifting</option>
                      <option value="corporate-moving">Corporate Moving</option>
                      <option value="vehicle-transport">Vehicle & Bike Transport</option>
                      <option value="packing-boxing">Packing & Boxing</option>
                      <option value="international-moving">International Moving</option>
                      <option value="storage">Storage Solutions</option>
                    </select>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="moveFrom" className="block text-sm font-semibold text-gray-900 mb-1.5">Moving From</label>
                      <input
                        id="moveFrom" name="moveFrom"
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/40 focus:border-red-500 transition"
                        placeholder="e.g. Kathmandu"
                      />
                    </div>
                    <div>
                      <label htmlFor="moveTo" className="block text-sm font-semibold text-gray-900 mb-1.5">Moving To</label>
                      <input
                        id="moveTo" name="moveTo"
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/40 focus:border-red-500 transition"
                        placeholder="e.g. Pokhara"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="moveDate" className="block text-sm font-semibold text-gray-900 mb-1.5">Preferred Move Date</label>
                    <input
                      id="moveDate" name="moveDate" type="date"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500/40 focus:border-red-500 transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-1.5">Additional Details</label>
                    <textarea
                      id="message" name="message" rows="4"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/40 focus:border-red-500 transition resize-none"
                      placeholder="Tell us about your move — number of rooms, floors, special items, any requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-gradient-to-r from-red-500 via-red-600 to-orange-500 px-8 py-4 text-white font-bold text-lg shadow-xl hover:opacity-90 transition flex items-center justify-center gap-2"
                  >
                    Get Free Moving Quote
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-red-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-[120px]" />

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wide text-orange-400 backdrop-blur">
              ❓ Common Questions
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-orange-300 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h3 className="text-white font-semibold pr-4">{faq.q}</h3>
                  <svg
                    className={`w-5 h-5 text-orange-400 flex-shrink-0 transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`transition-all duration-300 overflow-hidden ${openFaq === idx ? "max-h-40 pb-6 px-6" : "max-h-0"}`}>
                  <p className="text-gray-400 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== MAP / OFFICE ==================== */}
      <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-orange-50 via-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Find Our Office
            </h2>
            <p className="mt-3 text-gray-600">Visit us at Kalanki, Kathmandu — or let us come to you for a free assessment.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Map placeholder */}
            <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-xl min-h-[350px] bg-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.8!2d85.28!3d27.69!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKalanki%2C+Kathmandu!5e0!3m2!1sen!2snp!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "350px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Fast Packers and Movers office location in Kalanki, Kathmandu"
              />
            </div>

            {/* Office info */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8 md:p-10 flex flex-col justify-center space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Fast Packers and Movers</h3>
                <p className="text-gray-500">Head Office</p>
              </div>

              <address className="not-italic space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <span className="text-xl">📍</span>
                  <div>
                    <p className="font-semibold">Kalanki, Kathmandu-32</p>
                    <p className="text-gray-500 text-sm">Nepal</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl">📞</span>
                  <div>
                    <a href="tel:+9779851226669" className="font-semibold text-red-600 hover:underline">+977-9851226669</a>
                    <p className="text-gray-500 text-sm">Available 24 hours, 7 days</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl">✉️</span>
                  <div>
                    <a href="mailto:Fastpackersnepal@gmail.com" className="font-semibold text-red-600 hover:underline">Fastpackersnepal@gmail.com</a>
                    <p className="text-gray-500 text-sm">Response within 1 hour</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl">🕐</span>
                  <div>
                    <p className="font-semibold">Working Hours</p>
                    <p className="text-gray-500 text-sm">24/7 — Always open for your move</p>
                  </div>
                </div>
              </address>

              <div className="flex gap-3 pt-2">
                <a href="tel:+9779851226669" className="flex-1 rounded-full bg-gradient-to-r from-red-500 to-orange-500 px-6 py-3 text-white font-semibold text-center hover:opacity-90 transition shadow-lg">
                  📞 Call Now
                </a>
                <a href="https://wa.me/9779851226669" target="_blank" rel="noopener noreferrer" className="flex-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-3 text-white font-semibold text-center hover:opacity-90 transition shadow-lg">
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
