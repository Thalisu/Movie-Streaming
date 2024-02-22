import {
  Container,
  MenuButton,
  VolumeSlider,
  VolumeContainer,
  DurationContainer,
} from "./style";

import skipLeft from "/assets/skipLeft.svg?url";
import skipRight from "/assets/skipRight.svg?url";

import { ControlsProps } from "../../../types";
import playPauseButton from "../playerInterfaceFunctions/playPauseButton";
import skipButton from "../playerInterfaceFunctions/skipButton";
import useVolumeButton from "../playerInterfaceFunctions/useVolumeButton";
import useFullscreenButton from "../playerInterfaceFunctions/useFullscreenButton";

const Controls = ({ props }: { props: ControlsProps }) => {
  const { playPauseVideo, getPlayPauseIcon } = playPauseButton(
    props.player,
    props.playerState
  );

  const { toggleMute, setVolume, getVolumeIcon } = useVolumeButton(
    props.player
  );

  const { toggleFullscreen, getFullscreenIcon } = useFullscreenButton(
    props.containerRef
  );

  return (
    <Container>
      <MenuButton
        onClick={() => playPauseVideo()}
        $background={getPlayPauseIcon()}
      />
      <MenuButton
        onClick={() => skipButton(-10, props)}
        $background={skipLeft}
      />
      <MenuButton
        onClick={() => skipButton(10, props)}
        $background={skipRight}
      />
      <VolumeContainer>
        <MenuButton
          onClick={() => toggleMute()}
          $background={getVolumeIcon()}
        />
        <VolumeSlider
          type="range"
          min="0"
          max="100"
          onInput={(event) => setVolume(event)}
        />
      </VolumeContainer>
      <DurationContainer>
        <p ref={props.currentTimeRef}></p>/<p ref={props.totalTimeRef}></p>
      </DurationContainer>
      <MenuButton
        onClick={() => toggleFullscreen()}
        $background={getFullscreenIcon()}
      />
    </Container>
  );
};

export default Controls;
