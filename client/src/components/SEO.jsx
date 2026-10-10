import { Helmet } from 'react-helmet-async';
import companyConfig from '../config/companyConfig';

const SEO = ({ 
  title = companyConfig.name,
  description = "Durga Earthmovers provides excavation, earthmoving, road cutting, heavy machinery and transportation solutions for construction and infrastructure projects.",
  keywords = "Durga Earthmovers, earthmoving services, excavation services, excavator services, road cutting, JCB services, heavy equipment, earthmoving machinery, hydraulic breaker, construction machinery",
  ogImage = "/assets/images/og-image.jpg",
  canonicalUrl = window.location.href
}) => {
  const siteUrl = import.meta.env.VITE_SITE_URL || '';

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": companyConfig.name,
          "description": description,
          "url": siteUrl,
          "logo": `${siteUrl}${companyConfig.logo}`,
          "telephone": companyConfig.phone,
          "email": companyConfig.email,
          "address": companyConfig.address,
          "sameAs": [
            companyConfig.socialLinks.instagram,
            companyConfig.socialLinks.facebook,
            companyConfig.socialLinks.twitter,
            companyConfig.socialLinks.linkedin
          ].filter(Boolean)
        })}
      </script>
    </Helmet>
  );
};

export default SEO;