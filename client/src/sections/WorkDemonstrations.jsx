import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import companyConfig from '../config/companyConfig';

const WorkDemonstrations = () => {
  const handleEnquiry = (serviceName) => {
    if (companyConfig.whatsapp) {
      const message = `Hello Durga Earthmovers, I would like to enquire about ${serviceName}.`;
      window.open(`https://wa.me/${companyConfig.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-charcoal-dark">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">WHAT WE DO</p>
          <h2 className="section-title">WORK DEMONSTRATIONS</h2>
          <p className="text-concrete-gray text-lg max-w-3xl mx-auto mt-4">
            Comprehensive earthmoving and construction services delivered with precision and reliability
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyConfig.workTypes.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-charcoal rounded-lg overflow-hidden border border-concrete-gray/20 hover:border-construction-yellow/50 transition-all duration-300 card-hover"
            >
              {/* Image */}
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={work.image}
                  alt={work.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center bg-charcoal-dark text-concrete-gray">
                        <div class="text-center">
                          <div class="text-4xl mb-2">🏗️</div>
                          <p class="text-xs uppercase tracking-wider">${work.name}</p>
                        </div>
                      </div>
                    `;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-charcoal-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-charcoal-dark to-transparent">
                <h3 className="text-xl font-poppins font-medium text-white mb-2 group-hover:text-construction-yellow transition-colors duration-300">
                  {work.name}
                </h3>
                <p className="text-concrete-gray text-sm leading-relaxed mb-4 opacity-100 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100">
                  {work.description}
                </p>
                <button
                  onClick={() => handleEnquiry(work.name)}
                  className="flex items-center space-x-2 text-construction-yellow text-sm font-poppins font-medium uppercase tracking-wider opacity-100 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100"
                >
                  <span>Enquire Now</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkDemonstrations;