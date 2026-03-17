import PageIntro from "@/components/PageIntro";
import { faqs } from "@/content/site-data";

export default function FaqPage() {
  return (
    <>
      <PageIntro
        eyebrow="FAQ"
        title="Réponses directes, ton premium, décision facilitée."
        text="Les questions les plus fréquentes de nos clients, revendeurs et partenaires restauration."
      />
      <section className="section-shell pb-24">
        <div className="space-y-4">
          {faqs.map((item) => (
            <details key={item.q} className="rounded-2xl border border-white/15 bg-white/5 p-5">
              <summary className="cursor-pointer list-none text-lg font-semibold">{item.q}</summary>
              <p className="mt-3 text-white/75">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
