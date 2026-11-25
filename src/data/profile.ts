// =====================================================================
//  Semua isi website ada di file ini. Ubah teks di sini untuk mengganti
//  konten; tidak perlu menyentuh file komponen.
// =====================================================================

export type Project = {
  title: string;
  description: string;
  /** Teknologi yang tampil di kartu. */
  stack: string[];
  /** Kategori untuk tombol filter, harus sama persis dengan salah satu `projectFilters`. */
  filters: string[];
  /** Path gambar di folder /public, mis. "/projects/warehaus.png". Kosongkan jika belum ada. */
  image?: string;
  links?: { label: string; href: string }[];
  /** Catatan kecil di kartu, mis. "Repository privat". */
  note?: string;
};

export type Education = {
  institution: string;
  major: string;
  period: string;
  url?: string;
};

export type Experience = {
  role: string;
  organization: string;
  period: string;
  points: string[];
};

/** Level: 3 = mahir, 2 = menengah, 1 = dasar. Ukuran chip mengikuti level. */
export type Skill = { name: string; level: 1 | 2 | 3 };

export const profile = {
  name: "Bagas Wicaksono",
  shortName: "Bagas",
  role: "Fullstack Web & Backend Developer",
  status: "Mencari magang semester 6",
  intro:
    "Membangun aplikasi web dari antarmuka sampai API dan database: REST API dengan C# dan ASP.NET Core, aplikasi web dengan Laravel dan React.",
  location: "Surabaya, Indonesia",
  email: "bagas16.bw@gmail.com",
  /** Path foto di folder /public, mis. "/profile.jpg". Kosongkan untuk memakai inisial. */
  photo: "/profile.png",
  cv: "/cv.pdf",
  socials: {
    github: { label: "Wicakzz", href: "https://github.com/Wicakzz" },
    linkedin: { label: "Bagas Wicaksono", href: "https://www.linkedin.com/in/bagas-wicaksono-863a94195/" },
  },
  about: [
    "Saya mahasiswa Teknik Informatika di Politeknik Elektronika Negeri Surabaya (PENS) yang fokus di dua sisi: **fullstack web development** dan **backend development**. Saya terbiasa merancang database, menulis logika bisnis, membangun REST API, lalu menghubungkannya ke frontend.",
    "Proyek terbesar saya adalah WareHaus, sistem manajemen gudang yang backend-nya saya kerjakan dengan ASP.NET Core, PostgreSQL, dan Docker, dan aplikasinya sudah rilis di Google Play Store. Di luar kode, saya aktif di kepanitiaan HIMIT PENS.",
  ],
};

export const skillGroups: { title: string; skills: Skill[] }[] = [
  {
    title: "Backend",
    skills: [
      { name: "C# / .NET", level: 3 },
      { name: "ASP.NET Core", level: 3 },
      { name: "REST API", level: 3 },
      { name: "PostgreSQL", level: 3 },
      { name: "Entity Framework Core", level: 2 },
      { name: "PHP / Laravel", level: 2 },
      { name: "MySQL", level: 2 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "JavaScript", level: 2 },
      { name: "TypeScript", level: 2 },
      { name: "React", level: 2 },
      { name: "Tailwind CSS", level: 2 },
    ],
  },
  {
    title: "Tools & Cloud",
    skills: [
      { name: "Git / GitHub", level: 3 },
      { name: "Docker", level: 2 },
      { name: "Swagger / OpenAPI", level: 2 },
      { name: "AWS", level: 1 },
    ],
  },
];

export const projectFilters = [".NET", "Laravel", "React"];

export const projects: Project[] = [
  {
    title: "WareHaus — Warehouse Management System",
    description:
      "Sistem manajemen gudang di bawah PT Sindika yang sudah rilis di Google Play Store. Saya membangun arsitektur backend dan REST API inti (inventory, order, shipment), merancang database dengan Entity Framework Core dan PostgreSQL, serta menyiapkan lingkungan berbasis Docker.",
    stack: ["ASP.NET Core", "C#", "PostgreSQL", "Docker", "Clean Architecture"],
    filters: [".NET"],
    image: "/projects/warehaus.png",
    note: "Backend Developer · Apr 2026 — sekarang",
    links: [{ label: "Lihat Website", href: "https://warehaus.web.app/" }],
  },
  {
    title: "Room Booking System",
    description:
      "Aplikasi web untuk memesan ruangan: melihat ketersediaan, membuat pemesanan, dan mengelola data ruangan. Frontend React + TypeScript terhubung ke REST API ASP.NET Core dengan Entity Framework Core.",
    stack: ["React", "TypeScript", "ASP.NET Core", "EF Core", "SQLite"],
    filters: [".NET", "React"],
    links: [
      { label: "Frontend Repository", href: "https://github.com/Wicakzz/2026-roombooking-frontend" },
      { label: "Backend Repository", href: "https://github.com/Wicakzz/2026-roombooking-backend" },
    ],
  },
  {
    title: "App Pegawai",
    description:
      "Aplikasi web pengelolaan data pegawai berbasis Laravel: menambah, melihat detail, mengubah, dan menghapus data pegawai (nama, kontak, alamat, tanggal masuk, status aktif) dengan tampilan Blade dan layout bersama.",
    stack: ["Laravel", "PHP", "Eloquent", "Blade", "SQLite"],
    filters: ["Laravel"],
    note: "Repository privat",
  },
];

export const education: Education[] = [
  {
    institution: "Politeknik Elektronika Negeri Surabaya",
    major: "Teknik Informatika",
    period: "2024 — sekarang",
    url: "https://www.pens.ac.id/",
  },
  {
    institution: "SMA Negeri 2 Sidoarjo",
    major: "MIPA",
    period: "2021 — 2024",
  },
];

export const educationNote =
  "Di PENS saya mengikuti pelatihan kepemimpinan LKMM Pra-TD & TD serta orientasi himpunan mahasiswa (OPP & OB).";

export const experiences: Experience[] = [
  {
    role: "Organizing Committee — Outbound Regenerasi Mahasiswa",
    organization: "HIMIT PENS",
    period: "Sep 2026 — sekarang",
    points: [
      "Mengoordinasikan logistik, pelaksanaan rundown, dan protokol keselamatan program outbound regenerasi himpunan 2026.",
      "Bekerja dalam tim lintas divisi untuk mengelola kegiatan lapangan bagi lebih dari 150 mahasiswa baru.",
      "Menangani pemecahan masalah dan manajemen risiko secara langsung di lapangan.",
    ],
  },
  {
    role: "Panitia Pengawas Pemilu (Panwaslu)",
    organization: "HIMIT PENS",
    period: "Des 2025 — Feb 2026",
    points: [
      "Mengawasi seluruh siklus pemilihan ketua himpunan (Suksesi) agar sesuai dengan konstitusi.",
      "Memverifikasi syarat calon dan menangani sengketa kampanye secara netral.",
      "Mengaudit prosedur pemungutan dan penghitungan suara agar transparan dan adil.",
    ],
  },
];

export const certifications = [
  { name: "AWS Academy Graduate — Cloud Foundations", issuer: "Amazon Web Services Training and Certification", year: "2026" },
];
