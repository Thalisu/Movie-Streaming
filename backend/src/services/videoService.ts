import axios from "axios";
import { MovieVideosResponse } from "../types";

const getMovieVideo = async (id: number, hostUrl: string | undefined) => {
  const response = await axios.get<MovieVideosResponse>(
    `${hostUrl}/api/media/videos/${id}`
  );
  const movieVideosData = response.data.results;

  console.log(hostUrl);

  const video = movieVideosData.find((v) => v.type.includes("Trailer"));
  return video?.key;
};

export default getMovieVideo;
