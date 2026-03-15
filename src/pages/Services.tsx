import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Leaf,
  ClipboardCheck,
  FileSearch,
  Shield,
  Users,
  TreePine,
  Waves,
  Mountain,
  Map,
  Compass,
  HardHat,
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Target,
  BookOpen,
  Landmark,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SectionTitle } from "@/components/SectionTitle";
import heroImage from "@/assets/hero-home.jpg";

const services = [
  {
    icon: Target,
    title: "Évaluation Environnementale et Sociale Stratégique (EESS)",
    description:
      "Analyse stratégique des politiques, plans et programmes afin d'intégrer les enjeux environnementaux et sociaux dès la phase de planification et d'orienter les décisions vers un développement durable.",
  },
  {
    icon: FileSearch,
    title: "Cadre de Gestion Environnementale et Sociale (CGES)",
    description:
      "Élaboration de cadres méthodologiques permettant d'identifier, prévenir et gérer les impacts environnementaux et sociaux des projets lorsque leurs sites exacts ne sont pas encore définis.",
  },
  {
    icon: Leaf,
    title: "Étude d'Impact Environnemental et Social (EIES)",
    description:
      "Analyse détaillée des impacts potentiels d'un projet sur l'environnement et les communautés, accompagnée de mesures d'atténuation, de gestion et de suivi pour garantir la conformité réglementaire.",
  },
  {
    icon: Shield,
    title: "Audit environnemental et social",
    description:
      "Évaluation indépendante de la conformité environnementale et sociale d'un projet, d'une entreprise ou d'une installation, afin d'identifier les écarts et proposer des actions correctives.",
  },
  {
    icon: ClipboardCheck,
    title: "Audit des PAR et des PGES",
    description:
      "Examen technique de la mise en œuvre des Plans d'Action de Réinstallation et des Plans de Gestion Environnementale et Sociale afin de vérifier leur conformité et leur efficacité.",
  },
  {
    icon: Users,
    title: "Plan de Mobilisation des Parties Prenantes (PMPP)",
    description:
      "Conception de stratégies de consultation et de participation des parties prenantes pour assurer la transparence, l'acceptabilité sociale et la réussite des projets.",
  },
  {
    icon: BookOpen,
    title: "Suivi environnemental et social de mise en œuvre des PAR et PGES",
    description:
      "Accompagnement technique et contrôle de la mise en œuvre des mesures environnementales et sociales prévues dans les plans de gestion et de réinstallation.",
  },
  {
    icon: Globe,
    title: "Cadre de Politique de Réinstallation des Populations (CPRP)",
    description:
      "Définition des principes et procédures pour la gestion des déplacements involontaires de populations et la compensation équitable des personnes affectées.",
  },
  {
    icon: Leaf,
    title: "Plan de Gestion Environnementale et Sociale (PGES)",
    description:
      "Programme opérationnel précisant les mesures de prévention, de réduction ou de compensation des impacts environnementaux et sociaux d'un projet.",
  },
  {
    icon: Users,
    title: "Plan d'Action de Réinstallation et de Compensation (PARC)",
    description:
      "Plan détaillé visant à indemniser, réinstaller et restaurer les moyens de subsistance des populations affectées par un projet.",
  },
  {
    icon: Landmark,
    title: "Plan de Gestion des Ressources Culturelles Physiques (PGRCP)",
    description:
      "Identification et protection des patrimoines culturels matériels pouvant être affectés par les projets d'infrastructure ou d'aménagement.",
  },
  {
    icon: Waves,
    title: "Gestion de terroir marin et côtier",
    description:
      "Études et stratégies de gestion durable des zones marines et littorales pour préserver les ressources naturelles et soutenir les activités économiques locales.",
  },
  {
    icon: Mountain,
    title: "Protection et aménagement des zones humides",
    description:
      "Actions de planification et de gestion visant la conservation, la restauration et l'utilisation durable des zones humides.",
  },
  {
    icon: TreePine,
    title: "Conservation des milieux naturels et de la biodiversité",
    description:
      "Programmes de protection et de gestion des écosystèmes naturels afin de préserver la biodiversité et les services écologiques.",
  },
  {
    icon: TreePine,
    title: "Aménagement participatif des forêts et aires protégées",
    description:
      "Approches de gestion participative impliquant les communautés locales dans la protection et la valorisation des ressources forestières et naturelles.",
  },
  {
    icon: Map,
    title: "Gestion de sites touristiques protégés",
    description:
      "Études et plans de gestion pour la conservation et la valorisation durable des sites naturels et touristiques.",
  },
  {
    icon: Compass,
    title: "Études techniques et topographiques",
    description:
      "Réalisation de relevés topographiques et d'études techniques nécessaires à la conception, à la planification et à la réalisation de projets d'infrastructures.",
  },
  {
    icon: HardHat,
    title: "Génie civil et BTP",
    description:
      "Études, conception et accompagnement technique dans la réalisation d'ouvrages de génie civil, bâtiments et infrastructures.",
  },
  {
    icon: GraduationCap,
    title: "Formation sur les instruments de sauvegarde environnementale et sociale",
    description:
      "Programmes de formation et de renforcement des capacités sur les normes, outils et procédures de sauvegarde environnementale et sociale.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Services Cabinet IVATIS"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-construction-charcoal via-construction-charcoal/95 to-background" />
        </div>

        <div className="relative z-10 container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary font-semibold text-sm uppercase tracking-wider rounded-full mb-6">
              Nos Activités
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
              Détail Sommaire des Activités
            </h1>
            <p className="text-xl text-muted-foreground">
              Des solutions complètes en ingénierie environnementale et sociale, 
              conservation, topographie et BTP au Bénin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border/50 rounded-lg p-6 hover:border-primary/50 hover:shadow-medium transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl mb-3 text-foreground leading-tight">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-construction-charcoal" />
        <div className="relative z-10 container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Un Projet Environnemental ou de Construction ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Contactez Cabinet IVATIS pour discuter de votre projet et 
              obtenir un devis personnalisé gratuit.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="font-semibold text-lg px-8 py-6 shadow-amber"
              >
                Contactez-Nous
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
