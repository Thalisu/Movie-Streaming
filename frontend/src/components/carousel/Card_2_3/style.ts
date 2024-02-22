import styled from "styled-components";
import theme from "../../../styles/theme";

export const CarouselContainer = styled.ul<{
  ref: unknown;
}>`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
  &.dragging {
    scroll-behavior: auto;
    cursor: grab;
    user-select: none;
  }
`;

export const Button = styled.img<{ $right?: boolean }>`
  opacity: 1;
  ${({ $right }) => $right && "transform: rotate(180deg)"}
`;

export const CarouselController = styled.button<{
  $right?: boolean;
  ref?: unknown;
}>`
  position: absolute;
  flex-shrink: 0;
  ${({ $right }) => ($right ? "right: 0" : "left 0")};

  z-index: 3;

  width: 5vw;
  height: 100%;

  background-image: ${({ $right }) =>
    $right
      ? theme.colors.rightCarouselGradient
      : theme.colors.leftCarouselGradient};
  opacity: 0;
  cursor: pointer;
  visibility: visible;

  &:hover ${Button} {
    transform: ${({ $right }) => $right && "rotate(180deg)"} scale(1.3);
  }

  &.start {
    visibility: hidden;
  }

  &.end {
    visibility: hidden;
  }
`;

export const VisibleArea = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  &:hover ${CarouselController} {
    opacity: 1;
  }
`;

export const Card = styled.li<{
  $first?: boolean;
  ref?: unknown;
}>`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 200px;
  aspect-ratio: 2/3;
  border: 3px solid transparent;
  ${({ $first }) => $first && "margin: 0 0 0 4rem"};
  border-radius: 25px;
  transition: outline 0.2s;
  cursor: pointer;
  &:hover {
    border: 3px solid ${theme.colors.purple};
  }
`;

export const CardImg = styled.img`
  border-radius: 25px;
  width: 100%;
  opacity: 1;
  transition: opacity 0.3s;
  &.loaded {
    opacity: 1;
  }
`;

export const FinalCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  aspect-ratio: 2/3;
  background-color: rgba(0, 0, 0, 0.3);
  border: 3px solid transparent;
  border-radius: 25px;
  transition: outline 0.2s;
  color: rgba(255, 255, 255, 0.5);
  font-size: 22;
  cursor: pointer;
  &:hover {
    border: 3px solid ${theme.colors.purple};
  }
`;

export const LoadingContainer = styled.div<{ $first?: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 200px;
  aspect-ratio: 2/3;
  background-color: ${theme.colors.background};

  ${({ $first }) => $first && "margin: 0 0 0 4rem"};
  transition: border 0.2s;
`;

export const LoadingCard = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(
    45deg,
    rgb(121, 0, 194),
    rgb(244, 101, 252),
    transparent,
    rgb(121, 0, 194),
    rgb(244, 101, 252)
  );
  animation: loading 2s ease-in-out 3s infinite;
  &::after {
    content: "";
    position: absolute;
    top: 6px;
    left: 6px;
    right: 6px;
    bottom: 6px;
    background-color: ${theme.colors.background};
    border-radius: 50%;
  }
  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LoadingSpan = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(
    45deg,
    rgb(121, 0, 194),
    rgb(244, 101, 252),
    transparent,
    rgb(121, 0, 194),
    rgb(244, 101, 252)
  );
  &:nth-child(1) {
    filter: blur(5px);
  }
  &:nth-child(2) {
    filter: blur(10px);
  }
  &:nth-child(3) {
    filter: blur(25px);
  }
  &:nth-child(4) {
    filter: blur(50px);
  }
`;
