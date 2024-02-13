export interface Movie {
  name: string;
  launch: number;
  gender: string;
  seasons: number;
}

export interface ScrollData {
  isDragging: boolean;
  startX: number;
  startScrollLeftPos: number;
}
