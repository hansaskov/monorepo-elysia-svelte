# Monorepo Elysia Svelte

This is an example monorepo using [Elysia](https://github.com/elysiajs/elysia) for the backend and [SvelteKit](https://kit.svelte.dev/) for the frontend. It leverages [Eden](https://github.com/elysiajs/eden) to provide end-to-end type safety.



## Getting Started

To get the project up and running, follow these steps:

### 1. Prerequisites
Make sure you have the following installed:
- [Docker](https://docs.docker.com/get-started/get-docker/)
- [Bun](https://bun.sh/)

### 2. Download the Project

Then you'll need to clone the repository.

```bash
git clone https://github.com/hansaskov/monorepo-elysia-svelte.git
cd monorepo-elysia-svelte
```

### 3. Install the Dependencies
This project uses a monorepo structure, running `bun install` will install all the dependencies, for both the backend and frontend.
```bash
bun install
```
### 4. Create the `.env` File

You need to set up environment variables for the project. These values help configure things like which domain to serve the app on. 

```bash
cp .env.example .env
```

- **`cp .env.example .env`**: This copies the example `.env` file into a new `.env` file, which you can then edit to fill in your own values.


## Running the Project

### Development Mode

If you're working on the project locally and want to see live changes as you work, use the following command:

```bash
docker compose up --build --watch
```

Let's break down this command:

- **`docker compose up`**: This starts all the services defined in the `docker-compose.yaml` file (like the backend API, frontend, or database) and keeps them running.
  
- **`--build`**: This flag forces Docker to rebuild the images for your services (both backend and frontend) before starting them. This ensures that you're working with the most up-to-date version of your code.

- **`--watch`**: This enables "hot reloading" in development mode. Docker will automatically watch your files for changes and rebuild/restart the services as needed, so you don't have to manually restart the project after each change.

Once the command is running, the project will be available at:
- [http://localhost:3000](http://localhost:3000) if no custom domain is set, or
- The domain specified by `APP_FQDN` in your `.env` file.

### Production Mode

When you're ready to deploy the project for real (in a production environment), use this command:

```bash
docker compose -f compose.yaml up --build -d
```

Let’s break down each part:

- **`docker compose -f compose.yaml`**: Same as the previous example, but now we exclute the compose.override.yaml file, which was used to define a local development environment.

- **`up`**: This starts all the services just like in development mode.

- **`--build`**: Similar to the development mode, this flag forces Docker to rebuild all the images.

- **`-d`**: The `-d` stands for "detached mode." This means Docker will run the services in the background. Once the services are up and running, you can safely close your terminal, and the services will continue to run.

> **Note**: Production mode is set to work only on these standard ports (80 and 443). This is typical for web servers, ensuring compatibility with browsers and users’ requests over HTTP/HTTPS.



## Running the Backend and Frontend Individually

You might want to run only the backend or frontend separately during development.

### Running the Backend
Navigate to the backend directory and start the development server.

```bash
cd packages/backend
bun dev
```

### Running the Frontend

Similarly, you can start the frontend by navigating to the frontend directory:

```bash
cd packages/frontend
bun dev
```

---

## Building the Project

When you're ready to build the project for deployment, you can use the following commands:

### Docker Build

To build both the frontend and backend as Docker images, use:

```bash
docker compose build
```

This command packages your backend and frontend into Docker images, which are ready for deployment.

### Building the Backend Manually

If you only want to build the backend (e.g., if you're deploying only the API):

```bash
cd packages/backend
bun run build
```

This creates an executable binary called `backend`, which can be run on the server.

### Building the Frontend Manually

For the frontend, running this command will generate static files:

```bash
cd packages/frontend
bun dev
```

The static files for your website will be available in the `/build` folder, ready to be deployed to a static hosting provider.

---

## FAQ

**Q: How do I fix the error: "'bundler' can only be used when 'module' is set to 'preserve' or 'es2015' or later.ts"?**

**A**: This error can be resolved by building the frontend. This seems to clear up some internal conflict in the project.

Feel free to reach out for further clarifications or questions!
