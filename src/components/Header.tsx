import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import logoIvatis from "@/assets/logo-ivatis.jpg";
import { servicesData } from "@/data/servicesData";

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
          ? "bg-white/50 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-3"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logoIvatis} alt="CABINET IVATIS" className="h-9 md:h-10 w-auto rounded" />
          <div className="leading-none">
            <span className={`font-display text-base md:text-lg tracking-wider text-primary`}>
              CABINET
            </span>
            <span className={`font-display text-base md:text-lg tracking-wider ${linkColor}`}>
              {" "}IVATIS
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-6 ml-auto">
          <nav className="flex items-center gap-5">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.path}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      to={link.path}
                      className={`relative font-medium text-xs uppercase tracking-wider transition-colors flex items-center gap-1 ${linkHover} ${
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
                          className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[26rem]"
                        >
                          <div className="bg-white/95 backdrop-blur-md rounded-lg shadow-xl border border-border overflow-hidden max-h-[70vh] overflow-y-auto">
                            <Link
                              to="/services"
                              className="block px-4 py-2.5 text-xs font-heading font-bold uppercase tracking-wider text-primary border-b border-border hover:bg-primary/5"
                            >
                              Tous nos services →
                            </Link>
                            {servicesData.map((s) => (
                              <Link
                                key={s.slug}
                                to={`/services/${s.slug}`}
                                className="block px-4 py-2 text-xs text-foreground hover:bg-primary/5 hover:text-primary transition-colors"
                              >
                                {s.title}
                              </Link>
                            ))}
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
                  className={`relative font-medium text-xs uppercase tracking-wider transition-colors ${linkHover} ${
                    location.pathname === link.path ? "text-primary" : linkColor
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    />
                  )}
                </Link>
              );
            })}
          </nav>
          <Link to="/contact">
            <Button variant="default" size="sm" className="font-semibold bg-cta text-cta-foreground hover:bg-cta/90">
              Demander un Devis
            </Button>
          </Link>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 ${linkColor}`}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-border max-h-[80vh] overflow-y-auto"
          >
            <nav className="container-wide py-6 flex flex-col gap-3">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <div key={link.path}>
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="w-full flex items-center justify-between py-2 font-medium text-lg text-foreground/80"
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-3 border-l-2 border-primary/30 ml-1"
                          >
                            <Link to="/services" className="block py-1.5 text-sm font-semibold text-primary">
                              Tous nos services
                            </Link>
                            {servicesData.map((s) => (
                              <Link
                                key={s.slug}
                                to={`/services/${s.slug}`}
                                className="block py-1.5 text-sm text-foreground/80 hover:text-primary"
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
                    className={`py-2 font-medium text-lg transition-colors ${
                      location.pathname === link.path
                        ? "text-primary"
                        : "text-foreground/80 hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-border/20">
                <Link to="/contact" className="block">
                  <Button variant="default" className="w-full font-semibold bg-cta text-cta-foreground hover:bg-cta/90">
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
