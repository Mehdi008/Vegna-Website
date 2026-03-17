import { homeCopy } from "@/content/site-content";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

const segments = [
  {
    title: "Retail",
    value: "Produits premium à forte lisibilité rayon et rotation.",
    objection: "Comment accélérer l’adoption ?",
    reassurance: "Architecture gamme claire + arguments vente terrain."
  },
  {
    title: "Distributeurs",
    value: "Offre distincte, facile à positionner et à scaler.",
    objection: "La marque est-elle suffisamment solide ?",
    reassurance: "Plateforme de marque premium + preuve qualité structurée."
  },
  {
    title: "Restauration",
    value: "Formats pratiques, stabilité cuisson, rendu appétissant.",
    objection: "La mise en œuvre est-elle fiable en service ?",
    reassurance: "Usages calibrés et promesse sensorielle reproductible."
  }
] as const;

export function ProfessionalSection() {
  return (
    <section className="bg-graphite py-14 text-cream-light md:py-20">
      <div className="container-premium">
        <Reveal>
          <p className="eyebrow text-cream-light/70">Pour les professionnels</p>
          <h2 className="font-display text-4xl md:text-5xl">Une page business, pas un simple contact.</h2>
          <p className="mt-4 max-w-2xl text-cream-light/80">{homeCopy.professionalPitch}</p>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {segments.map((segment) => (
            <Reveal key={segment.title}>
              <article className="rounded-xl2 border border-cream-light/20 bg-white/5 p-5">
                <h3 className="font-display text-3xl">{segment.title}</h3>
                <p className="mt-2 text-sm text-cream-light/90">{segment.value}</p>
                <p className="mt-3 text-xs uppercase tracking-wider text-brand-gold">Objection</p>
                <p className="text-sm text-cream-light/80">{segment.objection}</p>
                <p className="mt-2 text-xs uppercase tracking-wider text-brand-gold">Rassurance</p>
                <p className="text-sm text-cream-light/80">{segment.reassurance}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-8">
          <Button href="/professionnels">Demander une mise en relation commerciale</Button>
        </div>
      </div>
    </section>
  );
}
