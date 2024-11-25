FROM oven/bun:1 AS build

WORKDIR /app

# Cache packages
COPY package.json package.json
COPY bun.lockb bun.lockb

COPY /packages/backend/package.json ./packages/backend/package.json
COPY /packages/frontend/package.json ./packages/frontend/package.json

RUN bun install

COPY /packages/backend ./packages/backend

WORKDIR /packages/backend

ENV NODE_ENV=production

EXPOSE 3000

RUN bun dev

CMD ["bun", "dev"]

