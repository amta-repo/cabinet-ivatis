import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Home, Paintbrush, Ruler, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ServiceCard } from "@/components/ServiceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";
import { StatCard } from "@/components/StatCard";
import heroImage from "@/assets/hero-home.jpg";
import projectVilla from "@/assets/project-villa.jpg";
import projectTownhouse from "@/assets/project-townhouse.jpg";
import projectFamilyHome from "@/assets/project-family-home.jpg";
import teamConstruction from "@/assets/team-construction.jpg";

const services = [
  {
    icon: Home,
    title: "Maisons Individuelles",
    description:
      "Construction de maisons familiales personnalisées selon vos besoins et votre budget.",
  },
  {
    icon: Paintbrush,
    title: "Finitions Haut de Gamme",
    description:
      "Des finitions soignées et des matériaux de qualité pour un intérieur élégant et durable.",
  },
  {
    icon: Ruler,
    title: "Conception sur Mesure",
    description:
      "Plans architecturaux personnalisés adaptés au style de vie béninois et à votre terrain.",
  },
  {
    icon: HardHat,
    title: "Rénovation",
    description:
      "Travaux de réhabilitation et de modernisation de votre maison existante.",
  },
];

const projects = [
  {
    image: projectVilla,
    title: "Villa Moderne Akpakpa",
    category: "Villa de Luxe",
    location: "Akpakpa, Cotonou",
  },
  {
    image: projectTownhouse,
    title: "Résidence Les Palmiers",
    category: "Logements",
    location: "Abomey-Calavi",
  },
  {
    image: projectFamilyHome,
    title: "Maison Familiale Fidjrossè",
    category: "Maison Individuelle",
    location: "Fidjrossè, Cotonou",
  },
];

const stats = [
  { value: "10+", label: "Années d'Expérience" },
  { value: "150+", label: "Maisons Construites" },
  { value: "30+", label: "Professionnels" },
  { value: "100%", label: "Satisfaction Client" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Génie Créatif BTP - Construction de Maisons"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-construction-charcoal/70" />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        {/* Content */}
        <div className="relative z-10 container-wide text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary font-semibold text-sm uppercase tracking-wider rounded-full mb-6">
              Constructeur de Maisons au Bénin
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-tight"
          >
            Votre <span className="text-gradient-amber">Maison de Rêve</span>
            <br />
            Devient Réalité
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10"
          >
            Génie Créatif BTP, votre partenaire de confiance pour la construction 
            de maisons personnalisées au Bénin.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/contact">
              <Button
                size="lg"
                className="font-semibold text-lg px-8 py-6 shadow-amber"
              >
                Demander un Devis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/projects">
              <Button
                variant="outline"
                size="lg"
                className="font-semibold text-lg px-8 py-6 border-foreground/30 hover:bg-foreground/10"
              >
                Voir Nos Réalisations
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-3 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-construction-charcoal border-y border-border/20">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} {...stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <SectionTitle
                subtitle="À Propos de Nous"
                title="Experts en Construction Résidentielle depuis 10 Ans"
                description="Génie Créatif BTP est une entreprise spécialisée dans la construction de maisons au Bénin. Notre créativité et notre savoir-faire nous permettent de réaliser des projets uniques."
              />
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <p className="text-muted-foreground">
                    Équipe d'artisans qualifiés et expérimentés
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <p className="text-muted-foreground">
                    Respect des délais et des budgets convenus
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <p className="text-muted-foreground">
                    Matériaux de qualité et finitions soignées
                  </p>
                </div>
              </div>
              <Link to="/about">
                <Button variant="outline" className="font-semibold">
                  En Savoir Plus
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src={teamConstruction}
                  alt="Équipe Génie Créatif BTP"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating accent */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-lg -z-10" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-lg -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <SectionTitle
            subtitle="Nos Services"
            title="Construction de Maisons Sur Mesure"
            description="De la conception à la remise des clés, nous vous accompagnons dans la réalisation de votre projet immobilier."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/services">
              <Button variant="default" size="lg" className="font-semibold">
                Découvrir Tous Nos Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionTitle
            subtitle="Nos Réalisations"
            title="Des Maisons Qui Font Notre Fierté"
            description="Découvrez quelques-unes de nos réalisations qui témoignent de notre savoir-faire et de notre créativité."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/projects">
              <Button variant="outline" size="lg" className="font-semibold">
                Voir Toutes Nos Réalisations
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-construction-charcoal" />
        <div className="absolute inset-0 opacity-20">
          <img
            src={heroImage}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Prêt à Construire Votre Maison ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Contactez-nous dès aujourd'hui pour discuter de votre projet et
              obtenir un devis personnalisé gratuit.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="font-semibold text-lg px-8 py-6 shadow-amber"
                >
                  Contactez-Nous
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:+22901401529 85">
                <Button
                  variant="outline"
                  size="lg"
                  className="font-semibold text-lg px-8 py-6 border-foreground/30 hover:bg-foreground/10"
                >
                  +229 01 40 15 29 85
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
