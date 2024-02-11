import styled from "styled-components";
import theme from "../../../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 100%;
  height: 100%;
  max-width: 1100px;
  margin: 2.5rem 0;
  gap: 30px;
`;

export const MovieInfoContainer = styled.div`
  margin: 0 1.6rem;
  color: ${theme.colors.white};
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
  margin: 0 1.6rem;
  gap: 10px;
`;
export const WatchButton = styled.button`
  width: 140px;
  height: 48px;
  color: ${theme.colors.white};
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
