import styled from "styled-components";
import theme from "../../../../styles/theme";

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1100px;
`;

export const MenuList = styled.ul`
  display: flex;
  margin: 2.5rem 1.6rem;
  color: ${theme.colors.white};
  font-size: 1rem;
  font-weight: 500;
  gap: 40px;
`;

export const ProfileList = styled.ul`
  display: flex;
  align-items: center;
  margin: 2.5rem 1.6rem;
  color: ${theme.colors.white};
  font-size: 1rem;
  font-weight: 500;
  gap: 20px;
`;
