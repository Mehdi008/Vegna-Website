import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "VEGANA est une marque tunisienne premium qui transforme les légumineuses locales en produits végétaux contemporains et désirables.",
  openGraph: {
    title: "À propos — VEGANA",
    description: "Une ambition tunisienne, une exécution premium, une vision de marché.",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "VEGANA" }]
  }
};

export default function AProposPage() {
  return (
    <PageIntro
      eyebrow="À propos"
      title="Une ambition tunisienne, une exécution premium, une vision de marché."
      text="VEGANA est née pour transformer les légumineuses locales en produits contemporains désirables, capables d’élever les usages quotidiens et les standards du végétal dans la région."
    />
  );
}
