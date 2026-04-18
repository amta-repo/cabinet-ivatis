import { SeoHelmet } from "@/components/SeoHelmet";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ProjectCard } from "@/components/ProjectCard";
import { PageHeader } from "@/components/PageHeader";
import headerAchievements from "@/assets/header-achievements.jpg";
import ctaBackground from "@/assets/cta-background.jpeg";
import formationSauvegarde4 from "@/assets/activities/formation-sauvegarde-4.jpg";
import auditGolden from "@/assets/activities/audit-golden.jpg";
import auditGolden2 from "@/assets/activities/audit-golden-2.jpg";
import auditEnvironnemental from "@/assets/activities/audit-environnemental.jpg";
import formationSecurisme3 from "@/assets/activities/formation-securisme-3.jpg";
import formationSecurisme4 from "@/assets/activities/formation-securisme-4.jpg";
import formationSecurisme5 from "@/assets/activities/formation-securisme-5.jpg";
import reunion1 from "@/assets/activities/reunion-1.jpg";
import consultationCommunautaire from "@/assets/activities/consultation-communautaire.jpg";
import installationSolaire from "@/assets/activities/installation-solaire.jpg";
import coastal1 from "@/assets/activities/coastal-1.jpg";
import energie1 from "@/assets/activities/energie-1.jpg";
import batiment1 from "@/assets/activities/batiment-1.jpg";
import environnement1 from "@/assets/activities/environnement-1.jpg";
import auditBetra from "@/assets/activities/audit-betra.jpg";
import auditBetra2 from "@/assets/activities/audit-betra-2.jpg";
import topoTerrain from "@/assets/activities/topo-terrain.jpg";
import topoEquipement from "@/assets/activities/topo-equipement.jpg";
import btpTerrain from "@/assets/activities/btp-terrain.jpg";
import energieStation from "@/assets/activities/energie-station.jpg";
import fieldConsultation from "@/assets/activities/field-consultation.jpg";
import consultationMairie from "@/assets/activities/consultation-mairie.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

const projects = [
  { image: auditGolden, title: "Audit Environnemental — Golden Tulip Le Diplomate", category: "Environnement", location: "Cotonou", description: "Audit environnemental complet de l'hôtel Golden Tulip Le Diplomate avec recommandations de conformité." },
  { image: auditGolden2, title: "Audit de Conformité — Golden Tulip", category: "Environnement", location: "Cotonou", description: "Réunion de restitution et recommandations de conformité environnementale et sociale." },
  { image: auditBetra, title: "Audit Environnemental — Société BETRA", category: "Environnement", location: "Bénin", description: "Audit environnemental de la Société BETRA SARL, évaluation des installations industrielles." },
  { image: auditBetra2, title: "Consultation — Société BETRA", category: "Environnement", location: "Bénin", description: "Réunion de consultation avec la direction de BETRA dans le cadre de l'audit environnemental." },
  { image: auditEnvironnemental, title: "Audit de la Société des Brasseries du Bénin (SOBEBRA)", category: "Environnement", location: "Bénin", description: "Audit environnemental et social de la Société des Brasseries du Bénin (SOBEBRA)." },
  { image: reunion1, title: "Consultation Institutionnelle — PMPP", category: "Environnement", location: "Bénin", description: "Consultation des parties prenantes institutionnelles dans le cadre du Plan de Mobilisation des Parties Prenantes." },
  { image: consultationCommunautaire, title: "Consultation Communautaire — CPRP", category: "Environnement", location: "Allada", description: "Consultation publique avec les communautés locales dans le cadre de la réinstallation des populations." },
  { image: fieldConsultation, title: "Consultation Communautaire — Terrain", category: "Environnement", location: "Bénin", description: "Consultation de terrain avec les populations rurales dans le cadre d'études environnementales." },
  { image: installationSolaire, title: "EIES — Installations Solaires", category: "Environnement", location: "Bénin", description: "Étude d'impact environnemental et social pour un projet d'installation de panneaux solaires." },
  { image: consultationMairie, title: "Suivi Environnemental — Réunion de Chantier", category: "Suivi", location: "Bénin", description: "Réunion de suivi environnemental et social sur site avec les équipes de projet." },
  { image: coastal1, title: "Gestion des Inondations — Zone Côtière", category: "Suivi", location: "Littoral, Bénin", description: "Étude et gestion des inondations dans les zones côtières du Bénin." },
  { image: environnement1, title: "Évaluation Environnementale Stratégique", category: "Environnement", location: "Bénin", description: "Évaluation environnementale et sociale stratégique pour un programme de développement." },
  { image: topoTerrain, title: "Levé Topographique — Route Nationale", category: "Topographie", location: "Bénin", description: "Levé topographique de précision avec équipement GPS RTK pour un projet routier." },
  { image: topoEquipement, title: "Relevé Topographique — Station GPS", category: "Topographie", location: "Bénin", description: "Installation et relevé avec station GPS de haute précision." },
  { image: energieStation, title: "Études Topographiques — Poste Électrique", category: "Topographie", location: "Bénin", description: "Études topographiques pour les postes de transformation et lignes électriques." },
  { image: energie1, title: "Études Topographiques — Lignes Électriques", category: "Topographie", location: "Bénin", description: "Études topographiques pour la réalisation de lignes électriques BT/MT/HT." },
  { image: batiment1, title: "Construction Bâtiment Administratif", category: "BTP", location: "Abomey-Calavi", description: "Construction d'un bâtiment administratif avec normes environnementales." },
  { image: btpTerrain, title: "Inspection de Chantier BTP", category: "BTP", location: "Bénin", description: "Inspection et suivi de chantier de construction avec équipements de sécurité." },
  { image: formationSauvegarde4, title: "Formation Instruments de Sauvegarde — 2ème Édition", category: "Formation", location: "Abomey-Calavi", description: "Formation certifiante sur les instruments de sauvegarde environnementale et sociale." },
  { image: formationSecurisme3, title: "Formation Sécurité Incendie — CMCP", category: "Formation", location: "Cotonou", description: "Formation pratique en sécurité incendie avec manipulation d'extincteurs." },
  { image: formationSecurisme4, title: "Formation Secourisme — CMCP", category: "Formation", location: "Cotonou", description: "Formation pratique en secourisme d'urgence pour les employés." },
  { image: formationSecurisme5, title: "Formation HSE — Démonstration Extincteur", category: "Formation", location: "Cotonou", description: "Démonstration de manipulation d'extincteurs dans le cadre de la formation HSE." },
];

const categories = ["Tous", "Environnement", "Suivi", "Topographie", "BTP", "Formation"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredProjects = activeCategory === "Tous"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <SeoHelmet
        title="Nos Réalisations | +200 Projets EIES, Audits, Topographie et BTP — CABINET IVATIS Bénin"
        description="Portfolio de +200 projets réalisés par CABINET IVATIS : audits Golden Tulip, BETRA, SOBEBRA, formations HSE, études topographiques, suivi environnemental au Bénin et en Afrique de l'Ouest."
        canonical="/projects"
        keywords="réalisations CABINET IVATIS, projets EIES Bénin, audit environnemental Golden Tulip, formation HSE CMCP"
      />
      <Header />
      <WhatsAppButton />

      <PageHeader
        eyebrow="Nos Réalisations"
        title="Projets Réalisés"
        description="Découvrez notre portfolio de projets en ingénierie environnementale, topographie, formation et BTP au Bénin et en Afrique de l'Ouest."
        backgroundImage={headerAchievements}
      />

      {/* Filter Tabs */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-heading font-semibold transition-all ${
                  activeCategory === category
                    ? "bg-cta text-cta-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.title} {...project} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
          {filteredProjects.length === 0 && (
            <p className="text-center text-muted-foreground py-12">
              Aucun projet trouvé dans cette catégorie.
            </p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={ctaBackground}
            alt="CABINET IVATIS sur le terrain"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-construction-charcoal/80" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-heading font-black text-3xl md:text-4xl text-white mb-4">
            Votre Projet Pourrait Être le Prochain
          </h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">
            Confiez-nous votre projet environnemental, topographique ou de construction.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-cta text-cta-foreground px-8 py-4 rounded-md font-heading font-bold text-sm hover:brightness-110 transition-all"
          >
            Démarrer Votre Projet <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
