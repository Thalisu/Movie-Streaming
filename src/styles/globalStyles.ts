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
`;

export const FlexBox = styled.div`
  display: flex;
`;
