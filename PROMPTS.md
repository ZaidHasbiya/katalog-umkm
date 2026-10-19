# Jurnal Prompt

Catat prompt penting selama membangun aplikasi: apa yang kamu minta, hasilnya, dan perbaikan yang dilakukan. Beri tanda **[SENDIRI]** untuk prompt yang kamu tulis sendiri (bukan dari lembar kerja).

## US-01 Katalog dari database

**Prompt:**
Baca AGENTS.md dan docs/user-stories.md bagian US-01.

Ubah app/page.jsx supaya daftar produk diambil dari tabel "produk" di Supabase, di sisi server, memakai SUPABASE_URL dan SUPABASE_SECRET_KEY dari environment variable. Buat koneksi Supabase untuk server di folder lib/supabase.

Tampilkan produk dengan komponen KartuProduk yang sudah ada, tanpa mengubah tampilannya. Kalau gagal mengambil data, tampilkan pesan error yang jelas di halaman. Kalau tabel kosong, tampilkan tulisan "Belum ada produk". Hapus CatatanBelumAktif dari halaman ini.

**Hasil:**
Viewed user-stories.md:1-100
Viewed rancangan-teknis.md:1-69
Viewed package.json:1-25
Viewed .env.example:1-14
Viewed page.jsx:1-37
Viewed schema.sql:1-49
Viewed DESIGN.md:1-52
Viewed KartuProduk.jsx:1-25
Ran command: List files in lib (`Get-ChildItem -Path lib -Recurse`)
Ran command: List components (`Get-ChildItem -Path components`)
Ran command: List docs (`Get-ChildItem -Path docs`)
Viewed checklist-keamanan.md:1-14
Viewed checklist-pengujian.md:1-27
Viewed skema-database.md:1-27
Viewed .env.local:1-14
Ran command: Test @supabase/supabase-js import (`node -e "const { createClient } = require('@supabase/supabase-js'); console.log(createClient);"`)
Ran command: Test Supabase URL formatting (`node -e "const { createClient } = require('@supabase/supabase-js'); const c1 = createClient('https://bakqwjtcpcqsjkfvibes.supabase.co/rest/v1/', 'fake'); console.log(c1.from('produk').url.toString()); const c2 = createClient('https://bakqwjtcpcqsjkfvibes.supabase.co', 'fake'); console.log(c2.from('produk').url.toString());"`)
Ran command: Test connection with env url (`node -e "require('dotenv').config({ path: '.env.local' }); const { createClient } = require('@supabase/supabase-js'); const c = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SECRET_KEY); c.from('produk').select('*').then(r => console.log('r:', r));"`)
Ran command: Test Supabase query (`node --env-file=.env.local -e "const { createClient } = require('@supabase/supabase-js'); console.log('SUPABASE_URL:', process.env.SUPABASE_URL); const c = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SECRET_KEY); c.from('produk').select('*').then(r => console.log('r:', r));"`)
Ran command: Test query with stripped /rest/v1/ (`node --env-file=.env.local -e "const { createClient } = require('@supabase/supabase-js'); const url = process.env.SUPABASE_URL.replace(/\/rest\/v1\/?$/, ''); const c = createClient(url, process.env.SUPABASE_SECRET_KEY); c.from('produk').select('*').then(r => console.log('r:', r));"`)
Ran command: Search for supabase references (`Select-String -Path "app\**\*", "components\**\*", "lib\**\*", "docs\**\*" -Pattern "supabase"`)
Ran command: Search for supabase in .js, .jsx, .md files (`Get-ChildItem -File -Recurse -Include *.js,*.jsx,*.md | Select-String -Pattern "supabase"`)
Kill node_modules search task
Viewed page.jsx:1-41
Viewed page.jsx:1-28
Viewed data-contoh.js:1-60
Ran command: Search for bahaya in components and app (`Select-String -Path "components\*.jsx", "app\*.jsx" -Pattern "bahaya"`)
Viewed CatatanBelumAktif.jsx:1-10
Viewed globals.css:1-34
Ran command: Check build status (`npm run build`)
Ran command: Check dynamic export in app (`Select-String -Path "app\**\*.jsx" -Pattern "dynamic"`)
Created server.js
Created index.js
Created page.jsx
Ran command: Test Next.js build (`npm run build`)
Ran command: Test lib/supabase helper (`node --env-file=.env.local -e "import('./lib/supabase/index.js').then(async ({ createClient }) => { const supabase = createClient(); const { data, error } = await supabase.from('produk').select('*').order('id', { ascending: true }); console.log('Error:', error); console.log('Data count:', data?.length); console.log('First product:', data?.[0]); });"`)
Created index.js
Ran command: Test createClient from lib/supabase (`node --env-file=.env.local -e "import('./lib/supabase/index.js').then(async ({ createClient }) => { const supabase = createClient(); const { data, error } = await supabase.from('produk').select('*').order('id', { ascending: true }); console.log('Error:', error); console.log('Data count:', data?.length); console.log('First product:', data?.[0]); });"`)
Ran command: Check if port 3000 is in use (`Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue`)
Checked task Check if port 3000 is in use
Ran command: Fetch localhost:3000 (`node -e "fetch('http://localhost:3000').then(r => r.text()).then(t => console.log('Contains Robusta:', t.includes('Kopi Bubuk Robusta'), 'Contains CatatanBelumAktif:', t.includes('CatatanBelumAktif') || t.includes('Masih data contoh'), 'Contains Belum ada produk:', t.includes('Belum ada produk')));"`)
Ran command: Inspect rendered HTML for products (`node -e "fetch('http://localhost:3000').then(r => r.text()).then(t => { const match = t.match(/<section aria-labelledby=\"judul-produk\"[\s\S]*?<\/section>/); console.log(match ? match[0] : 'not found'); });"`)
Ran command: Fetch rendered HTML slice (`powershell -Command "(Invoke-WebRequest -Uri 'http://localhost:3000').Content.Substring(0, 1500)"`)
Checked task Fetch rendered HTML slice
Killed task Fetch rendered HTML slice
Ran command: Verify product titles on page (`node -e "fetch('http://localhost:3000').then(r=>r.text()).then(t=>{ const matches = [...t.matchAll(/<h3[^>]*>(.*?)<\/h3>/g)].map(m=>m[1]); console.log('Products on page:', matches); })"`)
Ran command: Verify production build passes (`npm run build`)

Pekerjaan untuk **US-01: Katalog dari database** telah selesai.

### File yang Ditambahkan & Diubah

1. [lib/supabase/server.js](file:///c:/Users/USER/Documents/katalog-umkm/lib/supabase/server.js) *(Baru)*
   - Membuat fungsi `createClient()` (dan alias `createServerClient()`) menggunakan `@supabase/supabase-js`.
   - Mengambil konfigurasi dari `process.env.SUPABASE_URL` dan `process.env.SUPABASE_SECRET_KEY` di sisi server.
   - Menyediakan sanitasi URL untuk memastikan alamat Supabase tidak terganggu bila ada akhiran `/rest/v1` atau trailing slash.

2. [lib/supabase/index.js](file:///c:/Users/USER/Documents/katalog-umkm/lib/supabase/index.js) *(Baru)*
   - Mengekspor helper client Supabase agar mudah diimpor dari `@/lib/supabase`.

3. [app/page.jsx](file:///c:/Users/USER/Documents/katalog-umkm/app/page.jsx) *(Diubah)*
   - Mengubah komponen menjadi Server Component `async` yang mengambil seluruh daftar produk dari tabel `"produk"` di Supabase.
   - Menampilkan produk menggunakan komponen [`KartuProduk`](file:///c:/Users/USER/Documents/katalog-umkm/components/KartuProduk.jsx) tanpa mengubah tampilannya.
   - Menampilkan pesan error yang informatif jika terjadi kegagalan pengambilan data.
   - Menampilkan teks `"Belum ada produk"` jika tabel kosong.
   - Menghapus komponen `CatatanBelumAktif` dan ketergantungan pada `lib/data-contoh.js`.

---

### Cara Mengetes

1. **Jalankan server aplikasi** (jika belum berjalan):
   ```bash
   npm run dev
   ```
2. **Buka halaman utama di browser**:
   Kunjungi `http://localhost:3000`.
   - Periksa apakah daftar produk yang tampil diambil dari tabel `produk` di Supabase (foto, kategori, nama, dan harga terformat rupiah).
   - Pastikan kotak catatan `CatatanBelumAktif` sudah tidak muncul di halaman.
3. **Uji kondisi tabel kosong**:
   - Jika tabel `produk` di Supabase dikosongkan sementara, halaman akan menampilkan tulisan:
     > *Belum ada produk*
4. **Uji penanganan error**:
   - Jika variabel `SUPABASE_SECRET_KEY` atau `SUPABASE_URL` di `.env.local` sengaja diubah menjadi nilai yang salah lalu server di-restart, halaman akan menampilkan kotak pesan error yang jelas tanpa mengalami crash.
**Perbaikan:**

## US-02 Detail produk

**Prompt:**
Baca docs/user-stories.md bagian US-02.

Ubah app/produk/[id]/page.jsx supaya mengambil satu produk dari tabel "produk" di Supabase berdasarkan id di URL, di sisi server, memakai koneksi Supabase yang sudah dibuat di lib/supabase. Kalau produk tidak ditemukan, panggil notFound(). Jangan ubah tampilannya. Hapus CatatanBelumAktif dari halaman ini, tapi biarkan tombol WhatsApp.
**Hasil:**
Viewed page.jsx:1-41
Created page.jsx
Ran command: Verify build passes (`npm run build`)

Build berhasil. Sekarang saya verifikasi halaman berjalan dengan benar di dev server yang sudah aktif:

Ran command: Verify detail page and 404 (`node -e "Promise.all([fetch('http://localhost:3000/produk/1').then(r=>({status:r.status,ok:r.ok})),fetch('http://localhost:3000/produk/9999').then(r=>({status:r.status,ok:r.ok}))]).then(([p1,p2])=>{console.log('Produk id=1:',p1);console.log('Produk id=9999:',p2)})"`)
Ran command: Check rendered HTML content (`node -e "fetch('http://localhost:3000/produk/1').then(r=>r.text()).then(t=>{console.log('Has name:', t.includes('Kopi Bubuk Robusta'));console.log('Has price:', t.includes('Rp'));console.log('Has WhatsApp:', t.includes('WhatsApp'));console.log('Has CatatanBelumAktif:', t.includes('belum berfungsi'))})"`)
Ran command: Verify product title and description (`node -e "fetch('http://localhost:3000/produk/1').then(r=>r.text()).then(t=>{const m=t.match(/<h1[^>]*>(.*?)<\/h1>/);console.log('H1:',m?m[1]:'not found');console.log('Has deskripsi:',t.includes('robusta'))})"`)

Terlihat produk id=1 di database sebenarnya bernama "Kopi Spesial" (bukan "Kopi Bubuk Robusta" dari data contoh). Itu benar — data sudah diambil dari database, bukan dari `data-contoh.js`. Semua berfungsi:

- ✅ Produk yang ada (id=1) → status 200, menampilkan data dari Supabase
- ✅ Produk yang tidak ada (id=9999) → status 404 (`notFound()`)
- ✅ Tombol WhatsApp tetap ada
- ✅ `CatatanBelumAktif` sudah dihapus

### File yang Diubah

**[app/produk/[id]/page.jsx](file:///c:/Users/USER/Documents/katalog-umkm/app/produk/%5Bid%5D/page.jsx)** — Perubahan:
- Import `createClient` dari `@/lib/supabase` menggantikan `cariProdukContoh` dari `data-contoh.js`
- Mengambil satu produk dari tabel `produk` di Supabase menggunakan `.eq("id", id).single()`
- Jika `error` atau `produk` null → memanggil `notFound()`
- Menghapus import dan penggunaan `CatatanBelumAktif`
- Tampilan dan tombol WhatsApp tidak diubah

### Cara Mengetes

1. Buka `http://localhost:3000`, klik salah satu kartu produk → halaman detail menampilkan data dari database
2. Buka URL produk yang tidak ada, misalnya `http://localhost:3000/produk/9999` → tampil halaman "tidak ditemukan"
3. Pastikan tombol "Pesan via WhatsApp" masih tampil di halaman detail
**Perbaikan:**

## US-03 Pesan via WhatsApp

**Prompt:**

**Hasil:**

**Perbaikan:**

## US-04 Login admin

**Prompt:**

**Hasil:**

**Perbaikan:**

## US-05 Ganti password

**Prompt:**

**Hasil:**

**Perbaikan:**

## US-06 Proteksi halaman admin

**Prompt:**

**Hasil:**

**Perbaikan:**

## Debugging dan fitur bonus

Tambahkan bagian baru untuk setiap error yang kamu perbaiki atau fitur bonus yang kamu kerjakan.
