import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { productFamilies, universeMedia } from "@/content/site-data";

export const metadata: Metadata = {
  title: "La Gamme — VEGANA",
  description:
    "Découvrez les 6 familles VEGANA : signatures sensorielles premium, usages culinaires désirables et valeur commerciale claire pour retail et restauration."
};

export default function GammePage() {
  const [featuredProduct, ...collectionProducts] = productFamilies;

  return (
    <>
      <PageIntro
        eyebrow="La Gamme"
        title="Une collection produit premium, pensée pour le désir et la rotation."
        text="Chaque famille VEGANA est conçue pour déclencher l’envie visuelle, simplifier l’usage culinaire et renforcer la performance commerciale en rayon comme en carte."
      />

      <section className="section-shell pb-12">
        <Reveal>
          <div className="panel-deep overflow-hidden rounded-[34px] p-6 md:p-10">
            <div className="grid gap-8 xl:grid-cols-[1.15fr_.85fr] xl:items-end">
              <div>
                <p className="eyebrow">Curated collection</p>
                <h2 className="display mt-3 max-w-3xl text-4xl md:text-6xl">Six familles produit, trois usages clés, une présence de marque immédiatement vendable.</h2>
                <p className="mt-4 max-w-2xl text-white/74 md:text-lg">
                  La page gamme doit agir comme un showroom digital : inspirer le consommateur, rassurer le partenaire et faciliter la projection commerciale.
                </p>

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

              <div className="space-y-3">
                <div className="rounded-[28px] border border-[#c9a86a]/24 bg-[#c9a86a]/[0.06] p-5">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#c9a86a]">Action commerciale</p>
                  <p className="mt-3 max-w-sm text-white/84">
                    Active une conversation B2B dès la découverte de la gamme : référencement, distribution, menus, lancement.
                  </p>
                  <Link
                    href="/professionnels"
                    className="mt-5 inline-flex rounded-full bg-[#c9a86a] px-5 py-3 text-sm font-semibold text-[#111317] transition hover:translate-y-[-1px]"
                  >
                    Recevoir le kit commercial
                  </Link>
                </div>

                <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
                  {universeMedia.map((item) => (
                    <article key={item.title} className="relative h-28 overflow-hidden rounded-[22px] border border-white/15 sm:h-32 xl:h-28">
                      <Image src={item.src} alt={item.alt} fill unoptimized sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                      <p className="absolute bottom-3 left-3 text-xs uppercase tracking-[0.12em] text-white/90">{item.title}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section-shell pb-10">
        <Reveal>
          <div className="grid gap-6 xl:grid-cols-[1.35fr_.65fr] xl:items-start">
            <div>
              <p className="eyebrow">Produit signature</p>
              <h2 className="display mt-3 text-4xl md:text-5xl">Une entrée forte dans la gamme pour installer le désir immédiatement.</h2>
            </div>
            <div className="rounded-[24px] border border-white/12 bg-white/[0.03] p-5 text-white/72">
              <p className="text-[11px] uppercase tracking-[0.16em] text-white/48">Lecture recommandée</p>
              <p className="mt-3">
                Ouvre la gamme avec une référence locomotive, puis déroule les formats à rotation, les usages rapides et les occasions de partage.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section-shell pb-14">
        <Reveal>
          <div id={featuredProduct.slug}>
            <ProductCard product={featuredProduct} variant="feature" />
          </div>
        </Reveal>
      </section>

      <section className="section-shell pb-6">
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Collection complète</p>
              <h2 className="display mt-3 text-4xl md:text-5xl">Des références pensées pour des usages nets, une lecture simple et une conversion plus rapide.</h2>
            </div>
            <Link href="/professionnels" className="rounded-full border border-white/24 px-5 py-3 text-sm transition hover:bg-white/8">
              Parler à l’équipe commerciale
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="section-shell pb-24">
        <div className="grid gap-6 lg:grid-cols-2">
          {collectionProducts.map((product, i) => (
            <div key={product.slug} id={product.slug} className={i % 3 === 2 ? "lg:translate-y-8" : ""}>
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