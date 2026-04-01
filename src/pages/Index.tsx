import { SeoHelmet } from "@/components/SeoHelmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, ClipboardCheck, GraduationCap, Compass, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ServiceCard } from "@/components/ServiceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";
import { StatCard } from "@/components/StatCard";
import { PartnersCarousel } from "@/components/PartnersCarousel";
import consultationMairie from "@/assets/activities/consultation-mairie.jpg";
import auditGolden from "@/assets/activities/audit-golden.jpg";
import formationSauvegarde from "@/assets/activities/formation-sauvegarde.jpg";
import environnement1 from "@/assets/activities/environnement-1.jpg";
import reunionGolden from "@/assets/activities/reunion-golden.jpg";
import fieldConsultation from "@/assets/activities/field-consultation.jpg";

const services = [
  {
    icon: Leaf,
    title: "Ingénierie Environnementale & Sociale",
    description:
      "Études d'impact environnemental et social (EIES), PGES, audits et conformité réglementaire.",
    slug: "eies",
  },
  {
    icon: ClipboardCheck,
    title: "Suivi de Projets",
    description:
      "Suivi environnemental et social de chantiers, contrôle qualité et reporting.",
    slug: "suivi-par-pges",
  },
  {
    icon: GraduationCap,
    title: "Formation",
    description:
      "Formation professionnelle en environnement, sécurité, HSE et développement durable.",
    slug: "formation",
  },
  {
    icon: Compass,
    title: "Topographie",
    description:
      "Levés topographiques, bornage, implantation et plans parcellaires.",
    slug: "etudes-topographiques",
  },
  {
    icon: HardHat,
    title: "BTP & Génie Civil",
    description:
      "Études, conception et accompagnement technique en génie civil, bâtiments et infrastructures.",
    slug: "genie-civil-btp",
  },
];

const projects = [
  {
    image: auditGolden,
    title: "Audit Environnemental — Golden Tulip",
    category: "Audit",
    location: "Cotonou",
  },
  {
    image: formationSauvegarde,
    title: "Formation Instruments de Sauvegarde",
    category: "Formation",
    location: "Abomey-Calavi",
  },
  {
    image: environnement1,
    title: "Étude d'Impact Environnemental",
    category: "Environnement",
    location: "Bénin",
  },
];

const stats = [
  { value: "15+", label: "Années d'Expérience" },
  { value: "200+", label: "Projets Réalisés" },
  { value: "50+", label: "Professionnels Formés" },
  { value: "100%", label: "Conformité Garantie" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SeoHelmet
        title="Cabinet IVATIS | Bureau d'Études Environnementales N°1 au Bénin — EIES, PGES, Audit, TOPO & BTP"
        description="Cabinet IVATIS, leader en ingénierie environnementale et sociale au Bénin depuis 2009. EIES, PGES, CGES, audits environnementaux, topographie GPS, BTP et formation HSE. +200 projets réalisés à Abomey-Calavi."
        canonical="/"
        keywords="cabinet IVATIS, EIES Bénin, étude impact environnemental, PGES, audit environnemental, topographie GPS Bénin, BTP Abomey-Calavi, formation HSE Bénin, bureau études environnementales Bénin"
      />
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={fieldConsultation}
            alt="Cabinet IVATIS - Consultation communautaire terrain au Bénin"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-construction-charcoal/70" />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        <div className="relative z-10 container-wide text-center pt-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-3 py-2 bg-primary/20 text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-full mb-6 max-w-full text-center leading-relaxed">
              Ingénierie Environnementale & Sociale · Suivi · Formation · TOPO · BTP
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-tight"
          >
            L'Expertise <span className="text-gradient-amber">Environnementale</span>
            <br />
            Au Service du Développement
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 px-2"
          >
            Cabinet IVATIS, votre partenaire de confiance en ingénierie
            environnementale et sociale, topographie et BTP au Bénin.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
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
            <Link to="/services">
              <Button
                variant="outline"
                size="lg"
                className="font-semibold text-lg px-8 py-6 border-foreground/30 hover:bg-foreground/10"
              >
                Découvrir Nos Services
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
                title="Experts en Ingénierie Environnementale depuis Plus de 15 Ans"
                description="Cabinet IVATIS est un bureau d'études spécialisé en ingénierie environnementale et sociale, suivi de projets, formation, topographie et BTP au Bénin."
              />
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <p className="text-muted-foreground">
                    Études d'impact environnemental et social (EIES) conformes aux normes
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <p className="text-muted-foreground">
                    Suivi et contrôle environnemental rigoureux de projets
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <p className="text-muted-foreground">
                    Formations professionnelles et levés topographiques de précision
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
                  src={reunionGolden}
                  alt="Équipe IVATIS en réunion de travail"
                  className="w-full h-full object-cover"
                />
              </div>
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
            title="Ingénierie Environnementale, Suivi, Formation, TOPO & BTP"
            description="Des solutions complètes en ingénierie environnementale et sociale, suivi de projets, formation professionnelle, topographie et construction."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            title="Des Projets Qui Font Notre Fierté"
            description="Découvrez quelques-unes de nos réalisations en ingénierie environnementale, topographie et BTP."
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
          <img src={consultationMairie} alt="" className="w-full h-full object-cover" />
        </div>
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
              Contactez Cabinet IVATIS dès aujourd'hui pour discuter de votre projet et
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
              <a href="tel:+2290197203303">
                <Button
                  variant="outline"
                  size="lg"
                  className="font-semibold text-lg px-8 py-6 border-foreground/30 hover:bg-foreground/10"
                >
                  Appelez maintenant
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners Carousel */}
      <PartnersCarousel />

      <Footer />
    </div>
  );
};

export default Index;
