export const personalInfo = {
  name: "Satria Yoga Pratama",
  handle: "satria",
  role: "Full-Stack Developer",
  tagline: "Building digital experiences with code & creativity",
  bio: "Full-stack developer & problem solver who loves building things that make a difference. Tech enthusiast, always curious, always learning — from vanilla JS to AI-powered systems. I turn complex problems into clean, working solutions.",
  avatar: "/images/profile/avatar.webp",
  location: "Indonesia",
  email: "satria@email.com",
  social: {
    github: "https://github.com/yogaaaa123",
    linkedin: "https://linkedin.com/in/satria",
  },
  resumeUrl: "/resume.pdf",
};

export const stats = [
  { value: 5, suffix: "", label: "Projects Shipped", decimals: 0 },
  { value: 5, suffix: "", label: "Milestones", decimals: 0 },
  { value: 4, suffix: "", label: "Tech Stacks", decimals: 0 },
  { value: 100, suffix: "%", label: "Commitment", decimals: 0 },
];

export const skillBadges = [
  "Full-Stack Developer",
  "Next.js",
  "React",
  "TypeScript",
  "NestJS",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "Tailwind CSS",
  "Docker",
  "Python",
  "AI Integration",
  "Multi-Tenant SaaS",
  "JWT Auth",
  "REST API",
];

export const skills = [
  { name: "Next.js", category: "Frontend", level: 90 },
  { name: "React", category: "Frontend", level: 90 },
  { name: "TypeScript", category: "Language", level: 88 },
  { name: "NestJS", category: "Backend", level: 85 },
  { name: "Node.js", category: "Backend", level: 88 },
  { name: "Python", category: "Backend", level: 75 },
  { name: "PostgreSQL", category: "Database", level: 85 },
  { name: "Prisma", category: "Database", level: 88 },
  { name: "Tailwind CSS", category: "Frontend", level: 90 },
  { name: "Docker", category: "DevOps", level: 80 },
  { name: "Zustand", category: "State Mgmt", level: 85 },
  { name: "React Query", category: "State Mgmt", level: 82 },
];

export const techStack = [
  { name: "Next.js 16", category: "Frontend", icon: "▲" },
  { name: "React 19", category: "Frontend", icon: "⚛️" },
  { name: "TypeScript", category: "Language", icon: "TS" },
  { name: "NestJS", category: "Backend", icon: "🐱" },
  { name: "Node.js", category: "Backend", icon: "💚" },
  { name: "Python", category: "AI", icon: "🐍" },
  { name: "PostgreSQL", category: "Database", icon: "🐘" },
  { name: "Prisma", category: "ORM", icon: "▲" },
  { name: "Tailwind CSS", category: "Styling", icon: "🌊" },
  { name: "Docker", category: "DevOps", icon: "🐳" },
  { name: "Zod", category: "Validation", icon: "✓" },
  { name: "Recharts", category: "Charts", icon: "📊" },
];

export const experiences: {
  id: number;
  role: string;
  company: string;
  period: string;
  duration: string;
  description: string;
  highlights: string[];
}[] = [];

export const projects = [
  {
    id: 1,
    title: "CrackPOS — Frontend",
    description:
      "Production-ready inventory management & POS dashboard. Multi-tenant system with role-based access (Admin/Staff), real-time data sync via React Query, and an AI chat assistant for querying business data. Features include product CRUD, sales & purchase orders, stock transactions, returns, reports with charts, activity logs, notifications, and a super admin panel for managing tenants.",
    images: [
      "/images/projects/fe-2.webp",
      "/images/projects/fe-1.webp",
      "/images/projects/admin.webp",
      "/images/projects/staff.webp",
    ],
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Zustand",
      "React Query",
      "React Hook Form",
      "Zod",
      "Recharts",
      "Vitest",
      "Docker",
    ],
    liveUrl: "",
    githubUrl:
      "https://github.com/Revou-FSSE-Oct25/crack-fe-yogaaaa123",
    featured: true,
    spanFull: true,
    details: {
      highlights: [
        "Multi-tenant auth with JWT + Google OAuth",
        "Role-based access: Super Admin, Tenant Admin, Staff",
        "AI chat widget for natural language business queries",
        "AI-powered product input (auto-fill from text)",
        "Responsive sidebar + mobile layout",
        "Full test coverage with Vitest + Testing Library",
        "Docker-ready with multi-stage build",
      ],
    },
  },
  {
    id: 2,
    title: "CrackPOS — Backend",
    description:
      "NestJS REST API powering the CrackPOS system. Built with modular architecture, Prisma ORM on PostgreSQL, and JWT authentication with refresh tokens. Includes an integrated Python AI microservice that uses LLM tool-calling to answer business queries in real-time.",
    tags: [
      "NestJS",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "JWT",
      "Passport.js",
      "Python",
      "OpenAI SDK",
      "Swagger",
      "Helmet",
      "Winston",
      "Docker",
    ],
    liveUrl: "",
    githubUrl:
      "https://github.com/Revou-FSSE-Oct25/crack-be-yogaaaa123",
    featured: true,
    details: {
      highlights: [
        "Modular NestJS architecture (17 modules)",
        "Multi-tenant data isolation via tenantId scoping",
        "JWT + refresh token + Google OAuth authentication",
        "Rate limiting, Helmet security, Winston logging",
        "Python AI microservice with LLM tool-calling",
        "Prisma migrations with 8 schema versions",
        "Health check endpoints with @nestjs/terminus",
        "Swagger/OpenAPI documentation",
        "CSV export for reports",
      ],
    },
  },
  {
    id: 3,
    title: "RevoBank API",
    description:
      "Comprehensive banking API built with NestJS, PostgreSQL, and Prisma. Supports secure user authentication with JWT + refresh tokens, account management, financial transactions (deposit, withdraw, transfer) with idempotency keys to prevent duplicates, admin dashboard, and full audit logging for all actions.",
    tags: [
      "NestJS",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "JWT",
      "bcrypt",
      "Helmet",
      "Swagger",
      "Winston",
      "Rate Limiting",
    ],
    liveUrl: "",
    githubUrl:
      "https://github.com/Revou-FSSE-Oct25/milestone-4-yogaaaa123",
    featured: true,
    details: {
      highlights: [
        "JWT authentication with refresh token rotation",
        "Role-based access: Customer & Admin",
        "Deposit, withdraw, transfer with idempotency key",
        "Auto-generated account numbers",
        "Admin panel: user deactivation/reactivation",
        "Audit trail for every transaction and action",
        "Soft delete, rate limiting, Helmet security",
        "Swagger/OpenAPI documentation",
      ],
    },
  },
  {
    id: 4,
    title: "Toko Online — E-Commerce",
    description:
      "Full-featured e-commerce platform built with Next.js 16 App Router and TailwindCSS v4. Features custom JWT authentication using jose, dynamic product catalog from external API, shopping cart with Context API, protected admin dashboard for managing products, and server-side rendering for performance.",
    images: [
      "/images/projects/toko-online-1.webp",
      "/images/projects/toko-online-2.webp",
      "/images/projects/toko-online-3.webp",
    ],
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "shadcn/ui",
      "JWT",
      "jose",
      "Context API",
      "Recharts",
      "Vitest",
    ],
    spanFull: true,
    liveUrl:
      "https://toko-online-pwpu7c78m-yogaaaa123s-projects.vercel.app",
    githubUrl:
      "https://github.com/Revou-FSSE-Oct25/milestone-3-yogaaaa123",
    featured: true,
    details: {
      highlights: [
        "Custom JWT auth with HttpOnly cookies & middleware",
        "Product catalog with search, filter, and categories",
        "Shopping cart with persistent state",
        "Admin dashboard with sales analytics (Recharts)",
        "Responsive UI with shadcn/ui components",
        "Server Actions for form handling",
        "Full test suite with Vitest + Testing Library",
      ],
    },
  },
  {
    id: 5,
    title: "RevoFun — Mini Games",
    description:
      "Collection of 3 web-based mini-games (Speed Clicker, Tebak Angka, Tebak Gambar) built with vanilla HTML, CSS, and JavaScript. No frameworks or dependencies required — runs directly in the browser. Features a company landing page and interactive gameplay with scoring, timers, and feedback systems.",
    tags: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Vanilla JS",
      "DOM Manipulation",
    ],
    liveUrl:
      "https://revou-fsse-oct25.github.io/milestone-2-yogaaaa123/",
    githubUrl:
      "https://github.com/Revou-FSSE-Oct25/milestone-2-yogaaaa123",
    featured: false,
    spanFull: true,
    details: {
      highlights: [
        "3 mini-games: Speed Clicker, Tebak Angka, Tebak Gambar",
        "Vanilla JS — zero dependencies",
        "Landing page with company profile",
        "Score tracking, timers, and feedback system",
        "Image-based quiz with local assets",
        "Responsive layout, runs in any browser",
      ],
    },
  },
];

export const blogPosts: {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  image?: string;
}[] = [];

export const notebooks = [
  {
    slug: "memahami-react-server-components",
    title: "Memahami React Server Components",
    excerpt:
      "Catatan tentang RSC, kenapa kita butuh, dan gimana cara kerjanya di balik layar.",
    date: "2026-06-15",
    tags: ["React", "Frontend", "Server Components"],
  },
  {
    slug: "go-vs-nodejs-2026",
    title: "Go vs Node.js di 2026: Kapan Pilih Yang Mana?",
    excerpt:
      "Perbandingan terbaru dua runtime favorit untuk backend development.",
    date: "2026-06-10",
    tags: ["Go", "Node.js", "Backend", "Comparison"],
  },
  {
    slug: "tips-produktivitas-terminal",
    title: "Tips Produktivitas Terminal untuk Developer",
    excerpt:
      "Kumpulan shortcut, alias, dan tools yang bikin kerja di terminal makin cepat.",
    date: "2026-05-28",
    tags: ["Terminal", "Productivity", "Tools"],
  },
];

export const certificates: {
  name: string;
  issuer: string;
  image: string;
}[] = [
  { name: "Revou FSSE — Full-Stack Software Engineering", issuer: "Revou", image: "/images/certs/revou-cert.webp" },
  { name: "Dicoding — Financial Literacy", issuer: "Dicoding", image: "/images/certs/cert2.webp" },
];
