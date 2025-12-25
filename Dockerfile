# Build stage for React app
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY server/package*.json ./server/

# Install dependencies
RUN npm install
WORKDIR /app/server
RUN npm install

# Copy source files
WORKDIR /app
COPY . .

# Build React app
RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Install production dependencies for server only
COPY server/package*.json ./
RUN npm install --production

# Copy server files
COPY server/ ./server/
COPY --from=builder /app/dist ./dist

# Create uploads directory
RUN mkdir -p ./server/uploads

# Expose port
EXPOSE 3001

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3001

# Start server
CMD ["node", "server/server.js"]

