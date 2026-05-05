import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { pricing } from '@/data/content';

export const metadata: Metadata = {
  title: 'Prijzen',
  description:
    'Bekijk de prijzen voor LPG Endermologie behandelingen bij My Miracle. Transparant en eerlijk geprijsd.',
};

export default function PrijzenPage() {
  return (
    <>
      <section className="bg-[#1a0a2e] pb-20 pt-36">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <AnimatedSection>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#d4a8b8]">
              Transparante tarieven
            </p>
            <h1 className="font-serif text-5xl font-bold text-white md:text-6xl">Prijzen</h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-[#faf7f4] py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <AnimatedSection>
            <p className="mb-12 text-center text-lg leading-relaxed text-[#1c1c1e]/70">
              Bij My Miracle is er één behandeling: LPG Endermologie. De behandelduur kiezen we samen op basis van jouw doelen en het te behandelen gebied.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Losse Behandeling */}
            <AnimatedSection delay={0}>
              <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-[#d4a8b8]/40 bg-white shadow-sm">
                <div className="bg-[#faf7f4] px-8 py-6">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[#4a1a7a]">
                    Flexibel
                  </p>
                  <h2 className="font-serif text-2xl font-bold text-[#1a0a2e]">
                    {pricing.losseBehandeling.label}
                  </h2>
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <div className="flex-1 space-y-3">
                    {pricing.losseBehandeling.sessies.map((s) => (
                      <div
                        key={s.minuten}
                        className="flex items-center justify-between rounded-xl bg-[#faf7f4] px-5 py-3"
                      >
                        <span className="text-sm font-medium text-[#1c1c1e]/70">
                          {s.minuten} minuten
                        </span>
                        <span className="font-serif text-xl font-bold text-[#1a0a2e]">
                          € {s.prijs},-
                        </span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="mt-8 block rounded-full border-2 border-[#4a1a7a] px-6 py-3 text-center text-sm font-semibold text-[#4a1a7a] transition-colors hover:bg-[#4a1a7a] hover:text-white"
                  >
                    Maak een afspraak
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* Kuur Pakket */}
            <AnimatedSection delay={0.1}>
              <div className="flex h-full flex-col overflow-hidden rounded-3xl border-2 border-[#4a1a7a] bg-white shadow-md">
                <div className="bg-[#4a1a7a] px-8 py-6">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[#d4a8b8]">
                    Meest populair
                  </p>
                  <h2 className="font-serif text-2xl font-bold text-white">
                    {pricing.kuurPakket.label}
                  </h2>
                  <p className="mt-1 text-sm text-[#d4a8b8]/80">
                    {pricing.kuurPakket.omschrijving}
                  </p>
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <div className="flex-1 space-y-3">
                    {pricing.kuurPakket.sessies.map((s) => (
                      <div
                        key={s.minuten}
                        className="flex items-center justify-between rounded-xl bg-[#4a1a7a]/5 px-5 py-3"
                      >
                        <span className="text-sm font-medium text-[#1c1c1e]/70">
                          {s.minuten} minuten
                        </span>
                        <span className="font-serif text-xl font-bold text-[#4a1a7a]">
                          € {s.prijs},-
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-[#1c1c1e]/55">
                    Resultaat is al merkbaar vanaf sessie 6. De 11e sessie is gratis.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-6 block rounded-full bg-[#4a1a7a] px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#5e2490]"
                  >
                    Maak een afspraak
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Kennismaking */}
          <AnimatedSection delay={0.2}>
            <div className="mt-8 overflow-hidden rounded-3xl border border-[#d4a8b8]/40 bg-white shadow-sm">
              <div className="flex flex-col items-center gap-6 p-8 md:flex-row">
                <div className="flex-1">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[#4a1a7a]">
                    Start hier
                  </p>
                  <h2 className="mb-2 font-serif text-2xl font-bold text-[#1a0a2e]">
                    {pricing.kennismaking.label}
                  </h2>
                  <p className="text-sm leading-relaxed text-[#1c1c1e]/70">
                    Maak vrijblijvend kennis met de behandeling en ontvang persoonlijk advies. We bespreken jouw doelen en bepalen samen welke duur het beste bij jou past.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-4 md:items-end">
                  <p className="font-serif text-4xl font-bold text-[#4a1a7a]">Gratis</p>
                  <Link
                    href="/contact"
                    className="whitespace-nowrap rounded-full border-2 border-[#4a1a7a] px-6 py-3 text-center text-sm font-semibold text-[#4a1a7a] transition-colors hover:bg-[#4a1a7a] hover:text-white"
                  >
                    Plan kennismaking
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-[#faf7f4] py-10">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
          <AnimatedSection>
            <p className="text-sm leading-relaxed text-[#1c1c1e]/55">
              Alle prijzen zijn inclusief BTW. Kuren zijn persoonsgebonden en niet overdraagbaar. Bij annulering tot 24 uur voor de afspraak worden geen kosten in rekening gebracht. Bij no-show of te late annulering kan een vergoeding worden gevraagd.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4a1a7a] to-[#2d0f54] py-20 text-center">
        <AnimatedSection className="mx-auto max-w-xl px-4">
          <h2 className="mb-4 font-serif text-3xl font-bold text-white md:text-4xl">Twijfel je nog?</h2>
          <p className="mb-8 text-white/75">Plan een vrijblijvende kennismaking en we beantwoorden al je vragen.</p>
          <Link
            href="/contact"
            className="inline-block rounded-full border-2 border-white bg-white px-8 py-3.5 text-sm font-semibold text-[#4a1a7a] transition-all hover:bg-transparent hover:text-white"
          >
            Plan een vrijblijvende kennismaking
          </Link>
        </AnimatedSection>
      </section>
    </>
  );
}
