import styled from "styled-components";
import theme from "../../../styles/theme";

export const TimelineBar = styled.div`
  position: relative;
  width: 100%;
  height: 3px;
  transition: height 0.15s;
  background-color: rgba(100, 100, 100, 0.5);
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: calc(100% - var(--preview-position) * 100%);
    background-color: rgb(150, 150, 150);
    display: none;
  }
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: calc(100% - var(--progress-position) * 100%);
    background-color: ${theme.colors.purple};
  }
`;

export const ThumbIndicator = styled.div`
  position: absolute;
  transform: translateX(-50%) scale(0);
  height: 200%;
  top: -50%;
  left: calc(var(--progress-position) * 100%);
  background-color: ${theme.colors.purple};
  border-radius: 50%;
  transition: transform 150ms ease-in-out;
  aspect-ratio: 1 / 1;
`;

export const TimelineContainer = styled.div`
  display: flex;
  align-items: end;
  height: 10px;
  width: 100%;
  margin-inline: 0.5rem;
  &:hover {
    height: 30px;
  }
  &:hover ${TimelineBar} {
    height: 10px;
  }

  &:hover ${TimelineBar}::before {
    display: block;
  }

  &:hover ${ThumbIndicator} {
    transform: translateX(-50%) scale(1);
  }
`;
