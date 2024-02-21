import movieService from "../../../services/movieService";
import { Card, FinalCard, CardImg, Title } from "./style";
import { useQuery } from "@tanstack/react-query";
const Cards = ({ cardRef }: { cardRef: React.MutableRefObject<null> }) => {
  const { data: movies, isLoading } = useQuery({
    queryFn: () => movieService.getMovies(10, "upcoming"),
    queryKey: ["upcoming"],
  });

  const loadedImgFadeIn = (event: React.SyntheticEvent) => {
    event.currentTarget.classList.add("loaded");
  };

  if (isLoading) {
    return;
  }

  return (
    <>
      {movies?.map((movie, i) => {
        const itemProps = i === 0 ? { $first: true, ref: cardRef } : {};
        return (
          <Card
            to={`/player/${movie.video}`}
            key={movie.id}
            {...itemProps}
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
