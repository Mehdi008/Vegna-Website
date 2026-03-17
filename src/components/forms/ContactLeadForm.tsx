"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactLeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      type: "contact",
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      company: String(formData.get("company") ?? ""),
      message: String(formData.get("message") ?? "")
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const result = (await response.json()) as { ok?: boolean; errors?: string[] };

      if (!response.ok || !result.ok) {
        setStatus("error");
        setError(result.errors?.join(" ") || "Une erreur est survenue. Veuillez réessayer.");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
      setError("Impossible d’envoyer votre message pour le moment.");
    }
  };

  return (
    <>
      <form onSubmit={onSubmit} className="glass grid max-w-3xl gap-4 rounded-3xl p-6 md:grid-cols-2 md:p-10" noValidate>
        <input name="name" required placeholder="Nom" className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm" />
        <input name="email" required placeholder="Email" type="email" className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm" />
        <input name="company" placeholder="Entreprise" className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm md:col-span-2" />
        <textarea name="message" required minLength={10} placeholder="Votre message" className="min-h-32 rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm md:col-span-2" />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-full bg-[#c9a86a] px-6 py-3 text-sm font-semibold text-[#111317] disabled:cursor-not-allowed disabled:opacity-70 md:col-span-2 md:justify-self-start"
        >
          {status === "submitting" ? "Envoi..." : "Envoyer"}
        </button>
      </form>

      {status === "success" ? <p className="mt-4 text-sm text-[#c9a86a]">Merci. Nous revenons vers vous rapidement.</p> : null}
      {status === "error" ? <p className="mt-4 text-sm text-red-300">{error}</p> : null}
    </>
  );
}
