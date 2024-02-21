import styled from "styled-components";
import theme from "../../../styles/theme";
import { Link } from "react-router-dom";

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

export const CarouselContainer = styled.ul<{
  ref: unknown;
}>`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 20px;
  overflow-x: hidden;
  scroll-behavior: smooth;
  &.dragging {
    scroll-behavior: auto;
    cursor: grab;
    user-select: none;
  }
`;

export const Card = styled(Link)<{
  $first?: boolean;
  ref?: unknown;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 300px;
  aspect-ratio: 16 / 9;

  ${({ $first }) => $first && "margin: 0 0 0 4rem"};
  transition: border 0.2s;
  cursor: pointer;
`;

export const CardImg = styled.img`
  width: 100%;
  opacity: 0;
  transition: opacity 0.3s;
  border: 3px solid rgba(0, 0, 0, 0);
  &.loaded {
    opacity: 1;
  }
  &:hover {
    border: 3px solid ${theme.colors.purple};
  }
`;

export const FinalCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  aspect-ratio: 16 / 9;
  background-color: rgba(0, 0, 0, 0.3);
  border: 3px solid rgba(0, 0, 0, 0);
  transition: border 0.2s;
  color: rgba(255, 255, 255, 0.5);
  font-size: 22;
  cursor: pointer;
  &:hover {
    border: 3px solid ${theme.colors.purple};
  }
`;

export const Title = styled.p`
  color: ${theme.colors.white70};
  margin-top: 5px;
`;
