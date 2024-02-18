import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  position: relative;
  width: 100svw;
  height: 100svh;
  background-color: ${theme.colors.background};
  overflow: hidden;
`;

export const Cropper = styled.div`
  margin-top: -50%;
  margin-bottom: -10%;
  overflow: inherit;
`;
export const PlayerWrapper = styled.div<{ $isPaused: boolean }>`
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding-top: 128.25%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const VideoPlayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
`;

export const Play = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;

  background-color: ${theme.colors.purple};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.2;
  z-index: 2;
`;

export const Stop = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;

  background-color: ${theme.colors.purple};
  bottom: 10px;
  left: 10px;
  z-index: 2;
`;
