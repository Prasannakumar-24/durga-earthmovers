# DURGA EARTHMOVERS - Deployment Guide

This guide provides step-by-step instructions for deploying the Durga Earthmovers website to a production server.

## Prerequisites

- Purchased domain (e.g., durgaearthmovers.com)
- VPS or cloud server (Ubuntu 20.04+ recommended)
- SSH access to server
- Basic knowledge of command line

## Step 1: Purchase Domain

1. Purchase your domain from a registrar (GoDaddy, Namecheap, etc.)
2. Note your domain name for later configuration

## Step 2: Create VPS/Cloud Server

1. Create a new VPS instance (DigitalOcean, AWS, Linode, etc.)
2. Choose Ubuntu 20.04 or 22.04 LTS
3. Minimum specifications: 2GB RAM, 1 CPU, 40GB SSD
4. Note your server IP address

## Step 3: Configure DNS

1. Log in to your domain registrar
2. Go to DNS management
3. Add the following records:

```
Type: A
Name: @
Value: YOUR_SERVER_IP
TTL: 3600

Type: A
Name: www
Value: YOUR_SERVER_IP
TTL: 3600
```

4. Save changes
5. Wait for DNS propagation (can take 24-48 hours)

## Step 4: Connect to Server

```bash
ssh root@YOUR_SERVER_IP
```

## Step 5: Update Server

```bash
sudo apt update
sudo apt upgrade -y
```

## Step 6: Install Node.js

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
```

Verify installation:
```bash
node -v
npm -v
```

## Step 7: Install Nginx

```bash
sudo apt install -y nginx
sudo systemctl start nginx
sudo systemctl enable nginx
```

## Step 8: Install PM2

```bash
sudo npm install -g pm2
```

## Step 9: Install MongoDB (Optional - Using MongoDB Atlas Recommended)

### Option A: MongoDB Atlas (Recommended)
1. Create account at mongodb.com
2. Create free cluster
3. Get connection string
4. Whitelist your server IP

### Option B: Local MongoDB
```bash
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
sudo apt update
sudo apt install -y mongodb-org
sudo systemctl start mongod
sudo systemctl enable mongod
```

## Step 10: Clone Project

```bash
cd /var/www
sudo git clone YOUR_GITHUB_REPO_URL durga-earthmovers
cd durga-earthmovers
sudo chown -R $USER:$USER .
```

## Step 11: Install Dependencies

### Client:
```bash
cd client
npm install
```

### Server:
```bash
cd ../server
npm install
```

## Step 12: Configure Environment Variables

### Server Environment:
```bash
cd server
cp .env.example .env
nano .env
```

Edit `.env`:
```
PORT=5000
NODE_ENV=production
MONGO_URI=your_mongodb_connection_string
CLIENT_URL=https://YOUR_DOMAIN
SITE_URL=https://YOUR_DOMAIN
```

### Client Environment:
```bash
cd ../client
cp .env.example .env
nano .env
```

Edit `.env`:
```
VITE_SITE_URL=https://YOUR_DOMAIN
VITE_API_URL=https://YOUR_DOMAIN/api
VITE_WHATSAPP_NUMBER=your_whatsapp_number
VITE_GOOGLE_MAPS_URL=your_google_maps_url
VITE_GOOGLE_ANALYTICS_ID=your_ga_id
```

## Step 13: Build React Frontend

```bash
cd client
npm run build
```

## Step 14: Configure PM2

```bash
cd /var/www/durga-earthmovers
cp deployment/pm2/ecosystem.config.js .
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

Follow the instructions provided by PM2 startup command.

## Step 15: Configure Nginx

```bash
sudo cp deployment/nginx/durga-earthmovers.conf /etc/nginx/sites-available/durga-earthmovers
sudo ln -s /etc/nginx/sites-available/durga-earthmovers /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default
```

Edit Nginx configuration:
```bash
sudo nano /etc/nginx/sites-available/durga-earthmovers
```

Replace `YOUR_DOMAIN` with your actual domain throughout the file.

Test Nginx configuration:
```bash
sudo nginx -t
```

Reload Nginx:
```bash
sudo systemctl reload nginx
```

## Step 16: Configure SSL

### Manual Method:
```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d YOUR_DOMAIN -d www.YOUR_DOMAIN
```

### Using Script:
```bash
cd /var/www/durga-earthmovers
chmod +x deployment/scripts/setup-ssl.sh
# Edit the script to replace YOUR_DOMAIN and YOUR_EMAIL
nano deployment/scripts/setup-ssl.sh
sudo ./deployment/scripts/setup-ssl.sh
```

## Step 17: Configure Firewall

```bash
chmod +x deployment/scripts/setup-firewall.sh
sudo ./deployment/scripts/setup-firewall.sh
```

## Step 18: Update Sitemap and Robots.txt

Edit the following files to replace `YOUR_DOMAIN` with your actual domain:
- `client/public/sitemap.xml`
- `client/public/robots.txt`

## Step 19: Test HTTPS

Visit `https://YOUR_DOMAIN` in your browser and verify:
- HTTPS is working
- SSL certificate is valid
- Website loads correctly
- All pages are accessible

## Step 20: Configure Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://YOUR_DOMAIN`
3. Verify domain ownership (recommended: DNS verification)
4. Submit sitemap: `https://YOUR_DOMAIN/sitemap.xml`
5. Request indexing for homepage

## Step 21: Test Mobile

1. Open website on mobile device
2. Test all functionality
3. Verify responsive design
4. Check touch interactions

## Step 22: Run Lighthouse

1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Run audit
4. Target scores: 90+ for Performance, Accessibility, Best Practices, SEO

## Step 23: Update Company Information

Edit `client/src/config/companyConfig.js` to add:
- Phone number
- Email address
- WhatsApp number
- Instagram URL
- Address
- Google Maps URL
- Social media links

## Step 24: Add Images and Videos

Place your actual images and videos in:
- `client/public/assets/images/hero/`
- `client/public/assets/images/machinery/`
- `client/public/assets/images/services/`
- `client/public/assets/images/projects/`
- `client/public/assets/images/about/`
- `client/public/assets/videos/hero/`
- `client/public/assets/videos/projects/`

See README files in each directory for specifications.

## Step 25: Final Testing

Test all functionality:
- [ ] Navigation works
- [ ] Contact form submits
- [ ] WhatsApp button works
- [ ] Phone links work
- [ ] Email links work
- [ ] Gallery filters work
- [ ] Video player works
- [ ] Mobile menu works
- [ ] All pages load
- [ ] No console errors

## Maintenance

### Updating the Website:

```bash
cd /var/www/durga-earthmovers
git pull origin main
cd client
npm install
npm run build
cd ../server
npm install
pm2 restart durga-earthmovers-api
sudo systemctl reload nginx
```

### Monitoring:

```bash
# Check PM2 logs
pm2 logs durga-earthmovers-api

# Check PM2 status
pm2 status

# Check Nginx logs
sudo tail -f /var/log/nginx/error.log

# Check server resources
htop
```

### Backup:

Regularly backup:
- MongoDB database
- Environment variables
- Website assets
- Configuration files

## Troubleshooting

### Website not loading:
```bash
sudo systemctl status nginx
pm2 status
pm2 logs durga-earthmovers-api
```

### MongoDB connection issues:
- Check connection string in `.env`
- Verify MongoDB Atlas IP whitelist
- Check MongoDB service status

### SSL issues:
```bash
sudo certbot renew --dry-run
sudo systemctl reload nginx
```

### Port already in use:
```bash
sudo lsof -i :5000
pm2 stop durga-earthmovers-api
pm2 start ecosystem.config.js
```

## Support

For issues or questions, refer to:
- Server documentation
- Nginx documentation
- PM2 documentation
- MongoDB documentation