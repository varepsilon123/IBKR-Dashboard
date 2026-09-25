# Build stage
FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./
RUN npm ci

# Copy source files and build
COPY . .
RUN npm run build

# Production stage
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci
# RUN npm install --production

# Copy dist files from builder stage (Vite uses 'dist' not 'build')
COPY --from=builder /app/dist ./dist

# Add healthcheck
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000 || exit 1

EXPOSE 3000

# Use a production-ready server like serve
RUN npm install -g serve
CMD ["serve", "-s", "dist", "-l", "3000"] 