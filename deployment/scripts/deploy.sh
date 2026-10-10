#!/bin/bash

# Deployment Script for Durga Earthmovers
# This script handles the complete deployment process

echo "Starting deployment process..."

# Navigate to project directory
cd /var/www/durga-earthmovers

# Pull latest changes (if using git)
# git pull origin main

# Install client dependencies
echo "Installing client dependencies..."
cd client
npm install

# Build React frontend
echo "Building React frontend..."
npm run build

# Install server dependencies
echo "Installing server dependencies..."
cd ../server
npm install

# Restart PM2
echo "Restarting PM2 processes..."
pm2 restart durga-earthmovers-api

# Reload Nginx
echo "Reloading Nginx..."
sudo nginx -t && sudo systemctl reload nginx

echo "Deployment complete!"
echo "Website should be live at https://YOUR_DOMAIN"