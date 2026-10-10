import SEO from '../components/SEO';
import ContactSection from '../sections/Contact';
import WhatsAppButton from '../components/WhatsAppButton';

const Contact = () => {
  return (
    <>
      <SEO
        title="Contact DURGA EARTHMOVERS | Get a Quote"
        description="Contact Durga Earthmovers for excavation, earthmoving, and heavy machinery services. Get a free quote for your project."
      />

      <ContactSection />

      <WhatsAppButton />
    </>
  );
};

export default Contact;

