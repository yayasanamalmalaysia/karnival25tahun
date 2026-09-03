# Draf Festival Labohan Dagang @25 tahun YAM

Frontend React/Vite untuk semakan design, susunan kandungan dan aliran pendaftaran.

Tarikh tutup pendaftaran yang dipaparkan: **16 September 2026**.

## Jalankan secara tempatan

```bash
pnpm install
pnpm dev
```

Preview dibuka pada laluan `/karnival25tahun/`.

## Integrasi BCL

- Fun Run dan Baju Jubli Perak menggunakan URL serta script BCL yang sama sebagai dummy untuk demonstrasi fungsi.
- Paparan dilabel **Mod dummy** kerana nama produk dan medan dalam borang masih mengikut borang asal.
- Untuk versi live, gantikan setiap `embedUrl` dengan borang BCL akhir bagi pilihan berkenaan.
- Konfigurasi berada dalam `src/data/event.js` dan komponen embed berada dalam `src/components/BCLCheckout.jsx`.

## Peta Fun Run

- Peta 3D sinematik dimasukkan dalam seksyen pendaftaran Fun Run.
- Jarak dipaparkan sebagai **Anggaran 5 KM** dan laluan masih tertakluk kepada pengesahan akhir penganjur.
- Aset berada di `public/assets/funrun-route-3d-draft.png`.

## Cadangan GitHub dan domain

1. Gunakan repo khusus, contohnya `yayasan-amal-malaysia/karnival25tahun`.
2. Jadikan branch `main` sebagai sumber produksi dan gunakan pull request untuk perubahan kandungan/design.
3. Build dengan `pnpm build`; output berada dalam `dist/`.
4. Hos build di server/domain utama YAM pada subfolder `/karnival25tahun/` atau sambungkan deployment platform kepada repo yang sama.
5. URL sasaran: `https://amalmalaysia.org.my/karnival25tahun/`.

Setiap push ke branch `main` akan mencetuskan workflow GitHub Pages. Untuk domain rasmi, kandungan build dalam `dist/` perlu disalin ke folder hosting `/karnival25tahun/`.

## Preview GitHub Pages

Workflow `.github/workflows/deploy-pages.yml` membina dan menerbitkan branch `main` secara automatik ke:

`https://yayasanamalmalaysia.github.io/karnival25tahun/`

GitHub Pages ialah pautan semakan. URL rasmi yang dicadangkan kekal `https://amalmalaysia.org.my/karnival25tahun/` selepas build dimuat naik atau disambungkan ke hosting YAM.
