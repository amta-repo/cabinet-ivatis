import { SeoHelmet } from "@/components/SeoHelmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Leaf, Users, Award, Shield, ArrowRight, Zap, Truck, Building2, Globe, GraduationCap } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SectionTitle } from "@/components/SectionTitle";
import reunionGolden from "@/assets/activities/reunion-golden.jpg";
import consultationMairie from "@/assets/activities/consultation-mairie.jpg";
import cabinetFront from "@/assets/activities/cabinet-front.jpg";
import cabinetInterior from "@/assets/activities/cabinet-interior.jpg";
import energieStation from "@/assets/activities/energie-station.jpg";
import environnement1 from "@/assets/activities/environnement-1.jpg";
import transport1 from "@/assets/activities/transport-1.jpg";
import batiment1 from "@/assets/activities/batiment-1.jpg";
import fieldConsultation from "@/assets/activities/field-consultation.jpg";
import formationSauvegarde from "@/assets/activities/formation-sauvegarde.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

const stats = [
  { value: "15+", label: "Années d'Expérience" },
  { value: "200+", label: "Projets Réalisés" },
  { value: "50+", label: "Professionnels Formés" },
  { value: "100%", label: "Conformité Garantie" },
];

const values = [
  {
    icon: Leaf,
    title: "Durabilité",
    description: "Le développement durable est une préoccupation constante des interventions d'IVATIS.",
  },
  {
    icon: Users,
    title: "Capital Humain",
    description: "IVATIS fait de son capital humain une valeur fondamentale et une priorité constante d'investissement.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Une culture d'entreprise fondée sur des valeurs d'éthique et de rentabilité.",
  },
  {
    icon: Shield,
    title: "Intégrité",
    description: "Nos rapports et études sont rigoureux, objectifs et conformes aux standards internationaux.",
  },
];

const experiences = [
  {
    icon: Zap,
    title: "Énergie",
    description: "Maîtrise des lignes électriques BT, MT, HT. Audit des lignes et pylônes. Études topographiques des postes de transformation.",
    image: energieStation,
    slug: "etudes-topographiques",
  },
  {
    icon: Leaf,
    title: "Environnement",
    description: "EIES, audits environnementaux, suivi des PAR et PGES, gestion côtière, conservation de la biodiversité et des zones humides.",
    image: environnement1,
    slug: "eies",
  },
  {
    icon: Truck,
    title: "Transport",
    description: "Routes, autoroutes, voies urbaines, carrefours et échangeurs, ponts, viaducs, études de trafic et d'exploitation d'infrastructures.",
    image: transport1,
    slug: "genie-civil-btp",
  },
  {
    icon: Building2,
    title: "Bâtiment, Voiries & Énergie",
    description: "Bâtiments d'habitation, industriels, centres commerciaux, hôtels, équipements publics, infrastructures urbaines.",
    image: batiment1,
    slug: "genie-civil-btp",
  },
  {
    icon: Globe,
    title: "Développement Local",
    description: "Aménagement du territoire, plans de développement, requalification urbaine, équipements publics, audits organisationnels.",
    image: fieldConsultation,
    slug: "cprp",
  },
  {
    icon: GraduationCap,
    title: "Formations",
    description: "Animation de séminaires, conception de modules, formation HSE, accompagnement ISO 9001, 14001 et 45001.",
    image: formationSauvegarde,
    slug: "formation",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SeoHelmet
        title="À Propos de Cabinet IVATIS | Leader en Études Environnementales au Bénin depuis 2009"
        description="Créé en 2009, Cabinet IVATIS est le leader des études environnementales au Bénin. 17 experts permanents, +200 projets, valeurs d'éthique et engagement pour le développement durable."
        canonical="/about"
        keywords="Cabinet IVATIS, bureau études environnementales Bénin, ingénierie environnementale Abomey-Calavi, experts environnement Bénin"
      />
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0} className="max-w-2xl">
            <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-3">À Propos</p>
            <h1 className="font-heading font-black text-4xl md:text-5xl text-secondary-foreground mb-6">
              Notre Histoire, Notre Engagement
            </h1>
            <p className="text-secondary-foreground/70 text-lg leading-relaxed">
              Créé en 2009, Cabinet IVATIS est leader dans les études environnementales
              au Bénin, avec une équipe permanente d'experts et techniciens de haut niveau.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center py-4"
              >
                <p className="font-heading font-black text-3xl md:text-4xl text-primary-foreground">
                  {stat.value}
                </p>
                <p className="text-primary-foreground/80 text-sm mt-1 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <h2 className="font-heading font-black text-3xl text-foreground mb-6">Un Parcours d'Excellence depuis 2009</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Créé en 2009, IVATIS est abrité par un immeuble R+1 sis à Abomey-Calavi,
                  Saint Louis dans la rue Général HOUNDEGNON.
                </p>
                <p>
                  Leader dans les études environnementales au Bénin, IVATIS dispose d'une
                  équipe permanente d'experts et techniciens et assure :
                </p>
              </div>
              <div className="space-y-4 mt-6">
                <div className="p-4 bg-muted rounded-lg border-l-4 border-primary">
                  <h4 className="font-heading font-bold text-foreground mb-2">
                    Prestations de maîtrise d'œuvre
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Études techniques, études économiques, analyses environnementales,
                    suivi environnemental, audits, management de la qualité, formation…
                  </p>
                </div>
                <div className="p-4 bg-muted rounded-lg border-l-4 border-primary">
                  <h4 className="font-heading font-bold text-foreground mb-2">
                    Assistance à maîtrise d'ouvrage
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Planification des projets, préparation des termes de référence,
                    assistance pour l'évaluation des offres et la sélection des entreprises,
                    suivi et pilotage des études et des investigations.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <img src={cabinetFront} alt="Vue de face du Cabinet IVATIS" className="rounded-lg shadow-2xl w-full" loading="lazy" />
              <img src={cabinetInterior} alt="Entrée de la Direction Générale du Cabinet IVATIS" className="rounded-lg shadow-xl w-full" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-16">
            <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-3">Nos Valeurs</p>
            <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground">Ce Qui Nous Guide</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                custom={i + 1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card rounded-lg p-6 text-center shadow-sm border border-border"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg text-card-foreground mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Headline */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="font-heading font-black text-3xl md:text-4xl text-primary mb-6 leading-tight">
              Des Valeurs d'Éthique, un Capital Humain de Haut Niveau et un Réel
              Engagement pour le Développement Durable
            </h2>
            <p className="text-lg text-secondary-foreground/70">
              Une culture d'entreprise fondée sur des valeurs d'éthique et de rentabilité.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-3">Quelques Images de Nos Expériences</p>
            <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground">Nos Domaines d'Intervention</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                custom={i + 1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-border flex flex-col"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={exp.image}
                    alt={`${exp.title} — Cabinet IVATIS`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                      <exp.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-card-foreground">{exp.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                    {exp.description}
                  </p>
                  <Link
                    to={`/services/${exp.slug}`}
                    className="inline-flex items-center gap-2 text-primary font-heading font-semibold text-sm hover:gap-3 transition-all"
                  >
                    En Savoir Plus
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
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
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="font-heading font-black text-3xl md:text-4xl text-white mb-4">
              Bâtir un Avenir Durable
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
              Notre mission est de fournir des services d'ingénierie environnementale
              et sociale de qualité, contribuant au développement durable du Bénin.
              Nous nous engageons à accompagner chaque projet avec rigueur, intégrité
              et professionnalisme.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-cta text-cta-foreground px-8 py-4 rounded-md font-heading font-bold text-sm hover:brightness-110 transition-all"
            >
              Contactez-Nous
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
