# DURGA EARTHMOVERS - Production Website

A complete, production-ready MERN stack website for Durga Earthmovers - an earthmoving and heavy equipment business providing excavation, digging, road cutting, machinery and transportation services.

## 🚀 Technology Stack

### Frontend
- **React** - UI library
- **Vite** - Build tool
- **React Router** - Routing
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **GSAP** - Advanced animations
- **Lucide React** - Icons
- **Axios** - HTTP client
- **React Hook Form** - Form handling
- **Swiper.js** - Carousel/slider
- **React Helmet Async** - SEO meta tags

### Backend
- **Node.js** - Runtime
- **Express.js** - Framework
- **Mongoose** - MongoDB ODM
- **MongoDB** - Database
- **Helmet** - Security headers
- **CORS** - Cross-origin resource sharing
- **Rate Limiting** - API protection

### Production Server
- **Ubuntu** - Operating system
- **Nginx** - Reverse proxy & web server
- **PM2** - Process manager
- **Let's Encrypt** - SSL certificates
- **UFW** - Firewall

## 📁 Project Structure

```
durga-earthmovers/
├── client/                 # React frontend
│   ├── public/            # Static assets
│   │   ├── assets/        # Images and videos
│   │   ├── robots.txt     # SEO robots file
│   │   ├── sitemap.xml    # SEO sitemap
│   │   └── favicon.svg    # Site favicon
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── sections/      # Page sections
│   │   ├── pages/         # Page components
│   │   ├── config/        # Configuration files
│   │   ├── hooks/         # Custom hooks
│   │   ├── services/      # API services
│   │   ├── utils/         # Utility functions
│   │   ├── App.jsx        # Main app component
│   │   └── main.jsx       # Entry point
│   ├── index.html         # HTML template
│   ├── tailwind.config.js # Tailwind configuration
│   ├── postcss.config.js  # PostCSS configuration
│   ├── .env.example       # Environment variables template
│   └── package.json       # Dependencies
├── server/                # Express backend
│   ├── controllers/       # Route controllers
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   ├── middleware/       # Express middleware
│   ├── config/           # Server configuration
│   ├── utils/            # Utility functions
│   ├── server.js         # Server entry point
│   ├── .env.example      # Environment variables template
│   └── package.json      # Dependencies
├── deployment/           # Deployment files
│   ├── nginx/           # Nginx configuration
│   ├── pm2/             # PM2 configuration
│   └── scripts/         # Deployment scripts
├── docs/                # Documentation
│   ├── DEPLOYMENT.md    # Deployment guide
│   ├── SEO.md          # SEO guide
│   ├── SERVER-SETUP.md  # Server setup guide
│   └── PRODUCTION-CHECKLIST.md # Production checklist
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## 🛠️ Installation

### Prerequisites
- Node.js 18+ and npm
- MongoDB (Atlas or local)
- Git

### Local Development

1. **Clone the repository**
```bash
git clone <repository-url>
cd durga-earthmovers
```

2. **Install client dependencies**
```bash
cd client
npm install
```

3. **Install server dependencies**
```bash
cd ../server
npm install
```

4. **Configure environment variables**

**Server (.env):**
```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/durga-earthmovers
CLIENT_URL=http://localhost:5173
SITE_URL=http://localhost:5173
```

**Client (.env):**
```env
VITE_SITE_URL=http://localhost:5173
VITE_API_URL=http://localhost:5000/api
VITE_WHATSAPP_NUMBER=
VITE_GOOGLE_MAPS_URL=
VITE_GOOGLE_ANALYTICS_ID=
```

5. **Start MongoDB**
```bash
# If using local MongoDB
sudo systemctl start mongod
```

6. **Start the server**
```bash
cd server
npm start
```

7. **Start the client (in new terminal)**
```bash
cd client
npm run dev
```

8. **Open browser**
Navigate to `http://localhost:5173`

## 🚢 Production Deployment

### Quick Start

1. **Follow the deployment guide**
```bash
# Read the comprehensive deployment guide
cat docs/DEPLOYMENT.md
```

2. **Use the production checklist**
```bash
# Review the production checklist
cat docs/PRODUCTION-CHECKLIST.md
```

3. **Deploy to server**
```bash
# Use the deployment scripts
cd deployment/scripts
chmod +x deploy.sh
./deploy.sh
```

### Key Deployment Steps

1. Set up Ubuntu server
2. Configure DNS for your domain
3. Install Node.js, Nginx, PM2
4. Configure MongoDB (Atlas recommended)
5. Clone and setup project
6. Configure environment variables
7. Build React frontend
8. Configure Nginx reverse proxy
9. Setup SSL with Let's Encrypt
10. Configure firewall
11. Submit sitemap to Google Search Console

**See `docs/DEPLOYMENT.md` for detailed instructions.**

## 📝 Configuration

### Company Information

Edit `client/src/config/companyConfig.js` to update:
- Company name and tagline
- Contact information (phone, email, WhatsApp)
- Social media links
- Address and Google Maps
- Services and machinery details

### Images and Videos

Place your assets in:
- `client/public/assets/images/hero/` - Hero images
- `client/public/assets/images/machinery/` - Equipment photos
- `client/public/assets/images/services/` - Service images
- `client/public/assets/images/projects/` - Project photos
- `client/public/assets/images/about/` - Company photos
- `client/public/assets/videos/hero/` - Hero video
- `client/public/assets/videos/projects/` - Project video

See README files in each directory for specifications.

### SEO Configuration

Update SEO-related files:
- `client/public/sitemap.xml` - Replace YOUR_DOMAIN
- `client/public/robots.txt` - Replace YOUR_DOMAIN
- `client/index.html` - Update meta tags
- `client/src/config/companyConfig.js` - Business info

**See `docs/SEO.md` for comprehensive SEO guide.**

## 🧪 Testing

### Run Tests

```bash
# Build for production
cd client
npm run build

# Test the build
npm run preview
```

### Lighthouse Audit

1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Run audit
4. Target scores: 90+ for all categories

### Manual Testing Checklist

- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Contact form submits
- [ ] WhatsApp button works
- [ ] Mobile responsive
- [ ] Animations smooth
- [ ] No console errors

## 📊 Analytics

### Google Analytics

Add your Google Analytics ID to `client/.env`:
```env
VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

The Analytics component will automatically load GA and track:
- Page views
- Custom events (WhatsApp clicks, form submissions, etc.)

## 🔒 Security

### Implemented Security Measures

- **Helmet** - Security headers
- **CORS** - Cross-origin protection
- **Rate Limiting** - API protection
- **Input Validation** - Form validation
- **Environment Variables** - Secrets protection
- **HTTPS/SSL** - Encrypted connections
- **UFW Firewall** - Server protection

### Security Best Practices

- Never commit `.env` files
- Use strong MongoDB passwords
- Keep dependencies updated
- Regular security audits
- Monitor logs for suspicious activity

## 📈 Performance Optimization

### Implemented Optimizations

- Image optimization (manual compression required)
- Code splitting (Vite default)
- Browser caching (Nginx)
- Gzip compression (Nginx)
- Lazy loading (implemented where applicable)
- Minified CSS/JS (Vite default)

### Performance Targets

- Lighthouse Performance: 90+
- Lighthouse Accessibility: 90+
- Lighthouse Best Practices: 90+
- Lighthouse SEO: 90+
- Page load time: < 3s
- First Contentful Paint: < 2s

## 🌐 SEO Features

### Implemented SEO

- Meta tags (title, description, keywords)
- Open Graph tags (social sharing)
- Twitter Card tags
- JSON-LD structured data (LocalBusiness)
- XML sitemap
- Robots.txt
- Canonical URLs
- Semantic HTML
- Mobile-friendly design

### SEO Guide

See `docs/SEO.md` for comprehensive SEO optimization guide.

## 📱 Responsive Design

### Breakpoints

- Mobile: 375px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

### Mobile Features

- Touch-friendly navigation
- Responsive animations
- Optimized images
- Mobile menu
- Touch-friendly buttons

## 🔄 Maintenance

### Regular Tasks

**Weekly:**
- Check server logs
- Monitor uptime
- Review contact form submissions

**Monthly:**
- Security updates
- Review analytics
- Check Search Console
- Update content

**Quarterly:**
- Full security audit
- Performance review
- Backup verification
- Dependency updates

## 📞 Support

### Documentation

- `docs/DEPLOYMENT.md` - Deployment guide
- `docs/SEO.md` - SEO optimization guide
- `docs/SERVER-SETUP.md` - Server setup guide
- `docs/PRODUCTION-CHECKLIST.md` - Production checklist

### Troubleshooting

See individual documentation files for troubleshooting sections.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary software for Durga Earthmovers.

## 👥 Business Information

**Durga Earthmovers**
- Professional earthmoving and excavation services
- Heavy equipment rental and operation
- Road cutting and site preparation
- Material transportation

---

**Built with ❤️ for Durga Earthmovers**

For deployment support, refer to the documentation in the `docs/` directory.