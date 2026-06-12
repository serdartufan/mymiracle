import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Algemene Voorwaarden',
  description: 'Algemene Voorwaarden van My Miracle voor LPG Endermologie behandelingen in Den Haag.',
};

export default function AlgemeneVoorwaardenPage() {
  return (
    <>
      <section className="bg-[#1a0a2e] pb-20 pt-36">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <AnimatedSection>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#d4a8b8]">
              Juridisch
            </p>
            <h1 className="font-serif text-5xl font-bold text-white md:text-6xl">
              Algemene Voorwaarden
            </h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-[#faf7f4] py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <AnimatedSection>
            <div className="prose prose-lg max-w-none text-[#1c1c1e]/80">

              <p className="text-sm text-[#1c1c1e]/50">Versie mei 2025 · My Miracle, Den Haag</p>

              <h2 className="mt-10 font-serif text-2xl font-bold text-[#1a0a2e]">1. Toepasselijkheid</h2>
              <p>
                Deze algemene voorwaarden zijn van toepassing op alle behandelingen, afspraken en overeenkomsten tussen My Miracle (KVK 94322309, Bezuidenhoutseweg 161, 2594 AG Den Haag) en de cliënt.
              </p>

              <h2 className="mt-10 font-serif text-2xl font-bold text-[#1a0a2e]">2. Afspraken en annulering</h2>
              <p>
                Afspraken dienen minimaal <strong>24 uur van tevoren</strong> te worden geannuleerd of verzet. Dit kan telefonisch of per e-mail via{' '}
                <a href="mailto:kader@mymiracle.nl" className="text-[#4a1a7a] underline">kader@mymiracle.nl</a>.
              </p>
              <p className="mt-3">
                Bij annulering binnen 24 uur of het niet verschijnen op de afspraak zonder tijdige afmelding, wordt <strong>50% van de behandelkosten</strong> in rekening gebracht. Dit is noodzakelijk omdat de behandeltijd gereserveerd en niet meer opnieuw ingevuld kan worden.
              </p>

              <h2 className="mt-10 font-serif text-2xl font-bold text-[#1a0a2e]">3. Betaling</h2>
              <p>
                Betaling vindt plaats <strong>direct na de behandeling</strong>. Wij accepteren betaling via pin of contant geld. Facturen worden op verzoek verstrekt.
              </p>

              <h2 className="mt-10 font-serif text-2xl font-bold text-[#1a0a2e]">4. Gezondheid en contra-indicaties</h2>
              <p>
                Bij twijfel over uw gezondheid, bestaande klachten of medische aandoeningen adviseren wij u altijd eerst een arts te raadplegen voordat u een behandeling ondergaat. My Miracle behoudt zich het recht voor een behandeling te weigeren of te staken indien dit medisch verantwoord is.
              </p>
              <p className="mt-3">
                Het is uw verantwoordelijkheid om relevante gezondheidsklachten, medicijngebruik of contra-indicaties vooraf te melden.
              </p>

              <h2 className="mt-10 font-serif text-2xl font-bold text-[#1a0a2e]">5. Aansprakelijkheid</h2>
              <p>
                My Miracle spant zich in om behandelingen zorgvuldig en vakkundig uit te voeren. My Miracle is niet aansprakelijk voor indirecte schade, gevolgschade of schade die voortvloeit uit het niet of onjuist melden van gezondheidsklachten door de cliënt.
              </p>
              <p className="mt-3">
                De aansprakelijkheid van My Miracle is in alle gevallen beperkt tot het bedrag dat voor de betreffende behandeling in rekening is gebracht.
              </p>

              <h2 className="mt-10 font-serif text-2xl font-bold text-[#1a0a2e]">6. Resultaten</h2>
              <p>
                LPG Endermologie is een wetenschappelijk onderbouwde behandelmethode, maar individuele resultaten kunnen variëren. My Miracle geeft geen garantie op specifieke uitkomsten.
              </p>

              <h2 className="mt-10 font-serif text-2xl font-bold text-[#1a0a2e]">7. Klachten</h2>
              <p>
                Heeft u een klacht? Neem dan eerst contact met ons op via{' '}
                <a href="mailto:kader@mymiracle.nl" className="text-[#4a1a7a] underline">kader@mymiracle.nl</a>.
                Wij streven ernaar klachten binnen 5 werkdagen te behandelen.
              </p>

              <h2 className="mt-10 font-serif text-2xl font-bold text-[#1a0a2e]">8. Toepasselijk recht</h2>
              <p>
                Op alle overeenkomsten met My Miracle is Nederlands recht van toepassing. Eventuele geschillen worden voorgelegd aan de bevoegde rechter in Den Haag.
              </p>

            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
