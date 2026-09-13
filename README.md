# ATYPICA® — Estudio de Branding

Landing page for ATYPICA®, a branding/creative studio. Editorial, anti-conformist: confident typography, breathing layouts, olive ✕ cream ✕ black with acid lime as a small accent. "No es para todos."

## Stack

- React Router 7 (SSR) + React 19
- TailwindCSS v4 (theme tokens in `app/app.css`)
- i18n es/en toggle (`app/i18n/`)
- AOS scroll animations, lottie-react (component kept, not rendered)
- Fonts: Fraunces (display), Inter (body), JetBrains Mono (labels)

## Getting Started

```bash
npm install
npm run dev      # development server with HMR
npm run typecheck  # react-router typegen + tsc
npm run build    # production build
```

## Structure

```
app/
  routes.ts / routes/home.tsx   # single index route (meta here)
  root.tsx                      # html shell, fonts, favicon, AOS init
  home/page.tsx                 # page composition (Header, Hero, About, Services, Process, ContactForm, Footer)
  components/                   # section components
  i18n/                         # es.ts / en.ts + LanguageProvider
  app.css                       # @theme tokens + grain/outline helpers
public/
  favicon.svg
  assets/                       # legacy files (unreferenced, kept for safety)
```

## Brand notes

- Palette: black `#0E0E0A`, night `#12130D`, olive `#4A4E2C`, cream `#ECE9DA`, paper `#F5F1E8`, lime `#EBE31F`, acid `#D8FF3E`.
- Fonts rule: never mix families within one line (serif for statements, sans for body, mono for technical labels).
- Voice: short, confident, intelligent. Statements: "No es para todos.", "El error es el sistema.", "Si no te gusta, mejor."
- Contact: `hola@atypica.com` (placeholder), master links Canva / Drive / Notion in footer.