import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import companyConfig from '../config/companyConfig';

const MachineryShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleEnquiry = (serviceName) => {
    if (companyConfig.whatsapp) {
      const message = `Hello Durga Earthmovers, I would like to enquire about ${serviceName}.`;
      window.open(`https://wa.me/${companyConfig.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % companyConfig.services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + companyConfig.services.length) % companyConfig.services.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentService = companyConfig.services[currentIndex];

  return (
    <section className="py-20 lg:py-32 bg-charcoal-dark overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">OUR FLEET</p>
          <h2 className="section-title">MACHINERY SHOWCASE</h2>
          <p className="text-concrete-gray text-lg max-w-3xl mx-auto mt-4">
            Premium heavy equipment ready for your earthmoving projects
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative max-w-5xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-charcoal rounded-2xl overflow-hidden border border-concrete-gray/20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="aspect-video lg:aspect-auto relative overflow-hidden">
                <img
                  src={currentService.image}
                  alt={currentService.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center bg-charcoal-dark text-concrete-gray">
                        <div class="text-center">
                          <div class="text-6xl mb-4">🚜</div>
                          <p class="text-lg uppercase tracking-wider">${currentService.name}</p>
                        </div>
                      </div>
                    `;
                  }}
                />
                <div className="absolute top-4 left-4 bg-construction-yellow text-charcoal-dark text-sm font-poppins font-medium uppercase tracking-wider px-4 py-2 rounded">
                  {currentService.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-3xl lg:text-4xl font-poppins font-medium text-white mb-4"
                >
                  {currentService.name}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-concrete-gray text-lg leading-relaxed mb-8"
                >
                  {currentService.description}
                </motion.p>
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  onClick={() => handleEnquiry(currentService.name)}
                  className="btn-primary inline-flex items-center space-x-2 w-fit"
                >
                  <span>Enquire Now</span>
                  <ArrowRight size={20} />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-concrete-gray/20 flex items-center justify-center hover:bg-construction-yellow hover:text-charcoal-dark transition-all duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex space-x-2">
              {companyConfig.services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-construction-yellow w-8' : 'bg-concrete-gray/40'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-concrete-gray/20 flex items-center justify-center hover:bg-construction-yellow hover:text-charcoal-dark transition-all duration-300"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MachineryShowcase;