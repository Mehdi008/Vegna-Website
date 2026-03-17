export type ProductFamily = {
  slug: string;
  name: string;
  signature: string;
  sensoryPromise: string;
  usageContext: string;
  emotionalBenefit: string;
  commercialRelevance: string;
  cta: string;
  tone: "gold" | "olive" | "charcoal";
  media: {
    src: string;
    alt: string;
  };
};

const placeholder = (label: string, c1: string, c2: string) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'><defs><linearGradient id='g' x1='0' x2='1' y1='0' y2='1'><stop stop-color='${c1}'/><stop offset='1' stop-color='${c2}'/></linearGradient></defs><rect width='1200' height='800' fill='url(%23g)'/><circle cx='920' cy='180' r='210' fill='rgba(255,255,255,.16)'/><circle cx='260' cy='600' r='240' fill='rgba(0,0,0,.18)'/><text x='70' y='730' fill='white' font-size='74' font-family='Arial, sans-serif' opacity='.86'>${label}</text></svg>`
  )}`;

export const heroMedia = {
  src: placeholder("VEGANA", "#C9A86A", "#1A1F28"),
  alt: "Univers visuel premium VEGANA"
} as const;

export const universeMedia = [
  {
    title: "Texture & matière",
    src: placeholder("TEXTURE", "#374634", "#11151D"),
    alt: "Matière culinaire premium"
  },
  {
    title: "Usage quotidien",
    src: placeholder("USAGE", "#C9A86A", "#222833"),
    alt: "Assiette végétale premium"
  },
  {
    title: "Signature commerciale",
    src: placeholder("BUSINESS", "#243526", "#0F1115"),
    alt: "Projection commerciale de la gamme"
  }
] as const;

export const navLinks = [
  { href: "/", label: "Accueil" },
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
    cta: "Découvrir le Steak",
    tone: "gold",
    media: {
      src: placeholder("STEAK", "#C9A86A", "#202733"),
      alt: "Visual steak végétal VEGANA"
    }
  },
  {
    slug: "hache-vegetal",
    name: "Haché végétal",
    signature: "La base créative de la cuisine du quotidien.",
    sensoryPromise: "Texture régulière, cuisson stable, fondant maîtrisé.",
    usageContext: "Sauces, farces, bolognaise, bowls chauds.",
    emotionalBenefit: "Une cuisine rapide qui garde du caractère.",
    commercialRelevance: "Référence à forte rotation, simple à intégrer en retail et foodservice.",
    cta: "Explorer le Haché",
    tone: "olive",
    media: {
      src: placeholder("HACHÉ", "#3E4F3A", "#171C24"),
      alt: "Visual haché végétal VEGANA"
    }
  },
  {
    slug: "burger-vegetal",
    name: "Burger végétal",
    signature: "L’impact immédiat d’un burger premium qui convertit.",
    sensoryPromise: "Surface grillée, texture dense, sensation charnue.",
    usageContext: "Fast casual premium, livraison, menus combo.",
    emotionalBenefit: "Le plaisir immédiat d’une bouchée mémorable.",
    commercialRelevance: "Très fort potentiel d’achat impulsif et d’upsell menu.",
    cta: "Voir le Burger",
    tone: "charcoal",
    media: {
      src: placeholder("BURGER", "#2B313C", "#C9A86A"),
      alt: "Visual burger végétal VEGANA"
    }
  },
  {
    slug: "emince-vegetal",
    name: "Émincé végétal",
    signature: "La coupe dynamique pensée pour le rythme urbain.",
    sensoryPromise: "Finesse maîtrisée, prise de sauce rapide, cuisson express.",
    usageContext: "Wok, wraps, salades tièdes, snacking premium.",
    emotionalBenefit: "Un repas moderne, vif, toujours gourmand.",
    commercialRelevance: "Optimise le temps de production en cuisine professionnelle.",
    cta: "Découvrir l’Émincé",
    tone: "olive",
    media: {
      src: placeholder("ÉMINCÉ", "#304236", "#11151C"),
      alt: "Visual émincé végétal VEGANA"
    }
  },
  {
    slug: "escalope-vegetale",
    name: "Escalope végétale",
    signature: "Le classique familial réinventé en version haut de gamme.",
    sensoryPromise: "Tendre à cœur, croustillant propre en surface.",
    usageContext: "Assiettes familiales, sandwiches gourmets, plats du jour.",
    emotionalBenefit: "Le réconfort d’un classique avec une esthétique contemporaine.",
    commercialRelevance: "Référence accessible qui élargit fortement le panier client.",
    cta: "Découvrir l’Escalope",
    tone: "gold",
    media: {
      src: placeholder("ESCALOPE", "#C9A86A", "#171D26"),
      alt: "Visual escalope végétale VEGANA"
    }
  },
  {
    slug: "boulettes-vegetales",
    name: "Boulettes végétales",
    signature: "La générosité conviviale qui rassemble.",
    sensoryPromise: "Moelleux intérieur, tenue parfaite en sauce.",
    usageContext: "Pâtes premium, tajines revisités, tapas chaudes.",
    emotionalBenefit: "Le goût du partage sans compromis plaisir.",
    commercialRelevance: "Format rentable pour menus, buffets et restauration événementielle.",
    cta: "Découvrir les Boulettes",
    tone: "charcoal",
    media: {
      src: placeholder("BOULETTES", "#202632", "#485847"),
      alt: "Visual boulettes végétales VEGANA"
    }
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
