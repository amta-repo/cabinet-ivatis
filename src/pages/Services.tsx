import { SeoHelmet } from "@/components/SeoHelmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { servicesData } from "@/data/servicesData";
import cabinetFront from "@/assets/activities/cabinet-front.jpg";
import ctaBackground from "@/assets/cta-background.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <SeoHelmet
        title="Services Cabinet IVATIS | EIES, PGES, CGES, Audit Environnemental, Topographie, BTP au Bénin"
        description="19 services spécialisés : EIES, PGES, CGES, EESS, audits environnementaux, CPRP, PARC, PMPP, suivi environnemental, topographie GPS, BTP et formation HSE. Cabinet IVATIS, Abomey-Calavi."
        canonical="/services"
        keywords="services EIES Bénin, PGES, CGES, audit environnemental, topographie GPS, BTP, formation HSE, Cabinet IVATIS"
      />
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0} className="max-w-2xl">
            <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-3">Nos Activités</p>
            <h1 className="font-heading font-black text-4xl md:text-5xl text-secondary-foreground mb-6">
              Détail Sommaire des Activités
            </h1>
            <p className="text-secondary-foreground/70 text-lg leading-relaxed">
              Des solutions complètes en ingénierie environnementale et sociale,
              conservation, topographie et BTP au Bénin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.slug}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-border flex flex-col"
              >
                {service.images?.[0] && (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={service.images[0]}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-2 text-card-foreground leading-tight group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                    {service.shortDescription}
                  </p>
                  <Link
                    to={`/services/${service.slug}`}
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
          <h2 className="font-heading font-black text-3xl md:text-4xl text-white mb-4">
            Un Projet Environnemental ou de Construction ?
          </h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">
            Contactez notre équipe pour une étude gratuite et un devis personnalisé.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-cta text-cta-foreground px-8 py-4 rounded-md font-heading font-bold text-sm hover:brightness-110 transition-all"
          >
            Contactez-Nous <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
