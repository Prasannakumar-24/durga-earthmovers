import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import companyConfig from '../config/companyConfig';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    if (companyConfig.whatsapp) {
      window.open(`https://wa.me/${companyConfig.whatsapp}`, '_blank');
    }
  };

  if (!companyConfig.whatsapp) {
    return null;
  }

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleWhatsAppClick}
      className="fixed z-50 w-14 h-14 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors duration-300"
      style={{
        right: 'max(1.25rem, env(safe-area-inset-right))',
        bottom: 'max(1.25rem, env(safe-area-inset-bottom))',
      }}
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="text-white" size={32} />
    </motion.button>
  );
};

export default WhatsAppButton;