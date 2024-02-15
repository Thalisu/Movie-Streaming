import styled from "styled-components";
import theme from "../../styles/theme";

export const CarouselContainer = styled.ul<{
  ref: unknown;
}>`
  display: flex;
  align-items: center;
  gap: 20px;
  overflow-x: hidden;
  scroll-behavior: smooth;
  &.dragging {
    scroll-behavior: auto;
    cursor: grab;
    user-select: none;
  }
`;

export const Card = styled.li<{
  $first?: boolean;
  ref?: unknown;
}>`
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 200px;
  height: 300px;
  background-color: ${theme.colors.background};
  border: 1px solid ${theme.colors.gray};
  ${({ $first }) => $first && "margin: 0 0 0 4rem"};
  border-radius: 25px;
  transition: outline 0.2s;
  cursor: pointer;
  &:hover {
    outline: 3px solid ${theme.colors.purple};
  }
`;

export const CardImg = styled.img`
  border-radius: 25px;
  opacity: 0;
  transition: opacity 0.2s;
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
  min-width: 200px;
  height: 300px;
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid ${theme.colors.gray};
  border-radius: 25px;
  transition: outline 0.2s;
  color: rgba(255, 255, 255, 0.5);
  font-size: 22;
  cursor: pointer;
  &:hover {
    outline: 3px solid ${theme.colors.purple};
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
  height: 301px;

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
  display: flex;
  align-items: center;
  width: 100%;
  height: fit-content;
  &:hover ${CarouselController} {
    opacity: 1;
  }
`;
