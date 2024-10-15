import axios from "axios";
import { Router } from "express";

/* import { info } from "../utils/logger"; */
import config from "../../utils/config";

const genresRouter = Router();

// eslint-disable-next-line @typescript-eslint/no-misused-promises
genresRouter.get("/", async (_req, res) => {
  const response = await axios.get(
    `${config.BASE_URL}genre/movie/list?api_key=${config.API_KEY}`
  );
  res.json(response.data);
});

export default genresRouter;
