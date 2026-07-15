# Build Memory: Portfolio Website
**Status:** Complete — Active Maintenance

## Tech Stack
| Layer | Tech | Version |
|-------|------|---------|
| Framework | Next.js | 16.2.9 |
| Runtime | React | 19.2.4 |
| Styling | Tailwind CSS | v4 |
| UI Library | shadcn/ui (Radix + custom) | custom |
| Animation | framer-motion | latest |
| Theme | next-themes | latest |
| Icons | lucide-react | latest |
| Language | TypeScript | ^5 |

## Project Data (`src/data/portfolio.ts`)
| Field | Detail |
|-------|--------|
| Name | Satria Yoga Pratama |
| Role | Software Engineer |
| Email | satriayogapratama255@gmail.com |
| GitHub | yogaaaa123 |
| LinkedIn | satria-yoga-pratama-b99446306 |
| Bio | Problem solver, tech enthusiast, always learning |

## Projects
| # | Project | Stack | Featured |
|---|---------|-------|----------|
| 1 | CrackPOS Frontend | Next.js 16, React 19, Zustand, React Query | ✅ |
| 2 | CrackPOS Backend | NestJS, Prisma, PostgreSQL, Python AI | ✅ |
| 3 | RevoBank API (Ms4) | NestJS, Prisma, JWT, Idempotency | ✅ |
| 4 | Toko Online (Ms3) | Next.js 16, shadcn/ui, jose, Recharts | ✅ |
| 5 | RevoFun Games (Ms2) | Vanilla HTML/CSS/JS | ❌ |

## Pages / Routes
| Route | Content | Status |
|-------|---------|--------|
| `/` | Hero + Stats + TechStack + ProjectsSlim + Certificates | ✅ |
| `/about` | Bio + Skills + Quick Facts + Timeline | ✅ |
| `/projects` | Project grid with carousel + tag filter + detail modal | ✅ |
| `/notebooks` | Learning notes listing | ✅ |
| `/notebooks/[slug]` | Individual notebook page | ✅ |
| `/contact` | Contact form (simulated) + social links | ✅ |

## Features
- ✅ Dark/light/system theme toggle
- ✅ Responsive sidebar layout
- ✅ Scroll animations (framer-motion)
- ✅ Image carousel on project cards
- ✅ Detail Project modal
- ✅ Colorful badge marquee (hero)
- ✅ Colorful tech stack grid
- ✅ Certificate images display
- ✅ Resume PDF download
- ✅ SEO metadata + JSON-LD + Sitemap

## Images (`public/images/`)
| Folder | Contents |
|--------|----------|
| `projects/` | fe-1.webp, fe-2.webp, admin.webp, staff.webp, toko-online-1/2/3.webp |
| `profile/` | avatar.webp |
| `certs/` | revou-cert.webp, cert2.webp |

## Notes
- `<img>` used instead of `<Image />` to avoid Vercel optimization charges
- All images in WebP format for performance
- `font-weight` classes: `font-medium` (base), `font-bold` (headings) — no custom weights
- Blog section removed (redundant with Notebooks)
- Dummy experiences/certificates/blogPosts removed
- Build output: 0 errors, 0 warnings
