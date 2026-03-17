# VEGANA — Build Spec Exécutable + Code V1

## 1. Architecture technique finale
- **Framework**: Next.js 14 App Router (SSR + static hybride)
- **Langage**: TypeScript strict (`strict: true`, `noImplicitReturns: true`)
- **UI**: Tailwind CSS + design tokens centralisés
- **Motion**: Framer Motion par défaut, GSAP réservé aux séquences immersives futures
- **CMS**: Sanity (schémas dédiés Home, modules, familles produits, page professionnels)
- **SEO**: metadata API Next.js + JSON-LD + routing propre FR
- **Analytics**: couche dataLayer événementielle GA4/GTM
- **Architecture cible**:
  - `src/app`: routes + layouts
  - `src/components`: composants UI, sections, layout, motion
  - `src/content`: contenus de démo FR premium
  - `src/lib`: seo, analytics, cms, motion
  - `src/sanity/schemas`: modèles éditoriaux
  - `src/styles`: globals + tokens

## 2. Arborescence complète du projet
```txt
.
├── BUILD_SPEC_V1.md
├── VEGANA_SITE_SIGNATURE_MASTERPLAN.md
├── package.json
├── tsconfig.json
├── next.config.mjs
├── postcss.config.mjs
├── tailwind.config.ts
├── next-env.d.ts
└── src
    ├── app
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── a-propos/page.tsx
    │   ├── contact/page.tsx
    │   ├── faq/page.tsx
    │   ├── gamme/page.tsx
    │   ├── professionnels/page.tsx
    │   ├── pourquoi-vegana/page.tsx
    │   └── qualite-tracabilite/page.tsx
    ├── components
    │   ├── layout/site-footer.tsx
    │   ├── layout/site-header.tsx
    │   ├── motion/reveal.tsx
    │   ├── sections/hero-section.tsx
    │   ├── sections/manifesto-section.tsx
    │   ├── sections/page-hero.tsx
    │   ├── sections/product-grid-section.tsx
    │   ├── sections/professional-section.tsx
    │   └── ui/button.tsx
    ├── content/site-content.ts
    ├── lib
    │   ├── analytics/events.ts
    │   ├── cms/sanity.ts
    │   ├── motion/presets.ts
    │   └── seo/metadata.ts
    ├── sanity/schemas
    │   ├── home-page.ts
    │   ├── index.ts
    │   ├── page-modules.ts
    │   ├── product-family.ts
    │   └── professional-page.ts
    └── styles
        ├── globals.css
        └── tokens.ts
```

## 3. Sitemap / routes finales
- `/` Home signature
- `/gamme` Catalogue narratif des 6 familles
- `/pourquoi-vegana` Positionnement et différenciation
- `/qualite-tracabilite` Preuve et crédibilité
- `/professionnels` Tunnel business segmenté
- `/a-propos` Vision et ancrage de marque
- `/faq` Levée d’objections B2C/B2B
- `/contact` Conversion relation commerciale

## 4. Design system complet
- **Fondations**
  - Typo display: Cormorant Garamond (impact éditorial)
  - Typo body: Inter (lisibilité high-density)
  - Grille: container max 1280px + colonnes fluides
- **Composants core**
  - Boutons primaires/secondaires
  - Header sticky premium + CTA business
  - Footer conversion brand-led
  - PageHero réutilisable
  - Cards produits enrichies
- **Patterns sectionnels**
  - Hero cinématique text-first
  - Manifesto block éditorial
  - Product grid narratif
  - Segment cards B2B (argument / objection / rassurance)
- **Règles d’or**
  - Pas de composant décoratif sans rôle conversion ou preuve
  - Hiérarchie visuelle = intention marketing
  - Mobile premium sans suppression de contenu clé

## 5. Design tokens complets
```ts
color.bg = #F6F1E7
color.surface = #FFFFFF
color.text = #111317
color.textMuted = #374151
color.primary = #344132
color.accent = #C9A86A
color.border = #DFD6C7
spacing.sectionY.mobile = 4rem
spacing.sectionY.desktop = 7rem
radius.card = 1.25rem
radius.pill = 9999px
motion.duration.micro = 0.25
motion.duration.base = 0.45
motion.duration.reveal = 0.8
motion.easing = [0.22, 0.61, 0.36, 1]
shadow.premium = 0 24px 80px rgba(17,19,23,0.18)
```

## 6. Schémas CMS détaillés
- **`homePage`**
  - `heroTitle`, `heroSubtitle`, `manifesto`, `modules[]`, `seoTitle`, `seoDescription`
- **`pageModule` (block réutilisable)**
  - `moduleType`, `eyebrow`, `title`, `content`, `media`, `ctaLabel`, `ctaHref`
- **`productFamily`**
  - `name`, `slug`, `signature`, `sensoryPromise`, `culinaryUses[]`, `consumptionMoment`, `emotionalBenefit`, `commercialBenefit`, `cta`, `heroImage`
- **`professionalPage`**
  - `heroTitle`, `heroDescription`, `segments[]` avec `segment`, `argument`, `objection`, `reassurance`, `cta`

## 7. Liste des composants avec responsabilités
- `SiteHeader`: navigation et CTA sticky business
- `SiteFooter`: fermeture de parcours conversion + signature de marque
- `Button`: CTA unifié avec variantes visuelles
- `Reveal`: animation standard framer pour entrées viewport
- `HeroSection`: impact 5 secondes + CTA double
- `ManifestoSection`: couche narrative premium
- `ProductGridSection`: synthèse gamme vendable
- `ProfessionalSection`: pré-conversion B2B segmentée
- `PageHero`: hero réutilisable pages internes

## 8. Structure page par page
- **Home**
  1) Hero statement + CTA
  2) Manifesto
  3) Grille gamme
  4) Bloc professionnels
- **La Gamme**
  - Cartes détaillées par famille avec standard 8 champs
- **Pourquoi VEGANA**
  - Héro de positionnement
- **Qualité & Traçabilité**
  - Héro preuve / crédibilité
- **Professionnels**
  - Héro business + segmentation 3 blocs
- **À propos / FAQ / Contact**
  - Entrées éditoriales prêtes à enrichissement CMS

## 9. Copy de démonstration premium en français
- **Hero**: « VEGANA. Le goût du futur, enraciné en Tunisie. »
- **Manifesto**: « VEGANA n’imite pas. VEGANA signe une nouvelle élégance végétale... »
- **B2B pitch**: « Retail, distribution, restauration : activez une offre végétale premium... »
- **Familles produits**: signatures, promesses sensorielles, bénéfices émotionnels et commerciaux fournis pour les 6 familles.

## 10. Plan motion détaillé
- **Preset unique V1** via `Reveal`
  - initial: `opacity 0 + y 24`
  - in-view: `opacity 1 + y 0`
  - duration: `0.8`
  - easing: `[0.22, 0.61, 0.36, 1]`
- **Politique d’usage**
  - max 1 animation principale visible à la fois
  - CTA sans délai bloquant
  - reduced-motion prévu pour V1.1

## 11. Plan SEO technique
- Metadata globale dans `layout.tsx`
- Utilitaire `createPageMetadata` pour scaler par page
- URLs FR lisibles orientées intention
- Préparation JSON-LD (V1.1)
- Priorité: indexation pages business + gamme

## 12. Plan analytics
- Couche `trackEvent` dataLayer avec nomenclature:
  - `cta_click`
  - `lead_submit_b2b`
  - `lead_submit_contact`
  - `scroll_depth`
  - `product_card_click`
- Convention payload:
  - `page`, `section`, `cta_label`, `segment`, `product_family`
- Intégration GTM/GA4 prévue au branch marketing ops

## 13. Génération du code V1
- Base Next.js App Router installée
- TypeScript strict et Tailwind configurés
- Routes finales livrées
- Composants premium V1 implémentés
- Contenu de démonstration premium en français injecté
- Schémas Sanity prêts pour connexion projet
