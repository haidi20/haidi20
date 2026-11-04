import { defineStore } from 'pinia';

export interface Profile {
  name: string;
  role: string;
  location: string;
  email: string;
  linkedinUrl: string;
  githubUrl: string;
  about: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

export interface Education {
  school: string;
  degree: string;
  period: string;
}

export const useProfileStore = defineStore('profile', {
  state: () => ({
    profile: {
      name: 'Haidi Nurhadinata',
      role: 'Full Stack Developer',
      location: 'Samarinda, Kalimantan Timur, Indonesia',
      email: 'nhaidii@yahoo.com',
      linkedinUrl: 'https://www.linkedin.com/in/haidi-nurhadinata/',
      githubUrl: 'https://github.com/haidi20',
      about:
        'Lulusan Politeknik Negeri Samarinda jurusan Teknologi Informasi. Fokus membangun aplikasi web dan ERP end-to-end: dari desain database, API, hingga antarmuka yang cepat dan rapi. Berpengalaman di industri pertambangan dan kesehatan, dengan kebiasaan mengutamakan arsitektur modular, testing, dan deployment otomatis.',
    } as Profile,
    skills: [
      { category: 'Front-End', items: ['Vue 3', 'TypeScript', 'Pinia', 'Bootstrap 5'] },
      { category: 'Back-End', items: ['Laravel', 'Express.js', 'REST API', 'MySQL', 'SQL Server'] },
      { category: 'Mobile', items: ['Flutter', 'Java (Android)'] },
      { category: 'DevOps', items: ['Docker', 'Nginx', 'Jenkins', 'GitHub Actions', 'CI/CD'] },
      { category: 'Testing', items: ['Pest PHP', 'Vitest', 'Postman/Newman'] },
    ] as SkillGroup[],
    experiences: [
      {
        role: 'Full Stack Developer',
        company: 'PT Batuah Energi Prima',
        period: 'Jul 2022 — Apr 2023',
        location: 'Kutai Kartanegara, Kalimantan Timur',
        description: [
          'Mengembangkan aplikasi ERP (Enterprise Resource Planning) untuk mendukung operasional perusahaan tambang.',
          'Merancang skema database produksi tambang: unit, lokasi muat/buang, material, dan data produksi harian.',
        ],
      },
      {
        role: 'Mobile Developer',
        company: 'Mandaya',
        period: 'Agu 2020 — Des 2021',
        location: 'Samarinda, Kalimantan Timur',
        description: [
          'Mengembangkan aplikasi Job Pending berbasis Android untuk pencatatan pekerjaan harian (PKH) di lapangan tambang, termasuk tingkat bahaya dan waktu eksekusi.',
          'Membangun aplikasi manajemen kantin untuk mess karyawan: pencatatan pengambilan makanan pagi/siang/malam.',
        ],
      },
      {
        role: 'System Administrator',
        company: 'Perusahaan tambang',
        period: 'Sebelum 2020',
        location: 'Kalimantan Timur',
        description: [
          'Mengelola infrastruktur server dan Windows Server untuk kebutuhan operasional kantor maupun lapangan.',
        ],
      },
    ] as Experience[],
    education: {
      school: 'Politeknik Negeri Samarinda',
      degree: 'D4 Teknologi Informasi',
      period: 'Lulus',
    } as Education,
  }),
});
