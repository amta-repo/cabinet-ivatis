import { Helmet } from "react-helmet-async";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { getServiceBySlug, servicesData } from "@/data/servicesData";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = service.icon;
  const currentIndex = servicesData.findIndex((s) => s.slug === slug);
  const prevService = currentIndex > 0 ? servicesData[currentIndex - 1] : null;
  const nextService =
    currentIndex < servicesData.length - 1 ? servicesData[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.images[0]}
            alt={service.title}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-construction-charcoal via-construction-charcoal/95 to-background" />
        </div>
        <div className="relative z-10 container-wide">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour aux activités
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center">
                <Icon className="w-7 h-7 text-primary" />
              </div>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-muted-foreground">{service.shortDescription}</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Description
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {service.fullDescription}
              </p>
              <h3 className="font-display text-2xl text-foreground mb-4">
                Détails de l'intervention
              </h3>
              <ul className="space-y-3">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{detail}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Link to="/contact">
                  <Button size="lg" className="font-semibold shadow-amber">
                    Demander un Devis
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Images */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {service.images.map((img, i) => (
                <div key={i} className="rounded-lg overflow-hidden">
                  <img
                    src={img}
                    alt={
                      service.imageCaptions?.[i] || `${service.title} - Image ${i + 1}`
                    }
                    className="w-full h-auto object-cover rounded-lg"
                  />
                  {service.imageCaptions?.[i] && (
                    <p className="text-sm text-muted-foreground mt-2 italic">
                      {service.imageCaptions[i]}
                    </p>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 border-t border-border/50">
        <div className="container-wide flex items-center justify-between">
          {prevService ? (
            <Link
              to={`/services/${prevService.slug}`}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">{prevService.title.length > 40 ? prevService.title.slice(0, 40) + "…" : prevService.title}</span>
              <span className="sm:hidden">Précédent</span>
            </Link>
          ) : (
            <div />
          )}
          {nextService ? (
            <Link
              to={`/services/${nextService.slug}`}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="hidden sm:inline">{nextService.title.length > 40 ? nextService.title.slice(0, 40) + "…" : nextService.title}</span>
              <span className="sm:hidden">Suivant</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-construction-charcoal" />
        <div className="relative z-10 container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Besoin de cette expertise ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Contactez Cabinet IVATIS pour discuter de votre projet et obtenir
              un devis personnalisé gratuit.
            </p>
            <Link to="/contact">
              <Button size="lg" className="font-semibold text-lg px-8 py-6 shadow-amber">
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

export default ServiceDetail;
