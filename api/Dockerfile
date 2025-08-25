FROM node:18-alpine

WORKDIR /app

COPY api/package*.json ./
COPY api/tsconfig.json ./
COPY api/src ./src
COPY shared ./shared
COPY prisma ./prisma

RUN npm install --production
RUN npm run build

# Generate Prisma client
RUN npx prisma generate

ENV NODE_ENV=production

CMD ["node", "dist/index.js"]