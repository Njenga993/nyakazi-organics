import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import { Inter } from "next/font/google";
import type { Metadata, Viewport } from "next";

// Configure fonts
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Enhanced metadata for better SEO
export const metadata: Metadata = {
  title: {
    default: "Home - Nyakazi Organics | Indigenous African Vegetables",
    template: "%s | Nyakazi Organics",
  },
  description:
    "Nyakazi Organics brings you the finest indigenous African vegetables, sustainably grown using traditional agroecological methods. Fresh from Kenyan farms to your table. Shop organic managu, terere, saga and more.",
  keywords: [
    "indigenous vegetables",
    "organic produce",
    "Kenyan vegetables",
    "agroecological farming",
    "traditional foods",
    "managu",
    "terere",
    "saga",
    "nyakazi organics",
    "organic vegetables Kenya",
    "indigenous African vegetables",
    "sustainable farming Kenya",
    "dried vegetables",
    "vegetable powders",
  ],
  authors: [{ name: "Nyakazi Organics", url: "https://nyakazi.org" }],
  creator: "Nyakazi Organics",
  publisher: "Nyakazi Organics",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://nyakazi.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nyakazi.org",
    title:
      "Home - Nyakazi Organics | Frozen & Dried Indigenous African Vegetables",
    description:
      "Discover the nutritional power of indigenous African vegetables. Sustainably grown, organic, and delivered fresh from Kenyan farms. Revitalize your health with traditional African nutrition.",
    siteName: "Nyakazi Organics",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nyakazi Organics - Frozen & Dried Indigenous African Vegetables from Kenya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Home - Nyakazi Organics | Frozen & Dried Indigenous African Vegetables",
    description:
      "Fresh, organic indigenous African vegetables sustainably grown in Kenya. Discover traditional nutrition with modern convenience. Shop now!",
    images: ["/images/og-image.jpg"],
    creator: "@nyakaziorganics",
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
  category: "E-commerce",
  classification: "Organic Food & Agriculture",
  other: {
    "apple-mobile-web-app-title": "Nyakazi Organics",
    "application-name": "Nyakazi Organics",
  },
};

// Separate viewport export (Next.js 14+ requirement)
export const viewport: Viewport = {
  themeColor: "#1B4D1B",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// Structured data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nyakazi Organics",
  url: "https://nyakazi.org",
  logo: "https://nyakazi.org/images/logo_processed.jpg",
  description:
    "Fresh, organic indigenous African vegetables grown using sustainable agroecological methods. Supporting local farmers and preserving Kenya's agricultural heritage.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+254718105412",
    contactType: "customer service",
    availableLanguage: ["en", "sw"],
    email: "info@nyakazi.org",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "Kenya",
    addressLocality: "Gilgil",
    addressRegion: "Nakuru County",
    streetAddress: "Kariandusi",
  },
  sameAs: [
    "https://www.facebook.com/nyakaziorganics",
    "https://www.instagram.com/nyakaziorganics",
    "https://www.twitter.com/nyakaziorganics",
  ],
  foundingDate: "2023",
  founder: {
    "@type": "Person",
    name: "Nyakazi Organics Team",
  },
  areaServed: {
    "@type": "Country",
    name: "Kenya",
  },
};

// Home page specific structured data
const homePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Nyakazi Organics",
  url: "https://nyakazi.org",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://nyakazi.org/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
  description:
    "Discover the nutritional power of indigenous African vegetables. Sustainably grown using traditional agroecological methods.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageJsonLd) }}
        />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Favicon - Nyakazi Organics */}
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        {/* Android Chrome Icons */}
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/web-app-manifest-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/web-app-manifest-512x512.png"
        />

        {/* Web App Manifest */}
        <link rel="manifest" href="/site.webmanifest" />

        {/* Microsoft Tiles */}
        <meta name="msapplication-TileColor" content="#1B4D1B" />
        <meta
          name="msapplication-TileImage"
          content="/web-app-manifest-144x144.png"
        />
      </head>
      <body
        className="bg-white text-gray-900 antialiased font-sans"
        suppressHydrationWarning
      >
        <div className="flex flex-col min-h-screen">
          <CartProvider>
            <header className="sticky top-0 z-50">
              <Navbar />
            </header>

            <main className="flex-grow">{children}</main>

            <footer>
              <Footer />
            </footer>
          </CartProvider>
        </div>
      </body>
    </html>
  );
}
