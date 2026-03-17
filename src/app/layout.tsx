import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";

export const metadata: Metadata = {
  title: "VEGANA — Marque végétale premium tunisienne",
  description:
    "VEGANA transforme les légumineuses tunisiennes en produits végétaux type viande désirables, premium et prêts pour le marché.",
  metadataBase: new URL("https://vegana.tn")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        {children}
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
