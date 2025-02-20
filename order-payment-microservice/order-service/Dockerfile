# Use the latest LTS version of Node.js
FROM node:lts

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the service runs on
EXPOSE 3000

# Command to run the service
CMD ["node", "index.js"]
