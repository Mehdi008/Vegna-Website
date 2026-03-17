import Link from "next/link";

export default function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/15 bg-[#0f1115]/95 p-3 backdrop-blur md:hidden">
      <Link
        href="/professionnels"
        className="block w-full rounded-full bg-[#c9a86a] px-5 py-3 text-center text-sm font-semibold text-[#111317]"
      >
        Demander une mise en relation commerciale
      </Link>
    </div>
  );
}
