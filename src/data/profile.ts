export type Link = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  kind: string;
  role: string;
  context: string;
  proof: string;
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
  subtitle: "Content, SEO, acquisition, plans médias & IA générative",
  value:
    "Je transforme des enjeux business en dispositifs éditoriaux clairs, mesurables et activables sur plusieurs canaux.",
  tags: ["Content", "SEO", "Acquisition", "Plans médias", "IA générative"],
  portrait: "/images/portrait.webp",
  email: "julien@bonavita.fr",
  linkedin: "https://www.linkedin.com/in/julienbonavita",
  status: "Disponible pour échanger sur des rôles communication, marketing contenu, acquisition ou produit.",
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
    label: "plans médias concours pilotés pour les programmes KEDGE",
  },
  {
    value: "SEO",
    label: "contenus Parcoursup, pages programmes et requêtes à enjeu",
  },
  {
    value: "IA",
    label: "référent prompt engineering et usages génératifs côté Content",
  },
  {
    value: "990",
    label: "TOEIC, anglais bilingue en contexte international",
  },
];

export const projects: Project[] = [
  {
    title: "Mur des alumni PGE",
    kind: "Web & admissibles",
    role: "Coding from scratch et valorisation alumni",
    context:
      "Page custom pour le site admissibles, pensée comme preuve sociale autour des diplômés et du ROI du programme.",
    proof:
      "Une preuve sociale publique qui rend les trajectoires alumni plus concrètes pour les candidats.",
    image: "/images/projects/mur-alumni.webp",
    imageAlt:
      "Capture de la page Mur des alumni du site admissibles KEDGE PGE.",
    link: "https://admissibles.kedge.edu/pge/preparer-ma-venue/nos-diplomes",
    linkLabel: "Voir la page",
    featured: true,
    competences: ["HTML/CSS", "UX content", "Preuve sociale"],
  },
  {
    title: "Brochure PGE KEDGE",
    kind: "Brochure & contenus",
    role: "Architecture éditoriale, squelette et contenus",
    context:
      "Refonte d'un support central pour présenter le Programme Grande École, ses parcours, ses preuves et ses messages clés.",
    proof:
      "Un support commercial plus clair pour présenter un programme complexe pendant les temps forts de recrutement.",
    image: "/images/projects/brochure-pge.webp",
    imageAlt:
      "Première page de la brochure PGE KEDGE.",
    link: "https://brochure.kedge.edu/pge.pdf",
    linkLabel: "Ouvrir le PDF public",
    featured: true,
    competences: ["Brochure", "Rédaction", "Coordination"],
  },
  {
    title: "Interview Enes Kanter Freedom",
    kind: "Interview & storytelling",
    role: "Interview publique, préparation éditoriale et valorisation événementielle",
    context:
      "Interview menée devant une assemblée sur le campus, autour du leadership, de l'engagement et des valeurs institutionnelles.",
    proof:
      "Un temps fort incarné en public, avec une ligne éditoriale claire et exploitable par l'événement.",
    image: "/images/projects/enes-kanter-interview.webp",
    imageAlt:
      "Enes Kanter Freedom interviewé sur scène lors d'un événement KEDGE.",
    competences: ["Interview", "Événementiel", "Storytelling"],
  },
  {
    title: "Shooting photo Forum APHEC",
    kind: "Shooting photo & média partenaire",
    role: "Shooting photo terrain et production visuelle",
    context:
      "Photos réalisées lors d'un forum prépa, reprises dans un support média Major Prépa dédié aux écrits.",
    proof:
      "Une couverture terrain réutilisée par un média partenaire sur un temps fort admissions.",
    image: "/images/projects/forum-aphec-major.webp",
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
      "Construction et déploiement de plans de communication multicanaux pour Parcoursup, concours, admissibles, salons et JPO.",
      "Pilotage de plans médias pour les programmes Post-Bac et PGE : briefs, contenus sponsorisés, vidéos, insertions et bilans de campagne.",
      "Production de contenus de conversion : pages programmes, brochures, articles SEO, emailings, marketing automation, quiz, vidéos et supports terrain.",
      "Optimisation SEO des contenus programmes et coordination transverse avec les équipes programmes, commerciales, digitales, RP, social media, vidéo, graphisme et partenaires.",
      "Reporting, recommandations d'optimisation et accompagnement des usages IA appliqués à la communication au sein de l'équipe content.",
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
      "Développement des relations médias, suivi de la couverture presse et mise à jour des outils RP.",
    ],
  },
  {
    title: "Responsable marketing et communication",
    organization: "Aïoli Digital",
    period: "Août 2021 - novembre 2021",
    location: "Les Sables-d'Olonne",
    bullets: [
      "Direction de l'équipe communication et coordination des partenaires externes.",
      "Supervision des plannings, suivi des KPI et amélioration de la qualité des rendus.",
      "Rationalisation des campagnes, optimisation du ROI et développement de partenariats influenceurs.",
    ],
  },
  {
    title: "Chargé de communication & marketing",
    organization: "Greek Boys Choice Foods",
    period: "Juillet 2019 - mars 2020",
    location: "Tarpon Springs, Floride",
    bullets: [
      "Création de supports promotionnels print et digitaux : flyers, newsletters, étiquettes et contenus web.",
      "Élaboration d'actions marketing B2B et campagnes email via Mailchimp en environnement anglophone.",
      "Contribution aux salons professionnels, aux réunions clients et au développement commercial.",
    ],
  },
  {
    title: "Assistant chargé de relations presse",
    organization: "Warning Up",
    period: "Mars 2018 - août 2018",
    location: "Paris",
    bullets: [
      "Gestion opérationnelle des relations médias pour les clients de l'agence.",
      "Rédaction de communiqués, contenus éditoriaux et supports social media.",
      "Suivi des retombées presse, archivage des coupures et préparation de reportings clients.",
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    title: "Contenu & communication",
    solved:
      "Transformer un message programme ou business en contenus utilisables sur web, email, print, vidéo et terrain.",
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
      "Renforcer la visibilité organique et les parcours de conversion sur des pages à enjeu commercial.",
    tools: [
      "YourTextGuru",
      "Contenus Parcoursup",
      "Requêtes prioritaires",
      "CMS",
      "Reporting",
      "Analyse de performance",
    ],
  },
  {
    title: "IA & automatisation",
    solved:
      "Structurer les workflows, cadrer les prompts et automatiser les tâches répétitives sans déléguer le jugement éditorial.",
    tools: [
      "ChatGPT",
      "Claude",
      "Cursor",
      "Codex CLI",
      "Prompt engineering",
      "Veille IA",
    ],
  },
  {
    title: "Tech & environnements",
    solved:
      "Comprendre les outils, les contraintes de production et les environnements techniques au-delà de la couche marketing.",
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
    "Je suis un profil contenu avec une forte culture outil. La tech, l'IA et la course à pied font partie de mon équilibre : curiosité, méthode, efficacité et régularité. Ce sont aussi des repères dans ma façon de travailler.",
  notes: [
    {
      icon: "tech",
      title: "Culture tech",
      text: "Goût pour les outils, les environnements web et les sujets techniques qui facilitent le dialogue avec les équipes digitales ou produit.",
    },
    {
      icon: "ai",
      title: "Usage de l'IA",
      text: "Un appui quotidien pour cadrer les idées, structurer les workflows et gagner du temps sur les tâches répétitives.",
    },
    {
      icon: "sport",
      title: "Course à pied",
      text: "Une pratique qui renforce la discipline, la constance et le goût de la progression mesurable.",
    },
  ],
};

export const contactLinks: Link[] = [
  { label: "julien@bonavita.fr", href: "mailto:julien@bonavita.fr" },
  { label: "LinkedIn", href: profile.linkedin },
];

export const seo = {
  title:
    "Julien Bonavita - Chef de projet marketing & communication, Content SEO & IA",
  description:
    "CV de Julien Bonavita, chef de projet marketing & communication à Bordeaux : content, SEO, acquisition, plans médias et IA générative.",
  keywords: [
    "Julien Bonavita",
    "chef de projet marketing communication Bordeaux",
    "content SEO acquisition plans médias",
    "IA générative communication",
  ],
};
