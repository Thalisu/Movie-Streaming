import {
  Container,
  ButtonsContainer,
  WatchButton,
  LikeButton,
  MovieInfoContainer,
  MovieTitle,
  MovieInfo,
} from "./style";

import { Movie } from "../../../../types";

import heart from "../../../../assets/icons/heart.svg";

const TrendingMovie = ({ movie }: { movie: Movie }) => (
  <Container>
    <MovieInfoContainer>
      <MovieTitle>{movie.name}</MovieTitle>
      <MovieInfo>
        {movie.launch} | {movie.gender} | {movie.seasons} Season
      </MovieInfo>
    </MovieInfoContainer>
    <ButtonsContainer>
      <WatchButton>Watch now</WatchButton>
      <LikeButton>
        <img src={heart} alt="Like" />
      </LikeButton>
    </ButtonsContainer>
  </Container>
);

export default TrendingMovie;
