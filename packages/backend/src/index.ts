import { logger } from "@bogeychan/elysia-logger";
import { swagger } from "@elysiajs/swagger";
import { Elysia, t } from "elysia";

const app = new Elysia()
	.use(logger())
	.use(swagger())
	.get("/", ({ query }) => query.name, {
		query: t.Object({
			name: t.String(),
		}),
	});

app.listen(process.env.PORT as string, () =>
	console.log(`🦊 Server started at ${app.server?.url.origin}`),
);

export type App = typeof app;
