import axios from "axios";
import { Movie } from "../types";
const baseUrl = "http://localhost:3003/api";

const getMovies = async (quantity: number, type?: string, time?: string) => {
  if (time) {
    const { data } = await axios.get<Movie[]>(
      `${baseUrl}/movies/trending/${time}/${quantity}`
    );
    return data;
  }
  const { data } = await axios.get<Movie[]>(
    `${baseUrl}/movies/${type}/${quantity}`
  );
  return data;
};

export default { getMovies };
