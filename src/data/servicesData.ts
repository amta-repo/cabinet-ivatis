// Service detail data with slugs for routing and image assignments

// Activity images
import energie1 from "@/assets/activities/energie-1.jpg";
import energie2 from "@/assets/activities/energie-2.jpg";
import energie3 from "@/assets/activities/energie-3.jpg";
import energiePylone1 from "@/assets/activities/energie-pylone-1.jpg";
import energiePylone2 from "@/assets/activities/energie-pylone-2.jpg";
import environnement1 from "@/assets/activities/environnement-1.jpg";
import audit1 from "@/assets/activities/audit-1.jpg";
import audit2 from "@/assets/activities/audit-2.jpg";
import audit3 from "@/assets/activities/audit-3.jpg";
import audit4 from "@/assets/activities/audit-4.jpg";
import auditGolden from "@/assets/activities/audit-golden.jpg";
import eies1 from "@/assets/activities/eies-1.jpg";
import eies2 from "@/assets/activities/eies-2.jpg";
import eies3 from "@/assets/activities/eies-3.jpg";
import coastal1 from "@/assets/activities/coastal-1.jpg";
import coastal2 from "@/assets/activities/coastal-2.jpg";
import coastal3 from "@/assets/activities/coastal-3.jpg";
import transport1 from "@/assets/activities/transport-1.jpg";
import transport2 from "@/assets/activities/transport-2.jpg";
import transport3 from "@/assets/activities/transport-3.jpg";
import batiment1 from "@/assets/activities/batiment-1.jpg";
import batiment2 from "@/assets/activities/batiment-2.jpg";
import batiment3 from "@/assets/activities/batiment-3.jpg";
import batiment4 from "@/assets/activities/batiment-4.jpg";
import formationSauvegarde from "@/assets/activities/formation-sauvegarde.jpg";
import formationSecurisme from "@/assets/activities/formation-securisme.jpg";
import formationSecurisme2 from "@/assets/activities/formation-securisme-2.jpg";
import eiesMain from "@/assets/services/eies-main.jpg";
import parcMain from "@/assets/services/parc-main.jpg";
import auditMain from "@/assets/services/audit-main.jpg";
import suiviMain from "@/assets/services/suivi-main.jpg";
import eessMain from "@/assets/services/eess-main.jpg";
import cgesMain from "@/assets/services/cges-main.jpg";

import {
  Target,
  FileSearch,
  Leaf,
  Shield,
  ClipboardCheck,
  Users,
  BookOpen,
  Globe,
  Waves,
  Mountain,
  TreePine,
  Map,
  Compass,
  HardHat,
  GraduationCap,
  Landmark,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface ServiceData {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  fullDescription: string;
  details: string[];
  images: string[];
  imageCaptions?: string[];
}

export const servicesData: ServiceData[] = [
  {
    slug: "eess",
    icon: Target,
    title: "Évaluation Environnementale et Sociale Stratégique (EESS)",
    shortDescription:
      "Analyse stratégique des politiques, plans et programmes afin d'intégrer les enjeux environnementaux et sociaux dès la phase de planification.",
    fullDescription:
      "L'Évaluation Environnementale et Sociale Stratégique (EESS) est un outil d'aide à la décision qui permet d'intégrer les considérations environnementales et sociales dans les politiques, plans et programmes dès leur conception. IVATIS accompagne les décideurs dans l'orientation de leurs stratégies vers un développement durable.",
    details: [
      "Analyse des politiques sectorielles et programmes de développement",
      "Identification des enjeux environnementaux et sociaux stratégiques",
      "Évaluation des alternatives et recommandations",
      "Intégration des principes de développement durable",
      "Consultation des parties prenantes au niveau stratégique",
    ],
    images: [environnement1, eies1],
  },
  {
    slug: "cges",
    icon: FileSearch,
    title: "Cadre de Gestion Environnementale et Sociale (CGES)",
    shortDescription:
      "Élaboration de cadres méthodologiques permettant d'identifier, prévenir et gérer les impacts environnementaux et sociaux des projets.",
    fullDescription:
      "Le Cadre de Gestion Environnementale et Sociale (CGES) est un instrument de planification qui définit les principes, règles, lignes directrices et procédures pour évaluer les impacts environnementaux et sociaux, lorsque les sites exacts des sous-projets ne sont pas encore connus.",
    details: [
      "Définition des procédures de tri et de catégorisation environnementale",
      "Élaboration des critères de sélection environnementale et sociale",
      "Identification des responsabilités institutionnelles",
      "Plan de renforcement des capacités",
      "Mécanismes de suivi et évaluation",
    ],
    images: [environnement1, auditGolden],
  },
  {
    slug: "eies",
    icon: Leaf,
    title: "Étude d'Impact Environnemental et Social (EIES)",
    shortDescription:
      "Analyse détaillée des impacts potentiels d'un projet sur l'environnement et les communautés.",
    fullDescription:
      "L'Étude d'Impact Environnemental et Social (EIES) est une analyse systématique des impacts positifs et négatifs d'un projet sur l'environnement physique, biologique et humain. IVATIS réalise des EIES conformes aux normes nationales et internationales, incluant les standards de la Banque Mondiale et de la BAD.",
    details: [
      "Description détaillée du projet et de son environnement",
      "Identification et évaluation des impacts potentiels",
      "Proposition de mesures d'atténuation et de compensation",
      "Plan de gestion environnementale et sociale",
      "Consultations publiques et participation communautaire",
      "Conformité aux normes nationales et internationales",
    ],
    images: [eies1, eies2, eies3],
    imageCaptions: ["EIES des installations solaires", "EIES des dragages de sable", "Analyse sur le terrain"],
  },
  {
    slug: "audit-environnemental",
    icon: Shield,
    title: "Audit environnemental et social",
    shortDescription:
      "Évaluation indépendante de la conformité environnementale et sociale d'un projet ou d'une installation.",
    fullDescription:
      "L'audit environnemental et social est une évaluation systématique et indépendante qui permet de vérifier la conformité des activités d'une organisation aux exigences réglementaires et aux standards environnementaux. IVATIS a réalisé des audits pour de nombreuses entreprises et installations majeures au Bénin.",
    details: [
      "Audit de la Centrale Électrique de Parakou (CEP)",
      "Audit de la Société ORYX SA",
      "Audit du Port Autonome de Cotonou",
      "Audit de la Société de Ciment du Bénin",
      "Audit de la Société des Brasseries du Bénin (SOBEBRA)",
      "Vérification de la conformité réglementaire",
      "Identification des écarts et actions correctives",
    ],
    images: [audit1, audit2, audit3, audit4, auditGolden],
    imageCaptions: [
      "Audit à la Centrale Électrique de Parakou",
      "Audit de la Société ORYX SA",
      "Audit du Port Autonome de Cotonou",
      "Audit de la Société de Ciment du Bénin",
      "Audit environnemental — Golden Tulip",
    ],
  },
  {
    slug: "audit-par-pges",
    icon: ClipboardCheck,
    title: "Audit des PAR et des PGES",
    shortDescription:
      "Examen technique de la mise en œuvre des Plans d'Action de Réinstallation et des PGES.",
    fullDescription:
      "L'audit des PAR (Plans d'Action de Réinstallation) et des PGES (Plans de Gestion Environnementale et Sociale) permet de vérifier la conformité et l'efficacité de leur mise en œuvre. IVATIS procède à un examen rigoureux de ces instruments pour s'assurer du respect des engagements pris.",
    details: [
      "Vérification de la conformité des mesures mises en œuvre",
      "Évaluation de l'efficacité des mesures d'atténuation",
      "Analyse des indicateurs de performance environnementale",
      "Recommandations d'amélioration",
      "Rapports d'audit détaillés",
    ],
    images: [auditGolden, environnement1],
  },
  {
    slug: "pmpp",
    icon: Users,
    title: "Plan de Mobilisation des Parties Prenantes (PMPP)",
    shortDescription:
      "Conception de stratégies de consultation et de participation des parties prenantes.",
    fullDescription:
      "Le Plan de Mobilisation des Parties Prenantes (PMPP) est un document stratégique qui décrit les moyens par lesquels le maître d'ouvrage communiquera avec les parties prenantes tout au long du projet. IVATIS conçoit des PMPP adaptés pour assurer la transparence et l'acceptabilité sociale des projets.",
    details: [
      "Identification et cartographie des parties prenantes",
      "Définition des mécanismes de consultation",
      "Mise en place de procédures de gestion des plaintes",
      "Stratégies de communication adaptées",
      "Suivi de l'engagement des parties prenantes",
    ],
    images: [formationSauvegarde, auditGolden],
  },
  {
    slug: "suivi-par-pges",
    icon: BookOpen,
    title: "Suivi environnemental et social de mise en œuvre des PAR et PGES",
    shortDescription:
      "Accompagnement technique et contrôle de la mise en œuvre des mesures environnementales et sociales.",
    fullDescription:
      "Le suivi environnemental et social est un processus continu d'observation et de mesure qui permet de vérifier que les engagements pris dans les PAR et PGES sont effectivement mis en œuvre et produisent les résultats escomptés.",
    details: [
      "Suivi des indicateurs environnementaux et sociaux",
      "Contrôle de la mise en œuvre des mesures d'atténuation",
      "Rapports périodiques de suivi",
      "Recommandations d'ajustement",
      "Formation des équipes de terrain",
    ],
    images: [environnement1, auditGolden],
  },
  {
    slug: "cprp",
    icon: Globe,
    title: "Cadre de Politique de Réinstallation des Populations (CPRP)",
    shortDescription:
      "Définition des principes et procédures pour la gestion des déplacements involontaires de populations.",
    fullDescription:
      "Le Cadre de Politique de Réinstallation des Populations (CPRP) définit les principes, les arrangements organisationnels et les critères de conception à appliquer pour les sous-projets impliquant des déplacements involontaires. Il assure une compensation équitable des personnes affectées.",
    details: [
      "Définition des principes de réinstallation",
      "Critères d'éligibilité et de compensation",
      "Arrangements organisationnels et institutionnels",
      "Mécanismes de plainte et de recours",
      "Budget estimatif et sources de financement",
    ],
    images: [environnement1, formationSauvegarde],
  },
  {
    slug: "pges",
    icon: Leaf,
    title: "Plan de Gestion Environnementale et Sociale (PGES)",
    shortDescription:
      "Programme opérationnel précisant les mesures de prévention, réduction ou compensation des impacts.",
    fullDescription:
      "Le Plan de Gestion Environnementale et Sociale (PGES) est un document opérationnel qui traduit les résultats de l'EIES en actions concrètes. Il précise les mesures de prévention, de réduction et de compensation des impacts environnementaux et sociaux identifiés lors de l'étude d'impact.",
    details: [
      "Mesures d'atténuation des impacts négatifs",
      "Programme de surveillance environnementale",
      "Plan de suivi environnemental",
      "Responsabilités de mise en œuvre",
      "Estimation des coûts de mise en œuvre",
      "Calendrier de mise en œuvre",
    ],
    images: [environnement1, eies2],
  },
  {
    slug: "parc",
    icon: Users,
    title: "Plan d'Action de Réinstallation et de Compensation (PARC)",
    shortDescription:
      "Plan détaillé visant à indemniser et réinstaller les populations affectées par un projet.",
    fullDescription:
      "Le Plan d'Action de Réinstallation et de Compensation (PARC) est un instrument détaillé qui définit les modalités de compensation, de réinstallation et de restauration des moyens de subsistance des populations affectées par un projet de développement.",
    details: [
      "Recensement des personnes et biens affectés",
      "Évaluation des pertes et barème de compensation",
      "Plan de réinstallation et d'aide à la transition",
      "Restauration des moyens de subsistance",
      "Mécanismes de suivi et d'évaluation",
    ],
    images: [formationSauvegarde, environnement1],
  },
  {
    slug: "pgrcp",
    icon: Landmark,
    title: "Plan de Gestion des Ressources Culturelles Physiques (PGRCP)",
    shortDescription:
      "Identification et protection des patrimoines culturels matériels pouvant être affectés par les projets.",
    fullDescription:
      "Le Plan de Gestion des Ressources Culturelles Physiques (PGRCP) vise à identifier, protéger et préserver les biens culturels physiques (sites archéologiques, monuments, lieux sacrés) pouvant être affectés par des projets d'infrastructure ou d'aménagement.",
    details: [
      "Inventaire des ressources culturelles physiques",
      "Évaluation de la signification culturelle",
      "Mesures de protection et de sauvegarde",
      "Procédures de découverte fortuite",
      "Consultation des communautés locales",
    ],
    images: [environnement1, coastal1],
  },
  {
    slug: "gestion-marine-cotiere",
    icon: Waves,
    title: "Gestion de terroir marin et côtier",
    shortDescription:
      "Études et stratégies de gestion durable des zones marines et littorales.",
    fullDescription:
      "IVATIS intervient dans la gestion durable des zones marines et littorales du Bénin, incluant la maîtrise de l'érosion côtière, la gestion de l'environnement marin et la préservation des ressources naturelles pour soutenir les activités économiques locales.",
    details: [
      "Maîtrise de l'érosion côtière",
      "Gestion de l'environnement marin",
      "Gestion des inondations",
      "Études de vulnérabilité côtière",
      "Plans de gestion intégrée des zones côtières",
    ],
    images: [coastal1, coastal2, coastal3],
    imageCaptions: ["Gestion des inondations", "Maîtrise de l'érosion côtière", "Environnement marin"],
  },
  {
    slug: "zones-humides",
    icon: Mountain,
    title: "Protection et aménagement des zones humides",
    shortDescription:
      "Actions de planification et de gestion visant la conservation et l'utilisation durable des zones humides.",
    fullDescription:
      "IVATIS contribue à la conservation et à la restauration des zones humides du Bénin, des écosystèmes essentiels à la biodiversité et aux communautés locales. Nos interventions visent une utilisation durable et responsable de ces milieux sensibles.",
    details: [
      "Inventaire et cartographie des zones humides",
      "Plans de gestion et de conservation",
      "Restauration écologique",
      "Sensibilisation des communautés",
      "Suivi environnemental",
    ],
    images: [coastal1, coastal3],
  },
  {
    slug: "biodiversite",
    icon: TreePine,
    title: "Conservation des milieux naturels et de la biodiversité",
    shortDescription:
      "Programmes de protection et de gestion des écosystèmes naturels.",
    fullDescription:
      "IVATIS met en œuvre des programmes de conservation des milieux naturels afin de préserver la biodiversité et les services écosystémiques du Bénin. Nos experts accompagnent les projets dans l'intégration des enjeux de biodiversité.",
    details: [
      "Études de biodiversité et inventaires faunistiques et floristiques",
      "Plans de gestion de la biodiversité",
      "Évaluation des services écosystémiques",
      "Mesures de compensation écologique",
      "Suivi écologique des espèces et habitats",
    ],
    images: [environnement1, coastal2],
  },
  {
    slug: "forets-aires-protegees",
    icon: TreePine,
    title: "Aménagement participatif des forêts et aires protégées",
    shortDescription:
      "Approches de gestion participative impliquant les communautés locales.",
    fullDescription:
      "IVATIS développe des approches de gestion participative des forêts et des aires protégées, impliquant activement les communautés locales dans la protection et la valorisation durable des ressources forestières et naturelles.",
    details: [
      "Plans d'aménagement participatif",
      "Gestion communautaire des ressources forestières",
      "Valorisation des produits forestiers non ligneux",
      "Restauration des terres dégradées",
      "Formation et renforcement des capacités communautaires",
    ],
    images: [environnement1, coastal1],
  },
  {
    slug: "sites-touristiques",
    icon: Map,
    title: "Gestion de sites touristiques protégés",
    shortDescription:
      "Études et plans de gestion pour la conservation et la valorisation durable des sites naturels.",
    fullDescription:
      "IVATIS accompagne la conservation et la valorisation des sites naturels et touristiques du Bénin, en conciliant protection environnementale et développement du tourisme durable.",
    details: [
      "Plans de gestion des sites touristiques",
      "Études de capacité de charge",
      "Aménagement écotouristique",
      "Sensibilisation et éducation environnementale",
      "Suivi de l'impact touristique",
    ],
    images: [coastal2, environnement1],
  },
  {
    slug: "etudes-topographiques",
    icon: Compass,
    title: "Études techniques et topographiques",
    shortDescription:
      "Réalisation de relevés topographiques et d'études techniques pour projets d'infrastructures.",
    fullDescription:
      "IVATIS réalise des études techniques et des relevés topographiques de haute précision, indispensables à la conception, la planification et la réalisation de projets d'infrastructures. Notre expertise couvre l'ensemble des études préalables aux grands projets.",
    details: [
      "Levés topographiques de précision",
      "Bornage et implantation",
      "Plans parcellaires et cadastraux",
      "Études géotechniques",
      "Cartographie et SIG",
      "Maîtrise des études topographiques pour les lignes électriques",
    ],
    images: [energie1, energie2, energie3, energiePylone1, energiePylone2],
    imageCaptions: [
      "Études topographiques terrain",
      "Relevé de postes de transformation",
      "Lignes électriques BT/MT/HT",
      "Pylônes des lignes HT",
      "Audit des lignes et isolateurs",
    ],
  },
  {
    slug: "genie-civil-btp",
    icon: HardHat,
    title: "Génie civil et BTP",
    shortDescription:
      "Études, conception et accompagnement technique en génie civil, bâtiments et infrastructures.",
    fullDescription:
      "IVATIS accompagne les donneurs d'ordre publics et privés dans les projets de bâtiments et d'infrastructures à différents stades de leur développement. Notre expertise couvre un large spectre allant des études à la réalisation.",
    details: [
      "Bâtiments à usage d'habitation",
      "Bâtiments industriels",
      "Centres commerciaux",
      "Hôtels et résidences touristiques",
      "Équipements publics : installations sportives, hôpitaux",
      "Infrastructures urbaines : voiries, réseaux d'eau potable et d'assainissement",
    ],
    images: [batiment1, batiment2, batiment3, batiment4],
    imageCaptions: [
      "Projet de construction",
      "Infrastructure urbaine",
      "Bâtiment en cours de réalisation",
      "Ouvrage de génie civil",
    ],
  },
  {
    slug: "formation",
    icon: GraduationCap,
    title: "Formation sur les instruments de sauvegarde environnementale et sociale",
    shortDescription:
      "Programmes de formation et de renforcement des capacités sur les normes et procédures.",
    fullDescription:
      "IVATIS propose des programmes de formation intra et inter entreprise, couvrant les instruments de sauvegarde environnementale et sociale, la sécurité au travail et le management de la qualité. Nos formations allient théorie et pratique pour un impact maximal.",
    details: [
      "Animation et facilitation de séminaires et ateliers",
      "Conception de modules de formations sur mesure",
      "Formations théoriques et pratiques des acteurs de développement",
      "Formation en sécurité (secourisme, incendie, HSE)",
      "Accompagnement pour la mise en place ISO 9001, ISO 14001, ISO 45001",
      "Renforcement des capacités techniques et organisationnelles",
    ],
    images: [formationSauvegarde, formationSecurisme, formationSecurisme2],
    imageCaptions: [
      "Formation sur les instruments de sauvegarde environnementale et sociale — IVATIS",
      "Formation en sécurité incendie — CMCP",
      "Formation en secourisme — CMCP",
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((s) => s.slug === slug);
}
