import { Movie, Time, Type } from "./types";
import { error } from "../utils/logger";
import genresData from "../data/genres";

const isString = (text: unknown): text is string => {
  if (!text) return false;
  return typeof text === "string" || text instanceof String;
};
const isType = (type: string): type is Type => {
  return Object.values(Type)
    .map((v) => v.toString())
    .includes(type);
};

export const parseType = (type: unknown): Type => {
  if (!isString(type) || !isType(type)) {
    error(`Incorrect or missing type: ${type}`);
    throw new Error(`Incorrect or missing type: ${type}`);
  }
  return type;
};

const isTime = (time: string): time is Time => {
  return Object.values(Time)
    .map((v) => v.toString())
    .includes(time);
};

export const parseTime = (time: unknown): Time => {
  if (!isString(time) || !isTime(time)) {
    error(`Incorrect or missing time: ${time}`);
    throw new Error(`Incorrect or missing time: ${time}`);
  }
  return time;
};

export const isNumber = (num: unknown): num is number => {
  if (!num) return false;
  return !isNaN(Number(num));
};

export const parseNumber = (num: unknown): number => {
  if (!isNumber(num)) {
    error(`Incorrect or missing quantity: ${num}`);
    throw new Error(`Incorrect or missing quantity: ${num}`);
  }
  return Number(num);
};

class FilteredMovie {
  title: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  genres: string[];
  release_date: string;
  vote_average: number;
  popularity: number;
  id: number;

  constructor(
    title: string,
    backdrop_path: string,
    poster_path: string,
    overview: string,
    genres: string[],
    release_date: string,
    vote_average: number,
    popularity: number,
    id: number
  ) {
    this.title = title;
    this.backdrop_path = backdrop_path;
    this.poster_path = poster_path;
    this.overview = overview;
    this.genres = genres;
    this.release_date = release_date;
    this.vote_average = vote_average;
    this.popularity = popularity;
    this.id = id;
  }
}

export const parseMovies = (movies: Movie[]): FilteredMovie[] => {
  const result = movies.map((movie) => {
    const backdrop_path = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
    const poster_path = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;

    const genres = movie.genre_ids.map((id) => {
      const foundData = genresData.find((data) => data.id === id)?.name;
      return foundData as string;
    });

    return new FilteredMovie(
      movie.title,
      backdrop_path,
      poster_path,
      movie.overview,
      genres,
      movie.release_date,
      movie.vote_average,
      movie.popularity,
      movie.id
    );
  });
  return result;
};
