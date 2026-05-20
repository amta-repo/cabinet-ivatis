import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import logoIvatis from "@/assets/logo-ivatis.png";
import { servicesData } from "@/data/servicesData";

const SERVICES_PREVIEW_COUNT = 6;

const navLinks = [
  { name: "Accueil", path: "/" },
  { name: "À Propos", path: "/about" },
  { name: "Services", path: "/services", hasDropdown: true },
  { name: "Nos Réalisations", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  const isTransparent = !isScrolled;
  const linkColor = isTransparent ? "text-white" : "text-foreground";
  const linkHover = "hover:text-primary";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2 border-b border-slate-100"
          : "bg-transparent py-3"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between relative h-12 md:h-14">
        
        {/* LEFT FLANK: Logo Wrapper */}
        <Link to="/" className="flex items-center gap-2 shrink-0 z-20">
          <img src={logoIvatis} alt="CABINET IVATIS" className="h-9 md:h-10 w-auto rounded" />
          <div className="leading-none">
            <span className="font-display text-base md:text-lg tracking-wider text-primary font-bold">
              CABINET
            </span>
            <span className={`font-display text-base md:text-lg tracking-wider font-bold ${linkColor}`}>
              {" "}IVATIS
            </span>
          </div>
        </Link>

        {/* CENTER FLANK: True Pixel-Perfect Center Anchor (Visible only on Desktop) */}
        <nav className="hidden lg:flex items-center gap-6 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          {navLinks.map((link) => {
            if (link.hasDropdown) {
              return (
                <div
                  key={link.path}
                  className="relative py-2"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    to={link.path}
                    className={`relative font-semibold text-xs uppercase tracking-wider transition-colors flex items-center gap-1 ${linkHover} ${
                      location.pathname.startsWith("/services") ? "text-primary" : linkColor
                    }`}
                  >
                    {link.name}
                    <ChevronDown className="w-3 h-3" />
                  </Link>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[26rem]"
                      >
                        {/* High Contrast Dropdown Panel */}
                        <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(15,23,42,0.12)] border border-slate-200/80 overflow-hidden p-1.5">
                          {servicesData.slice(0, SERVICES_PREVIEW_COUNT).map((s) => (
                            <Link
                              key={s.slug}
                              to={`/services/${s.slug}`}
                              className="block px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50 hover:text-primary rounded-xl transition-colors text-left"
                            >
                              {s.title}
                            </Link>
                          ))}
                          <Link
                            to="/services"
                            className="block px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-900 border-t border-slate-100 hover:bg-slate-50 text-center rounded-b-xl"
                          >
                            Voir plus →
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-semibold text-xs uppercase tracking-wider transition-colors py-2 ${linkHover} ${
                  location.pathname === link.path ? "text-primary" : linkColor
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT FLANK: Action Devis Button Container */}
        <div className="hidden lg:block shrink-0 z-20">
          <Link to="/contact">
            <Button variant="default" size="sm" className="font-semibold bg-cta text-cta-foreground hover:bg-cta/90 shadow-sm rounded-xl px-5">
              Demander un Devis
            </Button>
          </Link>
        </div>

        {/* SMARTPHONE HAMBURGER BUTTON */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 z-20 ${linkColor}`}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE PANEL CONTAINER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 max-h-[85vh] overflow-y-auto shadow-xl"
          >
            <nav className="px-6 py-6 flex flex-col gap-2">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <div key={link.path} className="border-b border-slate-50 pb-2">
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="w-full flex items-center justify-between py-2.5 font-bold text-base text-slate-900"
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180 text-primary" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-3 border-l-2 border-primary/20 ml-1 mt-1 space-y-1"
                          >
                            <Link to="/services" className="block py-2 text-sm font-bold text-primary">
                              Tous nos services
                            </Link>
                            {servicesData.map((s) => (
                              <Link
                                key={s.slug}
                                to={`/services/${s.slug}`}
                                className="block py-2 text-sm font-semibold text-slate-800 hover:text-primary transition-colors"
                              >
                                {s.title}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block py-2.5 font-bold text-base border-b border-slate-50 transition-colors ${
                      location.pathname === link.path ? "text-primary" : "text-slate-900 hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-4">
                <Link to="/contact" className="w-full block">
                  <Button size="lg" className="w-full rounded-xl bg-slate-900 text-white font-bold py-6">
                    Demander un Devis
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
