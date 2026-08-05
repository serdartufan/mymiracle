import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import Breadcrumb from '@/components/Breadcrumb';
import ContactForm from '@/components/ContactForm';
import PhoneReveal from '@/components/PhoneReveal';
import { contactInfo } from '@/data/content';

export const metadata: Metadata = {
  title: 'Afspraak Maken | My Miracle LPG Centrum Den Haag',
  description:
    'Maak een afspraak bij My Miracle in Den Haag. LPG Endermologie behandelingen voor lichaam en gezicht. Bereikbaar via email of contactformulier.',
  alternates: {
    canonical: 'https://mymiracle.nl/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a0a2e] pb-20 pt-36">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Breadcrumb items={[{ label: 'Contact', href: '/contact' }]} />
          <AnimatedSection>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#d4a8b8]">
              We helpen je graag
            </p>
            <h1 className="font-serif text-5xl font-bold text-white md:text-6xl">
              Contact & Afspraak
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="bg-[#faf7f4] py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-4 md:grid-cols-2 md:px-8">

          {/* Left: contact info */}
          <AnimatedSection>
            <h2 className="mb-8 font-serif text-3xl font-bold text-[#1a0a2e]">
              Contactgegevens
            </h2>
            <ul className="mb-10 space-y-5">
              <li className="flex items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#4a1a7a]/10 text-[#4a1a7a]">
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#4a1a7a]">Adres</p>
                  <p className="mt-0.5 text-[#1c1c1e]/80">{contactInfo.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#4a1a7a]/10 text-[#4a1a7a]">
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-10 6L2 7" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#4a1a7a]">E-mail</p>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="mt-0.5 block text-[#1c1c1e]/80 transition-colors hover:text-[#4a1a7a]"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#4a1a7a]/10 text-[#4a1a7a]">
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#4a1a7a]">Telefoon</p>
                  <PhoneReveal className="mt-0.5 block text-[#1c1c1e]/80 transition-colors hover:text-[#4a1a7a]" />
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#4a1a7a]/10 text-[#4a1a7a]">
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#4a1a7a]">
                    Openingstijden
                  </p>
                  <p className="mt-0.5 text-[#1c1c1e]/80">{contactInfo.openingHours}</p>
                </div>
              </li>
            </ul>

            {/* Google Maps embed */}
            <div className="h-52 overflow-hidden rounded-2xl bg-[#1c1c1e]/5">
              <iframe
                src="https://www.google.com/maps?q=Bezuidenhoutseweg+161,+2594+AG+Den+Haag&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Locatie My Miracle, Bezuidenhoutseweg 161, Den Haag"
              />
            </div>
          </AnimatedSection>

          {/* Right: lead capture form */}
          <AnimatedSection delay={0.15}>
            <h2 className="mb-8 font-serif text-3xl font-bold text-[#1a0a2e]">
              Stuur een aanvraag
            </h2>
            <ContactForm />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
