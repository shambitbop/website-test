import localFont from "next/font/local";

// Clash Display, self-hosted from Fontshare. The display face for Decrypt.
export const clashDisplay = localFont({
  variable: "--font-clash",
  display: "swap",
  preload: true,
  src: "./fonts/ClashDisplay-Variable.woff2",
  weight: "200 700",
  style: "normal",
});
