"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { ProductFamily } from "@/content/site-data";

const toneMap: Record<ProductFamily["tone"], string> = {
  gold: "from-[#c9a86a]/25 via-[#c9a86a]/10 to-transparent",
  olive: "from-[#4a5d46]/28 via-[#4a5d46]/10 to-transparent",
  charcoal: "from-[#2a303d]/32 via-[#2a303d]/10 to-transparent"
};

export default function ProductCard({ product }: { product: ProductFamily }) {
  return (
    <motion.article
      whileHover={{ y: -10, scale: 1.01 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-white/10 to-white/[0.03] p-5 shadow-[0_20px_60px_rgba(0,0,0,.35)] md:p-6"
    >
      <div className={`pointer-events-none absolute -inset-x-8 -top-12 h-28 bg-gradient-to-b ${toneMap[product.tone]}`} />

      <div className="relative mb-5 h-40 overflow-hidden rounded-xl border border-white/10">
        <Image
          src={product.media.src}
          alt={product.media.alt}
          fill
          unoptimized
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
        <p className="absolute bottom-3 left-3 rounded-full bg-black/35 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-white/90">
          {product.name}
        </p>
      </div>

      <p className="eyebrow">Signature</p>
      <h3 className="display mt-2 text-3xl text-[#f5efe4]">{product.signature}</h3>

      <dl className="mt-4 space-y-2 text-sm">
        <div>
          <dt className="text-white/55">Promesse sensorielle</dt>
          <dd className="text-white/86">{product.sensoryPromise}</dd>
        </div>
        <div>
          <dt className="text-white/55">Usage</dt>
          <dd className="text-white/78">{product.usageContext}</dd>
        </div>
        <div>
          <dt className="text-white/55">Bénéfice émotionnel</dt>
          <dd className="text-white/72">{product.emotionalBenefit}</dd>
        </div>
        <div>
          <dt className="text-white/55">B2B</dt>
          <dd className="text-[#c9a86a]">{product.commercialRelevance}</dd>
        </div>
      </dl>

      <Link
        href={`/gamme#${product.slug}`}
        className="mt-5 inline-flex rounded-full border border-[#c9a86a]/55 px-4 py-2 text-xs uppercase tracking-wider text-white transition hover:bg-[#c9a86a]/18"
      >
        {product.cta}
      </Link>
    </motion.article>
  );
}
