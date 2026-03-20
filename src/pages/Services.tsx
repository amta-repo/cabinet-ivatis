import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { servicesData } from "@/data/servicesData";
import cabinetFront from "@/assets/activities/cabinet-front.jpg";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Services Cabinet IVATIS | EIES, PGES, CGES, Audit Environnemental, Topographie, BTP au Bénin</title>
        <meta name="description" content="19 services spécialisés : EIES, PGES, CGES, EESS, audits environnementaux, CPRP, PARC, PMPP, suivi environnemental, topographie GPS, BTP et formation HSE. Cabinet IVATIS, Abomey-Calavi." />
        <link rel="canonical" href="https://cabinetivatis.com/services" />
      </Helmet>
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={cabinetFront}
            alt="Services Cabinet IVATIS"
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
              Nos Activités
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
              Détail Sommaire des Activités
            </h1>
            <p className="text-xl text-muted-foreground">
              Des solutions complètes en ingénierie environnementale et sociale,
              conservation, topographie et BTP au Bénin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border/50 rounded-lg p-6 hover:border-primary/50 hover:shadow-medium transition-all group flex flex-col"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl mb-3 text-foreground leading-tight">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                  {service.shortDescription}
                </p>
                <Link to={`/services/${service.slug}`}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="font-semibold w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    En Savoir Plus
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>
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
              Un Projet Environnemental ou de Construction ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Contactez Cabinet IVATIS pour discuter de votre projet et obtenir
              un devis personnalisé gratuit.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="font-semibold text-lg px-8 py-6 shadow-amber"
              >
                Contactez-Nous
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

export default Services;
