import Reveal from "@/components/Reveal";

export default function PageIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="section-shell py-12 md:py-20">
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display mt-4 max-w-4xl text-5xl leading-[0.92] md:text-7xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg text-white/78">{text}</p>
      </Reveal>
    </section>
  );
}
