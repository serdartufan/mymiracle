'use client';

import { useEffect, useState } from 'react';

// Het telefoonnummer wordt pas na hydratie client-side samengesteld, zodat het
// NIET in de server-gerenderde HTML staat. Bezoekers en Googlebot (dat JS
// uitvoert) zien het wel; simpele HTML-scrapers van telemarketeers niet.
export default function PhoneReveal({ className = '' }: { className?: string }) {
  const [display, setDisplay] = useState<string | null>(null);

  useEffect(() => {
    setDisplay(['06', '46', '06', '13', '86'].join(' '));
  }, []);

  if (!display) {
    return <span className={className}>Telefonisch bereikbaar op afspraak</span>;
  }

  const digits = display.replace(/\D/g, '');
  return (
    <a href={`tel:+31${digits.slice(1)}`} className={className}>
      {display}
    </a>
  );
}
