import { SeoHelmet } from "@/components/SeoHelmet";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SectionTitle } from "@/components/SectionTitle";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-home.jpg";

const contactInfo = [
  {
    icon: Phone,
    title: "Téléphone",
    details: ["+229 01 97 20 33 03"],
    action: "tel:+2290197203303",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["ivatis.ivatis@gmail.com"],
    action: "mailto:ivatis.ivatis@gmail.com",
  },
  {
    icon: MapPin,
    title: "Adresse",
    details: ["Calavi St Louis, Abomey-Calavi", "BP 1495 Calavi, Bénin"],
    action: null,
  },
  {
    icon: Clock,
    title: "Horaires",
    details: ["Lun - Ven: 8h00 - 18h00", "Sam: 8h00 - 13h00"],
    action: null,
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast({
      title: "Message envoyé !",
      description:
        "Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const whatsappNumber = "2290197203303";
  const whatsappMessage = encodeURIComponent(
    "Bonjour Cabinet IVATIS, je souhaite avoir plus d'informations sur vos services."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contactez Cabinet IVATIS | Devis Gratuit EIES, Audit, Topographie — Abomey-Calavi, Bénin</title>
        <meta name="description" content="Contactez Cabinet IVATIS pour vos projets d'ingénierie environnementale au Bénin. Tél : +229 01 97 20 33 03. Email : ivatis.ivatis@gmail.com. Abomey-Calavi, Quartier Agori St Louis." />
        <link rel="canonical" href="https://cabinetivatis.com/contact" />
      </Helmet>
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Contact Cabinet IVATIS" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-construction-charcoal via-construction-charcoal/95 to-background" />
        </div>
        <div className="relative z-10 container-wide">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary font-semibold text-sm uppercase tracking-wider rounded-full mb-6">Contact</span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">Parlons de Votre Projet</h1>
            <p className="text-xl text-muted-foreground">
              Notre équipe est à votre disposition pour répondre à toutes vos questions 
              en ingénierie environnementale, topographie et BTP.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 -mt-8">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div key={info.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }}>
                {info.action ? (
                  <a href={info.action} className="block bg-card border border-border/50 rounded-lg p-6 hover:border-primary/50 hover:shadow-medium transition-all">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-xl mb-2 text-foreground">{info.title}</h3>
                    {info.details.map((detail) => (<p key={detail} className="text-muted-foreground text-sm">{detail}</p>))}
                  </a>
                ) : (
                  <div className="bg-card border border-border/50 rounded-lg p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-xl mb-2 text-foreground">{info.title}</h3>
                    {info.details.map((detail) => (<p key={detail} className="text-muted-foreground text-sm">{detail}</p>))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <SectionTitle subtitle="Formulaire de Contact" title="Envoyez-nous un Message" description="Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais." />
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Nom Complet *</label>
                    <Input id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Votre nom" required className="bg-card" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email *</label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="votre@email.com" required className="bg-card" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">Téléphone</label>
                    <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} placeholder="+229 XX XX XX XX" className="bg-card" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">Sujet *</label>
                    <Input id="subject" name="subject" value={formData.subject} onChange={handleInputChange} placeholder="Sujet de votre message" required className="bg-card" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message *</label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Décrivez votre projet..." rows={6} required className="bg-card resize-none" />
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button type="submit" size="lg" className="font-semibold flex-1" disabled={isSubmitting}>
                    {isSubmitting ? "Envoi en cours..." : (<>Envoyer le Message <Send className="ml-2 w-4 h-4" /></>)}
                  </Button>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <Button type="button" variant="outline" size="lg" className="font-semibold w-full sm:w-auto">
                      <MessageCircle className="mr-2 w-4 h-4" /> WhatsApp
                    </Button>
                  </a>
                </div>
              </form>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <SectionTitle subtitle="Notre Localisation" title="Venez Nous Rencontrer" description="Retrouvez-nous dans nos locaux à Calavi St Louis, Abomey-Calavi." />
              <div className="aspect-[4/3] lg:aspect-auto lg:h-[500px] rounded-lg overflow-hidden border border-border/50">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.8!2d2.3456515!3d6.4517195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1024a900569bdfdd%3A0xba518488bc18e6f9!2sCabinet+IVATIS!5e0!3m2!1sfr!2sbj!4v1710000000000!5m2!1sfr!2sbj"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Cabinet IVATIS - Abomey-Calavi"
                />
              </div>
              <div className="mt-6 p-6 bg-card border border-border/50 rounded-lg">
                <h3 className="font-display text-xl mb-2 text-foreground">Cabinet IVATIS</h3>
                <p className="text-muted-foreground">Quartier Agori St Louis, Rue Général HOUNDEGNON</p>
                <p className="text-muted-foreground text-sm">Abomey-Calavi, Bénin — BP 1495</p>
                <p className="text-muted-foreground text-sm mt-1">RC RB/ABC/22B5468 — IFU: N° 3202292508230</p>
                <a
                  href="https://www.google.com/maps/place/Cabinet+IVATIS/@6.4517195,2.3456515,17z/data=!3m1!4b1!4m6!3m5!1s0x1024a900569bdfdd:0xba518488bc18e6f9!8m2!3d6.4517142!4d2.3482264!16s%2Fg%2F11zkc7mf48"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                >
                  Voir sur Google Maps →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
