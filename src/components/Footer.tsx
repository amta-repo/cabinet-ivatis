import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import logoIvatis from "@/assets/logo-ivatis.jpg";

const footerLinks = {
  company: [
    { name: "À Propos", path: "/about" },
    { name: "Notre Équipe", path: "/about#team" },
    { name: "Carrières", path: "/contact" },
  ],
  services: [
    { name: "Ingénierie Environnementale", path: "/services#environnement" },
    { name: "Suivi de Projets", path: "/services#suivi" },
    { name: "Formation", path: "/services#formation" },
    { name: "Topographie", path: "/services#topo" },
    { name: "BTP", path: "/services#btp" },
  ],
  legal: [
    { name: "Mentions Légales", path: "/legal" },
    { name: "Politique de Confidentialité", path: "/privacy" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-construction-charcoal text-foreground">
      {/* Main Footer */}
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <img src={logoIvatis} alt="Cabinet IVATIS" className="h-10 w-auto rounded" />
              <div>
                <span className="font-display text-3xl tracking-wider text-primary">
                  Cabinet
                </span>
                <span className="font-display text-3xl tracking-wider text-foreground">
                  {" "}IVATIS
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Cabinet d'ingénierie environnementale et sociale, suivi de projets, 
              formation professionnelle, topographie et BTP au Bénin.
            </p>
            <p className="text-muted-foreground text-sm mb-6">
              RC RB/ABC/22B5468 — IFU: N° 3202292508230
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com/cabinetivatis"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted/20 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/cabinetivatis"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted/20 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:ivatis.ivatis@gmail.com"
                className="w-10 h-10 rounded-full bg-muted/20 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-display text-xl mb-6 text-foreground">
              Cabinet
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl mb-6 text-foreground">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-display text-xl mb-6 text-foreground">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+2290197203303"
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block">+229 01 97 20 33 03</span>
                    <span className="block">+229 98 34 35 35</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:ivatis.ivatis@gmail.com"
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>ivatis.ivatis@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Calavi St Louis, Abomey-Calavi, Bénin<br />BP 1495 Calavi</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/20">
        <div className="container-wide py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Cabinet IVATIS. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
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
