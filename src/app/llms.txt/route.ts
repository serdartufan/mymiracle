import { NextResponse } from 'next/server';

export async function GET() {
  const content = `# My Miracle
> Gecertificeerd LPG Endermologie centrum in Den Haag

My Miracle is een officieel gecertificeerd LPG Endermologie centrum in Den Haag, gespecialiseerd in niet-invasieve lichaams- en gezichtsbehandelingen met de LPG Cellu M6 machine. Eigenaar en therapeute is Kader Tufan.

## Behandelingen
- LPG Lichaamsbehandeling (cellulitis, huidverstrakking, bindweefsel)
- LPG Gezichtsbehandeling (anti-aging, huidverjonging, collageen stimulatie)
- Bindweefselmassage
- Anti-cellulitis behandeling

## Belangrijkste pagina's
- Homepage: https://mymiracle.nl
- Behandelingen: https://mymiracle.nl/behandelingen
- Lichaamsbehandeling: https://mymiracle.nl/behandelingen/lichaam
- Gezichtsbehandeling: https://mymiracle.nl/behandelingen/gezicht
- LPG Endermologie: https://mymiracle.nl/lpg-endermologie
- Prijzen: https://mymiracle.nl/prijzen
- Over mij: https://mymiracle.nl/over-mij
- Contact: https://mymiracle.nl/contact

## Contact
- Email: kader@mymiracle.nl
- Adres: Bezuidenhoutseweg 161, 2594 AG Den Haag, Nederland
- KVK: 94322309
- Alleen op afspraak

## Meer informatie
Voor uitgebreide content: https://mymiracle.nl/llms-full.txt
`;
  return new NextResponse(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
