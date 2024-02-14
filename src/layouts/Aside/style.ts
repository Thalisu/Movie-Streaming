import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  position: fixed;

  flex-direction: column;
  left: 0;

  width: 250px;
  height: 100svh;
  top: inherit;

  background-color: ${theme.colors.background};

  z-index: 50;
  transition: transform 0.3s;
`;

export const Cover = styled.div`
  position: fixed;
  visibility: hidden;
  left: 0;
  width: 100svw;
  height: 100svh;
  z-index: 49;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Menu = styled.div``;

export const ToggleMenu = styled.input`
  display: none;
  &:checked ~ ${Cover} {
    visibility: visible;
  }

  &:not(:checked) + ${Container} {
    transform: translateX(-250px);
  }
`;
