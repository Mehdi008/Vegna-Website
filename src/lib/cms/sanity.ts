export type CmsSource = "sanity";

export const cmsConfig = {
  source: "sanity" as CmsSource,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2024-07-01"
};

export const sanityQueryPlaceholders = {
  homepage: `*[_type == "homePage"][0]{heroTitle, heroSubtitle, manifesto}`,
  products: `*[_type == "productFamily"] | order(orderRank asc){name, slug, signature}`
};
