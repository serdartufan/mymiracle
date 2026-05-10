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
