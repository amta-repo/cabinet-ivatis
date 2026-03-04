import { motion } from "framer-motion";
import { CheckCircle, Users, Target, Award } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SectionTitle } from "@/components/SectionTitle";
import { StatCard } from "@/components/StatCard";
import heroImage from "@/assets/hero-home.jpg";
import teamConstruction from "@/assets/team-construction.jpg";

const stats = [
  { value: "10+", label: "Années d'Expérience" },
  { value: "150+", label: "Maisons Construites" },
  { value: "30+", label: "Professionnels" },
  { value: "100%", label: "Satisfaction Client" },
];

const values = [
  {
    icon: Target,
    title: "Créativité",
    description:
      "Nous concevons des maisons uniques qui reflètent la personnalité et les besoins de chaque client.",
  },
  {
    icon: Users,
    title: "Proximité",
    description:
      "Nous travaillons en étroite collaboration avec nos clients à chaque étape du projet.",
  },
  {
    icon: Award,
    title: "Qualité",
    description:
      "Nous utilisons des matériaux de première qualité pour des constructions durables.",
  },
  {
    icon: CheckCircle,
    title: "Fiabilité",
    description:
      "Nous respectons nos engagements en termes de délais, de budget et de qualité.",
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
            alt="Génie Créatif BTP"
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
              Notre Histoire, Notre Passion
            </h1>
            <p className="text-xl text-muted-foreground">
              Depuis plus de 10 ans, Génie Créatif BTP construit des maisons 
              de qualité au Bénin, alliant créativité et savoir-faire artisanal.
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
                title="Un Parcours de Créativité"
              />
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Fondée avec la vision de transformer le secteur de la 
                  construction résidentielle au Bénin, Génie Créatif BTP 
                  a commencé son aventure avec une équipe passionnée par 
                  l'architecture et la construction.
                </p>
                <p>
                  Au fil des années, nous avons développé une expertise 
                  reconnue dans la construction de maisons individuelles, 
                  villas de luxe et logements collectifs. Notre approche 
                  créative nous distingue et nous permet de réaliser des 
                  projets uniques.
                </p>
                <p>
                  Aujourd'hui, Génie Créatif BTP est fier d'avoir construit 
                  plus de 150 maisons, offrant à des familles béninoises 
                  un foyer de qualité adapté à leur mode de vie.
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
                  alt="Équipe Génie Créatif BTP"
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
            description="Nos valeurs fondamentales définissent notre approche et notre engagement envers nos clients."
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
              title="Construire Votre Bonheur"
              centered
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Notre mission est de construire des maisons qui deviennent de 
              véritables foyers pour les familles béninoises. Nous nous engageons 
              à offrir des constructions de qualité, personnalisées et accessibles, 
              tout en respectant l'environnement et les traditions architecturales 
              locales.
            </motion.p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
