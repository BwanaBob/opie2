FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY . .

RUN npm install --production
RUN npm run build

# Generate Prisma client
COPY ../prisma ./prisma
RUN npx prisma generate

ENV NODE_ENV=production

CMD ["node", "dist/index.js"]