import styled from "styled-components";
import theme from "../../../styles/theme";

export const HeaderContainer = styled.header`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  width: 100svw;
  height: 80svh;
  background-color: ${theme.colors.purple};
  background-size: cover;
  background-position: center;
  z-index: 0;
  flex-shrink: 1;
  overflow-x: hidden;
`;
