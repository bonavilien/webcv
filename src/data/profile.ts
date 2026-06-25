export type Link = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  kind: string;
  role: string;
  context: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  link?: string;
  linkLabel?: string;
  featured?: boolean;
  competences: string[];
};

export type Experience = {
  title: string;
  organization: string;
  period: string;
  location: string;
  bullets: string[];
};

export type SkillGroup = {
  title: string;
  solved: string;
  tools: string[];
};

export const profile = {
  name: "Julien Bonavita",
  initials: "JB",
  location: "Bordeaux, France",
  title: "Chef de projet marketing & communication",
  subtitle: "Contenu, SEO, acquisition, plans médias & IA",
  value:
    "Je clarifie les messages, produis les bons supports et mesure ce qui aide le recrutement à avancer.",
  tags: ["Contenu", "SEO", "Acquisition", "Plans médias", "IA"],
  portrait: "images/portrait-hero.webp",
  email: "julien@bonavita.fr",
  linkedin: "https://www.linkedin.com/in/julienbonavita",
  status: "Ouvert à des postes marketing, contenu, acquisition ou produit.",
} as const;

export const navigation = [
  { label: "Projets", href: "#projets" },
  { label: "Expériences", href: "#experiences" },
  { label: "Compétences", href: "#competences" },
  { label: "À propos", href: "#a-propos" },
  { label: "Contact", href: "#contact" },
] satisfies Link[];

export const proofSignals = [
  {
    value: "250k€+",
    label: "budget média concours piloté chez KEDGE",
  },
  {
    value: "SEO",
    label: "pages programmes et requêtes de recrutement",
  },
  {
    value: "IA",
    label: "référent IA pour l’équipe Content",
  },
  {
    value: "990",
    label: "TOEIC 990/990",
  },
];

export const projects: Project[] = [
  {
    title: "Mur des alumni PGE",
    kind: "Développement web",
    role:
      "Création d'un wall of alumni pour mettre en avant un programme phare d'une école de commerce.",
    context:
      "Module admissibles conçu pour montrer des parcours diplômés et donner du concret aux candidats.",
    image: "images/projects/mur-alumni.webp",
    imageAlt:
      "Wall of alumni présentant des diplômés du Programme Grande École de KEDGE.",
    link: "https://admissibles.kedge.edu/pge/preparer-ma-venue/nos-diplomes",
    linkLabel: "Voir la page",
    featured: true,
    competences: ["HTML/CSS", "UX content", "Preuve sociale"],
  },
  {
    title: "Brochure PGE KEDGE",
    kind: "Brochure & contenus",
    role:
      "Architecture et contenu de la brochure du Programme Grande École de KEDGE.",
    context:
      "Support de recrutement structuré pour rendre le Programme Grande École plus lisible pendant les temps forts.",
    image: "images/projects/brochure-pge.webp",
    imageAlt:
      "Première page de la brochure PGE KEDGE.",
    link: "https://brochure.kedge.edu/pge.pdf",
    linkLabel: "Ouvrir le PDF public",
    featured: true,
    competences: ["Brochure", "Rédaction", "Coordination"],
  },
  {
    title: "Interview Enes Kanter Freedom",
    kind: "Interview",
    role: "Interview publique",
    context:
      "Échange mené sur scène devant les étudiants et candidats, avec un angle leadership et engagement.",
    image: "images/projects/enes-kanter-interview.webp",
    imageAlt:
      "Enes Kanter Freedom interviewé sur scène lors d'un événement KEDGE.",
    competences: ["Interview", "Événementiel", "Storytelling"],
  },
  {
    title: "Shooting Photo",
    kind: "Shooting photo & média partenaire",
    role: "Shooting lors d'un évènement type salon étudiant.",
    context:
      "Reportage photo réalisé pendant le forum APHEC, puis repris dans Le Major de Major Prépa.",
    image: "images/projects/forum-aphec-major.webp",
    imageAlt:
      "Double page du Major avec des photos du forum APHEC réalisées sur le terrain.",
    competences: ["Shooting photo", "Événementiel", "Média partenaire"],
  },
];

export const experiences: Experience[] = [
  {
    title: "Content Manager, Programmes, acquisition & plans médias",
    organization: "KEDGE Business School",
    period: "Septembre 2022 - aujourd'hui",
    location: "Bordeaux, hybride",
    bullets: [
      "Construction de calendriers multicanaux pour Parcoursup, concours, admissibles, salons et JPO.",
      "Pilotage de budgets médias Post-Bac et PGE : briefs, contenus sponsorisés, vidéos, insertions et bilans.",
      "Production de supports de conversion : pages, brochures, articles SEO, emailings, quiz, vidéos et outils salons.",
      "Coordination avec les équipes programmes, commerciales, digital, RP, social media, vidéo, graphisme et partenaires.",
      "Reporting, recommandations et accompagnement des usages IA dans l’équipe content.",
    ],
  },
  {
    title: "Chargé des relations média",
    organization: "KEDGE Business School",
    period: "Février 2022 - janvier 2023",
    location: "Bordeaux",
    bullets: [
      "Rédaction et diffusion de communiqués, dossiers de presse et éléments de langage.",
      "Organisation d'événements RP : conférences, voyages de presse et rencontres journalistes.",
      "Suivi des journalistes, de la couverture presse et des outils RP.",
    ],
  },
  {
    title: "Responsable marketing et communication",
    organization: "Aïoli Digital",
    period: "Août 2021 - novembre 2021",
    location: "Les Sables-d'Olonne",
    bullets: [
      "Encadrement de l’équipe communication et des partenaires externes.",
      "Suivi des plannings, des KPI et de la qualité des livrables.",
      "Optimisation des campagnes et développement de partenariats influenceurs.",
    ],
  },
  {
    title: "Chargé de communication & marketing",
    organization: "Greek Boys Choice Foods",
    period: "Juillet 2019 - mars 2020",
    location: "Tarpon Springs, Floride",
    bullets: [
      "Création de flyers, newsletters, étiquettes produits et pages web.",
      "Déploiement d’actions B2B et de campagnes Mailchimp en anglais.",
      "Participation aux salons professionnels et aux rendez-vous clients.",
    ],
  },
  {
    title: "Assistant chargé de relations presse",
    organization: "Warning Up",
    period: "Mars 2018 - août 2018",
    location: "Paris",
    bullets: [
      "Gestion des contacts journalistes pour les clients de l'agence.",
      "Rédaction de communiqués, textes éditoriaux et posts sociaux.",
      "Suivi des retombées, archivage presse et reportings clients.",
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    title: "Contenu & communication",
    solved:
      "Passer d’un message stratégique à des supports prêts à diffuser.",
    tools: [
      "Stratégie éditoriale",
      "Rédaction web",
      "Brochures",
      "Scripts vidéo",
      "Newsletters",
      "Éléments de langage",
    ],
  },
  {
    title: "SEO & acquisition",
    solved:
      "Faire remonter les pages utiles et améliorer les points de passage candidats.",
    tools: [
      "Guides SEO",
      "Contenus Parcoursup",
      "Requêtes prioritaires",
      "CMS",
      "Reporting",
      "Analyse de performance",
    ],
  },
  {
    title: "IA & workflows",
    solved:
      "Cadrer les prompts, accélérer les brouillons et garder la décision éditoriale côté humain.",
    tools: [
      "ChatGPT",
      "Claude",
      "Cursor",
      "Codex CLI",
      "Prompts IA",
      "Veille IA",
    ],
  },
  {
    title: "Tech & environnements",
    solved:
      "Travailler avec les contraintes web, outils et production sans rester côté brief.",
    tools: [
      "Astro",
      "Linux",
      "Docker",
      "macOS",
      "Windows",
      "Self-hosting",
    ],
  },
];

export const about = {
  body:
    "La tech m’aide à dialoguer avec les équipes produit ou digital. La course à pied m’apporte une discipline simple : suivre, ajuster, progresser.",
  notes: [
    {
      icon: "tech",
      title: "Culture tech",
      text: "Une pratique régulière des outils web, utile pour cadrer les sujets avec les équipes digitales ou produit.",
    },
    {
      icon: "ai",
      title: "Usage de l'IA",
      text: "Un usage de travail : cadrage, brouillons, variantes, automatisation légère.",
    },
    {
      icon: "sport",
      title: "Course à pied",
      text: "Un repère de régularité : entraînement, mesure, progression.",
    },
  ],
};

export const contactLinks: Link[] = [
  { label: "julien@bonavita.fr", href: "mailto:julien@bonavita.fr" },
  { label: "LinkedIn", href: profile.linkedin },
];

export const seo = {
  title: "Julien Bonavita | Contenu, SEO & IA",
  description:
    "CV de Julien Bonavita, chef de projet marketing et communication à Bordeaux : contenu, SEO, acquisition et plans médias.",
  keywords: [
    "Julien Bonavita",
    "chef de projet marketing communication Bordeaux",
    "content SEO acquisition plans médias",
    "IA générative communication",
  ],
};
