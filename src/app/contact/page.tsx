"use client";

import { useState } from "react";
import Masthead from "@/app/components/Masthead";
import Footer from "@/app/components/Footer";
import { sendEmailAction } from "@/app/actions/sendEmail";
import styles from "./page.module.css";

export default function ContactPage() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    // Nomor WhatsApp tujuan (gunakan format internasional tanpa tanda +, contoh: 6281234567890)
    const WHATSAPP_NUMBER = "+6281809811311";
    const WA_DEFAULT_MESSAGE = encodeURIComponent(
        "Halo Stardev, saya tertarik untuk berdiskusi mengenai proyek kolaborasi."
    );

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        const form = e.currentTarget;
        const formData = new FormData(form);

        const result = await sendEmailAction(formData);

        if (result.success) {
            setStatus("success");
            form.reset();
        } else {
            setStatus("error");
            setErrorMessage(result.error || "Terjadi kesalahan. Silakan coba lagi.");
        }
    }

    return (
        <>
            <Masthead />

            <main className={styles.main}>
                <div className="container">
                    {/* Header Editorial */}
                    <header className={styles.header}>
                        <h1 className={styles.title}>Get In Touch</h1>
                    </header>

                    <div className={styles.layout}>
                        {/* Kolom Kiri: Informasi Kontak */}
                        <div className={styles.infoCol}>
                            <h2 className={styles.subheading}>
                                Punya proyek baru, tawaran kolaborasi, atau sekadar ingin menyapa?
                            </h2>
                            <p className={styles.desc}>
                                Kirim pesan melalui formulir transmisi di samping atau hubungi langsung melalui saluran instan WhatsApp untuk respon yang lebih cepat.
                            </p>

                            <div className={styles.metaBlock}>
                                <div className={styles.metaItem}>
                                    <span className={styles.metaLabel}>LOCATION / TIMEZONE</span>
                                    <span className={styles.metaVal}>JAKARTA, ID — UTC+7</span>
                                </div>
                            </div>
                        </div>

                        {/* Kolom Kanan: Form Resend & Tombol WhatsApp */}
                        <div className={styles.formCol}>
                            <form onSubmit={handleSubmit} className={styles.form}>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="name" className={styles.label}>
                                        YOUR NAME <span className={styles.req}>*</span>
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        placeholder="e.g. Alex Mercer"
                                        className={styles.input}
                                    />
                                </div>

                                <div className={styles.inputGroup}>
                                    <label htmlFor="email" className={styles.label}>
                                        EMAIL ADDRESS <span className={styles.req}>*</span>
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="e.g. alex@studio.com"
                                        className={styles.input}
                                    />
                                </div>

                                <div className={styles.inputGroup}>
                                    <label htmlFor="subject" className={styles.label}>
                                        SUBJECT / PROJECT TYPE
                                    </label>
                                    <input
                                        id="subject"
                                        name="subject"
                                        type="text"
                                        placeholder="e.g. Website Redesign & Brand Architecture"
                                        className={styles.input}
                                    />
                                </div>

                                <div className={styles.inputGroup}>
                                    <label htmlFor="message" className={styles.label}>
                                        MESSAGE / PROJECT BRIEF <span className={styles.req}>*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={4}
                                        placeholder="Tuliskan gambaran proyek, tenggat waktu, atau pertanyaan Anda..."
                                        className={styles.textarea}
                                    />
                                </div>

                                {/* Notifikasi Status Pengiriman */}
                                {status === "success" && (
                                    <div className={styles.statusSuccess}>
                                        ✓ Message Sent.
                                    </div>
                                )}
                                {status === "error" && (
                                    <div className={styles.statusError}>
                                        ✕ Gagal mengirim: {errorMessage}
                                    </div>
                                )}

                                {/* Tombol Submit Form */}
                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className={styles.submitBtn}
                                >
                                    {status === "loading" ? "Sending....." : "SEND MESSAGE ↗"}
                                </button>
                            </form>

                            {/* Garis Pemisah Editorial */}
                            <div className={styles.divider}>
                                <span>OR FAST INQUIRY</span>
                            </div>

                            {/* Tombol Direct WhatsApp */}
                            <a
                                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WA_DEFAULT_MESSAGE}`}
                                target="_blank"
                                rel="noreferrer"
                                className={styles.waButton}
                            >
                                <span>DIRECT CHAT VIA WHATSAPP</span>
                                <span className={styles.waArrow}>↗</span>
                            </a>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}