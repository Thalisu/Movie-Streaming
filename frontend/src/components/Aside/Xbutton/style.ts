import styled from "styled-components";
import theme from "../../../styles/theme";

export const Row = styled.div<{ $left?: boolean }>`
  position: absolute;
  width: 15px;
  height: 3px;
  top: 50%;
  left: 50%;
  transform: ${({ $left }) =>
    $left
      ? "translate(-50%, -50%) rotate(45deg)"
      : "translate(-50%, -50%) rotate(-45deg)"};
  background-color: ${theme.colors.white70};
`;

export const Container = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0.5rem;
  right: 0.5rem;
  margin-left: 2rem;
  cursor: pointer;
  &:hover ${Row} {
    background-color: ${theme.colors.white100};
  }
`;
