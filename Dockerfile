# Use Node.js 20 LTS (current minimum requirement)
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files for dependency installation
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY src/ ./src/
COPY tsconfig.json ./
COPY vite.config.ts ./
COPY eslint.config.js ./
COPY vitest.config.ts ./

# Copy example files
COPY examples/ ./examples/

# Install all dependencies (including dev dependencies for building)
RUN npm ci

# Build the project
RUN npm run build

# Copy built files to examples for testing
RUN npm run copy:examples

# Run tests to verify everything works
RUN npm test

# Default command to run the example
CMD ["node", "examples/index.js"]
