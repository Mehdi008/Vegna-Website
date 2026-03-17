import { PageHero } from "@/components/sections/page-hero";

export default function ProfessionnelsPage() {
  return (
    <>
      <PageHero
        eyebrow="Professionnels"
        title="Une offre calibrée pour retail, distribution et restauration."
        description="Cette page structure la conversion B2B : argumentaires segmentés, traitement des objections, preuves de sérieux et qualification lead progressive."
      />
      <section className="container-premium pb-16 md:pb-24">
        <div className="grid gap-4 md:grid-cols-3">
          {["Retail", "Distributeur", "Restauration"].map((segment) => (
            <article key={segment} className="rounded-xl2 border border-graphite/10 bg-white p-6">
              <p className="eyebrow">Segment</p>
              <h2 className="font-display text-3xl">{segment}</h2>
              <p className="mt-2 text-sm text-graphite/75">
                Proposition de valeur, objections, rassurances et CTA business dédiés.
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
