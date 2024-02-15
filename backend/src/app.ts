import express from "express";

import cors from "cors";
import "express-async-errors";

import { moviesRouter, genresRouter, mediaRouter } from "./routes";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/movies", moviesRouter);
app.use("/api/genres", genresRouter);
app.use("/api/media", mediaRouter);

/* app.use("/api/videos", videosRouter); */

export default app;
