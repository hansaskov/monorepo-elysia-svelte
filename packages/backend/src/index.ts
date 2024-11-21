import { logger } from "@bogeychan/elysia-logger";
import cors from "@elysiajs/cors";
import { swagger } from "@elysiajs/swagger";
import { Elysia } from "elysia";


const api = new Elysia({prefix: "/api"})
	.get("/hello", "Hello World");

const app = new Elysia()
	.use(logger())
	.use(cors())
	.use(swagger())
	.use(api)
	

app.listen(process.env.PORT as string, () =>
	console.log(`🦊 Server started at ${app.server?.url.origin}`),
);

export type App = typeof app;
