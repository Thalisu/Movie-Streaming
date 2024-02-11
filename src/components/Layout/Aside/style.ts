import styled from "styled-components";
import theme from "../../../styles/theme";

export const Container = styled.div<{ $toggle: boolean }>`
  position: static;
  width: ${({ $toggle }) => ($toggle ? "30svw" : "0")};
  height: 100svh;
  background-color: ${theme.colors.background};
  transition: width 0.3s;
`;

export const SideBarButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  top: 15svh;
  left: calc(100% - 30px);
  background-color: ${theme.colors.background};
`;

export const ToggleMenu = styled.img<{ $toggle: boolean }>`
  transition: transform 0.2s;
  transform: ${({ $toggle }) =>
    $toggle ? "" : "rotate(180deg) translateX(-12px)"};
`;
