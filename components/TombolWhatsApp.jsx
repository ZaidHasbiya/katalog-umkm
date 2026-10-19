"use client";

import { useState } from "react";
import { toko } from "@/lib/toko";
import { formatRupiah } from "@/lib/format";

export default function TombolWhatsApp({
  produk,
  jumlah: propJumlah,
  varian: propVarian,
  tampilkanJumlah = true,
}) {
  const [internalJumlah, setInternalJumlah] = useState(1);
  const [internalVarian, setInternalVarian] = useState(
    Array.isArray(produk?.varian) && produk.varian.length > 0 ? produk.varian[0] : ""
  );

  if (!produk) return null;

  const jumlahAktif = propJumlah !== undefined ? propJumlah : internalJumlah;
  const varianAktif = propVarian !== undefined ? propVarian : internalVarian;

  const validJumlah = Math.max(1, parseInt(jumlahAktif, 10) || 1);
  const totalHarga = (produk.harga || 0) * validJumlah;
  const nomor = (toko.nomorWhatsApp || "").replace(/[^0-9]/g, "");

  // Susun isi pesan WhatsApp
  const barisVarian = varianAktif ? `- Varian: ${varianAktif}\n` : "";
  const pesan = `Halo, saya ingin memesan:
- Nama produk: ${produk.nama}
${barisVarian}- Harga satuan: ${formatRupiah(produk.harga)}
- Jumlah: ${validJumlah}
- Total harga: ${formatRupiah(totalHarga)}

Apakah masih tersedia?`;

  const href = `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;

  const handleJumlahChange = (e) => {
    const val = parseInt(e.target.value, 10);
    if (isNaN(val)) {
      setInternalJumlah(1);
    } else {
      setInternalJumlah(Math.max(1, val));
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {tampilkanJumlah && (
        <div className="flex flex-col gap-3">
          {/* Tampilkan pilihan varian hanya jika data varian tersedia di objek produk */}
          {Array.isArray(produk.varian) && produk.varian.length > 0 && (
            <div className="flex flex-col gap-1.5">
              <label htmlFor="varian" className="text-sm font-semibold text-teks">
                Pilih varian:
              </label>
              <select
                id="varian"
                value={varianAktif}
                onChange={(e) => setInternalVarian(e.target.value)}
                className="w-full rounded-lg border border-garis bg-latar px-3 py-2 text-sm text-teks focus:border-utama focus:outline-none sm:w-auto"
              >
                {produk.varian.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Pilihan jumlah produk */}
          <div className="flex flex-wrap items-center gap-3">
            <label htmlFor="jumlah" className="text-sm font-semibold text-teks">
              Jumlah:
            </label>
            <div className="inline-flex items-center rounded-lg border border-garis bg-latar">
              <button
                type="button"
                onClick={() => setInternalJumlah((prev) => Math.max(1, prev - 1))}
                className="flex h-10 w-10 items-center justify-center rounded-l-lg bg-permukaan text-base font-bold text-teks transition-colors hover:bg-garis disabled:opacity-40"
                aria-label="Kurangi jumlah"
                disabled={validJumlah <= 1}
              >
                -
              </button>
              <input
                id="jumlah"
                type="number"
                min="1"
                value={validJumlah}
                onChange={handleJumlahChange}
                className="h-10 w-14 border-x border-garis bg-latar text-center text-sm font-semibold text-teks focus:outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              />
              <button
                type="button"
                onClick={() => setInternalJumlah((prev) => prev + 1)}
                className="flex h-10 w-10 items-center justify-center rounded-r-lg bg-permukaan text-base font-bold text-teks transition-colors hover:bg-garis"
                aria-label="Tambah jumlah"
              >
                +
              </button>
            </div>

            {validJumlah > 1 && (
              <span className="text-sm text-teks-lembut">
                Total: <strong className="text-teks">{formatRupiah(totalHarga)}</strong>
              </span>
            )}
          </div>
        </div>
      )}

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-full items-center justify-center rounded-lg bg-utama px-5 py-3 font-semibold text-white transition-colors hover:bg-utama-gelap sm:w-auto"
      >
        Pesan via WhatsApp
      </a>
    </div>
  );
}
