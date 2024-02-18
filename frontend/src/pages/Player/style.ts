import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  position: relative;
  width: 100svw;
  height: 100svh;
  background-color: ${theme.colors.background};
  overflow: hidden;
`;

export const Play = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;

  background-color: ${theme.colors.purple};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

export const VideoPlayer = styled.div`
  width: 100svw;
  height: 100svh;
  pointer-events: none;
`;
