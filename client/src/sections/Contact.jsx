import { motion } from 'framer-motion';
import { useState } from 'react';
import { Phone, Mail, MapPin, Send, Loader2 } from 'lucide-react';
import companyConfig from '../config/companyConfig';

const initialFormData = {
  name: '',
  phone: '',
  email: '',
  location: '',
  projectType: '',
};

const Contact = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      /*
       * Production:
       * VITE_API_URL=/api
       *
       * Development:
       * VITE_API_URL=http://localhost:5000/api
       */

      const apiUrl = (
  import.meta.env.VITE_API_URL || 'http://localhost:5000/api'
).replace(/\/$/, '');

      const response = await fetch(`${apiUrl}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        console.error('Contact API error:', {
          status: response.status,
          statusText: response.statusText,
          data,
        });

        throw new Error(
          data?.message ||
            data?.error ||
            `Request failed with status ${response.status}`
        );
      }

      console.log('Contact enquiry submitted successfully:', data);

      setSubmitStatus('success');
      setFormData(initialFormData);
    } catch (error) {
      console.error('Error submitting contact form:', error);

      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePhoneClick = () => {
    if (!companyConfig.phone) {
      return;
    }

    const phoneNumbers = companyConfig.phone.split(' or ');

    const firstPhoneNumber = phoneNumbers[0].replace(/[^\d+]/g, '');

    if (firstPhoneNumber) {
      window.location.href = `tel:${firstPhoneNumber}`;
    }
  };

  const handleEmailClick = () => {
    if (!companyConfig.email) {
      return;
    }

    window.location.href = `mailto:${companyConfig.email}`;
  };

  const handleWhatsAppClick = () => {
    if (!companyConfig.whatsapp) {
      return;
    }

    const whatsappNumber = String(companyConfig.whatsapp).replace(
      /[^\d]/g,
      ''
    );

    if (whatsappNumber) {
      window.open(
        `https://wa.me/${whatsappNumber}`,
        '_blank',
        'noopener,noreferrer'
      );
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-charcoal-dark">
      <div className="section-container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">
            GET IN TOUCH
          </p>

          <h2 className="section-title">
            CONTACT DURGA EARTHMOVERS
          </h2>

          <p className="text-concrete-gray text-lg max-w-3xl mx-auto mt-4">
            Reach out to us for inquiries, quotes, or to discuss
            your earthmoving project requirements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* =====================================================
              CONTACT INFORMATION
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-poppins font-medium text-white mb-6">
                Contact Information
              </h3>

              <p className="text-concrete-gray leading-relaxed mb-8">
                Have a project in mind? Contact us today to discuss
                how Durga Earthmovers can help with your excavation,
                earthmoving, and heavy equipment needs.
              </p>
            </div>

            <div className="space-y-6">

              {/* Phone */}
              {companyConfig.phone && (
                <button
                  type="button"
                  onClick={handlePhoneClick}
                  className="flex items-start space-x-4 group w-full text-left"
                >
                  <div className="w-12 h-12 rounded-full bg-construction-yellow/10 flex items-center justify-center group-hover:bg-construction-yellow/20 transition-all duration-300 flex-shrink-0">
                    <Phone
                      className="text-construction-yellow"
                      size={24}
                    />
                  </div>

                  <div>
                    <p className="text-concrete-gray text-sm uppercase tracking-wider mb-1">
                      Phone
                    </p>

                    <p className="text-white group-hover:text-construction-yellow transition-colors duration-300">
                      {companyConfig.phone}
                    </p>
                  </div>
                </button>
              )}

              {/* Email */}
              {companyConfig.email && (
                <button
                  type="button"
                  onClick={handleEmailClick}
                  className="flex items-start space-x-4 group w-full text-left"
                >
                  <div className="w-12 h-12 rounded-full bg-construction-yellow/10 flex items-center justify-center group-hover:bg-construction-yellow/20 transition-all duration-300 flex-shrink-0">
                    <Mail
                      className="text-construction-yellow"
                      size={24}
                    />
                  </div>

                  <div>
                    <p className="text-concrete-gray text-sm uppercase tracking-wider mb-1">
                      Email
                    </p>

                    <p className="text-white group-hover:text-construction-yellow transition-colors duration-300">
                      {companyConfig.email}
                    </p>
                  </div>
                </button>
              )}

              {/* WhatsApp */}
              {companyConfig.whatsapp && (
                <button
                  type="button"
                  onClick={handleWhatsAppClick}
                  className="flex items-start space-x-4 group w-full text-left"
                >
                  <div className="w-12 h-12 rounded-full bg-construction-yellow/10 flex items-center justify-center group-hover:bg-construction-yellow/20 transition-all duration-300 flex-shrink-0">
                    <Phone
                      className="text-construction-yellow"
                      size={24}
                    />
                  </div>

                  <div>
                    <p className="text-concrete-gray text-sm uppercase tracking-wider mb-1">
                      WhatsApp
                    </p>

                    <p className="text-white group-hover:text-construction-yellow transition-colors duration-300">
                      {companyConfig.whatsapp}
                    </p>
                  </div>
                </button>
              )}

              {/* Address */}
              {companyConfig.address && (
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-construction-yellow/10 flex items-center justify-center flex-shrink-0">
                    <MapPin
                      className="text-construction-yellow"
                      size={24}
                    />
                  </div>

                  <div>
                    <p className="text-concrete-gray text-sm uppercase tracking-wider mb-1">
                      Address
                    </p>

                    <button
                      type="button"
                      onClick={() => {
                        if (companyConfig.googleMapsUrl) {
                          window.open(
                            companyConfig.googleMapsUrl,
                            '_blank',
                            'noopener,noreferrer'
                          );
                        }
                      }}
                      className="text-white hover:text-construction-yellow transition-colors duration-300 text-left"
                    >
                      {companyConfig.address}

                      {companyConfig.googleMapsUrl && (
                        <span className="block text-xs text-construction-yellow/70 mt-1">
                          Click to open in Maps
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Google Maps */}
            {companyConfig.googleMapsUrl && (
              <div className="pt-6">
                <a
                  href={companyConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-construction-yellow hover:text-construction-yellow-dark transition-colors duration-300"
                >
                  <span>View on Google Maps</span>
                  <MapPin size={16} />
                </a>
              </div>
            )}
          </motion.div>

          {/* =====================================================
              CONTACT FORM
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-charcoal p-8 rounded-lg border border-concrete-gray/20"
            >
              <h3 className="text-2xl font-poppins font-medium text-white mb-6">
                Site Enquiry
              </h3>

              <div className="space-y-6">

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-concrete-gray text-sm uppercase tracking-wider mb-2"
                  >
                    Name *
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    className="w-full bg-charcoal-dark border border-concrete-gray/30 rounded-lg px-4 py-3 text-base text-white focus:outline-none focus:border-construction-yellow transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-concrete-gray text-sm uppercase tracking-wider mb-2"
                  >
                    Phone *
                  </label>

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    autoComplete="tel"
                    inputMode="tel"
                    className="w-full bg-charcoal-dark border border-concrete-gray/30 rounded-lg px-4 py-3 text-base text-white focus:outline-none focus:border-construction-yellow transition-colors duration-300"
                    placeholder="Your phone number"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-concrete-gray text-sm uppercase tracking-wider mb-2"
                  >
                    Email *
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    className="w-full bg-charcoal-dark border border-concrete-gray/30 rounded-lg px-4 py-3 text-base text-white focus:outline-none focus:border-construction-yellow transition-colors duration-300"
                    placeholder="Your email address"
                  />
                </div>

                {/* Location */}
                <div>
                  <label
                    htmlFor="location"
                    className="block text-concrete-gray text-sm uppercase tracking-wider mb-2"
                  >
                    Location *
                  </label>

                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    autoComplete="street-address"
                    className="w-full bg-charcoal-dark border border-concrete-gray/30 rounded-lg px-4 py-3 text-base text-white focus:outline-none focus:border-construction-yellow transition-colors duration-300"
                    placeholder="Your project location"
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-concrete-gray text-sm uppercase tracking-wider mb-2"
                  >
                    Project Type
                  </label>

                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-charcoal-dark border border-concrete-gray/30 rounded-lg px-4 py-3 text-base text-white focus:outline-none focus:border-construction-yellow transition-colors duration-300"
                  >
                    <option value="">
                      Select project type
                    </option>

                    <option value="excavation">
                      Excavation
                    </option>

                    <option value="earthmoving">
                      Earthmoving
                    </option>

                    <option value="road-cutting">
                      Road Cutting
                    </option>

                    <option value="site-preparation">
                      Site Preparation
                    </option>

                    <option value="machinery-rental">
                      Machinery Rental
                    </option>

                    <option value="transportation">
                      Transportation
                    </option>

                    <option value="other">
                      Other
                    </option>
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary inline-flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2
                        className="animate-spin"
                        size={20}
                      />

                      <span>
                        Sending...
                      </span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />

                      <span>
                        Send Enquiry
                      </span>
                    </>
                  )}
                </button>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-500/20 border border-green-500 text-green-400 px-4 py-3 rounded-lg text-sm"
                    role="alert"
                  >
                    Thank you. Your enquiry has been received.
                  </motion.div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-500/20 border border-red-500 text-red-400 px-4 py-3 rounded-lg text-sm"
                    role="alert"
                  >
                    Something went wrong. Please try again.
                    Check the browser console for more details.
                  </motion.div>
                )}

              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;