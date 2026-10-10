export interface Profile {
  name: string;
  title: string;
  location: string;
  tagline: string;
  about: string[];
  email: string;
  /** Laisser vide pour masquer le lien. */
  github: string;
  /** Laisser vide pour masquer le lien. */
  linkedin: string;
}

export interface Project {
  name: string;
  kind: string;
  period: string;
  role: string;
  summary: string;
  highlights: string[];
  stack: string[];
  /** Lien public du projet, s'il existe. */
  url?: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export const PROFILE: Profile = {
  name: 'Johary Randriamitantsoa',
  title: 'Développeur full-stack',
  location: 'Antananarivo, Madagascar',
  tagline:
    'Je conçois et développe des logiciels de bout en bout, de l’architecture et des API jusqu’à l’interface.',
  about: [
    'Développeur full-stack avec plus de deux ans d’expérience, je construis des applications métier — CRM omnicanal, plateforme de location, outils de gestion — et j’y intègre des services tiers : paiement Stripe, téléphonie Twilio, stockage AWS S3.',
    'Mon travail ne s’arrête pas à un framework. Je conçois des API et des modèles de données, je mets en place du cache Redis, je découpe une application en services, et je m’appuie sur les principes SOLID et les design patterns pour que le code continue de bien évoluer. Je m’intéresse particulièrement aux architectures robustes, aux performances et aux systèmes distribués.',
    'Formé en Master 2 MBDS à l’Université Côte d’Azur (big data, mobilité, intégration de systèmes), après un Master 1 en développement logiciel à l’IT University.',
  ],
  email: 'joharyrandriamitantsoa@gmail.com',
  github: 'https://github.com/Johary-dev',
  linkedin: '',
};

export const PROJECTS: Project[] = [
  {
    name: 'TwiSales',
    kind: 'Refonte d’un CRM de vente',
    period: '2025 — aujourd’hui',
    role: 'Développeur full-stack, équipe de 6',
    summary:
      'Refonte complète d’un CRM : contacts, téléphonie et SMS, emails, pipeline de vente et tableaux de bord, dans un monorepo React et NestJS.',
    highlights: [
      'Module opportunités et pipeline de vente, avec colonnes réorganisables par glisser-déposer',
      'Gestion des rôles et des permissions côté interface',
      'Emails et modèles d’emails, paramètres, fiches contacts',
      'Layout de l’application, tables de données et composants partagés',
      'Back-end NestJS avec MongoDB, cache Redis et stockage de fichiers sur AWS S3',
      'Intégration du paiement Stripe',
    ],
    stack: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Radix UI',
      'Zustand',
      'dnd-kit',
      'CASL',
      'Node.js',
      'NestJS',
      'MongoDB',
      'Redis',
      'AWS S3',
      'Stripe',
      'Turborepo',
    ],
  },
  {
    name: 'Console Twilio',
    kind: 'Back-office de téléphonie',
    period: '2025 — 2026',
    role: 'Développeur full-stack',
    summary:
      'Application d’administration reliée au CRM : numéros de téléphone, consommation d’appels et de SMS, facturation.',
    highlights: [
      'Écrans de facturation : factures, historique, statuts et export',
      'Statistiques globales avec filtre par intervalle de dates',
      'Durcissement de la session : expiration du jeton, déconnexion, retrait des données sensibles côté client',
      'API REST Node.js : statistiques de facturation, gestion des numéros, modèles de données utilisateur',
      'Authentification JWT et connexion depuis le CRM réservée aux super-administrateurs',
    ],
    stack: [
      'Vue 3',
      'TypeScript',
      'Vuetify',
      'Pinia',
      'Chart.js',
      'Node.js',
      'Express',
      'MongoDB',
      'Twilio',
      'Socket.io',
    ],
  },
  {
    name: 'Kiizy',
    kind: 'Location de matériel de puériculture',
    period: '2024 — 2025',
    role: 'Développeur full-stack, équipe de 3',
    summary:
      'Site de location en ligne : catalogue, packs, panier, paiement, cagnottes entre proches et espace client.',
    highlights: [
      'Panier et tunnel de commande, avec paiement et abonnement Stripe',
      'Cagnottes : création, participation en ligne, messages et historique',
      'Espace client : commandes, relocation, annulation et factures',
      'Authentification et formulaires validés avec Zod',
      'Back-end Node.js avec MongoDB et Redis',
    ],
    stack: [
      'Next.js 14',
      'TypeScript',
      'HeroUI',
      'Tailwind CSS',
      'Zustand',
      'React Hook Form',
      'Zod',
      'Node.js',
      'MongoDB',
      'Redis',
      'Stripe',
    ],
    url: 'https://kiizy.re',
  },
  {
    name: 'Pharmabot',
    kind: 'Gestion de pharmacie',
    period: '2024',
    role: 'Développeur front-end, équipe de 4',
    summary:
      'Application de gestion d’officine : articles, entrées de stock, inventaire, ventes et tableau de bord.',
    highlights: [
      'Entrées de stock et validation des factures fournisseurs',
      'Inventaire paginé et déconditionnement d’articles',
      'Ventes : calculs de TVA et de remises, tickets, indicateurs du tableau de bord',
      'Table et pagination infinie réutilisables',
    ],
    stack: ['Next.js', 'TypeScript', 'NextUI', 'Tailwind CSS', 'Zustand', 'React Hook Form', 'Zod'],
  },
];

/** Projets académiques : la section reste masquée tant que la liste est vide. */
export const ACADEMIC_PROJECTS: Project[] = [
  {
    name: 'Générateur de datasets',
    kind: 'Back-end en microservices',
    period: '2026',
    role: 'Master 2 MIAGE MBDS, en binôme',
    summary:
      'API qui décrit la structure d’un jeu de données (entités, attributs, contraintes), génère des valeurs cohérentes et les exporte. Projet de validation des principes SOLID.',
    highlights: [
      'Conception SOLID : types, générateurs, contraintes et exporteurs derrière des interfaces, extensibles sans toucher à l’existant',
      'Six modules : passerelle, annuaire de services, configuration centralisée, gestion des datasets, génération',
      'Communication entre services avec OpenFeign et disjoncteur Resilience4j',
      'Export en archive ZIP aux formats JSON, CSV et XML, données réalistes via des API externes',
      'Tests d’intégration avec Postman et Newman',
    ],
    stack: [
      'Java',
      'Spring Boot',
      'Spring Cloud Gateway',
      'Eureka',
      'Config Server',
      'OpenFeign',
      'Resilience4j',
      'Spring Data JPA',
      'H2',
      'MapStruct',
      'Gradle',
    ],
  },
  {
    name: 'Restaurant mobile et IA',
    kind: 'Application Android',
    period: '2026',
    role: 'Master 2 MIAGE MBDS, équipe de 3',
    summary:
      'Application de commande pour un restaurant, avec un parcours client et un parcours restaurateur, enrichie de fonctions d’intelligence artificielle.',
    highlights: [
      'Back-office du restaurateur : gestion des catégories et des plats, suivi des commandes',
      'Suggestion de plat par IA : l’utilisateur décrit son envie, un modèle Llama propose un plat de la carte',
      'Construction du prompt à partir du menu, puis rapprochement de la réponse avec les plats pour l’ajout au panier',
      'Architecture MVVM avec état exposé en StateFlow et persistance locale Room',
    ],
    stack: ['Kotlin', 'Jetpack Compose', 'Room', 'MVVM', 'Retrofit', 'Hugging Face', 'Llama 3.2'],
  },
  {
    name: 'Dikanteniko',
    kind: 'Plateforme de gestion de traductions',
    period: '2023 — 2025',
    role: 'Projet de soutenance de licence',
    summary:
      'Application web pour traduire un produit à plusieurs : projets, langues, contributeurs, rôles et suivi des traductions.',
    highlights: [
      'Projets de traduction, langues de référence et invitation de contributeurs',
      'Table de traductions éditable, avec suggestions et historique des modifications',
      'Import et export des données, statistiques d’avancement',
      'Rôles et permissions, authentification complète, abonnements payants avec Stripe',
      'Routes API Next.js entre l’interface et le service de données',
    ],
    stack: [
      'React',
      'TypeScript',
      'Vite',
      'Ant Design',
      'Zustand',
      'ApexCharts',
      'Stripe',
      'Next.js 14',
      'NextUI',
      'Zod',
    ],
  },
];

export const SKILLS: SkillGroup[] = [
  {
    label: 'Front-end',
    items: ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS'],
  },
  { label: 'Back-end', items: ['Node.js', 'NestJS', 'Java', 'Spring Boot', 'Laravel'] },
  { label: 'Bases de données', items: ['MongoDB', 'PostgreSQL', 'Oracle', 'Redis'] },
  { label: 'Cloud et services', items: ['AWS S3', 'Stripe', 'Twilio', 'Socket.io'] },
  {
    label: 'Architecture',
    items: ['SOLID', 'Clean Architecture', 'Design patterns', 'Microservices'],
  },
  { label: 'Mobile', items: ['Kotlin', 'Jetpack Compose'] },
  { label: 'Outils', items: ['Git', 'GitHub', 'GitLab', 'Bitbucket', 'Turborepo'] },
];
