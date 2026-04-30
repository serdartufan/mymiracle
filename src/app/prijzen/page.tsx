import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { pricing } from '@/data/content';

export const metadata: Metadata = {
  title: 'Prijzen',
  description:
    'Bekijk de prijzen voor LPG Endermologie behandelingen bij My Miracle — gezicht, lichaam en kennismakingssessies. Transparant en eerlijk.',
};

function formatPrijs(prijs: number): string {
  return prijs === 0 ? 'Gratis' : `€ ${prijs}`;
}

export default function PrijzenPage() {
  return (
    <>
      {/* Hero */}
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

      {/* Pricing cards */}
      <section className="bg-[#faf7f4] py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

            {/* Gezicht */}
            <AnimatedSection delay={0}>
              <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-[#d4a8b8]/40 bg-white shadow-sm">
                <div className="bg-[#faf7f4] px-8 py-6">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[#4a1a7a]">
                    Gezicht
                  </p>
                  <h2 className="font-serif text-2xl font-bold text-[#1a0a2e]">
                    Gezichtsbehandeling
                  </h2>
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <ul className="flex-1 space-y-4">
                    <li className="flex items-center justify-between border-b border-[#faf7f4] pb-4">
                      <span className="text-sm text-[#1c1c1e]/80">{pricing.gezicht.losseSessionLabel}</span>
                      <span className="font-semibold text-[#1a0a2e]">
                        {formatPrijs(pricing.gezicht.losseSessionPrijs)}
                      </span>
                    </li>
                    <li className="flex items-center justify-between rounded-xl bg-[#4a1a7a]/5 px-3 py-3">
                      <div>
                        <span className="block text-sm font-medium text-[#1a0a2e]">
                          {pricing.gezicht.kuur10Label}
                        </span>
                        <span className="text-xs font-semibold text-[#4a1a7a]">Meest populair</span>
                      </div>
                      <span className="font-bold text-[#4a1a7a]">
                        {formatPrijs(pricing.gezicht.kuur10Prijs)}
                      </span>
                    </li>
                  </ul>
                  <Link
                    href="/contact"
                    className="mt-8 block rounded-full border-2 border-[#4a1a7a] px-6 py-3 text-center text-sm font-semibold text-[#4a1a7a] transition-colors hover:bg-[#4a1a7a] hover:text-white"
                  >
                    Maak een afspraak
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* Lichaam */}
            <AnimatedSection delay={0.1}>
              <div className="flex h-full flex-col overflow-hidden rounded-3xl border-2 border-[#4a1a7a] bg-white shadow-md">
                <div className="bg-[#4a1a7a] px-8 py-6">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[#d4a8b8]">
                    Lichaam
                  </p>
                  <h2 className="font-serif text-2xl font-bold text-white">Lichaamsbehandeling</h2>
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <ul className="flex-1 space-y-4">
                    <li className="flex items-center justify-between border-b border-[#faf7f4] pb-4">
                      <span className="text-sm text-[#1c1c1e]/80">{pricing.lichaam.losseSessionLabel}</span>
                      <span className="font-semibold text-[#1a0a2e]">
                        {formatPrijs(pricing.lichaam.losseSessionPrijs)}
                      </span>
                    </li>
                    <li className="flex items-center justify-between rounded-xl bg-[#4a1a7a]/5 px-3 py-3">
                      <div>
                        <span className="block text-sm font-medium text-[#1a0a2e]">
                          {pricing.lichaam.kuur10Label}
                        </span>
                        <span className="text-xs font-semibold text-[#4a1a7a]">Meest populair</span>
                      </div>
                      <span className="font-bold text-[#4a1a7a]">
                        {formatPrijs(pricing.lichaam.kuur10Prijs)}
                      </span>
                    </li>
                  </ul>
                  <Link
                    href="/contact"
                    className="mt-8 block rounded-full bg-[#4a1a7a] px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#5e2490]"
                  >
                    Maak een afspraak
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* Kennismaking */}
            <AnimatedSection delay={0.2}>
              <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-[#d4a8b8]/40 bg-white shadow-sm">
                <div className="bg-[#faf7f4] px-8 py-6">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[#4a1a7a]">
                    Start hier
                  </p>
                  <h2 className="font-serif text-2xl font-bold text-[#1a0a2e]">Kennismaking</h2>
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <div className="flex-1">
                    <div className="mb-6 rounded-xl bg-[#d4a8b8]/15 p-6 text-center">
                      <p className="mb-1 text-xs text-[#1c1c1e]/60">{pricing.kennismaking.label}</p>
                      <p className="font-serif text-3xl font-bold text-[#4a1a7a]">
                        {formatPrijs(pricing.kennismaking.prijs)}
                      </p>
                    </div>
                    <p className="text-sm leading-relaxed text-[#1c1c1e]/70">
                      Maak kennis met de behandeling en ontvang persoonlijk advies. We bespreken jouw
                      doelen en stellen samen een behandelplan op — geheel vrijblijvend.
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="mt-8 block rounded-full border-2 border-[#4a1a7a] px-6 py-3 text-center text-sm font-semibold text-[#4a1a7a] transition-colors hover:bg-[#4a1a7a] hover:text-white"
                  >
                    Plan kennismaking
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Fine print */}
      <section className="bg-[#faf7f4] py-10">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
          <AnimatedSection>
            <p className="text-sm leading-relaxed text-[#1c1c1e]/55">
              Alle prijzen zijn inclusief BTW. Kuren zijn persoonsgebonden en niet overdraagbaar. Bij
              annulering tot 24 uur voor de afspraak worden geen kosten in rekening gebracht. Bij
              no-show of te late annulering kan een vergoeding worden gevraagd.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#4a1a7a] to-[#2d0f54] py-20 text-center">
        <AnimatedSection className="mx-auto max-w-xl px-4">
          <h2 className="mb-4 font-serif text-3xl font-bold text-white md:text-4xl">
            Twijfel je nog?
          </h2>
          <p className="mb-8 text-white/75">
            Plan een vrijblijvende kennismaking en we beantwoorden al je vragen.
          </p>
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
