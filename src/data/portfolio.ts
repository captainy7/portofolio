export const personalInfo = {
  name: "Satria Yoga Pratama",
  handle: "satria",
  role: "Software Engineer",
  tagline: "Building digital experiences with code & creativity",
  bio: "Software engineer & problem solver who loves building things that make a difference. Tech enthusiast, always curious, always learning — turning complex problems into clean, working solutions.",
  avatar: "/images/profile/avatar.webp",
  location: "Indonesia",
  email: "satriayogapratama255@gmail.com",
  social: {
    github: "https://github.com/captainy7",
    linkedin: "https://www.linkedin.com/in/satria-yoga-pratama-b99446306",
  },
  resumeUrl: "/resume.pdf",
  heroBio: "I am a Software Engineer with a background in the manufacturing industry, bringing a strong discipline for quality standards, operational efficiency, and meticulous attention to detail. I successfully transitioned into tech through RevoU's intensive Full Stack Software Engineering program. I specialize in building reliable web applications using the JavaScript and TypeScript ecosystem, including React, Next.js, Node.js, NestJS, and PostgreSQL. I am proficient in managing the full development lifecycle, from architectural design to Docker containerization. I am eager to leverage my unique blend of industrial discipline and technical expertise to build impactful digital solutions within a dynamic engineering team.",
};

export const stats = [
  { value: 5, suffix: "", label: "Projects Shipped", decimals: 0 },
  { value: 5, suffix: "", label: "Milestones", decimals: 0 },
  { value: 12, suffix: "", label: "Tech Stacks", decimals: 0 },
  { value: 100, suffix: "%", label: "Commitment", decimals: 0 },
];

export const skillBadges = [
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
  "REST API",
  "Linux",
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
  { name: "Linux", category: "DevOps", level: 78 },
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
  { name: "Linux", category: "DevOps", icon: "🐧" },
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

export const notebooks: {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  contentEn?: string[];
  contentId?: string[];
}[] = [
  {
    slug: "perjalanan-dari-smk-ke-software-engineer",
    title: "My Journey: From SMK to Software Engineer",
    excerpt:
      "A story about graduating from vocational high school, working in a factory, failing to enter university, and eventually finding my path as a Software Engineer through RevoU.",
    date: "2026-07-16",
    tags: ["Journey", "Career", "Motivation", "Learning"],
    contentEn: [
      "Graduated from SMK Teknik Komputer Jaringan (Computer and Network Engineering) on May 6, 2024. After graduating, there was a work program to Japan that I was really interested in. But since I'm an only child, my parents didn't allow me to go. I respected their decision.",
      "Around May 11-12, 2024, I applied for a job at PT 2 Kelinci and was accepted as a production operator. I worked there for almost a year and gained valuable experience: teamwork, communication, target discipline, and a strong work ethic.",
      "During my time working, I became interested in continuing my education. In February 2025, I resigned with the intention of going to college—informatics engineering. I took the SNBT exam, hoping to get into UGM. But my scores weren't enough.",
      "That's when I started looking for alternatives and found RevoU—a Full Stack Software Engineering bootcamp. It ran from October 2025 to June 2026.",
      "Before RevoU started (July 2025), I taught myself coding while helping my parents sell at the market.",
      "At RevoU, we started with Markdown, Git, GitHub. Then HTML semantic, CSS, Tailwind. First project: portfolio. Then JavaScript, TypeScript, Next.js, and NestJS for backend with PostgreSQL.",
      "The highlight: Final Project—CrackPOS, an end-to-end inventory management system.",
      "Now I'm participating in RevoU Next—a job seeker program. The journey is still long, and I'm grateful for how far I've come.",
    ],
    contentId: [
      "Lulus dari SMK Teknik Komputer Jaringan di tanggal 6 Mei 2024. Setelah itu, ada program kerja ke Jepang yang sebenarnya sangat saya minati. Tapi karena saya anak tunggal, orang tua belum mengizinkan saya pergi.",
      "Di tanggal 11-12 Mei 2024, saya melamar kerja di PT 2 Kelinci dan diterima sebagai operator produksi. Hampir satu tahun saya bekerja di sana, dan banyak pelajaran berharga: kerja sama tim, komunikasi, disiplin target.",
      "Selama bekerja, saya mulai tertarik lagi untuk melanjutkan pendidikan. Februari 2025 saya resign, ikut SNBT, berharap bisa masuk UGM. Tapi nilai saya kurang.",
      "Dari situ saya cari alternatif dan nemu RevoU—bootcamp Full Stack Software Engineering. Oktober 2025 sampai Juni 2026.",
      "Sebelum RevoU mulai (Juli 2025), saya belajar coding otodidak sambil bantu orang tua jualan di pasar.",
      "Di RevoU belajar Markdown, Git, GitHub, HTML, CSS, Tailwind, JavaScript, TypeScript, Next.js, NestJS, PostgreSQL.",
      "Puncaknya: Final Project—CrackPOS, inventory management system end-to-end.",
      "Sekarang saya mengikuti RevoU Next. Perjalanan masih panjang.",
    ],
  },
];

export const certificates: {
  name: string;
  issuer: string;
  year: number;
  image: string;
}[] = [
  { name: "Revou FSSE — Full-Stack Software Engineering", issuer: "Revou", year: 2026, image: "/images/certs/revou-cert.webp" },
  { name: "Dicoding — Financial Literacy", issuer: "Dicoding", year: 2026, image: "/images/certs/cert2.webp" },
];
