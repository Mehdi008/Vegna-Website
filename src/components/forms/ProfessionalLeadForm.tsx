"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ProfessionalLeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      type: "professional",
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      company: String(formData.get("company") ?? ""),
      partnerType: String(formData.get("partnerType") ?? ""),
      volume: String(formData.get("volume") ?? ""),
      location: String(formData.get("location") ?? ""),
      message: String(formData.get("message") ?? "")
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const result = (await response.json()) as { ok?: boolean; errors?: string[]; message?: string };

      if (!response.ok || !result.ok) {
        setStatus("error");
        setError(result.errors?.join(" ") || "Une erreur est survenue. Veuillez réessayer.");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
      setError("Impossible d’envoyer la demande pour le moment.");
    }
  };

  return (
    <>
      <form onSubmit={onSubmit} className="grid gap-4 md:grid-cols-2" aria-label="Formulaire professionnel VEGANA" noValidate>
        <label className="text-sm text-white/82">
          Nom complet
          <input name="name" required placeholder="Votre nom" className="mt-2 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm" />
        </label>

        <label className="text-sm text-white/82">
          Email professionnel
          <input
            name="email"
            required
            type="email"
            placeholder="nom@entreprise.com"
            className="mt-2 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm"
          />
        </label>

        <label className="text-sm text-white/82">
          Entreprise
          <input name="company" placeholder="Nom de l’entreprise" className="mt-2 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm" />
        </label>

        <label className="text-sm text-white/82">
          Type de partenaire
          <select name="partnerType" required className="mt-2 w-full rounded-xl border border-white/20 bg-[#12171f] px-4 py-3 text-sm">
            <option value="">Choisir un segment</option>
            <option>Retail</option>
            <option>Distributeur</option>
            <option>Restaurant / Foodservice</option>
          </select>
        </label>

        <label className="text-sm text-white/82">
          Volume estimé / mois
          <select name="volume" className="mt-2 w-full rounded-xl border border-white/20 bg-[#12171f] px-4 py-3 text-sm">
            <option value="">Sélectionner un volume</option>
            <option>&lt; 100 unités</option>
            <option>100 - 500 unités</option>
            <option>500 - 2000 unités</option>
            <option>2000+ unités</option>
          </select>
        </label>

        <label className="text-sm text-white/82">
          Ville / zone
          <input name="location" placeholder="Ex: Tunis / Grand Tunis" className="mt-2 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm" />
        </label>

        <label className="text-sm text-white/82 md:col-span-2">
          Objectif commercial
          <textarea
            name="message"
            required
            minLength={10}
            placeholder="Décrivez vos canaux de vente, typologie de points de vente, et objectifs commerciaux."
            className="mt-2 min-h-32 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm"
          />
        </label>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-full bg-[#c9a86a] px-6 py-3 text-sm font-semibold text-[#111317] disabled:cursor-not-allowed disabled:opacity-70 md:col-span-2 md:justify-self-start"
        >
          {status === "submitting" ? "Envoi..." : "Demander une mise en relation commerciale"}
        </button>
      </form>

      {status === "success" ? (
        <div className="mt-5 rounded-xl border border-[#c9a86a]/45 bg-[#c9a86a]/10 px-4 py-3 text-sm text-[#f0dcb8]">
          Merci. Votre demande a bien été envoyée. L’équipe VEGANA vous recontacte sous 48h.
        </div>
      ) : null}

      {status === "error" ? <div className="mt-5 rounded-xl border border-red-500/45 bg-red-500/10 px-4 py-3 text-sm text-red-200">{error}</div> : null}
    </>
  );
}
