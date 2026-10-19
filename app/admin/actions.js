"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createSessionClient } from "@/lib/supabase/server";

export async function loginAdmin(prevState, formData) {
  const data = formData instanceof FormData ? formData : prevState;
  const email = data?.get?.("email")?.toString()?.trim() || "";
  const password = data?.get?.("password")?.toString() || "";

  if (!email || !password) {
    return { error: "Email dan password wajib diisi." };
  }

  let success = false;
  try {
    const supabase = await createSessionClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      const pesan =
        error.message === "Invalid login credentials"
          ? "Email atau password salah."
          : error.message || "Gagal masuk. Periksa kembali email dan password.";
      return { error: pesan };
    }

    success = true;
  } catch (err) {
    return {
      error: err.message || "Terjadi kesalahan saat memproses login.",
    };
  }

  if (success) {
    revalidatePath("/admin", "layout");
    redirect("/admin");
  }
}

export async function keluarAdmin() {
  try {
    const supabase = await createSessionClient();
    await supabase.auth.signOut();
  } catch {
    // Abaikan error jika sesi sudah tidak valid
  }

  revalidatePath("/admin", "layout");
  redirect("/admin/login");
}

export async function gantiPasswordAdmin(prevState, formData) {
  try {
    const supabase = await createSessionClient();
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    // Wajib periksa login di server sebelum menjalankan aksi yang mengubah data
    if (userError || !user) {
      return { error: "Sesi tidak ditemukan atau telah kedaluwarsa. Silakan masuk kembali." };
    }

    const data = formData instanceof FormData ? formData : prevState;
    const passwordBaru = data?.get?.("password_baru")?.toString() || "";
    const konfirmasiPassword = data?.get?.("konfirmasi_password")?.toString() || "";

    if (!passwordBaru || passwordBaru.length < 8) {
      return { error: "Password baru minimal 8 karakter." };
    }

    if (passwordBaru !== konfirmasiPassword) {
      return { error: "Password baru dan konfirmasi password tidak sama." };
    }

    const { error: updateError } = await supabase.auth.updateUser({
      password: passwordBaru,
    });

    if (updateError) {
      return { error: updateError.message || "Gagal mengganti password." };
    }

    return { success: true, message: "Password berhasil diganti." };
  } catch (err) {
    return { error: err.message || "Terjadi kesalahan saat mengganti password." };
  }
}

export const gantiPassword = gantiPasswordAdmin;

export async function tambahProduk(prevState, formData) {
  try {
    const supabase = await createSessionClient();
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    // Wajib periksa login di server sebelum menjalankan aksi yang mengubah data
    if (userError || !user) {
      return { error: "Sesi tidak ditemukan atau telah kedaluwarsa. Silakan masuk kembali." };
    }

    const data = formData instanceof FormData ? formData : prevState;
    const nama = data?.get?.("nama")?.toString()?.trim() || "";
    const kategori = data?.get?.("kategori")?.toString()?.trim() || "";
    const hargaRaw = data?.get?.("harga")?.toString()?.trim() || "";
    const deskripsi = data?.get?.("deskripsi")?.toString()?.trim() || "";
    const foto_url = data?.get?.("foto_url")?.toString()?.trim() || "";

    if (!nama) {
      return { error: "Nama produk wajib diisi." };
    }

    if (!kategori) {
      return { error: "Kategori wajib diisi." };
    }

    const harga = parseInt(hargaRaw, 10);
    if (isNaN(harga) || harga < 0) {
      return { error: "Harga harus berupa angka yang valid dan tidak boleh negatif." };
    }

    const produkBaru = { nama, harga, kategori };
    if (deskripsi) produkBaru.deskripsi = deskripsi;
    if (foto_url) produkBaru.foto_url = foto_url;

    const { error: insertError } = await supabase.from("produk").insert(produkBaru);

    if (insertError) {
      return { error: insertError.message || "Gagal menyimpan produk." };
    }
  } catch (err) {
    return { error: err.message || "Terjadi kesalahan saat menyimpan produk." };
  }

  revalidatePath("/admin");
  revalidatePath("/");
  redirect("/admin");
}
