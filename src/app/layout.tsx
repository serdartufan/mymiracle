import type { Metadata } from 'next';
import Script from 'next/script';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'HealthAndBeautyBusiness',
  name: 'My Miracle',
  url: 'https://mymiracle.nl',
  email: 'kader@mymiracle.nl',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Bezuidenhoutseweg 161',
    addressLocality: 'Den Haag',
    postalCode: '2594 AG',
    addressCountry: 'NL',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 52.0705,
    longitude: 4.3007,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  priceRange: '€€',
  description:
    'Gecertificeerd LPG Endermologie centrum in Den Haag voor lichaam en gezicht. Officieel LPG partner.',
  areaServed: 'Den Haag',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://mymiracle.nl'),
  title: {
    default: 'My Miracle | Gecertificeerd LPG Endermologie Centrum Den Haag',
    template: '%s | My Miracle',
  },
  description:
    'My Miracle biedt gecertificeerde LPG Endermologie behandelingen voor lichaam en gezicht in Den Haag. Wetenschappelijk bewezen, 100% niet-invasief. Ontdek jouw behandeling.',
  keywords: [
    'lpg endermologie',
    'lpg behandeling den haag',
    'cellulitis behandeling',
    'huidverstrakking',
    'bindweefselmassage den haag',
    'gezichtsbehandeling den haag',
  ],
  authors: [{ name: 'Kader', url: '/over-mij' }],
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    siteName: 'My Miracle',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'geo.region': 'NL-ZH',
    'geo.placename': 'Den Haag',
    'geo.position': '52.0705;4.3007',
    ICBM: '52.0705, 4.3007',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="flex min-h-screen flex-col antialiased">
        <Script
          src="https://analytics.stackwerk.nl/script.js"
          data-website-id="651997c9-257e-4d49-ab8c-3fea2b4eaac6"
          strategy="afterInteractive"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
