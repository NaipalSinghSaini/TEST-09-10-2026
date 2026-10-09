# Multi-Stage Dockerfile for Axion IT Company Platform
# Stage 1: Build Frontend Assets
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: Production Runtime
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=5000

COPY package*.json ./
RUN npm ci --only=production

# Copy backend server code and built frontend distribution
COPY server/ ./server/
COPY --from=builder /app/dist ./dist

# Create inquiries data directory
RUN mkdir -p ./server/data

EXPOSE 5000

CMD ["node", "server/index.js"]
