import Link from "next/link";

export default function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/15 bg-[#0f1115]/95 px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden">
      <Link
        href="/professionnels"
        className="block w-full rounded-full bg-[#c9a86a] px-5 py-3 text-center text-sm font-semibold text-[#111317] shadow-[0_12px_30px_rgba(201,168,106,0.28)]"
      >
        Demander une mise en relation commerciale
      </Link>
    </div>
  );
}
