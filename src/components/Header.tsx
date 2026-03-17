"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/content/site-data";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0f1115]/75 backdrop-blur-xl">
        <div className="section-shell flex h-16 items-center justify-between">
          <Link href="/" className="display text-2xl leading-none tracking-wide text-[#f5efe4]" onClick={() => setOpen(false)}>
            VEGANA
          </Link>

          <nav className="hidden items-center gap-5 lg:flex">
            {navLinks.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm transition ${active ? "text-white" : "text-white/70 hover:text-white"}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/professionnels"
              className="hidden rounded-full border border-[#c9a86a]/50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#f5efe4] transition hover:bg-[#c9a86a]/20 md:inline-flex"
            >
              Devenir partenaire
            </Link>
            <button
              type="button"
              aria-label="Ouvrir le menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white lg:hidden"
            >
              <span className="relative block h-3.5 w-4">
                <span className={`absolute left-0 top-0 block h-[2px] w-4 bg-white transition ${open ? "translate-y-[6px] rotate-45" : ""}`} />
                <span className={`absolute left-0 top-[6px] block h-[2px] w-4 bg-white transition ${open ? "opacity-0" : ""}`} />
                <span className={`absolute left-0 top-[12px] block h-[2px] w-4 bg-white transition ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-30 bg-[#0f1115]/96 pt-20 lg:hidden"
          >
            <div className="section-shell flex h-full flex-col">
              <nav className="flex flex-col gap-1">
                {navLinks.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`display rounded-xl px-4 py-3 text-4xl leading-tight transition ${active ? "bg-white/10 text-white" : "text-white/80"}`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-auto pb-8">
                <Link
                  href="/professionnels"
                  onClick={() => setOpen(false)}
                  className="block w-full rounded-full bg-[#c9a86a] px-6 py-3 text-center text-sm font-semibold text-[#111317]"
                >
                  Mise en relation commerciale
                </Link>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
