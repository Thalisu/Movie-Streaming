import { useRef, useState } from "react";
import { YouTubePlayer } from "youtube-player/dist/types";
import { YoutubeEvent } from "../../../types";

import play from "../../../assets/icons/play.svg";
import pause from "../../../assets/icons/pause.svg";
import openFullscreen from "../../../assets/icons/notFullscreenMode.svg";
import closeFullscreen from "../../../assets/icons/onFullscreenMode.svg";
import volumeMuted from "../../../assets/icons/volumeMuted.svg";
import volumeLow from "../../../assets/icons/volumeLow.svg";
import volumeHigh from "../../../assets/icons/volumeHigh.svg";
import { useParams } from "react-router-dom";

const useIframeApi = (id) => {
  const [player, setPlayer] = useState<YouTubePlayer | null>(null);
  const [playerState, setPlayerState] = useState<number | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLowVolume, setIsLowVolume] = useState(false);

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

  document.addEventListener("mouseup", (e) => {
    if (utils.current.isDragging) toggleDragging(e);
  });
  document.addEventListener("mousemove", (e) => {
    if (utils.current.isDragging) handleTimelineUpdate(e);
  });

  let updateCurrentTime: NodeJS.Timeout;

  window.onYouTubeIframeAPIReady = function () {
    console.log("api loaded");
    setPlayer(
      new YT.Player("player", {
        height: "100%",
        width: "100%",
        videoId: id,
        playerVars: {
          playsinline: 1,
          controls: 0,
          rel: 0,
          autoplay: 1,
          mute: 1,
        },
        events: {
          onReady: onReady,
          onStateChange: onStateChange,
          onAutoplayBlocked: onStateChange,
          onError: handleError,
        },
      })
    );
  };

  if (document.getElementById("iframeAPI") === null) {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    tag.id = "iframeAPI";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    if (firstScriptTag.parentNode !== null)
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

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

  const handleError = (event: YoutubeEvent) => console.log(event);

  const onStateChange = async (event: YoutubeEvent) => {
    if (event === undefined) return;
    if (event.data === 1) {
      await event.target.unMute();
      updateCurrentTime = setInterval(() => getTime(event), 100);
      setIsMuted(false);
    }
    if (event.data !== 1) {
      clearInterval(updateCurrentTime);
    }
    setPlayerState(event.data);
  };

  const getTime = async (event: YoutubeEvent) => {
    if (currentTimeRef.current === null) return;
    if (timelineRef.current === null) return;
    console.log("t");

    let rawTime = await event.target.getCurrentTime();
    utils.current.currentDuration > rawTime
      ? (rawTime = utils.current.currentDuration)
      : (utils.current.currentDuration = rawTime);

    const percent = utils.current.currentDuration / utils.current.videoDuration;
    timelineRef.current.style.setProperty(
      "--progress-position",
      percent.toString()
    );

    const currentTime = formatTime(rawTime);
    currentTimeRef.current.textContent = currentTime;
  };

  const onReady = async (event: YoutubeEvent) => {
    const container = document.getElementById("player-container");
    if (container !== null) utils.current.container = container;

    const iframe = await event.target.getIframe();
    if (iframe !== null) utils.current.iframe = iframe;

    const rawTotalTime = await event.target.getDuration();
    utils.current.videoDuration = rawTotalTime;
    const totalTime: string = formatTime(rawTotalTime);
    if (totalTimeRef.current !== null)
      totalTimeRef.current.textContent = totalTime;

    const rawTime = await event.target.getCurrentTime();
    const currentTime = formatTime(rawTime);
    if (currentTimeRef.current !== null)
      currentTimeRef.current.textContent = currentTime;

    event.target.setVolume(50);
  };

  const formatTime = (seconds: number) => {
    return seconds < 60
      ? new Date(seconds * 1000).toISOString().substring(15, 19)
      : seconds < 3600
      ? new Date(seconds * 1000).toISOString().substring(14, 19)
      : new Date(seconds * 1000).toISOString().substring(11, 19);
  };

  const skip = (seconds: number) => {
    if (player === null) return;
    if (currentTimeRef.current === null) return;
    if (timelineRef.current === null) return;

    const skipTo = utils.current.currentDuration + seconds;
    utils.current.currentDuration = skipTo;
    player.seekTo(skipTo, true);

    const percent = utils.current.currentDuration / utils.current.videoDuration;
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

      const currentTime = formatTime(percent * utils.current.videoDuration);
      currentTimeRef.current.textContent = currentTime;
    }
  };

  const toggleDragging = (event: React.MouseEvent | MouseEvent) => {
    if (player === null) return;
    if (timelineRef.current === null) return;

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
      utils.current.currentDuration = percent * utils.current.videoDuration;

      player.seekTo(utils.current.currentDuration, true);
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

export default useIframeApi;
