export type ProductFamily = {
  slug: string;
  name: string;
  signature: string;
  sensoryPromise: string;
  usageContext: string;
  emotionalBenefit: string;
  commercialRelevance: string;
  cta: string;
};

export const navLinks = [
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
    signature: "La pièce signature, intense et contemporaine.",
    sensoryPromise: "Croûte nette, cœur juteux, mâche généreuse.",
    usageContext: "Assiette premium, burger gourmet, menu chef.",
    emotionalBenefit: "Le plaisir d’un plat iconique, version nouvelle génération.",
    commercialRelevance: "Produit locomotive pour rayon premium et cartes restauration.",
    cta: "Découvrir le Steak"
  },
  {
    slug: "hache-vegetal",
    name: "Haché végétal",
    signature: "La base créative de la cuisine du quotidien.",
    sensoryPromise: "Texture régulière, cuisson stable, fondant maîtrisé.",
    usageContext: "Sauces, farces, bolognaise, bowls chauds.",
    emotionalBenefit: "Une cuisine rapide qui garde du caractère.",
    commercialRelevance: "Référence à forte rotation, simple à intégrer en retail et foodservice.",
    cta: "Explorer le Haché"
  },
  {
    slug: "burger-vegetal",
    name: "Burger végétal",
    signature: "L’impact immédiat d’un burger premium qui convertit.",
    sensoryPromise: "Surface grillée, texture dense, sensation charnue.",
    usageContext: "Fast casual premium, livraison, menus combo.",
    emotionalBenefit: "Le plaisir immédiat d’une bouchée mémorable.",
    commercialRelevance: "Très fort potentiel d’achat impulsif et d’upsell menu.",
    cta: "Voir le Burger"
  },
  {
    slug: "emince-vegetal",
    name: "Émincé végétal",
    signature: "La coupe dynamique pensée pour le rythme urbain.",
    sensoryPromise: "Finesse maîtrisée, prise de sauce rapide, cuisson express.",
    usageContext: "Wok, wraps, salades tièdes, snacking premium.",
    emotionalBenefit: "Un repas moderne, vif, toujours gourmand.",
    commercialRelevance: "Optimise le temps de production en cuisine professionnelle.",
    cta: "Découvrir l’Émincé"
  },
  {
    slug: "escalope-vegetale",
    name: "Escalope végétale",
    signature: "Le classique familial réinventé en version haut de gamme.",
    sensoryPromise: "Tendre à cœur, croustillant propre en surface.",
    usageContext: "Assiettes familiales, sandwiches gourmets, plats du jour.",
    emotionalBenefit: "Le réconfort d’un classique avec une esthétique contemporaine.",
    commercialRelevance: "Référence accessible qui élargit fortement le panier client.",
    cta: "Découvrir l’Escalope"
  },
  {
    slug: "boulettes-vegetales",
    name: "Boulettes végétales",
    signature: "La générosité conviviale qui rassemble.",
    sensoryPromise: "Moelleux intérieur, tenue parfaite en sauce.",
    usageContext: "Pâtes premium, tajines revisités, tapas chaudes.",
    emotionalBenefit: "Le goût du partage sans compromis plaisir.",
    commercialRelevance: "Format rentable pour menus, buffets et restauration événementielle.",
    cta: "Découvrir les Boulettes"
  }
];

export const differentiators = [
  "Pensé pour le goût avant tout",
  "Marque tunisienne premium de nouvelle génération",
  "Formulation et sourcing maîtrisés",
  "Univers vendable pour consommateurs et partenaires"
] as const;

export const faqs = [
  {
    q: "VEGANA s’adresse-t-elle uniquement aux vegans ?",
    a: "Non. VEGANA parle à tous ceux qui veulent du goût, du style culinaire et une alternative végétale premium."
  },
  {
    q: "Comment devenir distributeur ou revendeur ?",
    a: "Via la page Professionnels : qualification rapide, prise de contact commerciale et réponse prioritaire."
  },
  {
    q: "Les produits sont-ils adaptés à la restauration ?",
    a: "Oui. La gamme est pensée pour des usages rapides, stables et rentables en cuisine pro."
  }
] as const;
