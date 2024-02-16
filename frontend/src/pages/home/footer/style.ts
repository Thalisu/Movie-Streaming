import styled from "styled-components";
import theme from "../../../styles/theme";

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  height: 30svh;
  width: 100%;
  background: ${theme.colors.darkGradient};
`;

export const Span = styled.span`
  color: #fff;
  margin-bottom: 5px;
`;

export const TmdbLogo = styled.img`
  width: 30%;
  margin-bottom: 1rem;
`;
