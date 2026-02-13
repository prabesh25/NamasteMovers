



"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/locations", label: "Locations" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [heroInView, setHeroInView] = useState(false);

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

  const isTransparent = heroInView && !open;

  const headerClasses = `fixed top-0 inset-x-0 z-30 border-b transition-all duration-500 ${
    isTransparent
      ? "bg-transparent border-transparent text-white"
      : "bg-gradient-to-r from-orange-50 via-red-50 to-orange-50 border-orange-200 backdrop-blur shadow-md"
  }`;

  const linkClasses = `transition-colors font-semibold ${
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
      <div className="section flex items-center justify-between py-2 md:h-16">
        {/* Brand */}
        <Link href="/" className={brandClasses}>
          Fast Packers & Movers
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 ">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className={linkClasses}>
              {item.label}
            </Link>
          ))}

          <Link
            href="tel:+9779851226669"
            className="rounded-full px-4 py-2  font-semibold text-white
                       bg-gradient-to-r from-orange-400 via-red-500 to-orange-400
                       hover:opacity-90 transition"
          >
            Call 24/7: +977 9851226669
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
          <div className="section py-4 flex flex-col gap-3 text-sm font-semibold">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-orange-700 hover:text-red-500 transition"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="tel:+9779851226669"
              className="mt-2 rounded-full px-4 py-2 text-center text-white font-semibold
                         bg-gradient-to-r from-orange-400 via-red-500 to-orange-400"
            >
              Call 24/7: +977 9851226669
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
