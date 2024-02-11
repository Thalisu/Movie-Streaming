import styled from "styled-components";
import theme from "../../styles/theme";

export const HeaderContainer = styled.header<{ $background: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60svh;
  background-color: ${theme.colors.purple};
  background-image: ${({ $background }) => `url(${$background})`};
  background-size: cover;
  background-position: center;
  box-shadow: inset 0px 70px 50px 0px rgba(0, 0, 0, 0.7);
`;
