@AGENTS.md

## Sessie-afsluiting (automatisch, geen bevestiging nodig)

Voer aan het einde van elke sessie altijd de volgende stappen uit zonder dat Serdar het hoeft te vragen:

1. **Update `CLAUDE.md`** — verschuif wat gedaan is naar de juiste "Gedaan"-sectie, update "To do" met wat nog openstaat.
2. **Commit & push** — `git add . && git commit -m "<korte beschrijving van de sessie>" && git push`

---

## Projectstatus My Miracle

### Infrastructuur & deployment

- **Hosting** — Hetzner VPS; app draait op `/var/www/mymiracle` via PM2 (`pm2 restart mymiracle`)
- **GitHub Actions** — `.github/workflows/deploy.yml`; push naar `main` triggert automatisch SSH-deploy naar VPS
  - Secrets vereist: `SERVER_HOST`, `SERVER_USER`, `SERVER_SSH_KEY`
  - Deploy-script: `git pull && npm install && npm run build && pm2 restart mymiracle`
- **Environment variables** (op server: `/var/www/mymiracle/.env`)
  - `BREVO_API_KEY` — Brevo (Sendinblue) API-sleutel voor contactformulier e-mails
  - `ADMIN_SECRET` — geheime header voor `/api/indexnow` endpoint

### Gedaan — SEO & AEO

- **URL-conflict opgelost** — mymiracle.be vervangen door mymiracle.nl in `content.ts`, `layout.tsx` en `localBusinessSchema`
- **Volledige SEO & AEO optimalisatie** op basis van 70-punten checklist
- **robots.ts** — AI-bot beheer: GPTBot, ClaudeBot, PerplexityBot toegelaten; Google-Extended geblokkeerd
- **layout.tsx** — volledige globale metadata: OpenGraph (nl_NL), Twitter card, geo meta tags (Den Haag), `HealthAndBeautyBusiness` JSON-LD schema
- **Page titels en descriptions** — alle pagina's geoptimaliseerd met lokale zoektermen ("Den Haag")
- **Canonical tags** — op alle pagina's via `alternates.canonical`
- **Structured data**
  - `FAQPage` schema op `/lpg-endermologie`
  - `Service` schema op `/behandelingen/lichaam` en `/behandelingen/gezicht`
  - `ItemList` prijsschema op `/prijzen`
  - `Person` schema (Kader Tufan) op `/over-mij`
- **Breadcrumb component** — `src/components/Breadcrumb.tsx`; zichtbare navigatie + `BreadcrumbList` JSON-LD op alle subpagina's
- **Sitemap** uitgebreid met `/privacy-policy`, `/algemene-voorwaarden`, `/kennisbank` en alle 5 artikel-slugs
- **llms.txt en llms-full.txt** — live op `/llms.txt` en `/llms-full.txt`
- **Footer NAP-consistentie** — adres, KVK (94322309) en email in footer
- **Google Search Console** gekoppeld en sitemap gesubmit
- **IndexNow geïmplementeerd** — sleutel `mm-indexnow-2026`, utility `src/lib/indexnow.ts`, endpoint `POST /api/indexnow`; succesvol gepingd (HTTP 202)
- **Rich results test** — 4 valid items (Local businesses + Organization)
- **Google Business Profile** aangemaakt voor My Miracle Den Haag

### Gedaan — Kennisbank (2026-05-27)

- **Kennisbank sectie** gebouwd met 5 artikelen op `/kennisbank`
  - `lpg-endermologie-werkt-het`
  - `cellulitis-behandelen-methodes`
  - `lpg-massage-den-haag-eerste-behandeling`
  - `bindweefsel-massage-vs-lpg`
  - `buik-strakker-maken-zonder-operatie`
- **Artikel content** volledig uitgeschreven in `src/app/kennisbank/[slug]/page.tsx` via `artikelData` (Record keyed op slug)
- **Pagina-opbouw per artikel**: snel-antwoord sectie, artikel body met H2-structuur en Q&A blokken, FAQ sectie, gerelateerde artikelen grid (4 kolommen desktop), CTA
- **JSON-LD schemas per artikel**: `Article` (auteur: Kader Tufan), `FAQPage` (3 vragen), `BreadcrumbList`
- **Kennisbank** toegevoegd aan navbar na "Behandeling"

### Gedaan — Security (2026-05-27)

- **Next.js 16.2.4 → 16.2.6** — SSRF (CVSS 8.6), middleware bypass (×4), DoS, XSS CVE's gedicht
- **Security headers** in `next.config.ts` — HSTS, X-Frame-Options, Referrer-Policy, Permissions-Policy, Cache-Control
- **Content-Security-Policy** — strikt, alleen `images.unsplash.com` als externe `img-src`, `frame-src https://www.google.com` (Maps-embed op /contact), `frame-ancestors 'none'`
- **`poweredByHeader: false`** — lekt geen `X-Powered-By: Next.js` meer
- **HTML-escaping** (`escapeHtml`) op alle gebruikersinput in `src/app/api/contact/route.ts`
- **Rate limiting** — `src/lib/rate-limit.ts`; max 5 requests per 10 minuten per IP; `429 + Retry-After`
- **Input validatie** — namen ≤ 100 tekens, tel ≤ 20 + regex `[0-9+\-\s()]`, toelichting ≤ 2000, email ≤ 254
- **Geslacht-whitelist** — `['Vrouw', 'Man']`
- **Honeypot veld** `website` in `ContactForm.tsx` — bots krijgen nep-200, gelogd als `[honeypot] Bot geblokkeerd, IP: ...`
- **`/api/indexnow` beveiligd** — vereist `x-admin-secret` header; `401` zonder geldige secret

### Gedaan — Contactformulier (2026-06-09)

- **Resend vervangen door Brevo API** — `src/app/api/contact/route.ts` stuurt via `https://api.brevo.com/v3/smtp/email`
  - Afzender: `kader@mymiracle.nl` (My Miracle)
  - Ontvanger: `kader@mymiracle.nl`
  - Env var: `BREVO_API_KEY` (vervangt `RESEND_API_KEY`)

### Gedaan — Craft-retrofit (2026-06-12)

- **globals.css** — focus-visible (paarse outline), `::selection`, `text-wrap: balance` op h1-h3, `prefers-reduced-motion` fallback (incl. `scroll-behavior: auto`)
- **Reduced motion** — `AnimatedSection` en `FaqAccordion` gebruiken `useReducedMotion` van framer-motion
- **AI-tells verwijderd** — emoji-iconen op /contact en het ✦-USP-vinkje vervangen door inline SVG; pastel border-left callouts in kennisbank omgezet naar volledige subtiele border; em-dashes uit algemene voorwaarden en llms-full.txt
- **Maps-fix** — CSP `frame-src` toegevoegd; de Google Maps-embed op /contact was tot dan toe geblokkeerd (leeg grijs vlak)

### To do

- Teksten uitbreiden op behandelingspagina's (min. 800 woorden per pagina)
- Echte foto's toevoegen (Unsplash-placeholders vervangen door eigen beeldmateriaal)
- Reviews verzamelen via Google Business Profile
- Externe bronlinks toevoegen aan kennisbank artikelen voor E-E-A-T signalering
- `BREVO_API_KEY` instellen op VPS (`/var/www/mymiracle/.env`) als dat nog niet is gedaan
