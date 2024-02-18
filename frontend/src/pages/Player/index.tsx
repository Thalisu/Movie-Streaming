import useIframeApi from "../../hooks/useIframeAPI";
import { Container, Play, Stop, VideoPlayer } from "./style";

const Player = () => {
  const api = useIframeApi();

  return (
    <Container>
      <VideoPlayer id="player"></VideoPlayer>
      <Play onClick={() => api.startVideo()} />
      <Stop onClick={() => api.pauseVideo()} />
    </Container>
  );
};

export default Player;
