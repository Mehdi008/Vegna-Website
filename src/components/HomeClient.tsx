"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import { differentiators, productFamilies } from "@/content/site-data";

export default function HomeClient() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.24], [1, 0.35]);

  return (
    <>
      <section className="relative isolate overflow-hidden pb-20 pt-14 md:pb-28 md:pt-24">
        <div className="hero-layer" />
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="section-shell relative z-10">
          <p className="eyebrow">Marque tunisienne premium</p>
          <h1 className="display mt-4 max-w-5xl text-6xl leading-[0.86] md:text-8xl">
            VEGANA. Le goût du futur, enraciné en Tunisie.
          </h1>
          <p className="mt-7 max-w-3xl text-lg text-white/80 md:text-xl">
            Une marque végétale type viande conçue pour créer du désir immédiat, rassurer par la qualité et convertir en achat comme en partenariat.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/gamme" className="rounded-full bg-[#c9a86a] px-6 py-3 text-sm font-semibold text-[#121418]">
              Découvrir la gamme
            </Link>
            <Link
              href="/professionnels"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Devenir distributeur / revendeur
            </Link>
          </div>
        </motion.div>

        <div className="section-shell relative z-10 mt-12 grid gap-4 md:mt-16 md:grid-cols-3">
          {[
            "Pensé pour le goût",
            "Design produit premium",
            "Conversion B2C + B2B"
          ].map((chip, i) => (
            <Reveal key={chip} delay={i * 0.06}>
              <div className="glass rounded-xl px-4 py-3 text-sm text-white/85">{chip}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell py-8 md:py-14">
        <Reveal>
          <div className="panel-deep rounded-3xl p-7 md:p-11">
            <p className="display max-w-5xl text-3xl leading-tight text-[#f5efe4] md:text-5xl">
              VEGANA n’imite pas. VEGANA signe une gourmandise végétale éditoriale, cinématique, commerciale.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="section-shell py-10 md:py-16">
        <Reveal>
          <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Univers produit</p>
              <h2 className="display mt-3 text-4xl md:text-6xl">Une gamme construite pour vendre.</h2>
            </div>
            <Link href="/gamme" className="rounded-full border border-white/30 px-5 py-2 text-sm transition hover:bg-white/10">
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

      <section className="relative py-14">
        <div className="section-shell">
          <Reveal>
            <div className="rounded-3xl border border-[#c9a86a]/30 bg-[linear-gradient(120deg,#1b212b_0%,#11151d_55%,#131821_100%)] p-7 md:p-12">
              <p className="eyebrow">Pourquoi VEGANA</p>
              <h2 className="display mt-2 text-4xl md:text-6xl">Différenciation claire, perception premium immédiate.</h2>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {differentiators.map((item, index) => (
                  <Reveal key={item} delay={index * 0.04}>
                    <div className="glass rounded-2xl p-5 text-white/86">{item}</div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-shell py-14">
        <Reveal>
          <div className="rounded-3xl border border-white/14 bg-gradient-to-r from-[#1b2029] to-[#12161d] p-7 md:p-12">
            <p className="eyebrow">Qualité & traçabilité</p>
            <h2 className="display mt-3 text-4xl md:text-5xl">La preuve qui rassure sans casser le désir.</h2>
            <p className="mt-4 max-w-3xl text-white/80">
              Sourcing lisible, formulation rigoureuse, standards de contrôle exigeants : VEGANA transforme la confiance en accélérateur commercial.
            </p>
            <Link
              href="/qualite-tracabilite"
              className="mt-6 inline-flex rounded-full border border-white/30 px-5 py-3 text-sm transition hover:bg-white/10"
            >
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
              Une page business conçue pour convertir : segmentation partenaire, argumentaires commerciaux, preuve marché et qualification lead.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/professionnels" className="rounded-full bg-[#14171c] px-6 py-3 text-sm font-semibold text-[#f5efe4]">
                Demander une mise en relation commerciale
              </Link>
              <Link href="/contact" className="rounded-full border border-[#14171c]/25 px-6 py-3 text-sm text-[#14171c]">
                Contacter l’équipe
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section-shell py-14 md:pb-24">
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
