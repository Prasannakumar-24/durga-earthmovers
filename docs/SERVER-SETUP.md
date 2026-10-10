# DURGA EARTHMOVERS - Server Setup Guide

This guide provides detailed instructions for setting up an Ubuntu server for the Durga Earthmovers website.

## Initial Server Setup

### 1. Connect to Server

```bash
ssh root@YOUR_SERVER_IP
```

### 2. Update System

```bash
sudo apt update
sudo apt upgrade -y
```

### 3. Set Timezone

```bash
sudo timedatectl set-timezone Asia/Kolkata
# Or your appropriate timezone
```

### 4. Create Non-Root User (Recommended)

```bash
adduser durga
usermod -aG sudo durga
```

Switch to new user:
```bash
su - durga
```

### 5. Configure SSH Key Authentication (Recommended)

On your local machine:
```bash
ssh-keygen -t rsa -b 4096
ssh-copy-id durga@YOUR_SERVER_IP
```

Disable password authentication in `/etc/ssh/sshd_config`:
```
PasswordAuthentication no
```

Restart SSH:
```bash
sudo systemctl restart ssh
```

## Install Required Software

### Node.js and npm

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
```

Verify:
```bash
node -v  # Should be v18.x.x
npm -v   # Should be 9.x.x or higher
```

### Nginx

```bash
sudo apt install -y nginx
sudo systemctl start nginx
sudo systemctl enable nginx
```

Verify:
```bash
sudo systemctl status nginx
```

Test in browser: `http://YOUR_SERVER_IP`

### PM2

```bash
sudo npm install -g pm2
```

Verify:
```bash
pm2 -v
```

### Git

```bash
sudo apt install -y git
```

Verify:
```bash
git --version
```

## MongoDB Setup

### Option 1: MongoDB Atlas (Recommended)

1. Sign up at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create database user
4. Whitelist server IP: `0.0.0.0/0` (for testing) or specific server IP
5. Get connection string

Connection string format:
```
mongodb+srv://username:password@cluster.mongodb.net/durga-earthmovers?retryWrites=true&w=majority
```

### Option 2: Local MongoDB Installation

```bash
# Import MongoDB public GPG key
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -

# Add MongoDB repository
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list

# Update and install
sudo apt update
sudo apt install -y mongodb-org

# Start MongoDB
sudo systemctl start mongod
sudo systemctl enable mongod

# Verify
sudo systemctl status mongod
```

Test MongoDB:
```bash
mongosh
```

## Firewall Configuration

### Install UFW

```bash
sudo apt install -y ufw
```

### Configure Firewall

```bash
# Allow SSH
sudo ufw allow 22/tcp

# Allow HTTP
sudo ufw allow 80/tcp

# Allow HTTPS
sudo ufw allow 443/tcp

# Enable firewall
sudo ufw --force enable

# Check status
sudo ufw status verbose
```

### Using Setup Script

```bash
cd /var/www/durga-earthmovers
chmod +x deployment/scripts/setup-firewall.sh
sudo ./deployment/scripts/setup-firewall.sh
```

## Project Setup

### Create Project Directory

```bash
sudo mkdir -p /var/www/durga-earthmovers
sudo chown -R $USER:$USER /var/www/durga-earthmovers
cd /var/www/durga-earthmovers
```

### Clone Repository

```bash
git clone YOUR_GITHUB_REPO_URL .
```

Or upload files using SCP/SFTP:
```bash
# From local machine
scp -r /path/to/project/* durga@YOUR_SERVER_IP:/var/www/durga-earthmovers/
```

### Install Dependencies

#### Client Dependencies

```bash
cd client
npm install
```

#### Server Dependencies

```bash
cd ../server
npm install
```

## Environment Configuration

### Server Environment

```bash
cd /var/www/durga-earthmovers/server
cp .env.example .env
nano .env
```

Edit with your values:
```env
PORT=5000
NODE_ENV=production
MONGO_URI=your_mongodb_connection_string
CLIENT_URL=https://YOUR_DOMAIN
SITE_URL=https://YOUR_DOMAIN
```

### Client Environment

```bash
cd /var/www/durga-earthmovers/client
cp .env.example .env
nano .env
```

Edit with your values:
```env
VITE_SITE_URL=https://YOUR_DOMAIN
VITE_API_URL=https://YOUR_DOMAIN/api
VITE_WHATSAPP_NUMBER=your_whatsapp_number
VITE_GOOGLE_MAPS_URL=your_google_maps_url
VITE_GOOGLE_ANALYTICS_ID=your_ga_id
```

## Build Frontend

```bash
cd /var/www/durga-earthmovers/client
npm run build
```

This creates the `dist` folder with production-ready files.

## PM2 Configuration

### Copy PM2 Config

```bash
cd /var/www/durga-earthmovers
cp deployment/pm2/ecosystem.config.js .
```

### Start Application with PM2

```bash
pm2 start ecosystem.config.js
```

### Save PM2 Configuration

```bash
pm2 save
```

### Setup PM2 Startup

```bash
pm2 startup
```

Follow the instructions and run the provided command.

### PM2 Commands

```bash
# View status
pm2 status

# View logs
pm2 logs durga-earthmovers-api

# Restart application
pm2 restart durga-earthmovers-api

# Stop application
pm2 stop durga-earthmovers-api

# Delete application
pm2 delete durga-earthmovers-api

# Monitor
pm2 monit
```

## Nginx Configuration

### Copy Nginx Config

```bash
sudo cp /var/www/durga-earthmovers/deployment/nginx/durga-earthmovers.conf /etc/nginx/sites-available/durga-earthmovers
```

### Edit Nginx Config

```bash
sudo nano /etc/nginx/sites-available/durga-earthmovers
```

Replace `YOUR_DOMAIN` with your actual domain throughout the file.

### Enable Site

```bash
sudo ln -s /etc/nginx/sites-available/durga-earthmovers /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default
```

### Test Configuration

```bash
sudo nginx -t
```

### Reload Nginx

```bash
sudo systemctl reload nginx
```

### Check Nginx Status

```bash
sudo systemctl status nginx
```

## SSL Certificate Setup

### Using Certbot

```bash
sudo apt install -y certbot python3-certbot-nginx
```

### Generate SSL Certificate

```bash
sudo certbot --nginx -d YOUR_DOMAIN -d www.YOUR_DOMAIN
```

Follow the prompts:
- Enter email address
- Agree to terms of service
- Choose whether to redirect HTTP to HTTPS (recommended: Yes)

### Using Setup Script

```bash
cd /var/www/durga-earthmovers
chmod +x deployment/scripts/setup-ssl.sh
nano deployment/scripts/setup-ssl.sh  # Edit DOMAIN and EMAIL
sudo ./deployment/scripts/setup-ssl.sh
```

### Auto-Renewal

Certbot sets up automatic renewal by default. Test it:

```bash
sudo certbot renew --dry-run
```

Renewal is handled by a systemd timer:
```bash
sudo systemctl status certbot.timer
```

## Verify Setup

### Test HTTP to HTTPS Redirect

```bash
curl -I http://YOUR_DOMAIN
```

Should return 301 redirect to HTTPS.

### Test HTTPS

```bash
curl -I https://YOUR_DOMAIN
```

Should return 200 OK.

### Test API

```bash
curl https://YOUR_DOMAIN/api/health
```

Should return:
```json
{
  "status": "ok",
  "service": "Durga Earthmovers API",
  "timestamp": "..."
}
```

### Test Website

Open `https://YOUR_DOMAIN` in browser and verify:
- Website loads
- HTTPS is working
- All pages accessible
- Contact form works
- WhatsApp button works

## Security Hardening

### SSH Security

Edit `/etc/ssh/sshd_config`:
```
Port 2222  # Change from default 22
PermitRootLogin no
PasswordAuthentication no
```

Restart SSH:
```bash
sudo systemctl restart ssh
```

### Fail2Ban (Optional)

```bash
sudo apt install -y fail2ban
sudo systemctl enable fail2ban
sudo systemctl start fail2ban
```

### Automatic Security Updates

```bash
sudo apt install -y unattended-upgrades
sudo dpkg-reconfigure -plow unattended-upgrades
```

## Monitoring and Logging

### PM2 Logs

```bash
pm2 logs durga-earthmovers-api
```

Log files location:
- `/var/www/durga-earthmovers/logs/api-error.log`
- `/var/www/durga-earthmovers/logs/api-out.log`
- `/var/www/durga-earthmovers/logs/api-combined.log`

### Nginx Logs

```bash
# Access log
sudo tail -f /var/log/nginx/access.log

# Error log
sudo tail -f /var/log/nginx/error.log
```

### System Logs

```bash
# System journal
sudo journalctl -f

# Nginx logs
sudo journalctl -u nginx -f

# PM2 logs (if using systemd)
sudo journalctl -u pm2-root -f
```

## Backup Strategy

### MongoDB Backup

For MongoDB Atlas:
- Use Atlas backup features
- Export data regularly

For local MongoDB:
```bash
# Backup
mongodump --db durga-earthmovers --out /backup/mongodb/

# Restore
mongorestore --db durga-earthmovers /backup/mongodb/durga-earthmovers/
```

### File Backup

```bash
# Backup project files
tar -czf /backup/durga-earthmovers-$(date +%Y%m%d).tar.gz /var/www/durga-earthmovers

# Backup to remote location
scp /backup/durga-earthmovers-*.tar.gz user@backup-server:/backups/
```

### Environment Variables Backup

```bash
# Backup .env files
cp /var/www/durga-earthmovers/server/.env /backup/server.env.backup
cp /var/www/durga-earthmovers/client/.env /backup/client.env.backup
```

## Troubleshooting

### Port Already in Use

```bash
# Find process using port 5000
sudo lsof -i :5000

# Kill process
sudo kill -9 PID

# Restart PM2
pm2 restart durga-earthmovers-api
```

### MongoDB Connection Issues

```bash
# Check MongoDB status
sudo systemctl status mongod

# Test connection
mongosh

# Check connection string in .env
nano /var/www/durga-earthmovers/server/.env
```

### Nginx Issues

```bash
# Test configuration
sudo nginx -t

# Check error log
sudo tail -f /var/log/nginx/error.log

# Restart Nginx
sudo systemctl restart nginx
```

### PM2 Issues

```bash
# Check status
pm2 status

# View logs
pm2 logs

# Restart
pm2 restart all

# Reset
pm2 delete all
pm2 start ecosystem.config.js
```

### Permission Issues

```bash
# Fix ownership
sudo chown -R $USER:$USER /var/www/durga-earthmovers

# Fix permissions
sudo chmod -R 755 /var/www/durga-earthmovers
```

## Performance Optimization

### Enable Nginx Caching

Add to Nginx config:
```nginx
proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=my_cache:10m max_size=1g inactive=60m;

location /api/ {
    proxy_cache my_cache;
    proxy_cache_valid 200 5m;
    # ... other proxy settings
}
```

### Enable Gzip Compression

Already included in Nginx config.

### Optimize Images

Use image optimization tools before uploading.

### Enable Browser Caching

Already included in Nginx config for static assets.

## Maintenance

### Regular Updates

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Update Node.js packages
cd /var/www/durga-earthmovers/client
npm update

cd /var/www/durga-earthmovers/server
npm update
```

### Log Rotation

Configure logrotate for PM2 logs:
```bash
sudo nano /etc/logrotate.d/pm2
```

Add:
```
/var/www/durga-earthmovers/logs/*.log {
    daily
    missingok
    rotate 14
    compress
    delaycompress
    notifempty
    create 0640 $USER $USER
    sharedscripts
}
```

### SSL Certificate Renewal

Automatic renewal is configured. Verify:
```bash
sudo certbot renew --dry-run
```

## Support Resources

- [Ubuntu Documentation](https://ubuntu.com/server/docs)
- [Nginx Documentation](https://nginx.org/en/docs/)
- [PM2 Documentation](https://pm2.keymetrics.io/docs/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Node.js Documentation](https://nodejs.org/docs/)