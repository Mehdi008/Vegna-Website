import type { Metadata } from "next";
import ContactLeadForm from "@/components/forms/ContactLeadForm";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Contact — VEGANA",
  description:
    "Contactez l’équipe VEGANA pour vos demandes de partenariat, distribution ou activation commerciale.",
  openGraph: {
    title: "Contact — VEGANA",
    description: "Parlons lancement, partenariat et activation commerciale avec VEGANA.",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "VEGANA" }]
  }
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Parlons lancement, partenariat et activation commerciale."
        text="L’équipe VEGANA accompagne distributeurs, enseignes et professionnels de la restauration sur une mise en marché rapide et premium."
      />
      <section className="section-shell pb-24">
        <ContactLeadForm />
      </section>
    </>
  );
}
