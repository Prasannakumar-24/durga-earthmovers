import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import companyConfig from '../config/companyConfig';

const Services = () => {
  const handleEnquiry = (serviceName) => {
    if (companyConfig.whatsapp) {
      const message = `Hello Durga Earthmovers, I would like to enquire about ${serviceName}.`;
      window.open(`https://wa.me/${companyConfig.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-charcoal">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">OUR EQUIPMENT</p>
          <h2 className="section-title">SERVICES & MACHINERY</h2>
          <p className="text-concrete-gray text-lg max-w-3xl mx-auto mt-4">
            Modern heavy machinery and professional services for all your earthmoving needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyConfig.services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-charcoal-dark rounded-lg overflow-hidden border border-concrete-gray/20 hover:border-construction-yellow/50 transition-all duration-300 card-hover"
            >
              {/* Image */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center bg-charcoal text-concrete-gray">
                        <div class="text-center">
                          <div class="text-4xl mb-2">🚜</div>
                          <p class="text-xs uppercase tracking-wider">${service.name}</p>
                        </div>
                      </div>
                    `;
                  }}
                />
                <div className="absolute top-4 left-4 bg-construction-yellow text-charcoal-dark text-xs font-poppins font-medium uppercase tracking-wider px-3 py-1 rounded">
                  {service.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-poppins font-medium text-white mb-2 group-hover:text-construction-yellow transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-concrete-gray text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <button
                  onClick={() => handleEnquiry(service.name)}
                  className="flex items-center space-x-2 text-construction-yellow text-sm font-poppins font-medium uppercase tracking-wider hover:text-construction-yellow-dark transition-colors duration-300"
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

export default Services;