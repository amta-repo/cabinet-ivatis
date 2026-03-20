import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Leaf, Users, Award, Shield, ArrowRight, Zap, Truck, Building2, Globe, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SectionTitle } from "@/components/SectionTitle";
import { StatCard } from "@/components/StatCard";
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
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={consultationMairie}
            alt="Cabinet IVATIS — Équipe sur le terrain"
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
              À Propos
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
              Notre Histoire, Notre Engagement
            </h1>
            <p className="text-xl text-muted-foreground">
              Créé en 2009, Cabinet IVATIS est leader dans les études environnementales
              au Bénin, avec une équipe permanente d'experts et techniciens de haut niveau.
            </p>
          </motion.div>
        </div>
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

      {/* Intro Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <SectionTitle
                subtitle="Qui Sommes-Nous"
                title="Un Parcours d'Excellence depuis 2009"
              />
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Créé en 2009, IVATIS est abrité par un immeuble R+1 sis à Abomey-Calavi,
                  Saint Louis dans la rue Général HOUNDEGNON.
                </p>
                <p>
                  Leader dans les études environnementales au Bénin, IVATIS dispose d'une
                  équipe permanente d'experts et techniciens et assure :
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-muted/50 rounded-lg border-l-4 border-primary">
                    <h4 className="font-display text-lg text-foreground mb-2">
                      Prestations de maîtrise d'œuvre
                    </h4>
                    <p className="text-sm">
                      Études techniques, études économiques, analyses environnementales,
                      suivi environnemental, audits, management de la qualité, formation…
                    </p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg border-l-4 border-primary">
                    <h4 className="font-display text-lg text-foreground mb-2">
                      Assistance à maîtrise d'ouvrage
                    </h4>
                    <p className="text-sm">
                      Planification des projets, préparation des termes de référence,
                      assistance pour l'évaluation des offres et la sélection des entreprises,
                      suivi et pilotage des études et des investigations.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src={cabinetFront}
                  alt="Vue de face du Cabinet IVATIS"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src={cabinetInterior}
                  alt="Entrée de la Direction Générale du Cabinet IVATIS"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Headline */}
      <section className="section-padding bg-construction-charcoal">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary mb-6 leading-tight">
              Des Valeurs d'Éthique, un Capital Humain de Haut Niveau et un Réel
              Engagement pour le Développement Durable
            </h2>
            <p className="text-lg text-muted-foreground">
              Une culture d'entreprise fondée sur des valeurs d'éthique et de rentabilité.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <SectionTitle
            subtitle="Nos Valeurs"
            title="Ce Qui Nous Guide"
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-2xl mb-3 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionTitle
            subtitle="Quelques Images de Nos Expériences"
            title="Nos Domaines d'Intervention"
            description="IVATIS intervient dans les projets d'environnement, d'énergie, de transport, de bâtiment, de développement local et de formation."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                viewport={{ once: true }}
                className="group bg-card border border-border/50 rounded-lg overflow-hidden hover:border-primary/50 hover:shadow-medium transition-all flex flex-col"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={exp.image}
                    alt={`${exp.title} — Cabinet IVATIS`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <exp.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display text-xl text-foreground">{exp.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                    {exp.description}
                  </p>
                  <Link to={`/services/${exp.slug}`}>
                    <Button variant="outline" size="sm" className="w-full font-semibold group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      En Savoir Plus
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <SectionTitle
              subtitle="Notre Mission"
              title="Bâtir un Avenir Durable"
              centered
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Notre mission est de fournir des services d'ingénierie environnementale
              et sociale de qualité, contribuant au développement durable du Bénin.
              Nous nous engageons à accompagner chaque projet avec rigueur, intégrité
              et professionnalisme, tout en formant la prochaine génération de
              professionnels de l'environnement.
            </motion.p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
