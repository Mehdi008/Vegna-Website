"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/content/site-data";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0f1115]/80 backdrop-blur-xl">
      <div className="section-shell flex h-16 items-center justify-between">
        <Link href="/" className="display text-2xl leading-none tracking-wide text-[#f5efe4]">
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
        <Link
          href="/professionnels"
          className="rounded-full border border-[#c9a86a]/50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#f5efe4] transition hover:bg-[#c9a86a]/20"
        >
          Devenir partenaire
        </Link>
      </div>
    </header>
  );
}
