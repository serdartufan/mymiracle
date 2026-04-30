import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { ownerName, images } from '@/data/content';

export const metadata: Metadata = {
  title: 'Over Mij',
  description:
    'Leer meer over de gecertificeerde LPG Endermologie therapeut achter My Miracle. Persoonlijke aanpak, jarenlange ervaring en echte passie voor huidverbetering.',
};

const certifications = [
  'Gecertificeerd LPG Endermologie therapeut',
  // TODO: Voeg overige certificaten toe
];

export default function OverMijPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a0a2e] pb-20 pt-36">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <AnimatedSection>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#d4a8b8]">
              Mijn verhaal
            </p>
            <h1 className="font-serif text-5xl font-bold text-white md:text-6xl">Over Mij</h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Personal story */}
      <section className="bg-[#faf7f4] py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-14 px-4 md:grid-cols-2 md:px-8">
          <AnimatedSection>
            {/* TODO: Vervang door echte portretfoto eigenares */}
            <div className="relative h-[500px] overflow-hidden rounded-3xl">
              <Image
                src={images.about}
                alt={`Portretfoto van ${ownerName}, gecertificeerd LPG Endermologie therapeut`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a2e]/30 to-transparent" />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15} className="pt-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#4a1a7a]">
              Persoonlijk verhaal
            </p>
            {/* TODO: Vul naam in */}
            <h2 className="mb-6 font-serif text-4xl font-bold leading-snug text-[#1a0a2e]">
              Hallo, ik ben {ownerName}
            </h2>
            <div className="space-y-4 leading-relaxed text-[#1c1c1e]/75">
              <p>
                {ownerName} is gecertificeerd LPG Endermologie therapeut en richtte My Miracle op vanuit
                een persoonlijke passie voor welzijn en huidverbetering. Na jarenlange ervaring in de
                schoonheids- en wellnesssector specialiseerde zij zich volledig in LPG Endermologie —
                de meest wetenschappelijk onderbouwde niet-invasieve behandeling op de markt.
              </p>
              <p>
                Bij My Miracle staat jij centraal. Geen haastbehandelingen, maar echte aandacht voor
                jouw lichaam en doelen. Iedere behandeling begint met een gesprek, zodat we samen de
                juiste aanpak bepalen.
              </p>
              <p>
                Ik geloof dat schoonheid van binnenuit komt — en dat wetenschappelijk bewezen technieken
                de meest eerlijke weg zijn naar zichtbaar en duurzaam resultaat.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-[#faf7f4] py-16">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
          <AnimatedSection>
            <div className="rounded-3xl border border-[#d4a8b8]/40 bg-white p-10 shadow-sm">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#4a1a7a]">
                Kwalificaties
              </p>
              <h2 className="mb-8 font-serif text-3xl font-bold text-[#1a0a2e]">Certificeringen</h2>
              <ul className="space-y-3">
                {certifications.map((cert) => (
                  <li key={cert} className="flex items-center justify-center gap-3 text-[#1c1c1e]/80">
                    <svg className="h-5 w-5 flex-shrink-0 text-[#4a1a7a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#4a1a7a] to-[#2d0f54] py-20 text-center">
        <AnimatedSection className="mx-auto max-w-xl px-4">
          <h2 className="mb-4 font-serif text-3xl font-bold text-white md:text-4xl">
            Wil je kennismaken?
          </h2>
          <p className="mb-8 text-white/75">
            Plan een vrijblijvend gesprek en ontdek wat ik voor jou kan betekenen.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full border-2 border-white bg-white px-8 py-3.5 text-sm font-semibold text-[#4a1a7a] transition-all hover:bg-transparent hover:text-white"
          >
            Plan een vrijblijvend gesprek
          </Link>
        </AnimatedSection>
      </section>
    </>
  );
}
