# Use a more recent Node.js version
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package files first to optimize caching
COPY nike-cart/package.json nike-cart/package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire Angular project
COPY nike-cart .

# Expose the Angular development server port
EXPOSE 4200

# Default command to start Angular app
CMD ["npx", "ng", "serve", "--host", "0.0.0.0", "--disableHostCheck"]