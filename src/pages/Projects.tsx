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
    title: "EIES Projet Routier National",
    category: "Environnement",
    location: "Abomey-Calavi",
    description:
      "Étude d'impact environnemental et social pour un projet de construction routière de 25 km.",
  },
  {
    image: projectTownhouse,
    title: "Suivi Environnemental Usine",
    category: "Suivi",
    location: "Cotonou",
    description:
      "Suivi environnemental et social d'un chantier industriel avec mise en œuvre du PGES.",
  },
  {
    image: projectFamilyHome,
    title: "Levé Topographique 50 Ha",
    category: "Topographie",
    location: "Allada",
    description:
      "Levé topographique de précision pour un projet d'aménagement foncier de 50 hectares.",
  },
  {
    image: homeConstruction,
    title: "Construction Bâtiment Administratif",
    category: "BTP",
    location: "Abomey-Calavi",
    description:
      "Construction d'un bâtiment administratif de 500 m² avec normes environnementales.",
  },
  {
    image: projectVilla,
    title: "Formation HSE Entreprise",
    category: "Formation",
    location: "Cotonou",
    description:
      "Programme de formation en hygiène, sécurité et environnement pour 50 employés.",
  },
  {
    image: projectFamilyHome,
    title: "Audit Environnemental Industriel",
    category: "Environnement",
    location: "Porto-Novo",
    description:
      "Audit environnemental complet d'une zone industrielle avec recommandations de conformité.",
  },
];

const categories = ["Tous", "Environnement", "Suivi", "Topographie", "BTP", "Formation"];

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
            alt="Projets Cabinet IVATIS"
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
              Projets Réalisés
            </h1>
            <p className="text-xl text-muted-foreground">
              Découvrez notre portfolio de projets en ingénierie environnementale, 
              topographie, formation et BTP au Bénin.
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
              Votre Projet Pourrait Être le Prochain
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Confiez-nous votre projet environnemental, topographique ou de construction 
              et bénéficiez de notre expertise.
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
