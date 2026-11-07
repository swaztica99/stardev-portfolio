import styles from "./AboutColophon.module.css";

export default function AboutColophon() {
    return (
        <section id="info" className={styles.section}>
            <div className="container">
                <div className={styles.content}>
                    <p className={styles.statement}>
                        Tersedia untuk proyek terpilih, art direction, dan konsultasi desain.
                    </p>
                    <div className={styles.meta}>
                        <span>JAKARTA, ID</span>
                        <span>UTC+7</span>
                        <span>INDEX 2026</span>
                    </div>
                </div>
            </div>
        </section>
    );
}