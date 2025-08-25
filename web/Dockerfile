FROM node:18-alpine

WORKDIR /app

# Only copy web dependencies and source
COPY web/package*.json ./
COPY web/tsconfig.json ./
COPY web/public ./public
COPY web/src ./src
COPY web/next.config.ts ./next.config.ts
COPY shared ./shared

RUN npm install --production
RUN npm run build

ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm", "start"]