import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy van My Miracle. Hoe wij omgaan met uw persoonsgegevens conform de AVG.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-[#1a0a2e] pb-20 pt-36">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <AnimatedSection>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#d4a8b8]">
              Juridisch
            </p>
            <h1 className="font-serif text-5xl font-bold text-white md:text-6xl">Privacy Policy</h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-[#faf7f4] py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <AnimatedSection>
            <div className="prose prose-lg max-w-none text-[#1c1c1e]/80">

              <p className="text-sm text-[#1c1c1e]/50">Laatst bijgewerkt: mei 2025</p>

              <h2 className="mt-10 font-serif text-2xl font-bold text-[#1a0a2e]">1. Verwerkingsverantwoordelijke</h2>
              <p>
                My Miracle is verantwoordelijk voor de verwerking van persoonsgegevens zoals beschreven in deze privacy policy.
              </p>
              <ul className="mt-2 space-y-1 text-sm">
                <li><strong>Bedrijfsnaam:</strong> My Miracle</li>
                <li><strong>KVK-nummer:</strong> 94322309</li>
                <li><strong>Adres:</strong> Bezuidenhoutseweg 161, 2594 AG Den Haag</li>
                <li><strong>E-mail:</strong> <a href="mailto:kader@mymiracle.nl" className="text-[#4a1a7a] underline">kader@mymiracle.nl</a></li>
              </ul>

              <h2 className="mt-10 font-serif text-2xl font-bold text-[#1a0a2e]">2. Welke gegevens verzamelen wij?</h2>
              <p>
                Wij verwerken uitsluitend persoonsgegevens die u zelf aan ons verstrekt via het contactformulier op onze website. Het gaat om de volgende gegevens:
              </p>
              <ul className="mt-2 space-y-1">
                <li>Naam</li>
                <li>E-mailadres</li>
                <li>Telefoonnummer</li>
                <li>Uw bericht of vraag</li>
              </ul>

              <h2 className="mt-10 font-serif text-2xl font-bold text-[#1a0a2e]">3. Waarvoor gebruiken wij uw gegevens?</h2>
              <p>
                Uw gegevens worden uitsluitend gebruikt om uw bericht te beantwoorden en, indien gewenst, een afspraak in te plannen. Wij gebruiken uw gegevens niet voor commerciële mailings of andere doeleinden, tenzij u daar expliciet toestemming voor heeft gegeven.
              </p>

              <h2 className="mt-10 font-serif text-2xl font-bold text-[#1a0a2e]">4. Cookies</h2>
              <p>
                Onze website maakt alleen gebruik van functionele cookies die noodzakelijk zijn voor de werking van de site. Wij plaatsen geen tracking- of analytische cookies zonder uw toestemming.
              </p>

              <h2 className="mt-10 font-serif text-2xl font-bold text-[#1a0a2e]">5. Delen met derden</h2>
              <p>
                Wij verkopen uw persoonsgegevens nooit aan derden. Uw gegevens worden niet gedeeld met externe partijen, tenzij dit noodzakelijk is voor de uitvoering van onze dienstverlening of wanneer wij hiertoe wettelijk verplicht zijn.
              </p>

              <h2 className="mt-10 font-serif text-2xl font-bold text-[#1a0a2e]">6. Bewaartermijn</h2>
              <p>
                Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk. Gegevens die via het contactformulier zijn ontvangen, worden maximaal <strong>2 jaar</strong> bewaard, waarna ze worden verwijderd.
              </p>

              <h2 className="mt-10 font-serif text-2xl font-bold text-[#1a0a2e]">7. Uw rechten</h2>
              <p>Op grond van de Algemene Verordening Gegevensbescherming (AVG) heeft u de volgende rechten:</p>
              <ul className="mt-2 space-y-1">
                <li><strong>Inzage:</strong> u kunt opvragen welke gegevens wij van u hebben</li>
                <li><strong>Correctie:</strong> u kunt onjuiste gegevens laten corrigeren</li>
                <li><strong>Verwijdering:</strong> u kunt verzoeken uw gegevens te laten verwijderen</li>
                <li><strong>Bezwaar:</strong> u kunt bezwaar maken tegen de verwerking van uw gegevens</li>
              </ul>
              <p className="mt-4">
                Om gebruik te maken van uw rechten kunt u contact met ons opnemen via{' '}
                <a href="mailto:kader@mymiracle.nl" className="text-[#4a1a7a] underline">kader@mymiracle.nl</a>.
                Wij reageren binnen 30 dagen op uw verzoek.
              </p>

              <h2 className="mt-10 font-serif text-2xl font-bold text-[#1a0a2e]">8. Beveiliging</h2>
              <p>
                Wij nemen passende technische en organisatorische maatregelen om uw persoonsgegevens te beschermen tegen verlies, misbruik of onbevoegde toegang.
              </p>

              <h2 className="mt-10 font-serif text-2xl font-bold text-[#1a0a2e]">9. Klachten</h2>
              <p>
                Heeft u een klacht over de manier waarop wij met uw gegevens omgaan? Dan kunt u een klacht indienen bij de Autoriteit Persoonsgegevens via{' '}
                <a
                  href="https://www.autoriteitpersoonsgegevens.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4a1a7a] underline"
                >
                  autoriteitpersoonsgegevens.nl
                </a>.
              </p>

            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
