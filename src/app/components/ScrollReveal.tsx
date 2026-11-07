"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import styles from "./ScrollReveal.module.css";

interface ScrollRevealProps {
    children: ReactNode;
    delay?: number; // Delay dalam milidetik (misal: 100, 200 untuk efek berurutan)
    className?: string;
}

export default function ScrollReveal({
    children,
    delay = 0,
    className = "",
}: ScrollRevealProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // Animasi dipicu sekali saat terlihat
                }
            },
            {
                threshold: 0.15, // Muncul saat 15% elemen masuk layar
                rootMargin: "0px 0px -40px 0px",
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`${styles.revealItem} ${isVisible ? styles.visible : ""} ${className}`}
        >
            {children}
        </div>
    );
}