import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  position: fixed;
  width: 100svw;
  height: 100svh;
  background-color: ${theme.colors.background};
  overflow: hidden;
  display: var(--isInPlayer);
  z-index: 1000;
`;

export const TopBarContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  gap: 2rem;
  z-index: 100;
  transition: opacity 0.3s;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: ${theme.colors.cascadeDownGradient};
    width: 100%;
    aspect-ratio: 9/1;
    z-index: -1;
    opacity: 0.7;
    pointer-events: none;
  }
`;

export const ExitButton = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

export const PlayerWrapper = styled.div`
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
  height: 124%;
  pointer-events: none;
  bottom: -12%;
  left: 50%;
  transform: translateX(-50%);
`;

export const VideoControlsContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  gap: 2rem;
  z-index: 100;
  opacity: 0;
  transition: opacity 0.3s;
  &.moved {
    opacity: 1;
  }
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    background: ${theme.colors.cascadeUpGradient};
    width: 100%;
    aspect-ratio: 4/1;
    z-index: -1;
    opacity: 0.7;
    pointer-events: none;
  }
`;
