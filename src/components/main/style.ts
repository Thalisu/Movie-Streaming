import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 200svh;
  background-image: ${theme.colors.darkGradient};
`;
