import { motion } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";

import jecoLogo from "@/assets/partners/jeco.jpg";
import cebLogo from "@/assets/partners/ceb.png";
import goldenTulipLogo from "@/assets/partners/golden-tulip.png";
import mcaBeninLogo from "@/assets/partners/mca-benin.png";
import pebLogo from "@/assets/partners/peb.png";
import betraLogo from "@/assets/partners/betra.jpg";
import vinciLogo from "@/assets/partners/vinci.jpg";
import p2aeLogo from "@/assets/partners/p2ae.jpg";
import paseLogo from "@/assets/partners/pase.jpg";
import accessLogo from "@/assets/partners/access.jpg";
import prubaLogo from "@/assets/partners/pruba.jpg";
import pdvirLogo from "@/assets/partners/pdvir.jpg";
import ageturLogo from "@/assets/partners/agetur.jpg";

const partners = [
  { name: "P2AE", logo: p2aeLogo },
  { name: "CEB", logo: cebLogo },
  { name: "VINCI Énergie", logo: vinciLogo },
  { name: "PASE", logo: paseLogo },
  { name: "ACCESS", logo: accessLogo },
  { name: "PRUBA", logo: prubaLogo },
  { name: "PDVIR", logo: pdvirLogo },
  { name: "AGETUR", logo: ageturLogo },
  { name: "MCA Bénin", logo: mcaBeninLogo },
  { name: "Golden Tulip Le Diplomate", logo: goldenTulipLogo },
  { name: "Société PEB", logo: pebLogo },
  { name: "Société BETRA", logo: betraLogo },
  { name: "Complexe Hôtelier JECO", logo: jecoLogo },
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
              duration: 35,
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
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
