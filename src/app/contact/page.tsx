import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import { contactInfo } from '@/data/content';

export const metadata: Metadata = {
  title: 'Contact & Afspraak',
  description:
    'Neem contact op met My Miracle of maak direct een afspraak voor een LPG Endermologie behandeling. We helpen je graag verder.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a0a2e] pb-20 pt-36">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
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
                  📍
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#4a1a7a]">Adres</p>
                  <p className="mt-0.5 text-[#1c1c1e]/80">{contactInfo.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#4a1a7a]/10 text-[#4a1a7a]">
                  ✉️
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
                  🕐
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2452.1!2d4.2717!3d52.0546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b72a5a9b1b1b%3A0x0!2sKnobbelzwaansingel+109%2C+2496+LN+Den+Haag!5e0!3m2!1snl!2snl!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Locatie My Miracle, Knobbelzwaansingel 109, Den Haag"
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
