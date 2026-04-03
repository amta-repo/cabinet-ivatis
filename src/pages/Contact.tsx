import { SeoHelmet } from "@/components/SeoHelmet";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Clock, MessageCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useToast } from "@/hooks/use-toast";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
      <SeoHelmet
        title="Contactez Cabinet IVATIS | Devis Gratuit EIES, Audit, Topographie — Abomey-Calavi, Bénin"
        description="Contactez Cabinet IVATIS pour vos projets d'ingénierie environnementale au Bénin. Tél : +229 01 97 20 33 03. Email : ivatis.ivatis@gmail.com. Abomey-Calavi, Quartier Agori St Louis."
        canonical="/contact"
        keywords="contact Cabinet IVATIS, devis EIES Bénin, bureau études Abomey-Calavi, téléphone IVATIS"
      />
      <Header />
      <WhatsAppButton />

      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0} className="max-w-2xl">
            <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-3">Contact</p>
            <h1 className="font-heading font-black text-4xl md:text-5xl text-secondary-foreground mb-6">
              Parlons de Votre Projet
            </h1>
            <p className="text-secondary-foreground/70 text-lg leading-relaxed">
              Notre équipe est à votre disposition pour répondre à toutes vos questions
              en ingénierie environnementale, topographie et BTP.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact info */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="space-y-8">
              <div>
                <h2 className="font-heading font-bold text-2xl text-foreground mb-6">Nos Coordonnées</h2>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-foreground">Téléphone</p>
                      <a href="tel:+2290197203303" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                        +229 01 97 20 33 03
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-foreground">WhatsApp</p>
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                        +229 01 97 20 33 03
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-foreground">Email</p>
                      <a href="mailto:ivatis.ivatis@gmail.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                        ivatis.ivatis@gmail.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-foreground">Adresse</p>
                      <p className="text-muted-foreground text-sm">Calavi St Louis, Abomey-Calavi, Bénin</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-foreground">Horaires</p>
                      <p className="text-muted-foreground text-sm">Lun - Ven: 8h00 - 18h00</p>
                      <p className="text-muted-foreground text-sm">Sam: 8h00 - 13h00</p>
                    </div>
                  </li>
                </ul>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-accent text-accent-foreground py-4 rounded-md font-heading font-bold text-sm hover:brightness-110 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Chattez avec nous sur WhatsApp
              </a>
            </motion.div>

            {/* Form */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="lg:col-span-2">
              <div className="bg-card rounded-lg p-6 md:p-8 shadow-md border border-border">
                <h2 className="font-heading font-bold text-2xl text-card-foreground mb-6">Envoyez-nous un Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Nom complet *</label>
                      <input
                        id="name" name="name" value={formData.name} onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-md bg-background border border-input text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Votre nom" required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                      <input
                        id="email" name="email" type="email" value={formData.email} onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-md bg-background border border-input text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="votre@email.com" required
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">Téléphone</label>
                      <input
                        id="phone" name="phone" value={formData.phone} onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-md bg-background border border-input text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="+229 XX XX XX XX"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">Sujet *</label>
                      <select
                        id="subject" name="subject" value={formData.subject} onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-md bg-background border border-input text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        required
                      >
                        <option value="">Sélectionnez un sujet</option>
                        <option value="EIES">Étude d'Impact Environnemental</option>
                        <option value="Audit">Audit Environnemental</option>
                        <option value="Topographie">Topographie</option>
                        <option value="BTP">BTP & Génie Civil</option>
                        <option value="Formation">Formation</option>
                        <option value="Devis">Demande de devis</option>
                        <option value="Autre">Autre</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Message *</label>
                    <textarea
                      id="message" name="message" rows={5} value={formData.message} onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-md bg-background border border-input text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      placeholder="Décrivez votre projet ou votre question..." required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 bg-cta text-cta-foreground px-8 py-3.5 rounded-md font-heading font-bold text-sm hover:brightness-110 transition-all disabled:opacity-60"
                  >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer le Message"}
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="mt-16">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-6">Notre Localisation</h2>
            <div className="rounded-lg overflow-hidden shadow-md border border-border h-80 md:h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.8!2d2.3456515!3d6.4517195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1024a900569bdfdd%3A0xba518488bc18e6f9!2sCabinet+IVATIS!5e0!3m2!1sfr!2sbj!4v1710000000000!5m2!1sfr!2sbj"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title="Cabinet IVATIS - Abomey-Calavi"
              />
            </div>
            <div className="mt-4 p-6 bg-card border border-border rounded-lg">
              <h3 className="font-heading font-bold text-lg text-card-foreground">Cabinet IVATIS</h3>
              <p className="text-muted-foreground text-sm">Quartier Agori St Louis, Rue Général HOUNDEGNON — Abomey-Calavi, Bénin — BP 1495</p>
              <p className="text-muted-foreground text-sm mt-1">RC RB/ABC/22B5468 — IFU: N° 3202292508230</p>
              <a
                href="https://www.google.com/maps/place/Cabinet+IVATIS/@6.4517195,2.3456515,17z/data=!3m1!4b1!4m6!3m5!1s0x1024a900569bdfdd:0xba518488bc18e6f9!8m2!3d6.4517142!4d2.3482264!16s%2Fg%2F11zkc7mf48"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-primary hover:text-primary/80 text-sm font-heading font-semibold transition-colors"
              >
                Voir sur Google Maps →
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
