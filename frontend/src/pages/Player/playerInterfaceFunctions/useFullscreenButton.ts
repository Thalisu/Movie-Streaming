import { useState } from "react";
import openFullscreen from "/assets/notFullscreenMode.svg?url";
import closeFullscreen from "/assets/onFullscreenMode.svg?url";

const useFullscreenButton = (
  containerRef: React.MutableRefObject<HTMLDivElement | null>
) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = async () => {
    if (containerRef.current === null) return;

    if (document.fullscreenElement === null) {
      await containerRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      await document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const getFullscreenIcon = () => {
    return isFullscreen ? closeFullscreen : openFullscreen;
  };

  return { toggleFullscreen, getFullscreenIcon };
};

export default useFullscreenButton;
