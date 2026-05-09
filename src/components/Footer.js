import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#020f16] text-gray-300 relative overflow-hidden">
      {/* CTA Section */}
      <div className="border-b border-gray-700/40">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <h2 className="text-white text-3xl md:text-4xl font-bold">Nepal's Trusted Packers &amp; Movers</h2>
          <Link 
            href="/about" 
            className="bg-gradient-to-r from-orange-500 via-red-400 to-orange-400 hover:opacity-90 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-colors whitespace-nowrap"
          >
            Learn More About Sajilo Packers &amp; Movers
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-3">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center transform -rotate-12">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                </svg>
              </div>
              <span className="text-white text-2xl font-bold">Sajilo Packers</span>
            </div>
            <p className="text-sm text-gray-400">
              Nepal's most trusted moving company. Professional room shifting, office shifting, vehicle transport &amp; packing services since 2010.
            </p>
            <address className="mt-3 text-sm text-gray-400 not-italic">
              Kalanki, Kathmandu-32, Nepal<br />
              <a href="tel:+9779851071848" className="hover:text-white transition-colors">+977-9851071848</a><br />
              <a href="mailto:Padamsunchiuri95@gmail.com" className="hover:text-white transition-colors">Padamsunchiuri95@gmail.com</a>
            </address>
          </div>

          {/* Services Column */}
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/services#room-shifting" className="hover:text-white transition-colors">Room Shifting</Link></li>
              <li><Link href="/services#office-shifting" className="hover:text-white transition-colors">Office Shifting</Link></li>
              <li><Link href="/services#residential-shifting" className="hover:text-white transition-colors">Residential Shifting</Link></li>
              <li><Link href="/services#corporate-moving" className="hover:text-white transition-colors">Corporate Moving</Link></li>
            </ul>
          </div>

          {/* More Services Column */}
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-4">More Services</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/services#vehicle-bike-transport" className="hover:text-white transition-colors">Vehicle &amp; Bike Transport</Link></li>
              <li><Link href="/services#packing-boxing" className="hover:text-white transition-colors">Packing &amp; Boxing</Link></li>
              <li><Link href="/services#international-moving" className="hover:text-white transition-colors">International Moving</Link></li>
              <li><Link href="/services#storage-solutions" className="hover:text-white transition-colors">Storage Solutions</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/branches" className="hover:text-white transition-colors">Our Branches</Link></li>
              <li><Link href="/locations" className="hover:text-white transition-colors">Service Areas</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog &amp; Tips</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Service Areas Column */}
          <div className="md:col-span-3">
            <h3 className="text-white font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2.5 text-sm">
              <li className="hover:text-white transition-colors">Kathmandu • Lalitpur • Bhaktapur</li>
              <li className="hover:text-white transition-colors">Pokhara • Butwal • Biratnagar</li>
              <li className="hover:text-white transition-colors">Dharan • Chitwan • Hetauda</li>
              <li className="hover:text-white transition-colors">Janakpur • Nepalgunj • Dhangadhi</li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4 mt-12">
          <Link href="https://www.facebook.com/Sajilopackersandmovers" className="text-gray-400 hover:text-white transition-colors" aria-label="Sajilo Packers and Movers on Facebook" target="_blank" rel="noopener noreferrer">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </Link>
          <Link href="https://www.instagram.com/Sajilopackersandmovers" className="text-gray-400 hover:text-white transition-colors" aria-label="Sajilo Packers and Movers on Instagram" target="_blank" rel="noopener noreferrer">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </Link>
        </div>
      </div>

      {/* decorative glow */}
      <div className="pointer-events-none absolute right-0 bottom-0 translate-x-24 translate-y-24 w-[540px] h-[420px] bg-[#1b9eb8]/20 blur-[80px] rounded-full" />

      {/* Copyright */}
      <div className="border-t border-gray-700/30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <p className="text-xs text-gray-400">
            © 2026 Sajilo Packers and Movers. All rights reserved. Professional room shifting, office shifting, vehicle transport &amp; packing services across Nepal. Kalanki, Kathmandu-32, Nepal.
          </p>
        </div>
      </div>
    </footer>
  );
}
