import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  defaultMetadata,
  generateLocalBusinessSchema,
  generateOrganizationSchema,
} from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = defaultMetadata;

export default function RootLayout({ children }) {
  const localBusinessJsonLd = generateLocalBusinessSchema();
  const organizationJsonLd = generateOrganizationSchema();

  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.fastpackersandmovers.com.np" />
        <meta name="geo.region" content="NP" />
        <meta name="geo.placename" content="Kathmandu" />
        <meta name="geo.position" content="27.6933;85.2812" />
        <meta name="ICBM" content="27.6933, 85.2812" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}