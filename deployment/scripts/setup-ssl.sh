#!/bin/bash

# SSL Setup Script for Durga Earthmovers
# This script installs Certbot and generates SSL certificates

DOMAIN="YOUR_DOMAIN"
EMAIL="YOUR_EMAIL"

echo "Installing Certbot..."
sudo apt update
sudo apt install -y certbot python3-certbot-nginx

echo "Generating SSL certificate for $DOMAIN..."
sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN --non-interactive --agree-tos --email $EMAIL

echo "Setting up auto-renewal..."
sudo certbot renew --dry-run

echo "SSL setup complete!"
echo "Certificate location: /etc/letsencrypt/live/$DOMAIN/"
echo "Auto-renewal is configured to run automatically."