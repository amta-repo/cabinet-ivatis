import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Home,
  Building2,
  Paintbrush,
  HardHat,
  Ruler,
  Hammer,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SectionTitle } from "@/components/SectionTitle";
import heroImage from "@/assets/hero-home.jpg";

const services = [
  {
    id: "residential",
    icon: Home,
    title: "Maisons Individuelles",
    description:
      "Construction de maisons familiales personnalisées, adaptées à votre budget et à vos besoins. Du petit pavillon à la grande maison familiale.",
    features: [
      "Plans personnalisés selon vos besoins",
      "Choix des matériaux de qualité",
      "Suivi de chantier transparent",
      "Garantie décennale",
    ],
  },
  {
    id: "villas",
    icon: Building2,
    title: "Villas de Luxe",
    description:
      "Réalisation de villas haut de gamme avec des finitions exceptionnelles et des équipements modernes pour un confort optimal.",
    features: [
      "Architecture contemporaine",
      "Finitions luxueuses",
      "Piscine et aménagements extérieurs",
      "Domotique et sécurité",
    ],
  },
  {
    id: "design",
    icon: Ruler,
    title: "Conception Architecturale",
    description:
      "Service de conception et de plans architecturaux adaptés au style de vie béninois et aux contraintes de votre terrain.",
    features: [
      "Étude de faisabilité",
      "Plans 2D et modélisation 3D",
      "Permis de construire",
      "Conseils personnalisés",
    ],
  },
  {
    id: "finitions",
    icon: Paintbrush,
    title: "Finitions Intérieures",
    description:
      "Travaux de finitions haut de gamme : peinture, carrelage, menuiserie, plomberie et électricité pour un intérieur parfait.",
    features: [
      "Peinture décorative",
      "Pose de carrelage et faïence",
      "Menuiserie sur mesure",
      "Installations sanitaires",
    ],
  },
  {
    id: "renovation",
    icon: HardHat,
    title: "Rénovation",
    description:
      "Travaux de réhabilitation et de modernisation de votre maison existante pour lui donner une nouvelle vie.",
    features: [
      "Diagnostic de l'existant",
      "Extension et agrandissement",
      "Mise aux normes",
      "Amélioration énergétique",
    ],
  },
  {
    id: "gros-oeuvre",
    icon: Hammer,
    title: "Gros Œuvre",
    description:
      "Réalisation des travaux de structure : fondations, murs, dalles et toiture pour une construction solide et durable.",
    features: [
      "Fondations renforcées",
      "Maçonnerie de qualité",
      "Charpente et toiture",
      "Étanchéité garantie",
    ],
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
            alt="Services Génie Créatif BTP"
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
              Nos Services
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
              Construction de Maisons
            </h1>
            <p className="text-xl text-muted-foreground">
              De la conception à la remise des clés, nous vous accompagnons 
              dans la réalisation de votre projet de maison au Bénin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button variant="default" className="font-semibold">
                      Demander un Devis
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>

                <div
                  className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <div className="aspect-[4/3] rounded-lg bg-muted/50 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <service.icon className="w-32 h-32 text-primary/30" />
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 rounded-lg -z-10" />
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/10 rounded-lg -z-10" />
                </div>
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
              Un Projet de Construction ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Contactez notre équipe pour discuter de votre projet et 
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
