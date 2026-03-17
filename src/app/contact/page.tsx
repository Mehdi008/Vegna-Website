"use client";

import { FormEvent, useState } from "react";
import PageIntro from "@/components/PageIntro";

export default function ContactPage() {
  const [done, setDone] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDone(true);
  };

  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Parlons lancement, partenariat et activation commerciale."
        text="L’équipe VEGANA accompagne distributeurs, enseignes et professionnels de la restauration sur une mise en marché rapide et premium."
      />
      <section className="section-shell pb-24">
        <form onSubmit={onSubmit} className="glass grid max-w-3xl gap-4 rounded-3xl p-6 md:grid-cols-2 md:p-10">
          <input required placeholder="Nom" className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm" />
          <input required placeholder="Email" type="email" className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm" />
          <input placeholder="Entreprise" className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm md:col-span-2" />
          <textarea placeholder="Votre message" className="min-h-32 rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm md:col-span-2" />
          <button type="submit" className="rounded-full bg-[#c9a86a] px-6 py-3 text-sm font-semibold text-[#111317] md:col-span-2 md:justify-self-start">
            Envoyer
          </button>
          {done ? <p className="text-sm text-[#c9a86a] md:col-span-2">Merci. Nous revenons vers vous rapidement.</p> : null}
        </form>
      </section>
    </>
  );
}
