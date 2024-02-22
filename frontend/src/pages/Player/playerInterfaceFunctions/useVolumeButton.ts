import { useState } from "react";
import { YouTubePlayer } from "youtube-player/dist/types";

import volumeMuted from "/assets/volumeMuted.svg?url";
import volumeLow from "/assets/volumeLow.svg?url";
import volumeHigh from "/assets/volumeHigh.svg?url";

const useVolumeButton = (player: YouTubePlayer | null) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isLowVolume, setIsLowVolume] = useState(false);

  const toggleMute = () => {
    if (isMuted) {
      player?.unMute();
      setIsMuted(false);
      return;
    }
    player?.mute();
    setIsMuted(true);
  };

  const setVolume = (event: React.FormEvent<HTMLInputElement>) => {
    const volume = Number(event.currentTarget.value);
    volume >= 40 ? setIsLowVolume(false) : setIsLowVolume(true);
    volume > 0 ? setIsMuted(false) : setIsMuted(true);
    player?.setVolume(volume);
  };

  const getVolumeIcon = () => {
    if (isMuted) {
      return volumeMuted;
    }
    return isLowVolume ? volumeLow : volumeHigh;
  };

  return { toggleMute, setVolume, getVolumeIcon };
};

export default useVolumeButton;
