'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const faqs = [
  {
    q: 'Doet de behandeling pijn?',
    a: 'Nee. De behandeling voelt aan als een diepe, warme massage. Sommige gebieden kunnen gevoeliger zijn, maar pijn is niet normaal. Geef dit altijd aan zodat de therapeut de intensiteit kan aanpassen.',
  },
  {
    q: 'Hoe snel zie ik resultaat?',
    a: 'De eerste resultaten zijn zichtbaar na sessie 4 tot 6. De beste resultaten worden bereikt na de volledige kuur van 10 tot 15 sessies. Resultaten variëren per persoon en zijn afhankelijk van levensstijl en consistentie.',
  },
  {
    q: 'Hoeveel sessies heb ik nodig?',
    a: 'Voor een optimaal resultaat adviseren we een kuur van 10 tot 15 sessies, bij voorkeur 1 tot 2 keer per week. Daarna is onderhoud van 1 sessie per maand aanbevolen om het resultaat te behouden.',
  },
  {
    q: 'Kan ik direct na de behandeling werken?',
    a: 'Ja. Er is geen herstelperiode. Je kunt direct na de behandeling je dagelijkse activiteiten hervatten. Drink wel voldoende water om de lymfedrainage te ondersteunen.',
  },
  {
    q: 'Is LPG ook voor mannen?',
    a: 'Absoluut. LPG Endermologie is effectief voor zowel mannen als vrouwen. De techniek wordt aangepast aan het huidtype en de doelstellingen van elke cliënt.',
  },
  {
    q: 'Wordt de behandeling vergoed door de verzekering?',
    a: 'Esthetische LPG-behandelingen worden doorgaans niet vergoed door de zorgverzekering. Bij bepaalde medische indicaties kan dit anders zijn. Raadpleeg je verzekeraar voor meer informatie.',
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <dl className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="overflow-hidden rounded-xl border border-[#4a1a7a]/15 bg-white shadow-sm"
        >
          <dt>
            <button
              className="flex w-full items-center justify-between px-6 py-5 text-left text-base font-medium text-[#1a0a2e] transition-colors hover:text-[#4a1a7a]"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <span>{faq.q}</span>
              <motion.span
                animate={{ rotate: open === i ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                className="ml-4 flex-shrink-0 text-[#4a1a7a]"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </motion.span>
            </button>
          </dt>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.dd
                key="answer"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-5 text-sm leading-relaxed text-[#1c1c1e]/70">{faq.a}</p>
              </motion.dd>
            )}
          </AnimatePresence>
        </div>
      ))}
    </dl>
  );
}
