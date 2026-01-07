import '../styles/globals.css';
import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CartProvider } from '@/context/CartContext';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';

// Configure fonts
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// Enhanced metadata for better SEO
export const metadata: Metadata = {
  title: {
    default: 'Nyakazi Organics - Indigenous African Vegetables',
    template: '%s | Nyakazi Organics'
  },
  description: 'Discover the nutritional power of indigenous African vegetables. Sustainably grown using traditional agroecological methods. Fresh, organic products straight from Kenyan farms to your table.',
  keywords: ['indigenous vegetables', 'organic produce', 'Kenyan vegetables', 'agroecological farming', 'traditional foods', 'managu', 'terere', 'saga', 'nyakazi organics'],
  authors: [{ name: 'Nyakazi Organics' }],
  creator: 'Nyakazi Organics',
  publisher: 'Nyakazi Organics',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nyakazi-organics.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nyakazi-organics.vercel.app',
    title: 'Nyakazi Organics - Indigenous African Vegetables',
    description: 'Discover the nutritional power of indigenous African vegetables. Sustainably grown using traditional agroecological methods.',
    siteName: 'Nyakazi Organics',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nyakazi Organics - Indigenous African Vegetables',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nyakazi Organics - Indigenous African Vegetables',
    description: 'Discover the nutritional power of indigenous African vegetables. Sustainably grown using traditional agroecological methods.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

// Structured data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Nyakazi Organics',
  url: 'https://nyakazi-organics.vercel.app',
  logo: 'https://nyakazi-organics.vercel.app/images/logo_processed.jpg',
  description: 'Fresh, organic indigenous African vegetables grown using sustainable agroecological methods.',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+254712345678',
    contactType: 'customer service',
    availableLanguage: ['en'],
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'Kenya',
    addressLocality: 'Nairobi',
  },
  sameAs: [
    'https://www.facebook.com/nyakaziorganics',
    'https://www.instagram.com/nyakaziorganics',
    'https://www.twitter.com/nyakaziorganics',
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#16a34a" />
        
        {/* Viewport for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="bg-white text-gray-900 antialiased font-sans">
        <div className="flex flex-col min-h-screen">
          <CartProvider>
            <header className="sticky top-0 z-50">
              <Navbar />
            </header>
            
            <main className="flex-grow">
              {children}
            </main>
            
            <footer>
              <Footer />
            </footer>
          </CartProvider>
        </div>
        
        {/* Analytics script - replace with your actual analytics code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Add your analytics script here
              // Example: Google Analytics
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </body>
    </html>
  );
}