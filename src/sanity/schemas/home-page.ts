export const homePageSchema = {
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    { name: "heroTitle", title: "Titre Hero", type: "string", validation: (Rule: any) => Rule.required() },
    { name: "heroSubtitle", title: "Sous-titre Hero", type: "text" },
    { name: "manifesto", title: "Manifesto", type: "text" },
    { name: "modules", title: "Modules", type: "array", of: [{ type: "pageModule" }] },
    { name: "seoTitle", title: "SEO Title", type: "string" },
    { name: "seoDescription", title: "SEO Description", type: "text" }
  ]
};
