import {
  Container,
  MenuButton,
  VolumeSlider,
  VolumeContainer,
  DurationContainer,
} from "./style";

import skipLeft from "../../../assets/icons/skipLeft.svg";
import skipRight from "../../../assets/icons/skipRight.svg";

import { YoutubeApiCommands } from "../../../types";
const Controls = ({ api }: { api: YoutubeApiCommands }) => (
  <Container>
    <MenuButton
      onClick={() => api.startPauseVideo()}
      $background={api.getStartPauseIcon()}
    />
    <MenuButton onClick={() => api.skip(-10)} $background={skipLeft} />
    <MenuButton onClick={() => api.skip(10)} $background={skipRight} />
    <VolumeContainer>
      <MenuButton
        onClick={() => api.toggleMute()}
        $background={api.getVolumeIcon()}
      />
      <VolumeSlider
        type="range"
        min="0"
        max="100"
        onInput={(event) => api.setVolume(event)}
      />
    </VolumeContainer>
    <DurationContainer>
      <p ref={api.currentTimeRef}></p>/<p ref={api.totalTimeRef}></p>
    </DurationContainer>
    <MenuButton
      onClick={() => api.toggleFullscreen()}
      $background={api.getFullscreenIcon()}
    />
  </Container>
);

export default Controls;
