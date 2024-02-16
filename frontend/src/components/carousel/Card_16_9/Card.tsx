import movieService from "../../../services/movieService";
import { useEffect, useState } from "react";
import { Movie } from "../../../types";
import { Card, FinalCard, CardImg, Title } from "./style";
const Cards = ({ cardRef }: { cardRef: React.MutableRefObject<null> }) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    movieService.getMovies(10, "upcoming").then((data) => setMovies(data));
  }, []);

  const loadedImgFadeIn = (event: React.SyntheticEvent) => {
    event.currentTarget.classList.add("loaded");
  };

  return (
    <>
      {movies.map((movie, i) => {
        return (
          <Card
            key={movie.id}
            ref={cardRef}
            $first={i === 0 ? true : false}
            draggable="false"
          >
            <CardImg
              src={movie.backdrop_path}
              draggable="false"
              loading="lazy"
              onLoad={(event) => loadedImgFadeIn(event)}
            />
            <Title>{movie.title} - Trailer</Title>
          </Card>
        );
      })}
      <FinalCard>
        <span>See more</span>
      </FinalCard>
    </>
  );
};

export default Cards;
