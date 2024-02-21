import { useEffect, useRef, useState } from "react";
import { YouTubePlayer } from "youtube-player/dist/types";
import { YoutubeEvent } from "../../../types";
import { resetMovie, updateVideoCurrentDuration } from "../utils";
import createYoutubeIframeAPIScript from "./createYoutubeIframeScript.ts";
import { useLocation } from "react-router";

const useIframeAPI = () => {
  const [player, setPlayer] = useState<YouTubePlayer | null>(null);
  const [playerState, setPlayerState] = useState<number | null>(null);
  const interval: React.MutableRefObject<null | NodeJS.Timeout> = useRef(null);

  const currentTimeRef: React.MutableRefObject<HTMLParagraphElement | null> =
    useRef(null);
  const totalTimeRef: React.MutableRefObject<HTMLParagraphElement | null> =
    useRef(null);
  const timelineRef: React.MutableRefObject<HTMLDivElement | null> =
    useRef(null);

  const location = useLocation();
  const id = location.pathname.substring(8);

  useEffect(() => {
    if (id !== undefined && player !== null && "cueVideoById" in player)
      player.cueVideoById(id);
  }, [id, player]);

  createYoutubeIframeAPIScript();

  window.onYouTubeIframeAPIReady = function () {
    setPlayer(
      new window.YT.Player("player", {
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
    if (id !== undefined && id.length !== 12) event.target.cueVideoById(id);
    event.target.setVolume(50);
  };

  const onStateChange = async (event: YoutubeEvent) => {
    if (totalTimeRef.current === null) return;
    if (currentTimeRef.current === null) return;
    if (timelineRef.current === null) return;

    if (event.data === 5 || event.data === -1) {
      resetMovie(
        event.target,
        currentTimeRef.current,
        totalTimeRef.current,
        timelineRef.current
      );
    } else if (event.data === 1) {
      interval.current = updateVideoCurrentDuration(
        event.target,
        currentTimeRef.current,
        totalTimeRef.current,
        timelineRef.current
      );
    } else if (event.data !== 1 && interval.current !== null)
      clearInterval(interval.current);

    setPlayerState(event.data);
  };

  return { player, playerState, currentTimeRef, totalTimeRef, timelineRef };
};

export default useIframeAPI;
