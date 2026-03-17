import { PageHero } from "@/components/sections/page-hero";
import { productFamilies } from "@/content/site-content";

export default function GammePage() {
  return (
    <>
      <PageHero
        eyebrow="La gamme"
        title="Six familles produits, une logique commerciale claire."
        description="Chaque référence VEGANA est structurée pour vendre : promesse sensorielle, usage culinaire, moment de consommation, bénéfice émotionnel et bénéfice business."
      />
      <section className="container-premium pb-16 md:pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          {productFamilies.map((item) => (
            <article key={item.slug} className="rounded-xl2 border border-graphite/10 bg-white p-6">
              <h2 className="font-display text-3xl">{item.name}</h2>
              <p className="mt-2 text-sm text-graphite/80">{item.signature}</p>
              <ul className="mt-4 space-y-2 text-sm text-graphite/75">
                <li>
                  <strong>Promesse sensorielle :</strong> {item.sensoryPromise}
                </li>
                <li>
                  <strong>Usages :</strong> {item.culinaryUses.join(" • ")}
                </li>
                <li>
                  <strong>Moment :</strong> {item.consumptionMoment}
                </li>
                <li>
                  <strong>Bénéfice émotionnel :</strong> {item.emotionalBenefit}
                </li>
                <li>
                  <strong>Bénéfice commercial :</strong> {item.commercialBenefit}
                </li>
              </ul>
              <p className="mt-4 text-xs uppercase tracking-[0.16em] text-olive-deep">{item.cta}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
