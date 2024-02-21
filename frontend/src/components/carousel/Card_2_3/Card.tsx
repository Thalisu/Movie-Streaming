import movieService from "../../../services/movieService";
import { useEffect, useState } from "react";
import { Movie } from "../../../types";
import { Card, FinalCard, CardImg } from "./style";
const Cards = ({ cardRef }: { cardRef: React.MutableRefObject<null> }) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    movieService.getMovies(29, "", "week").then((data) => setMovies(data));
  }, []);

  const loadedImgFadeIn = (event: React.SyntheticEvent) => {
    event.currentTarget.classList.add("loaded");
  };

  return (
    <>
      {movies.map((movie, i) => {
        const itemProps = i === 0 ? { $first: true, ref: cardRef } : {};
        return (
          <Card key={movie.id + i} {...itemProps} draggable="false">
            <CardImg
              src={movie.poster_path}
              draggable="false"
              loading="lazy"
              onLoad={(event) => loadedImgFadeIn(event)}
            />
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
