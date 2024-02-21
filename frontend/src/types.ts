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

export interface YoutubeApiCommands {
  startPauseVideo: () => Promise<void>;
  getStartPauseIcon: () => string;
  toggleFullscreen: () => Promise<void>;
  getFullscreenIcon: () => string;
  toggleMute: () => void;
  setVolume: (event: React.FormEvent<HTMLInputElement>) => void;
  getVolumeIcon: () => string;
  skip: (seconds: number) => void;
  handleTimelineUpdate: (event: React.MouseEvent) => void;
  toggleDragging: (event: React.MouseEvent) => void;
  currentTimeRef: React.MutableRefObject<HTMLParagraphElement | null>;
  totalTimeRef: React.MutableRefObject<HTMLParagraphElement | null>;
  timelineRef: React.MutableRefObject<HTMLDivElement | null>;
}
