import axios from "axios";
import { MovieVideosResponse } from "../types";

const baseUrl = "/api/media/videos";

const getMovieVideo = async (id: number) => {
  const response = await axios.get<MovieVideosResponse>(`${baseUrl}/${id}`);
  const movieVideosData = response.data.results;

  const video = movieVideosData.find((v) => v.type.includes("Trailer"));
  return video?.key;
};

export default getMovieVideo;
