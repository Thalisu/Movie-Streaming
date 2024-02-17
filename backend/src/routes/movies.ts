import { Router } from "express";
import config from "../../utils/config";

import { parseNumber, parseTime, parseType } from "../utils";
import { getMovies } from "../services/movieService";

const moviesRouter = Router();

// eslint-disable-next-line @typescript-eslint/no-misused-promises
moviesRouter.get("/trending/:time/:quantity/:after?", async (req, res) => {
  const time = parseTime(req.params.time);
  const quantity = parseNumber(req.params.quantity);

  const url = `${config.BASE_URL}trending/movie/${time}?api_key=${config.API_KEY}`;

  /*   if (isNumber(req.params.after)) info("todo"); */

  const movies = await getMovies(quantity, url);

  res.json(movies);
});

// eslint-disable-next-line @typescript-eslint/no-misused-promises
moviesRouter.get("/:type/:quantity/:after?", async (req, res) => {
  const type = parseType(req.params.type);
  const quantity = parseNumber(req.params.quantity);

  const url = `${config.BASE_URL}movie/${type}?api_key=${config.API_KEY}`;

  /*   if (isNumber(req.params.after)) info("todo"); */
  const movies = await getMovies(quantity, url, type);

  res.json(movies);
});

export default moviesRouter;
