# Monorepo Elysia Svelte

Example monorepo with elysia and sveltekit using eden to achieve end to end type safety.

## Getting Started

#### Download the project
```bash
git clone https://github.com/hansaskov/monorepo-elysia-svelte.git
cd monorepo-elysia-svelte
bun install
```
#### Create .env file
Copy the .env.example file to .env and fill in the values
```bash
cp .env.example .env
``` 

## Running the project

#### Docker compose for development
```bash
docker compose up --build --watch
```
Will start the project in dev mode with hot reloading at http://localhost:3000 or the domain set as APP_FQDN in .env

#### Docker compose for production
```bash
docker compose -f compose.yaml up --build
```
Will compile the backend and build the static frontend, then start the services in the background. 

> [!NOTE]  
> Production will only work on port 80 or 443

## Running individually
#### Backend
```bash
cd packages/backend
bun dev
```

#### Frontend
```bash
cd packages/frontend
bun dev
```

## Building the project

#### Docker
```bash
docker compose build
```
Will build the `frontend` and `backend` docker images

#### Backend
```bash
cd packages/backend
bun run build
```
The command will create a binary executeable with the name of ``backend``

#### Frontend
```bash
cd packages/frontend
bun dev
```
The static files can be found in ``/build``


## FAQ
How to get rid of the error "bundler' can only be used when 'module' is set to 'preserve' or to 'es2015' or later.ts"
A: I fixed the error by building the frontend. Unknown to me, this seemed to solve some internal conflict. 
