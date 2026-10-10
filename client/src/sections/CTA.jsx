import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import companyConfig from '../config/companyConfig';

const CTA = () => {
  const handleWhatsAppClick = () => {
    if (companyConfig.whatsapp) {
      window.open(`https://wa.me/${companyConfig.whatsapp}`, '_blank');
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-charcoal via-charcoal-dark to-charcoal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(${Math.random() * 360}deg, transparent 24%, rgba(244, 196, 48, 0.3) 25%, rgba(244, 196, 48, 0.3) 26%, transparent 27%, transparent 74%, rgba(244, 196, 48, 0.3) 75%, rgba(244, 196, 48, 0.3) 76%, transparent 77%, transparent), linear-gradient(${Math.random() * 360}deg, transparent 24%, rgba(244, 196, 48, 0.3) 25%, rgba(244, 196, 48, 0.3) 26%, transparent 27%, transparent 74%, rgba(244, 196, 48, 0.3) 75%, rgba(244, 196, 48, 0.3) 76%, transparent 77%, transparent)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-poppins font-medium text-white mb-6"
          >
            NEED HEAVY EQUIPMENT FOR YOUR PROJECT?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl md:text-2xl text-concrete-gray mb-12 leading-relaxed"
          >
            Tell us what your project requires and connect with Durga Earthmovers for professional earthmoving and excavation services.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="btn-primary inline-flex items-center justify-center space-x-2"
            >
              <span>BOOK A SERVICE</span>
              <ArrowRight size={20} />
            </Link>
            <button
              onClick={handleWhatsAppClick}
              className="btn-secondary inline-flex items-center justify-center"
            >
              WHATSAPP US
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;