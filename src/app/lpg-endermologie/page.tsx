import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: 'Wat is LPG Endermologie?',
  description:
    'Alles over LPG Endermologie: hoe het werkt, de wetenschap erachter, verwachte resultaten en veiligheid. De niet-invasieve standaard in huidbehandeling.',
};

const timeline = [
  { phase: 'Sessie 1 tot 3', desc: 'Huid went aan de behandeling, eerste ontspanning en verbeterde doorbloeding.' },
  { phase: 'Sessie 4 tot 6', desc: 'Eerste zichtbare resultaten, huid voelt soepeler en steviger aan.' },
  { phase: 'Sessie 7 tot 10', desc: 'Duidelijke verbetering van cellulitis en huidsteviging, zichtbaar verschil.' },
  { phase: 'Na de kuur', desc: 'Onderhoud 1× per maand voor blijvend resultaat en optimale huidgezondheid.' },
];

export default function LpgEndermologiePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a0a2e] pb-20 pt-36">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <AnimatedSection>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#d4a8b8]">
              De wetenschap achter de behandeling
            </p>
            <h1 className="mb-4 font-serif text-5xl font-bold text-white md:text-6xl">
              LPG Endermologie
            </h1>
            <p className="max-w-2xl text-lg text-white/70">
              Ontdek hoe de patented Endermologie®-technologie werkt, wat de wetenschap zegt
              en wat je kunt verwachten van een kuur.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Wat is Endermologie */}
      <section className="bg-[#faf7f4] py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <AnimatedSection>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#4a1a7a]">
              Introductie
            </p>
            <h2 className="mb-6 font-serif text-4xl font-bold text-[#1a0a2e]">
              Wat is Endermologie?
            </h2>
            <p className="leading-relaxed text-[#1c1c1e]/75">
              Endermologie is een niet-invasieve techniek ontwikkeld door het Franse bedrijf LPG Systems.
              Via mechanische stimulatie (rollers en vacuüm) worden huidcellen geactiveerd zonder
              ingrepen of bijwerkingen. De technologie is wereldwijd de standaard in niet-chirurgische
              lichaams- en gezichtsbehandeling en werd als eerste van zijn soort erkend door de FDA
              voor cellulitisreductie.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Hoe werkt het */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2">
            <AnimatedSection>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#4a1a7a]">
                Technologie
              </p>
              <h2 className="mb-6 font-serif text-4xl font-bold text-[#1a0a2e]">Hoe werkt het?</h2>
              <p className="mb-6 leading-relaxed text-[#1c1c1e]/75">
                De Cellu M6 gebruikt een patented behandelkop met rollers die de huid zacht optillen
                en kneden. Dit activeert fibroblasten, de cellen die collageen en elastine produceren,
                en stimuleert lipolyse (vetafbraak) op cellulair niveau.
              </p>
              <p className="leading-relaxed text-[#1c1c1e]/75">
                Het resultaat: stevigere huid, minder cellulitis en een verbeterde doorbloeding,
                van binnenuit, zonder ingrepen.
              </p>
            </AnimatedSection>
            {/* Visual diagram */}
            <AnimatedSection delay={0.15}>
              <div className="rounded-3xl border border-[#4a1a7a]/15 bg-[#faf7f4] p-8">
                <h3 className="mb-8 text-center font-serif text-xl font-semibold text-[#1a0a2e]">
                  Cellulair effect van Endermologie
                </h3>
                <div className="space-y-4">
                  {[
                    { label: 'Epidermis', width: '100%', desc: 'Mechanische stimulatie' },
                    { label: 'Dermis', width: '80%', desc: 'Fibroblasten geactiveerd' },
                    { label: 'Hypodermis', width: '60%', desc: 'Lipolyse gestimuleerd' },
                  ].map((layer) => (
                    <div key={layer.label}>
                      <div className="mb-1 flex justify-between text-xs text-[#1c1c1e]/50">
                        <span className="font-medium text-[#1a0a2e]">{layer.label}</span>
                        <span>{layer.desc}</span>
                      </div>
                      <div className="h-3 overflow-hidden rounded-full bg-[#4a1a7a]/10">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#4a1a7a] to-[#d4a8b8]"
                          style={{ width: layer.width }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-center text-xs text-[#1c1c1e]/40">
                  Schematische weergave van de huidactivatie via Endermologie®
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Wetenschappelijke onderbouwing */}
      <section className="bg-[#faf7f4] py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <AnimatedSection>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#4a1a7a]">
              Bewijs
            </p>
            <h2 className="mb-6 font-serif text-4xl font-bold text-[#1a0a2e]">
              Wetenschappelijke onderbouwing
            </h2>
            <p className="mb-6 leading-relaxed text-[#1c1c1e]/75">
              LPG Endermologie is klinisch getest in meer dan 100 wetenschappelijke studies wereldwijd.
              De technologie is goedgekeurd door dermatologen en is de enige mechanische
              stimulatietechniek met FDA-erkenning voor cellulitisreductie.
            </p>
            {/* TODO: Voeg specifieke studieverwijzingen of LPG-certificeringsbadge toe */}
            <div className="flex flex-wrap gap-4">
              {['FDA-erkend', '100+ klinische studies', 'Goedgekeurd door dermatologen', 'LPG Systems gecertificeerd'].map(
                (badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-[#4a1a7a]/30 bg-[#4a1a7a]/10 px-4 py-2 text-xs font-semibold text-[#4a1a7a]"
                  >
                    {badge}
                  </span>
                )
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#faf7f4] py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <AnimatedSection className="mb-14 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#4a1a7a]">
              Verwachte resultaten
            </p>
            <h2 className="font-serif text-4xl font-bold text-[#1a0a2e]">Wat kun je verwachten?</h2>
          </AnimatedSection>
          <div className="relative">
            <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-[#4a1a7a]/20 md:left-1/2 md:-translate-x-px" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <AnimatedSection key={item.phase} delay={i * 0.1}>
                  <div className={`relative flex items-start gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="flex-shrink-0 md:w-1/2">
                      <div className={`${i % 2 === 0 ? 'md:text-right md:pr-10' : 'md:pl-10'} pl-12 md:pl-0`}>
                        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[#4a1a7a]">
                          {item.phase}
                        </p>
                        <p className="text-sm leading-relaxed text-[#1c1c1e]/75">{item.desc}</p>
                      </div>
                    </div>
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-[#4a1a7a] md:static md:mx-0">
                      <span className="text-xs font-bold text-white">{i + 1}</span>
                    </div>
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="bg-[#faf7f4] py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <AnimatedSection>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#4a1a7a]">
              Veiligheid
            </p>
            <h2 className="mb-6 font-serif text-4xl font-bold text-[#1a0a2e]">Is het veilig?</h2>
            <p className="leading-relaxed text-[#1c1c1e]/75">
              Endermologie is 100% niet-invasief. Geen naalden, geen downtime, geen bijwerkingen op
              lange termijn. Geschikt voor alle huidtypen. Na de behandeling kan lichte roodheid
              optreden die snel verdwijnt. Dit is een normaal teken dat de doorbloeding is gestimuleerd.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <AnimatedSection className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#4a1a7a]">
              Veelgestelde vragen
            </p>
            <h2 className="font-serif text-4xl font-bold text-[#1a0a2e]">FAQ</h2>
          </AnimatedSection>
          <AnimatedSection>
            <FaqAccordion />
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#4a1a7a] to-[#2d0f54] py-20 text-center">
        <AnimatedSection className="mx-auto max-w-xl px-4">
          <h2 className="mb-4 font-serif text-3xl font-bold text-white md:text-4xl">
            Meer weten of een afspraak maken?
          </h2>
          <p className="mb-8 text-white/75">
            Neem contact op en we beantwoorden al je vragen vrijblijvend.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full border-2 border-white bg-white px-8 py-3.5 text-sm font-semibold text-[#4a1a7a] transition-all hover:bg-transparent hover:text-white"
          >
            Neem contact op
          </Link>
        </AnimatedSection>
      </section>
    </>
  );
}
