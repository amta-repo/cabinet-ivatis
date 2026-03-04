import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ProjectCard } from "@/components/ProjectCard";
import heroImage from "@/assets/hero-home.jpg";
import projectVilla from "@/assets/project-villa.jpg";
import projectTownhouse from "@/assets/project-townhouse.jpg";
import projectFamilyHome from "@/assets/project-family-home.jpg";
import homeConstruction from "@/assets/home-construction.jpg";

const projects = [
  {
    image: projectVilla,
    title: "Villa Moderne Akpakpa",
    category: "Villa de Luxe",
    location: "Akpakpa, Cotonou",
    description:
      "Villa contemporaine de 350 m² avec piscine, jardin tropical et finitions haut de gamme.",
  },
  {
    image: projectTownhouse,
    title: "Résidence Les Palmiers",
    category: "Logements",
    location: "Abomey-Calavi",
    description:
      "Ensemble de 12 logements modernes avec espaces communs et parking sécurisé.",
  },
  {
    image: projectFamilyHome,
    title: "Maison Familiale Fidjrossè",
    category: "Maison Individuelle",
    location: "Fidjrossè, Cotonou",
    description:
      "Maison familiale de 180 m² sur deux niveaux avec terrasse et jardin privatif.",
  },
  {
    image: homeConstruction,
    title: "Villa Cadjèhoun",
    category: "Villa de Luxe",
    location: "Cadjèhoun, Cotonou",
    description:
      "Villa de standing avec 5 chambres, bureau, et aménagements extérieurs complets.",
  },
  {
    image: projectVilla,
    title: "Duplex Godomey",
    category: "Maison Individuelle",
    location: "Godomey, Abomey-Calavi",
    description:
      "Duplex moderne de 220 m² avec garage double et terrasse panoramique.",
  },
  {
    image: projectFamilyHome,
    title: "Maison Calavi Centre",
    category: "Maison Individuelle",
    location: "Abomey-Calavi",
    description:
      "Maison de plain-pied avec 4 chambres, cuisine équipée et grand séjour lumineux.",
  },
];

const categories = ["Tous", "Maison Individuelle", "Villa de Luxe", "Logements"];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Projets Génie Créatif BTP"
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
              Nos Réalisations
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
              Maisons Construites
            </h1>
            <p className="text-xl text-muted-foreground">
              Découvrez notre portfolio de maisons qui témoignent de notre
              savoir-faire et de notre créativité au service des familles béninoises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 border-b border-border/50">
        <div className="container-wide">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  index === 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
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
              Votre Maison Pourrait Être la Prochaine
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Confiez-nous votre projet et nous le réaliserons avec le même 
              niveau de qualité et de créativité.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="font-semibold text-lg px-8 py-6 shadow-amber"
              >
                Démarrer Votre Projet
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

export default Projects;
