import { YouTubePlayer } from "youtube-player/dist/types";

export interface Movie {
  title: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  genres: string[];
  release_date: string;
  vote_average: number;
  popularity: number;
  video: string;
  id: number;
}

export enum Type {
  Popular = "popular",
  Top_rated = "top_rated",
  Upcoming = "upcoming",
  Latest = "latest",
}

export interface RouterType {
  title: string;
  path: string;
  element: JSX.Element;
}

export interface YoutubeEvent {
  target: YouTubePlayer;
  data: number;
}

interface Player {
  Player: new (arg0: string, arg1: object) => YouTubePlayer;
}

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: Player;
  }
}

export interface ControlsProps {
  player: YouTubePlayer | null;
  playerState: number | null;
  currentTimeRef: React.MutableRefObject<HTMLParagraphElement | null>;
  totalTimeRef: React.MutableRefObject<HTMLParagraphElement | null>;
  timelineRef: React.MutableRefObject<HTMLDivElement | null>;
  containerRef: React.MutableRefObject<HTMLDivElement | null>;
}

export type API = Omit<ControlsProps, "containerRef">;
