
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import companyConfig from '../config/companyConfig';

const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = document.getElementById('hero-video');

    if (video) {
      const handleLoadedData = () => setVideoLoaded(true);

      video.addEventListener('loadeddata', handleLoadedData);

      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
      };
    }
  }, []);

  const handleWhatsAppClick = () => {
    if (companyConfig.whatsapp) {
      window.open(
        `https://wa.me/${companyConfig.whatsapp}`,
        '_blank'
      );
    }
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          id="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/images/hero/hero-poster.svg"
          className="w-full h-full object-cover"
          style={{
            filter: 'brightness(0.95) contrast(1.05) saturate(1.1)',
            transform: 'scale(1.05)',
            objectPosition: 'center center',
          }}
        >
          <source
            src="/assets/videos/hero/earthmoving-hero.mp4"
            type="video/mp4"
          />

          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/75 via-charcoal/65 to-black/85" />

        {/* Top Overlay */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-charcoal to-transparent" />

        {/* Corner Overlay */}
        <div className="absolute top-0 right-0 w-72 h-36 bg-gradient-to-bl from-charcoal via-charcoal/90 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-[60] section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >

          {/* Company Name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-16 text-5xl md:text-7xl lg:text-8xl font-poppins font-medium text-white leading-tight tracking-tight"
          >
            {companyConfig.name}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl lg:text-3xl font-poppins font-medium text-construction-yellow tracking-wider"
          >
            POWERING EARTHWORK. BUILDING PROGRESS.
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-concrete-gray max-w-3xl mx-auto leading-relaxed"
          >
            Professional earthmoving, excavation, road cutting, machinery and transportation solutions for construction and infrastructure-related projects.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          >
            <Link
              to="/services"
              className="btn-primary"
            >
              OUR SERVICES
            </Link>

            <Link
              to="/contact"
              className="btn-secondary"
            >
              BOOK A SERVICE
            </Link>
          </motion.div>
        </motion.div>

        {/* Hero Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto"
        >

          {/* Machines */}
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-poppins font-medium text-construction-yellow mb-2">
              {companyConfig.stats.machines}
            </div>

            <div className="text-concrete-gray text-sm uppercase tracking-wider">
              MACHINES
            </div>
          </div>

          {/* Heavy Equipment */}
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-poppins font-medium text-construction-yellow mb-2">
              HEAVY EQUIPMENT
            </div>

            <div className="text-concrete-gray text-sm uppercase tracking-wider">
            </div>
          </div>

          {/* Services */}
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-poppins font-medium text-construction-yellow mb-2">
              {companyConfig.stats.projects}
            </div>

            <div className="text-concrete-gray text-sm uppercase tracking-wider">
              24/7
            </div>
          </div>

        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-construction-yellow rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-construction-yellow rounded-full"
          />
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Hero;
