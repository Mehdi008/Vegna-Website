import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { productFamilies, universeMedia } from "@/content/site-data";

export const metadata: Metadata = {
  title: "La Gamme",
  description:
    "Découvrez les 6 familles VEGANA : signatures sensorielles premium, usages culinaires désirables et valeur commerciale claire pour retail et restauration.",
  openGraph: {
    title: "La Gamme — VEGANA",
    description:
      "Steak, haché, burger, émincé, escalope et boulettes végétales : une collection premium construite pour vendre.",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "VEGANA" }]
  }
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

            <div className="mt-7 grid gap-3 md:grid-cols-3">
              {universeMedia.map((item) => (
                <article key={item.title} className="relative h-36 overflow-hidden rounded-xl border border-white/15">
                  <Image src={item.src} alt={item.alt} fill unoptimized sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <p className="absolute bottom-3 left-3 text-xs uppercase tracking-[0.12em] text-white/90">{item.title}</p>
                </article>
              ))}
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
