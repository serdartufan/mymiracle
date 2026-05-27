import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import Breadcrumb from '@/components/Breadcrumb';
import { kennisbank } from '@/data/content';

export const metadata: Metadata = {
  title: 'Kennisbank | My Miracle',
  description:
    'Alles wat je wilt weten over LPG endermologie, cellulitis en lichaamsbehandelingen. Eerlijke, onderbouwde artikelen van My Miracle Den Haag.',
  alternates: {
    canonical: 'https://mymiracle.nl/kennisbank',
  },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('nl-NL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function KennisbankPage() {
  return (
    <>
      <section className="bg-[#1a0a2e] pb-20 pt-36">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Breadcrumb items={[{ label: 'Kennisbank', href: '/kennisbank' }]} />
          <AnimatedSection>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#d4a8b8]">
              Artikelen & Informatie
            </p>
            <h1 className="mb-4 font-serif text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              Kennisbank
            </h1>
            <p className="max-w-xl text-lg text-white/70">
              Alles wat je wilt weten over LPG endermologie, cellulitis en lichaamsbehandelingen.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-[#faf7f4] py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {kennisbank.map((artikel, i) => (
              <AnimatedSection key={artikel.id} delay={i * 0.07}>
                <Link href={`/kennisbank/${artikel.slug}`} className="group block h-full">
                  <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-[#d4a8b8]/30 bg-white shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
                    <div className="flex flex-1 flex-col p-8">
                      <span className="mb-4 inline-block rounded-full bg-[#4a1a7a]/10 px-3 py-1 text-xs font-semibold text-[#4a1a7a]">
                        {artikel.category}
                      </span>
                      <h2 className="mb-3 font-serif text-xl font-bold leading-snug text-[#1a0a2e] transition-colors group-hover:text-[#4a1a7a]">
                        {artikel.title}
                      </h2>
                      <p className="flex-1 text-sm leading-relaxed text-[#1c1c1e]/65">
                        {artikel.excerpt}
                      </p>
                      <div className="mt-6 flex items-center justify-between border-t border-[#d4a8b8]/30 pt-4">
                        <div className="flex items-center gap-3 text-xs text-[#1c1c1e]/45">
                          <span>{formatDate(artikel.publishDate)}</span>
                          <span>·</span>
                          <span>{artikel.readTime} leestijd</span>
                        </div>
                        <span className="text-sm font-semibold text-[#4a1a7a] transition-transform group-hover:translate-x-0.5">
                          Lees meer →
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4a1a7a] to-[#2d0f54] py-20 text-center">
        <AnimatedSection className="mx-auto max-w-xl px-4">
          <h2 className="mb-4 font-serif text-3xl font-bold text-white md:text-4xl">
            Wil je weten of een behandeling bij jou past?
          </h2>
          <p className="mb-8 text-white/75">
            Plan een gratis kennismaking en we bespreken samen jouw wensen en mogelijkheden.
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
