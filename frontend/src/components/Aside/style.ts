import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  position: fixed;
  display: flex;

  flex-direction: column;
  left: 0;

  width: 250px;
  height: 100svh;
  top: inherit;

  background-color: ${theme.colors.background};
  justify-content: space-between;

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

export const Menu = styled.div`
  margin: 0 0 2rem 2rem;
`;

export const LogoImg = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 0.5rem;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 2rem 3rem;
`;

export const LogoText = styled.h1`
  font-size: 22px;
  font-weight: bold;
  color: ${theme.colors.white100};
`;

export const Icon = styled.img`
  margin-right: 0.5rem;
  width: 24px;
  height: 24px;
  filter: brightness(0) invert(1);
  opacity: 0.7;
  &.current {
    opacity: 1;
  }
`;

export const MenuOption = styled.a`
  cursor: pointer;
  color: ${theme.colors.white70};
  &.current {
    font-weight: bold;
    color: ${theme.colors.white100};
  }
`;

export const Options = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  align-items: center;
  &:hover ${MenuOption} {
    color: ${theme.colors.white100};
  }
  &:hover ${Icon} {
    opacity: 1;
  }
`;

export const ToggleMenu = styled.input`
  display: none;
  &:checked ~ ${Cover} {
    visibility: visible;
  }

  &:not(:checked) + ${Container} {
    transform: translateX(-250px);
  }
`;
