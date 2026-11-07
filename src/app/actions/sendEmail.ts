"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmailAction(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
        return { success: false, error: "Mohon lengkapi semua kolom yang wajib diisi." };
    }

    try {
        const data = await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>", // Ganti dengan domain terverifikasi Anda jika ada
            to: process.env.CONTACT_EMAIL_RECEIVER || "emailanda@domain.com",
            replyTo: email,
            subject: `[INQUIRY] ${subject || "Pesan Baru dari Portfolio"} - ${name}`,
            text: `Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`,
        });

        if (data.error) {
            return { success: false, error: data.error.message };
        }

        return { success: true };
    } catch (err: unknown) {
        const errorMsg = err instanceof Error ? err.message : "Gagal mengirim pesan.";
        return { success: false, error: errorMsg };
    }
}