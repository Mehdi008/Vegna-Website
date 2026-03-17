import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 py-10">
      <div className="section-shell flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="display text-3xl">VEGANA</p>
          <p className="text-sm text-white/60">L’élégance végétale, pensée pour le goût.</p>
        </div>
        <div className="flex items-center gap-5 text-sm text-white/70">
          <Link href="/contact">Contact</Link>
          <Link href="/professionnels">Professionnels</Link>
          <Link href="/faq">FAQ</Link>
        </div>
      </div>
    </footer>
  );
}
