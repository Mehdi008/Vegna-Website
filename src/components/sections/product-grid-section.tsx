import { productFamilies } from "@/content/site-content";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

export function ProductGridSection() {
  return (
    <section className="container-premium py-12 md:py-20">
      <Reveal>
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="eyebrow">La gamme</p>
            <h2 className="font-display text-4xl">Une architecture produit vendable</h2>
          </div>
          <Button href="/gamme" variant="secondary">
            Voir toute la gamme
          </Button>
        </div>
      </Reveal>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {productFamilies.map((family) => (
          <Reveal key={family.slug}>
            <article className="rounded-xl2 border border-graphite/10 bg-white p-6 shadow-premium">
              <p className="eyebrow">{family.consumptionMoment}</p>
              <h3 className="mt-2 font-display text-3xl">{family.name}</h3>
              <p className="mt-2 text-sm text-graphite/80">{family.signature}</p>
              <p className="mt-4 text-sm text-graphite/70">{family.sensoryPromise}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.14em] text-olive-deep">{family.cta}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
