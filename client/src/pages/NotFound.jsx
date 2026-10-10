import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';

const NotFound = () => {
  return (
    <>
      <SEO title="404 - Page Not Found | DURGA EARTHMOVERS" />
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-charcoal-dark">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center px-4"
        >
          <motion.h1
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-8xl md:text-9xl font-poppins font-medium text-construction-yellow mb-4"
          >
            404
          </motion.h1>
          <h2 className="text-3xl md:text-4xl font-poppins font-medium text-white mb-6">
            PAGE NOT FOUND
          </h2>
          <p className="text-concrete-gray text-lg mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="btn-primary inline-block"
          >
            BACK TO HOME
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default NotFound;