# Use a Node.js image with support for TypeScript
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy package files (both package.json and package-lock.json if present)
COPY package*.json ./

# Install dependencies (including TypeScript and ts-node)
RUN npm install

# Install ts-node globally
RUN npm install -g ts-node typescript

# Copy the rest of the backend files into the container
COPY . .

# Expose the port the app will run on
EXPOSE 3000

# Start the backend
CMD ["npm", "run", "serve"]
