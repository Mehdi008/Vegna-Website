import Link from "next/link";
import { navigationItems } from "@/content/site-content";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-graphite/10 bg-cream-light/95 backdrop-blur">
      <div className="container-premium flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-2xl tracking-wide text-graphite">
          VEGANA
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navigationItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-graphite/80 hover:text-graphite">
              {item.label}
            </Link>
          ))}
        </nav>
        <Button href="/professionnels" variant="secondary">
          Mise en relation commerciale
        </Button>
      </div>
    </header>
  );
}
