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
import { useEffect, useState } from "react";

const Player = () => {
  const location = useLocation();
  const [isOnPlayer, setIsOnPlayer] = useState(false);
  useEffect(() => {
    if (location.pathname.includes("player")) {
      setIsOnPlayer(true);
    } else {
      setIsOnPlayer(false);
    }
  }, [location]);
  const api = useIframeApi();

  return (
    <Container
      id="player-container"
      $isOnPlayer={isOnPlayer}
      onMouseMove={() => api.showMenu()}
    >
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
