import { useRef, useState } from "react";
import { YouTubePlayer } from "youtube-player/dist/types";
import { YoutubeEvent } from "../../../../types";
import { resetMovie, updateVideoCurrentDuration } from "../utils";

const useIframeAPI = (
  currentTimeRef: HTMLParagraphElement | null,
  totalTimeRef: HTMLParagraphElement | null,
  timelineRef: HTMLDivElement | null,
  id: string
) => {
  const [player, setPlayer] = useState<YouTubePlayer | null>(null);
  const [playerState, setPlayerState] = useState<number | null>(null);
  const interval: React.MutableRefObject<null | NodeJS.Timeout> = useRef(null);

  window.onYouTubeIframeAPIReady = function () {
    setPlayer(
      new YT.Player("player", {
        height: "100%",
        width: "100%",
        playerVars: {
          playsinline: 1,
          controls: 0,
          rel: 0,
          autoplay: 1,
        },
        events: {
          onReady: onReady,
          onStateChange: onStateChange,
        },
      })
    );
  };

  const onReady = async (event: YoutubeEvent) => {
    event.target.cueVideoById(id);
    event.target.setVolume(50);
  };

  const onStateChange = async (event: YoutubeEvent) => {
    if (totalTimeRef === null) return;
    if (currentTimeRef === null) return;
    if (timelineRef === null) return;

    if (event.data === 5 || event.data === -1) {
      resetMovie(event.target, currentTimeRef, totalTimeRef, timelineRef);
    } else if (event.data === 1) {
      interval.current = updateVideoCurrentDuration(
        event.target,
        currentTimeRef,
        totalTimeRef,
        timelineRef
      );
    } else if (event.data !== 1 && interval.current !== null)
      clearInterval(interval.current);

    setPlayerState(event.data);
  };

  return { player, playerState };
};

export default useIframeAPI;
