import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { productFamilies } from "@/content/site-data";

export const metadata: Metadata = {
  title: "La Gamme — VEGANA",
  description:
    "Découvrez les 6 familles VEGANA : signatures sensorielles premium, usages culinaires désirables et valeur commerciale claire pour retail et restauration."
};

export default function GammePage() {
  return (
    <>
      <PageIntro
        eyebrow="La Gamme"
        title="Une collection produit premium, pensée pour le désir et la rotation."
        text="Chaque famille VEGANA est conçue pour déclencher l’envie visuelle, simplifier l’usage culinaire et renforcer la performance commerciale en rayon comme en carte."
      />

      <section className="section-shell pb-10">
        <Reveal>
          <div className="panel-deep rounded-3xl p-6 md:p-10">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="eyebrow">Curated collection</p>
                <h2 className="display mt-3 text-4xl md:text-5xl">6 familles. 3 usages clés. 1 promesse de marque.</h2>
              </div>
              <Link href="/professionnels" className="rounded-full border border-[#c9a86a]/45 px-5 py-3 text-sm transition hover:bg-[#c9a86a]/14">
                Recevoir le kit commercial
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Usage maison",
                "Restauration rapide premium",
                "Foodservice & menus",
                "Sourcing maîtrisé",
                "Rotation retail"
              ].map((tag) => (
                <span key={tag} className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/80">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section-shell pb-24">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {productFamilies.map((product, i) => (
            <div key={product.slug} id={product.slug}>
              <Reveal delay={i * 0.04}>
                <ProductCard product={product} />
              </Reveal>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
