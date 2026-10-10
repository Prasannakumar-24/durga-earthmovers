#!/bin/bash

# Firewall Setup Script for Durga Earthmovers
# This script configures UFW firewall for security

echo "Configuring UFW firewall..."

# Allow SSH
sudo ufw allow 22/tcp

# Allow HTTP
sudo ufw allow 80/tcp

# Allow HTTPS
sudo ufw allow 443/tcp

# Enable firewall
sudo ufw --force enable

# Show firewall status
sudo ufw status verbose

echo "Firewall configuration complete!"
echo "Allowed ports: 22 (SSH), 80 (HTTP), 443 (HTTPS)"