import styled from "styled-components";
import theme from "../../../styles/theme";

export const Row = styled.div<{ $left?: boolean }>`
  position: absolute;
  width: 25px;
  height: 3px;
  top: 50%;
  right: 50%;
  left: 50%;
  bottom: 50%;
  transform: ${({ $left }) => ($left ? "rotate(45deg)" : "rotate(-45deg)")};
  background-color: ${theme.colors.white70};
`;

export const Container = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  gap: 5px;
  cursor: pointer;
  &:hover ${Row} {
    background-color: ${theme.colors.white100};
  }
`;
