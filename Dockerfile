FROM node:18-bullseye

WORKDIR /app

# Install ffmpeg, imagemagick, and webp
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        ffmpeg \
        imagemagick \
        webp && \
    rm -rf /var/lib/apt/lists/*

# Copy package.json and install node dependencies
COPY package*.json ./
RUN npm install

# Copy application code
COPY . .

EXPOSE 3000
CMD ["npm", "start"]
