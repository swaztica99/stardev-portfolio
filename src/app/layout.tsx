import type { Metadata } from "next";
import { Archivo, Space_Mono } from "next/font/google";
import { Unbounded } from "next/font/google";
import "./globals.css";

// Font Utama: Modern, Bold Black, Tegas
const modernDisplay = Archivo({
  subsets: ["latin"],
  weight: ["800", "900"],
  variable: "--font-display",
  display: "swap",
});

const modernUnbounded = Unbounded({
  weight: ["900"],
  subsets: ["latin"],
  variable: "--font-unbounded",
  display: "swap",
});

// Font Sekunder: Mono untuk metadata & nomor
const editorialMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PORTFOLIO / ARCHIVE",
  description: "Modern monochrome portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${modernDisplay.variable} ${editorialMono.variable} ${modernUnbounded.variable}`}>
      <body>{children}</body>
    </html>
  );
}