import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { images } from '@/data/content';

export const metadata: Metadata = {
  title: 'Gezichtsbehandelingen',
  description:
    'LPG gezichtsbehandelingen bij My Miracle: anti-aging, liftend effect en collagenenstimulatie. Natuurlijk resultaat zonder injecties.',
};

const benefits = [
  'Stimuleert collageen- en elastineproductie',
  'Liftend en verstevigend effect',
  'Vermindering van rimpels en fijne lijntjes',
  'Egale huidtint en natuurlijke glow',
  'Vermindering van post-acne littekens',
];

const steps = [
  { nr: '01', title: 'Intakegesprek en huidanalyse', desc: 'We analyseren jouw huidtype en doelen voor een gepersonaliseerde behandeling.' },
  { nr: '02', title: 'Reiniging van de huid', desc: 'De huid wordt grondig gereinigd voor de behandeling.' },
  { nr: '03', title: 'Behandeling met Cellu M6', desc: 'De behandelkop stimuleert het gezichtsweefsel via zachte mechanische druk.' },
  { nr: '04', title: 'Naadvies en huidverzorging', desc: 'Persoonlijk advies voor thuis om het resultaat van de behandeling te verlengen.' },
];

const whoForItems = [
  { title: 'Eerste veroudering', desc: 'Vroege tekenen van huidveroudering' },
  { title: 'Slappe huid', desc: 'Slappe of matte, vermoeide huid' },
  { title: 'Post-acne', desc: 'Littekens of onregelmatige huidtint' },
  { title: 'Lifting', desc: 'Iedereen die een natuurlijk liftend effect wil' },
];

export default function GezichtsBehandelingenPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#1a0a2e] pb-20 pt-36">
        <Image
          src={images.faceTreatment}
          alt="LPG gezichtsbehandeling"
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
              Gezichtsbehandelingen
            </h1>
            <p className="max-w-xl text-lg text-white/70">
              Anti-aging, collagenenstimulatie en een natuurlijk liftend effect — geheel niet-invasief
              en zonder downtime.
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
              Wat doet een LPG gezichtsbehandeling?
            </h2>
            <p className="mb-6 leading-relaxed text-[#1c1c1e]/75">
              De LPG gezichtsbehandeling maakt gebruik van dezelfde patented Endermologie-technologie,
              maar specifiek aangepast voor het gevoelige gezichtsweefsel. De behandelkop stimuleert
              fibroblasten — de cellen die collageen en elastine aanmaken — voor een
              zichtbaar jonger en stralend resultaat.
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
                src={images.behandelingenFace}
                alt="LPG gezichtsbehandeling anti-aging collageen stimulatie"
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
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { label: 'Aanbevolen kuur', value: '10 sessies' },
                { label: 'Onderhoud', value: '1× per maand' },
                { label: 'Sessieduur', value: 'ca. 30 minuten' },
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
                De gezichtsbehandeling is niet aanbevolen bij actieve huidinfecties, ernstige acne of
                open wondjes in het behandelgebied. Bij twijfel nemen we dit altijd samen door tijdens
                een intakegesprek.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#4a1a7a] to-[#2d0f54] py-20 text-center">
        <AnimatedSection className="mx-auto max-w-xl px-4">
          <h2 className="mb-4 font-serif text-3xl font-bold text-white md:text-4xl">
            Ontdek het verschil
          </h2>
          <p className="mb-8 text-white/75">
            Maak een afspraak voor een vrijblijvende kennismaking en laat je huid stralen.
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
