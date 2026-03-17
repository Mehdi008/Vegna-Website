import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "Accueil",
  description:
    "VEGANA est une marque tunisienne premium de produits végétaux type viande : univers produit désirable, preuve qualité et conversion B2B claire.",
  openGraph: {
    title: "Accueil — VEGANA",
    description:
      "Découvrez l’univers VEGANA : gamme végétale premium, storytelling produit et conversion commerciale.",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "VEGANA" }]
  }
};

export default function HomePage() {
  return <HomeClient />;
}
