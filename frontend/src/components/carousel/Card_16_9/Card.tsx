import movieService from "../../../services/movieService";
import {
  Card,
  FinalCard,
  CardImg,
  Title,
  LoadingCard,
  LoadingContainer,
  LoadingSpan,
} from "./style";
import { useQuery } from "@tanstack/react-query";
const Cards = ({ cardRef }: { cardRef: React.MutableRefObject<null> }) => {
  const { data: movies, isLoading } = useQuery({
    queryFn: () => movieService.getMovies(10, "upcoming"),
    queryKey: ["upcoming"],
  });

  const loadedImgFadeIn = (event: React.SyntheticEvent) => {
    event.currentTarget.classList.add("loaded");
  };

  const loadImgError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>,
    path: string
  ) => {
    event.currentTarget.src = "";
    event.currentTarget.src = path;
  };

  if (isLoading) {
    return Array.from({ length: 10 }, () => "c").map((_c, i) => {
      const itemProps = i === 0 ? { $first: true, ref: cardRef } : {};
      return (
        <LoadingContainer key={Math.random() * 9999} {...itemProps}>
          <LoadingCard>
            <LoadingSpan />
          </LoadingCard>
        </LoadingContainer>
      );
    });
  }

  return (
    <>
      {movies?.map((movie, i) => {
        const itemProps = i === 0 ? { $first: true, ref: cardRef } : {};
        if (movie.backdrop_path.includes("null")) return;
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
              onError={(event) => loadImgError(event, movie.backdrop_path)}
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
