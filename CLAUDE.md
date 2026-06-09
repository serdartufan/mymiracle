@AGENTS.md

## Projectstatus My Miracle

### Gedaan

- **URL-conflict opgelost** — mymiracle.be vervangen door mymiracle.nl in `content.ts`, `layout.tsx` en `localBusinessSchema`
- **Volledige SEO & AEO optimalisatie** op basis van 70-punten checklist
- **robots.ts** — AI-bot beheer: GPTBot, ClaudeBot, PerplexityBot toegelaten; Google-Extended geblokkeerd
- **Security headers** — HSTS, X-Frame-Options, Referrer-Policy, Permissions-Policy, Cache-Control in `next.config.ts`
- **layout.tsx** — volledige globale metadata: OpenGraph (nl_NL), Twitter card, geo meta tags (Den Haag), `HealthAndBeautyBusiness` JSON-LD schema
- **Page titels en descriptions** — alle pagina's geoptimaliseerd met lokale zoektermen ("Den Haag")
- **Canonical tags** — op alle pagina's via `alternates.canonical`
- **Structured data**
  - `FAQPage` schema op `/lpg-endermologie`
  - `Service` schema op `/behandelingen/lichaam` en `/behandelingen/gezicht`
  - `ItemList` prijsschema op `/prijzen`
  - `Person` schema (Kader Tufan) op `/over-mij`
- **Breadcrumb component** — `src/components/Breadcrumb.tsx` aangemaakt; zichtbare navigatie + `BreadcrumbList` JSON-LD op alle subpagina's
- **Sitemap** uitgebreid met `/privacy-policy` en `/algemene-voorwaarden`
- **llms.txt en llms-full.txt** — routes live op `/llms.txt` en `/llms-full.txt`
- **Footer NAP-consistentie** — adres, KVK (94322309) en email toegevoegd aan footer
- **Google Search Console** gekoppeld en sitemap gesubmit
- **IndexNow geïmplementeerd**
  - Sleutel: `mm-indexnow-2026` (serveert op `/mm-indexnow-2026.txt`)
  - Utility: `src/lib/indexnow.ts`
  - Endpoint: `POST /api/indexnow`
  - Succesvol gepingd (HTTP 202)
- **Rich results test** — 4 valid items (Local businesses + Organization)
- **Google Business Profile** aangemaakt voor My Miracle Den Haag

### Kennisbank (2026-05-27)

- **Kennisbank sectie** gebouwd met 5 artikelen op `/kennisbank`
  - `lpg-endermologie-werkt-het`
  - `cellulitis-behandelen-methodes`
  - `lpg-massage-den-haag-eerste-behandeling`
  - `bindweefsel-massage-vs-lpg`
  - `buik-strakker-maken-zonder-operatie`
- **Artikel content** volledig uitgeschreven in `src/app/kennisbank/[slug]/page.tsx` via `artikelData` lookup (Record keyed op slug)
- **Pagina-opbouw per artikel**: snel-antwoord sectie, artikel body met H2-structuur en Q&A blokken, FAQ sectie, gerelateerde artikelen grid (4 kolommen desktop), CTA
- **JSON-LD schemas per artikel**: `Article` (auteur: Kader Tufan), `FAQPage` (3 vragen), `BreadcrumbList` via `Breadcrumb` component
- **Kennisbank** toegevoegd aan navbar na "Behandeling"
- **Sitemap** uitgebreid met `/kennisbank` en alle 5 artikel-slugs (gegenereerd vanuit `kennisbank` array in `content.ts`)

### Security (2026-05-27)

- **Next.js 16.2.4 → 16.2.6** — SSRF (CVSS 8.6), middleware bypass (×4), DoS, XSS CVE's gedicht
- **Content-Security-Policy** toegevoegd aan `next.config.ts` — strikt, alleen `images.unsplash.com` als externe `img-src`, `frame-ancestors 'none'`
- **`poweredByHeader: false`** in `next.config.ts` — lekt geen `X-Powered-By: Next.js` meer
- **HTML-escaping** (`escapeHtml`) op alle gebruikersinput in `src/app/api/contact/route.ts`
- **Rate limiting** — `src/lib/rate-limit.ts`; max 5 requests per 10 minuten per IP; geeft `429 + Retry-After` terug
- **Input validatie** — namen ≤ 100 tekens, telefoonnummer ≤ 20 + regex `[0-9+\-\s()]`, toelichting ≤ 2000, email ≤ 254
- **Geslacht-whitelist** gecorrigeerd naar `['Vrouw', 'Man']` (was `['Dhr.', 'Mevr.', 'Anders']`)
- **Honeypot veld** `website` in `ContactForm.tsx` — verborgen voor gebruikers, bots die het invullen krijgen nep-200; gelogd als `[honeypot] Bot geblokkeerd, IP: ...`
- **`/api/indexnow` beveiligd** — vereist `x-admin-secret` header die overeenkomt met `ADMIN_SECRET` env var; geeft `401` zonder geldige secret

### Environment variables (op server: /var/www/mymiracle/.env — nog te migreren van Vercel)

- `RESEND_API_KEY` — Resend API sleutel voor contactformulier
- `ADMIN_SECRET` — geheime header voor `/api/indexnow` endpoint

### To do

- Teksten uitbreiden op behandelingspagina's (min. 800 woorden)
- Echte foto's toevoegen (placeholder Unsplash-foto's vervangen)
- Reviews verzamelen via Google Business Profile
- Externe bronlinks toevoegen aan kennisbank artikelen voor E-E-A-T signalering
