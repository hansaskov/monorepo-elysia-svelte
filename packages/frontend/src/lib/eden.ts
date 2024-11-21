
import { treaty } from "@elysiajs/eden";
import type { App } from "backend"

export const api = treaty<App>("http://localhost:3000").api;