# Personal Portfolio

A premium, engineer-focused portfolio built with React, TypeScript, and Vite. Dark-first design, fully responsive, bilingual (EN/ES), and accessible.

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Routing:** React Router v6
- **i18n:** react-i18next (EN / ES)
- **SEO:** react-helmet-async
- **Testing:** Vitest + React Testing Library + fast-check
- **Deployment:** Vercel

## Getting Started

```bash
git clone <repo-url>
cd personal-portfolio
npm install
npm run dev
```

The dev server starts at `http://localhost:5173`.

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview production build locally |
| `npm run test` | Run test suite |
| `npm run test:coverage` | Run tests with coverage report |
| `npm run lint` | Lint all files with ESLint |

## Folder Structure

```
src/
├── assets/              # Static assets (images, SVGs)
├── components/
│   ├── layout/          # Navbar, Footer, AppLayout, ErrorBoundary
│   ├── sections/        # Landing page sections (Hero, About, Skills, etc.)
│   └── ui/              # Design system (Button, Card, Badge, Section, Container, Heading)
├── data/                # Static data files (projects, experience, skills, etc.)
├── hooks/               # Custom hooks (useTheme, useScrollPosition)
├── lib/                 # i18n config, motion variants, ThemeProvider, data access layer
├── pages/               # Route-level pages (Landing, Projects, Blog, Contact, 404)
├── types/               # TypeScript interfaces
└── utils/               # SEO helpers, utilities
public/
├── locales/
│   ├── en/              # English translations (namespace-based JSON)
│   └── es/              # Spanish translations
└── files/               # Downloadable assets (resume PDF)
```

## Design Philosophy

- **Dark-first:** `#0a0a0a` background with blue primary and military green / wine red accents
- **Responsive:** Mobile-first layout, works across all breakpoints
- **Accessible:** Semantic HTML, keyboard navigation, ARIA attributes, 4.5:1 contrast ratio
- **Bilingual:** Full EN/ES support with namespace-based i18n and localStorage persistence
- **Performance:** Lazy-loaded routes, code splitting, tree-shaken production builds
- **Backend-ready:** All data accessed through an async data layer — swap static files for API calls without touching components

## Deployment

Deployed on [Vercel](https://vercel.com). Push to `main` triggers automatic production deployment.

```bash
npm run build   # outputs to dist/
```

No server-side configuration required — works as a fully static site.

## License

MIT
