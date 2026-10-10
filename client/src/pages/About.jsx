import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import AboutSection from '../sections/About';
import WhatsAppButton from '../components/WhatsAppButton';

const About = () => {
  return (
    <>
      <SEO 
        title="About DURGA EARTHMOVERS | Professional Earthmoving Services"
        description="Learn about Durga Earthmovers - your trusted partner for excavation, earthmoving, road cutting, and heavy machinery services."
      />
      <Navbar />
      <AboutSection />
      <WhatsAppButton />
    </>
  );
};

export default About;