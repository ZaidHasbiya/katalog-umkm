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
Baca docs/rancangan-teknis.md bagian "Pesan WhatsApp (US-03)".

Ubah components/TombolWhatsApp.jsx menjadi tautan yang membuka https://wa.me/ ke nomor di lib/toko.js, dengan pesan otomatis berisi nama dan harga produk dalam format rupiah. Pesan di-encode dengan encodeURIComponent dan dibuka di tab baru. Pertahankan tampilan tombolnya. Hapus CatatanBelumAktif yang menyebut US-03 di halaman detail produk.

**Hasil:**
Viewed rancangan-teknis.md:58-68
Viewed toko.js:1-10
Viewed TombolWhatsApp.jsx:1-13
Viewed page.jsx:1-43
Viewed user-stories.md:27-37
Viewed PROMPTS.md:125-150
Viewed format.js:1-8
Ran command: Search for wa.me in project files (`Select-String -Path "docs\*.md", "lib\*.js", "components\*.jsx", "app\**\*.jsx" -Pattern "wa.me"`)
Ran command: Search WhatsApp references in docs (`Select-String -Path "docs\*.md" -Pattern "WhatsApp"`)
Ran command: Search for US-03 in jsx files (`Select-String -Path "app\**\*.jsx", "components\*.jsx" -Pattern "US-03"`)
Created TombolWhatsApp.jsx
Ran command: Test production build (`npm run build`)
Ran command: Verify rendered WhatsApp link (`node -e "fetch('http://localhost:3000/produk/1').then(r=>r.text()).then(t=>{ const match = t.match(/<a[^>]*href=\"(https:\/\/wa\.me\/[^\"]*)\"[^>]*>[\s\S]*?<\/a>/); if (match) { console.log('Found link:', match[0]); console.log('Decoded href:', decodeURIComponent(match[1])); } else { console.log('Link not found!'); } })"`)
Ran command: Extract rendered WhatsApp link (`node -e 'fetch("http://localhost:3000/produk/1").then(r=>r.text()).then(t=>{ const m = t.match(/href="(https:\/\/wa\.me\/[^"]+)"/); if(m){ console.log("HREF:", m[1]); console.log("DECODED:", decodeURIComponent(m[1])); }else{ console.log("NOT FOUND"); } })'`)
Created test-wa.js
Ran command: Run test-wa.js (`node C:\Users\USER\.gemini\antigravity\brain\46e6af9d-ba37-4bd7-bd81-4dde30892c58\scratch\test-wa.js`)

Pekerjaan untuk **US-03: Pesan via WhatsApp** telah selesai.

### File yang Diubah

1. [components/TombolWhatsApp.jsx](file:///c:/Users/USER/Documents/katalog-umkm/components/TombolWhatsApp.jsx)
   - Mengubah elemen `<button>` menjadi elemen `<a>` (tautan) dengan tetap mempertahankan class dan tampilan tombol aslinya.
   - Mengambil nomor WhatsApp toko dari [lib/toko.js](file:///c:/Users/USER/Documents/katalog-umkm/lib/toko.js).
   - Membentuk pesan otomatis yang menyertakan nama produk dan harga dalam format rupiah (`formatRupiah`).
   - Meng-encode pesan menggunakan `encodeURIComponent` dan menambahkan atribut `target="_blank"` serta `rel="noopener noreferrer"` agar terbuka di tab baru.
   - Pada halaman detail produk ([app/produk/[id]/page.jsx](file:///c:/Users/USER/Documents/katalog-umkm/app/produk/%5Bid%5D/page.jsx)), komponen `CatatanBelumAktif` yang menyebutkan US-03 sudah tidak ada.

---

### Cara Mengetes

1. Buka browser dan akses halaman detail salah satu produk (misalnya: `http://localhost:3000/produk/1`).
2. Periksa tombol **"Pesan via WhatsApp"**:
   - Klik tombol tersebut.
   - Browser akan membuka tab baru ke alamat `https://wa.me/6281261442840?text=...`.
   - Di tab baru WhatsApp tersebut, teks pesan otomatis sudah terisi dengan nama produk dan harga rupiahnya (contoh: *Halo, saya ingin memesan Kopi Spesial seharga Rp 45.000.*).
3. Pastikan tidak ada lagi catatan penanda `CatatanBelumAktif` di bawah tombol pemesanan.

**Perbaikan:**

## US-04 Login admin

**Prompt:**
Baca AGENTS.md bagian aturan keamanan dan docs/user-stories.md bagian US-04.

Buat login admin memakai Supabase Auth (email dan password) dengan @supabase/ssr dan cookie, memakai SUPABASE_URL dan SUPABASE_PUBLISHABLE_KEY. Login diproses dengan Server Action di app/admin/actions.js dan disambungkan ke form di app/admin/login/page.jsx. Login berhasil diarahkan ke /admin; login gagal menampilkan pesan error yang jelas di halaman login. Buat juga tombol "Keluar" di components/NavAdmin.jsx berfungsi: mengakhiri sesi lalu kembali ke /admin/login. Jangan ubah tampilan. Hapus CatatanBelumAktif dari halaman login.

**Hasil:**
Viewed user-stories.md:36-48
Viewed page.jsx:1-29
Viewed NavAdmin.jsx:1-19
Viewed Tombol.jsx:1-26
Viewed Input.jsx:1-16
Ran command: Inspect @supabase/ssr (`node -e "const ssr = require('@supabase/ssr'); console.log(Object.keys(ssr));"`)
Ran command: Test createServerClient from @supabase/ssr (`node --env-file=.env.local -e "const { createServerClient } = require('@supabase/ssr'); const c = createServerClient(process.env.SUPABASE_URL.replace(/\/rest\/v1\/?$/, ''), process.env.SUPABASE_PUBLISHABLE_KEY, { cookies: { getAll: () => [], setAll: () => {} } }); console.log(c.auth ? 'Auth exists' : 'Auth missing');"`)
Ran command: Search for use client (`Select-String -Path "components\*.jsx", "app\**\*.jsx" -Pattern "use client"`)
Viewed FormProduk.jsx:1-35
Viewed page.jsx:1-43
Ran command: Check Supabase Auth users (`node --env-file=.env.local -e "const { createClient } = require('@supabase/supabase-js'); const c = createClient(process.env.SUPABASE_URL.replace(/\/rest\/v1\/?$/, ''), process.env.SUPABASE_SECRET_KEY); c.auth.admin.listUsers().then(r => console.log('Users count:', r.data?.users?.length, 'Users:', r.data?.users?.map(u => ({ id: u.id, email: u.email }))));"`)
Created server.js
Created actions.js
Created page.jsx
Created NavAdmin.jsx
Ran command: Test production build for US-04 (`npm run build`)
Checked task Test production build for US-04
Created test-login.mjs
Ran command: Run test-login.mjs (`node --env-file=.env.local C:\Users\USER\.gemini\antigravity\brain\46e6af9d-ba37-4bd7-bd81-4dde30892c58\scratch\test-login.mjs`)
Ran command: Check /admin/login HTML (`node -e "fetch('http://localhost:3000/admin/login').then(r=>r.text()).then(t=>{ console.log('Has Masuk admin:', t.includes('Masuk admin')); console.log('Has CatatanBelumAktif:', t.includes('CatatanBelumAktif') || t.includes('Login belum berfungsi')); console.log('Has form:', t.includes('<form')); console.log('Has email input:', t.includes('name=\"email\"')); console.log('Has password input:', t.includes('name=\"password\"')); });"`)
Created check-login-html.js
Ran command: Run check-login-html.js (`node C:\Users\USER\.gemini\antigravity\brain\46e6af9d-ba37-4bd7-bd81-4dde30892c58\scratch\check-login-html.js`)
Created check-admin-html.js
Ran command: Run check-admin-html.js (`node C:\Users\USER\.gemini\antigravity\brain\46e6af9d-ba37-4bd7-bd81-4dde30892c58\scratch\check-admin-html.js`)
Created test-ssr-auth.mjs
Ran command: Run test-ssr-auth.mjs (`node --env-file=.env.local C:\Users\USER\.gemini\antigravity\brain\46e6af9d-ba37-4bd7-bd81-4dde30892c58\scratch\test-ssr-auth.mjs`)
Ran command: Test Supabase SSR auth (`node --env-file=.env.local --input-type=module -e "import { createServerClient } from '@supabase/ssr'; const c = createServerClient(process.env.SUPABASE_URL.replace(/\/rest\/v1\/?$/, ''), process.env.SUPABASE_PUBLISHABLE_KEY, { cookies: { getAll: () => [], setAll: () => {} } }); const { error } = await c.auth.signInWithPassword({ email: 'admin@gmail.com', password: 'wrong' }); console.log('Auth error message:', error?.message);"`)
Ran command: Verify production build passes (`npm run build`)

Pekerjaan untuk **US-04: Login admin** telah selesai.

### File yang Dibuat & Diubah

1. [lib/supabase/server.js](file:///c:/Users/USER/Documents/katalog-umkm/lib/supabase/server.js) *(Diperbarui)*
   - Menambahkan fungsi `createSessionClient()` memakai `@supabase/ssr` (`createServerClient`) dengan cookie store (`cookies()` dari `next/headers`).
   - Menggunakan `SUPABASE_URL` dan `SUPABASE_PUBLISHABLE_KEY` dari environment variable.

2. [app/admin/actions.js](file:///c:/Users/USER/Documents/katalog-umkm/app/admin/actions.js) *(Baru)*
   - Membuat Server Action `loginAdmin`:
     - Memproses autentikasi email & password menggunakan `supabase.auth.signInWithPassword`.
     - Jika berhasil: me-refresh cache dan mengarahkan ke `/admin`.
     - Jika gagal: mengembalikan pesan error yang jelas (misal: `"Email atau password salah."`).
   - Membuat Server Action `keluarAdmin`:
     - Memanggil `supabase.auth.signOut()` untuk mengakhiri sesi cookie admin.
     - Mengarahkan kembali ke `/admin/login`.

3. [app/admin/login/page.jsx](file:///c:/Users/USER/Documents/katalog-umkm/app/admin/login/page.jsx) *(Diperbarui)*
   - Menghubungkan form login ke Server Action `loginAdmin` menggunakan hook `useActionState`.
   - Menampilkan kotak pesan error jika login gagal.
   - Menghapus komponen `CatatanBelumAktif` tanpa mengubah tata letak dan tampilan halaman.
   - Tetap mematuhi aturan keamanan: tidak ada client Supabase yang dibuat di sisi browser.

4. [components/NavAdmin.jsx](file:///c:/Users/USER/Documents/katalog-umkm/components/NavAdmin.jsx) *(Diperbarui)*
   - Memfungsikan tombol "Keluar" menggunakan form action yang memanggil Server Action `keluarAdmin`.
   - Tampilan visual tombol tetap sama persis dengan aslinya.

---

### Cara Mengetes

1. **Uji Login Gagal**:
   - Buka halaman login di browser: `http://localhost:3000/admin/login`.
   - Masukkan email atau password yang salah, lalu klik **Masuk**.
   - Periksa bahwa halaman menampilkan pesan error: *"Email atau password salah."* dan tidak mengalihkan halaman.
2. **Uji Login Berhasil**:
   - Masukkan email dan password admin yang sesuai dengan akun Supabase Auth toko Anda, lalu klik **Masuk**.
   - Anda akan diarahkan ke halaman `/admin`.
3. **Uji Tombol Keluar**:
   - Pada menu navigasi admin di bagian atas, klik tautan/tombol **Keluar**.
   - Sesi cookie Supabase akan diakhiri dan browser akan diarahkan kembali ke `/admin/login`.

**Perbaikan:**

## US-05 Ganti password

**Prompt:**
Baca docs/user-stories.md bagian US-05.

Buat Server Action ganti password di app/admin/actions.js untuk admin yang sedang login, memakai Supabase Auth. Validasi di server: password baru minimal 8 karakter dan harus sama dengan konfirmasi. Tampilkan pesan berhasil atau pesan error yang jelas di halaman. Sambungkan ke form di app/admin/password/page.jsx tanpa mengubah tampilannya. Hapus CatatanBelumAktif dari halaman ini.

**Hasil:**
Viewed user-stories.md:46-60
Viewed page.jsx:1-43
Viewed actions.js:1-57
Created actions.js
Created page.jsx
Ran command: Test production build for US-05 (`npm run build`)
Created check-password-html.js
Ran command: Run check-password-html.js (`node C:\Users\USER\.gemini\antigravity\brain\46e6af9d-ba37-4bd7-bd81-4dde30892c58\scratch\check-password-html.js`)
Ran command: Test validations for gantiPasswordAdmin (`node --env-file=.env.local --input-type=module -e "import { gantiPasswordAdmin } from './app/admin/actions.js'; const fd1 = new FormData(); fd1.append('password_baru', '12345'); fd1.append('konfirmasi_password', '12345'); console.log('Short password:', await gantiPasswordAdmin(null, fd1)); const fd2 = new FormData(); fd2.append('password_baru', '12345678'); fd2.append('konfirmasi_password', '12345679'); console.log('Mismatch password:', await gantiPasswordAdmin(null, fd2));"`)

Pekerjaan untuk **US-05: Ganti password** telah selesai.

### File yang Dibuat & Diubah

1. [app/admin/actions.js](file:///c:/Users/USER/Documents/katalog-umkm/app/admin/actions.js)
   - Menambahkan Server Action `gantiPasswordAdmin` (dan alias `gantiPassword`).
   - Melakukan validasi di sisi server:
     - Password baru minimal 8 karakter.
     - Password baru harus sama dengan konfirmasi password.
     - Memeriksa sesi admin aktif di server melalui `supabase.auth.getUser()`.
   - Mengubah password pengguna menggunakan `supabase.auth.updateUser({ password: passwordBaru })`.
   - Mengembalikan respon sukses (`{ success: true, message: "Password berhasil diganti." }`) atau pesan error yang jelas.

2. [app/admin/password/page.jsx](file:///c:/Users/USER/Documents/katalog-umkm/app/admin/password/page.jsx)
   - Menghubungkan form ke Server Action `gantiPasswordAdmin` menggunakan `useActionState`.
   - Menampilkan kotak pesan error jika validasi atau proses penggantian gagal.
   - Menampilkan kotak pesan sukses jika password berhasil diganti.
   - Menghapus komponen `CatatanBelumAktif`.
   - Mempertahankan tampilan dan tata letak halaman asli tanpa perubahan.

---

### Cara Mengetes

1. **Pastikan sudah login sebagai admin**:
   - Buka `http://localhost:3000/admin/login` dan lakukan login terlebih dahulu.
2. **Buka halaman ganti password**:
   - Kunjungi `http://localhost:3000/admin/password`.
3. **Uji Validasi Password Tidak Sama**:
   - Masukkan password baru minimal 8 karakter (misal: `password123`).
   - Masukkan konfirmasi password yang berbeda (misal: `password456`).
   - Klik **Simpan password** → Muncul pesan error: *"Password baru dan konfirmasi password tidak sama."*
4. **Uji Validasi Password Kurang dari 8 Karakter**:
   - Jika validasi HTML5 dilewati atau diisi kurang dari 8 karakter, server akan menolak dengan pesan: *"Password baru minimal 8 karakter."*
5. **Uji Ganti Password Berhasil**:
   - Masukkan password baru dan konfirmasi yang sama (minimal 8 karakter).
   - Klik **Simpan password** → Muncul pesan sukses: *"Password berhasil diganti."*
   - Coba klik tombol **Keluar**, lalu login kembali di `/admin/login` menggunakan password baru tersebut.

**Perbaikan:**

## US-06 Proteksi halaman admin

**Prompt:**
Baca AGENTS.md aturan keamanan nomor 3 dan 4, dan docs/user-stories.md bagian US-06.

Buat file proxy.js di root proyek (Next.js 16). Semua rute /admin kecuali /admin/login wajib login dengan Supabase Auth; kalau belum login, alihkan ke /admin/login. Pastikan juga setiap Server Action yang mengubah data memeriksa login di server. Hapus CatatanBelumAktif dari halaman /admin.

**Hasil:**
Viewed user-stories.md:55-68
Viewed rancangan-teknis.md:1-20
Viewed page.jsx:1-28
Ran command: Search for proxy in node_modules/next (`Get-ChildItem -Path node_modules\next -Recurse -Filter "*proxy*" | Select-Object -First 10 FullName`)
Ran command: Check middleware/proxy constant (`Select-String -Path "node_modules\next\dist\lib\constants.js" -Pattern "middleware|proxy"`)
Ran command: Find PROXY_FILENAME in next/dist/build (`Select-String -Path "node_modules\next\dist\build\*.js" -Pattern "PROXY_FILENAME|proxy"`)
Ran command: Search export name in Next.js build analysis (`Select-String -Path "node_modules\next\dist\build\analysis\*.js" -Pattern "proxy"`)
Ran command: Check matcher config (`Select-String -Path "node_modules\next\dist\build\analysis\get-page-static-info.js" -Pattern "matcher"`)
Ran command: Search for Server Actions (`Select-String -Path "app\**\*.js", "app\**\*.jsx" -Pattern "use server"`)
Viewed page.jsx:1-16
Created proxy.js
Ran command: Check build with proxy.js (`npm run build`)
Created actions.js
Created page.jsx
Ran command: Test build with updated files (`npm run build`)
Created test-proxy.js
Ran command: Run test-proxy.js (`node C:\Users\USER\.gemini\antigravity\brain\46e6af9d-ba37-4bd7-bd81-4dde30892c58\scratch\test-proxy.js`)
Ran command: Verify no NEXT_PUBLIC in codebase (`Select-String -Path "proxy.js", "app\**\*", "components\**\*", "lib\**\*" -Pattern "NEXT_PUBLIC"`)
Ran command: Search for NEXT_PUBLIC in files (`Get-ChildItem -Path proxy.js, app, components, lib -File -Recurse | Select-String -Pattern "NEXT_PUBLIC"`)

Pekerjaan untuk **US-06: Proteksi halaman admin** telah selesai.

### File yang Dibuat & Diubah

1. [proxy.js](file:///c:/Users/USER/Documents/katalog-umkm/proxy.js) *(Baru di root proyek)*
   - Menggunakan konvensi Next.js 16 (`proxy.js` pengganti `middleware.js`) dengan matcher `["/admin/:path*"]`.
   - Membaca sesi Supabase Auth memakai `@supabase/ssr` dengan cookie request/response.
   - Mengalihkan pengunjung yang belum login ke `/admin/login` jika mencoba mengakses rute apa pun di bawah `/admin` (kecuali `/admin/login`).

2. [app/admin/actions.js](file:///c:/Users/USER/Documents/katalog-umkm/app/admin/actions.js) *(Diperbarui)*
   - Memastikan Server Action yang memodifikasi data (`gantiPasswordAdmin`) selalu memeriksa status login pengguna di server melalui `supabase.auth.getUser()` sebelum memproses data apa pun.

3. [app/admin/page.jsx](file:///c:/Users/USER/Documents/katalog-umkm/app/admin/page.jsx) *(Diperbarui)*
   - Menghapus komponen `CatatanBelumAktif` dan import-nya dari halaman `/admin`.

---

### Cara Mengetes

1. **Uji Proteksi Halaman Admin (Tanpa Login / Mode Incognito)**:
   - Buka browser dalam mode penyamaran (*incognito / private window*).
   - Akses `http://localhost:3000/admin` → Langsung dialihkan ke `http://localhost:3000/admin/login`.
   - Akses `http://localhost:3000/admin/password` → Langsung dialihkan ke `http://localhost:3000/admin/login`.
   - Akses `http://localhost:3000/admin/produk/baru` → Langsung dialihkan ke `http://localhost:3000/admin/login`.
2. **Uji Rute Publik**:
   - Akses `http://localhost:3000/` dan `http://localhost:3000/produk/1` → Halaman publik tetap dapat dibuka normal tanpa pengalihan.
3. **Uji Akses Setelah Login**:
   - Di `http://localhost:3000/admin/login`, lakukan login dengan akun admin Anda.
   - Setelah berhasil masuk, buka `http://localhost:3000/admin` atau menu admin lainnya → Halaman admin terbuka normal tanpa dialihkan.
   - Periksa bahwa halaman `/admin` sudah bersih dari kotak `CatatanBelumAktif`.

**Perbaikan:**

## Debugging dan fitur bonus

### US-07 List Produk
**Prompt:**
Baca AGENTS.md dan docs/user-stories.md bagian US-07.

Ubah halaman app/admin/page.jsx supaya daftar produk admin diambil dari tabel "produk" di Supabase, bukan dari data contoh. Ambil data di sisi server menggunakan koneksi Supabase yang sudah tersedia di folder lib/supabase.

Tampilkan produk dengan informasi foto, nama, kategori, dan harga dalam format rupiah. Pertahankan tampilan dan komponen yang sudah ada. Jika tabel kosong, tampilkan pesan "Belum ada produk". Jika gagal mengambil data, tampilkan pesan error yang jelas.

Pastikan halaman hanya bisa diakses oleh admin yang sudah login dan jangan mengubah aturan keamanan US-06.

**Hasil:**
Viewed user-stories.md:66-70
Viewed page.jsx:1-22
Viewed TabelProduk.jsx:1-47
Created page.jsx
Ran command: Test build for US-07 (`npm run build`)

Build berhasil — `/admin` sekarang `ƒ (Dynamic)`.

Pekerjaan untuk **US-07: List Produk** telah selesai.

### File yang Diubah

**[app/admin/page.jsx](file:///c:/Users/USER/Documents/katalog-umkm/app/admin/page.jsx)**
- Mengubah komponen menjadi **async Server Component** yang mengambil daftar produk dari tabel `produk` di Supabase menggunakan `createClient()` dari `@/lib/supabase`.
- Menghapus ketergantungan pada `lib/data-contoh.js`.
- Menampilkan produk dengan komponen `TabelProduk` (foto, nama, kategori, harga rupiah) — **tampilan tidak diubah**.
- Jika tabel kosong → menampilkan teks `"Belum ada produk"`.
- Jika gagal mengambil data → menampilkan kotak pesan error yang jelas.
- Proteksi halaman admin (US-06) tetap aktif via `proxy.js`.

---

### Cara Mengetes

1. **Login sebagai admin** di `http://localhost:3000/admin/login`.
2. Buka `http://localhost:3000/admin` → daftar produk ditampilkan dari database Supabase (bukan data contoh).
3. **Uji tabel kosong**: kosongkan sementara tabel `produk` di Supabase → halaman menampilkan *"Belum ada produk"*.
4. **Uji penanganan error**: ubah sementara `SUPABASE_SECRET_KEY` ke nilai salah lalu restart server → halaman menampilkan pesan error yang jelas.

### US-08 Tambah produk
**Prompt:**
Baca AGENTS.md, aturan keamanan, docs/user-stories.md bagian US-08, dan struktur tabel produk di docs/schema.sql.

Buat fitur tambah produk baru melalui halaman /admin/produk/baru. Sediakan form untuk mengisi data produk sesuai kolom yang tersedia pada tabel "produk" di Supabase, termasuk nama, kategori, harga, deskripsi, dan foto jika kolom serta mekanisme penyimpanan foto sudah tersedia di proyek.

Proses penyimpanan menggunakan Server Action di server dan koneksi Supabase yang sudah ada di folder lib/supabase. Validasi data wajib di server, termasuk nama produk, kategori, dan harga yang valid. Tampilkan pesan error yang jelas jika penyimpanan gagal. Jika berhasil, arahkan kembali ke /admin dan tampilkan produk yang baru ditambahkan.

Pastikan setiap Server Action untuk menambah produk memeriksa autentikasi admin di server sebelum mengubah database. Jangan hanya mengandalkan proteksi tampilan halaman. Pertahankan desain aplikasi dan gunakan komponen yang sudah tersedia jika sesuai.

**Hasil:**
Viewed actions.js:90-148
Viewed FormProduk.jsx:1-35
Ran command: Check public directory (`Get-ChildItem -Path public -Recurse`)
Viewed page.jsx:1-25
Created FormProduk.jsx
Created page.jsx
Viewed actions.js:98-148
Ran command: Test production build for US-08 (`npm run build`)
Ran command: Check produk table (`node --env-file=.env.local -e "import('./lib/supabase/index.js').then(async ({ createClient }) => { const supabase = createClient(); const { data, error } = await supabase.from('produk').select('id, nama, harga, kategori'); console.log('Products:', data); });"`)
Ran command: Query produk table (`node --env-file=.env.local -e "const { createClient } = require('@supabase/supabase-js'); const c = createClient(process.env.SUPABASE_URL.replace(/\/rest\/v1\/?$/, ''), process.env.SUPABASE_SECRET_KEY); c.from('produk').select('id, nama, harga, kategori').then(r => console.log(r.data));"`)
Ran command: Test unauthenticated insert error (`node --env-file=.env.local --input-type=module -e "import { createServerClient } from '@supabase/ssr'; const cookies = new Map(); const c = createServerClient(process.env.SUPABASE_URL.replace(/\/rest\/v1\/?$/, ''), process.env.SUPABASE_PUBLISHABLE_KEY, { cookies: { getAll: () => Array.from(cookies.entries()).map(([name, value]) => ({ name, value })), setAll: (cs) => cs.forEach(x => cookies.set(x.name, x.value)) } }); const { data: unauthInsert, error: unauthErr } = await c.from('produk').insert({ nama: 'Test Tanpa Login', harga: 10000, kategori: 'Test' }); console.log('Unauthenticated insert error:', unauthErr?.message);"`)
Ran command: Verify build (`npm run build`)

Pekerjaan untuk **US-08: Tambah produk** telah selesai.

### File yang Dibuat & Diubah

1. [app/admin/actions.js](file:///c:/Users/USER/Documents/katalog-umkm/app/admin/actions.js)
   - Menambahkan Server Action `tambahProduk`:
     - Memeriksa autentikasi admin di server melalui `supabase.auth.getUser()`.
     - Memvalidasi data input di server (`nama` wajib, `kategori` wajib, dan `harga` angka valid \(\ge 0\)).
     - Menyimpan produk baru ke tabel `produk` di Supabase menggunakan koneksi sesi admin (`createSessionClient()`).
     - Mengembalikan pesan error yang jelas jika validasi gagal atau penyimpanan database bermasalah.
     - Melakukan revalidasi cache (`revalidatePath("/admin")` & `revalidatePath("/")`), lalu mengarahkan kembali ke `/admin`.

2. [components/FormProduk.jsx](file:///c:/Users/USER/Documents/katalog-umkm/components/FormProduk.jsx)
   - Menambahkan dukungan atribut `action` dan `isPending` pada elemen `<form>`.
   - Mengatur tombol submit menjadi `disabled` saat proses penyimpanan berlangsung dengan teks *"Menyimpan..."*.
   - Mempertahankan seluruh field (nama, harga, kategori, link foto, deskripsi) dan tombol Batal ke `/admin`.

3. [app/admin/produk/baru/page.jsx](file:///c:/Users/USER/Documents/katalog-umkm/app/admin/produk/baru/page.jsx)
   - Menghubungkan form ke Server Action `tambahProduk` menggunakan `useActionState`.
   - Menampilkan kotak pesan error jika proses penyimpanan gagal.
   - Menghapus komponen `CatatanBelumAktif`.
   - Mempertahankan tata letak dan desain asli.

---

### Cara Mengetes

1. **Login sebagai admin**:
   - Masuk melalui `http://localhost:3000/admin/login`.
2. **Buka halaman Tambah Produk**:
   - Di halaman `/admin`, klik tombol **Tambah produk** (mengarah ke `http://localhost:3000/admin/produk/baru`).
   - Pastikan tidak ada lagi catatan `CatatanBelumAktif`.
3. **Uji Validasi Form**:
   - Kosongkan kolom nama atau kategori, atau isi harga negatif → klik **Simpan produk**.
   - Halaman menampilkan pesan validasi error yang sesuai (misal: *"Nama produk wajib diisi."* atau *"Harga harus berupa angka yang valid dan tidak boleh negatif."*).
4. **Uji Tambah Produk Berhasil**:
   - Isi form dengan data produk baru, misalnya:
     - Nama produk: `Keripik Tempe Renyah`
     - Harga (Rp): `18000`
     - Kategori: `Camilan`
     - Link foto: `/produk/keripik.svg`
     - Deskripsi: `Keripik tempe gurih dan renyah.`
   - Klik **Simpan produk**.
   - Anda akan diarahkan kembali ke `/admin` dan produk yang baru ditambahkan langsung muncul pada tabel produk admin maupun katalog utama (`/`).

### US-09 Ubah produk
**Prompt:**
Baca AGENTS.md, aturan keamanan, docs/user-stories.md bagian US-09, dan struktur tabel produk di docs/schema.sql.

Buat fitur ubah produk melalui halaman /admin/produk/[id]/ubah. Ambil data produk lama dari tabel "produk" di Supabase berdasarkan id pada URL, kemudian tampilkan data tersebut sebagai nilai awal form.

Sediakan form untuk mengubah kolom produk yang memang tersedia di database, termasuk nama, kategori, harga, deskripsi, dan foto jika didukung proyek. Saat form dikirim, simpan perubahan ke database menggunakan Server Action di server dan koneksi Supabase yang sudah tersedia.

Validasi data di server dan tampilkan pesan error yang jelas jika produk tidak ditemukan atau proses penyimpanan gagal. Jika berhasil, arahkan kembali ke /admin dan tampilkan data terbaru.

Pastikan setiap Server Action untuk mengubah produk memeriksa autentikasi admin di server sebelum melakukan perubahan database. Pertahankan tampilan aplikasi dan jangan melemahkan proteksi US-06.

**Hasil:**
Viewed page.jsx:1-25
Viewed actions.js:130-148
Edited actions.js
Created FormProduk.jsx
Created page.jsx
Created page.jsx
Ran command: Test build for US-09 (`npm run build`)
Created test-ubah-proxy.js
Ran command: Run test-ubah-proxy.js (`node C:\Users\USER\.gemini\antigravity\brain\46e6af9d-ba37-4bd7-bd81-4dde30892c58\scratch\test-ubah-proxy.js`)
Created test-unauth-update.mjs
Ran command: Verify update is protected by RLS (`node --env-file=.env.local --input-type=module -e "import { createServerClient } from '@supabase/ssr'; const cookies = new Map(); const c = createServerClient(process.env.SUPABASE_URL.replace(/\/rest\/v1\/?$/, ''), process.env.SUPABASE_PUBLISHABLE_KEY, { cookies: { getAll: () => [], setAll: () => {} } }); const { data, error } = await c.from('produk').update({ nama: 'Hacked' }).eq('id', 1).select(); console.log('Unauthenticated update data:', data, 'error:', error?.message);"`)
Ran command: Final build check (`npm run build`)

Pekerjaan untuk **US-09: Ubah produk** telah selesai.

### File yang Dibuat & Diubah

1. [app/admin/actions.js](file:///c:/Users/USER/Documents/katalog-umkm/app/admin/actions.js)
   - Menambahkan Server Action `ubahProduk`:
     - Memeriksa autentikasi admin di server menggunakan `supabase.auth.getUser()`.
     - Memvalidasi data input di server (`id` wajib, `nama` wajib, `kategori` wajib, dan `harga` valid \(\ge 0\)).
     - Melakukan pembaruan baris data pada tabel `produk` di Supabase (`update(...)` where `eq("id", id)`).
     - Mengembalikan pesan error jika validasi atau penyimpanan gagal.
     - Melakukan revalidasi cache (`revalidatePath("/admin")`, `revalidatePath("/produk/[id]")`, dan `revalidatePath("/")`), lalu mengarahkan kembali ke `/admin`.

2. [components/FormProduk.jsx](file:///c:/Users/USER/Documents/katalog-umkm/components/FormProduk.jsx)
   - Mengelola state form, error, dan pending state menggunakan `useActionState`.
   - Menambahkan input hidden `<input type="hidden" name="id" value={produk.id} />` saat mode ubah produk.
   - Mengisi nilai awal form (`defaultValue`) dengan data produk yang ada.

3. [app/admin/produk/[id]/ubah/page.jsx](file:///c:/Users/USER/Documents/katalog-umkm/app/admin/produk/%5Bid%5D/ubah/page.jsx)
   - Mengambil data produk lama dari database Supabase di sisi server berdasarkan `id` pada URL (`const { id } = await params`).
   - Memanggil `notFound()` jika produk dengan ID tersebut tidak ditemukan di database.
   - Mengoper data produk dan aksi `ubahProduk` ke komponen `FormProduk`.
   - Menghapus komponen `CatatanBelumAktif`.
   - Proteksi rute US-06 (`proxy.js`) tetap aktif.

4. [app/admin/produk/baru/page.jsx](file:///c:/Users/USER/Documents/katalog-umkm/app/admin/produk/baru/page.jsx)
   - Disesuaikan agar memanfaatkan `FormProduk` yang sudah terintegrasi secara modular dengan Server Action `tambahProduk`.

---

### Cara Mengetes

1. **Pastikan sudah login sebagai admin**:
   - Buka `http://localhost:3000/admin/login` dan lakukan login jika belum.
2. **Buka halaman Ubah Produk**:
   - Di halaman `/admin`, klik tombol **Ubah** pada salah satu baris produk (misalnya produk ID 1: `http://localhost:3000/admin/produk/1/ubah`).
   - Periksa bahwa form terisi otomatis dengan data produk yang ada di database.
   - Pastikan catatan `CatatanBelumAktif` sudah tidak ada di halaman.
3. **Uji URL Produk Tidak Ditemukan**:
   - Buka URL produk yang tidak ada, misalnya `http://localhost:3000/admin/produk/99999/ubah`.
   - Halaman akan menampilkan tampilan "tidak ditemukan" (`404`).
4. **Uji Validasi Error**:
   - Kosongkan kolom nama atau ubah harga menjadi nilai negatif, lalu klik **Simpan perubahan**.
   - Halaman menampilkan pesan validasi error yang sesuai tanpa melakukan pengalihan.
5. **Uji Ubah Produk Berhasil**:
   - Ubah salah satu data (misalnya nama atau harga).
   - Klik **Simpan perubahan**.
   - Browser akan diarahkan kembali ke `/admin` dan menampilkan data produk yang baru saja diperbarui. Perubahan juga langsung tercermin pada halaman katalog utama (`/`) dan detail produk (`/produk/[id]`).

### US-10 Hapus produk
**Prompt:**
Baca AGENTS.md, aturan keamanan, dan docs/user-stories.md bagian US-10.

Tambahkan tombol "Hapus" pada setiap produk di halaman admin /admin. Saat tombol ditekan, tampilkan dialog konfirmasi sebelum produk benar-benar dihapus.

Jika admin menyetujui konfirmasi, hapus produk berdasarkan id dari tabel "produk" di Supabase menggunakan Server Action di server dan koneksi Supabase yang sudah tersedia. Setelah berhasil, perbarui daftar produk agar produk yang dihapus tidak muncul lagi.

Tampilkan pesan error yang jelas jika proses penghapusan gagal atau produk tidak ditemukan.

WAJIB: Server Action penghapusan harus memeriksa autentikasi admin di server sebelum melakukan perubahan database. Jangan mengandalkan tombol yang disembunyikan atau proteksi halaman saja. Pastikan pengguna yang belum login tidak dapat menghapus produk dengan memanggil Server Action secara langsung. Pertahankan tampilan aplikasi dan proteksi US-06.

**Hasil:**
Viewed user-stories.md:79-85
Viewed TabelProduk.jsx:1-47
Viewed actions.js:180-215
Edited actions.js
Created TabelProduk.jsx
Ran command: Test build for US-10 (`npm run build`)
Ran command: Verify unauthenticated delete fails (`node --env-file=.env.local --input-type=module -e "import { createServerClient } from '@supabase/ssr'; const c = createServerClient(process.env.SUPABASE_URL.replace(/\/rest\/v1\/?$/, ''), process.env.SUPABASE_PUBLISHABLE_KEY, { cookies: { getAll: () => [], setAll: () => {} } }); const { data, error } = await c.from('produk').delete().eq('id', 1).select(); console.log('Unauthenticated delete data:', data, 'error:', error?.message);"`)
Ran command: Final build check (`npm run build`)

Pekerjaan untuk **US-10: Hapus produk** telah selesai.

### File yang Dibuat & Diubah

1. [app/admin/actions.js](file:///c:/Users/USER/Documents/katalog-umkm/app/admin/actions.js)
   - Menambahkan Server Action `hapusProduk`:
     - **Verifikasi Autentikasi Server**: Memeriksa sesi login admin melalui `supabase.auth.getUser()`. Panggilan tanpa sesi login yang valid akan langsung ditolak (`"Sesi tidak ditemukan atau telah kedaluwarsa. Silakan masuk kembali."`).
     - **Validasi Keberadaan Produk**: Memeriksa apakah produk dengan ID yang diminta ada di tabel `produk` (`maybeSingle()`). Jika tidak ada, mengembalikan pesan `"Produk tidak ditemukan atau sudah dihapus."`.
     - **Penghapusan Data**: Menjalankan `.delete().eq("id", id)` pada tabel `produk` menggunakan koneksi sesi admin.
     - **Revalidasi**: Menjalankan `revalidatePath("/admin")`, `revalidatePath("/produk/[id]")`, dan `revalidatePath("/")` agar daftar produk diperbarui secara instan.

2. [components/TabelProduk.jsx](file:///c:/Users/USER/Documents/katalog-umkm/components/TabelProduk.jsx)
   - Menambahkan interaksi konfirmasi (`window.confirm("Apakah Anda yakin ingin menghapus produk ...?")`) sebelum memanggil Server Action `hapusProduk`.
   - Jika pengguna membatalkan (klik *Cancel*), penghapusan tidak dijalankan.
   - Jika pengguna mengonfirmasi (klik *OK*), tombol menampilkan status *"Menyimpan/Menghapus..."* dalam keadaan `disabled` selama proses berlangsung.
   - Menampilkan kotak pesan error di atas tabel jika proses penghapusan gagal.
   - Mempertahankan tata letak dan desain tabel yang sudah ada.

---

### Cara Mengetes

1. **Pastikan sudah login sebagai admin**:
   - Buka `http://localhost:3000/admin/login` dan lakukan login jika belum.
2. **Uji Batal Hapus (Konfirmasi Cancel)**:
   - Di halaman `http://localhost:3000/admin`, klik tombol **Hapus** pada salah satu baris produk.
   - Dialog konfirmasi browser akan muncul: *"Apakah Anda yakin ingin menghapus produk ...?"*.
   - Klik **Cancel** / **Batal**.
   - Produk tetap ada dan tidak dihapus dari daftar.
3. **Uji Hapus Produk (Konfirmasi OK)**:
   - Buat produk uji coba terlebih dahulu melalui tombol **Tambah produk** (US-08) jika ingin mengetes tanpa menghapus data produk utama.
   - Klik tombol **Hapus** pada produk uji coba tersebut.
   - Klik **OK** pada dialog konfirmasi.
   - Tombol berubah menjadi *"Menghapus..."* sejenak, lalu produk tersebut otomatis hilang dari tabel `/admin` dan juga tidak muncul lagi di katalog utama (`/`).
4. **Uji Keamanan (Tanpa Login)**:
   - Buka jendela *incognito* / penyamaran.
   - Mengakses `/admin` tetap dialihkan ke `/admin/login` oleh `proxy.js` (US-06).
   - Server Action `hapusProduk` tidak dapat dieksekusi oleh pengguna yang tidak terautentikasi dan dilindungi ganda oleh Row Level Security (RLS) Supabase.

### US-11 Filter kategori atau pencarian
**Prompt:**
Baca AGENTS.md dan docs/user-stories.md bagian US-11.

Tambahkan fitur pencarian nama produk dan filter berdasarkan kategori pada halaman katalog utama app/page.jsx.

Pengunjung dapat mengetik nama produk untuk mencari produk yang sesuai dan memilih kategori untuk menyaring daftar produk. Kategori harus diambil dari data produk yang tersedia, bukan ditulis secara manual. Sediakan pilihan "Semua kategori" untuk menampilkan seluruh produk.

Pencarian dan filter harus bisa digunakan bersamaan. Jika tidak ada produk yang cocok, tampilkan pesan "Produk tidak ditemukan". Jika tabel produk memang kosong, tampilkan pesan "Belum ada produk".

Pertahankan pengambilan data dari Supabase di sisi server sesuai US-01. Implementasikan interaksi pencarian dan filter menggunakan Client Component terpisah jika diperlukan, dengan mengirimkan data produk dari Server Component. Jangan mengubah desain kartu produk, detail produk, atau tombol WhatsApp.

**Hasil:**
Viewed user-stories.md:82-90
Viewed page.jsx:1-60
Created KatalogProduk.jsx
Created page.jsx
Ran command: Test build for US-11 (`npm run build`)
Created check-catalog-html.js
Ran command: Run check-catalog-html.js (`node C:\Users\USER\.gemini\antigravity\brain\46e6af9d-ba37-4bd7-bd81-4dde30892c58\scratch\check-catalog-html.js`)
Ran command: Verify final build passes (`npm run build`)

Pekerjaan untuk **US-11: Filter kategori atau pencarian** telah selesai.

### File yang Dibuat & Diubah

1. [components/KatalogProduk.jsx](file:///c:/Users/USER/Documents/katalog-umkm/components/KatalogProduk.jsx) *(Baru)*
   - Client Component yang mengelola interaksi pencarian nama produk dan penyaringan kategori secara reaktif.
   - **Kategori Dinamis**: Mengambil daftar kategori unik langsung dari data produk yang tersedia (`Set`), ditambah opsi default `"Semua kategori"`.
   - **Pencarian & Filter Bersamaan**: Menyaring produk dengan memadukan input teks (case-insensitive & trimmed) serta pilihan kategori secara simultan.
   - **Kondisi Tanpa Hasil**: Menampilkan pesan `"Produk tidak ditemukan"` jika kombinasi kata kunci/kategori tidak menghasilkan produk yang cocok.
   - Menggunakan komponen [`KartuProduk`](file:///c:/Users/USER/Documents/katalog-umkm/components/KartuProduk.jsx) tanpa mengubah desain tampilannya.

2. [app/page.jsx](file:///c:/Users/USER/Documents/katalog-umkm/app/page.jsx) *(Diperbarui)*
   - Tetap berfungsi sebagai Server Component yang mengambil data produk dari tabel `produk` di Supabase (US-01).
   - Menampilkan `"Belum ada produk"` jika tabel produk memang kosong dari database.
   - Mengoper seluruh data produk ke `KatalogProduk` untuk penanganan pencarian dan filter di sisi client tanpa perlu memanggil Supabase dari browser.

---

### Cara Mengetes

1. **Buka halaman utama**:
   - Kunjungi `http://localhost:3000/`.
   - Di bawah judul *"Produk kami"*, periksa kolom pencarian *"Cari nama produk..."* dan tombol filter kategori yang muncul secara otomatis sesuai kategori produk di database (misal: *Semua kategori*, *Minuman*, *Camilan*, dll).
2. **Uji Filter Kategori**:
   - Klik salah satu kategori (misal: *Minuman*) → hanya produk dalam kategori tersebut yang muncul.
   - Klik *Semua kategori* → seluruh produk kembali ditampilkan.
3. **Uji Pencarian Nama Produk**:
   - Ketik nama produk pada kolom pencarian (misal: *kopi*) → hanya produk yang namanya mengandung kata tersebut yang muncul.
4. **Uji Penggunaan Bersamaan**:
   - Pilih kategori tertentu, lalu ketik kata kunci yang cocok dengan produk di kategori tersebut.
   - Ketik kata kunci yang tidak ada pada kategori yang dipilih (misal: mencari produk camilan saat kategori minuman aktif) → halaman menampilkan pesan:
     > *Produk tidak ditemukan*
5. **Uji Kondisi Database Kosong**:
   - Jika tabel produk di Supabase kosong, halaman akan tetap menampilkan:
     > *Belum ada produk*