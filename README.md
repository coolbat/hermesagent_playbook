# Hermes Agent Playbook

Hermes Agent Playbook is a bilingual Astro site for Hermes Agent onboarding, workflow guidance, templates, skills discovery, and troubleshooting.

## Stack

- Astro
- MDX
- `@astrojs/sitemap`
- Pagefind

## Local Development

```bash
npm install
npm run dev
```

Build the static site:

```bash
npm run build
```

## Environment

Set the production site URL before building for deployment:

```bash
SITE_URL=https://your-domain.example npm run build
```

`SITE_URL` is used for:

- sitemap generation
- canonical URLs
- Open Graph URLs
- alternate locale URLs

## Project Structure

```text
src/
  components/
  config/
  content/
    learn/
    pages/
    quickStart/
    templates/
    troubleshoot/
  layouts/
  lib/
  pages/
  styles/
```

## Content Areas

- `Quick Start`: first-run onboarding path
- `Learn`: longer-form explanations and operating guidance
- `Skills`: scenario-based skill discovery
- `Templates`: reusable workflow starters
- `Troubleshoot`: symptom-first recovery guides

## Notes

- English routes live at `/`
- Chinese routes live under `/zh/`
- Search is powered by Pagefind and generated during `npm run build`
- RSS feeds are available at `/rss.xml` and `/zh/rss.xml`
