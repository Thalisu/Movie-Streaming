import movieService from "../../../services/movieService";
import { useEffect, useState } from "react";
import { Movie } from "../../../types";
import { Card32, FinalCard32, CardImg32 } from "./style";
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
        return i === 0 ? (
          <Card32 key={movie.id} ref={cardRef} $first={true} draggable="false">
            <CardImg32
              src={movie.poster_path}
              draggable="false"
              loading="lazy"
              onLoad={(event) => loadedImgFadeIn(event)}
            />
          </Card32>
        ) : (
          <Card32 key={movie.id} draggable="false">
            <CardImg32
              src={movie.poster_path}
              draggable="false"
              loading="lazy"
              onLoad={(event) => loadedImgFadeIn(event)}
            />
          </Card32>
        );
      })}
      <FinalCard32>
        <span>See more</span>
      </FinalCard32>
    </>
  );
};

export default Cards;
