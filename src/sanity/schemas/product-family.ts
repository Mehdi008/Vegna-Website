export const productFamilySchema = {
  name: "productFamily",
  title: "Famille produit",
  type: "document",
  fields: [
    { name: "name", title: "Nom", type: "string", validation: (Rule: any) => Rule.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "name" }, validation: (Rule: any) => Rule.required() },
    { name: "signature", title: "Signature courte", type: "string" },
    { name: "sensoryPromise", title: "Promesse sensorielle", type: "text" },
    { name: "culinaryUses", title: "Usages culinaires", type: "array", of: [{ type: "string" }] },
    { name: "consumptionMoment", title: "Moment de consommation", type: "string" },
    { name: "emotionalBenefit", title: "Bénéfice émotionnel", type: "text" },
    { name: "commercialBenefit", title: "Bénéfice commercial", type: "text" },
    { name: "cta", title: "CTA", type: "string" },
    { name: "heroImage", title: "Visuel principal", type: "image", options: { hotspot: true } }
  ]
};
