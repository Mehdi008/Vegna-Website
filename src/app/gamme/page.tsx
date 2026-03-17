import PageIntro from "@/components/PageIntro";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { productFamilies } from "@/content/site-data";

export default function GammePage() {
  return (
    <>
      <PageIntro
        eyebrow="La Gamme"
        title="Six familles produits, une présence premium, une logique de vente claire."
        text="Chaque famille VEGANA est pensée pour déclencher l’envie, simplifier l’usage culinaire et renforcer la performance commerciale en rayon comme en carte."
      />
      <section className="section-shell pb-24">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {productFamilies.map((product, i) => (
            <Reveal key={product.slug} delay={i * 0.04}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
