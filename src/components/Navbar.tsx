'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Over Mij', href: '/over-mij' },
  {
    label: 'Behandelingen',
    href: '/behandelingen',
    children: [
      { label: 'Lichaamsbehandelingen', href: '/behandelingen/lichaam' },
      { label: 'Gezichtsbehandelingen', href: '/behandelingen/gezicht' },
    ],
  },
  { label: 'LPG Endermologie', href: '/lpg-endermologie' },
  { label: 'Prijzen', href: '/prijzen' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
            ? 'bg-[#1a0a2e]/95 backdrop-blur-md shadow-lg'
            : 'bg-[#1a0a2e]/80 backdrop-blur-sm'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
          {/* Logo */}
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

          {/* Desktop nav */}
          <ul className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) =>
              link.children ? (
                <li key={link.label} className="relative">
                  <button
                    className="flex items-center gap-1 text-sm font-medium text-white/85 transition-colors hover:text-white"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                    onClick={() => setDropdownOpen((o) => !o)}
                  >
                    {link.label}
                    <svg className="h-3.5 w-3.5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {dropdownOpen && (
                    <ul
                      className="absolute left-0 top-full mt-2 min-w-[220px] rounded-xl border border-[#d4a8b8]/20 bg-[#1a0a2e] py-2 shadow-2xl"
                      onMouseEnter={() => setDropdownOpen(true)}
                      onMouseLeave={() => setDropdownOpen(false)}
                    >
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block px-5 py-2.5 text-sm text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                            onClick={() => setDropdownOpen(false)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-white/85 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* CTA + hamburger */}
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
              <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile full-screen menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex flex-col bg-[#1a0a2e] px-6 pt-24 pb-10">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="block py-4 text-2xl font-serif font-medium text-white/90 hover:text-white border-b border-white/10"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <ul className="pl-4">
                    {link.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block py-3 text-lg text-[#d4a8b8] hover:text-white border-b border-white/5"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
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
