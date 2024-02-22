import express from "express";

import cors from "cors";
import "express-async-errors";
import middlewares from "../utils/middleware";

import { moviesRouter, genresRouter, mediaRouter } from "./routes";

const app = express();

app.use(cors());
app.use(express.static("dist"));
app.use(express.json());

app.use("/api/movies", moviesRouter);
app.use("/api/genres", genresRouter);
app.use("/api/media", mediaRouter);

app.use(middlewares.errorHandler);

/* app.use("/api/videos", videosRouter); */

export default app;
