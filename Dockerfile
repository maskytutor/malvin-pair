# Use official Node.js image (Debian-based)
FROM node:18-buster

# Set working directory
WORKDIR /app

# Install dependencies (ffmpeg, imagemagick, webp)
RUN apt-get update && \
    apt-get install -y ffmpeg imagemagick webp && \
    apt-get upgrade -y && \
    rm -rf /var/lib/apt/lists/*

# Copy package.json and install node deps
COPY package*.json ./
RUN npm install

# Copy rest of the app
COPY . .

# Expose app port (example: 3000)
EXPOSE 3000

# Start command
CMD ["npm", "start"]
