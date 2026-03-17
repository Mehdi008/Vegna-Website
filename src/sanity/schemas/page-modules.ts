export const pageModulesSchema = {
  name: "pageModule",
  title: "Modules de page",
  type: "object",
  fields: [
    { name: "moduleType", title: "Type de bloc", type: "string" },
    { name: "eyebrow", title: "Eyebrow", type: "string" },
    { name: "title", title: "Titre", type: "string" },
    { name: "content", title: "Contenu", type: "text" },
    { name: "media", title: "Média", type: "image", options: { hotspot: true } },
    { name: "ctaLabel", title: "Label CTA", type: "string" },
    { name: "ctaHref", title: "URL CTA", type: "string" }
  ]
};
