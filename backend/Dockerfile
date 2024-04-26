# Stage 1: Common base stage for installing dependencies
FROM node:20 AS base
RUN apt-get update && apt-get install -y gosu
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npx prisma generate

# Stage 2: Development build
FROM base AS development
COPY entrypoint.sh /usr/local/bin/entrypoint.sh
COPY . .
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
CMD ["npm", "run", "start:dev"]

# Stage 3: Production build
FROM base AS production
COPY . .
RUN npm run build
CMD ["node", "dist/main"]
