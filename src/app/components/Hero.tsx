import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.heroWrapper}>
            <div className={styles.artboard}>
                {/* 1. Opsional: Layer Gambar di belakang tulisan */}
                <div className={styles.imageLayer}>
                    <Image
                        src="/bg-4.png" // Opsional: letakkan file gambar di folder public/
                        alt="Texture background"
                        fill
                        priority
                        className={styles.bgImage}
                    />
                </div>

                {/* 2. Konten Teks: stardev ® */}
                <div className={styles.content}>
                    <h1 className={styles.brandTitle}>
                        stardev
                        <span className={styles.registeredMark}>®</span>
                    </h1>
                </div>
            </div>
        </section>
    );
}