import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const WorksGallery = () => {
  const [selectedFilter, setSelectedFilter] = useState('ALL');
  const [selectedImage, setSelectedImage] = useState(null);

  const filters = ['ALL', 'EXCAVATION', 'ROAD WORK', 'EARTHMOVING', 'SITE WORK', 'MACHINERY'];

  // Placeholder project data - replace with actual project images
  const projects = [
    { id: 1, category: 'EXCAVATION', image: '/assets/images/projects/excavation-1.svg', title: 'Foundation Excavation' },
    { id: 2, category: 'ROAD WORK', image: '/assets/images/projects/road-1.svg', title: 'Road Construction' },
    { id: 3, category: 'EARTHMOVING', image: '/assets/images/projects/earthmoving-1.svg', title: 'Site Leveling' },
    { id: 4, category: 'SITE WORK', image: '/assets/images/projects/site-1.svg', title: 'Site Preparation' },
    { id: 5, category: 'MACHINERY', image: '/assets/images/projects/machinery-1.svg', title: 'Equipment Deployment' },
    { id: 6, category: 'EXCAVATION', image: '/assets/images/projects/excavation-2.svg', title: 'Trench Digging' },
    { id: 7, category: 'ROAD WORK', image: '/assets/images/projects/road-2.svg', title: 'Road Cutting' },
    { id: 8, category: 'EARTHMOVING', image: '/assets/images/projects/earthmoving-2.svg', title: 'Land Development' },
  ];

  const filteredProjects = selectedFilter === 'ALL' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  const openLightbox = (project) => {
    setSelectedImage(project);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
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
          <p className="section-subtitle">OUR PORTFOLIO</p>
          <h2 className="section-title">OUR WORK</h2>
          <p className="text-concrete-gray text-lg max-w-3xl mx-auto mt-4">
            See our machinery and expertise in action across various projects
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-6 py-2 rounded-full font-poppins font-medium text-sm uppercase tracking-wider transition-all duration-300 ${
                selectedFilter === filter
                  ? 'bg-construction-yellow text-charcoal-dark'
                  : 'bg-charcoal text-white hover:bg-concrete-gray/20'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative aspect-square bg-charcoal rounded-lg overflow-hidden border border-concrete-gray/20 hover:border-construction-yellow/50 transition-all duration-300 cursor-pointer"
                onClick={() => openLightbox(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center bg-charcoal-dark text-concrete-gray">
                        <div class="text-center">
                          <div class="text-4xl mb-2">🏗️</div>
                          <p class="text-xs uppercase tracking-wider">${project.category}</p>
                        </div>
                      </div>
                    `;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-charcoal-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-construction-yellow text-xs font-poppins font-medium uppercase tracking-wider mb-1">
                    {project.category}
                  </p>
                  <h3 className="text-white font-poppins font-medium text-lg">
                    {project.title}
                  </h3>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-construction-yellow/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="text-charcoal-dark" size={20} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-5xl max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeLightbox}
                  className="absolute -top-12 right-0 text-white hover:text-construction-yellow transition-colors duration-300"
                  aria-label="Close lightbox"
                >
                  <X size={32} />
                </button>
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-96 flex items-center justify-center bg-charcoal-dark text-concrete-gray rounded-lg">
                        <div class="text-center">
                          <div class="text-6xl mb-4">🏗️</div>
                          <p class="text-lg uppercase tracking-wider">${selectedImage.category}</p>
                        </div>
                      </div>
                    `;
                  }}
                />
                <div className="mt-4 text-center">
                  <p className="text-construction-yellow text-sm font-poppins font-medium uppercase tracking-wider">
                    {selectedImage.category}
                  </p>
                  <h3 className="text-white font-poppins font-medium text-2xl mt-2">
                    {selectedImage.title}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default WorksGallery;