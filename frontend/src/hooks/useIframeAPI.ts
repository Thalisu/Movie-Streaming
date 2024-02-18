import { useState } from "react";
import PlayerStates from "youtube-player/dist/constants/PlayerStates";
import { YouTubePlayer } from "youtube-player/dist/types";

const useIframeApi = () => {
  const [player, setPlayer] = useState<YouTubePlayer>("");
  window.onYouTubeIframeAPIReady = function () {
    console.log("api loaded");
    setPlayer(
      new YT.Player("player", {
        height: "100%",
        width: "100%",
        videoId: "8atVIkoVsGk",
        playerVars: {
          playsinline: 1,
          controls: 0,
          rel: 0,
        },
        events: {
          onReady: onPlayerReady,
        },
      })
    );
  };

  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName("script")[0];
  if (firstScriptTag.parentNode !== null)
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  const startVideo = (
    setIsPaused: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    player.playVideo();
    setIsPaused(false);
  };

  const pauseVideo = (
    setIsPaused: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    player.pauseVideo();
    setIsPaused(true);
  };

  const onPlayerReady = (event) => {
    event.target.setVolume(10);
    event.target.playVideo();
  };

  return {
    startVideo,
    pauseVideo,
  };
};

export default useIframeApi;
