"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import { differentiators, heroMedia, productFamilies, universeMedia } from "@/content/site-data";

export default function HomeClient() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.24], [1, 0.35]);

  return (
    <>
      <section className="relative isolate overflow-hidden pb-20 pt-14 md:pb-28 md:pt-24">
        <div className="hero-layer" />
        <div className="section-shell relative z-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <motion.div style={{ y: heroY, opacity: heroOpacity }}>
            <p className="eyebrow">Marque tunisienne premium</p>
            <h1 className="display mt-4 max-w-5xl text-6xl leading-[0.86] md:text-8xl">VEGANA. Le goût du futur, enraciné en Tunisie.</h1>
            <p className="mt-7 max-w-2xl text-lg text-white/80 md:text-xl">
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

          <Reveal>
            <div className="relative h-[420px] overflow-hidden rounded-[28px] border border-white/15 shadow-[0_30px_90px_rgba(0,0,0,.42)] lg:h-[520px]">
              <Image
                src={heroMedia.src}
                alt={heroMedia.alt}
                fill
                unoptimized
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-black/30 p-4 backdrop-blur">
                <p className="eyebrow">Launch signature</p>
                <p className="mt-1 text-sm text-white/86">Produit désiré. Marque mémorable. Conversion commerciale.</p>
              </div>
            </div>
          </Reveal>
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

      <section className="section-shell py-8 md:py-12">
        <div className="grid gap-4 md:grid-cols-3">
          {universeMedia.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <article className="relative h-56 overflow-hidden rounded-2xl border border-white/15">
                <Image src={item.src} alt={item.alt} fill unoptimized sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
                <p className="absolute bottom-4 left-4 text-sm font-medium text-white">{item.title}</p>
              </article>
            </Reveal>
          ))}
        </div>
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

      <section className="section-shell py-14">
        <div className="grid gap-5 lg:grid-cols-[1fr_1.05fr] lg:items-stretch">
          <Reveal>
            <div className="panel-deep rounded-3xl p-7 md:p-11">
              <p className="eyebrow">Pourquoi VEGANA</p>
              <h2 className="display mt-3 text-4xl md:text-5xl">Différenciation claire, perception premium immédiate.</h2>
              <div className="mt-7 grid gap-3">
                {differentiators.map((item, index) => (
                  <Reveal key={item} delay={index * 0.04}>
                    <div className="glass rounded-xl p-4 text-white/86">{item}</div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="relative min-h-[420px] overflow-hidden rounded-3xl border border-white/15">
              <Image
                src={universeMedia[0].src}
                alt="Visual éditorial de différenciation VEGANA"
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/15 bg-black/30 p-4">
                <p className="eyebrow">Signature brand</p>
                <p className="mt-2 text-white/85">Une identité food-first capable de séduire le consommateur et de rassurer l’acheteur.</p>
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
