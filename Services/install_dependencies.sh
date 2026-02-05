#!/bin/bash
echo "Installing dependencies..."

# Example: Update and install necessary packages
sudo yum update -y
sudo yum install -y httpd

# Example: Start the Apache server (if relevant)
sudo systemctl start httpd
sudo systemctl enable httpd

echo "Dependencies installed successfully!"
