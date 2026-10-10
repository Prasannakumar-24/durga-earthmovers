import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import WorksGallery from '../sections/WorksGallery';
import WhatsAppButton from '../components/WhatsAppButton';

const Works = () => {
  return (
    <>
      <SEO 
        title="Our Work - DURGA EARTHMOVERS | Project Gallery"
        description="View our completed excavation, earthmoving, and construction projects. See our heavy machinery in action."
      />
      <Navbar />
      <WorksGallery />
      <WhatsAppButton />
    </>
  );
};

export default Works;