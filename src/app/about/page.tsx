import Image from "next/image";
import Masthead from "@/app/components/Masthead";
import Footer from "@/app/components/Footer";
import styles from "./page.module.css";

// Data Pengalaman / Linimasa
const EXPERIENCES = [
    { year: "2023 — PRESENT", role: "Lead Frontend Engineer", company: "Studio Stardev", loc: "Remote" },
    { year: "2021 — 2023", role: "Creative Developer", company: "Autonomous Media", loc: "Remote" },
    { year: "2019 — 2021", role: "UI/UX & Visual Designer", company: "Form Collective", loc: "Remote" },
];

// Data Keahlian / Disiplin
const DISCIPLINES = [
    "Frontend Architecture (Next.js, React, TypeScript)",
    "Creative Coding & Micro-Interactions",
    "Typography & Editorial Design Systems",
    "Performance Optimization & Web Accessibility",
    "Brand Identity & Art Direction",
];

export default function AboutPage() {
    return (
        <>
            <Masthead />

            <main className={styles.main}>
                <div className="container">
                    {/* 1. Header Judul Halaman */}
                    <header className={styles.pageHeader}>
                        <h1 className={styles.mainTitle}>About Me</h1>
                    </header>

                    {/* 2. Profil Utama (Grid 2 Kolom Editorial) */}
                    <section className={styles.profileGrid}>
                        {/* Kolom Teks / Bio */}
                        <div className={styles.bioColumn}>
                            <h2 className={styles.statement}>
                                Membangun pengalaman web yang presisi, bertipografi tegas, dan berkinerja tinggi.
                            </h2>
                            <p className={styles.bioText}>
                                Halo, saya pengembang kreatif dan desainer visual di balik <strong>stardev®</strong>. Saya berfokus pada titik temu antara arsitektur rekayasa perangkat lunak modern dan keanggunan tata letak media cetak.
                            </p>
                            <p className={styles.bioText}>
                                Saya percaya bahwa website bukan sekadar kumpulan kode fungsional, melainkan ruang pameran digital yang harus memiliki karakter kuat, tenang dari kebisingan visual, dan intuitif bagi setiap pengguna.
                            </p>
                        </div>

                        {/* Kolom Foto Profil Monokrom */}
                        <div className={styles.imageColumn}>
                            <div className={styles.portraitWrapper}>
                                <Image
                                    src="/profile-3.png" // Taruh foto profil Anda di folder public/profile.jpg
                                    alt="Portrait"
                                    fill
                                    priority
                                    className={styles.portrait}
                                />
                            </div>
                        </div>
                    </section>

                    {/* 3. Linimasa Pengalaman (Tabel Editorial Minimalis) */}
                    <section className={styles.sectionBlock}>
                        <div className={styles.sectionHeader}>
                            <h3 className={styles.sectionTitle}>EXPERIENCE & RECORD</h3>
                            <span className={styles.sectionTag}>INDEX / 2019–2025</span>
                        </div>

                        <div className={styles.table}>
                            {EXPERIENCES.map((item, idx) => (
                                <div key={idx} className={styles.tableRow}>
                                    <span className={styles.colYear}>{item.year}</span>
                                    <div className={styles.colRole}>
                                        <span className={styles.roleTitle}>{item.role}</span>
                                        <span className={styles.companyName}>{item.company}</span>
                                    </div>
                                    <span className={styles.colLoc}>{item.loc}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 4. Disiplin & Spesifikasi Teknis */}
                    <section className={styles.sectionBlock}>
                        <div className={styles.sectionHeader}>
                            <h3 className={styles.sectionTitle}>DISCIPLINES & CAPABILITIES</h3>
                            <span className={styles.sectionTag}>CORE FOCUS</span>
                        </div>

                        <div className={styles.disciplinesGrid}>
                            {DISCIPLINES.map((skill, index) => (
                                <div key={index} className={styles.disciplineItem}>
                                    <span className={styles.disciplineNo}>0{index + 1}</span>
                                    <span className={styles.disciplineText}>{skill}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </>
    );
}