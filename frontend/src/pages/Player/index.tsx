import useIframeApi from "../../hooks/useIframeAPI";
import {
  Container,
  PlayerWrapper,
  VideoPlayer,
  VideoControlsContainer,
} from "./style";

import Controls from "./controls";
import Timeline from "./timeline";

const Player = () => {
  const api = useIframeApi();

  return (
    <Container id="player-container" onMouseMove={() => api.showMenu()}>
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
