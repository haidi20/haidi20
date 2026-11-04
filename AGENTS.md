# Project Rules - haidi20 Portfolio

## Deploy (CI/CD)

- Setiap push ke `main` memicu GitHub Actions: build di CI (bun),
  upload artifact, scp `dist/` ke VPS, restart `haidi20-be`, health check.
- Setelah push, tugas SELESAI - jangan menunggu atau SSH verifikasi ke VPS.
  Status deploy ada di tab Actions repo.
- Folder `dist/` TIDAK di-commit (sudah di-gitignore). Build hanya lewat
  pipeline CI; untuk uji lokal gunakan `cd fe && npm run build` lalu preview.
- Kredensial VPS ada di `.env` lokal (VPS_HOST, VPS_USER, VPS_SSH_KEY).
  Jangan pernah commit kredensial.

## Frontend

- Vue 3 + TypeScript + Vite. State management pakai Pinia.
- Source di `fe/src`, komponen section di `fe/src/components/`.
- Data konten (profil, skills, pengalaman, artikel Medium) di
  `fe/src/stores/profile.ts` dan `fe/src/data/medium.json`.
- Sebelum commit perubahan UI, jalankan `cd fe && npm run build` untuk
  memastikan typecheck + build lolos.
