import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  position: sticky;
  top: 0px;
  flex-shrink: 0;

  width: 0;
  transition: width 0.3s;

  height: 100svh;

  background-color: ${theme.colors.background};
  box-shadow: inset -20px 0px 30px 0px rgba(0, 0, 0, 0.05);
`;

export const ToggleMenu = styled.input`
  display: none;
  &:checked + ${Container} {
    width: 270px;
  }
`;
