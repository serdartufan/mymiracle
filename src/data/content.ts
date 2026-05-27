export const siteUrl = 'https://mymiracle.nl';

export const ownerName = 'Kader Tufan';

export const contactInfo = {
  address: 'Bezuidenhoutseweg 161, 2594 AG Den Haag',
  email: 'kader@mymiracle.nl',
  openingHours: 'Op afspraak',
};

export const resendRecipientEmail = 'kader@mymiracle.nl';

export const pricing = {
  losseBehandeling: {
    label: 'LPG Losse Behandeling',
    sessies: [
      { minuten: 10, prijs: 20 },
      { minuten: 15, prijs: 30 },
      { minuten: 20, prijs: 40 },
      { minuten: 30, prijs: 60 },
      { minuten: 40, prijs: 80 },
    ],
  },
  kuurPakket: {
    label: 'LPG Kuur Pakket',
    omschrijving: '10 + 1 gratis sessie',
    sessies: [
      { minuten: 15, prijs: 300 },
      { minuten: 20, prijs: 400 },
      { minuten: 30, prijs: 600 },
      { minuten: 40, prijs: 800 },
    ],
  },
  kennismaking: {
    label: 'Kennismakingssessie',
    prijs: 0,
  },
};

// TODO: Vervang placeholder testimonials door echte klantreviews voor go-live
export const testimonials = [
  {
    quote:
      'Na 10 behandelingen zie ik echt verschil in mijn dijen. Mijn cellulitis is zichtbaar afgenomen en ik voel me veel zelfverzekerder.',
    author: 'M., 44 jaar',
  },
  {
    quote:
      'Ik kom nu al 3 maanden en mijn huid voelt strakker aan. De behandelingen zijn ontspannend én effectief.',
    author: 'S., 51 jaar',
  },
  {
    quote:
      'Eindelijk een behandeling die werkt zonder injecties. De eigenares neemt alle tijd voor je en legt alles goed uit.',
    author: 'L., 38 jaar',
  },
];

export const kennisbank = [
  {
    id: 'lpg-endermologie-werkt-het',
    title: 'LPG endermologie: werkt het echt?',
    slug: 'lpg-endermologie-werkt-het',
    category: 'LPG & Endermologie',
    excerpt: 'Er zijn veel verhalen over LPG endermologie. Wij zetten de feiten op een rij en leggen eerlijk uit wanneer het wél en niet werkt.',
    readTime: '6 min',
    publishDate: '2026-05-27',
  },
  {
    id: 'cellulitis-behandelen-methodes',
    title: 'Cellulitis behandelen: welke methodes werken aantoonbaar?',
    slug: 'cellulitis-behandelen-methodes',
    category: 'Cellulitis',
    excerpt: 'Cellulitis is hardnekkig, maar niet onbehandelbaar. Ontdek welke behandelingen wetenschappelijk onderbouwd zijn.',
    readTime: '7 min',
    publishDate: '2026-05-27',
  },
  {
    id: 'lpg-massage-den-haag-eerste-behandeling',
    title: 'LPG massage Den Haag: wat kun je verwachten bij je eerste behandeling?',
    slug: 'lpg-massage-den-haag-eerste-behandeling',
    category: 'LPG & Endermologie',
    excerpt: 'Nog nooit een LPG massage gehad? Wij leggen stap voor stap uit wat er gebeurt en wat je van je eerste sessie mag verwachten.',
    readTime: '5 min',
    publishDate: '2026-05-27',
  },
  {
    id: 'bindweefsel-massage-vs-lpg',
    title: 'Bindweefsel massage vs LPG: wat is het verschil?',
    slug: 'bindweefsel-massage-vs-lpg',
    category: 'Behandelingen',
    excerpt: 'Bindweefsel massage en LPG endermologie lijken op elkaar, maar zijn fundamenteel anders. Wij leggen het verschil uit.',
    readTime: '5 min',
    publishDate: '2026-05-27',
  },
  {
    id: 'buik-strakker-maken-zonder-operatie',
    title: 'Buik strakker maken zonder operatie: de opties op een rij',
    slug: 'buik-strakker-maken-zonder-operatie',
    category: 'Lichaam',
    excerpt: 'Een strakkere buik zonder ingreep? Er zijn meerdere niet-chirurgische opties. Wij vergelijken ze eerlijk.',
    readTime: '6 min',
    publishDate: '2026-05-27',
  },
];

// TODO: Vervang Unsplash URLs door eigen professionele foto's voor go-live
export const images = {
  hero: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1920&q=80',
  about: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?w=800&q=80',
  intro: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=800&q=80',
  behandelingenBody: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=800&q=80',
  behandelingenFace: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80',
  wellness: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=80',
  whyUs: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80',
  bodyTreatment: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
  faceTreatment: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80',
};
