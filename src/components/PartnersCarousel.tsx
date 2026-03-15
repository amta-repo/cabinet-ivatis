import { motion } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";

import jecoLogo from "@/assets/partners/jeco.jpg";
import cebLogo from "@/assets/partners/ceb.png";
import goldenTulipLogo from "@/assets/partners/golden-tulip.png";
import mcaBeninLogo from "@/assets/partners/mca-benin.png";

const partners = [
  { name: "AGETUR", logo: null, placeholder: "AGETUR" },
  { name: "Complexe Hôtelier JECO", logo: jecoLogo },
  { name: "PRUBA", logo: null, placeholder: "PRUBA" },
  { name: "PASE", logo: null, placeholder: "PASE" },
  { name: "ACCESS", logo: null, placeholder: "ACCESS" },
  { name: "CEB", logo: cebLogo },
  { name: "Golden Tulip Le Diplomate", logo: goldenTulipLogo },
  { name: "MCA Bénin", logo: mcaBeninLogo },
  { name: "PDVIR", logo: null, placeholder: "PDVIR" },
  { name: "P2AE", logo: null, placeholder: "P2AE" },
];

// Duplicate for seamless loop
const allPartners = [...partners, ...partners];

export function PartnersCarousel() {
  return (
    <section className="py-16 bg-muted/30 overflow-hidden">
      <div className="container-wide mb-10">
        <SectionTitle
          subtitle="Nos Partenaires"
          title="Ils Nous Font Confiance"
          centered
        />
      </div>
      <div className="relative">
        <motion.div
          className="flex gap-12 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          style={{ width: "fit-content" }}
        >
          {allPartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 h-20 w-40 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              {partner.logo ? (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain"
                />
              ) : (
                <span className="font-display text-lg text-muted-foreground font-bold">
                  {partner.placeholder}
                </span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
