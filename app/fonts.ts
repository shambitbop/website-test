import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";

// Geist Sans is the primary reading face: neutral, compact, and highly legible.
export const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

// Geist Mono keeps compact UI labels distinct without sacrificing word clarity.
export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  display: "swap",
  subsets: ["latin"],
});

// Clash Display, self-hosted from Fontshare. The display face for Decrypt.
export const clashDisplay = localFont({
  variable: "--font-clash",
  display: "swap",
  preload: true,
  src: "./fonts/ClashDisplay-Variable.woff2",
  weight: "200 700",
  style: "normal",
});
