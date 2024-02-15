import styled from "styled-components";
import theme from "../../styles/theme";

export const HeaderContainer = styled.div<{ $background: string }>`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  width: 100svw;
  height: 80svh;
  background-color: ${theme.colors.purple};
  background-image: ${({ $background }) => `url(${$background})`};
  background-size: cover;
  background-position: center;
  z-index: 0;
  flex-shrink: 1;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 200px;
    bottom: 0;
    z-index: 1;
    background: linear-gradient(
      360deg,
      rgba(0, 0, 0, 1) 30%,
      rgba(0, 0, 0, 0) 100%
    );
  }
`;
