import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { images } from '@/data/content';

export const metadata: Metadata = {
  title: 'Behandelingen',
  description:
    'Ontdek de gecertificeerde LPG Endermologie behandelingen van My Miracle, voor lichaam en gezicht. Persoonlijk afgestemd op jouw doelen.',
};

const cards = [
  {
    title: 'Lichaamsbehandelingen',
    desc: 'Cellulitisreductie, plaatselijke vetvermindering en huidverstevigend. De LPG lichaamsbehandeling stimuleert huidcellen diep en geeft zichtbaar resultaat vanaf sessie 6.',
    href: '/behandelingen/lichaam',
    img: images.behandelingenBody,
    alt: 'LPG lichaamsbehandeling voor cellulitis en huidverstevigend',
    highlights: ['Cellulitis zichtbaar minder', 'Stevigere huid', 'Verbeterde lymfedrainage'],
  },
  {
    title: 'Gezichtsbehandelingen',
    desc: 'Anti-aging, liftend effect en een egale huidtint. De LPG gezichtsbehandeling stimuleert collageen- en elastineproductie voor een natuurlijk, uitgerust gezicht.',
    href: '/behandelingen/gezicht',
    img: images.behandelingenFace,
    alt: 'LPG gezichtsbehandeling anti-aging liftend effect',
    highlights: ['Collageen gestimuleerd', 'Liftend effect', 'Egale huidtint'],
  },
];

export default function BehandelingenPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a0a2e] pb-20 pt-36">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <AnimatedSection>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#d4a8b8]">
              Ons aanbod
            </p>
            <h1 className="mb-4 font-serif text-4xl font-bold text-white sm:text-5xl md:text-6xl">Behandelingen</h1>
            <p className="max-w-xl text-lg text-white/70">
              Bij My Miracle bieden we gecertificeerde LPG Endermologie behandelingen voor lichaam en
              gezicht. Elke behandeling is afgestemd op jouw persoonlijke doelen.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Two large cards */}
      <section className="bg-[#faf7f4] py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {cards.map((card, i) => (
              <AnimatedSection key={card.title} delay={i * 0.1}>
                <article className="group overflow-hidden rounded-3xl border border-[#d4a8b8]/30 bg-white shadow-sm transition-shadow hover:shadow-md">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={card.img}
                      alt={card.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a2e]/60 to-transparent" />
                    <h2 className="absolute bottom-6 left-6 font-serif text-2xl font-bold text-white">
                      {card.title}
                    </h2>
                  </div>
                  <div className="p-8">
                    <p className="mb-6 leading-relaxed text-[#1c1c1e]/75">{card.desc}</p>
                    <ul className="mb-8 space-y-2">
                      {card.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-sm text-[#1c1c1e]/80">
                          <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4a8b8]" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={card.href}
                      className="inline-flex items-center gap-2 rounded-full bg-[#4a1a7a] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#5e2490]"
                    >
                      Meer informatie
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

      {/* General info box */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <AnimatedSection>
            <div className="rounded-3xl border border-[#d4a8b8]/40 bg-[#faf7f4] p-10">
              <h2 className="mb-8 font-serif text-3xl font-bold text-[#1a0a2e]">
                Praktische informatie
              </h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#4a1a7a]">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="mb-2 font-semibold text-[#1a0a2e]">Wat te dragen</h3>
                  <p className="text-sm leading-relaxed text-[#1c1c1e]/65">
                    Voor lichaamsbehandelingen wordt een behandelpak gebruikt dat ter plaatse wordt
                    verstrekt. Draag comfortabele kleding.
                  </p>
                </div>
                <div>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#4a1a7a]">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="mb-2 font-semibold text-[#1a0a2e]">Voorbereiding</h3>
                  <p className="text-sm leading-relaxed text-[#1c1c1e]/65">
                    Drink voor de behandeling voldoende water. Kom zonder zware crèmes of oliën op de
                    behandelzone.
                  </p>
                </div>
                <div>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#4a1a7a]">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="mb-2 font-semibold text-[#1a0a2e]">Na de behandeling</h3>
                  <p className="text-sm leading-relaxed text-[#1c1c1e]/65">
                    Drink veel water om de lymfedrainage te ondersteunen. Je kunt direct je activiteiten
                    hervatten. Geen downtime.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#4a1a7a] to-[#2d0f54] py-20 text-center">
        <AnimatedSection className="mx-auto max-w-xl px-4">
          <h2 className="mb-4 font-serif text-3xl font-bold text-white md:text-4xl">
            Klaar om te starten?
          </h2>
          <p className="mb-8 text-white/75">
            Maak een afspraak en we bepalen samen de behandeling die het beste bij jou past.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full border-2 border-white bg-white px-8 py-3.5 text-sm font-semibold text-[#4a1a7a] transition-all hover:bg-transparent hover:text-white"
          >
            Maak een afspraak
          </Link>
        </AnimatedSection>
      </section>
    </>
  );
}
