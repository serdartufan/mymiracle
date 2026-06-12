import { NextResponse } from 'next/server';

export async function GET() {
  const content = `# My Miracle: Volledig Overzicht
> Gecertificeerd LPG Endermologie centrum in Den Haag

## Over My Miracle

My Miracle is een officieel gecertificeerd LPG Endermologie centrum in Den Haag, gevestigd op Bezuidenhoutseweg 161, 2594 AG Den Haag. De praktijk is een eenmanszaak (KVK: 94322309) van Kader Tufan, gecertificeerd LPG Endermologie therapeute.

My Miracle werkt uitsluitend op afspraak en biedt een persoonlijke, rustige behandelervaring zonder verkoopdruk.

## Over Kader Tufan

Kader Tufan is gecertificeerd LPG Endermologie therapeute en eigenaar van My Miracle. Zij specialiseerde zich volledig in LPG Endermologie na jarenlange ervaring in de schoonheids- en wellnesssector. Haar aanpak is persoonlijk: iedere behandeling start met een intakegesprek om doelen en aanpak samen te bepalen.

## LPG Endermologie: Technologie

LPG Endermologie is een niet-invasieve techniek ontwikkeld door het Franse bedrijf LPG Systems. Via mechanische stimulatie met rollers en vacuüm worden huidcellen geactiveerd zonder ingrepen of bijwerkingen. De Cellu M6 machine is de gouden standaard:

- Enige mechanische stimulatietechniek erkend door de FDA voor cellulitisreductie
- Klinisch getest in meer dan 100 wetenschappelijke studies
- Goedgekeurd door dermatologen wereldwijd
- 100% niet-invasief: geen naalden, geen downtime, geen bijwerkingen

### Hoe werkt het?
De Cellu M6 gebruikt een patented behandelkop met rollers die de huid zacht optillen en kneden. Dit activeert fibroblasten (cellen die collageen en elastine produceren) en stimuleert lipolyse (vetafbraak) op cellulair niveau.

### Verwachte resultaten
- Sessie 1-3: Huid went aan de behandeling, eerste ontspanning en verbeterde doorbloeding
- Sessie 4-6: Eerste zichtbare resultaten, huid voelt soepeler en steviger
- Sessie 7-10: Duidelijke verbetering van cellulitis en huidsteviging
- Na de kuur: Onderhoud 1× per maand voor blijvend resultaat

## Behandelingen

### LPG Lichaamsbehandeling
Wetenschappelijk bewezen behandeling voor:
- Afname van cellulitis (zichtbaar na 6-10 sessies)
- Vermindering van plaatselijk vet
- Versteviging en soepelheid van de huid
- Verbeterde bloedsomloop en lymfedrainage

**Protocol:**
- Aanbevolen kuur: 10-15 sessies, 1-2 keer per week
- Onderhoud: 1× per maand
- Sessieduur: ca. 35 minuten
- Behandelpak wordt ter plaatse verstrekt

**Voor wie:** Vrouwen en mannen met cellulitis, na zwangerschap (post-partum herstel), na gewichtsverlies, sporters voor herstel en doorbloeding.

**Niet aanbevolen bij:** Zwangerschap, actieve infecties, gebruik van bloedverdunners, bepaalde huidaandoeningen.

### LPG Gezichtsbehandeling
Anti-aging behandeling voor:
- Stimulatie van collageen- en elastineproductie
- Liftend en verstevigend effect
- Vermindering van rimpels en fijne lijntjes
- Egale huidtint en natuurlijke glow
- Vermindering van post-acne littekens

**Protocol:**
- Aanbevolen kuur: 10 sessies
- Onderhoud: 1× per maand
- Sessieduur: ca. 30 minuten

**Voor wie:** Eerste tekenen van huidveroudering, slappe of vermoeide huid, post-acne littekens, iedereen die een natuurlijk liftend effect wil.

**Niet aanbevolen bij:** Actieve huidinfecties, ernstige acne, open wondjes in het behandelgebied.

## Prijzen

### LPG Losse Behandeling
- 10 minuten: € 20,-
- 15 minuten: € 30,-
- 20 minuten: € 40,-
- 30 minuten: € 60,-
- 40 minuten: € 80,-

### LPG Kuur Pakket (10 + 1 gratis sessie)
- 15 minuten: € 300,-
- 20 minuten: € 400,-
- 30 minuten: € 600,-
- 40 minuten: € 800,-

### Kennismakingssessie
- Gratis, vrijblijvende intake om doelen en behandelplan te bepalen

Alle prijzen zijn inclusief BTW. Kuren zijn persoonsgebonden en niet overdraagbaar.

## Veelgestelde vragen

**Is LPG Endermologie pijnlijk?**
Nee. De behandeling voelt aan als een diepe, warme massage. Sommige gebieden kunnen gevoeliger zijn, maar pijn is niet normaal.

**Hoe snel zie ik resultaat?**
De eerste resultaten zijn zichtbaar na sessie 4-6. De beste resultaten na de volledige kuur van 10-15 sessies.

**Kan ik direct na de behandeling werken?**
Ja. Er is geen herstelperiode. Drink wel voldoende water om de lymfedrainage te ondersteunen.

**Is LPG ook voor mannen?**
Absoluut. LPG Endermologie is effectief voor zowel mannen als vrouwen.

**Wordt de behandeling vergoed door de verzekering?**
Esthetische LPG-behandelingen worden doorgaans niet vergoed door de zorgverzekering.

## Contactgegevens

- Bedrijfsnaam: My Miracle
- Eigenaar: Kader Tufan
- Adres: Bezuidenhoutseweg 161, 2594 AG Den Haag, Nederland
- Email: kader@mymiracle.nl
- Website: https://mymiracle.nl
- KVK: 94322309
- Alleen op afspraak

## Pagina's

- https://mymiracle.nl - Homepage
- https://mymiracle.nl/behandelingen - Overzicht behandelingen
- https://mymiracle.nl/behandelingen/lichaam - LPG Lichaamsbehandeling
- https://mymiracle.nl/behandelingen/gezicht - LPG Gezichtsbehandeling
- https://mymiracle.nl/lpg-endermologie - Wat is LPG Endermologie?
- https://mymiracle.nl/prijzen - Prijzen
- https://mymiracle.nl/over-mij - Over Kader Tufan
- https://mymiracle.nl/contact - Contact & Afspraak
- https://mymiracle.nl/privacy-policy - Privacy Policy
- https://mymiracle.nl/algemene-voorwaarden - Algemene Voorwaarden
`;
  return new NextResponse(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
