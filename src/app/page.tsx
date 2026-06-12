import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { testimonials, images } from '@/data/content';

export const metadata: Metadata = {
  title: 'My Miracle | Gecertificeerd LPG Endermologie Centrum Den Haag',
  description:
    'Officieel gecertificeerd LPG Endermologie centrum in Den Haag. Behandelingen voor cellulitis, huidverstrakking en gezichtsverjonging. Alleen op afspraak.',
  alternates: {
    canonical: 'https://mymiracle.nl',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HealthAndBeautyBusiness',
  name: 'My Miracle',
  description: 'Gecertificeerd LPG Endermologie centrum voor lichaam en gezicht in Den Haag.',
  url: 'https://mymiracle.nl',
  email: 'kader@mymiracle.nl',
  image: 'https://mymiracle.nl/MyMiracle_Full_Color.svg',
  priceRange: '€€',
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
  areaServed: 'Den Haag',
};

const trustItems = [
  {
    title: 'Gecertificeerd LPG centrum',
    desc: 'Professionele Cellu M6 apparatuur',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: '100% niet-invasief',
    desc: 'Geen naalden, geen downtime',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Wetenschappelijk bewezen',
    desc: 'Meer dan 100 klinische studies',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    title: 'Resultaat vanaf sessie 6',
    desc: 'Zichtbare verbetering gegarandeerd',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

const behandelingResultaten = [
  {
    label: 'Lichaam',
    items: ['Afname van cellulitis', 'Plaatselijke vetvermindering', 'Stevigere huid'],
    img: images.behandelingenBody,
    alt: 'LPG lichaamsbehandeling bij My Miracle Den Haag',
  },
  {
    label: 'Gezicht',
    items: ['Stimuleert collageen', 'Liftend effect', 'Stralende huidtint'],
    img: images.behandelingenFace,
    alt: 'LPG gezichtsbehandeling bij My Miracle Den Haag',
  },
];

const usps = [
  {
    title: 'Gecertificeerde LPG specialist',
    desc: 'Persoonlijke aanpak, geen haastbehandelingen.',
  },
  {
    title: 'Professionele Cellu M6 apparatuur',
    desc: 'De gouden standaard in niet-invasieve behandelingen.',
  },
  {
    title: 'Geen druk, geen verkoopgesprekken',
    desc: 'Eerlijk advies dat past bij jouw doelen.',
  },
  {
    title: 'Volledig op jou gericht',
    desc: 'Rustige behandelruimte, 100% aandacht voor jou.',
  },
];

function StarRating() {
  return (
    <div className="flex gap-1 text-[#d4a8b8]" aria-label="5 sterren beoordeling">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* ── Hero ── */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#1a0a2e]">
        <Image
          src={images.hero}
          alt="Luxe wellnessbehandeling sfeervolle ruimte My Miracle Den Haag"
          fill
          className="object-cover opacity-25"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a2e]/60 via-transparent to-[#1a0a2e]/80" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-32 text-center md:px-8">
          <AnimatedSection>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#d4a8b8]">
              Gecertificeerd LPG Endermologie centrum Den Haag
            </p>
            <h1 className="mb-6 font-serif text-5xl font-bold leading-tight text-white md:text-7xl">
              Voel je beter.<br />Zie het verschil.
            </h1>
            <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-white/75">
              Gecertificeerde LPG Endermologie behandelingen bij My Miracle, voor lichaam en gezicht.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/behandelingen"
                className="rounded-full border-2 border-white px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white hover:text-[#1a0a2e]"
              >
                Bekijk behandelingen
              </Link>
              <Link
                href="/contact"
                className="rounded-full bg-[#4a1a7a] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#5e2490]"
              >
                Maak een afspraak
              </Link>
            </div>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="h-6 w-6 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── Trust bar ── */}
      <section className="bg-[#faf7f4] py-14">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {trustItems.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="flex flex-col items-center gap-3 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#4a1a7a]/10 text-[#4a1a7a]">
                    {item.icon}
                  </div>
                  <p className="font-serif text-sm font-semibold text-[#1a0a2e]">{item.title}</p>
                  <p className="text-xs leading-relaxed text-[#1c1c1e]/60">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Intro LPG ── */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 md:grid-cols-2 md:px-8">
          <AnimatedSection>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#4a1a7a]">
              Wetenschappelijk bewezen
            </p>
            <h2 className="mb-6 font-serif text-4xl font-bold leading-snug text-[#1a0a2e] md:text-5xl">
              Wat is LPG Endermologie?
            </h2>
            <p className="mb-6 leading-relaxed text-[#1c1c1e]/75">
              LPG Endermologie is een wetenschappelijk bewezen, niet-invasieve techniek die het lichaam
              stimuleert om van binnenuit te werken. Met de patented Endermologie®-technologie worden
              huidcellen diep gemasseerd, wat leidt tot afname van cellulitis, versteviging van de huid
              en vermindering van vet.
            </p>
            <p className="mb-8 leading-relaxed text-[#1c1c1e]/75">
              Geen naalden. Geen downtime. Bewezen resultaat.
            </p>
            <Link
              href="/lpg-endermologie"
              className="inline-flex items-center gap-2 font-semibold text-[#4a1a7a] transition-all hover:gap-3"
            >
              Meer lezen over LPG Endermologie
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="relative h-80 overflow-hidden rounded-3xl md:h-[480px]">
              <Image
                src={images.intro}
                alt="LPG Endermologie behandeling bij My Miracle Den Haag"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#4a1a7a]/20 to-transparent" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Behandeling sectie */}
      <section className="bg-[#faf7f4] py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <AnimatedSection className="mb-14 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#4a1a7a]">
              LPG Endermologie
            </p>
            <h2 className="mb-4 font-serif text-4xl font-bold text-[#1a0a2e] md:text-5xl">Één behandeling, persoonlijk afgestemd</h2>
            <p className="mx-auto max-w-2xl text-[#1c1c1e]/65 leading-relaxed">
              Bij My Miracle werken we met één gecertificeerde methode: LPG Endermologie. Welk gebied we behandelen en hoe we de aanpak afstemmen, bepalen we samen tijdens de intake.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {behandelingResultaten.map((r, i) => (
              <AnimatedSection key={r.label} delay={i * 0.1}>
                <article className="overflow-hidden rounded-3xl border border-[#d4a8b8]/30 bg-white shadow-sm">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={r.img}
                      alt={r.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a2e]/60 to-transparent" />
                    <h3 className="absolute bottom-5 left-6 font-serif text-2xl font-bold text-white">{r.label}</h3>
                  </div>
                  <div className="p-8">
                    <ul className="space-y-2">
                      {r.items.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-sm text-[#1c1c1e]/75">
                          <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4a8b8]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="mt-10 text-center">
            <Link
              href="/behandelingen"
              className="inline-flex items-center gap-2 rounded-full bg-[#4a1a7a] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#5e2490]"
            >
              Meer over de behandeling
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Why My Miracle ── */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 md:grid-cols-2 md:px-8">
          <AnimatedSection>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#4a1a7a]">
              Jouw voordelen
            </p>
            <h2 className="mb-10 font-serif text-4xl font-bold leading-snug text-[#1a0a2e] md:text-5xl">
              Waarom My Miracle?
            </h2>
            <ul className="space-y-6">
              {usps.map((usp) => (
                <li key={usp.title} className="flex items-start gap-4">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#4a1a7a] text-white">
                    <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m5 12 5 5L19 7" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold text-[#1a0a2e]">{usp.title}</p>
                    <p className="mt-0.5 text-sm text-[#1c1c1e]/65">{usp.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="relative h-80 overflow-hidden rounded-3xl md:h-[500px]">
              <Image
                src={images.whyUs}
                alt="Professionele behandelruimte My Miracle Den Haag"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tl from-[#4a1a7a]/20 to-transparent" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-[#faf7f4] py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <AnimatedSection className="mb-14 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#4a1a7a]">
              Ervaringen
            </p>
            <h2 className="font-serif text-4xl font-bold text-[#1a0a2e] md:text-5xl">
              Wat onze cliënten zeggen
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* TODO: Vervang placeholder testimonials door echte klantreviews */}
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <blockquote className="flex h-full flex-col rounded-2xl border border-[#d4a8b8]/40 bg-white p-8 shadow-sm">
                  <StarRating />
                  <p className="mt-5 flex-1 text-sm leading-relaxed text-[#1c1c1e]/80">"{t.quote}"</p>
                  <footer className="mt-6 border-t border-[#d4a8b8]/30 pt-4 text-xs font-semibold uppercase tracking-widest text-[#4a1a7a]">
                    {t.author}
                  </footer>
                </blockquote>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-gradient-to-br from-[#4a1a7a] to-[#2d0f54] py-24 text-center">
        <AnimatedSection className="mx-auto max-w-2xl px-4">
          <h2 className="mb-4 font-serif text-4xl font-bold text-white md:text-5xl">
            Klaar om het verschil te voelen?
          </h2>
          <p className="mb-10 text-lg text-white/75">
            Maak een vrijblijvende kennismaking en ontdek wat LPG Endermologie voor jou kan betekenen.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full border-2 border-white bg-white px-10 py-4 text-sm font-semibold text-[#4a1a7a] transition-all hover:bg-transparent hover:text-white"
          >
            Plan een gratis kennismaking
          </Link>
        </AnimatedSection>
      </section>
    </>
  );
}
