# Monorepo Elysia Svelte

Example monorepo with elysia and sveltekit using eden to achieve end to end type safety.

## Getting Started

```bash
git clone https://github.com/hansaskov/monorepo-elysia-svelte.git
cd monorepo-elysia-svelte
bun install
```

## Running the project

### Backend

```bash
cd packages/backend
bun dev
```

### Frontend
```bash
cd packages/frontend
bun dev
```

```bash
cd packages/frontend
bun run build
bun preview
```


## FAQ
How to get rid of the error "bundler' can only be used when 'module' is set to 'preserve' or to 'es2015' or later.ts"
A: I fixed the error by building the frontend. Unknown to me, this seemed to solve some internal conflict. 