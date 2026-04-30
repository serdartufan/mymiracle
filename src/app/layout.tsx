import type { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: {
    default: 'My Miracle | Gecertificeerd LPG Endermologie Centrum',
    template: '%s | My Miracle',
  },
  description:
    'My Miracle biedt gecertificeerde LPG Endermologie behandelingen voor lichaam en gezicht. Wetenschappelijk bewezen, 100% niet-invasief. Ontdek jouw behandeling.',
  metadataBase: new URL('https://mymiracle.be'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="flex min-h-screen flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
