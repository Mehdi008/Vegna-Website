"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import { differentiators, productFamilies } from "@/content/site-data";

export default function HomeClient() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.45]);

  return (
    <>
      <section className="relative overflow-hidden pb-20 pt-14 md:pb-28 md:pt-24">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="section-shell">
          <p className="eyebrow">Marque tunisienne premium</p>
          <h1 className="display mt-4 max-w-5xl text-6xl leading-[0.88] md:text-8xl">
            VEGANA. Le goût du futur, enraciné en Tunisie.
          </h1>
          <p className="mt-7 max-w-3xl text-lg text-white/80 md:text-xl">
            Une marque végétale type viande conçue pour créer du désir, rassurer par la qualité et convertir en achat comme en partenariat.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/gamme" className="rounded-full bg-[#c9a86a] px-6 py-3 text-sm font-semibold text-[#121418]">
              Découvrir la gamme
            </Link>
            <Link
              href="/professionnels"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Devenir distributeur / revendeur
            </Link>
          </div>
        </motion.div>
        <div className="pointer-events-none absolute -right-20 top-0 h-96 w-96 rounded-full bg-[#c9a86a]/20 blur-3xl" />
      </section>

      <section className="section-shell py-8 md:py-14">
        <Reveal>
          <p className="display max-w-5xl text-3xl leading-tight text-[#f5efe4] md:text-5xl">
            VEGANA n’imite pas. VEGANA signe une gourmandise végétale éditoriale, cinématique, commerciale.
          </p>
        </Reveal>
      </section>

      <section className="section-shell py-10 md:py-16">
        <Reveal>
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Univers produit</p>
              <h2 className="display mt-3 text-4xl md:text-6xl">Une gamme construite pour vendre.</h2>
            </div>
            <Link href="/gamme" className="hidden rounded-full border border-white/30 px-5 py-2 text-sm md:inline-block">
              Voir toute la gamme
            </Link>
          </div>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {productFamilies.map((product, i) => (
            <Reveal key={product.slug} delay={i * 0.03}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell py-14">
        <Reveal>
          <p className="eyebrow">Pourquoi VEGANA</p>
          <h2 className="display mt-2 text-4xl md:text-6xl">Différenciation claire, perception premium immédiate.</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {differentiators.map((item, index) => (
            <Reveal key={item} delay={index * 0.05}>
              <div className="glass rounded-2xl p-5 text-white/85">{item}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell py-14">
        <Reveal>
          <div className="rounded-3xl border border-[#c9a86a]/35 bg-gradient-to-r from-[#1d222b] to-[#111317] p-7 md:p-12">
            <p className="eyebrow">Qualité & traçabilité</p>
            <h2 className="display mt-3 text-4xl md:text-5xl">La preuve qui rassure sans casser le désir.</h2>
            <p className="mt-4 max-w-3xl text-white/80">
              Sourcing lisible, formulation rigoureuse, standards de contrôle exigeants : VEGANA transforme la confiance en accélérateur commercial.
            </p>
            <Link href="/qualite-tracabilite" className="mt-6 inline-block rounded-full border border-white/30 px-5 py-3 text-sm">
              Explorer nos engagements
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="section-shell py-14">
        <Reveal>
          <div className="rounded-3xl bg-[#f5efe4] p-7 text-[#14171c] md:p-12">
            <p className="eyebrow">Professionnels</p>
            <h2 className="display mt-3 text-4xl md:text-5xl">Retail. Distribution. Restauration.</h2>
            <p className="mt-4 max-w-3xl text-[#14171c]/80">
              Une page business conçue pour convertir : segmentation partenaire, arguments de vente, preuves marché et qualification leads.
            </p>
            <Link href="/professionnels" className="mt-6 inline-block rounded-full bg-[#14171c] px-6 py-3 text-sm font-semibold text-[#f5efe4]">
              Demander une mise en relation commerciale
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="section-shell py-14 md:pb-20">
        <Reveal>
          <div className="rounded-3xl border border-white/20 p-7 md:p-12">
            <p className="eyebrow">Lancement</p>
            <h2 className="display mt-2 text-4xl md:text-6xl">La prochaine marque végétale qui comptera sur le marché.</h2>
            <p className="mt-4 max-w-3xl text-white/80">Passez de l’intérêt à l’action : gamme, relation commerciale, partenariat, activation.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact" className="rounded-full bg-[#c9a86a] px-6 py-3 text-sm font-semibold text-[#111317]">
                Nous contacter
              </Link>
              <Link href="/professionnels" className="rounded-full border border-white/30 px-6 py-3 text-sm">
                Devenir partenaire
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
