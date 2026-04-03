import { SeoHelmet } from "@/components/SeoHelmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, ClipboardCheck, GraduationCap, Compass, HardHat, CheckCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ServiceCard } from "@/components/ServiceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";
import { PartnersCarousel } from "@/components/PartnersCarousel";
import consultationMairie from "@/assets/activities/consultation-mairie.jpg";
import auditGolden from "@/assets/activities/audit-golden.jpg";
import formationSauvegarde from "@/assets/activities/formation-sauvegarde.jpg";
import environnement1 from "@/assets/activities/environnement-1.jpg";
import reunionGolden from "@/assets/activities/reunion-golden.jpg";
import fieldConsultation from "@/assets/activities/field-consultation.jpg";
import topoTerrain from "@/assets/activities/topo-terrain.jpg";
import btpTerrain from "@/assets/activities/btp-terrain.jpg";
import energieStation from "@/assets/activities/energie-station.jpg";
import ctaBackground from "@/assets/cta-background.jpeg";

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
    title: "Ingénierie Environnementale & Sociale",
    description:
      "Études d'impact environnemental et social (EIES), PGES, audits et conformité réglementaire.",
    slug: "eies",
    image: environnement1,
  },
  {
    icon: ClipboardCheck,
    title: "Suivi de Projets",
    description:
      "Suivi environnemental et social de chantiers, contrôle qualité et reporting.",
    slug: "suivi-par-pges",
    image: consultationMairie,
  },
  {
    icon: GraduationCap,
    title: "Formation",
    description:
      "Formation professionnelle en environnement, sécurité, HSE et développement durable.",
    slug: "formation",
    image: formationSauvegarde,
  },
  {
    icon: Compass,
    title: "Topographie",
    description:
      "Levés topographiques, bornage, implantation et plans parcellaires.",
    slug: "etudes-topographiques",
    image: topoTerrain,
  },
  {
    icon: HardHat,
    title: "BTP & Génie Civil",
    description:
      "Études, conception et accompagnement technique en génie civil, bâtiments et infrastructures.",
    slug: "genie-civil-btp",
    image: btpTerrain,
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
        title="Cabinet IVATIS | Bureau d'Études Environnementales N°1 au Bénin — EIES, PGES, Audit, TOPO & BTP"
        description="Cabinet IVATIS, leader en ingénierie environnementale et sociale au Bénin depuis 2009. EIES, PGES, CGES, audits environnementaux, topographie GPS, BTP et formation HSE. +200 projets réalisés à Abomey-Calavi."
        canonical="/"
        keywords="cabinet IVATIS, EIES Bénin, étude impact environnemental, PGES, audit environnemental, topographie GPS Bénin, BTP Abomey-Calavi, formation HSE Bénin, bureau études environnementales Bénin"
      />
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={fieldConsultation}
            alt="Cabinet IVATIS - Consultation communautaire terrain au Bénin"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-construction-charcoal/90 via-construction-charcoal/75 to-construction-charcoal/50" />
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary font-heading font-semibold text-xs sm:text-sm uppercase tracking-wider">
                Ingénierie Environnementale & Sociale
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-white"
            >
              L'Expertise{" "}
              <span className="text-gradient-amber">Environnementale</span>
              <br />
              Au Service du Développement
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/80 text-base sm:text-lg md:text-xl mb-10 leading-relaxed"
            >
              Cabinet IVATIS, votre partenaire de confiance en ingénierie
              environnementale et sociale, topographie et BTP au Bénin.
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

      {/* Stats */}
      <section className="bg-[hsl(30,10%,95%)] py-10 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center py-6 px-4 bg-card rounded-xl shadow-sm border border-border"
              >
                <p className="font-heading font-black text-3xl md:text-4xl text-primary">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm mt-2 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary font-heading font-semibold text-sm hover:gap-3 transition-all"
            >
              Voir tous nos services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why IVATIS */}
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
                Cabinet IVATIS est un bureau d'études spécialisé en ingénierie
                environnementale et sociale, suivi de projets, formation professionnelle,
                topographie et BTP au Bénin. Depuis 2009, nous accompagnons les entreprises
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
              <div className="absolute -bottom-6 -left-6 bg-primary rounded-lg p-6 shadow-lg hidden md:block">
                <p className="font-heading font-black text-3xl text-primary-foreground">15+</p>
                <p className="text-primary-foreground/80 text-sm">Années d'expertise</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
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
              className="inline-flex items-center gap-2 text-primary font-heading font-semibold text-sm hover:gap-3 transition-all"
            >
              Voir Toutes Nos Réalisations
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={ctaBackground}
            alt="Cabinet IVATIS sur le terrain"
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
              Contactez Cabinet IVATIS dès aujourd'hui pour discuter de votre projet et
              obtenir un devis personnalisé gratuit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-heading font-bold text-sm hover:brightness-110 transition-all"
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
