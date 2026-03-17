import Reveal from "@/components/Reveal";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  text: string;
};

export default function PageIntro({ eyebrow, title, text }: PageIntroProps) {
  return (
    <section className="section-shell py-12 md:py-20">
      <Reveal>
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="display mt-4 max-w-4xl text-5xl leading-[0.9] md:text-7xl">{title}</h1>
            <p className="mt-6 max-w-3xl text-lg text-white/78">{text}</p>
          </div>
          <div className="hidden rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.14em] text-white/70 md:block">
            VEGANA Launch Site
          </div>
        </div>
      </Reveal>
    </section>
  );
}
