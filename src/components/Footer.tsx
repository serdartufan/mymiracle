import Image from 'next/image';
import Link from 'next/link';
import { contactInfo } from '@/data/content';

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'Over Mij', href: '/over-mij' },
  { label: 'Behandelingen', href: '/behandelingen' },
  { label: 'Lichaamsbehandelingen', href: '/behandelingen/lichaam' },
  { label: 'Gezichtsbehandelingen', href: '/behandelingen/gezicht' },
  { label: 'LPG Endermologie', href: '/lpg-endermologie' },
  { label: 'Prijzen', href: '/prijzen' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a0a2e] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        {/* Top row */}
        <div className="flex flex-col items-start gap-4 border-b border-[#d4a8b8]/30 pb-10 md:flex-row md:items-center md:justify-between">
          <div>
            <Image
              src="/MyMiracle_Full_Color.svg"
              alt="My Miracle logo"
              width={160}
              height={52}
              className="h-12 w-auto object-contain"
            />
            <p className="mt-3 text-sm text-[#d4a8b8]">Gecertificeerd LPG Endermologie centrum</p>
          </div>
        </div>

        {/* Middle row */}
        <div className="grid grid-cols-1 gap-10 border-b border-[#d4a8b8]/30 py-10 md:grid-cols-3">
          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#d4a8b8]">
              Navigatie
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#d4a8b8]">
              Contact
            </h3>
            <address className="not-italic space-y-2 text-sm text-white/70">
              <p>{contactInfo.address}</p>
              <p>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </p>
            </address>
          </div>

          {/* Opening hours */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#d4a8b8]">
              Openingstijden
            </h3>
            <p className="text-sm text-white/70">{contactInfo.openingHours}</p>
          </div>
        </div>

        {/* Bottom row */}
        <p className="pt-8 text-center text-sm text-white/40">
          © {new Date().getFullYear()} My Miracle. Alle rechten voorbehouden.
        </p>
      </div>
    </footer>
  );
}
