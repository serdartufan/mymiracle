# My Miracle — LPG Endermologie Website

Next.js 14 website voor My Miracle, gecertificeerd LPG Endermologie centrum.

## Lokaal draaien

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in je browser.

## Omgevingsvariabelen instellen

Maak een `.env.local` bestand aan in de root van het project:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxx
```

Maak een gratis account aan op [resend.com](https://resend.com) om een API-sleutel te genereren.

## Deployen naar Vercel

1. Push je code naar GitHub
2. Ga naar [vercel.com](https://vercel.com) en importeer de repository
3. Voeg `RESEND_API_KEY` toe als environment variable in Vercel
4. Klik op **Deploy**

---

## ✅ Checklist voor go-live

Alle placeholder waarden staan in **`src/data/content.ts`** — dit is het enige bestand dat je hoeft te bewerken voor de basisinformatie.

### Verplicht voor lancering

- [ ] **Naam eigenares** invullen: `ownerName` in `src/data/content.ts`
- [ ] **Adres** invullen: `contactInfo.address` in `src/data/content.ts`
- [ ] **Telefoonnummer** invullen: `contactInfo.phone` in `src/data/content.ts`
- [ ] **E-mailadres** invullen: `contactInfo.email` in `src/data/content.ts`
- [ ] **Ontvangst e-mail** instellen: `resendRecipientEmail` in `src/data/content.ts`
- [ ] **Openingstijden** invullen: `contactInfo.openingHours` in `src/data/content.ts`
- [ ] **Alle prijzen** invullen: `pricing` object in `src/data/content.ts`
- [ ] **Calendly URL** instellen: `calendlyUrl` in `src/data/content.ts`
- [ ] **Resend API key** instellen in `.env.local` (zie boven)
- [ ] **Domein** bijwerken: `siteUrl` in `src/data/content.ts`

### Afbeeldingen

- [ ] **Eigen foto's** toevoegen: vervang Unsplash URLs in `images` object in `src/data/content.ts`
- [ ] **Portretfoto eigenares** toevoegen (vervangt placeholder op /over-mij pagina)

### Tekst en inhoud

- [ ] **Persoonlijk verhaal** schrijven op `/over-mij` pagina (`src/app/over-mij/page.tsx`)
- [ ] **Echte klantreviews** toevoegen: vervang `testimonials` array in `src/data/content.ts`
- [ ] **Certificeringen** aanvullen: `certifications` array in `src/app/over-mij/page.tsx`

### Integraties

- [ ] **Google Maps** bijwerken met juist adres in `src/app/contact/page.tsx`
- [ ] **Instagram link** invullen: `socialLinks.instagram` in `src/data/content.ts`
- [ ] **Facebook link** invullen: `socialLinks.facebook` in `src/data/content.ts`

### SEO & technisch

- [ ] **Sitemap URL** controleren: `siteUrl` in `src/data/content.ts`
- [ ] **LPG certificeringsbadge** toevoegen op `/lpg-endermologie` pagina
- [ ] **Alle teksten** nalezen op naam eigenares en correctheid

---

## Projectstructuur

```
src/
├── app/                    # Next.js App Router pagina's
│   ├── page.tsx            # Homepage (/)
│   ├── over-mij/           # Over Mij pagina
│   ├── behandelingen/      # Behandelingen overzicht + subpagina's
│   ├── lpg-endermologie/   # LPG info pagina met FAQ
│   ├── prijzen/            # Prijzenpagina
│   ├── contact/            # Contact & booking pagina
│   └── api/contact/        # Contact formulier API route (Resend)
├── components/             # Gedeelde componenten
│   ├── Navbar.tsx          # Navigatiebalk (sticky, met dropdown)
│   ├── Footer.tsx          # Footer
│   ├── AnimatedSection.tsx # Framer Motion scroll-animaties
│   ├── FaqAccordion.tsx    # FAQ accordion component
│   └── ContactForm.tsx     # Contactformulier met validatie
└── data/
    └── content.ts          # ← ALLE configuratie hier aanpassen
```
