import SEO from '../components/SEO';
import Hero from '../sections/Hero';
import About from '../sections/About';
import WorkDemonstrations from '../sections/WorkDemonstrations';
import Services from '../sections/Services';
import MachineryShowcase from '../sections/MachineryShowcase';
import WhyDurga from '../sections/WhyDurga';
import WorksGallery from '../sections/WorksGallery';
import VideoShowcase from '../sections/VideoShowcase';
import CTA from '../sections/CTA';
import Contact from '../sections/Contact';
import WhatsAppButton from '../components/WhatsAppButton';

const Home = () => {
  return (
    <>
      <SEO 
        title="DURGA EARTHMOVERS | Excavation, Earthmoving & Heavy Equipment"
        description="Durga Earthmovers provides excavation, earthmoving, road cutting, heavy machinery and transportation solutions for construction and infrastructure projects."
      />
      <Hero />
      <About />
      <WorkDemonstrations />
      <Services />
      <MachineryShowcase />
      <WhyDurga />
      <WorksGallery />
      <VideoShowcase />
      <CTA />
      <Contact />
      <WhatsAppButton />
    </>
  );
};

export default Home;