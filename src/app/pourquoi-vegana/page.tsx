import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Pourquoi VEGANA",
  description:
    "Découvrez le positionnement VEGANA : marque tunisienne premium, goût prioritaire, identité forte et crédibilité commerciale.",
  openGraph: {
    title: "Pourquoi VEGANA",
    description: "Piliers de différenciation, perception premium et promesse de marque VEGANA.",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "VEGANA" }]
  }
};

const points = [
  "Une identité tunisienne premium, sans cliché, immédiatement mémorable.",
  "Des produits pensés d’abord pour le goût et la texture.",
  "Une narration de marque qui convertit autant le consommateur que l’acheteur pro.",
  "Un langage visuel éditorial, contemporain et commercialement fort."
];

export default function PourquoiVeganaPage() {
  return (
    <>
      <PageIntro
        eyebrow="Pourquoi VEGANA"
        title="Une marque construite pour être désirée, puis référencée."
        text="VEGANA combine plaisir culinaire, élégance de marque et crédibilité opérationnelle pour installer une présence marché ambitieuse dès le lancement."
      />
      <section className="section-shell pb-24">
        <div className="grid gap-4 md:grid-cols-2">
          {points.map((item, i) => (
            <Reveal key={item} delay={i * 0.06}>
              <div className="glass rounded-2xl p-6 text-white/85">{item}</div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
