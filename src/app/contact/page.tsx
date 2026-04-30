import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import { contactInfo, socialLinks, calendlyUrl } from '@/data/content';

export const metadata: Metadata = {
  title: 'Contact & Afspraak',
  description:
    'Neem contact op met My Miracle of maak direct een afspraak voor een LPG Endermologie behandeling. We helpen je graag verder.',
};

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

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
                  {/* TODO: Vul adres in */}
                  <p className="mt-0.5 text-[#1c1c1e]/80">{contactInfo.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#4a1a7a]/10 text-[#4a1a7a]">
                  📞
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#4a1a7a]">Telefoon</p>
                  {/* TODO: Vul telefoonnummer in */}
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="mt-0.5 block text-[#1c1c1e]/80 transition-colors hover:text-[#4a1a7a]"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#4a1a7a]/10 text-[#4a1a7a]">
                  ✉️
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#4a1a7a]">E-mail</p>
                  {/* TODO: Vul e-mailadres in */}
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
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#4a1a7a]">
                    Openingstijden
                  </p>
                  {/* TODO: Vul openingstijden in */}
                  <dl className="space-y-1">
                    {Object.entries(contactInfo.openingHours).map(([day, hours]) => (
                      <div key={day} className="flex gap-4 text-sm text-[#1c1c1e]/80">
                        <dt className="w-28 font-medium">{day}</dt>
                        <dd>{hours}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </li>
            </ul>

            {/* Social links */}
            <div className="mb-10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#4a1a7a]">
                Volg ons
              </p>
              <div className="flex gap-3">
                {/* TODO: Vul echte social links in */}
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-[#d4a8b8]/40 px-4 py-2 text-sm text-[#1c1c1e]/70 transition-colors hover:border-[#4a1a7a] hover:text-[#4a1a7a]"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                  Instagram
                </a>
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-[#d4a8b8]/40 px-4 py-2 text-sm text-[#1c1c1e]/70 transition-colors hover:border-[#4a1a7a] hover:text-[#4a1a7a]"
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                  Facebook
                </a>
              </div>
            </div>

            {/* TODO: Voeg Google Maps embed in met juist adres */}
            <div className="h-52 overflow-hidden rounded-2xl bg-[#1c1c1e]/5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.7!2d4.35!3d50.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDUxJzAwLjAiTiA0wrAyMScwMC4wIkU!5e0!3m2!1snl!2sbe!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Locatie My Miracle"
              />
            </div>
            <p className="mt-2 text-xs text-[#1c1c1e]/40">
              {/* TODO: Update kaartlocatie na invullen adres */}
              Kaart wordt bijgewerkt zodra het adres is ingevuld.
            </p>
          </AnimatedSection>

          {/* Right: contact form */}
          <AnimatedSection delay={0.15}>
            <h2 className="mb-8 font-serif text-3xl font-bold text-[#1a0a2e]">
              Stuur een bericht
            </h2>
            <ContactForm />
          </AnimatedSection>
        </div>
      </section>

      {/* Calendly */}
      <section className="bg-[#faf7f4] py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <AnimatedSection className="mb-10 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#4a1a7a]">
              Online agenda
            </p>
            <h2 className="mb-3 font-serif text-3xl font-bold text-[#1a0a2e] md:text-4xl">
              Liever direct een afspraak inplannen?
            </h2>
            <p className="text-[#1c1c1e]/65">
              Kies een moment dat jou uitkomt via onze online agenda.
            </p>
          </AnimatedSection>
          {/* TODO: Vervang Calendly URL met echte link */}
          <AnimatedSection>
            <div className="overflow-hidden rounded-2xl border border-[#d4a8b8]/30 bg-white shadow-sm">
              <iframe
                src={calendlyUrl}
                width="100%"
                height="700"
                frameBorder="0"
                title="Afspraak inplannen via Calendly"
              />
            </div>
            <p className="mt-3 text-center text-xs text-[#1c1c1e]/35">
              {/* TODO: Vervang Calendly URL */}
              Wordt vervangen door de echte Calendly link voor go-live.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
