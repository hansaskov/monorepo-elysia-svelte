import { logger } from "@bogeychan/elysia-logger";
import cors from "@elysiajs/cors";
import { swagger } from "@elysiajs/swagger";
import { Elysia, t } from "elysia";

const app = new Elysia()
	.use(logger())
	.use(cors({origin: true}))
	.use(swagger())
	.get("/hello", "Hello World");

app.listen(process.env.PORT as string, () =>
	console.log(`🦊 Server started at ${app.server?.url.origin}`),
);

export type App = typeof app;
