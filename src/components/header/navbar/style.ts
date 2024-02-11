import styled from "styled-components";
import theme from "../../../styles/theme";
import MenuButton from "../../../layouts/menuButton/menuButton";

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  margin: 2.5rem 4rem;
  color: ${theme.colors.white70};
  font-size: 1rem;
  font-weight: 500;
  gap: 40px;
`;

export const Anchor = styled.a`
  cursor: pointer;
  &:hover {
    color: ${theme.colors.white100};
  }
`;

export const ProfileList = styled.ul`
  display: flex;
  align-items: center;
  margin: 2.5rem 4rem;
  color: ${theme.colors.white100};
  font-size: 1rem;
  font-weight: 500;
  gap: 20px;
`;

export const Icons = styled.img`
  cursor: pointer;
`;

export const ToggleMenu = styled(MenuButton)`
  cursor: pointer;
`;
