FROM node:18-alpine

WORKDIR /app

COPY bot/package*.json ./
COPY bot/tsconfig.json ./
COPY bot/src ./src
COPY shared ./shared
COPY prisma ./prisma
COPY tsconfig.base.json ./tsconfig.base.json

RUN npm install
RUN npm run build
RUN npm prune --production
RUN npx prisma generate

ENV NODE_ENV=production

CMD ["node", "dist/index.js"]