import styled, { createGlobalStyle } from "styled-components";
import importFonts from "./fonts.module.css";
import resetCss from "./reset.module.css";
import theme from "./theme";

export const GlobalStyle = createGlobalStyle`
${importFonts}
${resetCss}
*{
 font-family: ${theme.fonts.poppins};
 text-rendering: optimizeSpeed;
}
html{
  overflow-x: hidden;
}
.removeScroll {
  height: 100svh;
  overflow: hidden;
}
`;

export const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100svw;
  max-width: 100svw;
`;
