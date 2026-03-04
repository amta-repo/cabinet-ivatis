import { motion } from "framer-motion";
import { CheckCircle, Users, Target, Award, Leaf, Shield } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SectionTitle } from "@/components/SectionTitle";
import { StatCard } from "@/components/StatCard";
import heroImage from "@/assets/hero-home.jpg";
import teamConstruction from "@/assets/team-construction.jpg";

const stats = [
  { value: "10+", label: "Années d'Expérience" },
  { value: "200+", label: "Projets Réalisés" },
  { value: "50+", label: "Professionnels Formés" },
  { value: "100%", label: "Conformité Garantie" },
];

const values = [
  {
    icon: Leaf,
    title: "Durabilité",
    description:
      "Nous plaçons l'environnement au cœur de chaque décision pour un développement durable et responsable.",
  },
  {
    icon: Users,
    title: "Proximité",
    description:
      "Nous travaillons en étroite collaboration avec nos clients et les communautés locales.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Nous visons l'excellence dans chaque étude, chaque levé et chaque formation que nous dispensons.",
  },
  {
    icon: Shield,
    title: "Intégrité",
    description:
      "Nos rapports et études sont rigoureux, objectifs et conformes aux standards internationaux.",
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
            src={heroImage}
            alt="Cabinet IVATIS - À Propos"
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
              Cabinet IVATIS est un bureau d'études béninois spécialisé en ingénierie 
              environnementale et sociale, suivi de projets, formation, topographie et BTP, 
              au service du développement durable.
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

      {/* Story Section */}
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
                subtitle="Notre Histoire"
                title="Un Parcours d'Excellence"
              />
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Fondé avec la vision de contribuer au développement durable du Bénin, 
                  Cabinet IVATIS s'est rapidement imposé comme un acteur clé en ingénierie 
                  environnementale et sociale dans la sous-région.
                </p>
                <p>
                  Notre expertise couvre l'ensemble du cycle de vie des projets : des études 
                  d'impact environnemental et social (EIES) aux plans de gestion environnementale 
                  et sociale (PGES), en passant par le suivi environnemental de chantiers, 
                  la formation professionnelle et les levés topographiques.
                </p>
                <p>
                  Enregistré sous le RC RB/ABC/22B5468 et l'IFU N° 3202292508230, 
                  Cabinet IVATIS est fier d'avoir accompagné plus de 200 projets au Bénin, 
                  garantissant la conformité environnementale et la qualité de chaque intervention.
                </p>
              </div>
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
                  alt="Équipe Cabinet IVATIS sur le terrain"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-lg -z-10" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-lg -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <SectionTitle
            subtitle="Nos Valeurs"
            title="Ce Qui Nous Guide"
            description="Nos valeurs fondamentales définissent notre approche et notre engagement envers l'environnement et nos clients."
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
