export const siteUrl = "https://www.Sajilopackersandmovers.com";
export const siteName = "Sajilo Packers and Movers";
export const sitePhone = "+977-9851071848";
export const siteEmail = "Padamsunchiuri95@gmail.com";
export const siteAddress = {
  street: "Baluwatar",
  city: "Kathmandu",
  state: "Bagmati",
  zip: "44600",
  country: "NP",
};

// All target keywords grouped by intent
export const primaryKeywords = [
  "packers and movers in nepal",
  "packers and movers in kathmandu",
  "best packers and movers nepal",
  "Sajilo packers and movers",
  "room shifting service kathmandu",
  "room shifting service nepal",
  "office shifting service kathmandu",
  "office shifting service nepal",
  "house shifting kathmandu",
  "house shifting nepal",
  "residential shifting nepal",
  "corporate moving nepal",
  "vehicle transport nepal",
  "bike transport nepal",
  "packing and boxing services nepal",
  "moving company in kathmandu",
  "movers and packers kathmandu",
];

export const locationKeywords = [
  "packers and movers in kathmandu",
  "packers and movers in lalitpur",
  "packers and movers in bhaktapur",
  "packers and movers in pokhara",
  "packers and movers in butwal",
  "packers and movers in biratnagar",
  "packers and movers in dharan",
  "packers and movers in chitwan",
  "packers and movers in hetauda",
  "packers and movers in janakpur",
  "packers and movers in narayanghat",
  "packers and movers in bhairahawa",
  "packers and movers in nepalgunj",
  "packers and movers in dhangadhi",
  "room shifting in kathmandu",
  "office shifting in kathmandu",
  "office shifting in pokhara",
  "office shifting in butwal",
  "house shifting in lalitpur",
  "house shifting in bhaktapur",
];

export const serviceKeywords = [
  "residential shifting service nepal",
  "corporate moving service nepal",
  "office relocation kathmandu",
  "vehicle and bike transport nepal",
  "car transport service nepal",
  "bike transport service kathmandu",
  "packing and boxing services",
  "international moving nepal",
  "storage solutions kathmandu",
  "furniture moving kathmandu",
  "home shifting nepal",
  "safe packing service nepal",
];

// Default metadata for the entire site (used in layout.js)
export const defaultMetadata = {
  metadataBase: new URL(siteUrl),
  verification: {
    google: "LJxMm9oOCZj7zvmCKhYuaDg8SMdfYf43H3uBH3bYQHU",
  },
  title: {
    default:
      "Sajilo Packers and Movers | #1 Room Shifting & Office Shifting Service in Nepal",
    template: "%s | Sajilo Packers and Movers Nepal",
  },
  description:
    "Sajilo Packers and Movers is Nepal's most trusted moving company. We offer room shifting, office shifting, residential shifting, corporate moving, vehicle & bike transport, and packing services in Kathmandu, Pokhara, Butwal, Biratnagar & across Nepal. Call 24/7: +977-9851071848.",
  keywords: [...primaryKeywords, ...locationKeywords, ...serviceKeywords],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title:
      "Sajilo Packers and Movers | #1 Room Shifting & Office Shifting Service in Nepal",
    description:
      "Nepal's most trusted movers. Room shifting, office shifting, vehicle transport & packing services across Kathmandu, Pokhara, Butwal & all Nepal. Call 24/7.",
    url: siteUrl,
    siteName: siteName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Sajilo Packers and Movers - Room Shifting & Office Shifting in Nepal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Sajilo Packers and Movers | Room & Office Shifting Nepal",
    description:
      "Professional room shifting, office shifting, vehicle transport & packing in Kathmandu, Pokhara, Butwal & all Nepal. 24/7 support.",
    images: [`${siteUrl}/images/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  other: {
    "geo.region": "NP",
    "geo.placename": "Kathmandu",
    "geo.position": "27.6933;85.2812",
    "ICBM": "27.6933, 85.2812",
  },
};

// JSON-LD Structured Data for Local Business
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: siteName,
    image: `${siteUrl}/images/og-image.jpg`,
    "@id": siteUrl,
    url: siteUrl,
    telephone: sitePhone,
    email: siteEmail,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteAddress.street,
      addressLocality: siteAddress.city,
      addressRegion: siteAddress.state,
      postalCode: siteAddress.zip,
      addressCountry: siteAddress.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 27.6933,
      longitude: 85.2812,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: [
      "https://www.facebook.com/Sajilopackersandmovers",
      "https://www.instagram.com/Sajilopackersandmovers",
    ],
    priceRange: "$$",
    description:
      "Sajilo Packers and Movers provides professional room shifting, office shifting, residential moving, corporate moving, vehicle & bike transport, packing & boxing services in Kathmandu, Pokhara, Butwal, Biratnagar and throughout Nepal.",
    areaServed: [
      { "@type": "City", name: "Kathmandu" },
      { "@type": "City", name: "Lalitpur" },
      { "@type": "City", name: "Bhaktapur" },
      { "@type": "City", name: "Pokhara" },
      { "@type": "City", name: "Butwal" },
      { "@type": "City", name: "Biratnagar" },
      { "@type": "City", name: "Dharan" },
      { "@type": "City", name: "Chitwan" },
      { "@type": "City", name: "Hetauda" },
      { "@type": "City", name: "Janakpur" },
      { "@type": "City", name: "Narayanghat" },
      { "@type": "City", name: "Bhairahawa" },
      { "@type": "City", name: "Nepalgunj" },
      { "@type": "City", name: "Dhangadhi" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Moving & Packing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Room Shifting Service",
            description:
              "Safe and affordable room shifting service in Kathmandu and across Nepal.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Office Shifting Service",
            description:
              "Professional office shifting and corporate relocation service with minimal downtime.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Residential Shifting",
            description:
              "Complete house and residential shifting with careful packing and safe transport.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Vehicle & Bike Transport",
            description:
              "Secure car and bike transport service across Nepal with tracking.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Packing & Boxing Services",
            description:
              "Premium packing materials and expert boxing for fragile and heavy items.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "International Moving",
            description:
              "Smooth international relocation with customs documentation and safe packing.",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1500",
      bestRating: "5",
      worstRating: "1",
    },
  };
}

// JSON-LD for Organization
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: sitePhone,
      contactType: "customer service",
      areaServed: "NP",
      availableLanguage: ["English", "Nepali"],
    },
  };
}

// JSON-LD for FAQ page
export function generateFAQSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

// JSON-LD for BreadcrumbList
export function generateBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.href}`,
    })),
  };
}

// JSON-LD for Service pages
export function generateServiceSchema(service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    provider: {
      "@type": "MovingCompany",
      name: siteName,
      url: siteUrl,
      telephone: sitePhone,
    },
    areaServed: {
      "@type": "Country",
      name: "Nepal",
    },
    description: service.description,
  };
}