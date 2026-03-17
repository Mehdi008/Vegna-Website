import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Professionnels — VEGANA",
  description:
    "Page commerciale VEGANA pour retail, distributeurs et restauration : argumentaires de vente, proposition de valeur segmentée et qualification de leads B2B."
};

const partnerSegments = [
  {
    title: "Retail",
    whyCarry: "Une gamme lisible, premium et différenciante en rayon.",
    whySell: "Désirabilité visuelle forte, conversion rapide en intention d’achat.",
    fit: "Formats alignés avec les usages quotidiens et les parcours shopper.",
    cta: "Parler référencement retail"
  },
  {
    title: "Distributeurs",
    whyCarry: "Un portefeuille végétal à forte valeur perçue.",
    whySell: "Narratif de marque solide + argumentaire terrain prêt à déployer.",
    fit: "Compatible multi-circuits : retail moderne, CHR, réseaux spécialisés.",
    cta: "Activer un partenariat distribution"
  },
  {
    title: "Restaurants / Foodservice",
    whyCarry: "Produits stables, cuisson maîtrisée, rendu appétissant.",
    whySell: "Permet de créer des offres végétales rentables et désirables en menu.",
    fit: "Intégration rapide : burger, bowl, plat du jour, tapas, livraison.",
    cta: "Construire une offre menu VEGANA"
  }
] as const;

export default function ProfessionnelsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Professionnels"
        title="Une page commerciale pensée pour signer des partenaires."
        text="VEGANA parle performance : pourquoi référencer la marque, pourquoi elle vend, pourquoi elle s’intègre vite aux rayons et aux menus."
      />

      <section className="section-shell pb-12">
        <Reveal>
          <div className="panel-deep rounded-3xl p-6 md:p-10">
            <p className="eyebrow">Logique commerciale</p>
            <h2 className="display mt-3 text-4xl md:text-5xl">Visibilité forte. Rotation claire. Exécution simple.</h2>
            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {["Référencement facilité", "Promesse produit vendable", "Activation rapide des équipes"].map((item) => (
                <div key={item} className="rounded-xl border border-white/14 bg-white/5 px-4 py-3 text-sm text-white/86">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section-shell pb-14">
        <div className="grid gap-4 lg:grid-cols-3">
          {partnerSegments.map((segment, idx) => (
            <Reveal key={segment.title} delay={idx * 0.05}>
              <article className="glass rounded-2xl p-6">
                <p className="eyebrow">{segment.title}</p>
                <h2 className="display mt-3 text-3xl">Pourquoi VEGANA</h2>
                <ul className="mt-4 space-y-3 text-sm text-white/85">
                  <li>
                    <strong>Pourquoi référencer :</strong> {segment.whyCarry}
                  </li>
                  <li>
                    <strong>Pourquoi ça vend :</strong> {segment.whySell}
                  </li>
                  <li>
                    <strong>Pourquoi ça fit :</strong> {segment.fit}
                  </li>
                </ul>
                <p className="mt-5 text-xs uppercase tracking-[0.15em] text-[#c9a86a]">{segment.cta}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell pb-24">
        <Reveal>
          <div className="rounded-3xl border border-[#c9a86a]/40 bg-[linear-gradient(135deg,#12171f,#0f1319)] p-6 md:p-10">
            <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="eyebrow">Qualification commerciale</p>
                <h3 className="display mt-2 text-4xl">Recevez une proposition adaptée à votre activité.</h3>
              </div>
              <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/75">Réponse sous 48h</span>
            </div>

            <form className="grid gap-4 md:grid-cols-2">
              <label className="text-sm text-white/82">
                Nom complet
                <input required placeholder="Votre nom" className="mt-2 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm" />
              </label>

              <label className="text-sm text-white/82">
                Email professionnel
                <input required type="email" placeholder="nom@entreprise.com" className="mt-2 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm" />
              </label>

              <label className="text-sm text-white/82">
                Entreprise
                <input placeholder="Nom de l’entreprise" className="mt-2 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm" />
              </label>

              <label className="text-sm text-white/82">
                Type de partenaire
                <select required className="mt-2 w-full rounded-xl border border-white/20 bg-[#12171f] px-4 py-3 text-sm">
                  <option value="">Choisir un segment</option>
                  <option>Retail</option>
                  <option>Distributeur</option>
                  <option>Restaurant / Foodservice</option>
                </select>
              </label>

              <label className="text-sm text-white/82">
                Volume estimé / mois
                <select className="mt-2 w-full rounded-xl border border-white/20 bg-[#12171f] px-4 py-3 text-sm">
                  <option value="">Sélectionner un volume</option>
                  <option>&lt; 100 unités</option>
                  <option>100 - 500 unités</option>
                  <option>500 - 2000 unités</option>
                  <option>2000+ unités</option>
                </select>
              </label>

              <label className="text-sm text-white/82">
                Ville / zone
                <input placeholder="Ex: Tunis / Grand Tunis" className="mt-2 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm" />
              </label>

              <label className="text-sm text-white/82 md:col-span-2">
                Objectif commercial
                <textarea
                  placeholder="Décrivez vos canaux de vente, typologie de points de vente, et objectifs commerciaux."
                  className="mt-2 min-h-32 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm"
                />
              </label>

              <button type="submit" className="rounded-full bg-[#c9a86a] px-6 py-3 text-sm font-semibold text-[#111317] md:col-span-2 md:justify-self-start">
                Demander une mise en relation commerciale
              </button>
            </form>
          </div>
        </Reveal>
      </section>
    </>
  );
}
