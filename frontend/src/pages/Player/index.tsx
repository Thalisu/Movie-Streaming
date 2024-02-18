import { useState } from "react";
import useIframeApi from "../../hooks/useIframeAPI";
import {
  Container,
  Cropper,
  Play,
  PlayerWrapper,
  Stop,
  VideoPlayer,
} from "./style";

const Player = () => {
  const api = useIframeApi();
  const [isPaused, setIsPaused] = useState(false);

  return (
    <Container>
      <Cropper>
        <PlayerWrapper id="player-container" $isPaused={isPaused}>
          <VideoPlayer id="player"></VideoPlayer>
        </PlayerWrapper>
      </Cropper>
      <Play onClick={() => api.startVideo(setIsPaused)} />
      <Stop onClick={() => api.pauseVideo(setIsPaused)} />
    </Container>
  );
};

export default Player;
