import { SeoHelmet } from "@/components/SeoHelmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Leaf, Users, Award, Shield, ArrowRight, Zap, Truck, Building2, Globe, GraduationCap, Lightbulb, CircleUser, CheckCircle2, Eye, Target } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PageHeader } from "@/components/PageHeader";
import { DonutStats } from "@/components/DonutStats";
import reunionGolden from "@/assets/activities/reunion-golden.jpg";
import cabinetFront from "@/assets/activities/cabinet-front.jpg";
import energieStation from "@/assets/activities/energie-station.jpg";
import environnement1 from "@/assets/activities/environnement-1.jpg";
import transport1 from "@/assets/activities/transport-1.jpg";
import batiment1 from "@/assets/activities/batiment-1.jpg";
import fieldConsultation from "@/assets/activities/field-consultation.jpg";
import formationSauvegarde from "@/assets/activities/formation-sauvegarde.jpg";
import ctaBackground from "@/assets/cta-background.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

const stats = [
  { value: "15+", label: "Années d'Expérience" },
  { value: "200+", label: "Projets Réalisés" },
  { value: "50+", label: "Professionnels Formés" },
  { value: "100%", label: "Conformité Garantie" },
];

const vision = [
  {
    icon: Eye,
    title: "Notre Vision",
    description: "Être un cabinet de référence en Afrique de l'Ouest dans les domaines de l'expertise environnementale, sociale et du développement durable, en proposant des solutions techniques fiables, innovantes et adaptées aux réalités des territoires.",
  },
  {
    icon: Target,
    title: "Notre Mission",
    description: "Apporter aux acteurs publics et privés des solutions techniques de qualité favorisant la conformité réglementaire, la prévention des risques, la durabilité environnementale et la performance des projets de développement.",
  },
];

const values = [
  {
    icon: Award,
    title: "Excellence Technique",
    description: "Nous garantissons des prestations rigoureuses, conformes aux standards nationaux et internationaux.",
  },
  {
    icon: Leaf,
    title: "Professionnalisme",
    description: "Chaque mission est conduite avec méthode, exigence et sens de responsabilité.",
  },
  {
    icon: Shield,
    title: "Intégrité",
    description: "Nous plaçons l'éthique, la transparence et la crédibilité au cœur de nos interventions.",
  },
  {
    icon: Lightbulb,
    title: "Innovation et adaptation",
    description: "Nous développons des approches contextualisées répondant aux réalités du terrain et aux exigences des clients.",
  },
  {
    icon: CircleUser,
    title: "Engagement pour le développement durable",
    description: "Nous œuvrons pour un équilibre durable entre performance économique, protection environnementale et inclusion sociale.",
  },
];

const reasons = [
  "Une expertise multidisciplinaire et expérimentée.",
  "Une forte maîtrise des exigences réglementaires environnementales et sociales.",
  "Une expérience confirmée dans les missions d'études, d'audit et de suivi.",
  "Une approche participative et orientée résultats.",
  "Un accompagnement technique personnalisé et de proximité.",
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
        title="À Propos de CABINET IVATIS | Leader en Études Environnementales au Bénin et en Afrique de l'Ouest depuis 2009"
        description="Créé en 2009, CABINET IVATIS est le leader des études environnementales au Bénin et en Afrique de l'Ouest. 17 experts permanents, +200 projets, valeurs d'éthique et engagement pour le développement durable."
        canonical="/about"
        keywords="CABINET IVATIS, bureau études environnementales Bénin, ingénierie environnementale Abomey-Calavi, experts environnement Bénin Afrique de l'Ouest"
      />
      <Header />
      <WhatsAppButton />

      <PageHeader
        eyebrow="À Propos"
        title="Notre Histoire, Notre Engagement"
        description="Créé en 2009, CABINET IVATIS est leader dans les études environnementales au Bénin et en Afrique de l'Ouest, avec une équipe permanente d'experts et techniciens de haut niveau."
      />

      {/* Story Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <h2 className="font-heading font-black text-3xl text-foreground mb-6">Qui sommes-nous ?</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                 Le Cabinet IVATIS est un cabinet d’études, d’expertise et de conseils spécialisé dans les domaines de l’environnement, 
                  du social, du développement durable, de la gestion des risques et de l’ingénierie territoriale.
                </p>
                <p>
                  Depuis plusieurs années, nous accompagnons les administrations publiques, les collectivités territoriales, les entreprises privées, 
                  les institutions de développement, les ONG ainsi que les partenaires techniques et financiers dans la conception, la mise en œuvre, 
                  le suivi et l’évaluation de projets à fort impact environnemental et social.
                </p>
                <p>
                 Notre cabinet intervient principalement dans la réalisation des:
                </p>
              </div>
              <div className="space-y-4 mt-6">
                <div className="p-4 bg-muted rounded-lg border-l-4 border-primary">
                  {/* <h4 className="font-heading font-bold text-foreground mb-2">
                    Prestations de maîtrise d'œuvre
                  </h4> */}
                  <p className="text-sm text-muted-foreground">
                    Études d'Impact Environnemental et Social (EIES), des audits environnementaux et sociaux,
                    des Plans de Gestion Environnementale et Sociale (PGES), des Cadres de Gestion
                    Environnementale et Sociale (CGES), des Plans d'Action de Réinstallation (PAR), des
                    Plans d'Opération Interne (POI), des plans d'urgence, des études de conformité, ainsi
                    que des missions d'assistance technique, de suivi-évaluation et de renforcement des
                    capacités.
                  </p>
                </div>
                {/* <div className="p-4 bg-muted rounded-lg border-l-4 border-primary">
                  <h4 className="font-heading font-bold text-foreground mb-2">
                    Assistance à maîtrise d'ouvrage
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Planification des projets, préparation des termes de référence,
                    assistance pour l'évaluation des offres et la sélection des entreprises,
                    suivi et pilotage des études et des investigations.
                  </p>
                </div> */}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src={cabinetFront} alt="Vue de face du CABINET IVATIS" className="rounded-lg shadow-2xl w-full" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </section>


        {/* Vision and Mission Section */}
{/* Vison and Mission */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-16">
            <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-3">Nos Vision & Mission </p>
            {/* <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground">Ce Qui Nous Guide</h2> */}
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {vision.map((v, i) => (
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
{/* Vision and Mission section End */}



        

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

      {/* Why Choose IVATIS Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-12">
              <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-3">Notre Différence</p>
              <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground">Pourquoi choisir IVATIS ?</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {reasons.map((r, i) => (
                <motion.div
                  key={r}
                  custom={i + 1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="flex items-start gap-3 p-5 bg-card rounded-lg border border-border shadow-sm"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <p className="text-card-foreground text-sm md:text-base leading-relaxed">{r}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={reasons.length + 1}
              className="p-6 md:p-8 bg-primary/5 border-l-4 border-primary rounded-lg"
            >
              <p className="text-foreground text-base md:text-lg leading-relaxed italic">
                Au Cabinet IVATIS, nous croyons qu'un projet durable est un projet techniquement solide,
                socialement responsable et respectueux de l'environnement.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
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
                    alt={`${exp.title} — CABINET IVATIS`}
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
                    className="inline-flex items-center gap-2 text-cta font-heading font-semibold text-sm hover:gap-3 transition-all"
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

      {/* Stats — donut chart variant matching homepage */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <DonutStats stats={stats} />
        </div>
      </section>

      {/* Mission Section */}
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
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="font-heading font-black text-3xl md:text-4xl text-white mb-4">
              Bâtir un Avenir Durable
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
              Notre mission est de fournir des services d'ingénierie environnementale
              et sociale de qualité, contribuant au développement durable du Bénin et de l'Afrique de l'Ouest.
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
