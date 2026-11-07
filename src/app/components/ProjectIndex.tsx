// src/components/ProjectIndex.tsx
import { PROJECTS } from "@/data/projects";
import ScrollReveal from "@/app/components/ScrollReveal";
import styles from "./ProjectIndex.module.css";

export default function ProjectIndex() {
    return (
        <section id="work" className={styles.section}>
            <div className="container">
                {/* Judul PROJECTS di posisi tengah */}
                <ScrollReveal>
                    <div className={styles.headerCentered}>
                        <h2 className={styles.heading}>Projects</h2>
                    </div>
                </ScrollReveal>

                {/* Daftar Proyek */}
                <div className={styles.list}>
                    {PROJECTS.map((item, index) => (
                        <ScrollReveal key={item.no} delay={index * 100}>
                            <a
                                href={item.link}
                                target="_blank"             /* <-- Membuka di tab baru */
                                rel="noopener noreferrer"   /* <-- Standar keamanan tautan eksternal */
                                className={styles.item}
                            >
                                <div className={styles.left}>
                                    <span className={styles.no}>{item.no}</span>
                                    <span className={styles.title}>{item.title}</span>
                                </div>
                                <div className={styles.right}>
                                    <span className={styles.role}>{item.role}</span>
                                    <span className={styles.year}>{item.year}</span>
                                    <span className={styles.arrow}>↗</span>
                                </div>
                            </a>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}