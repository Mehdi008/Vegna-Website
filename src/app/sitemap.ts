import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://vegana.tn";
  const now = new Date();

  return [
    "",
    "/gamme",
    "/pourquoi-vegana",
    "/qualite-tracabilite",
    "/professionnels",
    "/a-propos",
    "/faq",
    "/contact"
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8
  }));
}
