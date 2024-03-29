import play from "/assets/play.svg?url";
import pause from "/assets/pause.svg?url";
import { YouTubePlayer } from "youtube-player/dist/types";

const playPauseButton = (
  player: YouTubePlayer | null,
  playerState: number | null
) => {
  const playPauseVideo = async () => {
    if (player === null) return;
    playerState !== 1 ? player.playVideo() : player.pauseVideo();
  };

  const getPlayPauseIcon = () => {
    return playerState !== 1 ? play : pause;
  };
  return { playPauseVideo, getPlayPauseIcon };
};

export default playPauseButton;
