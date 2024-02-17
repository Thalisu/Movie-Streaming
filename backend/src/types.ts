export enum Time {
  Week = "week",
  Day = "day",
}

export enum Type {
  Popular = "popular",
  Top_rated = "top_rated",
  Upcoming = "upcoming",
  Latest = "latest",
}

export interface MovieResponse {
  page: number;
  results: MovieData[];
  total_pages: number;
  total_results: number;
}

export interface MovieData {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

type FilterMovie = Omit<
  MovieData,
  | "adult"
  | "original_language"
  | "original_title"
  | "media_type"
  | "genre_ids"
  | "video"
  | "vote_count"
>;

export class Movie implements FilterMovie {
  title: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  genres: string[];
  release_date: string;
  vote_average: number;
  popularity: number;
  id: number;

  constructor(movie: Movie) {
    this.title = movie.title;
    this.backdrop_path = movie.backdrop_path;
    this.poster_path = movie.poster_path;
    this.overview = movie.overview;
    this.genres = movie.genres;
    this.release_date = movie.release_date;
    this.vote_average = movie.vote_average;
    this.popularity = movie.popularity;
    this.id = movie.id;
  }
}
