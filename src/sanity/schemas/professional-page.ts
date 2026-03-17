export const professionalPageSchema = {
  name: "professionalPage",
  title: "Page Professionnels",
  type: "document",
  fields: [
    { name: "heroTitle", title: "Titre", type: "string" },
    { name: "heroDescription", title: "Description", type: "text" },
    {
      name: "segments",
      title: "Segments",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "segment", title: "Segment", type: "string" },
            { name: "argument", title: "Argument principal", type: "text" },
            { name: "objection", title: "Objection", type: "string" },
            { name: "reassurance", title: "Rassurance", type: "text" },
            { name: "cta", title: "CTA", type: "string" }
          ]
        }
      ]
    }
  ]
};
