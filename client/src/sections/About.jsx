import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, CheckCircle } from 'lucide-react';

const About = () => {
  const features = [
    {
      title: "Excavation Services",
      description:
        "Professional excavation for foundations, trenches, and site preparation with precision equipment.",
    },
    {
      title: "Digging Solutions",
      description:
        "Expert digging services for construction and infrastructure projects of all scales.",
    },
    {
      title: "Earthmoving Excellence",
      description:
        "Large-scale earthmoving capabilities for site leveling and land development.",
    },
    {
      title: "Road Cutting",
      description:
        "Precision road cutting for road construction, maintenance, and utility installation.",
    },
    {
      title: "Site Preparation",
      description:
        "Complete site preparation services ensuring your project starts on solid ground.",
    },
    {
      title: "Machinery Support",
      description:
        "Comprehensive machinery deployment and equipment rental for construction needs.",
    },
    {
      title: "Transportation",
      description:
        "Heavy-duty transportation services for materials and equipment logistics.",
    },
    {
      title: "Construction Support",
      description:
        "Full-spectrum construction support with modern heavy machinery and experienced operators.",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-charcoal">
      <div className="section-container">

        {/* PAGE TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">
            WHO WE ARE
          </p>

          <h2 className="section-title">
            ABOUT DURGA EARTHMOVERS
          </h2>
        </motion.div>


        {/* ABOUT CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">

          {/* LEFT - ABOUT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-concrete-gray leading-relaxed">
              Durga Earthmovers is a leading provider of earthmoving and
              heavy equipment services for construction and infrastructure
              projects. With a commitment to excellence and reliability,
              we deliver comprehensive solutions for excavation, digging,
              road cutting, and material transportation.
            </p>

            <p className="text-lg text-concrete-gray leading-relaxed">
              Our fleet of modern machinery includes excavators,
              hydraulic breakers, tractors, road cutting machines,
              lorries, and JCB equipment. Each piece of equipment is
              maintained to the highest standards and operated by
              experienced professionals.
            </p>

            <p className="text-lg text-concrete-gray leading-relaxed">
              From small-scale site preparation to large infrastructure
              projects, we have the expertise and equipment to handle
              earthmoving challenges efficiently and safely. Our team
              works closely with clients to understand project
              requirements and deliver tailored solutions.
            </p>
          </motion.div>


          {/* RIGHT - JCB IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >

            <div
              className="
                w-full
                aspect-video
                bg-charcoal-dark
                rounded-lg
                overflow-hidden
                border-2
                border-construction-yellow/30
                shadow-2xl
              "
            >

              <img
                src="/assets/images/about/jcb.png"
                alt="JCB Machine - Durga Earthmovers"
                className="w-full h-full object-cover"
              />

            </div>


            {/* EXPERIENCE BADGE */}
            <div
              className="
                absolute
                -bottom-6
                -right-6
                bg-construction-yellow
                p-6
                rounded-lg
                shadow-2xl
              "
            >

              <div
                className="
                  text-charcoal-dark
                  font-poppins
                  font-medium
                  text-2xl
                  md:text-3xl
                "
              >
                24 YEARS OF
              </div>

              <div
                className="
                  text-charcoal-dark
                  font-poppins
                  font-medium
                  text-2xl
                  md:text-3xl
                "
              >
                SERVICE EXPERIENCE
              </div>

            </div>

          </motion.div>

        </div>


        {/* FEATURES GRID */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-6
          "
        >

          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              className="
                bg-charcoal-dark
                p-6
                rounded-lg
                border
                border-concrete-gray/20
                hover:border-construction-yellow/50
                transition-all
                duration-300
                card-hover
              "
            >

              <div
                className="
                  flex
                  items-start
                  space-x-3
                  mb-4
                "
              >

                <CheckCircle
                  className="
                    text-construction-yellow
                    flex-shrink-0
                    mt-1
                  "
                  size={20}
                />

                <h3
                  className="
                    text-lg
                    font-poppins
                    font-medium
                    text-white
                  "
                >
                  {feature.title}
                </h3>

              </div>

              <p
                className="
                  text-concrete-gray
                  text-sm
                  leading-relaxed
                "
              >
                {feature.description}
              </p>

            </motion.div>
          ))}

        </motion.div>


        {/* CTA BUTTON */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="text-center mt-16"
        >

          <Link
            to="/contact"
            className="
              btn-primary
              inline-flex
              items-center
              space-x-2
            "
          >

            <span>
              BOOK A SERVICE
            </span>

            <ChevronRight size={20} />

          </Link>

        </motion.div>

      </div>
    </section>
  );
};

export default About;