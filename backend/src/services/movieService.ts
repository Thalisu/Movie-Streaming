import axios from "axios";
import { MovieResponse, MovieData, Movie, Type } from "../types";
import genresData from "../../data/genres";

const treatData = (movies: MovieData[]): Movie[] => {
  return movies.map((movie) => {
    const title = movie.title;
    const backdrop_path = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
    const poster_path = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
    const overview = movie.overview;

    const genres = movie.genre_ids.map((id) => {
      const foundData =
        genresData.find((data) => data.id === id)?.name ?? "genre id not found";
      return foundData;
    });

    const release_date = movie.release_date;
    const vote_average = movie.vote_average;
    const popularity = movie.popularity;
    const id = movie.id;

    return new Movie({
      title,
      backdrop_path,
      poster_path,
      overview,
      genres,
      release_date,
      vote_average,
      popularity,
      id,
    });
  });
};

const getMovieData = (data: MovieData[], type?: Type) => {
  return type === Type.Upcoming
    ? data.filter((data) => new Date() < new Date(data.release_date))
    : data;
};

export const getMovies = async (quantity: number, url: string, type?: Type) => {
  const { data } = await axios.get<MovieResponse>(url);
  const maxPages = data.total_pages;

  const movieData = getMovieData(data.results, type);

  if (movieData.length < quantity) {
    for (let i = 2; i <= maxPages; i++) {
      const { data } = await axios.get<MovieResponse>(`${url}&page=${i}`);
      movieData.push(...getMovieData(data.results, type));

      if (movieData.length >= quantity) break;
    }
  }

  return treatData(movieData.slice(0, quantity));
};
