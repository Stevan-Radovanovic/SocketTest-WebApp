import express from "express";
import { json } from "body-parser";

const app: express.Application = express();
app.use(json({ limit: "50mb", type: "application/json" }));
export default app;