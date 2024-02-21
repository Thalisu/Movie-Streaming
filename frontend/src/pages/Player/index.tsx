import useIframeApi from "./usePlayerIframeAPI";
import {
  Container,
  PlayerWrapper,
  VideoPlayer,
  VideoControlsContainer,
  TopBarContainer,
  ExitButton,
} from "./style";

import Controls from "./controls";
import Timeline from "./timeline";

import exitIcon from "../../assets/icons/exitPlayer.svg";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Player = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname.includes("player")) {
      const PlayerContainer = document.getElementById("player-container");
      PlayerContainer?.style.setProperty("--isInPlayer", "block");
    } else {
      const PlayerContainer = document.getElementById("player-container");
      PlayerContainer?.style.setProperty("--isInPlayer", "none");
    }
  }, [location]);
  const id = location.pathname.substring(8);
  console.log(id);
  const api = useIframeApi(id);

  return (
    <Container id="player-container" onMouseMove={() => api.showMenu()}>
      <TopBarContainer>
        <Link to={`/`}>
          <ExitButton src={exitIcon}></ExitButton>
        </Link>
      </TopBarContainer>
      <PlayerWrapper id="player-wrapper" onClick={() => api.startPauseVideo()}>
        <VideoPlayer id="player"></VideoPlayer>
      </PlayerWrapper>
      <VideoControlsContainer ref={api.videoContainerRef}>
        <Timeline api={api} />
        <Controls api={api} />
      </VideoControlsContainer>
    </Container>
  );
};

export default Player;
