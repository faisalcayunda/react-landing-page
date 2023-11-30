# Step 1: Base Image
FROM node:latest as build

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy project files
COPY package*.json ./
COPY vite.config.js ./
COPY . .

# Step 4: Install dependencies
RUN npm install

# Step 5: Build the application
RUN npm run build

# Step 6: Serve the app using Nginx
# Use an official nginx image as a "parent" image
FROM nginx:alpine

# Copy static assets from builder stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 5999

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]