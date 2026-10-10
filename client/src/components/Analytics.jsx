import { useEffect } from 'react';

const Analytics = () => {
  useEffect(() => {
    // Google Analytics (when GA_ID is configured)
    const GA_ID = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;
    
    if (GA_ID) {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      document.head.appendChild(script);

      // Initialize Google Analytics
      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_ID}');
      `;
      document.head.appendChild(script2);
    }
  }, []);

  // Track custom events
  const trackEvent = (eventName, parameters = {}) => {
    if (window.gtag) {
      window.gtag('event', eventName, parameters);
    }
  };

  // Track page views
  const trackPageView = (pageName) => {
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: pageName,
        page_location: window.location.href,
      });
    }
  };

  return null; // This component doesn't render anything
};

export default Analytics;