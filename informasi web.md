# Website Specification & AI Rules: SAKURA (Sensori Aromaterapi dari Kubus Serat Alami)

This document serves as the **master prompt, technical specification, and system rules** for AI code generators (e.g., Kimi K3, Claude, Cursor) to build a highly animated, interactive, kid-friendly static web application using **Svelte / SvelteKit**, tailored for deployment on **Vercel**.

---

## 🚀 1. Executive Summary & Target Deployment

- **Project Name:** SAKURA (Sensori Aromaterapi dari Kubus Serat Alami)
- **Framework:** Svelte / SvelteKit (Static Site Generation / `@sveltejs/adapter-vercel` or `@sveltejs/adapter-static`)
- **Styling & Animation:** Tailwind CSS, Custom CSS Keyframes, Svelte Transitions (`fly`, `fade`, `scale`), Lucide Icons.
- **Deployment Platform:** Vercel
- **Primary Goal:** Create an engaging, cheerful, highly animated, accessible, and interactive showcase for a multisensory cube product designed for children with Autism Spectrum Disorder (ASD) and other special needs.

---

## 🎨 2. UI/UX Design & Aesthetic Rules

### Theme & Atmosphere
- **Target Audience:** Children (especially kids with ASD/special needs), parents, special education teachers (*guru SLB*), and sensory therapists.
- **Visual Style:** Playful, cheerful, energetic, warm, friendly, and child-oriented ("*Ceria & Kid-Friendly*").
- **Core Design Elements:** Rounded corners (`rounded-3xl`), soft shadows, bubbly typography, high contrast for readability, floating sakura blossom petals, bouncy buttons.

### Color Palette Suggestions
- **Primary Pink:** `#FF69B4` / `#FFB6C1` (Sakura blossom theme)
- **Warm Coconut/Earth:** `#8B4513` / `#D2691E` / `#F4A460` (Natural coconut fiber)
- **Coffee Warmth:** `#4A2C2A` / `#6F4E37` (Coffee bean aromatherapy)
- **Playful Accents:** Vibrant pastel yellow (`#FFE66D`), sky blue (`#4ECDC4`), energetic orange (`#FF8C02`), and soft purple (`#A29BFE`).
- **Background Gradient:** Soft warm cream to pastel pink (`#FFF5F6` to `#FFF8E7`).

### Required Animations & Interactive Components
1. **Interactive 3D / Pseudo-3D Cube Component (`Cube3D.svelte`):**
   - A central 3D cube representing SAKURA that users can drag/rotate or click side-by-side.
   - Clicking a side opens a modal or expands an interactive detail card with sound/visual feedback.
2. **Background Animations:**
   - CSS/SVG floating sakura petals drifting across the screen (`animate-float` / keyframe drifted petals).
3. **Micro-Interactions:**
   - Bouncy button hover states (`transform: scale(1.05) rotate(-2deg)`).
   - Card pop-in transitions on scroll.
   - Playful click feedback (confetti or pop effect).

---

## 🏛️ 3. Site Architecture & Page Structure

### 1. Navigation Bar (Header)
- **Logo:** SAKURA (Cherry blossom icon + "Kubus Sensori" badge)
- **Menu Items:** `Beranda`, `Tentang Kami`, `Produk & Fitur`, `Cerita Sukses`, `Hubungi Kami`
- **CTA Button:** `Pesan Sekarang` (Direct WhatsApp link: `https://wa.me/6285735712558`)

### 2. Beranda (Home Page)
- **Hero Section:**
  - **Main Tagline:** "SAKURA - Kubus Sensorik untuk Anak Autis"
  - **Subhead:** "Inovasi media terapi berbasis limbah sabut kelapa dengan stimulasi multisensori, aromaterapi kopi, dan pembelajaran emosi dalam satu kubus multifungsi."
  - **Key Badges:** Stimulasi Multisensori | Bahan Alami Ramah Lingkungan | Terapi & Edukasi | Usia 3-9 Tahun | Aman & Sertifikasi
  - **Interactive Element:** Embedded 3D Cube Preview with "Putar & Jelajahi" prompt.
- **Why Choose SAKURA (Mengapa Memilih SAKURA):**
  - 5 Core Values: Supporting multisensory stimulation, emotional regulation, safe & soft materials, eco-friendly coconut fiber, playful learning design.

### 3. Tentang Kami (About Us Page)
- **Latar Belakang:** Developed by students from **Politeknik Negeri Jember (Polije)** addressing coconut fiber waste in Jember and the lack of affordable sensory therapy media for ASD kids.
- **Visi:** Menjadi media terapi sensorik inovatif berbasis bahan alami yang membantu meningkatkan perkembangan sensorik anak berkebutuhan khusus sekaligus mendorong pemanfaatan limbah sabut kelapa secara berkelanjutan.
- **Misi:**
  1. Mengembangkan media terapi sensorik yang aman, edukatif, dan menyenangkan bagi anak dengan ASD.
  2. Memanfaatkan limbah sabut kelapa sebagai material utama yang ramah lingkungan.
  3. Mengombinasikan aromaterapi kopi untuk memberikan stimulasi relaksasi selama terapi.
  4. Mendukung guru, terapis, dan orang tua dalam proses stimulasi multisensori anak.
  5. Menghasilkan inovasi yang memiliki dampak sosial, pendidikan, dan lingkungan secara berkelanjutan.
- **Tim Pengembang (Team Members):**
  - Siti Anisa
  - Fififan Nur Halimah
  - Najwa Alifa Hamdah

### 4. Produk & Fitur (6 Sisi Kubus Sensorik)
- **Detail 6 Sisi Interaktif:**
  1. **Sisi 1: Sensori Tekstur** — Berbagai tekstur untal/rajut/serat untuk merangsang indra peraba.
  2. **Sisi 2: Pengenalan Emosi** — Emoji/ekspresi wajah untuk mengenal dan memahami emosi anak.
  3. **Sisi 3: Sensori Alam (Biji-bijian)** — Tekstur biji kopi & jagung untuk stimulasi sensorik, kognitif, & aroma relaksasi kopi.
  4. **Sisi 4: Motorik Halus (Resleting & Kancing)** — Melatih kemandirian anak.
  5. **Sisi 5: Aktivitas Interaktif (Tali & Manik-manik)** — Melatih koordinasi tangan & motorik halus dengan menggeser manik-manik.
  6. **Sisi 6: Warna & Bentuk (Geometri)** — Mengenal bentuk geometri dan melatih kognitif anak.

### 5. Cerita Sukses & Validasi Field Test (Success Stories Page)
- **Observasi di SLB Negeri Jember:**
  - **Tanggapan Guru (Ika Ruliatin, S.Pd. - Guru SD Autis SLB Negeri Jember):** Memuji konsep SAKURA karena mengintegrasikan berbagai terapi dalam 1 media. Mendorong pengembangan tidak hanya untuk ASD tetapi juga anak tunanetra, tunarungu, dan hambatan perkembangan lainnya.
- **Uji Coba pada Anak ASD:**
  - **Hasil:** Anak antusias, fokus, tenang, mengeksplorasi 6 sisi secara mandiri, dan belajar dengan pendekatan *learning by playing*.

### 6. Hubungi Kami & Pemesanan (Contact Page)
- **Tagline:** "Sentuhan Keindahan Sakura untuk Anda: Miliki Produk Berkualitas Kami dan Rasakan Manfaatnya"
- **Jam Operasional:**
  - Senin - Rabu: 09.00 – 18.00 WIB
  - Kamis - Jumat: 09.00 – 20.00 WIB
  - Sabtu: 09.00 – 18.00 WIB
  - Minggu: Tutup
- **Alamat:** Jl. Mastrip, Sumbersari, Jember, Jawa Timur, Indonesia (Akses via Google Maps).
- **Kontak Resmi:**
  - **WhatsApp:** 085735712558 (`https://wa.me/6285735712558`)
  - **Instagram:** `@sakura.kubus` (`https://instagram.com/sakura.kubus`)
  - **Email:** `sakura.kubus@gmail.com`

---

## 🛠️ 4. AI Code Generation & Deployment Prompt Instructions

**Instruction for AI Code Generators (Kimi K3 / Claude / Cursor):**

1. **Framework & Adapter:** Generate code structured for **SvelteKit** using `@sveltejs/adapter-vercel` or `@sveltejs/adapter-static`.
2. **Tailwind Setup:** Ensure all classes use Tailwind CSS v3+. Include custom keyframe utilities for floating petals and 3D perspective (`perspective-1000`, `preserve-3d`).
3. **Data Modularity:** Store page text and sensory sides content in structured JS objects (e.g., `src/lib/data/sakura.js`) to keep components clean.
4. **Interactivity Standard:** Make every button feel tactile and bouncy (`transition-all active:scale-95 hover:-translate-y-1 hover:shadow-xl`).
5. **Vercel Readiness:** Ensure all asset paths are relative or static-ready for zero-config Vercel deployments.
