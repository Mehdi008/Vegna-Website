import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";

const qualityBlocks = [
  {
    title: "Sourcing lisible",
    text: "Légumineuses sélectionnées avec une logique de constance et de traçabilité claire."
  },
  {
    title: "Formulation maîtrisée",
    text: "Chaque référence est calibrée pour une promesse sensorielle stable."
  },
  {
    title: "Contrôle qualité",
    text: "Processus rigoureux pour protéger la performance produit en rayon et en cuisine."
  }
] as const;

export default function QualiteTracabilitePage() {
  return (
    <>
      <PageIntro
        eyebrow="Qualité & Traçabilité"
        title="La confiance comme moteur de conversion, pas comme note de bas de page."
        text="VEGANA met la preuve au cœur de l’expérience pour rassurer rapidement consommateurs, acheteurs et partenaires commerciaux."
      />
      <section className="section-shell pb-24">
        <div className="grid gap-4 md:grid-cols-3">
          {qualityBlocks.map((block, i) => (
            <Reveal key={block.title} delay={i * 0.04}>
              <article className="rounded-2xl border border-white/15 bg-white/5 p-6">
                <h3 className="display text-3xl">{block.title}</h3>
                <p className="mt-3 text-white/78">{block.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
