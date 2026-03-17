"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ProductFamily } from "@/content/site-data";

export default function ProductCard({ product }: { product: ProductFamily }) {
  return (
    <motion.article
      whileHover={{ y: -10, scale: 1.01 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-white/10 to-white/[0.03] p-5 shadow-[0_20px_60px_rgba(0,0,0,.35)] md:p-6"
    >
      <div className="relative mb-5 h-36 overflow-hidden rounded-xl border border-white/10 bg-[radial-gradient(circle_at_30%_35%,rgba(201,168,106,0.4),transparent_52%),radial-gradient(circle_at_75%_65%,rgba(70,86,67,0.45),transparent_56%),#13171e]">
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
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
