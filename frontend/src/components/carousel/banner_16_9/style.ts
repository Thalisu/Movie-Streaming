import styled from "styled-components";
import theme from "../../../styles/theme";

export const CarouselContainer = styled.ul<{
  ref: unknown;
}>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
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
  height: inherit;

  background-image: ${({ $right }) =>
    $right
      ? theme.colors.rightCarouselGradientLow
      : theme.colors.leftCarouselGradientLow};
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
  height: 80svh;
  &:hover ${CarouselController} {
    opacity: 1;
  }
`;

export const Banner = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 100svw;
  height: 100%;
  background-color: ${theme.colors.background};
  cursor: pointer;
`;
export const BannerImg = styled.img`
  position: relative;
  width: 100svw;
  height: 100%;
  opacity: 0;
  transition: opacity 0.3s;
  object-fit: cover;
  object-position: 50% 10%;
  &.loaded {
    opacity: 1;
  }
`;
