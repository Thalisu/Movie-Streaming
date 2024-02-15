import axios from "axios";
import { MoviesResult, Movie } from "../types";
import { parseMovies } from "../utils";

export const getMovies = async (quantity: number, url: string) => {
  if (quantity <= 19) {
    const { data } = await axios.get<MoviesResult>(url);
    const movies = parseMovies(data.results);
    return movies.slice(0, quantity);
  }

  const pages = Math.ceil(quantity / 19);
  const result: Movie[] = [];

  for (let i = 1; i <= pages; i++) {
    const { data } = await axios.get<MoviesResult>(`${url}&page=${i}`);
    result.push(...data.results);
  }
  const movies = parseMovies(result);

  return movies.slice(0, quantity);
};
