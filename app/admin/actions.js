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

