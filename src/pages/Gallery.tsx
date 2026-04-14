import { SeoHelmet } from "@/components/SeoHelmet";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import fieldConsultation from "@/assets/activities/field-consultation.jpg";
import fieldConsultation2 from "@/assets/activities/field-consultation-2.jpg";
import consultationMairie from "@/assets/activities/consultation-mairie.jpg";
import reunionGolden from "@/assets/activities/reunion-golden.jpg";
import btpTerrain from "@/assets/activities/btp-terrain.jpg";
import topoTerrain from "@/assets/activities/topo-terrain.jpg";
import topoEquipement from "@/assets/activities/topo-equipement.jpg";
import energieStation from "@/assets/activities/energie-station.jpg";
import auditBetra from "@/assets/activities/audit-betra.jpg";
import auditBetra2 from "@/assets/activities/audit-betra-2.jpg";
import consultationCommunautaire from "@/assets/activities/consultation-communautaire.jpg";
import reunion1 from "@/assets/activities/reunion-1.jpg";
import formationSauvegarde from "@/assets/activities/formation-sauvegarde.jpg";
import formationSecurisme from "@/assets/activities/formation-securisme.jpg";
import formationSecurisme2 from "@/assets/activities/formation-securisme-2.jpg";
import formationSecurisme3 from "@/assets/activities/formation-securisme-3.jpg";
import formationSecurisme4 from "@/assets/activities/formation-securisme-4.jpg";
import formationSecurisme5 from "@/assets/activities/formation-securisme-5.jpg";
import formationSauvegarde4 from "@/assets/activities/formation-sauvegarde-4.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

const galleryImages = [
  { src: fieldConsultation, caption: "Consultation communautaire en milieu rural", category: "Terrain" },
  { src: fieldConsultation2, caption: "Mobilisation des parties prenantes — Zone rurale", category: "Terrain" },
  { src: consultationMairie, caption: "Réunion de suivi environnemental en mairie", category: "Terrain" },
  { src: reunionGolden, caption: "Réunion de travail — Golden Tulip", category: "Terrain" },
  { src: btpTerrain, caption: "Inspection de chantier BTP", category: "Terrain" },
  { src: topoTerrain, caption: "Levé topographique GPS — Route nationale", category: "Terrain" },
  { src: topoEquipement, caption: "Station GPS de précision en milieu rural", category: "Terrain" },
  { src: energieStation, caption: "Poste de transformation électrique", category: "Terrain" },
  { src: auditBetra, caption: "Audit environnemental — Installations BETRA", category: "Terrain" },
  { src: auditBetra2, caption: "Consultation avec la direction BETRA", category: "Terrain" },
  { src: consultationCommunautaire, caption: "Consultation communautaire — Allada", category: "Terrain" },
  { src: reunion1, caption: "Réunion institutionnelle — PMPP", category: "Terrain" },
  { src: formationSauvegarde, caption: "Formation sur les instruments de sauvegarde environnementale", category: "Formation" },
  { src: formationSauvegarde4, caption: "Formation Instruments de Sauvegarde — 2ème Édition", category: "Formation" },
  { src: formationSecurisme, caption: "Formation en sécurité incendie — CMCP", category: "Formation" },
  { src: formationSecurisme2, caption: "Formation en secourisme — CMCP", category: "Formation" },
  { src: formationSecurisme3, caption: "Formation pratique sécurité incendie", category: "Formation" },
  { src: formationSecurisme4, caption: "Formation secourisme d'urgence", category: "Formation" },
  { src: formationSecurisme5, caption: "Démonstration manipulation d'extincteurs — HSE", category: "Formation" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <SeoHelmet
        title="Galerie Photos | CABINET IVATIS — Terrain, Audits, Formations au Bénin et en Afrique de l'Ouest"
        description="Galerie photos des activités terrain de CABINET IVATIS : consultations communautaires, audits environnementaux, levés topographiques, formations HSE au Bénin et en Afrique de l'Ouest."
        canonical="/gallery"
        keywords="galerie CABINET IVATIS, photos terrain environnement Bénin, audit photos, formation HSE photos"
      />
      <Header />
      <WhatsAppButton />

      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0} className="max-w-2xl">
            <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              Galerie Photos
            </p>
            <h1 className="font-heading font-black text-4xl md:text-5xl text-secondary-foreground mb-6">
              Nos Activités en Images
            </h1>
            <p className="text-secondary-foreground/70 text-lg leading-relaxed">
              Découvrez CABINET IVATIS sur le terrain : consultations communautaires, audits,
              levés topographiques, formations et inspections de chantier à travers le Bénin et l'Afrique de l'Ouest.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group cursor-pointer aspect-square rounded-lg overflow-hidden relative shadow-md hover:shadow-xl transition-shadow"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/60 transition-all duration-300 flex items-end">
                  <p className="text-secondary-foreground text-sm p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                    {img.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-white hover:text-primary transition-colors" onClick={() => setSelectedImage(null)}>
              <X className="w-8 h-8" />
            </button>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} className="max-w-5xl max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].caption}
                className="w-full h-full object-contain rounded-lg"
              />
              <p className="text-white text-center mt-4 text-lg font-heading">{galleryImages[selectedImage].caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Gallery;
