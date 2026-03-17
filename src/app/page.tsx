import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "VEGANA — Site de lancement",
  description:
    "VEGANA est une marque tunisienne premium de produits végétaux type viande : univers produit désirable, preuve qualité et conversion B2B claire."
};

export default function HomePage() {
  return <HomeClient />;
}
