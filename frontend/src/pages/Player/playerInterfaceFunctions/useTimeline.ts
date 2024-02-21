import { useRef } from "react";
import { formatTime } from "../utils";
import { API } from "../../../types";

const useTimeline = ({
  player,
  playerState,
  timelineRef,
  currentTimeRef,
  totalTimeRef,
}: API) => {
  const isDragging = useRef(false);
  const wasPaused = useRef(true);

  document.addEventListener("mouseup", (e) => {
    if (isDragging.current) toggleDragging(e);
  });
  document.addEventListener("mousemove", (e) => {
    if (isDragging.current) handleTimelineUpdate(e);
  });

  const handleTimelineUpdate = (event: React.MouseEvent | MouseEvent) => {
    if (timelineRef.current === null) return;
    if (currentTimeRef.current === null) return;

    const rect = timelineRef.current.getBoundingClientRect();
    const percent =
      Math.min(Math.max(0, event.pageX - rect.x), rect.width) / rect.width;
    timelineRef.current.style.setProperty(
      "--preview-position",
      percent.toString()
    );

    if (isDragging.current) {
      event.preventDefault();
      timelineRef.current.style.setProperty(
        "--progress-position",
        percent.toString()
      );

      const currentTime = formatTime(
        percent * Number(totalTimeRef.current?.id)
      );
      currentTimeRef.current.textContent = currentTime;
    }
  };

  const toggleDragging = (event: React.MouseEvent | MouseEvent) => {
    if (player === null) return;
    if (timelineRef.current === null) return;
    if (currentTimeRef.current === null) return;
    if (totalTimeRef.current === null) return;

    const rect = timelineRef.current.getBoundingClientRect();
    const percent =
      Math.min(Math.max(0, event.pageX - rect.x), rect.width) / rect.width;

    isDragging.current = (event.buttons & 1) === 1;

    if (isDragging.current) {
      if (playerState === 1) {
        player.pauseVideo();
        wasPaused.current = false;
      }
    } else {
      currentTimeRef.current.id = (
        percent * Number(totalTimeRef.current.id)
      ).toString();

      player.seekTo(Number(currentTimeRef.current.id), true);
      if (wasPaused.current === false) player.playVideo();
      wasPaused.current = true;
    }
  };

  return { handleTimelineUpdate, toggleDragging };
};

export default useTimeline;
