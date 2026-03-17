"use client";

import { FormEvent, useState } from "react";
import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";

const partnerSegments = [
  {
    title: "Retail",
    whyCarry: "Une gamme lisible, premium et différenciante en rayon.",
    whySell: "Forte désirabilité visuelle et argumentaire simple pour l’équipe magasin.",
    fit: "Formats adaptés aux usages quotidiens, faciles à recommander."
  },
  {
    title: "Distributeurs",
    whyCarry: "Un portefeuille végétal à forte valeur perçue.",
    whySell: "Narratif de marque solide + gamme structurée pour la force de vente.",
    fit: "Compatible multi-circuits, du retail moderne à la restauration."
  },
  {
    title: "Restaurants / Foodservice",
    whyCarry: "Produits stables, cuisson maîtrisée, rendu appétissant.",
    whySell: "Permet de créer des offres végétales attractives à marge saine.",
    fit: "Intégration rapide aux menus : burger, bowl, plat du jour, tapas."
  }
] as const;

export default function ProfessionnelsPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageIntro
        eyebrow="Professionnels"
        title="Une page commerciale pensée pour signer des partenaires."
        text="VEGANA parle performance commerciale : pourquoi référencer la marque, pourquoi elle vend, pourquoi elle s’intègre vite aux rayons et aux menus."
      />

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
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell pb-24">
        <Reveal>
          <div className="rounded-3xl border border-[#c9a86a]/40 bg-[#11151b] p-6 md:p-10">
            <p className="eyebrow">Qualification commerciale</p>
            <h3 className="display mt-2 text-4xl">Recevez une proposition adaptée à votre activité.</h3>
            <form onSubmit={handleSubmit} className="mt-6 grid gap-4 md:grid-cols-2">
              <input required placeholder="Nom complet" className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm" />
              <input required type="email" placeholder="Email professionnel" className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm" />
              <input placeholder="Entreprise" className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm" />
              <select required className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm">
                <option value="">Type de partenaire</option>
                <option>Retail</option>
                <option>Distributeur</option>
                <option>Restaurant / Foodservice</option>
              </select>
              <select className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm">
                <option value="">Volume estimé / mois</option>
                <option>&lt; 100 unités</option>
                <option>100 - 500 unités</option>
                <option>500 - 2000 unités</option>
                <option>2000+ unités</option>
              </select>
              <input placeholder="Ville / zone" className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm" />
              <textarea
                placeholder="Objectif commercial, typologie de points de vente, besoins spécifiques"
                className="md:col-span-2 min-h-32 rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm"
              />
              <button type="submit" className="rounded-full bg-[#c9a86a] px-6 py-3 text-sm font-semibold text-[#111317] md:col-span-2 md:justify-self-start">
                Demander une mise en relation commerciale
              </button>
            </form>
            {submitted ? <p className="mt-4 text-sm text-[#c9a86a]">Merci. L’équipe VEGANA vous recontacte sous 48h.</p> : null}
          </div>
        </Reveal>
      </section>
    </>
  );
}
