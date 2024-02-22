import { Link } from "react-router-dom";

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

import exitIcon from "/assets/exitPlayer.svg?url";

import useIframeAPI from "./useIframeAPI";

import useContainerMousemove from "./playerInterfaceFunctions/useVideoContainer";
import playPauseButton from "./playerInterfaceFunctions/playPauseButton";
import useUrlLocation from "./useUrlLocation";

const Player = (): JSX.Element => {
  const { isOnPlayer } = useUrlLocation();
  const api = useIframeAPI();
  const { hideShowInterface, containerRef } = useContainerMousemove();

  const { playPauseVideo } = playPauseButton(api.player, api.playerState);

  return (
    <Container
      id="player-container"
      $isOnPlayer={isOnPlayer}
      onMouseMove={() => hideShowInterface()}
      ref={containerRef}
    >
      <TopBarContainer>
        <Link to={`/`}>
          <ExitButton src={exitIcon}></ExitButton>
        </Link>
      </TopBarContainer>
      <PlayerWrapper id="player-wrapper" onClick={() => playPauseVideo()}>
        <VideoPlayer id="player"></VideoPlayer>
      </PlayerWrapper>
      <VideoControlsContainer>
        <Timeline api={{ ...api }} />
        <Controls props={{ ...api, containerRef }} />
      </VideoControlsContainer>
    </Container>
  );
};

export default Player;
