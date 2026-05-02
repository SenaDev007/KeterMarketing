export type ShowcaseProject = {
  id: number;
  title: string;
  tag: string;
  category: string;
  accent: string;
  image: string;
  alt: string;
  context: string;
  outcome: string;
  metrics: string[];
  deliverables: string[];
};

export const showcaseProjects: ShowcaseProject[] = [
  {
    id: 1,
    title: "Cabinet de conseil B2B",
    tag: "Site vitrine premium",
    category: "Site Vitrine",
    accent: "#D4AF37",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80",
    alt: "Bureau haut de gamme avec ordinateur portable ouvert sur un site professionnel.",
    context:
      "Un cabinet de conseil avec une offre solide mais une présence en ligne trop froide pour rassurer les décideurs.",
    outcome:
      "Une page d'accueil plus claire, plus crédible, et conçue pour transformer les visites en demandes qualifiées.",
    metrics: ["Positionnement clarifié", "Parcours de conversion resserré", "Prise de contact simplifiée"],
    deliverables: ["Architecture 6 pages", "Copywriting complet", "Direction artistique", "Déploiement SEO-ready"],
  },
  {
    id: 2,
    title: "Offre formation & coaching",
    tag: "Landing page de vente",
    category: "Landing Page",
    accent: "#AFCB6B",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
    alt: "Équipe marketing observant des écrans avec statistiques et tunnel de conversion.",
    context:
      "Une offre premium vendue avec trop d'informations et pas assez de tension narrative dans la page.",
    outcome:
      "Une landing page structurée pour convaincre vite, lever les objections et pousser vers la réservation.",
    metrics: ["Narration plus nette", "Sections raccourcies", "CTA répétés aux bons moments"],
    deliverables: ["Angle d'offre", "Copy conversion", "Maquette responsive", "Intégration Calendly"],
  },
  {
    id: 3,
    title: "Agence de services locale",
    tag: "Refonte stratégique",
    category: "Refonte",
    accent: "#6DAAE8",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    alt: "Dashboard analytique affiché sur écran avec graphiques de croissance.",
    context:
      "Une agence avec du trafic, mais un site qui ne prouvait ni la qualité du travail ni la valeur de l'accompagnement.",
    outcome:
      "Une refonte orientée preuve, avec davantage de réalisations, de résultats visibles et de signaux de confiance.",
    metrics: ["Hiérarchie éditoriale revue", "Preuves visuelles renforcées", "Sections plus fluides au scroll"],
    deliverables: ["Audit conversion", "Refonte UX", "Réécriture des pages", "Optimisation des performances"],
  },
  {
    id: 4,
    title: "Marque de services récurrents",
    tag: "Gestion & croissance",
    category: "Gestion",
    accent: "#E4A35E",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
    alt: "Réunion d'équipe devant un grand écran de présentation stratégique.",
    context:
      "Un site vivant qui devait rester rapide, à jour et cohérent pendant que l'entreprise accélérait.",
    outcome:
      "Un pilotage plus stable, avec maintenance continue, contenus actualisés et corrections sans friction.",
    metrics: ["Maintenance continue", "Vitesse surveillée", "Modifications traitées sans délai"],
    deliverables: ["Support mensuel", "Mises à jour", "Améliorations UX", "Suivi technique"],
  },
];

