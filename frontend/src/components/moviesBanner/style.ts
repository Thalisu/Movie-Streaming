import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: end;
  width: 100%;
  height: fit-content;
  margin: 2.5rem 0;
  z-index: 2;
  gap: 30px;
`;

export const MovieInfoContainer = styled.div`
  margin: 0 4rem;
  color: ${theme.colors.white100};
`;

export const MovieTitle = styled.h2`
  font-size: 3rem;
  font-weight: 600;
`;

export const MovieInfo = styled.span`
  font-size: 0.875rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  margin: 0 4rem;
  gap: 10px;
`;
export const WatchButton = styled.button`
  width: 140px;
  height: 48px;
  color: ${theme.colors.white100};
  border-radius: 15px;
  background-color: ${theme.colors.purple};
`;
export const LikeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 15px;
  background-image: ${theme.colors.whiteLinearGradient};
`;
