# Build Memory: Portfolio Website
**Status:** Complete

## Tech Stack
| Layer | Tech | Version |
|-------|------|---------|
| Framework | Next.js | 16.2.9 |
| Runtime | React | 19.2.4 |
| Styling | Tailwind CSS | v4 |
| UI Library | shadcn/ui | custom components |
| Animation | framer-motion | latest |
| Theme | next-themes | latest |
| Icons | lucide-react | latest |
| Language | TypeScript | ^5 |

## Files Created/Modified
| File | Purpose |
|------|---------|
| `src/data/portfolio.ts` | All portfolio content data (updated with real projects) |
| `src/components/shared/project-card.tsx` | Image carousel + Detail Project modal |
| `src/components/sections/projects-slim.tsx` | Fallback ke githubUrl kalo liveUrl kosong |
| `src/components/layout/footer.tsx` | Hapus Twitter link |
| `src/components/sections/hero.tsx` | Hapus Twitter link |
| `src/app/contact/page.tsx` | Hapus Twitter link |
| `src/app/layout.tsx` | Add `data-scroll-behavior="smooth"` |
| `public/images/projects/` | Folder gambar project (fe-1, fe-2, admin, staff, toko-online) |

## Features
| Feature | Route | Status |
|---------|-------|--------|
| Hero landing | `/` | ✅ |
| About + Skills + Timeline | `/about` | ✅ |
| Projects with filter + carousel | `/projects` | ✅ |
| Project Detail modal | `/projects` (via button) | ✅ |
| Blog listing + post | `/blog`, `/blog/[slug]` | ✅ |
| Contact form | `/contact` | ✅ |
| Dark/light/system theme | global | ✅ |
| Responsive sidebar layout | global | ✅ |
| Scroll animations | global | ✅ |

## Projects (portfolio.ts)
| # | Title | Stack | Status |
|---|-------|-------|--------|
| 1 | CrackPOS Frontend | Next.js 16 + React 19 + Tailwind v4 + Zustand | ✅ |
| 2 | CrackPOS Backend | NestJS + Prisma + PostgreSQL + Python AI | ✅ |
| 3 | RevoBank API (Ms4) | NestJS + Prisma + JWT + Rate Limiting | ✅ |
| 4 | Toko Online E-Commerce (Ms3) | Next.js 16 + shadcn/ui + jose + Recharts | ✅ |
| 5 | RevoFun Mini Games (Ms2) | Vanilla HTML/CSS/JS | ✅ |

## Dependencies
| Package | Purpose |
|---------|---------|
| next-themes | Theme switching |
| framer-motion | Animations |
| lucide-react | Icons |
| class-variance-authority | Component variants |
| clsx + tailwind-merge | cn() utility |
| @radix-ui/react-slot | Slot primitive |

## Images
| Folder | Contents |
|--------|----------|
| `public/images/projects/` | fe-1.webp, fe-2.webp, admin.webp, staff.webp, toko-online-1/2/3.png |
| `public/images/profile/` | (kosong — taruh foto profil) |
| `public/images/blog/` | (kosong) |
| `public/images/certs/` | (kosong) |
| `public/images/misc/` | (kosong) |

## Notes
- `projects-slim.tsx` now falls back to `githubUrl` if `liveUrl` is empty
- ProjectCard supports `images[]` array for carousel, with `sizes` prop on `<Image fill>`
- Added `data-scroll-behavior="smooth"` to `<html>` in layout.tsx
- Twitter removed from social links (not used)
- All dummy data (experiences, blogPosts, certificates) replaced with empty typed arrays
- Build output: 0 errors, 0 warnings
