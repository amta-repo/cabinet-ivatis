import { SeoHelmet } from "@/components/SeoHelmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, ClipboardCheck, GraduationCap, Compass, HardHat, CheckCircle, Shield, BookOpen, Users } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ServiceCard } from "@/components/ServiceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";
import { PartnersCarousel } from "@/components/PartnersCarousel";
import { HeroCarousel } from "@/components/HeroCarousel";
import { DonutStats } from "@/components/DonutStats";
import consultationMairie from "@/assets/activities/consultation-mairie.jpg";
import auditGolden from "@/assets/activities/audit-golden.jpg";
import formationSauvegarde from "@/assets/activities/formation-sauvegarde.jpg";
import environnement1 from "@/assets/activities/environnement-1.jpg";
import reunionGolden from "@/assets/activities/reunion-golden.jpg";
import topoTerrain from "@/assets/activities/topo-terrain.jpg";
import btpTerrain from "@/assets/activities/btp-terrain.jpg";
import ctaBackground from "@/assets/cta-background.jpeg";
import heroBackground from "@/assets/hero-background1.jpg";
import heroTrans from "@/assets/hero-trans.jpg";
import heroTrans1 from "@/assets/hero-trans1.jpg";
import heroTrans2 from "@/assets/hero-trans2.jpg";
import eiesMain from "@/assets/services/eies-main.jpg";
import parcMain from "@/assets/services/parc-main.jpg";
import auditMain from "@/assets/services/audit-main.jpg";
import suiviMain from "@/assets/services/suivi-main.jpg";

const heroImages = [
  { src: heroBackground, alt: "CABINET IVATIS — équipe sur le terrain au Bénin" },
  { src: heroTrans, alt: "Industrie durable et énergie renouvelable" },
  { src: heroTrans1, alt: "Conservation des écosystèmes en Afrique de l'Ouest" },
  { src: heroTrans2, alt: "Audit environnemental d'installations industrielles" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

const services = [
  {
    icon: Leaf,
    title: "Étude d'Impact Environnemental et Social (EIES)",
    description: "Analyse détaillée des impacts potentiels d'un projet sur l'environnement et les communautés.",
    slug: "eies",
    image: eiesMain,
  },
  {
    icon: Users,
    title: "Plan d'Action de Réinstallation et de Compensation (PARC)",
    description: "Plan détaillé visant à indemniser et réinstaller les populations affectées par un projet.",
    slug: "parc",
    image: parcMain,
  },
  {
    icon: Shield,
    title: "Audit environnemental et social",
    description: "Évaluation indépendante de la conformité environnementale et sociale d'un projet ou d'une installation.",
    slug: "audit-environnemental",
    image: auditMain,
  },
  {
    icon: GraduationCap,
    title: "Formation",
    description: "Formation professionnelle en environnement, sécurité, HSE et développement durable.",
    slug: "formation",
    image: formationSauvegarde,
  },
  {
    icon: HardHat,
    title: "Génie civil et BTP",
    description: "Études, conception et accompagnement technique en génie civil, bâtiments et infrastructures.",
    slug: "genie-civil-btp",
    image: btpTerrain,
  },
  {
    icon: BookOpen,
    title: "Suivi Environnemental et Social",
    description: "Suivi environnemental et social de chantiers, contrôle qualité et reporting.",
    slug: "suivi-par-pges",
    image: suiviMain,
  },
  {
    icon: Compass,
    title: "Topographie",
    description: "Levés topographiques, bornage, implantation et plans parcellaires.",
    slug: "etudes-topographiques",
    image: topoTerrain,
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

const advantages = [
  "Études d'impact environnemental et social (EIES) conformes aux normes",
  "Suivi et contrôle environnemental rigoureux de projets",
  "Formations professionnelles et levés topographiques de précision",
  "Plus de 15 ans d'expérience au Bénin et en Afrique de l'Ouest",
  "Équipe de 17 experts et techniciens permanents",
  "Conformité garantie aux standards internationaux",
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SeoHelmet
        title="CABINET IVATIS | Bureau d'Études Environnementales N°1 au Bénin — EIES, PGES, Audit, TOPO & BTP"
        description="CABINET IVATIS, leader en ingénierie environnementale et sociale au Bénin et en Afrique de l'Ouest depuis 2009. EIES, PGES, CGES, audits environnementaux, topographie GPS, BTP et formation HSE. +200 projets réalisés à Abomey-Calavi."
        canonical="/"
        keywords="cabinet IVATIS, EIES Bénin, étude impact environnemental, PGES, audit environnemental, topographie GPS Bénin, BTP Abomey-Calavi, formation HSE Bénin, bureau études environnementales Bénin Afrique de l'Ouest"
      />
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <HeroCarousel images={heroImages} />

        <div className="container mx-auto px-4 relative z-10 pt-40 pb-32 md:pt-48 md:pb-40">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="flex justify-end mb-3"
            >
              <span className="inline-flex items-center gap-1.5 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-2.5 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-primary font-heading font-semibold text-[10px] uppercase tracking-wider">
                  Ingénierie Environnementale & Sociale
                </span>
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-white drop-shadow-lg"
            >
              Protéger l'Environnement.{" "}
              <span className="text-gradient-amber">Bâtir l'Avenir.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/90 text-base sm:text-lg md:text-xl mb-8 leading-relaxed drop-shadow"
            >
              EIES, audits, topographie GPS, formation HSE et BTP — la conformité et la durabilité réunies.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-cta text-cta-foreground px-8 py-4 rounded-md font-heading font-bold text-sm hover:brightness-110 transition-all"
              >
                Demander un Devis
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-md font-heading font-bold text-sm hover:border-white hover:bg-white/10 transition-all"
              >
                Découvrir Nos Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats — Donut design */}
      <section className="py-16 md:py-20 bg-background/85 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <DonutStats stats={stats} />
        </div>
      </section>

      {/* Why IVATIS — moved BEFORE services */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-3">
                À Propos de Nous
              </p>
              <h2 className="font-heading font-black text-3xl md:text-4xl text-secondary-foreground mb-6">
                Experts en Ingénierie Environnementale depuis Plus de 15 Ans
              </h2>
              <p className="text-secondary-foreground/70 leading-relaxed mb-8">
                CABINET IVATIS est un bureau d'études spécialisé en ingénierie
                environnementale et sociale, suivi de projets, formation professionnelle,
                topographie et BTP au Bénin et en Afrique de l'Ouest. Depuis 2009, nous accompagnons les entreprises
                et institutions dans leurs projets de développement durable.
              </p>
              <ul className="space-y-3">
                {advantages.map((adv) => (
                  <li key={adv} className="flex items-start gap-3 text-secondary-foreground/80 text-sm">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    {adv}
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-cta text-cta-foreground px-8 py-4 rounded-md font-heading font-bold text-sm mt-8 hover:brightness-110 transition-all"
              >
                En Savoir Plus
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src={reunionGolden}
                alt="Équipe IVATIS en réunion de travail"
                className="rounded-lg shadow-2xl w-full"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 bg-cta rounded-lg p-6 shadow-lg hidden md:block">
                <p className="font-heading font-black text-3xl text-cta-foreground">15+</p>
                <p className="text-cta-foreground/80 text-sm">Années d'expertise</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              Ce Que Nous Faisons
            </p>
            <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground">
              Nos Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
            {/* 8th card: link-only card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 7 * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg shadow-md border border-border flex items-center justify-center min-h-[280px]"
            >
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-cta font-heading font-bold text-base hover:gap-3 transition-all"
              >
                Voir tous nos services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              Nos Réalisations
            </p>
            <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground">
              Des Projets Qui Font Notre Fierté
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-cta font-heading font-semibold text-sm hover:gap-3 transition-all"
            >
              Voir Toutes Nos Réalisations
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-28 md:py-36 overflow-hidden">
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
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="font-heading font-black text-3xl md:text-4xl text-white mb-4">
              Un Projet Environnemental ou de Construction ?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
              Contactez CABINET IVATIS dès aujourd'hui pour discuter de votre projet et
              obtenir un devis personnalisé gratuit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-cta text-cta-foreground px-8 py-4 rounded-md font-heading font-bold text-sm hover:brightness-110 transition-all"
              >
                Contactez-Nous
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+2290197203303"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-md font-heading font-bold text-sm hover:bg-white/10 transition-all"
              >
                Appelez maintenant
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
