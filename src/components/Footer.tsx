import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logoIvatis from "@/assets/logo-ivatis.png";
import { WorldMapLocation } from "@/components/WorldMapLocation";

const footerLinks = {
  company: [
    { name: "À Propos", path: "/about" },
    { name: "Nos Réalisations", path: "/projects" },
    { name: "Galerie", path: "/gallery" },
    { name: "FAQ", path: "/faq" },
  ],
  services: [
    { name: "Ingénierie Environnementale", path: "/services/eies" },
    { name: "Suivi de Projets", path: "/services/suivi-par-pges" },
    { name: "Formation", path: "/services/formation" },
    { name: "Topographie", path: "/services/etudes-topographiques" },
    { name: "BTP", path: "/services/genie-civil-btp" },
  ],
  legal: [
    { name: "Mentions Légales", path: "/legal" },
    { name: "Politique de Confidentialité", path: "/privacy" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[hsl(220,15%,10%)] text-white/90">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo & about */}
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <img src={logoIvatis} alt="CABINET IVATIS" className="h-12 w-auto rounded" />
              <div>
                <span className="font-heading font-bold text-xl text-primary">CABINET</span>
                <span className="font-heading font-bold text-xl text-white"> IVATIS</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Cabinet d'ingénierie environnementale et sociale, suivi de projets,
              formation professionnelle, topographie et BTP au Bénin et en Afrique de l'Ouest.
            </p>
            <p className="text-white/40 text-xs">
              RC RB/ABC/22B5468 — IFU: N° 3202292508230
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/CabinetIvatis"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://www.youtube.com/@cabinetivatis3856"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Youtube className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://instagram.com/cabinetivatis"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a
                href="mailto:ivatis.ivatis@gmail.com"
                aria-label="Email"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Mail className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-primary">Liens Rapides</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-primary">Nos Services</h3>
            <ul className="space-y-3 text-sm text-white/60">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-primary">Contact</h3>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <a href="tel:+2290197203303" className="hover:text-primary transition-colors">
                  +229 01 97 20 33 03
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <a href="mailto:ivatis.ivatis@gmail.com" className="hover:text-primary transition-colors">
                  ivatis.ivatis@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span>Calavi St Louis, Abomey-Calavi, Bénin<br />BP 1495 Calavi</span>
              </li>
            </ul>
          </div>

          {/* World map with location marker */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-primary">Notre Localisation</h3>
            <WorldMapLocation />
            <p className="text-xs text-white/50 mt-2">
              Abomey-Calavi, Bénin — Afrique de l'Ouest
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {currentYear} CABINET IVATIS. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-xs text-white/40 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
