import { homeCopy } from "@/content/site-content";
import { Reveal } from "@/components/motion/reveal";

export function ManifestoSection() {
  return (
    <section className="container-premium py-12 md:py-20">
      <Reveal>
        <p className="eyebrow mb-4">Brand manifesto</p>
        <p className="max-w-4xl font-display text-3xl leading-tight md:text-5xl">{homeCopy.manifesto}</p>
      </Reveal>
    </section>
  );
}
