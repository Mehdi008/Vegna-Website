export type ProductFamily = {
  slug: string;
  name: string;
  signature: string;
  sensoryPromise: string;
  culinaryUses: string[];
  consumptionMoment: string;
  emotionalBenefit: string;
  commercialBenefit: string;
  cta: string;
};

export const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/gamme", label: "La Gamme" },
  { href: "/pourquoi-vegana", label: "Pourquoi VEGANA" },
  { href: "/qualite-tracabilite", label: "Qualité & Traçabilité" },
  { href: "/professionnels", label: "Professionnels" },
  { href: "/a-propos", label: "À propos" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" }
] as const;

export const productFamilies: ProductFamily[] = [
  {
    slug: "steak-vegetal",
    name: "Steak végétal",
    signature: "La pièce maîtresse, charnue et contemporaine.",
    sensoryPromise: "Croûte dorée, cœur juteux, mâche nette.",
    culinaryUses: ["Poêlé minute", "Assiette bistronomique", "Burger premium"],
    consumptionMoment: "Dîner signature",
    emotionalBenefit: "Le plaisir d’un plat iconique sans compromis moderne.",
    commercialBenefit: "Produit locomotive à forte valeur perçue en rayon et en carte.",
    cta: "Découvrir le steak"
  },
  {
    slug: "hache-vegetal",
    name: "Haché végétal",
    signature: "La base culinaire versatile de la nouvelle cuisine quotidienne.",
    sensoryPromise: "Granulométrie précise, tenue parfaite, cuisson homogène.",
    culinaryUses: ["Sauces", "Farces", "Bolognaise premium"],
    consumptionMoment: "Déjeuner actif",
    emotionalBenefit: "Cuisine facile, résultat riche et gourmand.",
    commercialBenefit: "Rotation élevée grâce à la polyvalence multi-recettes.",
    cta: "Explorer le haché"
  },
  {
    slug: "burger-vegetal",
    name: "Burger végétal",
    signature: "L’icône street premium pensée pour séduire instantanément.",
    sensoryPromise: "Surface grillée, texture dense, sensation généreuse.",
    culinaryUses: ["Smash burger", "Menu fast-casual", "Combo livraison"],
    consumptionMoment: "Repas convivial",
    emotionalBenefit: "Le plaisir immédiat d’une bouchée qui marque.",
    commercialBenefit: "Fort potentiel de vente impulsionnelle en restauration.",
    cta: "Voir le burger"
  },
  {
    slug: "emince-vegetal",
    name: "Émincé végétal",
    signature: "La coupe dynamique pour les cuisines rapides et créatives.",
    sensoryPromise: "Finesse régulière, prise de sauce optimale, cuisson express.",
    culinaryUses: ["Wok", "Wrap", "Salade tiède"],
    consumptionMoment: "Pause déjeuner urbaine",
    emotionalBenefit: "Un repas vif, moderne, toujours appétissant.",
    commercialBenefit: "Réduit le temps de préparation en cuisine professionnelle.",
    cta: "Découvrir l’émincé"
  },
  {
    slug: "escalope-vegetale",
    name: "Escalope végétale",
    signature: "L’élégance familiale revisitée en version végétale premium.",
    sensoryPromise: "Texture tendre, panure maîtrisée, croustillant propre.",
    culinaryUses: ["Plat familial", "Sandwich gourmet", "Menu enfant premium"],
    consumptionMoment: "Dîner familial",
    emotionalBenefit: "Confort culinaire et modernité dans la même assiette.",
    commercialBenefit: "Référence accessible qui élargit la base consommateurs.",
    cta: "Découvrir l’escalope"
  },
  {
    slug: "boulettes-vegetales",
    name: "Boulettes végétales",
    signature: "La générosité conviviale prête à partager.",
    sensoryPromise: "Moelleux intérieur, tenue impeccable en sauce.",
    culinaryUses: ["Tajine revisité", "Pâtes premium", "Tapas chaudes"],
    consumptionMoment: "Repas festif",
    emotionalBenefit: "Le plaisir du partage sans friction.",
    commercialBenefit: "Excellent format pour menus à forte marge et buffet.",
    cta: "Découvrir les boulettes"
  }
];

export const homeCopy = {
  heroTitle: "VEGANA. Le goût du futur, enraciné en Tunisie.",
  heroSubtitle:
    "Une marque signature qui transforme les légumineuses locales en expériences culinaires désirables, prêtes pour le marché.",
  manifesto:
    "VEGANA n’imite pas. VEGANA signe une nouvelle élégance végétale : généreuse, sensorielle, contemporaine, conçue pour séduire le consommateur et convaincre le partenaire commercial.",
  professionalPitch:
    "Retail, distribution, restauration : activez une offre végétale premium à forte désirabilité et exécution opérationnelle claire."
} as const;
