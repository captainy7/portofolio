export const notebooks: {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  content?: string[];
}[] = [
  {
    slug: "perjalanan-dari-smk-ke-software-engineer",
    title: "Perjalanan: Dari SMK Teknik Komputer Jaringan ke Software Engineer",
    excerpt:
      "Cerita tentang lulus SMK, kerja di pabrik, gagal masuk UGM, sampai akhirnya menemukan jalan jadi Software Engineer melalui RevoU.",
    date: "2026-07-16",
    tags: ["Journey", "Career", "Motivasi", "Belajar"],
    content: [
      "Lulus dari SMK Teknik Komputer Jaringan di tanggal 6 Mei 2024. Setelah itu, ada program kerja ke Jepang yang sebenarnya sangat saya minati. Tapi karena saya anak tunggal, orang tua belum mengizinkan saya pergi. Saya pun menghormati keputusan itu.",
      "Di tanggal 11-12 Mei 2024, saya melamar kerja di PT 2 Kelinci dan diterima sebagai operator produksi. Hampir satu tahun saya bekerja di sana, dan banyak pelajaran berharga yang saya dapat: kerja sama tim, komunikasi, disiplin target, dan etos kerja yang baik. Pengalaman itu membentuk character saya dalam hal kedisiplinan dan tanggung jawab.",
      "Selama bekerja, saya mulai tertarik lagi untuk melanjutkan pendidikan. Bulan Februari 2025 saya resign dengan niat mau kuliah—teknik informatika. Saya ikut ujian SNBT, berharap bisa masuk UGM. Tapi ternyata nilai saya kurang. Saat itu rasanya kecewa, tapi saya sadar: kuliah 4 tahun terlalu lama untuk saya. Saya butuh jalan yang lebih cepat dan praktis.",
      "Dari situlah saya mulai cari tahu alternatif lain, dan nemu RevoU—bootcamp Full Stack Software Engineering. Dimulai Oktober 2025 sampai Juni 2026, perjalanan belajar yang luar biasa padat tapi seru.",
      "Sebelum RevoU mulai (Juli 2025), saya belajar coding otodidak sambil bantu orang tua jualan di pasar. Belajar HTML, CSS, JavaScript dari nol.",
      "Di RevoU, kita mulai dari Markdown—melatih logika dan alur berpikir. Misalnya: 'gimana cara bikin kopi?' dijabarin step by step. Lalu belajar Git: branch, commit, push, pull. GitHub juga.",
      "Lanjut ke HTML semantik (section, article, dll), CSS styling, Tailwind. Project pertama: portfolio pake HTML CSS. Kemudian JavaScript: async/await, promise, dan TypeScript: interface, type, dll.",
      "Setelah itu Next.js: bikin e-commerce, FE kita yang bikin, BE udah disediain public API. Lalu NestJS untuk backend: controller, service, middleware, PostgreSQL, relasi tabel 1-1, 1-to-many, many-to-many—semua dipelajari.",
      "Puncaknya: Final Project—CrackPOS, inventory management system end-to-end, dari frontend (Next.js + React Query) sampai backend (NestJS + Prisma + PostgreSQL) plus AI service pake Python.",
      "Sekarang saya sedang mengikuti RevoU Next—program job seeker: bikin CV ATS, profile LinkedIn, latihan interview sama SDC dan HRC, bikin portfolio dan project-project selanjutnya.",
      "Perjalanan masih panjang, dan saya bersyukur udah sejauh ini. Dari operator produksi di pabrik, sekarang bisa bikin aplikasi web modern. Bukti kalau latar belakang bukan batasan—yang penting kemauan untuk belajar.",
    ],
  },
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
