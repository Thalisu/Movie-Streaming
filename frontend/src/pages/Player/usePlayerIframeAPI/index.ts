import { useEffect, useRef, useState } from "react";

import play from "../../../assets/icons/play.svg";
import pause from "../../../assets/icons/pause.svg";
import openFullscreen from "../../../assets/icons/notFullscreenMode.svg";
import closeFullscreen from "../../../assets/icons/onFullscreenMode.svg";
import volumeMuted from "../../../assets/icons/volumeMuted.svg";
import volumeLow from "../../../assets/icons/volumeLow.svg";
import volumeHigh from "../../../assets/icons/volumeHigh.svg";
import { useLocation } from "react-router-dom";
import useIframeAPI from "./useIframeAPI";
import { formatTime } from "./utils";

const usePlayer = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLowVolume, setIsLowVolume] = useState(false);
  const location = useLocation();
  const id = location.pathname.substring(8);

  const videoContainerRef: React.MutableRefObject<HTMLDivElement | null> =
    useRef(null);
  const currentTimeRef: React.MutableRefObject<HTMLParagraphElement | null> =
    useRef(null);
  const totalTimeRef: React.MutableRefObject<HTMLParagraphElement | null> =
    useRef(null);
  const timelineRef: React.MutableRefObject<HTMLDivElement | null> =
    useRef(null);

  const utils: React.MutableRefObject<{
    container: null | HTMLElement;
    iframe: null | HTMLElement;
    currentDuration: number;
    videoDuration: number;
    isDragging: boolean;
    wasPaused: boolean;
    timeout: NodeJS.Timeout | null;
  }> = useRef({
    container: null,
    iframe: null,
    currentDuration: 0,
    videoDuration: 0,
    isDragging: false,
    wasPaused: true,
    timeout: null,
  });

  const { player, playerState } = useIframeAPI(
    currentTimeRef.current,
    totalTimeRef.current,
    timelineRef.current,
    id
  );

  document.addEventListener("mouseup", (e) => {
    if (utils.current.isDragging) toggleDragging(e);
  });
  document.addEventListener("mousemove", (e) => {
    if (utils.current.isDragging) handleTimelineUpdate(e);
  });

  useEffect(() => {
    if (id !== undefined && player !== null && "cueVideoById" in player)
      player.cueVideoById(id);
  }, [id, player]);

  const startPauseVideo = async () => {
    if (player === null) return;
    playerState !== 1 ? player.playVideo() : player.pauseVideo();
  };

  const getStartPauseIcon = () => {
    return playerState !== 1 ? play : pause;
  };

  const toggleFullscreen = async () => {
    if (utils.current.container === null) return;

    if (document.fullscreenElement === null) {
      await utils.current.container.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const getFullscreenIcon = () => {
    return isFullscreen ? closeFullscreen : openFullscreen;
  };

  const toggleMute = () => {
    if (player === null) return;

    if (isMuted) {
      player.unMute();
      setIsMuted(false);
      return;
    }
    player.mute();
    setIsMuted(true);
  };

  const setVolume = (event: React.FormEvent<HTMLInputElement>) => {
    if (player === null) return;
    const volume = Number(event.currentTarget.value);
    volume >= 40 ? setIsLowVolume(false) : setIsLowVolume(true);
    volume > 0 ? setIsMuted(false) : setIsMuted(true);
    player.setVolume(volume);
  };

  const getVolumeIcon = () => {
    if (isMuted) {
      return volumeMuted;
    }
    return isLowVolume ? volumeLow : volumeHigh;
  };

  const skip = (seconds: number) => {
    if (player === null) return;
    if (currentTimeRef.current === null) return;
    if (timelineRef.current === null) return;

    const skipTo = Number(currentTimeRef.current.id) + seconds;
    currentTimeRef.current.id = skipTo.toString();
    player.seekTo(skipTo, true);

    const percent =
      Number(currentTimeRef.current.id) / Number(totalTimeRef.current?.id);
    timelineRef.current.style.setProperty(
      "--progress-position",
      percent.toString()
    );

    const currentTime = formatTime(skipTo);
    currentTimeRef.current.textContent = currentTime;
  };

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

    if (utils.current.isDragging) {
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

    const rect = timelineRef.current.getBoundingClientRect();
    const percent =
      Math.min(Math.max(0, event.pageX - rect.x), rect.width) / rect.width;

    utils.current.isDragging = (event.buttons & 1) === 1;

    if (utils.current.isDragging) {
      if (playerState === 1) {
        player.pauseVideo();
        utils.current.wasPaused = false;
      }
    } else {
      currentTimeRef.current.id = (
        percent * Number(totalTimeRef.current?.id)
      ).toString();

      player.seekTo(Number(currentTimeRef.current.id), true);
      if (utils.current.wasPaused === false) player.playVideo();
      utils.current.wasPaused = true;
    }
  };

  const showMenu = () => {
    if (videoContainerRef.current === null) return;
    if (utils.current.timeout !== null) {
      clearTimeout(utils.current.timeout);
    }
    videoContainerRef.current.classList.add("moved");

    const removeMenu = () => {
      if (videoContainerRef.current === null) return;
      videoContainerRef.current.classList.remove("moved");
    };
    utils.current.timeout = setTimeout(() => removeMenu(), 3000);
  };

  return {
    startPauseVideo,
    getStartPauseIcon,
    toggleFullscreen,
    getFullscreenIcon,
    toggleMute,
    setVolume,
    getVolumeIcon,
    skip,
    handleTimelineUpdate,
    toggleDragging,
    showMenu,
    videoContainerRef,
    currentTimeRef,
    totalTimeRef,
    timelineRef,
  };
};

export default usePlayer;
