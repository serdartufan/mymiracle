import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import Breadcrumb from '@/components/Breadcrumb';
import { images } from '@/data/content';

export const metadata: Metadata = {
  title: 'LPG Behandelingen Den Haag',
  description:
    'Ontdek alle LPG Endermologie behandelingen bij My Miracle Den Haag. Lichaams- en gezichtsbehandelingen op maat. Wetenschappelijk bewezen resultaat.',
  alternates: {
    canonical: 'https://mymiracle.nl/behandelingen',
  },
};

const resultaten = [
  {
    label: 'Lichaam',
    items: ['Afname van cellulitis', 'Plaatselijke vetvermindering', 'Stevigere en soepelere huid', 'Verbeterde lymfedrainage'],
    img: images.behandelingenBody,
    alt: 'LPG Endermologie lichaamsbehandeling bij My Miracle Den Haag',
  },
  {
    label: 'Gezicht',
    items: ['Stimuleert collageen en elastine', 'Liftend en verstevigend effect', 'Vermindering van rimpels', 'Egale huidtint en natuurlijke glow'],
    img: images.behandelingenFace,
    alt: 'LPG Endermologie gezichtsbehandeling bij My Miracle Den Haag',
  },
];

export default function BehandelingenPage() {
  return (
    <>
      <section className="bg-[#1a0a2e] pb-20 pt-36">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Breadcrumb items={[{ label: 'Behandelingen', href: '/behandelingen' }]} />
          <AnimatedSection>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#d4a8b8]">
              LPG Endermologie
            </p>
            <h1 className="mb-4 font-serif text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              Één behandeling.<br />Persoonlijk afgestemd.
            </h1>
            <p className="max-w-xl text-lg text-white/70">
              Bij My Miracle werken we met één gecertificeerde behandeling: LPG Endermologie. Welk gebied we behandelen en hoe we de aanpak afstemmen, bepalen we samen tijdens de intake.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-[#faf7f4] py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <AnimatedSection>
            <div className="rounded-3xl border border-[#d4a8b8]/40 bg-white p-10 text-center shadow-sm">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#4a1a7a]/10">
                <svg className="h-8 w-8 text-[#4a1a7a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="mb-4 font-serif text-3xl font-bold text-[#1a0a2e]">
                De intake is het startpunt
              </h2>
              <p className="mx-auto max-w-2xl leading-relaxed text-[#1c1c1e]/70">
                Ieder lichaam is anders. Tijdens de gratis kennismaking bespreken we jouw doelen, wensen en eventuele aandachtspunten. Op basis daarvan bepalen we samen het behandelgebied en het aantal sessies dat het beste resultaat geeft.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <AnimatedSection>
            <h2 className="mb-12 text-center font-serif text-3xl font-bold text-[#1a0a2e] md:text-4xl">
              Wat LPG Endermologie doet
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {resultaten.map((r, i) => (
              <AnimatedSection key={r.label} delay={i * 0.1}>
                <article className="overflow-hidden rounded-3xl border border-[#d4a8b8]/30 bg-[#faf7f4] shadow-sm">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={r.img}
                      alt={r.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a2e]/60 to-transparent" />
                    <h3 className="absolute bottom-5 left-6 font-serif text-2xl font-bold text-white">
                      {r.label}
                    </h3>
                  </div>
                  <div className="p-8">
                    <ul className="space-y-3">
                      {r.items.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#1c1c1e]/80">
                          <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#d4a8b8]/40">
                            <svg className="h-3 w-3 text-[#4a1a7a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#faf7f4] py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <AnimatedSection>
            <div className="rounded-3xl border border-[#d4a8b8]/40 bg-white p-10 shadow-sm">
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
                    Voor lichaamsbehandelingen wordt een behandelpak gebruikt dat ter plaatse wordt verstrekt. Draag comfortabele kleding.
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
                    Drink voor de behandeling voldoende water. Kom zonder zware crèmes of oliën op de behandelzone.
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
                    Drink veel water om de lymfedrainage te ondersteunen. Je kunt direct je activiteiten hervatten. Geen downtime.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4a1a7a] to-[#2d0f54] py-20 text-center">
        <AnimatedSection className="mx-auto max-w-xl px-4">
          <h2 className="mb-4 font-serif text-3xl font-bold text-white md:text-4xl">
            Klaar om te starten?
          </h2>
          <p className="mb-8 text-white/75">
            Plan een gratis kennismaking en we bepalen samen het behandelplan dat het beste bij jou past.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full border-2 border-white bg-white px-8 py-3.5 text-sm font-semibold text-[#4a1a7a] transition-all hover:bg-transparent hover:text-white"
          >
            Plan een gratis kennismaking
          </Link>
        </AnimatedSection>
      </section>
    </>
  );
}
