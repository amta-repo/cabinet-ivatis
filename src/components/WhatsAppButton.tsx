import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const whatsappNumber = "22940152985";
  const whatsappMessage = encodeURIComponent(
    "Bonjour Génie Créatif BTP, je souhaite avoir plus d'informations sur vos services de construction de maisons."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-foreground px-5 py-3 rounded-full shadow-strong hover:shadow-amber transition-all group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-primary-foreground" />
      <span className="hidden sm:inline font-semibold text-sm text-primary-foreground">
        Discuter avec nous
      </span>
    </motion.a>
  );
}
