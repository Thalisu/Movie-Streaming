import styled from "styled-components";
import theme from "../../styles/theme";

export const Row = styled.div`
  width: 25px;
  height: 3px;
  background-color: ${theme.colors.white70};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  &:hover ${Row} {
    background-color: ${theme.colors.white100};
  }
`;
