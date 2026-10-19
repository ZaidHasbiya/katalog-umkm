"use client";

import { useState, useMemo } from "react";
import KartuProduk from "@/components/KartuProduk";

export default function KatalogProduk({ daftarProduk = [] }) {
  const [kataKunci, setKataKunci] = useState("");
  const [kategoriDipilih, setKategoriDipilih] = useState("Semua kategori");

  const kategoriList = useMemo(() => {
    const kategoriUnik = Array.from(
      new Set(daftarProduk.map((p) => p.kategori).filter(Boolean))
    );
    return ["Semua kategori", ...kategoriUnik];
  }, [daftarProduk]);

  const produkTersaring = useMemo(() => {
    const query = kataKunci.toLowerCase().trim();
    return daftarProduk.filter((produk) => {
      const cocokNama = !query || (produk.nama || "").toLowerCase().includes(query);
      const cocokKategori =
        kategoriDipilih === "Semua kategori" || produk.kategori === kategoriDipilih;
      return cocokNama && cocokKategori;
    });
  }, [daftarProduk, kataKunci, kategoriDipilih]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <div>
          <input
            type="search"
            value={kataKunci}
            onChange={(e) => setKataKunci(e.target.value)}
            placeholder="Cari nama produk..."
            className="w-full rounded-lg border border-garis bg-latar px-3.5 py-2.5 text-sm text-teks placeholder:text-teks-lembut focus:border-utama focus:outline-none"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {kategoriList.map((kategori) => (
            <button
              key={kategori}
              type="button"
              onClick={() => setKategoriDipilih(kategori)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors sm:text-sm ${
                kategoriDipilih === kategori
                  ? "bg-utama text-white"
                  : "border border-garis bg-latar text-teks-lembut hover:border-utama hover:text-utama"
              }`}
            >
              {kategori}
            </button>
          ))}
        </div>
      </div>

      {produkTersaring.length === 0 ? (
        <p className="py-8 text-center text-teks-lembut">Produk tidak ditemukan</p>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {produkTersaring.map((produk) => (
            <KartuProduk key={produk.id} produk={produk} />
          ))}
        </div>
      )}
    </div>
  );
}

