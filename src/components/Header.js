



"use client";
import Image from "next/image";


import Link from "next/link";
import { useEffect, useState, useRef } from "react";

const nav = [
  { href: "/", label: "HOME" },
  {
    href: "/services",
    label: "SERVICES",
    dropdown: [
      { href: "/services", label: "Residential Moving" },
      { href: "/services", label: "Office/Corporate" },
      { href: "/services", label: "Vehicle & Bike Transport" },
      { href: "/services", label: "Packing & Boxing" },
    ],
  },
  { href: "/locations", label: "AREAS WE SERVE" },
  { href: "/about", label: "ABOUT" },
  { href: "/gallery", label: "GALLERY" },
  // { href: "/blog", label: "BLOG" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [heroInView, setHeroInView] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownTimeout = useRef(null);

  useEffect(() => {
    const hero = document?.getElementById("home");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHeroInView(entry.isIntersecting),
      { threshold: 0.25, rootMargin: "-80px 0px 0px 0px" }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const handleDropdownEnter = (label) => {
    clearTimeout(dropdownTimeout.current);
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  /* ─── Mobile accordion ─── */
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const isTransparent = heroInView && !open;

  const headerClasses = `fixed top-0 inset-x-0 z-30 border-b transition-all duration-500 ${
    isTransparent
      ? "bg-transparent border-transparent text-white"
      : "bg-gradient-to-r from-orange-50 via-red-50 to-orange-50 border-orange-200 backdrop-blur shadow-md"
  }`;

  const linkClasses = `transition-colors font-semibold tracking-wide text-sm ${
    isTransparent
      ? "text-white hover:text-white/70"
      : "text-orange-700 hover:text-red-500"
  }`;

  const brandClasses = `font-bold  text-3xl bg-clip-text text-transparent transition-colors ${
    isTransparent
      ? "bg-gradient-to-r from-orange-300 via-red-300 to-orange-200"
      : "bg-gradient-to-r from-orange-500 via-red-500 to-orange-400"
  }`;

  const iconBarClasses = `block w-6 h-0.5 transition-colors ${
    isTransparent ? "bg-white" : "bg-red-500"
  }`;

  const mobileMenuClasses = `md:hidden border-t transition-all duration-300 ${
    isTransparent
      ? "bg-slate-900/90 border-white/10 text-white"
      : "bg-gradient-to-b from-orange-50 via-red-50 to-orange-50 border-orange-200 shadow-lg"
  }`;

  return (
    <header className={headerClasses}>
      <div className="section flex items-center justify-between py-2 md:h-[80px]">
        {/* Brand */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/mainLogo1.png"
            alt="Sajilo Packers & Movers"
            width={150}
            height={0}
            className="object-cover"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {nav.map((item) =>
            item.dropdown ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleDropdownEnter(item.label)}
                onMouseLeave={handleDropdownLeave}
              >
                <Link href={item.href} className={`${linkClasses} inline-flex items-center gap-1`}>
                  {item.label}
                  <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === item.label ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>

                {/* Dropdown */}
                {activeDropdown === item.label && (
                  <div
                    className="absolute top-full left-0 mt-2 w-56 rounded-2xl border border-gray-100 bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] overflow-hidden animate-in fade-in slide-in-from-top-2 z-50"
                    onMouseEnter={() => handleDropdownEnter(item.label)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <div className="py-2">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="block px-5 py-3 text-sm text-gray-700 font-medium hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 hover:text-red-600 transition-all"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.href} href={item.href} className={linkClasses}>
                {item.label}
              </Link>
            )
          )}

          <Link
            href="/contact"
            className="rounded-full px-6 py-2.5 font-semibold tracking-wide text-sm text-white
                       bg-gradient-to-r from-orange-400 via-red-400 to-orange-400
                       hover:opacity-90 transition"
          >
            GET A QUOTE
          </Link>
        </nav>

        {/* Mobile Button */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className={`md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border transition-colors ${
            isTransparent ? "border-white/40" : "border-orange-300"
          }`}
        >
          <div className="space-y-1.5">
            <span className={iconBarClasses}></span>
            <span className={iconBarClasses}></span>
            <span className={iconBarClasses}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className={mobileMenuClasses}>
          <div className="section py-4 flex flex-col gap-1 text-sm font-semibold">
            {nav.map((item) =>
              item.dropdown ? (
                <div key={item.label}>
                  <button
                    onClick={() => setMobileDropdown(mobileDropdown === item.label ? null : item.label)}
                    className="w-full flex items-center justify-between py-3 text-orange-700 hover:text-red-500 transition tracking-wide"
                  >
                    {item.label}
                    <svg className={`w-4 h-4 transition-transform duration-300 ${mobileDropdown === item.label ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileDropdown === item.label && (
                    <div className="pl-4 pb-2 flex flex-col gap-1 border-l-2 border-orange-200 ml-2">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          onClick={() => setOpen(false)}
                          className="py-2 text-gray-600 hover:text-red-500 transition text-sm"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-orange-700 hover:text-red-500 transition tracking-wide"
                >
                  {item.label}
                </Link>
              )
            )}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full px-4 py-3 text-center text-white font-semibold tracking-wide
                         bg-gradient-to-r from-orange-400 via-red-500 to-orange-400"
            >
              GET A QUOTE
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
