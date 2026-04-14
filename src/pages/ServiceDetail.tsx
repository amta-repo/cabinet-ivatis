import { SeoHelmet } from "@/components/SeoHelmet";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { getServiceBySlug, servicesData } from "@/data/servicesData";
import ctaBackground from "@/assets/cta-background.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

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
      <SeoHelmet
        title={`${service.title} | CABINET IVATIS — Bénin et Afrique de l'Ouest`}
        description={`${service.shortDescription} CABINET IVATIS, expert en ingénierie environnementale au Bénin et en Afrique de l'Ouest. Contactez-nous : +229 01 97 20 33 03.`}
        canonical={`/services/${slug}`}
        keywords={`${service.title}, CABINET IVATIS, ingénierie environnementale Bénin Afrique de l'Ouest`}
      />
      <Header />
      <WhatsAppButton />

      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-secondary overflow-hidden">
        {service.images[0] && (
          <div className="absolute inset-0">
            <img src={service.images[0]} alt={service.title} className="w-full h-full object-cover opacity-10" />
          </div>
        )}
        <div className="container mx-auto px-4 relative z-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors font-heading font-semibold text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour aux activités
          </Link>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0} className="max-w-3xl">
            <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center mb-6">
              <Icon className="w-7 h-7 text-primary" />
            </div>
            <h1 className="font-heading font-black text-4xl md:text-5xl text-secondary-foreground mb-6">
              {service.title}
            </h1>
            <p className="text-secondary-foreground/70 text-lg leading-relaxed">{service.shortDescription}</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Text */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-6">
                Description
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {service.fullDescription}
              </p>
              <h3 className="font-heading font-bold text-xl text-foreground mb-4">
                Détails de l'intervention
              </h3>
              <ul className="space-y-3 mb-8">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{detail}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-heading font-bold text-sm hover:brightness-110 transition-all"
              >
                Demander un Devis
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Images */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="space-y-6">
              {service.images.map((img, i) => (
                <div key={i} className="rounded-lg overflow-hidden shadow-xl">
                  <img
                    src={img}
                    alt={service.imageCaptions?.[i] || `${service.title} - Image ${i + 1}`}
                    className="w-full h-auto object-cover rounded-lg"
                    loading="lazy"
                  />
                  {service.imageCaptions?.[i] && (
                    <p className="text-sm text-muted-foreground mt-2 italic px-1">
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
      <section className="py-8 border-t border-border">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {prevService ? (
            <Link
              to={`/services/${prevService.slug}`}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-heading text-sm font-semibold"
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
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-heading text-sm font-semibold"
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
          <h2 className="font-heading font-black text-3xl md:text-4xl text-white mb-4">
            Besoin de cette expertise ?
          </h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">
            Contactez CABINET IVATIS pour discuter de votre projet et obtenir un devis personnalisé gratuit.
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

export default ServiceDetail;
