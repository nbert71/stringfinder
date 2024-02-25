# Stage 1: Common base stage for installing dependencies
FROM node:20 AS base
WORKDIR /app
COPY package*.json ./
RUN npm install

# Stage 2: Development build
FROM base AS development
COPY . .
CMD ["npm", "run", "start:dev"]

# Stage 3: Production build
FROM base AS production
COPY . .
RUN npm run build
CMD ["node", "dist/main"]
