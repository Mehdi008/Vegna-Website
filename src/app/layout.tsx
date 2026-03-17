import type { Metadata } from "next";
import "@/styles/globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "VEGANA — Site signature de lancement",
  description:
    "VEGANA transforme les légumineuses tunisiennes en produits végétaux premium conçus pour le goût, le style et la performance commerciale."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
