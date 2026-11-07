"use client";

import { useEffect, ReactNode } from "react";
import styles from "./template.module.css";

export default function Template({ children }: { children: ReactNode }) {
    // Selalu pastikan posisi layar kembali ke paling atas saat buka halaman baru
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return <div className={styles.simpleFade}>{children}</div>;
}