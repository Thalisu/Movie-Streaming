import styled from "styled-components";
import theme from "../../styles/theme";

export const HeaderContainer = styled.header<{ $background: string }>`
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
  justify-content: space-between;
  align-items: center;
  width: 100svw;
  height: 60svh;
  background-color: ${theme.colors.purple};
  background-image: ${({ $background }) => `url(${$background})`};
  background-size: cover;
  background-position: center;
`;
