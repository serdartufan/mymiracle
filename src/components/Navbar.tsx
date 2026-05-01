'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Over Mij', href: '/over-mij' },
  { label: 'Behandeling', href: '/behandelingen' },
  { label: 'LPG Endermologie', href: '/lpg-endermologie' },
  { label: 'Prijzen', href: '/prijzen' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileOpen
            ? 'bg-white shadow-md'
            : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
          <Link href="/" className="relative flex-shrink-0" onClick={() => setMobileOpen(false)}>
            <Image
              src="/MyMiracle_Full_Color.svg"
              alt="My Miracle logo"
              width={160}
              height={52}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          <ul className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-[#1c1c1e]/75 transition-colors hover:text-[#4a1a7a]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden rounded-full bg-[#4a1a7a] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#5e2490] md:block"
            >
              Maak een afspraak
            </Link>
            <button
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? 'Menu sluiten' : 'Menu openen'}
            >
              <span className={`block h-0.5 w-6 bg-[#1c1c1e] transition-all duration-300 ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block h-0.5 w-6 bg-[#1c1c1e] transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-6 bg-[#1c1c1e] transition-all duration-300 ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`} />
            </button>
          </div>
        </nav>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex flex-col bg-white px-6 pt-24 pb-10">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="block py-4 text-2xl font-serif font-medium text-[#1a0a2e]/90 hover:text-[#4a1a7a] border-b border-[#1c1c1e]/10"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="mt-8 rounded-full bg-[#4a1a7a] px-8 py-4 text-center text-lg font-semibold text-white hover:bg-[#5e2490]"
            onClick={() => setMobileOpen(false)}
          >
            Maak een afspraak
          </Link>
        </div>
      )}
    </>
  );
}
