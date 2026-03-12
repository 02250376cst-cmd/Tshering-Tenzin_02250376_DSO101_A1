# frontend/Dockerfile
FROM node:18-alpine

# 1. Set working directory
WORKDIR /app

# 2. Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# 3. Copy all frontend code
COPY . .

# 4. Build the React app for production
RUN npm run build

# 5. Install a lightweight server to serve production build
RUN npm install -g serve

# 6. Expose port 3000
EXPOSE 3000

# 7. Serve the production build
CMD ["serve", "-s", "build", "-l", "3000"]