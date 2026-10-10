import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import ServicesSection from '../sections/Services';
import MachineryShowcase from '../sections/MachineryShowcase';
import WhatsAppButton from '../components/WhatsAppButton';

const Services = () => {
  return (
    <>
      <SEO 
        title="Services - DURGA EARTHMOVERS | Heavy Machinery & Equipment"
        description="Explore our comprehensive range of earthmoving services including excavation, road cutting, JCB services, and heavy equipment rental."
      />
      <Navbar />
      <ServicesSection />
      <MachineryShowcase />
      <WhatsAppButton />
    </>
  );
};

export default Services;