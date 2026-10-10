import { motion } from 'framer-motion';
import { CheckCircle, Shield, Clock, Zap } from 'lucide-react';

const WhyDurga = () => {
  const reasons = [
    {
      icon: CheckCircle,
      title: "RELIABLE MACHINERY",
      description: "Well-maintained equipment ensuring consistent performance and minimal downtime.",
    },
    {
      icon: Shield,
      title: "PROJECT-READY EQUIPMENT",
      description: "Fleet ready for immediate deployment to meet your project timelines.",
    },
    {
      icon: Zap,
      title: "VERSATILE SERVICES",
      description: "Comprehensive earthmoving solutions from excavation to transportation.",
    },
    {
      icon: Clock,
      title: "DIRECT SUPPORT",
      description: "Experienced team providing hands-on support throughout your project.",
    },
  ];

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
          <p className="section-subtitle">WHY CHOOSE US</p>
          <h2 className="section-title">WHY DURGA EARTHMOVERS</h2>
          <p className="text-concrete-gray text-lg max-w-3xl mx-auto mt-4">
            Your trusted partner for earthmoving and construction equipment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-construction-yellow/10 flex items-center justify-center group-hover:bg-construction-yellow/20 transition-all duration-300">
                <reason.icon className="text-construction-yellow" size={40} />
              </div>
              <h3 className="text-xl font-poppins font-medium text-white mb-3 group-hover:text-construction-yellow transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-concrete-gray text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDurga;