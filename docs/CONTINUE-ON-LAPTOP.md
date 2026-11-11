# Sambung kerja dari laptop

Sumber utama projek: https://github.com/yayasanamalmalaysia/karnival25tahun
Branch: main
Laman rasmi: https://amalmalaysia.org.my/karnival25tahun/

Versi figura diluluskan pada 11 November 2026: v11. Hero menggunakan lima aset tempatan dalam src/assets: soutul-amal-original-v3.png, marlina-original-v3.png, latifah-ai-v11.png, prof-ai-v11.png dan figura-baharu-v4.png. Kedudukan berada dalam src/components/Hero.jsx dan src/styles.css. Dua aset AI menyambung pakaian yang sebelum ini kelihatan terpotong.

Untuk laptop baharu, clone repo ini dan gunakan main. Untuk checkout sedia ada yang bersih, jalankan git pull --ff-only origin main sebelum menyunting. ChatGPT/Codex di laptop mesti mempunyai akses repo ini; sejarah chat dan fail komputer tidak diselaraskan secara automatik oleh GitHub.

Arahan ringkas kepada ChatGPT/Codex di laptop:
"Gunakan repo yayasanamalmalaysia/karnival25tahun, branch main. Dapatkan versi terbaru dahulu dan baca docs/CONTINUE-ON-LAPTOP.md. Kekalkan integrasi BCL serta aset figura yang diluluskan."

Pasang dengan pnpm install --frozen-lockfile. Jalankan pnpm dev untuk semakan dan pnpm build untuk menghasilkan dist. Semak desktop dan telefon sebelum push.

Push main mencetuskan workflow GitHub Pages. Domain rasmi menggunakan cPanel dan perlu penerbitan build berasingan yang dibenarkan pengguna. Folder sasaran: /home/yayasan1/public_html/amalmalaysia.org.my/karnival25tahun. Sandarkan index semasa, kekalkan aset hash lama untuk rollback, kemudian semak URL rasmi selepas penerbitan. Jangan anggap push GitHub sebagai bukti laman rasmi sudah dikemas kini.