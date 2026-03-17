import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "VEGANA — Marque végétale premium tunisienne",
    template: "%s | VEGANA"
  },
  description:
    "VEGANA transforme les légumineuses tunisiennes en produits végétaux type viande désirables, premium et prêts pour le marché.",
  metadataBase: new URL("https://vegana.tn"),
  openGraph: {
    title: "VEGANA — Marque végétale premium tunisienne",
    description:
      "VEGANA transforme les légumineuses tunisiennes en produits végétaux type viande désirables, premium et prêts pour le marché.",
    url: "https://vegana.tn",
    siteName: "VEGANA",
    locale: "fr_TN",
    type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "VEGANA" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "VEGANA — Marque végétale premium tunisienne",
    description:
      "VEGANA transforme les légumineuses tunisiennes en produits végétaux type viande désirables, premium et prêts pour le marché.",
    images: ["/og-default.svg"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${cormorant.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
