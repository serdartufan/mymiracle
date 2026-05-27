import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import Breadcrumb from '@/components/Breadcrumb';
import { kennisbank } from '@/data/content';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return kennisbank.map((artikel) => ({ slug: artikel.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const artikel = kennisbank.find((a) => a.slug === slug);
  if (!artikel) return {};

  return {
    title: artikel.title,
    description: artikel.excerpt,
    alternates: {
      canonical: `https://mymiracle.nl/kennisbank/${artikel.slug}`,
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('nl-NL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default async function ArtikelPage({ params }: Props) {
  const { slug } = await params;
  const artikel = kennisbank.find((a) => a.slug === slug);
  if (!artikel) notFound();

  return (
    <>
      <section className="bg-[#1a0a2e] pb-20 pt-36">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Breadcrumb
            items={[
              { label: 'Kennisbank', href: '/kennisbank' },
              { label: artikel.title, href: `/kennisbank/${artikel.slug}` },
            ]}
          />
          <AnimatedSection>
            <span className="mb-4 inline-block rounded-full bg-[#d4a8b8]/20 px-3 py-1 text-xs font-semibold text-[#d4a8b8]">
              {artikel.category}
            </span>
            <h1 className="mb-6 max-w-3xl font-serif text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              {artikel.title}
            </h1>
            <div className="flex items-center gap-3 text-sm text-white/50">
              <span>{formatDate(artikel.publishDate)}</span>
              <span>·</span>
              <span>{artikel.readTime} leestijd</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <AnimatedSection>
            <div className="rounded-3xl border border-[#d4a8b8]/30 bg-[#faf7f4] p-10">
              <p className="mb-6 text-lg leading-relaxed text-[#1c1c1e]/70">
                {artikel.excerpt}
              </p>
              <p className="text-[#1c1c1e]/50 italic">
                Dit artikel wordt binnenkort gepubliceerd.
              </p>
            </div>
          </AnimatedSection>
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
