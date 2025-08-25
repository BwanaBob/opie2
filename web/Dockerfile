FROM node:18-alpine

WORKDIR /app

# Only copy web dependencies and source
COPY web/package*.json ./
COPY web/tsconfig.json ./
COPY web/public ./public
COPY web/src ./src
COPY web/next.config.ts ./next.config.ts
COPY shared ./shared

# Install all dependencies (including dev), build, then prune devDependencies
RUN npm install
RUN npm run build
RUN npm prune --production

ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm", "start"]