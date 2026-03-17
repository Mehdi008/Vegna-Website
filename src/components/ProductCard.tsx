"use client";

import { motion } from "framer-motion";
import type { ProductFamily } from "@/content/site-data";

export default function ProductCard({ product }: { product: ProductFamily }) {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      className="group rounded-2xl border border-white/15 bg-gradient-to-br from-white/10 to-white/[0.03] p-6 shadow-[0_20px_60px_rgba(0,0,0,.35)]"
    >
      <p className="eyebrow">{product.name}</p>
      <h3 className="display mt-3 text-3xl text-[#f5efe4]">{product.signature}</h3>
      <p className="mt-4 text-sm text-white/80">{product.sensoryPromise}</p>
      <p className="mt-3 text-sm text-white/70">{product.usageContext}</p>
      <p className="mt-3 text-sm text-white/65">{product.emotionalBenefit}</p>
      <p className="mt-3 text-sm text-[#c9a86a]">{product.commercialRelevance}</p>
      <button
        type="button"
        className="mt-5 rounded-full border border-[#c9a86a]/50 px-4 py-2 text-xs uppercase tracking-wider text-white transition group-hover:bg-[#c9a86a]/15"
      >
        {product.cta}
      </button>
    </motion.article>
  );
}
