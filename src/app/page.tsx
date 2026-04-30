import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { testimonials, images } from '@/data/content';

export const metadata: Metadata = {
  title: 'My Miracle | Gecertificeerd LPG Endermologie Centrum',
  description:
    'Gecertificeerde LPG Endermologie behandelingen voor lichaam en gezicht bij My Miracle. Wetenschappelijk bewezen, 100% niet-invasief. Maak een afspraak.',
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'My Miracle',
  description: 'Gecertificeerd LPG Endermologie centrum voor lichaam en gezicht.',
  url: 'https://mymiracle.be',
  image: 'https://mymiracle.be/MyMiracle_Full_Color.svg',
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'BE',
  },
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

const treatmentCards = [
  {
    title: 'Lichaamsbehandelingen',
    desc: 'Cellulitisreductie, vetvermindering en huidverstevigend. Zichtbaar resultaat na 6–10 sessies.',
    href: '/behandelingen/lichaam',
    img: images.behandelingenBody,
    alt: 'LPG lichaamsbehandeling cellulitis reductie',
  },
  {
    title: 'Gezichtsbehandelingen',
    desc: 'Anti-aging, liftend effect en een stralende, egale huidtint. Stimuleert collageen van binnenuit.',
    href: '/behandelingen/gezicht',
    img: images.behandelingenFace,
    alt: 'LPG gezichtsbehandeling anti-aging lifting',
  },
  {
    title: 'Welzijnsbehandelingen',
    desc: 'Diepe ontspanning, betere doorbloeding en herstel. Goed voor lichaam én geest.',
    href: '/behandelingen',
    img: images.wellness,
    alt: 'Welzijnsbehandeling ontspanning doorbloeding',
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
          alt="Luxe wellnessbehandeling sfeervolle ruimte"
          fill
          className="object-cover opacity-25"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a2e]/60 via-transparent to-[#1a0a2e]/80" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-32 text-center md:px-8">
          <AnimatedSection>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#d4a8b8]">
              Gecertificeerd LPG Endermologie centrum
            </p>
            <h1 className="mb-6 font-serif text-5xl font-bold leading-tight text-white md:text-7xl">
              Voel je beter.<br />Zie het verschil.
            </h1>
            <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-white/75">
              Gecertificeerde LPG Endermologie behandelingen bij My Miracle — voor lichaam en gezicht.
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
              huidcellen diep gemasseerd — wat leidt tot afname van cellulitis, versteviging van de huid
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
                alt="LPG Endermologie behandeling close-up"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#4a1a7a]/20 to-transparent" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Treatment cards ── */}
      <section className="bg-[#faf7f4] py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <AnimatedSection className="mb-14 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#4a1a7a]">
              Ons aanbod
            </p>
            <h2 className="font-serif text-4xl font-bold text-[#1a0a2e] md:text-5xl">Onze behandelingen</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {treatmentCards.map((card, i) => (
              <AnimatedSection key={card.title} delay={i * 0.12}>
                <article className="group relative overflow-hidden rounded-2xl border border-[#4a1a7a]/12 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#4a1a7a]" />
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={card.img}
                      alt={card.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a2e]/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 font-serif text-xl font-semibold text-[#1a0a2e]">{card.title}</h3>
                    <p className="mb-5 text-sm leading-relaxed text-[#1c1c1e]/65">{card.desc}</p>
                    <Link
                      href={card.href}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4a1a7a] transition-all hover:gap-3"
                    >
                      Meer info
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
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
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#4a1a7a] text-xs text-white">✦</span>
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
                alt="Professionele behandelruimte My Miracle"
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
                    — {t.author}
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
