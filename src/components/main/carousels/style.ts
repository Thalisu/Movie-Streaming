import styled from "styled-components";
import theme from "../../../styles/theme";

export const CarouselContainer = styled.ul<{ ref: unknown }>`
  display: flex;
  align-items: center;
  gap: 20px;
  overflow-x: hidden;
`;

export const Card = styled.li<{ $first?: boolean }>`
  display: flex;
  flex-direction: row;
  width: 250px;
  min-width: 250px;
  height: 300px;
  background-color: ${theme.colors.purple};
  border: 1px solid ${theme.colors.gray};
  ${({ $first }) => $first && "margin: 0 0 0 4rem"};
  border-radius: 25px;
  user-select: none;
`;

export const Button = styled.img<{ $right?: boolean }>`
  opacity: 1;
  ${({ $right }) => $right && "transform: rotate(180deg)"}
`;

export const CarouselController = styled.button<{ $right?: boolean }>`
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
  &:hover ${Button} {
    transform: ${({ $right }) => $right && "rotate(180deg)"} scale(1.3);
  }
`;

export const VisibleArea = styled.div`
  display: flex;
  align-items: center;
  width: 100svw;
  height: fit-content;
  &:hover ${CarouselController} {
    opacity: 1;
  }
`;
