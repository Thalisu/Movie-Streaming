import { YouTubePlayer } from "youtube-player/dist/types";

export const formatTime = (seconds: number) => {
  return seconds < 60
    ? new Date(seconds * 1000).toISOString().substring(15, 19)
    : seconds < 3600
    ? new Date(seconds * 1000).toISOString().substring(14, 19)
    : new Date(seconds * 1000).toISOString().substring(11, 19);
};

export const updateVideoCurrentDuration = (
  player: YouTubePlayer,
  currentTimeRef: HTMLParagraphElement,
  totalTimeRef: HTMLParagraphElement,
  timelineRef: HTMLDivElement
) => {
  return setInterval(async () => {
    console.log("intervalRunning");
    const rawTime = await player.getCurrentTime();
    currentTimeRef.id = rawTime.toString();

    const percent = rawTime / Number(totalTimeRef.id);

    timelineRef.style.setProperty("--progress-position", percent.toString());

    const currentTime = formatTime(rawTime);
    currentTimeRef.textContent = currentTime;
  }, 100);
};

export const resetMovie = async (
  player: YouTubePlayer,
  currentTimeRef: HTMLParagraphElement,
  totalTimeRef: HTMLParagraphElement,
  timelineRef: HTMLDivElement
) => {
  const rawTotalDuration = await player.getDuration();
  totalTimeRef.id = rawTotalDuration.toString();
  totalTimeRef.textContent = formatTime(Number(totalTimeRef.id));
  currentTimeRef.textContent = "0:00";
  timelineRef.style.setProperty("--progress-position", "0");
};
