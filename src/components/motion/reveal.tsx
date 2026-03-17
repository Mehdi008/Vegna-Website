"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";
import { tokens } from "@/styles/tokens";

export function Reveal({ children }: PropsWithChildren) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: tokens.motion.duration.reveal, ease: tokens.motion.easing }}
    >
      {children}
    </motion.div>
  );
}
