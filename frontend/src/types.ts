export interface Movie {
  title: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  genres: string[];
  release_date: string;
  vote_average: number;
  popularity: number;
  id: number;
}

export enum Type {
  Popular = "popular",
  Top_rated = "top_rated",
  Upcoming = "upcoming",
  Latest = "latest",
}

export interface routerType {
  title: string;
  path: string;
  element: JSX.Element;
}

declare global {
  interface Window {
    onYouTubeIframeAPIReady?: () => void;
  }
}
