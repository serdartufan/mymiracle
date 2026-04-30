import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { images } from '@/data/content';

export const metadata: Metadata = {
  title: 'Lichaamsbehandelingen',
  description:
    'LPG lichaamsbehandelingen bij My Miracle: cellulitisreductie, vetvermindering en huidverstevigend. Wetenschappelijk bewezen resultaat vanaf sessie 6.',
};

const benefits = [
  'Afname van cellulitis (zichtbaar na 6 tot 10 sessies)',
  'Vermindering van plaatselijk vet',
  'Versteviging en soepelheid van de huid',
  'Verbeterde bloedsomloop en lymfedrainage',
];

const steps = [
  { nr: '01', title: 'Intakegesprek en doelbepaling', desc: 'We bespreken jouw doelen en bepalen samen het behandelplan.' },
  { nr: '02', title: 'Aanmeten van behandelpak', desc: 'Het behandelpak wordt ter plaatse verstrekt en past als een tweede huid.' },
  { nr: '03', title: 'Behandeling met Cellu M6', desc: 'De Cellu M6 stimuleert huidcellen via rollers en vacuüm. Ontspannend en effectief.' },
  { nr: '04', title: 'Advies voor thuis', desc: 'Je krijgt persoonlijk advies over hydratatie en beweging om het resultaat te maximaliseren.' },
];

const whoForItems = [
  { title: 'Cellulitis', desc: 'Vrouwen en mannen die cellulitis willen verminderen' },
  { title: 'Post-partum', desc: 'Herstel van de huid na zwangerschap' },
  { title: 'Na gewichtsverlies', desc: 'Huidverstevigend na sterke gewichtsafname' },
  { title: 'Sporters', desc: 'Herstel, doorbloeding en spierherstel' },
];

export default function LichaamsBehandelingenPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#1a0a2e] pb-20 pt-36">
        <Image
          src={images.bodyTreatment}
          alt="LPG lichaamsbehandeling"
          fill
          className="object-cover opacity-15"
          sizes="100vw"
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
          <AnimatedSection>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#d4a8b8]">
              LPG Endermologie
            </p>
            <h1 className="mb-4 font-serif text-5xl font-bold text-white md:text-6xl">
              Lichaamsbehandelingen
            </h1>
            <p className="max-w-xl text-lg text-white/70">
              Wetenschappelijk bewezen cellulitisreductie, vetvermindering en huidverstevigend,
              zonder injecties of downtime.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* What it does */}
      <section className="bg-[#faf7f4] py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 md:grid-cols-2 md:px-8">
          <AnimatedSection>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#4a1a7a]">
              Werking
            </p>
            <h2 className="mb-6 font-serif text-4xl font-bold leading-snug text-[#1a0a2e]">
              Wat doet een LPG lichaamsbehandeling?
            </h2>
            <p className="mb-6 leading-relaxed text-[#1c1c1e]/75">
              LPG lichaamsbehandelingen stimuleren de huid en het onderliggende weefsel via de patented
              Endermologie-techniek. Dit activeert slapende cellen en zorgt voor:
            </p>
            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-[#1c1c1e]/80">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#4a1a7a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {b}
                </li>
              ))}
            </ul>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="relative h-80 overflow-hidden rounded-3xl md:h-[460px]">
              <Image
                src={images.behandelingenBody}
                alt="LPG lichaamsbehandeling voor cellulitis reductie huidverstevigend"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Protocol */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <AnimatedSection className="mb-12 text-center">
            <h2 className="font-serif text-4xl font-bold text-[#1a0a2e]">Behandelprotocol</h2>
          </AnimatedSection>
          <AnimatedSection>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                { label: 'Aanbevolen kuur', value: '10 tot 15 sessies, 1 tot 2 keer per week' },
                { label: 'Onderhoud', value: '1× per maand' },
                { label: 'Sessieduur', value: 'ca. 35 minuten' },
                { label: 'Behandelpak', value: 'Wordt ter plaatse verstrekt' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-[#4a1a7a]/15 bg-[#faf7f4] p-6">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[#4a1a7a]">
                    {item.label}
                  </p>
                  <p className="font-serif text-lg font-semibold text-[#1a0a2e]">{item.value}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Step by step */}
      <section className="bg-[#faf7f4] py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <AnimatedSection className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#4a1a7a]">
              Hoe verloopt het?
            </p>
            <h2 className="font-serif text-4xl font-bold text-[#1a0a2e]">Stap voor stap</h2>
          </AnimatedSection>
          <div className="space-y-6">
            {steps.map((step, i) => (
              <AnimatedSection key={step.nr} delay={i * 0.08}>
                <div className="flex items-start gap-6 rounded-2xl border border-[#d4a8b8]/30 bg-white p-6 shadow-sm">
                  <span className="flex-shrink-0 font-serif text-3xl font-bold text-[#d4a8b8]">
                    {step.nr}
                  </span>
                  <div>
                    <h3 className="mb-1 font-semibold text-[#1a0a2e]">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-[#1c1c1e]/70">{step.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="bg-[#faf7f4] py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <AnimatedSection className="mb-12 text-center">
            <h2 className="font-serif text-4xl font-bold text-[#1a0a2e]">Voor wie is het?</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {whoForItems.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <div className="rounded-2xl border border-[#d4a8b8]/40 bg-white p-6 text-center shadow-sm">
                  <h3 className="mb-2 font-serif font-semibold text-[#4a1a7a]">{item.title}</h3>
                  <p className="text-xs leading-relaxed text-[#1c1c1e]/65">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contraindications */}
      <section className="bg-[#faf7f4] py-16">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <AnimatedSection>
            <div className="rounded-2xl border border-[#d4a8b8]/30 bg-[#d4a8b8]/10 p-8">
              <h3 className="mb-3 font-serif text-xl font-semibold text-[#1a0a2e]">
                Wanneer is LPG niet aanbevolen?
              </h3>
              <p className="leading-relaxed text-[#1c1c1e]/75">
                In sommige situaties is LPG niet aanbevolen, waaronder tijdens zwangerschap, bij actieve
                infecties, gebruik van bloedverdunners of bepaalde huidaandoeningen. Twijfel je? Neem
                gerust contact op. We kijken het samen met je door.
              </p>
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
            Maak een afspraak en we bespreken samen de beste aanpak voor jouw lichaam.
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
