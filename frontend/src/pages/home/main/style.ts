import styled from "styled-components";
import theme from "../../../styles/theme";

export const Container = styled.main`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100svw;
  height: 200svh;
  background-image: ${theme.colors.darkGradient};
  flex-shrink: 99;
  z-index: 0;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 200px;
    top: 0;
    z-index: 0;
    background: ${theme.colors.cascadeDownGradient};
  }
`;

export const Tag = styled.h4`
  margin: 2rem 1rem 1rem 4rem;
  font-size: 20;
  font-weight: 600;
  color: ${theme.colors.white100};
`;