import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  position: static;
  width: 0;
  height: 100svh;
  background-color: ${theme.colors.background};
  transition: width 0.3s;
`;

export const ToggleMenu = styled.input`
  display: none;
`;
