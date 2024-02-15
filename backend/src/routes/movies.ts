import { Router } from "express";
import config from "../../utils/config";

import { parseNumber, parseTime, parseType } from "../utils";
import { getMovies } from "../services/movieService";

const moviesRouter = Router();

moviesRouter.get("/trending/:time/:quantity/:after?", async (req, res) => {
  const time = parseTime(req.params.time);
  const quantity = parseNumber(req.params.quantity) + 1;

  const url = `${config.BASE_URL}trending/movie/${time}?api_key=${config.API_KEY}`;

  /*   if (isNumber(req.params.after)) info("todo"); */

  const response = await getMovies(quantity, url);

  res.json(response);
});

moviesRouter.get("/:type/:quantity/:after?", async (req, res) => {
  const type = parseType(req.params.type);
  const quantity = parseNumber(req.params.quantity) + 1;

  const url = `${config.BASE_URL}movie/${type}?api_key=${config.API_KEY}`;

  /*   if (isNumber(req.params.after)) info("todo"); */

  const response = await getMovies(quantity, url);

  res.json(response);
});

export default moviesRouter;
