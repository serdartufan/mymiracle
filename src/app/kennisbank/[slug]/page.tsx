import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import Breadcrumb from '@/components/Breadcrumb';
import { kennisbank, siteUrl, ownerName } from '@/data/content';

interface Props {
  params: Promise<{ slug: string }>;
}

// Shared style tokens for article body
const H2 = 'mt-10 mb-4 font-serif text-2xl md:text-3xl font-bold text-[#1a0a2e] first:mt-0';
const P = 'mb-5 text-[#1c1c1e]/75 leading-relaxed';
const A = 'text-[#4a1a7a] underline underline-offset-2 hover:text-[#5e2490] transition-colors';

function QA({ vraag, antwoord }: { vraag: string; antwoord: string }) {
  return (
    <div className="my-8 rounded-2xl border-l-4 border-[#4a1a7a] bg-[#faf7f4] px-6 py-5">
      <p className="mb-2 font-semibold text-[#1a0a2e]">{vraag}</p>
      <p className="text-sm leading-relaxed text-[#1c1c1e]/70">{antwoord}</p>
    </div>
  );
}

type ArticleData = {
  metaDescription: string;
  snel: string;
  faq: { vraag: string; antwoord: string }[];
  body: () => ReactNode;
};

const artikelData: Record<string, ArticleData> = {
  'lpg-endermologie-werkt-het': {
    metaDescription:
      'LPG endermologie werkt aantoonbaar voor cellulitis, huidverstrakking en doorbloeding. Lees wat de behandeling doet, hoeveel sessies je nodig hebt en voor wie het geschikt is.',
    snel: 'LPG endermologie werkt aantoonbaar voor het verminderen van cellulitis, het strakker maken van de huid en het stimuleren van de bloedcirculatie. Gemiddeld zie je na 6 tot 10 behandelingen zichtbaar resultaat. De behandeling is niet-invasief en kent vrijwel geen bijwerkingen.',
    faq: [
      {
        vraag: 'Hoelang duurt een LPG behandeling?',
        antwoord:
          'Een sessie duurt tussen de 15 en 40 minuten, afhankelijk van het behandelgebied en de gekozen sessieduur. Voor aanvang spreek je samen met de therapeut af welke duur het beste past bij je doel.',
      },
      {
        vraag: 'Kun je LPG combineren met andere behandelingen?',
        antwoord:
          'Ja, in veel gevallen is een combinatie mogelijk. Zo wordt LPG op het lichaam soms gecombineerd met gezichtsbehandelingen. Bespreek dit tijdens de intake, dan kijken we samen wat zinvol is.',
      },
      {
        vraag: 'Is het resultaat van LPG permanent?',
        antwoord:
          'Nee, het resultaat is niet permanent als je niets onderhoudt. Regelmatige onderhoudssessies en een actieve leefstijl helpen het effect vast te houden. Met alleen een kuur en daarna niets meer doen, neemt het effect over tijd af.',
      },
    ],
    body: () => (
      <>
        <h2 className={H2}>Wat is LPG endermologie precies?</h2>
        <p className={P}>
          LPG endermologie is een mechanische massagetechniek die het bindweefsel stimuleert via
          zuiging en rollende bewegingen. Een speciaal apparaat trekt de huid naar binnen en rolt
          deze tegelijkertijd. Zo worden diepere weefsellagen bereikt die je met je handen niet
          kunt masseren.
        </p>
        <p className={P}>
          Het is volledig niet-invasief. Er komen geen naalden aan te pas, geen operatie en geen
          chemische stoffen. Het apparaat werkt met twee roterende rollen en een vacuümsysteem.
          Die combinatie zorgt voor verbeterde doorbloeding, betere lymfedrainage en een stimulans
          voor de aanmaak van collageen en elastine.
        </p>
        <p className={P}>
          LPG staat voor de naam van de uitvinder: Louis Paul Guitay. De techniek is in de jaren
          tachtig ontwikkeld als revalidatiemethode voor brandwondenslachtoffers. Later is ze ook
          ingezet voor esthetische doeleinden. Vandaag is LPG een van de meest gebruikte
          niet-chirurgische lichaamsbehandelingen ter wereld.
        </p>
        <p className={P}>
          De behandeling wordt uitgevoerd terwijl je een nauwsluitend behandelpak draagt. Dat pak
          beschermt je huid en zorgt ervoor dat de rollen soepel over het lichaam bewegen. Je hoeft
          er niets speciaals voor te doen: gewoon je kleding uitdoen, het pak aan, en de sessie
          beginnen.
        </p>

        <h2 className={H2}>Wat zijn de bewezen effecten van LPG?</h2>
        <p className={P}>
          Er is behoorlijk wat onderzoek gedaan naar de effecten van LPG endermologie. De
          resultaten zijn consistent op een aantal punten.
        </p>
        <p className={P}>
          <strong>Cellulitis vermindering.</strong> LPG breekt de fibrotische strengen in het
          bindweefsel los die verantwoordelijk zijn voor het kuitjespatroon van cellulitis. Door
          die strengen los te maken, ziet het huidoppervlak er gladder uit.
        </p>
        <p className={P}>
          <strong>Huidversteviging.</strong> De mechanische stimulatie zet huidcellen aan tot het
          produceren van meer collageen en elastine. Collageen geeft de huid stevigheid. Elastine
          geeft veerkracht. Beide nemen af naarmate je ouder wordt. LPG kan dit proces vertragen en
          gedeeltelijk omkeren.
        </p>
        <p className={P}>
          <strong>Afname van lokaal vet.</strong> LPG stimuleert de lipolyse, het proces waarbij
          vetcellen vetzuren afgeven. Dit werkt het best in combinatie met beweging en een gezonde
          voeding. Maar zelfs zonder aanpassingen in je leefstijl is er een meetbaar effect.
        </p>
        <p className={P}>
          <strong>Verbetering van de bloedcirculatie.</strong> De zuig- en rolbeweging vergroot de
          doorbloeding in het behandelde gebied aanzienlijk. Dat helpt ook bij het afvoeren van
          afvalstoffen via het lymfesysteem.
        </p>
        <p className={P}>
          Eerlijk zijn: resultaten verschillen per persoon. Leeftijd, hormoonhuishouding, leefstijl
          en genetische aanleg spelen allemaal een rol. Wat voor de ene persoon in 6 behandelingen
          zichtbaar is, kan bij een ander 10 behandelingen vergen. Dat is geen reden om te twijfelen
          aan de behandeling zelf, maar wel iets om rekening mee te houden in je verwachtingen.
        </p>

        <QA
          vraag="Is LPG endermologie pijnlijk?"
          antwoord="De behandeling voelt als een stevige massage. Sommige zones, zoals de binnenkant van de dijen of de bovenbuik, kunnen gevoeliger zijn. Pijnlijk is het normaal gesproken niet. Voel je toch iets onprettigs, geef het dan aan en de therapeut past de intensiteit meteen aan."
        />

        <h2 className={H2}>Hoeveel behandelingen heb je nodig?</h2>
        <p className={P}>
          Voor zichtbaar resultaat reken je op gemiddeld 6 tot 10 behandelingen. Dat hangt af van
          je startpositie en je doel. Wie sterk uitgesproken cellulitis heeft of de huid stevig wil
          verstrakken na gewichtsverlies, heeft meer sessies nodig dan iemand die een mild
          onderhoudsprogramma volgt.
        </p>
        <p className={P}>
          De sessies plan je idealiter wekelijks in, zeker in de eerste fase. Zo bouw je het effect
          op voordat het lichaam de veranderingen volledig heeft verwerkt. Na de eerste kuur is
          onderhoud aan te raden: één sessie per twee of drie weken houdt het resultaat vast.
        </p>
        <p className={P}>
          Bekijk de actuele tarieven en kuurpakketten op de{' '}
          <Link href="/prijzen" className={A}>
            prijzenpagina
          </Link>
          .
        </p>

        <QA
          vraag="Hoe snel zie je resultaat van LPG?"
          antwoord="De meeste mensen merken na 3 tot 4 behandelingen al een verschil in hoe de huid aanvoelt. Zichtbaar resultaat in de spiegel is er gemiddeld na 6 behandelingen. De progressie gaat daarna nog door, omdat de aanmaak van collageen tijd nodig heeft."
        />

        <h2 className={H2}>Voor wie is LPG endermologie geschikt?</h2>
        <p className={P}>
          LPG is geschikt voor vrouwen en mannen die last hebben van cellulitis, slappe huid of
          lokale vetophopingen. Het werkt even goed voor slanke mensen met hardnekkige cellulitis
          als voor mensen die na gewichtsverlies de huid willen verstrakken.
        </p>
        <p className={P}>
          Er zijn situaties waarin LPG niet geschikt is. Tijdens de zwangerschap doe je geen LPG
          behandelingen. Ook bij actieve trombose, huidinfecties in de behandelzone of kanker in
          het behandelgebied is het niet aan te raden. Twijfel je? Bespreek het dan eerst met je
          huisarts of specialist voordat je een afspraak maakt.
        </p>

        <h2 className={H2}>Wat kost LPG endermologie bij My Miracle?</h2>
        <p className={P}>
          De tarieven vind je op de{' '}
          <Link href="/prijzen" className={A}>
            prijzenpagina
          </Link>
          . Losse behandelingen en kuurpakketten zijn allebei beschikbaar. Wie voor het eerst
          kennismaakt met LPG kan een gratis kennismakingsgesprek inplannen om doelen te bespreken
          en een behandelplan op maat te maken.
        </p>

        <h2 className={H2}>LPG endermologie vs andere behandelingen</h2>
        <p className={P}>
          Er zijn meer manieren om cellulitis aan te pakken. Een eerlijke vergelijking.
        </p>
        <p className={P}>
          <strong>Crèmes</strong> werken uitsluitend oppervlakkig. Ze kunnen de huid hydrateren en
          tijdelijk gladder laten lijken, maar ze bereiken het bindweefsel niet. Voor structureel
          resultaat is een crème niet voldoende.
        </p>
        <p className={P}>
          <strong>Manuele massage</strong> is goed voor ontspanning en doorbloeding. Maar ze bereikt
          minder diep dan een LPG apparaat. Voor cellulitis en huidverstrakking is LPG effectiever.
        </p>
        <p className={P}>
          <strong>Operatieve ingrepen</strong> zoals liposuctie of een buikwandcorrectie geven een
          ander soort resultaat. Ze zijn invasiever, duurder, vereisen een herstelperiode en kennen
          meer risico's. Voor wie geen operatie wil of nodig heeft, is LPG een logische keuze.
        </p>
        <p className={P}>
          Bekijk het volledige overzicht van{' '}
          <Link href="/behandelingen" className={A}>
            behandelingen bij My Miracle
          </Link>
          .
        </p>
      </>
    ),
  },

  'cellulitis-behandelen-methodes': {
    metaDescription:
      'Ontdek welke behandelingen aantoonbaar werken tegen cellulitis. Een eerlijk overzicht van LPG endermologie, lymfedrainage, crèmes en wat je zelf kunt doen.',
    snel: 'Cellulitis is te behandelen maar niet permanent weg te werken. LPG endermologie, drainerende massage en gerichte lichaamsbeweging geven de beste resultaten. Crèmes en quick fixes werken niet structureel.',
    faq: [
      {
        vraag: 'Kan ik cellulitis behandelen als ik zwanger ben?',
        antwoord:
          'Nee. LPG endermologie en de meeste andere actieve behandelingen zijn niet geschikt tijdens de zwangerschap. Wacht tot na de bevalling en de kraamperiode voor je een behandeling start.',
      },
      {
        vraag: 'Verdwijnt cellulitis door veel sporten?',
        antwoord:
          'Sporten helpt, maar is op zichzelf niet genoeg om uitgesproken cellulitis te verminderen. Het is een goede aanvulling op behandelingen zoals LPG. Krachttraining en cardio samen geven het beste resultaat.',
      },
      {
        vraag: 'Is cellulitis hetzelfde als overgewicht?',
        antwoord:
          'Nee. Cellulitis is een bindweefselprobleem en heeft niets te maken met hoeveel je weegt. Slanke mensen kunnen ernstige cellulitis hebben, en mensen met overgewicht kunnen het nauwelijks zichtbaar hebben.',
      },
    ],
    body: () => (
      <>
        <h2 className={H2}>Wat is cellulitis en waarom is het zo hardnekkig?</h2>
        <p className={P}>
          Cellulitis is geen vetprobleem maar een bindweefselprobleem. Vetcellen onder de huid
          oefenen druk uit op het bindweefsel, dat in de loop der jaren verstijft en aantrekt. Dat
          geeft het kuitjespatroon dat je kent.
        </p>
        <p className={P}>
          Hormonen spelen een grote rol. Oestrogeen beïnvloedt de verdeling van vetcellen en de
          structuur van het bindweefsel. Daardoor hebben vrouwen vaker last van cellulitis dan
          mannen. Ook slanke mensen kunnen het hebben. Het heeft dus niets te maken met hoeveel je
          weegt.
        </p>
        <p className={P}>
          Andere factoren die een rol spelen: een zittend bestaan, slechte doorbloeding, roken en
          genetische aanleg. Het is een combinatie van factoren die maakt dat cellulitis zo
          hardnekkig is en niet zomaar verdwijnt met bewegen of diëten.
        </p>

        <h2 className={H2}>Welke behandelingen werken aantoonbaar?</h2>
        <p className={P}>
          LPG endermologie is op dit moment de best onderbouwde niet-chirurgische behandeling voor
          cellulitis. De mechanische massagetechniek breekt de fibrotische strengen in het
          bindweefsel los, verbetert de doorbloeding en stimuleert de aanmaak van collageen.
          Resultaten zijn na meerdere sessies zichtbaar en meetbaar.
        </p>
        <p className={P}>
          Manuele lymfedrainage helpt bij het afvoeren van vocht en afvalstoffen uit het weefsel.
          Het is een aanvulling op LPG en kan het effect versterken. Als zelfstandige behandeling
          voor cellulitis is het minder effectief dan LPG.
        </p>
        <p className={P}>
          Koude therapie (cryotherapie) kan de doorbloeding stimuleren en tijdelijk de
          zichtbaarheid van cellulitis verminderen. Het effect is minder duurzaam dan LPG en
          vereist ook regelmatige herhalingen.
        </p>
        <p className={P}>
          Lichaamsbeweging verbetert de doorbloeding en versterkt het bindweefsel indirect.
          Krachttraining in combinatie met cardio geeft de beste resultaten. Maar beweging vervangt
          geen behandeling als je al uitgesproken cellulitis hebt.
        </p>

        <QA
          vraag="Gaat cellulitis ooit helemaal weg?"
          antwoord="Volledig weg gaat cellulitis bij de meeste mensen niet, tenzij ze heel jong zijn en de cellulitis mild is. Wat je wel kunt bereiken: een flinke verbetering in zichtbaarheid en hoe de huid aanvoelt. Veel mensen zijn na een behandelkuur erg tevreden met het resultaat, ook al is het niet 100% verdwenen."
        />

        <h2 className={H2}>Wat werkt niet tegen cellulitis?</h2>
        <p className={P}>
          Dure crèmes met indrukwekkende beloftes werken niet structureel. Ze kunnen de huid
          hydrateren en tijdelijk de elasticiteit verbeteren, maar het bindweefsel bereiken ze
          niet. Als je elke dag een dure crème smeert als enige aanpak, doe je jezelf tekort.
        </p>
        <p className={P}>
          Wikkelmethoden zonder onderbouwing. Er circuleren behandelingen waarbij je ingepakt wordt
          met aluminiumfolie of kruidenmengsels. Er is geen goede wetenschappelijke onderbouwing
          voor de effectiviteit bij cellulitis.
        </p>
        <p className={P}>
          Extreem diëten helpt ook niet. Een streng caloriebeperkt dieet maakt je misschien
          slanker, maar kan de cellulitis juist zichtbaarder maken als de huid slapper wordt door
          het gewichtsverlies. Langzame, duurzame aanpassingen in je eetpatroon werken beter.
        </p>

        <QA
          vraag="Hoeveel behandelingen heb ik nodig?"
          antwoord="Voor merkbaar resultaat reken je op 6 tot 10 LPG sessies. Heb je sterk uitgesproken cellulitis, dan kan dat meer zijn. Na de eerste kuur is onderhoud van 1 sessie per twee of drie weken aan te raden om het resultaat vast te houden."
        />

        <h2 className={H2}>Hoe behandelt My Miracle cellulitis?</h2>
        <p className={P}>
          Bij My Miracle werken we met LPG endermologie als hoofdbehandeling voor cellulitis. Na
          een gratis kennismakingsgesprek wordt een behandelplan op maat gemaakt, afgestemd op het
          gebied dat je wilt behandelen en het resultaat dat je wilt bereiken.
        </p>
        <p className={P}>
          Lees meer over{' '}
          <Link href="/lpg-endermologie" className={A}>
            LPG endermologie
          </Link>{' '}
          of bekijk het overzicht van{' '}
          <Link href="/behandelingen/lichaam" className={A}>
            lichaamsbehandelingen bij My Miracle
          </Link>
          .
        </p>

        <h2 className={H2}>Wat kun je zelf doen naast de behandelingen?</h2>
        <p className={P}>
          De behandelingen zijn effectiever als je je leefstijl een klein beetje aanpast. Dat hoeft
          niet drastisch.
        </p>
        <p className={P}>
          Drink voldoende water, minimaal 1,5 liter per dag. Goed gehydrateerd bindweefsel reageert
          beter op de behandeling en afvalstoffen worden beter afgevoerd.
        </p>
        <p className={P}>
          Beweeg regelmatig. Dat hoeft geen intensief sportschema te zijn. Dagelijks 30 minuten
          stevig wandelen verbetert al de doorbloeding significant.
        </p>
        <p className={P}>
          Eet minder bewerkte producten, minder zout en minder suiker. Zout houdt vocht vast. Suiker
          veroorzaakt ontstekingen in het weefsel. Beide verergeren cellulitis op de lange termijn.
        </p>
      </>
    ),
  },

  'lpg-massage-den-haag-eerste-behandeling': {
    metaDescription:
      'Wat kun je verwachten bij je eerste LPG massage in Den Haag? Stap voor stap uitleg van de behandeling bij My Miracle, van intake tot resultaat.',
    snel: 'Bij je eerste LPG massage in Den Haag duurt de sessie ongeveer 45 minuten. Je draagt een speciaal pak, de behandeling voelt als een diepe massage en is niet pijnlijk. Na de behandeling kun je direct je dagelijkse bezigheden hervatten.',
    faq: [
      {
        vraag: 'Moet ik iets meenemen naar mijn eerste LPG behandeling?',
        antwoord:
          'Comfortabele kleding is handig om in te reizen. Het behandelpak is aanwezig in de praktijk. Je hoeft zelf niets speciaals mee te nemen.',
      },
      {
        vraag: 'Hoe lang duurt de eerste afspraak?',
        antwoord:
          'De eerste afspraak duurt iets langer dan een reguliere sessie, omdat we ook een intake doen en omtrekmetingen nemen. Rekening houden met ongeveer een uur voor de eerste keer.',
      },
      {
        vraag: 'Is LPG ook geschikt voor het gezicht?',
        antwoord:
          'Ja. LPG Endermologie wordt ook als gezichtsbehandeling ingezet, voor stimulatie van collageen en een liftend effect. Dat is een aparte behandeling van de lichaamsbehandeling.',
      },
    ],
    body: () => (
      <>
        <h2 className={H2}>Hoe ziet een LPG behandeling eruit stap voor stap?</h2>
        <p className={P}>
          Als je voor het eerst bij My Miracle komt, beginnen we met een kennismakingsgesprek. We
          bespreken je doelen, wensen en eventuele aandachtspunten. Daarna nemen we omtrekmetingen
          op de zones die je wilt behandelen. Zo kun je de voortgang in de loop van de kuur
          bijhouden.
        </p>
        <p className={P}>
          <strong>Stap 1: Omkleedruimte.</strong> Je trekt het LPG behandelpak aan. Dit
          nauwsluitende pak is vergelijkbaar met een strak sporttenue. Het beschermt de huid en
          zorgt ervoor dat de rollen van het apparaat soepel bewegen.
        </p>
        <p className={P}>
          <strong>Stap 2: De behandeling.</strong> Je gaat op de behandelbank liggen. De therapeut
          geleidt het LPG handstuk over het te behandelen gebied. Het apparaat trekt de huid
          lichtjes naar binnen via een vacuüm en rolt tegelijkertijd. Dat geeft een kenmerkend
          zuigend en rollend gevoel.
        </p>
        <p className={P}>
          <strong>Stap 3: Zones behandelen.</strong> Afhankelijk van je doel worden de relevante
          zones behandeld: dijen, billen, buik, bovenarmen of een combinatie. Per zone neemt de
          behandeling enkele minuten in beslag.
        </p>
        <p className={P}>
          <strong>Stap 4: Nabespreking.</strong> Na de sessie bespreek je kort hoe de behandeling
          aanvoelde en wat je kunt verwachten de komende dagen. De therapeut geeft ook advies over
          drinkgedrag en beweging na de behandeling.
        </p>

        <h2 className={H2}>Is een LPG massage pijnlijk?</h2>
        <p className={P}>
          De behandeling is niet pijnlijk. Het voelt als een stevige, diepe massage. Het vacuüm
          trekt de huid naar binnen, wat een lichte druk geeft. De rollende beweging voelt warm en
          stimulerend.
        </p>
        <p className={P}>
          Sommige zones zijn gevoeliger dan andere. De binnenkant van de dijen en de buik zijn voor
          sommige mensen iets intenser dan de buitenkant van de benen of de heupen. Dat is normaal.
        </p>
        <p className={P}>
          Als de druk te intens voelt, zeg je het gewoon. De therapeut past de instelling of
          bewegingssnelheid meteen aan. Communicatie tijdens de behandeling is altijd welkom.
        </p>
        <p className={P}>
          Na de behandeling kan de huid licht rood zijn en warm aanvoelen. Dat is een normale
          reactie en trekt snel weg.
        </p>

        <QA
          vraag="Hoe vaak moet ik komen voor resultaat?"
          antwoord="Voor zichtbaar resultaat begin je met 1 sessie per week gedurende 6 tot 10 weken. Daarna is onderhoud van 1 sessie per twee of drie weken aan te raden. Hoeveel sessies je precies nodig hebt, bespreken we tijdens de intake op basis van je situatie."
        />

        <h2 className={H2}>Wat moet je doen voor en na de behandeling?</h2>
        <p className={P}>
          Voorbereiding is eenvoudig. Drink voor de behandeling voldoende water, minstens een paar
          glazen. Kom niet met zware crèmes of oliën op de te behandelen zones. Een normale
          huidverzorging is prima, zolang je geen dikke laag product op de huid hebt.
        </p>
        <p className={P}>
          Eet voor de behandeling geen zware maaltijd. Een lichte snack een uur van tevoren is
          prima.
        </p>
        <p className={P}>
          Na de behandeling is het belangrijk om veel water te drinken, minimaal 1,5 tot 2 liter
          over de rest van de dag. De behandeling activeert het lymfesysteem en voldoende vocht
          helpt bij het afvoeren van de gemobiliseerde afvalstoffen.
        </p>
        <p className={P}>
          Vermijd direct na de behandeling een heel hete douche of bad. Lichte beweging, zoals een
          wandeling, bevordert het resultaat. Je kunt direct terug naar je normale dagelijkse
          bezigheden.
        </p>

        <QA
          vraag="Kan ik direct een afspraak maken?"
          antwoord="Ja, via de contactpagina kun je direct een afspraak aanvragen. We beginnen altijd met een gratis kennismakingsgesprek zodat we goed kunnen afstemmen wat bij jou past."
        />

        <h2 className={H2}>Waar zit My Miracle in Den Haag?</h2>
        <p className={P}>
          My Miracle is gevestigd op Bezuidenhoutseweg 161 in Den Haag (2594 AG). Dit adres is goed
          bereikbaar met het openbaar vervoer vanuit het centrum van Den Haag en het Centraal
          Station. Er is ook parkeergelegenheid in de buurt.
        </p>
        <p className={P}>
          Voor vragen over bereikbaarheid of voor het maken van een afspraak kun je terecht op de{' '}
          <Link href="/contact" className={A}>
            contactpagina
          </Link>
          .
        </p>

        <h2 className={H2}>Wat kost een LPG massage bij My Miracle?</h2>
        <p className={P}>
          De tarieven zijn te vinden op de{' '}
          <Link href="/prijzen" className={A}>
            prijzenpagina
          </Link>
          . Er zijn losse behandelingen en voordelige kuurpakketten beschikbaar. Nieuwe klanten
          starten altijd met een gratis kennismakingsgesprek, zodat we een behandelplan op maat
          kunnen maken.
        </p>
      </>
    ),
  },

  'bindweefsel-massage-vs-lpg': {
    metaDescription:
      'Bindweefsel massage en LPG endermologie lijken op elkaar maar zijn fundamenteel anders. Ontdek de verschillen in techniek, diepte en resultaat.',
    snel: 'Bindweefsel massage is een manuele techniek waarbij de therapeut met de handen het bindweefsel losmaakt. LPG endermologie doet hetzelfde maar mechanisch en dieper. Voor cellulitis en huidverstrakking geeft LPG betere resultaten. Voor ontspanning en spierverlichting is manuele massage een goede keuze.',
    faq: [
      {
        vraag: 'Welke behandeling is beter na een zwangerschap?',
        antwoord:
          'Na een zwangerschap helpt LPG bij het verstrakken van de huid en het verminderen van cellulitis. Wacht minimaal 3 maanden na de bevalling en overleg met je verloskundige voordat je begint.',
      },
      {
        vraag: 'Hoe lang duurt een bindweefselmassage?',
        antwoord:
          'Een sessie duurt gemiddeld 45 tot 60 minuten. Hoe lang en hoe intensief hangt af van het behandelgebied en de klachten die je hebt.',
      },
      {
        vraag: 'Vergoedt de zorgverzekering bindweefselmassage of LPG?',
        antwoord:
          'Dat is afhankelijk van je aanvullende verzekering en het soort klacht. LPG endermologie voor esthetische doeleinden wordt door de meeste verzekeraars niet vergoed.',
      },
    ],
    body: () => (
      <>
        <h2 className={H2}>Wat is bindweefsel massage?</h2>
        <p className={P}>
          Bindweefsel massage is een manuele massagetechniek waarbij de therapeut met de handen of
          vingers het bindweefsel direct onder de huid losmaakt. Het doel is het verbreken van
          verklevingen in het fascia, het weefsel dat spieren, organen en huid omhult.
        </p>
        <p className={P}>
          Het is een effectieve behandeling voor spanningsklachten, spierpijn en een verminderde
          doorbloeding. Bindweefselmassage wordt ook ingezet bij littekens of verklevingen na
          operaties of blessures.
        </p>
        <p className={P}>
          De techniek is volledig manueel. De therapeut gebruikt geen apparatuur. De kwaliteit en
          diepte van de massage is afhankelijk van de ervaring en het aanvoelen van de therapeut.
          Er is geen vast protocol voor de druk of bewegingssnelheid.
        </p>

        <h2 className={H2}>Wat is LPG endermologie?</h2>
        <p className={P}>
          LPG endermologie is de mechanische variant van bindweefselstimulatie. Een apparaat met
          twee roterende rollen en een vacuümsysteem trekt de huid naar binnen en rolt tegelijkertijd.
          Dit bereikt diepere lagen van het bindweefsel dan wat je met handmassage kunt bereiken.
        </p>
        <p className={P}>
          Het apparaat is consistent in druk en bewegingssnelheid. Dat maakt de behandeling
          reproduceerbaar: elke sessie heeft dezelfde kwaliteit, ongeacht de therapeut.
        </p>
        <p className={P}>
          LPG stimuleert naast het bindweefsel ook de aanmaak van collageen en elastine, en de
          lipolyse (vetafbraak). Dat zijn mechanismen die bij manuele massage minder direct worden
          geactiveerd.
        </p>
        <p className={P}>
          Lees meer over{' '}
          <Link href="/lpg-endermologie" className={A}>
            LPG endermologie bij My Miracle
          </Link>
          .
        </p>

        <QA
          vraag="Welke behandeling is effectiever?"
          antwoord="Dat hangt af van je doel. Voor cellulitis en huidverstrakking is LPG endermologie effectiever, omdat het dieper gaat en de lipolyse stimuleert. Voor spanningsklachten, spierpijn of het loswerken van verklevingen na een operatie is bindweefselmassage een betere keuze."
        />

        <h2 className={H2}>Wat zijn de verschillen in resultaat?</h2>
        <p className={P}>
          Voor cellulitis geldt: LPG wint. De mechanische techniek breekt de fibrotische strengen
          los die de kuitjes veroorzaken. Manuele massage heeft dit effect in mindere mate.
        </p>
        <p className={P}>
          Voor huidverstrakking: LPG stimuleert de aanmaak van collageen en elastine actief.
          Bindweefselmassage verbetert de doorbloeding, wat indirect de huidkwaliteit kan
          verbeteren, maar de directe collageenstimulatie is minder sterk.
        </p>
        <p className={P}>
          Voor ontspanning en doorbloeding: manuele massage heeft hier een voordeel. Het menselijk
          contact, het ritme en de aanpassing per moment maken het ook therapeutisch op een andere
          manier. Veel mensen ervaren bindweefselmassage als ontspannender dan een LPG sessie.
        </p>
        <p className={P}>
          Voor algemeen welbevinden: beide behandelingen verbeteren de doorbloeding en het
          lymfesysteem. Beide kunnen bijdragen aan soepeler en minder gespannen voelende benen en
          armen.
        </p>

        <QA
          vraag="Doet bindweefsel massage pijn?"
          antwoord="Bindweefselmassage kan bij verklevingen flink aanvoelen. Het is normaal dat je de behandeling intens ervaart als er veel spanning in het weefsel zit. Na de sessie verdwijnt dat gevoel en voelen de spieren losser. Geef altijd aan als de intensiteit te hoog is."
        />

        <h2 className={H2}>Welke behandeling past bij jou?</h2>
        <p className={P}>De keuze hangt af van je doel.</p>
        <p className={P}>
          Wil je cellulitis verminderen, de huid verstrakken of lokale vetophopingen aanpakken?
          Kies dan voor LPG endermologie.
        </p>
        <p className={P}>
          Heb je spanningsklachten, spierpijn of wil je herstellen van een blessure of operatie?
          Dan is bindweefselmassage een betere keuze.
        </p>
        <p className={P}>
          Bij My Miracle werken we met LPG endermologie voor lichaam en gezicht. Bekijk het{' '}
          <Link href="/behandelingen" className={A}>
            behandelingenoverzicht
          </Link>{' '}
          voor meer informatie.
        </p>

        <h2 className={H2}>Kunnen ze gecombineerd worden?</h2>
        <p className={P}>
          In sommige gevallen is een combinatie zinvol. LPG voor de diepere structurele verbetering
          van het bindweefsel en huidkwaliteit, gecombineerd met manuele massage voor ontspanning
          van de spieren errond.
        </p>
        <p className={P}>
          Bespreek dit tijdens de intake bij My Miracle. We kijken samen wat de beste aanpak is voor
          jouw specifieke doelstellingen.
        </p>
      </>
    ),
  },

  'buik-strakker-maken-zonder-operatie': {
    metaDescription:
      'Buik strakker maken zonder operatie is mogelijk via LPG endermologie, gerichte oefeningen en voeding. Een eerlijk overzicht van wat wel en niet werkt.',
    snel: 'Je buik strakker maken zonder operatie is mogelijk via LPG endermologie, gerichte oefeningen en voedingsaanpassingen. Resultaten zijn realistisch maar vereisen meerdere behandelingen en consistentie. Een operatie is alleen nodig bij ernstige huidlaxiteit.',
    faq: [
      {
        vraag: 'Kan ik LPG op de buik combineren met sporten?',
        antwoord:
          'Ja, en dat is zelfs aan te raden. LPG stimuleert de lipolyse en beweging na de behandeling helpt de vrijgekomen vetzuren te verbranden. Een wandeling of lichte training na de sessie versterkt het effect.',
      },
      {
        vraag: 'Helpt LPG ook na een zwangerschap?',
        antwoord:
          'Ja, maar wacht minimaal 3 maanden na de bevalling en overleg met je verloskundige. Na borstvoeding is het nog beter te wachten totdat het hormonale systeem is teruggekeerd naar normaal.',
      },
      {
        vraag: 'Is buikvet anders dan vet op de benen of billen?',
        antwoord:
          'Ja. Buikvet bestaat uit twee soorten: onderhuids vet (dat je kunt vastnemen) en visceraal vet (vet rond de organen). LPG werkt alleen op het onderhuids vet. Visceraal vet vermindert alleen door voedingsaanpassingen en beweging.',
      },
    ],
    body: () => (
      <>
        <h2 className={H2}>Waarom is een slappe buik zo hardnekkig?</h2>
        <p className={P}>
          Een slappe buik heeft meerdere oorzaken die vaak tegelijk een rol spelen.
        </p>
        <p className={P}>
          Huidlaxiteit is de meest voorkomende oorzaak na gewichtsverlies of zwangerschap. De huid
          heeft tijd nodig om te herstellen, maar soms lukt dat niet volledig van zichzelf. De huid
          blijft dan wat losser hangen, ook als je afgevallen bent of je baby geboren is.
        </p>
        <p className={P}>
          Vetopslag rond de buik is bij veel mensen hardnekkig, ook bij mensen die gezond leven.
          Hormonen spelen een grote rol bij de verdeling van vet over het lichaam. Cortisol, het
          stresshormoon, stimuleert de vetopslag rond de buik. Dit maakt buikvet bij stress en
          slaaptekort extra hardnekkig.
        </p>
        <p className={P}>
          Verzwakte buikspieren dragen bij aan een vooruitstekende buik. Spieren die niet worden
          getraind, worden minder strak en houden de buikinhoud minder goed op zijn plek.
        </p>
        <p className={P}>
          De combinatie van losse huid, buikvet en verzwakte spieren maakt het tot een lastig
          pakket. Voor elke factor is een andere aanpak nodig.
        </p>

        <h2 className={H2}>Welke niet-chirurgische behandelingen werken voor de buik?</h2>
        <p className={P}>
          LPG endermologie is de meest onderbouwde niet-chirurgische behandeling voor de combinatie
          van huidverstrakking en vetreductie op de buik. De mechanische massagetechniek stimuleert
          collageen en elastine in de huid en activeert de lipolyse in het onderliggende weefsel.
          Na meerdere sessies is de huid strakker en voelt ze steviger aan.
        </p>
        <p className={P}>
          Gerichte krachttraining bouwt de buikspieren op. Plankoefeningen, beenheffen en andere
          core oefeningen versterken de buikwand en geven de buik een strakker silhouet.
          Spiertraining vervangt geen behandeling voor losse huid, maar is een waardevolle aanvulling.
        </p>
        <p className={P}>
          Voeding speelt een rol bij het verminderen van buikvet. Minder bewerkte producten, minder
          suiker en minder zout zorgen voor minder ontstekingen in het weefsel en minder
          vochtretentie. Een langzame, consistente aanpak werkt beter dan een streng dieet.
        </p>

        <QA
          vraag="Hoe snel zie ik resultaat?"
          antwoord="Dat hangt af van je startpositie. Bij LPG behandelingen merk je na 3 tot 4 sessies al een verschil in hoe de huid aanvoelt. Zichtbaar resultaat in de spiegel is er gemiddeld na 6 sessies. Voor spieropbouw via training reken je op 8 tot 12 weken voordat het goed zichtbaar wordt."
        />

        <h2 className={H2}>Wat kan LPG endermologie doen voor je buik?</h2>
        <p className={P}>
          LPG stimuleert het bindweefsel in de buikzone. Het breekt de fibrotische strengen los die
          de huid doen hangen, verbetert de doorbloeding en activeert de aanmaak van nieuw collageen
          en elastine.
        </p>
        <p className={P}>
          Bij lokale vetophoping op de buik stimuleert LPG de lipolyse. Dat wil zeggen dat vetcellen
          worden aangezet om vetzuren vrij te geven, die dan als brandstof worden gebruikt. Dit
          werkt het best in combinatie met lichaamsbeweging.
        </p>
        <p className={P}>
          Eerlijk over wat LPG niet kan: als de huidlaxiteit heel ernstig is, bijvoorbeeld na een
          groot gewichtsverlies of na meerdere zwangerschappen, dan kan LPG de huid verbeteren maar
          niet volledig verstrakken. In dat geval is een gesprek met een chirurg zinvol om te
          bespreken of een operatie een optie is.
        </p>
        <p className={P}>
          Bekijk de{' '}
          <Link href="/lpg-endermologie" className={A}>
            LPG endermologie pagina
          </Link>{' '}
          en het overzicht van{' '}
          <Link href="/behandelingen/lichaam" className={A}>
            lichaamsbehandelingen bij My Miracle
          </Link>{' '}
          voor meer informatie.
        </p>

        <QA
          vraag="Hoeveel behandelingen heb ik nodig voor mijn buik?"
          antwoord="Gemiddeld beginnen de meeste mensen met 8 tot 10 sessies gericht op de buikzone. Daarna is onderhoud van 1 sessie per twee of drie weken aan te raden. We bepalen dit samen tijdens de intake op basis van jouw situatie."
        />

        <h2 className={H2}>Wat kun je zelf doen naast de behandelingen?</h2>
        <p className={P}>
          Een paar aanpassingen versterken het effect van LPG aanzienlijk.
        </p>
        <p className={P}>
          Plankoefeningen zijn de efficiëntste manier om de buikspieren te versterken zonder al te
          veel belasting op de rug. Begin met 3 sets van 20 seconden en bouw dat langzaam op.
        </p>
        <p className={P}>
          Beenheffen vanuit rugligging traint de onderste buikspieren. Die zijn vaak zwakker dan de
          bovenste en dragen bij aan een ronde onderbuik.
        </p>
        <p className={P}>
          Eet minder bewerkte producten. Kant-en-klare maaltijden, pakjes sauzen en bewerkte snacks
          bevatten veel zout, suiker en transvetten. Die zorgen voor ontstekingen in het weefsel en
          vochtophoping.
        </p>
        <p className={P}>
          Drink voldoende water. Goed gehydrateerde huid en weefsels reageren beter op de
          behandelingen en de lipolyse werkt effectiever als je voldoende vocht binnenkrijgt.
        </p>

        <h2 className={H2}>Wanneer is een operatie wel de enige optie?</h2>
        <p className={P}>
          Bij ernstige huidlaxiteit na een groot gewichtsverlies, of na meerdere zwangerschappen
          waarbij de buikwand ver uit elkaar heeft gestaan, kan niet-chirurgische behandeling
          onvoldoende zijn.
        </p>
        <p className={P}>
          Als de losse huid zo uitgesproken is dat ze in plooien hangt en niet meer reageert op
          niet-invasieve behandelingen, dan is een buikwandcorrectie soms de enige realistische
          optie.
        </p>
        <p className={P}>
          My Miracle behandelt geen situaties waarvoor een operatie nodig is. Als dat het geval is,
          verwijzen we je door naar de juiste specialist.
        </p>
      </>
    ),
  },
};

export function generateStaticParams() {
  return kennisbank.map((artikel) => ({ slug: artikel.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const artikel = kennisbank.find((a) => a.slug === slug);
  if (!artikel) return {};

  const content = artikelData[slug];

  return {
    title: artikel.title,
    description: content?.metaDescription ?? artikel.excerpt,
    alternates: {
      canonical: `${siteUrl}/kennisbank/${artikel.slug}`,
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

  const content = artikelData[slug];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: artikel.title,
    description: content?.metaDescription ?? artikel.excerpt,
    datePublished: artikel.publishDate,
    dateModified: artikel.publishDate,
    author: {
      '@type': 'Person',
      name: ownerName,
      url: `${siteUrl}/over-mij`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'My Miracle',
      url: siteUrl,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/kennisbank/${artikel.slug}`,
    },
  };

  const faqSchema = content
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: content.faq.map((item) => ({
          '@type': 'Question',
          name: item.vraag,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.antwoord,
          },
        })),
      }
    : null;

  const relatedArtikelen = kennisbank.filter((a) => a.slug !== slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Hero */}
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
            <div className="flex flex-wrap items-center gap-2 text-sm text-white/50">
              <span>{formatDate(artikel.publishDate)}</span>
              <span aria-hidden="true">·</span>
              <span>{artikel.readTime} leestijd</span>
              <span aria-hidden="true">·</span>
              <span>Door {ownerName}</span>
            </div>
            <p className="mt-2 text-xs text-white/30">
              Laatst bijgewerkt: {formatDate(artikel.publishDate)}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Snel antwoord */}
      {content && (
        <section className="bg-[#faf7f4] py-10">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <AnimatedSection>
              <div className="rounded-2xl border-l-4 border-[#4a1a7a] bg-white px-7 py-6 shadow-sm">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#4a1a7a]">
                  Kort antwoord
                </p>
                <p className="leading-relaxed text-[#1c1c1e]/80">{content.snel}</p>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Article body */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <AnimatedSection>
            {content ? (
              content.body()
            ) : (
              <p className="italic text-[#1c1c1e]/50">Dit artikel wordt binnenkort gepubliceerd.</p>
            )}
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      {content && (
        <section className="bg-[#faf7f4] py-14">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <AnimatedSection>
              <h2 className="mb-8 font-serif text-2xl font-bold text-[#1a0a2e] md:text-3xl">
                Veelgestelde vragen
              </h2>
              <dl className="space-y-3">
                {content.faq.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-[#4a1a7a]/15 bg-white px-6 py-5 shadow-sm"
                  >
                    <dt className="mb-2 font-semibold text-[#1a0a2e]">{item.vraag}</dt>
                    <dd className="text-sm leading-relaxed text-[#1c1c1e]/70">{item.antwoord}</dd>
                  </div>
                ))}
              </dl>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Related articles */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <AnimatedSection>
            <h2 className="mb-8 font-serif text-2xl font-bold text-[#1a0a2e]">Meer artikelen</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {relatedArtikelen.map((rel, i) => (
              <AnimatedSection key={rel.id} delay={i * 0.07}>
                <Link href={`/kennisbank/${rel.slug}`} className="group block h-full">
                  <article className="flex h-full flex-col rounded-2xl border border-[#d4a8b8]/30 bg-[#faf7f4] p-6 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-md">
                    <span className="mb-3 inline-block self-start rounded-full bg-[#4a1a7a]/10 px-2.5 py-0.5 text-xs font-semibold text-[#4a1a7a]">
                      {rel.category}
                    </span>
                    <h3 className="flex-1 font-serif text-sm font-bold leading-snug text-[#1a0a2e] transition-colors group-hover:text-[#4a1a7a]">
                      {rel.title}
                    </h3>
                    <span className="mt-4 block text-xs font-semibold text-[#4a1a7a]">
                      Lees meer →
                    </span>
                  </article>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a0a2e] py-20 text-center">
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
