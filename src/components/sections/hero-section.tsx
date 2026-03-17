import { homeCopy } from "@/content/site-content";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

export function HeroSection() {
  return (
    <section className="container-premium py-16 md:py-24">
      <Reveal>
        <p className="eyebrow mb-4">Marque tunisienne premium</p>
        <h1 className="display-title max-w-4xl">{homeCopy.heroTitle}</h1>
        <p className="mt-6 max-w-2xl text-lg text-graphite/80">{homeCopy.heroSubtitle}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/gamme">Découvrir la gamme</Button>
          <Button href="/professionnels" variant="secondary">
            Devenir distributeur / revendeur
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
