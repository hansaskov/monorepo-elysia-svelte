import { treaty } from "@elysiajs/eden";
import type { App } from "backend"

const client = treaty<App>("localhost:3000");

const { data } = await client.index.get({query: {
    name: "Bob"
}})