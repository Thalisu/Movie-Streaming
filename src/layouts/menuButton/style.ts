import styled from "styled-components";
import theme from "../../styles/theme";

const rowDefault = `
width: 25px;
height: 3px;
background-color: ${theme.colors.white70};
`;

export const Row1 = styled.div<{ $toggle: boolean }>`
  ${rowDefault}
  visibility: ${({ $toggle }) => $toggle && "hidden"};
`;

export const Row2 = styled.div<{ $toggle: boolean }>`
  ${rowDefault}
  transform: ${({ $toggle }) => $toggle && "rotate(45deg)"};
`;

export const Row3 = styled.div<{ $toggle: boolean }>`
  ${rowDefault}
  transform: ${({ $toggle }) => $toggle && "translateY(-8px) rotate(-45deg)"};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  gap: 5px;
  cursor: pointer;
  &:hover ${Row1} {
    background-color: ${theme.colors.white100};
  }
  &:hover ${Row2} {
    background-color: ${theme.colors.white100};
  }
  &:hover ${Row3} {
    background-color: ${theme.colors.white100};
  }
`;
