import {
  Container,
  ButtonsContainer,
  WatchButton,
  LikeButton,
  MovieInfoContainer,
  MovieTitle,
  MovieInfo,
} from "./style";

import heart from "/assets/heart.svg?url";
import { Movie } from "../../types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TrendingMovie = ({ movie }: { movie: Movie }) => (
  <Container>
    <MovieInfoContainer>
      <MovieTitle>{movie.title}</MovieTitle>
      <MovieInfo>
        {movie.release_date.substring(0, 4)} |{" "}
        {movie.genres.map((g, i) => (i !== 0 ? `, ${g}` : `${g}`))}
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
