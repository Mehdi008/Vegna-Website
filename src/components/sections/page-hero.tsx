import { Reveal } from "@/components/motion/reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="container-premium py-12 md:py-20">
      <Reveal>
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h1 className="display-title max-w-4xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg text-graphite/80">{description}</p>
      </Reveal>
    </section>
  );
}
