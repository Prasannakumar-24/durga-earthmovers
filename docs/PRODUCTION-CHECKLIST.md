# DURGA EARTHMOVERS - Production Checklist

Use this checklist to ensure your website is properly deployed and ready for production.

## Pre-Deployment Checklist

### Domain and DNS
- [ ] Domain purchased (e.g., durgaearthmovers.com)
- [ ] DNS configured with A records for @ and www
- [ ] DNS propagation completed (wait 24-48 hours)
- [ ] Domain verified with registrar

### Server Setup
- [ ] VPS/cloud server created
- [ ] Ubuntu 20.04+ installed
- [ ] SSH access configured
- [ ] Non-root user created (recommended)
- [ ] SSH key authentication configured (recommended)
- [ ] Firewall configured (UFW)
- [ ] System updated (apt update && upgrade)

### Software Installation
- [ ] Node.js 18+ installed
- [ ] npm installed
- [ ] Nginx installed and running
- [ ] PM2 installed globally
- [ ] Git installed
- [ ] MongoDB configured (Atlas or local)

### Project Setup
- [ ] Project cloned/uploaded to server
- [ ] Correct directory structure (/var/www/durga-earthmovers)
- [ ] File permissions set correctly
- [ ] Client dependencies installed (npm install)
- [ ] Server dependencies installed (npm install)

### Environment Configuration
- [ ] Server .env file created
- [ ] Server .env configured with:
  - [ ] PORT=5000
  - [ ] NODE_ENV=production
  - [ ] MONGO_URI (correct connection string)
  - [ ] CLIENT_URL (your domain)
  - [ ] SITE_URL (your domain)
- [ ] Client .env file created
- [ ] Client .env configured with:
  - [ ] VITE_SITE_URL (your domain)
  - [ ] VITE_API_URL (your domain/api)
  - [ ] VITE_WHATSAPP_NUMBER (your WhatsApp number)
  - [ ] VITE_GOOGLE_MAPS_URL (your Google Maps URL)
  - [ ] VITE_GOOGLE_ANALYTICS_ID (your GA ID, optional)

### Build and Deployment
- [ ] React frontend built (npm run build)
- [ ] Build folder created (dist)
- [ ] No build errors or warnings
- [ ] PM2 ecosystem config copied
- [ ] PM2 application started
- [ ] PM2 save executed
- [ ] PM2 startup configured

### Nginx Configuration
- [ ] Nginx config file copied
- [ ] Nginx config edited with your domain
- [ ] Nginx config tested (nginx -t)
- [ ] Nginx site enabled
- [ ] Default site disabled
- [ ] Nginx reloaded successfully

### SSL/HTTPS
- [ ] Certbot installed
- [ ] SSL certificate generated
- [ ] SSL certificate valid
- [ ] HTTP to HTTPS redirect working
- [ ] www to non-www redirect working (or vice versa)
- [ ] Auto-renewal configured
- [ ] Auto-renewal tested (dry-run)

## Content Configuration

### Company Information
- [ ] companyConfig.js updated with:
  - [ ] Company name
  - [ ] Phone number
  - [ ] Email address
  - [ ] WhatsApp number
  - [ ] Instagram URL
  - [ ] Address
  - [ ] Google Maps URL
  - [ ] Social media links

### Images and Videos
- [ ] Hero poster image added
- [ ] Hero video added
- [ ] Machinery images added (all 8)
- [ ] Service images added (all 8)
- [ ] Project images added (at least 8)
- [ ] About section image added
- [ ] Project showcase video added
- [ ] OG image created and added
- [ ] Favicon created and added
- [ ] All images optimized (compressed)
- [ ] All images have proper dimensions

### SEO Configuration
- [ ] index.html meta tags updated
- [ ] sitemap.xml updated with your domain
- [ ] robots.txt updated with your domain
- [ ] Canonical URLs configured
- [ ] JSON-LD structured data verified
- [ ] Open Graph tags verified
- [ ] Twitter Card tags verified

## Testing Checklist

### Functionality Testing
- [ ] Website loads at https://YOUR_DOMAIN
- [ ] HTTPS working correctly
- [ ] SSL certificate valid
- [ ] All pages accessible:
  - [ ] Home (/)
  - [ ] About (/about)
  - [ ] Services (/services)
  - [ ] Works (/works)
  - [ ] Contact (/contact)
- [ ] Navigation works correctly
- [ ] Mobile menu works
- [ ] Contact form submits successfully
- [ ] Contact form data saved to MongoDB
- [ ] WhatsApp button works
- [ ] Phone links work
- [ ] Email links work
- [ ] Instagram link works
- [ ] Google Maps link works
- [ ] Gallery filters work
- [ ] Gallery lightbox works
- [ ] Video player works
- [ ] Machinery carousel works
- [ ] Animations work smoothly
- [ ] No console errors

### API Testing
- [ ] Health check endpoint works (/api/health)
- [ ] Contact API works (/api/contact)
- [ ] API returns correct responses
- [ ] CORS configured correctly
- [ ] Rate limiting working
- [ ] Error handling working

### Cross-Browser Testing
- [ ] Chrome - Desktop
- [ ] Chrome - Mobile
- [ ] Firefox - Desktop
- [ ] Firefox - Mobile
- [ ] Edge - Desktop
- [ ] Edge - Mobile
- [ ] Safari - Desktop (if available)
- [ ] Safari - Mobile (if available)

### Responsive Testing
- [ ] 375px (Mobile small)
- [ ] 390px (Mobile medium)
- [ ] 430px (Mobile large)
- [ ] 768px (Tablet)
- [ ] 1024px (Tablet landscape)
- [ ] 1280px (Desktop small)
- [ ] 1440px (Desktop medium)
- [ ] 1920px (Desktop large)

### Performance Testing
- [ ] Lighthouse Performance score 90+
- [ ] Lighthouse Accessibility score 90+
- [ ] Lighthouse Best Practices score 90+
- [ ] Lighthouse SEO score 90+
- [ ] Page load time under 3 seconds
- [ ] First Contentful Paint under 2 seconds
- [ ] Largest Contentful Paint under 2.5 seconds
- [ ] Cumulative Layout Shift under 0.1
- [ ] Images optimized
- [ ] CSS/JS minified
- [ ] Browser caching enabled

### Security Testing
- [ ] HTTPS enforced
- [ ] HTTP redirects to HTTPS
- [ ] Security headers configured
- [ ] No exposed sensitive data
- [ ] Environment variables secure
- [ ] MongoDB credentials secure
- [ ] API endpoints protected
- [ ] Rate limiting active
- [ ] CORS configured correctly
- [ ] No console errors related to security

## SEO Checklist

### Google Search Console
- [ ] Google Search Console account created
- [ ] Website property added
- [ ] Domain ownership verified
- [ ] Sitemap submitted
- [ ] Homepage indexing requested
- [ ] Key pages indexing requested
- [ ] No indexing errors
- [ ] Mobile usability checked
- [ ] Core Web Vitals monitored

### Google Business Profile
- [ ] Google Business Profile created
- [ ] Business name accurate
- [ ] Address accurate
- [ ] Phone number accurate
- [ ] Website URL accurate
- [ ] Business category correct
- [ ] Business hours set
- [ ] Photos added
- [ ] Reviews encouraged
- [ ] Posts created

### Local SEO
- [ ] NAP consistent across all platforms
- [ ] Location incorporated naturally in content
- [ ] Local keywords used appropriately
- [ ] Business listed in local directories
- [ ] Citations built

### Content SEO
- [ ] Meta descriptions unique and descriptive
- [ ] Title tags optimized
- [ ] Content original and useful
- [ ] Keywords used naturally
- [ ] Images have alt text
- [ ] Internal linking working
- [ ] No duplicate content

## Analytics Setup

### Google Analytics
- [ ] Google Analytics account created
- [ ] Property created
- [ ] Tracking ID obtained
- [ ] Tracking ID added to .env
- [ ] Analytics code working
- [ ] Events tracking configured
- [ ] Goals configured (form submissions, WhatsApp clicks)

### Custom Events
- [ ] WhatsApp click tracking
- [ ] Phone click tracking
- [ ] Contact form submission tracking
- [ ] Service enquiry tracking
- [ ] Machinery enquiry tracking

## Monitoring and Maintenance

### Monitoring Setup
- [ ] PM2 monitoring configured
- [ ] Nginx log monitoring
- [ ] Error log monitoring
- [ ] Uptime monitoring (optional)
- [ ] Performance monitoring (optional)

### Backup Setup
- [ ] MongoDB backup configured
- [ ] File backup configured
- [ ] Environment variable backup
- [ ] Backup schedule set
- [ ] Backup restoration tested

### Maintenance Schedule
- [ ] Weekly: Check logs
- [ ] Monthly: Security updates
- [ ] Monthly: Review analytics
- [ ] Quarterly: Full audit
- [ ] Annually: Comprehensive review

## Final Verification

### User Testing
- [ ] Test contact form with real submission
- [ ] Test WhatsApp with real message
- [ ] Test phone link with real call
- [ ] Test all navigation paths
- [ ] Test on mobile device
- [ ] Test on tablet device
- [ ] Test on desktop computer

### Stakeholder Review
- [ ] Business owner reviewed website
- [ ] All information verified as accurate
- [ ] Contact information tested
- [ ] Images approved
- [ ] Content approved
- [ ] Final approval received

### Launch Readiness
- [ ] All checklist items completed
- [ ] All tests passed
- [ ] All stakeholders approved
- [ ] Backup procedures documented
- [ ] Emergency contact plan in place
- [ ] Go-live date scheduled
- [ ] Launch announcement prepared

## Post-Launch Checklist

### Immediate (Day 1)
- [ ] Monitor website for errors
- [ ] Test all critical functions
- [ ] Check analytics for traffic
- [ ] Verify SSL certificate
- [ ] Check Search Console for issues

### Short-term (Week 1)
- [ ] Monitor performance metrics
- [ ] Check for user feedback
- [ ] Verify contact form submissions
- [ ] Review analytics data
- [ ] Fix any discovered issues

### Ongoing (Monthly)
- [ ] Review analytics
- [ ] Check Search Console
- [ ] Monitor uptime
- [ ] Review security logs
- [ ] Update content as needed
- [ ] Add new project images
- [ ] Respond to inquiries promptly

## Emergency Contacts

Keep these contacts accessible:

- [ ] Server provider support
- [ ] Domain registrar support
- [ ] Developer contact
- [ ] MongoDB support (if using Atlas)
- [ ] Hosting provider support

## Documentation

- [ ] All documentation reviewed
- [ ] Deployment guide accessible
- [ ] Server setup guide accessible
- [ ] SEO guide accessible
- [ ] Emergency procedures documented
- [ ] Backup procedures documented
- [ ] Team trained on procedures

---

## Notes

Add any additional notes or specific requirements for your deployment:

- 
- 
- 

## Approval

- [ ] Technical approval: _________________ Date: _______
- [ ] Business approval: _________________ Date: _______
- [ ] Final sign-off: _________________ Date: _______

---

**Remember:** This checklist should be completed before going live. Each item is important for a successful production deployment.