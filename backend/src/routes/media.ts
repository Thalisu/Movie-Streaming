import axios from "axios";
import { Router } from "express";

/* import { info } from "../utils/logger"; */
import config from "../../utils/config";

const mediaRouter = Router();

mediaRouter.get("/image/:id", async (req, res) => {
  const id = req.params.id;
  const response = await axios.get(
    `${config.BASE_URL}movie/${id}/images?api_key=${config.API_KEY}`
  );
  res.json(response.data);
});

mediaRouter.get("/videos/:id", async (req, res) => {
  const id = req.params.id;
  const response = await axios.get(
    `${config.BASE_URL}movie/${id}/videos?api_key=${config.API_KEY}`
  );
  res.json(response.data);
});

export default mediaRouter;
