import { YouTubePlayer } from "youtube-player/dist/types";

const useIframeApi = () => {
  let player: YouTubePlayer;
  window.onYouTubeIframeAPIReady = function () {
    console.log("api loaded");
    player = new YT.Player("player", {
      height: "390",
      width: "640",
      videoId: "8atVIkoVsGk",
      playerVars: {
        playsinline: 1,
        controls: 0,
      },
      events: {
        onReady: onPlayerReady,
      },
    });
  };

  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName("script")[0];
  if (firstScriptTag.parentNode !== null)
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  const startVideo = () => {
    player.playVideo();
  };

  const pauseVideo = () => {
    player.pauseVideo();
  };

  const onPlayerReady = () => {
    player.setVolume(10);
  };

  return {
    startVideo,
    pauseVideo,
  };
};

export default useIframeApi;
