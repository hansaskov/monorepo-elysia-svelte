# Stage 1: Build the application
FROM oven/bun AS build

WORKDIR /app

# Cache packages
COPY package.json package.json
COPY bun.lockb bun.lockb

COPY /packages/backend/package.json ./packages/backend/package.json
COPY /packages/frontend/package.json ./packages/frontend/package.json

# Install dependencies
RUN bun install

# Copy the rest of your app's source code
COPY /packages/frontend ./packages/frontend

# Move directory to frontend
WORKDIR /app/packages/frontend

# Build your app
RUN bun run build

EXPOSE 5173

CMD ["bun", "run", "dev"]