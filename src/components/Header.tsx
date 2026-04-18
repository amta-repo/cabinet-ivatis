import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import logoIvatis from "@/assets/logo-ivatis.jpg";

const navLinks = [
  { name: "Accueil", path: "/" },
  { name: "À Propos", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Nos Réalisations", path: "/projects" },
  { name: "Galerie", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // When at top of page: transparent — text is white (sits over dark hero overlay).
  // When scrolled: semi-transparent white background with backdrop blur — text dark.
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
        {/* Logo — extreme left */}
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

        {/* Desktop Navigation — pushed right */}
        <div className="hidden lg:flex items-center gap-6 ml-auto">
          <nav className="flex items-center gap-5">
            {navLinks.map((link) => (
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
            ))}
          </nav>
          <Link to="/contact">
            <Button variant="default" size="sm" className="font-semibold bg-cta text-cta-foreground hover:bg-cta/90">
              Demander un Devis
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 ${linkColor}`}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-border"
          >
            <nav className="container-wide py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
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
              ))}
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
