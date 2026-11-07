"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Deteksi halaman saat ini
import styles from "./Masthead.module.css";

export default function Masthead() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const pathname = usePathname(); // Mendapatkan path (misal: "/" atau "/about")

    // Kunci scroll body saat menu mobile terbuka
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    // Indikator garis pembacaan scroll
    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (totalHeight > 0) {
                setScrollProgress((window.scrollY / totalHeight) * 100);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen((prev) => !prev);
    const closeMenu = () => setIsOpen(false);

    // Fungsi navigasi mulus ke bagian Projects
    const handleWorksClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        closeMenu();

        // Jika sudah di halaman utama ("/"), lakukan smooth scroll kustom
        if (pathname === "/") {
            e.preventDefault();
            const workSection = document.getElementById("work");
            if (workSection) {
                workSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }
        // Jika di halaman lain (misal /about), biarkan Link Next.js mengarahkan ke /#work
    };

    // Fungsi logo: jika di home, scroll mulus kembali ke paling atas
    const handleBrandClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        closeMenu();
        if (pathname === "/") {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };

    return (
        <>
            <header className={styles.header}>
                <div className={`container ${styles.bar}`}>
                    {/* Logo brand */}
                    <Link href="/" className={styles.brand} onClick={handleBrandClick}>
                        stardev®
                    </Link>

                    {/* Navigasi Desktop */}
                    <nav className={styles.desktopNav}>
                        <Link href="/#work" onClick={handleWorksClick}>
                            WORKS
                        </Link>
                        <Link href="/about">ABOUT</Link>
                        <Link href="/contact">CONTACT</Link>
                    </nav>

                    {/* Tombol Hamburger Mobile */}
                    <button
                        type="button"
                        className={`${styles.hamburger} ${isOpen ? styles.active : ""}`}
                        onClick={toggleMenu}
                        aria-label="Toggle Navigation"
                    >
                        <span className={styles.line} />
                        <span className={styles.line} />
                    </button>
                </div>

                {/* Garis indikator scroll */}
                <div
                    className={styles.progressBar}
                    style={{ width: `${scrollProgress}%` }}
                />
            </header>

            {/* Menu Overlay Mobile */}
            <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
                <nav className={styles.mobileNav}>
                    <Link href="/#work" onClick={handleWorksClick}>
                        <span className={styles.menuIndex}>01</span> Works
                    </Link>
                    <Link href="/about" onClick={closeMenu}>
                        <span className={styles.menuIndex}>02</span> About
                    </Link>
                    <Link href="/contact" onClick={closeMenu}>
                        <span className={styles.menuIndex}>03</span> Contact
                    </Link>
                </nav>

                <div className={styles.mobileFooter}>
                    <span>EST. 2026 — INDONESIA</span>
                    <span>AVAILABLE FOR COMMISSIONS</span>
                </div>
            </div>
        </>
    );
}